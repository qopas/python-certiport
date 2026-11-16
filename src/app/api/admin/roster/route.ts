import { NextResponse } from 'next/server';
import { withAdmin } from '@/lib/api/http';
import { listRoster } from '@/lib/admin/users';

// Every active student (id, name, email, class) for the class membership editor.
export const GET = withAdmin(async () => NextResponse.json(await listRoster()));
