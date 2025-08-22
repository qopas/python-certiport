// app/api/admin/classes/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/middleware';
import { query } from '@/lib/db';

// Get all classes
export async function GET(request: NextRequest) {
  const admin = requireAdmin(request);
  
  if (!admin) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
  }

  try {
    const result = await query(`
      SELECT c.id, c.name, c.description, c.created_at,
             COUNT(u.id) as user_count
      FROM classes c
      LEFT JOIN users u ON c.id = u.class_id AND u.role = 'user' AND u.is_active = true
      GROUP BY c.id, c.name, c.description, c.created_at
      ORDER BY c.created_at DESC
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Get classes error:', error);
    return NextResponse.json({ error: 'Failed to fetch classes' }, { status: 500 });
  }
}

// Create new class
export async function POST(request: NextRequest) {
  const admin = requireAdmin(request);
  
  if (!admin) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
  }

  try {
    const { name, description } = await request.json();

    if (!name) {
      return NextResponse.json({ error: 'Class name is required' }, { status: 400 });
    }

    const result = await query(
      `INSERT INTO classes (name, description, created_by_admin_id) 
       VALUES ($1, $2, $3) 
       RETURNING id, name, description, created_at`,
      [name, description, admin.id]
    );

    return NextResponse.json({ success: true, class: result.rows[0] });
  } catch (error) {
    console.error('Create class error:', error);
    return NextResponse.json({ error: 'Failed to create class' }, { status: 500 });
  }
}

// Update class
export async function PUT(request: NextRequest) {
  const admin = requireAdmin(request);
  
  if (!admin) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
  }

  try {
    const { classId, name, description } = await request.json();

    if (!classId || !name) {
      return NextResponse.json({ error: 'Class ID and name are required' }, { status: 400 });
    }

    const result = await query(
      `UPDATE classes 
       SET name = $1, description = $2 
       WHERE id = $3 
       RETURNING id, name, description, created_at`,
      [name, description, classId]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, class: result.rows[0] });
  } catch (error) {
    console.error('Update class error:', error);
    return NextResponse.json({ error: 'Failed to update class' }, { status: 500 });
  }
}