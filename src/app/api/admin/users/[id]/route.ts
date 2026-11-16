import { NextResponse } from 'next/server';
import { readJson, withAdmin } from '@/lib/api/http';
import { optionalId, optionalPassword, parseId, requireBoolean, requireEmail, requireText } from '@/lib/api/params';
import { deleteStudent, updateStudent } from '@/lib/admin/users';

export const PUT = withAdmin<{ id: string }>(async (request, _admin, { id }) => {
  const body = await readJson(request);
  const user = await updateStudent(parseId(id), {
    email: requireEmail(body.email),
    fullName: requireText(body.fullName, 'Full name', 100),
    classId: optionalId(body.classId, 'classId'),
    isActive: requireBoolean(body.isActive, 'isActive'),
    newPassword: optionalPassword(body.newPassword),
  });
  return NextResponse.json(user);
});

// Permanently deletes a student and their submissions. Admin accounts cannot be deleted.
export const DELETE = withAdmin<{ id: string }>(async (_request, _admin, { id }) => {
  const email = await deleteStudent(parseId(id));
  return NextResponse.json({ message: `User ${email} deleted` });
});
