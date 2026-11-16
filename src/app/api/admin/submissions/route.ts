import { NextResponse } from 'next/server';
import { withAdmin } from '@/lib/api/http';
import { badRequest } from '@/lib/api/errors';
import { optionalId, parsePagination, parseSubmissionFilters } from '@/lib/api/params';
import { clearSubmissions, listSubmissions } from '@/lib/admin/submissions';

// One page of submissions (no question data) plus aggregate stats for the same filters.
export const GET = withAdmin(async (request) => {
  const params = request.nextUrl.searchParams;
  return NextResponse.json(await listSubmissions(parseSubmissionFilters(params), parsePagination(params)));
});

// ?classId=<id> clears that class's submissions; ?classId=all clears every submission.
export const DELETE = withAdmin(async (request) => {
  const raw = request.nextUrl.searchParams.get('classId');
  if (!raw) throw badRequest('classId is required (a class id or "all")');
  const deletedCount = await clearSubmissions(optionalId(raw, 'classId'));
  return NextResponse.json({ deletedCount });
});
