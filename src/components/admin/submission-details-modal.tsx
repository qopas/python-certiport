'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { useApi } from '@/hooks/use-api';
import type { SubmissionDetail } from '@/lib/admin/types';
import { EmptyState, ErrorState, LoadingState, formatDuration } from './common';
import { QuestionCard } from './question-card';

// Loads one submission's questions only when the admin opens it.
export const SubmissionDetailsModal = ({ submissionId, onClose }: { submissionId: number; onClose: () => void }) => {
  const { data, error, isLoading, reload } = useApi<SubmissionDetail>(`/api/admin/submissions/${submissionId}`);
  const [onlyWrong, setOnlyWrong] = useState(true);
  const questions = data?.questions ?? [];
  const wrongCount = questions.filter((q) => !q.isCorrect).length;
  const shown = onlyWrong ? questions.filter((q) => !q.isCorrect) : questions;

  return (
    <Modal
      className="max-w-4xl"
      onClose={onClose}
      title={data ? `${data.userName} — ${data.percentage}%` : 'Quiz submission'}
      description={data ? `${data.userEmail}${data.className ? ` · ${data.className}` : ''} · ${new Date(data.completedAt).toLocaleString()}` : undefined}
    >
      {error ? (
        <ErrorState error={error} onRetry={reload} />
      ) : isLoading || !data ? (
        <LoadingState label="Loading submission…" />
      ) : (
        <div className="space-y-5">
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ['Correct', `${data.score}/${data.totalQuestions}`, 'bg-blue-50 text-blue-800'],
              ['Wrong', String(data.totalQuestions - data.score), 'bg-red-50 text-red-800'],
              ['Score', `${data.percentage}%`, 'bg-green-50 text-green-800'],
              ['Time', formatDuration(data.timeSpent), 'bg-purple-50 text-purple-800'],
            ].map(([label, value, tone]) => (
              <div key={label} className={`rounded p-3 text-center ${tone}`}>
                <dt className="text-sm">{label}</dt>
                <dd className="text-lg font-bold">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-semibold text-gray-900">
              {onlyWrong ? `Wrong answers (${wrongCount})` : `All questions (${questions.length})`}
            </h3>
            <Button type="button" variant="outline" size="sm" onClick={() => setOnlyWrong((v) => !v)} aria-pressed={!onlyWrong}>
              {onlyWrong ? 'Show all questions' : 'Show wrong answers only'}
            </Button>
          </div>

          {shown.length === 0 ? (
            <EmptyState>{questions.length === 0 ? 'No question data was stored for this submission.' : 'Every answer was correct.'}</EmptyState>
          ) : (
            <div className="space-y-4">
              {shown.map((q) => (
                <QuestionCard key={`${q.questionId}-${questions.indexOf(q)}`} view={q} index={questions.indexOf(q) + 1} />
              ))}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};
