import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { quizQuestions } from '@/lib/questions';

const QUIZ_TIME_LIMIT = 50 * 60; // 50 minutes in seconds
const QUESTIONS_PER_QUIZ = 42;

export async function POST(request: NextRequest) {
  const user = requireAuth(request);
  
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  try {
    // Select random questions
    const shuffledQuestions = [...quizQuestions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, QUESTIONS_PER_QUIZ);

    // Generate session ID
    const sessionId = `quiz-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    console.log('Creating new quiz session:', {
      userId: user.id,
      sessionId,
      questionsCount: selectedQuestions.length,
      timeLimit: QUIZ_TIME_LIMIT,
      firstQuestionPreview: selectedQuestions[0]?.question?.substring(0, 50)
    });

    // Return quiz data for localStorage storage
    return NextResponse.json({
      success: true,
      sessionId,
      questions: selectedQuestions,
      timeLimit: QUIZ_TIME_LIMIT,
      userId: user.id,
      message: 'Quiz data ready for localStorage'
    });
  } catch (error) {
    console.error('Start quiz error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Failed to start quiz' 
    }, { status: 500 });
  }
}