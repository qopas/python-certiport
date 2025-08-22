// app/api/auth/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const result = await loginUser(email, password);

    if (!result.success) {
      return NextResponse.json(
        { error: result.message },
        { status: 401 }
      );
    }

    console.log('Login successful for user:', result.user); // Debug log

    const response = NextResponse.json({ 
      success: true, 
      user: result.user,
      redirect: result.user?.role === 'admin' ? '/admin/dashboard' : '/dashboard'
    });

    // Set auth token as httpOnly cookie
    response.cookies.set('auth-token', result.token!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 60 * 60 * 24,
      path: "/"
    });

    return response;
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

// Logout endpoint
export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('auth-token');
  return response;
}