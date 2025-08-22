// app/api/admin/classes/[id]/available-students/route.ts
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

    // Get all students NOT in this class (including those with no class assigned)
    const result = await query(`
      SELECT u.id, u.email, u.full_name, u.class_id, u.is_active, u.created_at, u.last_login,
             c.name as class_name
      FROM users u
      LEFT JOIN classes c ON u.class_id = c.id
      WHERE (u.class_id != $1 OR u.class_id IS NULL) AND u.role = 'user' AND u.is_active = true
      ORDER BY u.full_name ASC
    `, [classId]);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Get available students error:', error);
    return NextResponse.json({ error: 'Failed to fetch available students' }, { status: 500 });
  }
}