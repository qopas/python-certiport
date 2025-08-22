// app/api/quiz/details/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { query } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = requireAuth(request);
  
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  try {
    const resolvedParams = await params;
    const quizId = parseInt(resolvedParams.id);
    
    if (isNaN(quizId)) {
      return NextResponse.json({ error: 'Invalid quiz ID' }, { status: 400 });
    }

    // Get quiz submission details
    const result = await query(`
      SELECT id, user_id, score, total_questions, percentage, total_time, 
             completed_at, questions_and_answers
      FROM quiz_submissions
      WHERE id = $1 AND user_id = $2
    `, [quizId, user.id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Quiz not found' }, { status: 404 });
    }

    const quizData = result.rows[0];
    
    // Handle questions_and_answers - it might already be an object from JSONB
    let questionsAndAnswers;
    if (typeof quizData.questions_and_answers === 'string') {
      try {
        questionsAndAnswers = JSON.parse(quizData.questions_and_answers);
      } catch (parseError) {
        console.error('Error parsing questions_and_answers string:', parseError);
        return NextResponse.json({ error: 'Invalid quiz data format' }, { status: 500 });
      }
    } else {
      // Already an object (JSONB from PostgreSQL)
      questionsAndAnswers = quizData.questions_and_answers;
    }

    console.log('Questions and answers type:', typeof questionsAndAnswers);
    console.log('Has questionDetails:', !!questionsAndAnswers?.questionDetails);

    // Return quiz details with question details
    return NextResponse.json({
      id: quizData.id,
      score: quizData.score,
      total_questions: quizData.total_questions,
      percentage: quizData.percentage,
      total_time: quizData.total_time,
      completed_at: quizData.completed_at,
      questionDetails: questionsAndAnswers?.questionDetails || [],
      answers: questionsAndAnswers?.answers || []
    });
  } catch (error) {
    console.error('Error fetching quiz details:', error);
    return NextResponse.json({ error: 'Failed to fetch quiz details' }, { status: 500 });
  }
}