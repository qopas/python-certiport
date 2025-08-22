// app/api/create-test-user/route.ts
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

export async function POST() {
  try {
    // Check if default class exists, create if not
    let classResult = await query('SELECT id FROM classes WHERE name = $1', ['Default Class']);
    
    if (classResult.rows.length === 0) {
      classResult = await query(
        'INSERT INTO classes (name, description) VALUES ($1, $2) RETURNING id',
        ['Default Class', 'Default class for users']
      );
    }
    
    const classId = classResult.rows[0].id;

    // Create test user
    const email = 'student@test.com';
    const password = 'TempPass123';
    const fullName = 'Test Student';
    
    const passwordHash = await hashPassword(password);
    
    // Check if user already exists
    const existingUser = await query('SELECT id FROM users WHERE email = $1', [email]);
    
    if (existingUser.rows.length > 0) {
      return NextResponse.json({
        success: true,
        message: 'Test user already exists',
        credentials: { email, password }
      });
    }

    await query(
      `INSERT INTO users (email, password_hash, full_name, class_id, role) 
       VALUES ($1, $2, $3, $4, $5)`,
      [email, passwordHash, fullName, classId, 'user']
    );

    return NextResponse.json({
      success: true,
      message: 'Test user created',
      credentials: { email, password }
    });
  } catch (error) {
    console.error('Create test user error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}