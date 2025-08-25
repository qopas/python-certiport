// app/api/user/profile/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { query } from '@/lib/db';
import { hashPassword, verifyPassword } from '@/lib/auth';

// GET - Fetch user profile
export async function GET(request: NextRequest) {
  const user = requireAuth(request);
  
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  console.log('Profile request for user ID:', user.id);

  try {
    const result = await query(`
      SELECT u.id, u.email, u.full_name, u.class_id, u.last_login,
             c.name as class_name
      FROM users u
      LEFT JOIN classes c ON u.class_id = c.id
      WHERE u.id = $1
    `, [user.id]);

    console.log('Database result:', result.rows);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userData = result.rows[0];
    console.log('Returning user data:', userData);

    return NextResponse.json(userData);
  } catch (error) {
    console.error('Get user profile error:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

// PUT - Update user profile
export async function PUT(request: NextRequest) {
  const user = requireAuth(request);
  
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  try {
    const { full_name, email, currentPassword, newPassword } = await request.json();

    // Validation
    if (!full_name || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      );
    }

    // Check if email is already taken by another user
    const emailCheck = await query(
      'SELECT id FROM users WHERE email = $1 AND id != $2',
      [email, user.id]
    );

    if (emailCheck.rows.length > 0) {
      return NextResponse.json(
        { error: 'Email is already taken by another user' },
        { status: 400 }
      );
    }

    // If password change is requested, verify current password first
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json(
          { error: 'Current password is required to change password' },
          { status: 400 }
        );
      }

      if (newPassword.length < 6) {
        return NextResponse.json(
          { error: 'New password must be at least 6 characters long' },
          { status: 400 }
        );
      }

      // Get current password hash
      const userResult = await query(
        'SELECT password_hash FROM users WHERE id = $1',
        [user.id]
      );

      if (userResult.rows.length === 0) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      // Verify current password
      const isCurrentPasswordValid = await verifyPassword(
        currentPassword,
        userResult.rows[0].password_hash
      );

      if (!isCurrentPasswordValid) {
        return NextResponse.json(
          { error: 'Current password is incorrect' },
          { status: 400 }
        );
      }

      // Hash new password and update with password
      const newPasswordHash = await hashPassword(newPassword);
      
      const updateResult = await query(`
        UPDATE users 
        SET full_name = $1, email = $2, password_hash = $3, updated_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING id, email, full_name, class_id
      `, [full_name, email, newPasswordHash, user.id]);

      if (updateResult.rows.length === 0) {
        return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
      }

      // Get updated user data with class info
      const updatedUserResult = await query(`
        SELECT u.id, u.email, u.full_name, u.class_id, u.last_login,
               c.name as class_name
        FROM users u
        LEFT JOIN classes c ON u.class_id = c.id
        WHERE u.id = $1
      `, [user.id]);

      return NextResponse.json(updatedUserResult.rows[0]);
    } else {
      // Update without password change
      const updateResult = await query(`
        UPDATE users 
        SET full_name = $1, email = $2, updated_at = CURRENT_TIMESTAMP
        WHERE id = $3
        RETURNING id, email, full_name, class_id
      `, [full_name, email, user.id]);

      if (updateResult.rows.length === 0) {
        return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
      }

      // Get updated user data with class info
      const updatedUserResult = await query(`
        SELECT u.id, u.email, u.full_name, u.class_id, u.last_login,
               c.name as class_name
        FROM users u
        LEFT JOIN classes c ON u.class_id = c.id
        WHERE u.id = $1
      `, [user.id]);

      return NextResponse.json(updatedUserResult.rows[0]);
    }
  } catch (error) {
    console.error('Update user profile error:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}