// app/api/admin/users/[id]/route.ts
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
    const userId = parseInt(resolvedParams.id);
    
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    // Check if user exists and is not an admin
    const userCheck = await query(
      'SELECT id, email, role FROM users WHERE id = $1',
      [userId]
    );

    if (userCheck.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const user = userCheck.rows[0];

    // Prevent deleting admin users
    if (user.role === 'admin') {
      return NextResponse.json({ error: 'Cannot delete admin users' }, { status: 403 });
    }

    // Prevent admin from deleting themselves
    if (user.id === admin.id) {
      return NextResponse.json({ error: 'Cannot delete your own account' }, { status: 403 });
    }

    // Hard delete: First delete related quiz submissions
    await query('DELETE FROM quiz_submissions WHERE user_id = $1', [userId]);
    
    // Then delete the user
    const deleteResult = await query('DELETE FROM users WHERE id = $1', [userId]);
    
    if (deleteResult.rowCount === 0) {
      return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: `User ${user.email} deleted successfully`
    });
  } catch (error) {
    console.error('Delete user error:', error);
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}