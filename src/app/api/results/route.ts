// app/api/results/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/middleware';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  const admin = requireAdmin(request);
  
  if (!admin) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
  }

  try {
    const result = await query(`
      SELECT 
        qs.id,
        qs.score,
        qs.percentage,
        qs.total_time as timeSpent,
        qs.completed_at as timestamp,
        qs.questions_and_answers,
        u.full_name as userName,
        u.email as userEmail,
        u.class_id as classId,
        c.id as classIdFromJoin,
        c.name as className
      FROM quiz_submissions qs
      JOIN users u ON qs.user_id = u.id
      LEFT JOIN classes c ON u.class_id = c.id
      ORDER BY qs.completed_at DESC
    `);

    // Parse the question details from each submission
    const submissions = result.rows.map(row => {
      let questionDetails = [];
      try {
        const questionsData = typeof row.questions_and_answers === 'string' 
          ? JSON.parse(row.questions_and_answers)
          : row.questions_and_answers;
        questionDetails = questionsData?.questionDetails || [];
      } catch (error) {
        console.error('Error parsing question details:', error);
      }

      return {
        id: row.id,
        userName: row.username,
        userEmail: row.useremail,
        classId: row.classid, // Now includes the class ID
        className: row.classname, // The class name
        score: row.score,
        percentage: row.percentage,
        timeSpent: row.timespent,
        timestamp: row.timestamp,
        questionDetails
      };
    });

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching results:', error);
    return NextResponse.json(
      { error: 'Failed to fetch results' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const admin = requireAdmin(request);
  
  if (!admin) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
  }

  try {
    await query('DELETE FROM quiz_submissions');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error clearing results:', error);
    return NextResponse.json(
      { error: 'Failed to clear results' },
      { status: 500 }
    );
  }
}