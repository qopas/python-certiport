// What a learner may see of a question during a test: no answer key, no explanation.
import type { Question } from '@/lib/types';

export type PublicQuestion = Omit<Question, 'answer' | 'explanation'>;

// Unbiased Fisher-Yates; randomInt(n) returns an integer in [0, n).
export const shuffle = <T,>(items: readonly T[], randomInt: (n: number) => number): T[] => {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

// Ordering options are stored in the correct order, so they are shuffled before they leave the server.
export const toPublicQuestion = (question: Question, randomInt: (n: number) => number): PublicQuestion => ({
  id: question.id,
  domain: question.domain,
  type: question.type,
  question: question.question,
  options: question.type === 'ordering' && Array.isArray(question.options) ? shuffle(question.options, randomInt) : question.options,
});
