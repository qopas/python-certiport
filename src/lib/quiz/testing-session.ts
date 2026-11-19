// Server only. A testing attempt lives in quiz_sessions from start to submit: the questions with
// their answer keys stay on the server, the browser gets them without keys, and the server grades.
import { randomBytes, randomInt } from 'node:crypto';
import { query, withTransaction } from '@/lib/db';
import { HttpError, forbidden } from '@/lib/api/errors';
import { quizQuestions } from '@/lib/questions';
import { getQuizModeConfig } from '@/lib/quiz-mode-config';
import type { Question } from '@/lib/types';
import { gradeAnswers, type Answer } from './grade';
import { shuffle, toPublicQuestion, type PublicQuestion } from './public-question';

export const QUESTIONS_PER_QUIZ = 30;
export const TESTING_TIME_LIMIT_SECONDS = getQuizModeConfig('testing').timeLimit ?? 50 * 60;
// Late submissions (slow network, sleeping laptop) are still accepted for this long after the limit.
const SUBMIT_GRACE_SECONDS = 10 * 60;

export interface StartedTest {
  sessionId: string;
  questions: PublicQuestion[];
  timeLimit: number;
  startedAt: string;
}

export const pickQuestions = (count = QUESTIONS_PER_QUIZ): Question[] => shuffle(quizQuestions, randomInt).slice(0, count);

export const startTestingSession = async (userId: number): Promise<StartedTest> => {
  const questions = pickQuestions();
  const sessionId = randomBytes(24).toString('base64url');
  // Abandoned attempts are useless after their grace period; drop them here instead of a cron job.
  await query(`DELETE FROM quiz_sessions WHERE started_at < (now() AT TIME ZONE 'UTC') - interval '1 day'`);
  const { rows } = await query<{ started_at: Date }>(
    `INSERT INTO quiz_sessions (user_id, session_token, questions_json, time_remaining, started_at, updated_at)
     VALUES ($1, $2, $3, $4, now() AT TIME ZONE 'UTC', now() AT TIME ZONE 'UTC')
     RETURNING (started_at AT TIME ZONE 'UTC') AS started_at`,
    [userId, sessionId, JSON.stringify(questions), TESTING_TIME_LIMIT_SECONDS],
  );
  return {
    sessionId,
    questions: questions.map((q) => toPublicQuestion(q, randomInt)),
    timeLimit: TESTING_TIME_LIMIT_SECONDS,
    startedAt: rows[0].started_at.toISOString(),
  };
};

export interface TestResult {
  submissionId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  totalTime: number;
}

// Grades and records one attempt. The session row is deleted in the same transaction, so an
// attempt can be submitted exactly once.
export const submitTestingSession = async (userId: number, sessionId: string, answers: Answer[]): Promise<TestResult> =>
  withTransaction(async (tx) => {
    const session = await tx.query<{ questions_json: Question[]; started_at: Date; elapsed: number }>(
      `DELETE FROM quiz_sessions WHERE session_token = $1 AND user_id = $2
       RETURNING questions_json, (started_at AT TIME ZONE 'UTC') AS started_at,
                 extract(epoch FROM (now() AT TIME ZONE 'UTC') - started_at)::int AS elapsed`,
      [sessionId, userId],
    );
    if (session.rowCount === 0) throw new HttpError(409, 'This test was already submitted or has expired.');
    const { questions_json: questions, started_at: startedAt, elapsed } = session.rows[0];
    if (elapsed > TESTING_TIME_LIMIT_SECONDS + SUBMIT_GRACE_SECONDS) {
      throw new HttpError(409, 'The time for this test ran out before it was submitted.');
    }
    if (answers.length !== questions.length) throw new HttpError(400, `Expected ${questions.length} answers`);

    const user = await tx.query<{ class_id: number | null }>('SELECT class_id FROM users WHERE id = $1 AND is_active = true', [userId]);
    if (user.rowCount === 0) throw forbidden('Your account is not active');

    const graded = gradeAnswers(questions, answers);
    const totalTime = Math.min(Math.max(elapsed, 0), TESTING_TIME_LIMIT_SECONDS);
    const submissionId = `test-${userId}-${Date.now()}`;
    await tx.query(
      `INSERT INTO quiz_submissions (user_id, class_id, submission_id, score, total_questions, percentage, total_time,
                                     started_at, completed_at, questions_and_answers)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8::timestamptz AT TIME ZONE 'UTC', now() AT TIME ZONE 'UTC', $9)`,
      [
        userId,
        user.rows[0].class_id,
        submissionId,
        graded.score,
        graded.totalQuestions,
        graded.percentage,
        totalTime,
        startedAt.toISOString(),
        JSON.stringify({ sessionId, mode: 'testing', answers, questionDetails: graded.questionDetails }),
      ],
    );
    await tx.query('UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = $1', [userId]);
    return { submissionId, score: graded.score, totalQuestions: graded.totalQuestions, percentage: graded.percentage, totalTime };
  });
