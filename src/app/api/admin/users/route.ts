// app/api/admin/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/middleware';
import { createUser, hashPassword } from '@/lib/auth';
import { query } from '@/lib/db';

// Get all users
// Add this GET function to your existing app/api/admin/users/route.ts file

export async function GET(request: NextRequest) {
  const admin = requireAdmin(request);
  
  if (!admin) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
  }

  try {
    const result = await query(`
      SELECT u.id, u.email, u.full_name, u.class_id, u.is_active, u.created_at, u.last_login,
             c.name as class_name
      FROM users u
      LEFT JOIN classes c ON u.class_id = c.id
      WHERE u.role = 'user'
      ORDER BY u.created_at DESC
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// Create new user
export async function POST(request: NextRequest) {
  const admin = requireAdmin(request);
  
  if (!admin) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
  }

  try {
    const { email, fullName, classId, password } = await request.json();

    if (!email || !fullName || !classId) {
      return NextResponse.json(
        { error: 'Email, full name, and class are required' },
        { status: 400 }
      );
    }

    const result = await createUser(email, fullName, classId, password);

    if (!result.success) {
      return NextResponse.json({ error: result.message }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      user: result.user,
      defaultPassword: password || process.env.DEFAULT_USER_PASSWORD 
    });
  } catch (error) {
    console.error('Create user error:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

// Update user
export async function PUT(request: NextRequest) {
  const admin = requireAdmin(request);
  
  if (!admin) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
  }

  try {
    const { userId, email, fullName, classId, isActive, newPassword } = await request.json();

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    let updateQuery = `
      UPDATE users 
      SET email = $1, full_name = $2, class_id = $3, is_active = $4, updated_at = CURRENT_TIMESTAMP
    `;
    let params = [email, fullName, classId, isActive];

    if (newPassword) {
      const passwordHash = await hashPassword(newPassword);
      updateQuery += `, password_hash = $5`;
      params.push(passwordHash);
      updateQuery += ` WHERE id = $6`;
      params.push(userId);
    } else {
      updateQuery += ` WHERE id = $5`;
      params.push(userId);
    }

    updateQuery += ` RETURNING id, email, full_name, class_id, is_active`;

    const result = await query(updateQuery, params);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, user: result.rows[0] });
  } catch (error) {
    console.error('Update user error:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}