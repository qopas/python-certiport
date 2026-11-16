import { NextResponse } from 'next/server';
import { readJson, withAdmin } from '@/lib/api/http';
import { optionalText, parseId, requireText } from '@/lib/api/params';
import { deleteClass, updateClass } from '@/lib/admin/users';

export const PUT = withAdmin<{ id: string }>(async (request, _admin, { id }) => {
  const body = await readJson(request);
  await updateClass(parseId(id), {
    name: requireText(body.name, 'Class name', 100),
    description: optionalText(body.description, 'Description'),
  });
  return NextResponse.json({ ok: true });
});

export const DELETE = withAdmin<{ id: string }>(async (_request, _admin, { id }) => {
  const name = await deleteClass(parseId(id));
  return NextResponse.json({ message: `Class "${name}" deleted` });
});
