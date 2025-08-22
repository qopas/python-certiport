// app/api/user/quiz-history/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  const user = requireAuth(request);
  
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  try {
    const result = await query(`
      SELECT id, score, total_questions, percentage, total_time, completed_at
      FROM quiz_submissions
      WHERE user_id = $1
      ORDER BY completed_at DESC
      LIMIT 50
    `, [user.id]);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Get quiz history error:', error);
    return NextResponse.json({ error: 'Failed to fetch quiz history' }, { status: 500 });
  }
}