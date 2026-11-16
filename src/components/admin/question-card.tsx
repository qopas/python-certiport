'use client';

import type { ReactNode } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { QuestionView } from '@/lib/admin/types';
import { SafeHtml } from './common';

// One question with its options, the student's answer, the correct answer and the explanation.
export const QuestionCard = ({
  view,
  index,
  header,
  showUserAnswer = true,
  children,
}: {
  view: QuestionView;
  index?: number;
  header?: ReactNode;
  showUserAnswer?: boolean;
  children?: ReactNode;
}) => (
  <article className={cn('rounded-lg border border-l-4 bg-white p-4', view.isCorrect || !showUserAnswer ? 'border-l-green-500' : 'border-l-red-500')}>
    <div className="mb-3 flex flex-wrap items-center gap-2">
      {index !== undefined && <span className="font-semibold text-gray-700">{index}.</span>}
      <span className="text-sm text-gray-500">Q{view.questionId}</span>
      {view.domain && <Badge variant="outline">{view.domain}</Badge>}
      {header}
      {showUserAnswer &&
        (view.isCorrect ? (
          <CheckCircle2 className="ml-auto h-5 w-5 text-green-600" aria-label="Correct" />
        ) : (
          <XCircle className="ml-auto h-5 w-5 text-red-600" aria-label="Wrong" />
        ))}
    </div>
    <SafeHtml html={view.questionHtml} className="mb-4 text-base text-gray-900" />

    {view.options && (
      <ol className="mb-4 space-y-2" aria-label="Answer options">
        {view.options.map((option, i) => (
          <li
            key={i}
            className={cn('flex items-start gap-2 rounded border p-2 text-sm', option.correct ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50')}
          >
            <span className={cn('rounded px-2 py-0.5 text-xs font-medium', option.correct ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600')}>
              {String.fromCharCode(65 + i)}
            </span>
            <SafeHtml html={option.html} className="min-w-0 flex-1" />
            {option.correct && <span className="sr-only">(correct)</span>}
          </li>
        ))}
      </ol>
    )}

    <div className="space-y-3">
      {showUserAnswer && (
        <div className={cn('rounded border p-3', view.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50')}>
          <p className={cn('text-sm font-medium', view.isCorrect ? 'text-green-800' : 'text-red-800')}>Student&apos;s answer</p>
          {view.userAnswerHtml ? (
            <SafeHtml html={view.userAnswerHtml} className={view.isCorrect ? 'text-green-700' : 'text-red-700'} />
          ) : (
            <p className="text-sm italic text-gray-500">No answer</p>
          )}
        </div>
      )}
      {(showUserAnswer ? !view.isCorrect : !view.options) && view.correctAnswerHtml && (
        <div className="rounded border border-green-200 bg-green-50 p-3">
          <p className="text-sm font-medium text-green-800">Correct answer</p>
          <SafeHtml html={view.correctAnswerHtml} className="text-green-700" />
        </div>
      )}
      {view.explanationHtml && (
        <div className="rounded border border-blue-200 bg-blue-50 p-3">
          <p className="text-sm font-medium text-blue-800">Explanation</p>
          <SafeHtml html={view.explanationHtml} className="text-sm text-blue-700" />
        </div>
      )}
      {children}
    </div>
  </article>
);
