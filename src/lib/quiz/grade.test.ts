import { describe, expect, it } from 'vitest';
import { quizQuestions } from '@/lib/questions';
import type { Question } from '@/lib/types';
import { gradeAnswers, isAnswerCorrect, parseAnswer, type Answer } from './grade';
import { shuffle, toPublicQuestion } from './public-question';

// The comparison the testing page ran in the browser before grading moved to the server.
/* eslint-disable @typescript-eslint/no-explicit-any */
const legacyCompare = (userAnswer: any, correctAnswer: any, questionType: string) => {
  if (questionType === 'ordering') {
    if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) return false;
    return JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
  }
  if (questionType === 'fill_in_blank') {
    if (typeof userAnswer !== 'object' || typeof correctAnswer !== 'object') return false;
    const userKeys = Object.keys(userAnswer || {});
    if (userKeys.length !== Object.keys(correctAnswer || {}).length) return false;
    return userKeys.every((key) => userAnswer[key] === correctAnswer[key]);
  }
  if (questionType === 'true_false' && typeof correctAnswer === 'object' && !Array.isArray(correctAnswer)) {
    if (typeof userAnswer !== 'object' || !userAnswer) return false;
    const userKeys = Object.keys(userAnswer);
    if (userKeys.length !== Object.keys(correctAnswer).length) return false;
    return userKeys.every((key) => userAnswer[key] === correctAnswer[key]);
  }
  if (questionType === 'multiple_response' || questionType === 'multiple_select') {
    if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) return false;
    return userAnswer.length === correctAnswer.length && userAnswer.every((ans) => correctAnswer.includes(ans));
  }
  return userAnswer === correctAnswer;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const wrongAnswerFor = (q: Question): Answer => {
  if (q.type === 'multiple_choice') return (q.options as string[]).find((o) => o !== q.answer) ?? 'x';
  if (q.type === 'multiple_select') return [(q.options as string[])[0], 'not an option'];
  if (q.type === 'ordering') return [...(q.answer as string[])].reverse();
  if (q.type === 'fill_in_blank' || q.type === 'true_false') {
    const [first, ...rest] = Object.entries(q.answer as Record<string, string>);
    return Object.fromEntries([[first[0], `${first[1]} (wrong)`], ...rest]);
  }
  return 'x';
};

describe('isAnswerCorrect matches the old browser grader on the whole bank', () => {
  it.each(quizQuestions.map((q) => [q.id, q.type, q] as const))('question %i (%s)', (_id, _type, q) => {
    for (const answer of [q.answer as Answer, wrongAnswerFor(q), null, '', [], {}]) {
      expect(isAnswerCorrect(answer, q)).toBe(legacyCompare(answer, q.answer, q.type));
    }
    expect(isAnswerCorrect(q.answer as Answer, q)).toBe(true);
  });
});

describe('isAnswerCorrect edge cases', () => {
  const ms: Pick<Question, 'type' | 'answer'> = { type: 'multiple_select', answer: ['A', 'B'] };
  it('rejects duplicate picks in multiple select (the browser grader accepted them)', () => {
    expect(isAnswerCorrect(['A', 'A'], ms)).toBe(false);
    expect(isAnswerCorrect(['B', 'A'], ms)).toBe(true);
  });
  it('requires exact order for ordering', () => {
    expect(isAnswerCorrect(['a', 'b'], { type: 'ordering', answer: ['a', 'b'] })).toBe(true);
    expect(isAnswerCorrect(['b', 'a'], { type: 'ordering', answer: ['a', 'b'] })).toBe(false);
  });
});

describe('gradeAnswers', () => {
  it('scores, rounds the percentage and builds details from the server copy', () => {
    const qs = quizQuestions.slice(0, 3);
    const result = gradeAnswers(qs, [qs[0].answer as Answer, null]);
    expect(result.score).toBe(1);
    expect(result.totalQuestions).toBe(3);
    expect(result.percentage).toBe(33);
    expect(result.questionDetails[0]).toMatchObject({ questionId: qs[0].id, isCorrect: true, correctAnswer: qs[0].answer, explanation: qs[0].explanation });
    expect(result.questionDetails[2]).toMatchObject({ userAnswer: null, isCorrect: false });
  });
});

describe('parseAnswer', () => {
  it('keeps well-formed answers and drops anything else', () => {
    expect(parseAnswer('A. int')).toBe('A. int');
    expect(parseAnswer(['a', 'b'])).toEqual(['a', 'b']);
    expect(parseAnswer({ k: 'v' })).toEqual({ k: 'v' });
    expect(parseAnswer(undefined)).toBeNull();
    expect(parseAnswer(42)).toBeNull();
    expect(parseAnswer(['a', 1])).toBeNull();
    expect(parseAnswer({ k: 1 })).toBeNull();
    expect(parseAnswer('x'.repeat(2001))).toBeNull();
  });
});

describe('toPublicQuestion', () => {
  it('drops the answer key and explanation', () => {
    const pub = toPublicQuestion(quizQuestions[0], () => 0);
    expect(pub).not.toHaveProperty('answer');
    expect(pub).not.toHaveProperty('explanation');
    expect(pub.options).toEqual(quizQuestions[0].options);
  });
  it('shuffles ordering options', () => {
    const ordering = quizQuestions.find((q) => q.type === 'ordering')!;
    const pub = toPublicQuestion(ordering, () => 0);
    expect(pub.options).not.toEqual(ordering.options);
    expect([...(pub.options as string[])].sort()).toEqual([...(ordering.options as string[])].sort());
  });
  it('shuffle keeps every item', () => {
    let seed = 7;
    const rnd = (n: number) => (seed = (seed * 9301 + 49297) % 233280) % n;
    expect(shuffle([1, 2, 3, 4, 5], rnd).sort()).toEqual([1, 2, 3, 4, 5]);
  });
});
