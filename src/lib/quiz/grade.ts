// Server-side grading. Same rules the testing page used in the browser, so scores do not change,
// except that duplicate picks no longer count as a full multiple-select answer.
import type { Question, QuestionResult } from '@/lib/types';

export type Answer = string | string[] | Record<string, string> | null;

const sameKeyValues = (user: unknown, correct: Record<string, unknown>) => {
  if (typeof user !== 'object' || user === null || Array.isArray(user)) return false;
  const userEntries = Object.entries(user as Record<string, unknown>);
  return userEntries.length === Object.keys(correct).length && userEntries.every(([key, value]) => value === correct[key]);
};

export const isAnswerCorrect = (userAnswer: Answer, question: Pick<Question, 'type' | 'answer'>): boolean => {
  const correct = question.answer;
  switch (question.type) {
    case 'ordering':
      return Array.isArray(userAnswer) && Array.isArray(correct) && userAnswer.length === correct.length && userAnswer.every((v, i) => v === correct[i]);
    case 'fill_in_blank':
      return typeof correct === 'object' && !Array.isArray(correct) && sameKeyValues(userAnswer, correct);
    case 'multiple_select':
    case 'multiple_response': {
      if (!Array.isArray(userAnswer) || !Array.isArray(correct)) return false;
      const picked = new Set(userAnswer);
      return picked.size === userAnswer.length && picked.size === correct.length && correct.every((c) => picked.has(c));
    }
    case 'true_false':
      if (typeof correct === 'object' && !Array.isArray(correct)) return sameKeyValues(userAnswer, correct);
      return userAnswer === correct;
    default:
      return userAnswer === correct;
  }
};

export interface GradeResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  questionDetails: QuestionResult[];
}

// answers[i] belongs to questions[i].
export const gradeAnswers = (questions: Question[], answers: Answer[]): GradeResult => {
  const questionDetails = questions.map((question, i): QuestionResult => {
    const userAnswer = answers[i] ?? null;
    return {
      questionId: question.id,
      domain: question.domain,
      type: question.type,
      question: question.question,
      userAnswer,
      correctAnswer: question.answer,
      isCorrect: isAnswerCorrect(userAnswer, question),
      explanation: question.explanation,
    };
  });
  const score = questionDetails.filter((d) => d.isCorrect).length;
  const totalQuestions = questions.length;
  return { score, totalQuestions, percentage: totalQuestions ? Math.round((score / totalQuestions) * 100) : 0, questionDetails };
};

const MAX_TEXT = 2000;
const MAX_ITEMS = 50;
const isText = (v: unknown): v is string => typeof v === 'string' && v.length <= MAX_TEXT;

// Validates one submitted answer's shape; returns null for anything malformed.
export const parseAnswer = (value: unknown): Answer => {
  if (value === null || value === undefined || value === '') return null;
  if (isText(value)) return value;
  if (Array.isArray(value)) return value.length <= MAX_ITEMS && value.every(isText) ? (value as string[]) : null;
  if (typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);
    return entries.length <= MAX_ITEMS && entries.every(([k, v]) => k.length <= 200 && isText(v)) ? (value as Record<string, string>) : null;
  }
  return null;
};
