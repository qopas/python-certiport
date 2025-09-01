// app/api/quiz/start/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { quizQuestions } from '@/lib/questions';
import { createQuizSession, getQuizModeConfig } from '@/lib/quiz-mode-config';
import { QuizMode } from '@/lib/quiz-mode-types';

const QUESTIONS_PER_QUIZ = 42;

export async function POST(request: NextRequest) {
  console.log('API route started');
  
  const user = requireAuth(request);
  console.log('Auth check completed, user:', user ? 'found' : 'not found');
 
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  try {
    console.log('Parsing request body...');
    const body = await request.json();
    console.log('Body parsed:', body);
    
    const { mode }: { mode: QuizMode } = body;
    console.log('Mode extracted:', mode);

    // Validate mode
    if (!mode || !['training', 'testing'].includes(mode)) {
      return NextResponse.json({ 
        error: 'Invalid mode. Must be "training" or "testing"' 
      }, { status: 400 });
    }

    // Get mode configuration
    const config = getQuizModeConfig(mode);

    // Select random questions
    const shuffledQuestions = [...quizQuestions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, QUESTIONS_PER_QUIZ);

    // Generate session ID with mode prefix
    const sessionId = `${mode}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create quiz session
    const session = createQuizSession(sessionId, mode, selectedQuestions);

    console.log('Creating new quiz session:', {
      userId: user.id,
      sessionId,
      mode,
      questionsCount: selectedQuestions.length,
      timeLimit: config.timeLimit || 'unlimited',
      hasTimeLimit: config.hasTimeLimit,
      showImmediateFeedback: config.showImmediateFeedback,
      saveResults: config.saveResults,
      firstQuestionPreview: selectedQuestions[0]?.question?.substring(0, 50)
    });

    // Return different responses based on mode
    const response = {
      success: true,
      sessionId,
      mode,
      questions: selectedQuestions,
      config,
      userId: user.id,
      timeLimit: config.timeLimit,
      message: mode === 'training' 
        ? 'Training session ready - no time limit, immediate feedback enabled'
        : `Testing session ready - ${Math.floor((config.timeLimit || 0) / 60)} minutes time limit`
    };

    // For testing mode, include additional warnings
    if (mode === 'testing') {
      (response as any).warnings = [
        'Timer will start immediately when you begin',
        'Answers cannot be changed once submitted',
        'Results will be permanently recorded'
      ];
    }

    return NextResponse.json(response);
  } catch (error) {
  console.error('Detailed error:', error);
  return NextResponse.json({
    success: false,
    error: 'Failed to start quiz',
    details: error instanceof Error ? error.message : String(error)
  }, { status: 500 });
}
}