import { NextResponse } from 'next/server';
import { readJson, withUser } from '@/lib/api/http';
import { badRequest } from '@/lib/api/errors';
import { parseAnswer } from '@/lib/quiz/grade';
import { submitTestingSession } from '@/lib/quiz/testing-session';

// Body: { sessionId, answers } where answers[i] answers the i-th question of that test.
// The server grades it; scores, times and question data from the browser are never trusted.
export const POST = withUser(async (request, user) => {
  const body = await readJson(request);
  if (typeof body.sessionId !== 'string' || body.sessionId.length > 100) throw badRequest('sessionId is required');
  if (!Array.isArray(body.answers) || body.answers.length > 200) throw badRequest('answers must be an array');
  const results = await submitTestingSession(user.id, body.sessionId, body.answers.map(parseAnswer));
  return NextResponse.json({ success: true, mode: 'testing', results });
});
