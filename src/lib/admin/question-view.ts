// Turns a stored question result (written by the student's browser, so untrusted) into HTML that
// is safe to render in the admin UI. Question-bank HTML is trusted; anything else is escaped.
import type { Question, QuestionResult } from '@/lib/types';
import type { QuestionView } from './types';

export type QuestionBank = ReadonlyMap<number, Question>;

const ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export const escapeHtml = (text: string) => text.replace(/[&<>"']/g, (c) => ESCAPES[c]);

// Untrusted HTML-ish text -> plain text (line breaks kept) -> escaped, pre-wrapped HTML.
export const textToHtml = (text: string) => {
  const plain = text
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(div|p|li)>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim();
  return `<span class="whitespace-pre-wrap">${escapeHtml(plain)}</span>`;
};

const PLAIN_TEXT_TYPES = new Set(['fill_in_blank', 'ordering', 'true_false']);

const valueToText = (value: unknown) => (typeof value === 'string' ? value : JSON.stringify(value) ?? '');

// One answer value (string, list or key/value object) as safe HTML.
// Strings that are exact bank options are trusted bank HTML; everything else is escaped.
export const answerToHtml = (answer: unknown, type: string, trustedOptions: ReadonlySet<string>): string | null => {
  if (answer === null || answer === undefined || answer === '') return null;
  const item = (value: unknown) => {
    const text = valueToText(value);
    if (!PLAIN_TEXT_TYPES.has(type) && trustedOptions.has(text)) return text;
    return `<span class="whitespace-pre-wrap">${escapeHtml(text)}</span>`;
  };
  if (Array.isArray(answer)) return answer.map((value) => `<div>${item(value)}</div>`).join('');
  if (typeof answer === 'object') {
    return Object.entries(answer as Record<string, unknown>)
      .map(([key, value]) => `<div><span class="font-medium">${escapeHtml(key.replace(/_/g, ' '))}:</span> ${item(value)}</div>`)
      .join('');
  }
  return item(answer);
};

const sameAnswer = (option: string, correct: unknown) =>
  Array.isArray(correct) ? correct.includes(option) : correct === option;

export const buildQuestionView = (detail: Partial<QuestionResult>, bank: QuestionBank): QuestionView => {
  const questionId = typeof detail.questionId === 'number' ? detail.questionId : 0;
  const type = typeof detail.type === 'string' ? detail.type : 'unknown';
  const storedQuestion = typeof detail.question === 'string' ? detail.question : '';
  const bankQuestion = bank.get(questionId);
  // Only trust the bank when the stored text is the same question (the bank has been replaced before).
  const fromBank = bankQuestion !== undefined && bankQuestion.question === storedQuestion;
  const bankOptions = fromBank && Array.isArray(bankQuestion.options) ? bankQuestion.options : null;
  const trustedOptions = new Set(bankOptions ?? []);
  const correctAnswer = detail.correctAnswer;

  return {
    questionId,
    domain: typeof detail.domain === 'string' ? detail.domain : '',
    type,
    isCorrect: detail.isCorrect === true,
    questionHtml: fromBank ? bankQuestion.question : textToHtml(storedQuestion),
    options: bankOptions
      ? bankOptions.map((option) => ({
          html: PLAIN_TEXT_TYPES.has(type) ? `<span class="whitespace-pre-wrap">${escapeHtml(option)}</span>` : option,
          correct: sameAnswer(option, correctAnswer),
        }))
      : null,
    correctAnswerHtml: answerToHtml(correctAnswer, type, trustedOptions) ?? '',
    userAnswerHtml: answerToHtml(detail.userAnswer, type, trustedOptions),
    explanationHtml: fromBank
      ? bankQuestion.explanation || null
      : typeof detail.explanation === 'string' && detail.explanation
        ? textToHtml(detail.explanation)
        : null,
  };
};

let defaultBank: QuestionBank | null = null;

export const getQuestionBank = async (): Promise<QuestionBank> => {
  if (!defaultBank) {
    const { quizQuestions } = await import('@/lib/questions');
    defaultBank = new Map(quizQuestions.map((q) => [q.id, q]));
  }
  return defaultBank;
};
