import { withAdmin } from '@/lib/api/http';
import { parseSubmissionFilters } from '@/lib/api/params';
import { listSubmissionsForExport } from '@/lib/admin/submissions';
import { csvRow } from '@/lib/admin/csv';

// CSV of the submissions matching the dashboard filters.
export const GET = withAdmin(async (request) => {
  const rows = await listSubmissionsForExport(parseSubmissionFilters(request.nextUrl.searchParams));
  const csv =
    csvRow(['Name', 'Email', 'Class', 'Score', 'Total', 'Percentage', 'Time (s)', 'Completed (UTC)']) +
    rows
      .map((r) => csvRow([r.userName, r.userEmail, r.className, r.score, r.totalQuestions, r.percentage, r.timeSpent, r.completedAt]))
      .join('');
  const date = new Date().toISOString().slice(0, 10);
  return new Response(`﻿${csv}`, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="quiz-results-${date}.csv"`,
      'Cache-Control': 'no-store',
    },
  });
});
