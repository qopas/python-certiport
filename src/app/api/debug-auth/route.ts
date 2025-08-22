// app/api/debug-auth/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  const pathname = request.nextUrl.pathname;
  
  return NextResponse.json({
    pathname,
    hasToken: !!token,
    token: token || 'No token',
    cookies: Object.fromEntries(request.cookies),
    headers: Object.fromEntries(request.headers.entries())
  });
}