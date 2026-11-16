import { randomInt } from 'node:crypto';
import { NextResponse } from 'next/server';
import { readJson, withUser } from '@/lib/api/http';
import { badRequest } from '@/lib/api/errors';
import { getQuizModeConfig } from '@/lib/quiz-mode-config';
import { pickQuestions, startTestingSession } from '@/lib/quiz/testing-session';

// Testing: a server-side attempt; the browser gets the questions without answer keys.
// Training: practice with instant feedback, nothing is recorded, so the questions include their keys.
export const POST = withUser(async (request, user) => {
  const { mode } = await readJson(request);
  if (mode === 'testing') {
    const test = await startTestingSession(user.id);
    return NextResponse.json({ success: true, mode, config: getQuizModeConfig('testing'), ...test });
  }
  if (mode === 'training') {
    return NextResponse.json({
      success: true,
      mode,
      config: getQuizModeConfig('training'),
      sessionId: `training-${Date.now()}-${randomInt(1e9)}`,
      questions: pickQuestions(),
      timeLimit: null,
    });
  }
  throw badRequest('mode must be "training" or "testing"');
});
