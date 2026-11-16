import { NextResponse } from 'next/server';
import { withAdmin } from '@/lib/api/http';
import { parseId } from '@/lib/api/params';
import { getSubmissionDetail } from '@/lib/admin/submissions';

export const GET = withAdmin<{ id: string }>(async (_request, _admin, { id }) =>
  NextResponse.json(await getSubmissionDetail(parseId(id))),
);
