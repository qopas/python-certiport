// app/api/quiz/submit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { db } from '@/lib/db';
import { QuizMode } from '@/lib/quiz-mode-types';
import { QuestionResult } from '@/lib/types';

export async function POST(request: NextRequest) {
  const user = requireAuth(request);
  
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      sessionId,
      mode,
      answers,
      questions,
      score,
      percentage,
      totalTime,
      questionResults,
      startedAt
    }: {
      sessionId: string;
      mode: QuizMode;
      answers: (string | string[] | { [key: string]: string } | null)[];
      questions?: any[];
      score: number;
      percentage: number;
      totalTime: number;
      questionResults: QuestionResult[];
      startedAt: string;
    } = body;

    console.log('Quiz submission received:', {
      userId: user.id,
      sessionId,
      mode,
      score,
      percentage,
      totalTime,
      questionsCount: questions?.length || questionResults?.length
    });

    // Training mode submissions are NOT saved to database
    if (mode === 'training') {
      console.log('Training mode submission - not saving to database');
      
      return NextResponse.json({
        success: true,
        mode: 'training',
        message: 'Training completed successfully. Results not saved.',
        results: {
          score,
          percentage,
          totalTime,
          questionResults,
          totalQuestions: questionResults?.length || 0
        }
      });
    }

    // Testing mode submissions ARE saved to database
    if (mode === 'testing') {
      console.log('Testing mode submission - saving to database');

      // Generate submission ID for testing mode (compatible with your existing format)
      const submissionId = `test-${user.id}-${Date.now()}`;
      
      try {
        // Save to quiz_submissions table (using your existing schema)
        await db.query(`
          INSERT INTO quiz_submissions (
            user_id, 
            class_id, 
            submission_id, 
            score, 
            total_questions, 
            percentage, 
            total_time, 
            started_at, 
            completed_at,
            questions_and_answers
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        `, [
          user.id,
          user.class_id || null,
          submissionId,
          score,
          questionResults?.length || 0,
          percentage,
          totalTime,
          new Date(startedAt),
          new Date(),
          JSON.stringify({
            sessionId,
            mode,
            questions,
            answers,
            questionResults
          })
        ]);

        console.log('Testing submission saved successfully:', submissionId);

        // Update user's last activity
        await db.query(`
          UPDATE users 
          SET updated_at = CURRENT_TIMESTAMP 
          WHERE id = $1
        `, [user.id]);

        return NextResponse.json({
          success: true,
          mode: 'testing',
          submissionId,
          message: 'Test completed and results saved successfully.',
          results: {
            score,
            percentage,
            totalTime,
            questionResults,
            totalQuestions: questionResults?.length || 0,
            submissionId,
            completedAt: new Date().toISOString()
          }
        });

      } catch (dbError) {
        console.error('Database error saving test results:', dbError);
        
        // Return results even if database save fails
        return NextResponse.json({
          success: true,
          mode: 'testing',
          warning: 'Test completed but results may not have been saved properly.',
          results: {
            score,
            percentage,
            totalTime,
            questionResults,
            totalQuestions: questionResults?.length || 0
          }
        });
      }
    }

    return NextResponse.json({
      success: false,
      error: 'Invalid quiz mode'
    }, { status: 400 });

  } catch (error) {
    console.error('Quiz submission error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Failed to process quiz submission' 
    }, { status: 500 });
  }
}