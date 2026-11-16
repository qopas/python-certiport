import { describe, expect, it } from 'vitest';
import type { Question } from '@/lib/types';
import { answerToHtml, buildQuestionView, escapeHtml, textToHtml } from './question-view';

const mc: Question = {
  id: 1,
  domain: 'Types',
  type: 'multiple_choice',
  question: "Pick one:<div class='font-mono'>x = 1</div>",
  options: ['A. <code>int</code>', 'B. str'],
  answer: 'A. <code>int</code>',
  explanation: 'Because <b>1</b> is an int.',
};
const bank = new Map([[mc.id, mc]]);

describe('escapeHtml / textToHtml', () => {
  it('escapes markup', () => {
    expect(escapeHtml(`<img src=x onerror="a('b')">&`)).toBe('&lt;img src=x onerror=&quot;a(&#39;b&#39;)&quot;&gt;&amp;');
  });
  it('keeps line breaks and drops tags', () => {
    expect(textToHtml('a<br>b<script>x</script>')).toBe('<span class="whitespace-pre-wrap">a\nbx</span>');
  });
});

describe('buildQuestionView', () => {
  it('uses trusted bank HTML when the stored question matches the bank', () => {
    const view = buildQuestionView(
      { questionId: 1, type: 'multiple_choice', domain: 'Types', question: mc.question, userAnswer: 'B. str', correctAnswer: mc.answer, isCorrect: false },
      bank,
    );
    expect(view.questionHtml).toBe(mc.question);
    expect(view.explanationHtml).toBe(mc.explanation);
    expect(view.options).toEqual([
      { html: 'A. <code>int</code>', correct: true },
      { html: 'B. str', correct: false },
    ]);
    expect(view.correctAnswerHtml).toBe('A. <code>int</code>');
    expect(view.userAnswerHtml).toBe('B. str');
  });

  it('escapes a student-supplied answer that is not a bank option', () => {
    const view = buildQuestionView(
      { questionId: 1, type: 'multiple_choice', question: mc.question, userAnswer: '<img src=x onerror=alert(1)>', correctAnswer: mc.answer },
      bank,
    );
    expect(view.userAnswerHtml).toBe('<span class="whitespace-pre-wrap">&lt;img src=x onerror=alert(1)&gt;</span>');
  });

  it('does not trust stored text that differs from the bank', () => {
    const view = buildQuestionView(
      { questionId: 1, type: 'multiple_choice', question: '<img src=x onerror=alert(1)>Old text', explanation: '<script>x()</script>', userAnswer: 'A. <code>int</code>', correctAnswer: 'A. <code>int</code>' },
      bank,
    );
    expect(view.questionHtml).toBe('<span class="whitespace-pre-wrap">Old text</span>');
    expect(view.explanationHtml).toBe('<span class="whitespace-pre-wrap">x()</span>');
    expect(view.options).toBeNull();
    expect(view.userAnswerHtml).not.toContain('<code>');
  });

  it('survives malformed details', () => {
    const view = buildQuestionView({}, bank);
    expect(view).toMatchObject({ questionId: 0, type: 'unknown', isCorrect: false, userAnswerHtml: null, correctAnswerHtml: '' });
  });
});

describe('answerToHtml', () => {
  it('renders key/value answers as escaped text', () => {
    expect(answerToHtml({ room_type: '<b>int</b>' }, 'fill_in_blank', new Set())).toBe(
      '<div><span class="font-medium">room type:</span> <span class="whitespace-pre-wrap">&lt;b&gt;int&lt;/b&gt;</span></div>',
    );
  });
  it('renders lists and empty answers', () => {
    expect(answerToHtml(['a', 'b'], 'ordering', new Set(['a']))).toBe(
      '<div><span class="whitespace-pre-wrap">a</span></div><div><span class="whitespace-pre-wrap">b</span></div>',
    );
    expect(answerToHtml(null, 'multiple_choice', new Set())).toBeNull();
  });
});
