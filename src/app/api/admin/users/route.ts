import { NextResponse } from 'next/server';
import { readJson, withAdmin } from '@/lib/api/http';
import { optionalId, optionalPassword, parsePagination, parseSearch, requireEmail, requireText } from '@/lib/api/params';
import { createStudent, listStudents } from '@/lib/admin/users';

// One page of students, filtered by ?search= (name or email) and ?classId=.
export const GET = withAdmin(async (request) => {
  const params = request.nextUrl.searchParams;
  const filters = { search: parseSearch(params), classId: optionalId(params.get('classId'), 'classId') };
  return NextResponse.json(await listStudents(filters, parsePagination(params)));
});

// Creates a student. Without a password the response carries a one-time temporaryPassword.
export const POST = withAdmin(async (request) => {
  const body = await readJson(request);
  const result = await createStudent({
    email: requireEmail(body.email),
    fullName: requireText(body.fullName, 'Full name', 100),
    classId: optionalId(body.classId, 'classId'),
    password: optionalPassword(body.password),
  });
  return NextResponse.json(result, { status: 201 });
});
