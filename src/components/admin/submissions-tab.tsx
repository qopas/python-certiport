'use client';

import { useMemo, useState } from 'react';
import { Eye, FileDown, Search, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useApi, useDebouncedValue } from '@/hooks/use-api';
import { apiFetch, errorMessage, withQuery } from '@/lib/client/api';
import type { AdminClass, SubmissionList } from '@/lib/admin/types';
import { ClassSelect, EmptyState, ErrorState, LoadingState, Pagination, formatDuration, selectClass } from './common';
import { SubmissionDetailsModal } from './submission-details-modal';

type Range = 'all' | 'today' | 'week' | 'month';
const PAGE_SIZE = 25;

// Start of the range in the admin's own time zone, as an ISO timestamp for the API.
const rangeStart = (range: Range): string | null => {
  const now = new Date();
  if (range === 'today') return new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
  if (range === 'week') return new Date(now.getTime() - 7 * 86_400_000).toISOString();
  if (range === 'month') return new Date(now.getTime() - 30 * 86_400_000).toISOString();
  return null;
};

export const SubmissionsTab = ({ classes, onChanged }: { classes: AdminClass[]; onChanged: () => void }) => {
  const [classId, setClassId] = useState('all');
  const [range, setRange] = useState<Range>('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [openId, setOpenId] = useState<number | null>(null);
  const [clearing, setClearing] = useState(false);
  const debouncedSearch = useDebouncedValue(search.trim());

  const from = useMemo(() => rangeStart(range), [range]);
  const filters = { classId: classId === 'all' ? null : classId, from, search: debouncedSearch };
  const { data, error, isLoading, reload } = useApi<SubmissionList>(
    withQuery('/api/admin/submissions', { ...filters, page, pageSize: PAGE_SIZE }),
  );
  const className = classes.find((c) => String(c.id) === classId)?.name;

  const updateFilter = <T,>(set: (value: T) => void) => (value: T) => {
    set(value);
    setPage(1);
  };

  const clearResults = async () => {
    const scope = className ? `the class "${className}"` : 'ALL classes';
    if (!window.confirm(`Permanently delete every quiz result for ${scope}? This cannot be undone.`)) return;
    setClearing(true);
    try {
      const { deletedCount } = await apiFetch<{ deletedCount: number }>(withQuery('/api/admin/submissions', { classId }), { method: 'DELETE' });
      window.alert(`Deleted ${deletedCount} submissions.`);
      setPage(1);
      reload();
      onChanged();
    } catch (e) {
      window.alert(errorMessage(e));
    } finally {
      setClearing(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filter quiz results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="space-y-1">
              <Label htmlFor="results-class">Class</Label>
              <ClassSelect id="results-class" classes={classes} value={classId} onChange={updateFilter(setClassId)} allLabel="All classes" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="results-range">Date</Label>
              <select id="results-range" className={selectClass} value={range} onChange={(e) => updateFilter(setRange)(e.target.value as Range)}>
                <option value="all">All time</option>
                <option value="today">Today</option>
                <option value="week">Last 7 days</option>
                <option value="month">Last 30 days</option>
              </select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="results-search">Search students</Label>
              <div className="relative">
                <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" aria-hidden />
                <Input
                  id="results-search"
                  placeholder="Name or email…"
                  value={search}
                  onChange={(e) => updateFilter(setSearch)(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-end">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => {
                  setClassId('all');
                  setRange('all');
                  setSearch('');
                  setPage(1);
                }}
              >
                Clear filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle>Quiz submissions</CardTitle>
            {data && (
              <p className="mt-1 text-sm text-gray-600">
                {data.stats.count} matching · average {data.stats.averageScore}% · best {data.stats.highestScore}% · average time{' '}
                {formatDuration(data.stats.averageTime)}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={withQuery('/api/admin/submissions/export', filters)} download>
                <FileDown className="h-4 w-4" /> Export CSV
              </a>
            </Button>
            <Button type="button" variant="destructive" size="sm" onClick={clearResults} disabled={clearing}>
              <Trash2 className="h-4 w-4" />
              {className ? `Clear ${className} results` : 'Clear all results'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {error ? (
            <ErrorState error={error} onRetry={reload} />
          ) : !data ? (
            <LoadingState />
          ) : data.items.length === 0 ? (
            <EmptyState>{data.stats.count === 0 && !filters.classId && !from && !debouncedSearch ? 'No quiz submissions yet.' : 'No submissions match these filters.'}</EmptyState>
          ) : (
            <div className={isLoading ? 'opacity-60 transition-opacity' : undefined} aria-busy={isLoading}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Percentage</TableHead>
                    <TableHead>Time taken</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.items.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell className="font-medium">{s.userName}</TableCell>
                      <TableCell>{s.userEmail}</TableCell>
                      <TableCell>{s.className ? <Badge variant="outline">{s.className}</Badge> : <span className="text-gray-400">No class</span>}</TableCell>
                      <TableCell>
                        {s.score}/{s.totalQuestions}
                      </TableCell>
                      <TableCell>
                        <Badge variant={s.percentage >= 70 ? 'default' : 'secondary'} className={s.percentage >= 70 ? 'bg-green-600' : undefined}>
                          {s.percentage}%
                        </Badge>
                      </TableCell>
                      <TableCell>{formatDuration(s.timeSpent)}</TableCell>
                      <TableCell>{s.completedAt ? new Date(s.completedAt).toLocaleString() : '—'}</TableCell>
                      <TableCell>
                        <Button type="button" variant="outline" size="sm" onClick={() => setOpenId(s.id)}>
                          <Eye className="h-4 w-4" /> View details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} isLoading={isLoading} />
            </div>
          )}
        </CardContent>
      </Card>

      {openId !== null && <SubmissionDetailsModal submissionId={openId} onClose={() => setOpenId(null)} />}
    </div>
  );
};
