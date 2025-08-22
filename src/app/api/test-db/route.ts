// app/api/test-db/route.ts
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    // Test database connection
    const result = await query('SELECT NOW() as current_time');
    
    // Test if tables exist
    const tables = await query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);

    // Test admin user exists
    const adminUser = await query('SELECT id, email, role FROM users WHERE role = $1', ['admin']);

    return NextResponse.json({
      success: true,
      database_time: result.rows[0].current_time,
      tables: tables.rows.map(row => row.table_name),
      admin_user_exists: adminUser.rows.length > 0,
      admin_user: adminUser.rows[0] || null
    });
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}