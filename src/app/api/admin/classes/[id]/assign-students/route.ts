// app/api/admin/classes/[id]/assign-students/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/middleware';
import { query } from '@/lib/db';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
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

    const { studentIds } = await request.json();

    if (!Array.isArray(studentIds)) {
      return NextResponse.json({ error: 'studentIds must be an array' }, { status: 400 });
    }

    // Verify class exists
    const classCheck = await query('SELECT id, name FROM classes WHERE id = $1', [classId]);
    if (classCheck.rows.length === 0) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 });
    }

    // First, remove all students from this class
    await query('UPDATE users SET class_id = NULL WHERE class_id = $1 AND role = $2', [classId, 'user']);

    // Then assign selected students to this class
    if (studentIds.length > 0) {
      const placeholders = studentIds.map((_, index) => `$${index + 2}`).join(',');
      const queryText = `UPDATE users SET class_id = $1 WHERE id IN (${placeholders}) AND role = 'user'`;
      const params = [classId, ...studentIds];
      
      await query(queryText, params);
    }

    return NextResponse.json({ 
      success: true, 
      message: `Successfully assigned ${studentIds.length} students to class "${classCheck.rows[0].name}"`
    });
  } catch (error) {
    console.error('Assign students error:', error);
    return NextResponse.json({ error: 'Failed to assign students' }, { status: 500 });
  }
}