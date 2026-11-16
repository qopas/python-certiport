// Server only: admin queries over quiz_submissions.
import { query } from '@/lib/db';
import { notFound } from '@/lib/api/errors';
import type { Pagination, SubmissionFilters } from '@/lib/api/params';
import type { QuestionResult } from '@/lib/types';
import { buildQuestionView, getQuestionBank } from './question-view';
import { SUBMISSION_COLUMNS, SUBMISSION_FROM, submissionWhere } from './submission-sql';
import type { AdminSummary, QuestionAnalytics, SubmissionDetail, SubmissionList, SubmissionRow, SubmissionStats } from './types';

interface SubmissionDbRow {
  id: number;
  full_name: string;
  email: string;
  class_id: number | null;
  class_name: string | null;
  score: number;
  total_questions: number;
  percentage: number;
  total_time: number;
  completed_at: Date | null;
}

const toRow = (r: SubmissionDbRow): SubmissionRow => ({
  id: r.id,
  userName: r.full_name,
  userEmail: r.email,
  classId: r.class_id,
  className: r.class_name,
  score: r.score,
  totalQuestions: r.total_questions,
  percentage: r.percentage,
  timeSpent: r.total_time,
  completedAt: r.completed_at ? r.completed_at.toISOString() : '',
});

export const getAdminSummary = async (): Promise<AdminSummary> => {
  const { rows } = await query<AdminSummary>(
    `SELECT (SELECT count(*)::int FROM users WHERE role = 'user') AS "totalStudents",
            (SELECT count(*)::int FROM quiz_submissions) AS "totalSubmissions",
            (SELECT coalesce(round(avg(percentage)), 0)::int FROM quiz_submissions) AS "averageScore",
            (SELECT count(*)::int FROM classes) AS "totalClasses"`,
  );
  return rows[0];
};

export const getSubmissionStats = async (filters: SubmissionFilters): Promise<SubmissionStats> => {
  const where = submissionWhere(filters);
  const { rows } = await query<SubmissionStats>(
    `SELECT count(*)::int AS "count",
            coalesce(round(avg(qs.percentage)), 0)::int AS "averageScore",
            coalesce(round(avg(qs.total_time)), 0)::int AS "averageTime",
            coalesce(max(qs.percentage), 0)::float8 AS "highestScore"
     ${SUBMISSION_FROM} ${where.sql}`,
    where.params,
  );
  return rows[0];
};

export const listSubmissions = async (filters: SubmissionFilters, page: Pagination): Promise<SubmissionList> => {
  const where = submissionWhere(filters);
  const n = where.params.length;
  const [list, stats] = await Promise.all([
    query<SubmissionDbRow>(
      `SELECT ${SUBMISSION_COLUMNS} ${SUBMISSION_FROM} ${where.sql}
       ORDER BY qs.completed_at DESC, qs.id DESC
       LIMIT $${n + 1} OFFSET $${n + 2}`,
      [...where.params, page.pageSize, page.offset],
    ),
    getSubmissionStats(filters),
  ]);
  return { items: list.rows.map(toRow), total: stats.count, page: page.page, pageSize: page.pageSize, stats };
};

const asDetails = (value: unknown): Partial<QuestionResult>[] =>
  Array.isArray(value) ? value.filter((d): d is Partial<QuestionResult> => typeof d === 'object' && d !== null) : [];

export const getSubmissionDetail = async (id: number): Promise<SubmissionDetail> => {
  const { rows } = await query<SubmissionDbRow & { details: unknown }>(
    `SELECT ${SUBMISSION_COLUMNS}, qs.questions_and_answers->'questionDetails' AS details
     ${SUBMISSION_FROM} WHERE qs.id = $1`,
    [id],
  );
  if (rows.length === 0) throw notFound('Submission not found');
  const bank = await getQuestionBank();
  return { ...toRow(rows[0]), questions: asDetails(rows[0].details).map((d) => buildQuestionView(d, bank)) };
};

const EXPORT_LIMIT = 50_000;

export const listSubmissionsForExport = async (filters: SubmissionFilters): Promise<SubmissionRow[]> => {
  const where = submissionWhere(filters);
  const { rows } = await query<SubmissionDbRow>(
    `SELECT ${SUBMISSION_COLUMNS} ${SUBMISSION_FROM} ${where.sql}
     ORDER BY qs.completed_at DESC, qs.id DESC LIMIT ${EXPORT_LIMIT}`,
    where.params,
  );
  return rows.map(toRow);
};

// Deletes the submissions of students currently in classId, or every submission when null.
export const clearSubmissions = async (classId: number | null): Promise<number> => {
  const result =
    classId === null
      ? await query('DELETE FROM quiz_submissions')
      : await query('DELETE FROM quiz_submissions WHERE user_id IN (SELECT id FROM users WHERE class_id = $1)', [classId]);
  return result.rowCount ?? 0;
};

const ANALYTICS_QUESTIONS = 10;
const WRONG_ANSWERS_PER_QUESTION = 8;
// Questions answered fewer times than this rank after the others (one wrong answer is not "0% hard").
const MIN_RANKED_ATTEMPTS = 3;

interface AnalyticsDbRow {
  qid: number;
  attempts: number;
  correct: number;
  sample: Partial<QuestionResult>;
  wrong: { userName: string; userAnswer: unknown }[];
}

// The questions with the lowest success rate, aggregated in Postgres over the filtered submissions.
// Questions are grouped by id and text because the bank has been replaced before.
export const getQuestionAnalytics = async (filters: SubmissionFilters): Promise<QuestionAnalytics> => {
  const where = submissionWhere(filters);
  const n = where.params.length;
  const [analyzed, hardest] = await Promise.all([
    query<{ count: number }>(`SELECT count(*)::int AS count ${SUBMISSION_FROM} ${where.sql}`, where.params),
    query<AnalyticsDbRow>(
      `WITH items AS (
         SELECT qs.id AS submission_id, u.full_name, e.detail,
                (e.detail->>'questionId')::int AS qid,
                md5(coalesce(e.detail->>'question', '')) AS qhash,
                coalesce(e.detail->>'isCorrect' = 'true', false) AS ok
         ${SUBMISSION_FROM}
         CROSS JOIN LATERAL jsonb_array_elements(
           CASE WHEN jsonb_typeof(qs.questions_and_answers->'questionDetails') = 'array'
                THEN qs.questions_and_answers->'questionDetails' ELSE '[]'::jsonb END
         ) AS e(detail)
         ${where.sql ? `${where.sql} AND` : 'WHERE'} jsonb_typeof(e.detail->'questionId') = 'number'
       ),
       hardest AS (
         SELECT qid, qhash, count(*)::int AS attempts, count(*) FILTER (WHERE ok)::int AS correct
         FROM items GROUP BY qid, qhash
         ORDER BY count(*) < ${MIN_RANKED_ATTEMPTS}, count(*) FILTER (WHERE ok)::float8 / count(*), count(*) DESC, qid
         LIMIT $${n + 1}
       )
       SELECT h.qid, h.attempts, h.correct,
              (SELECT i.detail FROM items i WHERE i.qid = h.qid AND i.qhash = h.qhash LIMIT 1) AS sample,
              coalesce((
                SELECT jsonb_agg(jsonb_build_object('userName', w.full_name, 'userAnswer', w.detail->'userAnswer'))
                FROM (SELECT i.full_name, i.detail FROM items i
                      WHERE i.qid = h.qid AND i.qhash = h.qhash AND NOT i.ok
                      ORDER BY i.submission_id DESC LIMIT $${n + 2}) w
              ), '[]'::jsonb) AS wrong
       FROM hardest h
       ORDER BY h.attempts < ${MIN_RANKED_ATTEMPTS}, h.correct::float8 / h.attempts, h.attempts DESC, h.qid`,
      [...where.params, ANALYTICS_QUESTIONS, WRONG_ANSWERS_PER_QUESTION],
    ),
  ]);
  const bank = await getQuestionBank();
  return {
    submissionsAnalyzed: analyzed.rows[0].count,
    questions: hardest.rows.map((r) => {
      const view = buildQuestionView(r.sample, bank);
      return {
        questionId: r.qid,
        domain: view.domain,
        totalAttempts: r.attempts,
        correctAttempts: r.correct,
        successRate: Math.round((r.correct / r.attempts) * 100),
        view,
        wrongAnswerCount: r.attempts - r.correct,
        wrongAnswers: r.wrong.map((w) => ({
          userName: w.userName,
          userAnswerHtml: buildQuestionView({ ...r.sample, userAnswer: w.userAnswer as QuestionResult['userAnswer'] }, bank)
            .userAnswerHtml,
        })),
      };
    }),
  };
};
