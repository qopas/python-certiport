import { NextRequest, NextResponse } from 'next/server';
import { saveQuizResult } from '@/lib/kv';
import { QuizSubmission } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const submission: QuizSubmission = await request.json();
    
    if (!submission.userName || !submission.answers || !submission.questionDetails) {
      return NextResponse.json(
        { error: 'Invalid submission data' },
        { status: 400 }
      );
    }

    await saveQuizResult(submission);
    
    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error('Error saving quiz result:', error);
    return NextResponse.json(
      { error: 'Failed to save quiz result' },
      { status: 500 }
    );
  }
}