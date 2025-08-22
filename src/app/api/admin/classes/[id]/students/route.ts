// app/api/admin/classes/[id]/students/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/middleware';
import { query } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = requireAdmin(request);
  
  if (!admin) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
  }

  try {
    // Await params for Next.js 15+
    const resolvedParams = await params;
    const classId = parseInt(resolvedParams.id);
    
    if (isNaN(classId)) {
      return NextResponse.json({ error: 'Invalid class ID' }, { status: 400 });
    }

    // Get all students in this specific class
    const result = await query(`
      SELECT u.id, u.email, u.full_name, u.class_id, u.is_active, u.created_at, u.last_login
      FROM users u
      WHERE u.class_id = $1 AND u.role = 'user'
      ORDER BY u.full_name ASC
    `, [classId]);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Get class students error:', error);
    return NextResponse.json({ error: 'Failed to fetch class students' }, { status: 500 });
  }
}