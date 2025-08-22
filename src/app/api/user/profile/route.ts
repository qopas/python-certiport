// app/api/user/profile/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  const user = requireAuth(request);
  
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  console.log('Profile request for user ID:', user.id); // Debug log

  try {
    const result = await query(`
      SELECT u.id, u.email, u.full_name, u.class_id, u.last_login,
             c.name as class_name
      FROM users u
      LEFT JOIN classes c ON u.class_id = c.id
      WHERE u.id = $1
    `, [user.id]);

    console.log('Database result:', result.rows); // Debug log

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userData = result.rows[0];
    console.log('Returning user data:', userData); // Debug log

    return NextResponse.json(userData);
  } catch (error) {
    console.error('Get user profile error:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}