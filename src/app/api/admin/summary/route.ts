import { NextResponse } from 'next/server';
import { withAdmin } from '@/lib/api/http';
import { getAdminSummary } from '@/lib/admin/submissions';

export const GET = withAdmin(async () => NextResponse.json(await getAdminSummary()));
