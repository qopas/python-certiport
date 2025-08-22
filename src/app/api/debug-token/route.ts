// app/api/debug-token/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { requireAuth } from '@/lib/middleware';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;
    const user = requireAuth(request);
    
    let decoded = null;
    if (token) {
      decoded = verifyToken(token);
    }
    
    return NextResponse.json({
      hasToken: !!token,
      tokenPreview: token ? token.substring(0, 50) + '...' : null,
      decoded,
      middlewareUser: user,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}