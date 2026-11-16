import { NextResponse } from 'next/server';
import { withAdmin } from '@/lib/api/http';
import { parseId } from '@/lib/api/params';
import { resetStudentPassword } from '@/lib/admin/users';

// Sets a random one-time password and returns it once so the admin can pass it on.
export const POST = withAdmin<{ id: string }>(async (_request, _admin, { id }) =>
  NextResponse.json({ temporaryPassword: await resetStudentPassword(parseId(id)) }),
);
