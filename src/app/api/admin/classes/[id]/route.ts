// app/api/admin/classes/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/middleware';
import { query } from '@/lib/db';

export async function DELETE(
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

    // Check if class exists
    const classCheck = await query(
      'SELECT id, name FROM classes WHERE id = $1',
      [classId]
    );

    if (classCheck.rows.length === 0) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 });
    }

    const classData = classCheck.rows[0];

    // Check if class has users assigned
    const userCheck = await query(
      'SELECT COUNT(*) as user_count FROM users WHERE class_id = $1',
      [classId]
    );

    const userCount = parseInt(userCheck.rows[0].user_count);

    if (userCount > 0) {
      return NextResponse.json({ 
        error: `Cannot delete class "${classData.name}" because it has ${userCount} users assigned. Please move users to another class first.` 
      }, { status: 400 });
    }

    // Delete the class
    const deleteResult = await query('DELETE FROM classes WHERE id = $1', [classId]);
    
    if (deleteResult.rowCount === 0) {
      return NextResponse.json({ error: 'Failed to delete class' }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: `Class "${classData.name}" deleted successfully`
    });
  } catch (error) {
    console.error('Delete class error:', error);
    return NextResponse.json({ error: 'Failed to delete class' }, { status: 500 });
  }
}