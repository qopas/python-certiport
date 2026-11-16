import { NextResponse } from 'next/server';
import { withAdmin } from '@/lib/api/http';
import { parseSubmissionFilters } from '@/lib/api/params';
import { getQuestionAnalytics } from '@/lib/admin/submissions';

export const GET = withAdmin(async (request) =>
  NextResponse.json(await getQuestionAnalytics(parseSubmissionFilters(request.nextUrl.searchParams))),
);
