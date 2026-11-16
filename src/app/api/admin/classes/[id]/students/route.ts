import { NextResponse } from 'next/server';
import { readJson, withAdmin } from '@/lib/api/http';
import { parseId, parseIdList } from '@/lib/api/params';
import { setClassStudents } from '@/lib/admin/users';

// Replaces the class's members with studentIds (one transaction).
export const PUT = withAdmin<{ id: string }>(async (request, _admin, { id }) => {
  const body = await readJson(request);
  const assigned = await setClassStudents(parseId(id), parseIdList(body.studentIds, 'studentIds'));
  return NextResponse.json({ assigned });
});
