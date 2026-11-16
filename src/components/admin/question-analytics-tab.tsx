'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useApi } from '@/hooks/use-api';
import { withQuery } from '@/lib/client/api';
import type { AdminClass, QuestionAnalytics } from '@/lib/admin/types';
import { ClassSelect, EmptyState, ErrorState, LoadingState, SafeHtml } from './common';
import { QuestionCard } from './question-card';

// The ten questions with the lowest success rate, computed on the server.
export const QuestionAnalyticsTab = ({ classes }: { classes: AdminClass[] }) => {
  const [classId, setClassId] = useState('all');
  const { data, error, isLoading, reload } = useApi<QuestionAnalytics>(
    withQuery('/api/admin/question-analytics', { classId: classId === 'all' ? null : classId }),
  );

  return (
    <Card>
      <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-3">
        <div>
          <CardTitle>Question performance</CardTitle>
          <p className="text-sm text-gray-600">
            Hardest questions first{data ? ` · based on ${data.submissionsAnalyzed} submissions` : ''}
          </p>
        </div>
        <div className="w-56">
          <label htmlFor="analytics-class" className="sr-only">
            Class
          </label>
          <ClassSelect id="analytics-class" classes={classes} value={classId} onChange={setClassId} allLabel="All classes" />
        </div>
      </CardHeader>
      <CardContent>
        {error ? (
          <ErrorState error={error} onRetry={reload} />
        ) : !data ? (
          <LoadingState label="Analysing answers…" />
        ) : data.questions.length === 0 ? (
          <EmptyState>No answers to analyse yet.</EmptyState>
        ) : (
          <div className={isLoading ? 'space-y-6 opacity-60' : 'space-y-6'} aria-busy={isLoading}>
            {data.questions.map((stat) => (
              <QuestionCard
                key={`${stat.questionId}-${stat.view.questionHtml.length}`}
                view={stat.view}
                showUserAnswer={false}
                header={
                  <>
                    <Badge variant={stat.successRate >= 70 ? 'default' : 'destructive'}>{stat.successRate}% correct</Badge>
                    <span className="ml-auto text-sm text-gray-600">
                      {stat.correctAttempts}/{stat.totalAttempts} answered correctly
                    </span>
                  </>
                }
              >
                {stat.wrongAnswers.length > 0 && (
                  <div className="border-t pt-3">
                    <h4 className="mb-2 text-sm font-medium text-gray-700">Wrong answers ({stat.wrongAnswerCount})</h4>
                    <ul className="max-h-48 space-y-2 overflow-y-auto">
                      {stat.wrongAnswers.map((w, i) => (
                        <li key={i} className="flex items-start gap-2 rounded border border-red-100 bg-red-50 p-2 text-sm">
                          <span className="shrink-0 font-medium text-red-700">{w.userName}:</span>
                          {w.userAnswerHtml ? <SafeHtml html={w.userAnswerHtml} className="min-w-0 text-red-600" /> : <span className="italic text-gray-500">No answer</span>}
                        </li>
                      ))}
                    </ul>
                    {stat.wrongAnswerCount > stat.wrongAnswers.length && (
                      <p className="mt-1 text-xs text-gray-500 italic">+{stat.wrongAnswerCount - stat.wrongAnswers.length} more</p>
                    )}
                  </div>
                )}
              </QuestionCard>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
