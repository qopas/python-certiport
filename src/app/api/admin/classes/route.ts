import { NextResponse } from 'next/server';
import { readJson, withAdmin } from '@/lib/api/http';
import { optionalText, requireText } from '@/lib/api/params';
import { createClass, listClasses } from '@/lib/admin/users';

export const GET = withAdmin(async () => NextResponse.json(await listClasses()));

export const POST = withAdmin(async (request, admin) => {
  const body = await readJson(request);
  const id = await createClass(
    { name: requireText(body.name, 'Class name', 100), description: optionalText(body.description, 'Description') },
    admin.id,
  );
  return NextResponse.json({ id }, { status: 201 });
});
