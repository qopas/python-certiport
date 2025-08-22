// app/api/quiz/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { query } from '@/lib/db';

export async function POST(request: NextRequest) {
  const user = requireAuth(request);
  
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

 try {
  const body = await request.json();
  const { 
    answers, 
    score, 
    percentage, 
    totalTime, 
    startedAt,
    questionDetails 
  } = body;

  if (!questionDetails) {
    console.log('questionDetails is falsy:', questionDetails);
    return NextResponse.json(
      { error: 'Invalid submission data' },
      { status: 400 }
    );
  }

    // Generate submission ID
    const submissionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    console.log('Saving quiz submission:', {
      userId: user.id,
      submissionId,
      score,
      percentage,
      totalQuestions: questionDetails.length
    });

    // Save quiz submission
    const submissionResult = await query(`
      INSERT INTO quiz_submissions (
        user_id, 
        class_id, 
        submission_id, 
        score, 
        total_questions, 
        percentage, 
        total_time, 
        started_at, 
        questions_and_answers
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id
    `, [
      user.id,
      user.class_id,
      submissionId,
      score,
      questionDetails.length,
      percentage,
      totalTime,
      new Date(startedAt),
      JSON.stringify({
        answers,
        questionDetails,
        submissionId,
        userName: user.full_name || user.email,
        userEmail: user.email
      })
    ]);

    console.log('Quiz submission saved successfully');

    return NextResponse.json({ 
      success: true, 
      submissionId,
      id: submissionResult.rows[0].id
    });
  } catch (error) {
    console.error('Error saving quiz result:', error);
    return NextResponse.json(
      { error: 'Failed to save quiz result' },
      { status: 500 }
    );
  }
}