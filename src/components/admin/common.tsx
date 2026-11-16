'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { AdminClass } from '@/lib/admin/types';

export const LoadingState = ({ label = 'Loading…' }: { label?: string }) => (
  <div className="flex items-center justify-center gap-3 py-10 text-gray-600" role="status">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
    {label}
  </div>
);

export const ErrorState = ({ error, onRetry }: { error: Error; onRetry: () => void }) => (
  <div className="flex flex-col items-center gap-3 py-10 text-center" role="alert">
    <p className="text-red-700">{error.message}</p>
    <Button type="button" variant="outline" size="sm" onClick={onRetry}>
      Try again
    </Button>
  </div>
);

export const EmptyState = ({ children }: { children: React.ReactNode }) => (
  <p className="py-10 text-center text-gray-500">{children}</p>
);

// Renders HTML produced by the admin API (trusted bank HTML or escaped text only).
export const SafeHtml = ({ html, className }: { html: string; className?: string }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

export const Pagination = ({
  page,
  pageSize,
  total,
  onPageChange,
  isLoading,
}: {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}) => {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (total <= pageSize) return null;
  const first = (page - 1) * pageSize + 1;
  const last = Math.min(page * pageSize, total);
  return (
    <nav className="flex items-center justify-between gap-4 pt-4 text-sm text-gray-600" aria-label="Pagination">
      <span>
        {first}–{last} of {total}
      </span>
      <div className="flex items-center gap-2">
        <Button type="button" variant="outline" size="sm" disabled={page <= 1 || isLoading} onClick={() => onPageChange(page - 1)}>
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
        <span>
          Page {page} of {pages}
        </span>
        <Button type="button" variant="outline" size="sm" disabled={page >= pages || isLoading} onClick={() => onPageChange(page + 1)}>
          Next <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
};

export const selectClass = 'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none';

export const ClassSelect = ({
  id,
  classes,
  value,
  onChange,
  allLabel,
  noneLabel,
  required,
}: {
  id: string;
  classes: AdminClass[];
  value: string;
  onChange: (value: string) => void;
  allLabel?: string;
  noneLabel?: string;
  required?: boolean;
}) => (
  <select id={id} className={selectClass} value={value} onChange={(e) => onChange(e.target.value)} required={required}>
    {allLabel && <option value="all">{allLabel}</option>}
    {noneLabel !== undefined && <option value="">{noneLabel}</option>}
    {classes.map((c) => (
      <option key={c.id} value={String(c.id)}>
        {c.name}
      </option>
    ))}
  </select>
);

export const formatDuration = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);
  return h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`;
};
