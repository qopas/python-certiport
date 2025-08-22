// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyTokenEdge } from './src/lib/auth-edge';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  console.log('🔥 MIDDLEWARE RUNNING FOR:', pathname);

  // Public routes that don't require authentication
  const publicRoutes = ['/login', '/api/auth', '/api/test-db', '/api/debug-auth'];
  
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    console.log('✅ Public route, allowing access');
    return NextResponse.next();
  }

  // Get token from cookie
  const token = request.cookies.get('auth-token')?.value;
  console.log('🔑 Token found:', !!token);

  // If no token, redirect to login
  if (!token) {
    console.log('🔄 No token, redirecting to login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Verify token
  const decoded = verifyTokenEdge(token);
  if (!decoded) {
    console.log('❌ Invalid token, redirecting to login');
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('auth-token');
    return response;
  }

  console.log('✅ Valid token for user:', decoded.email);

  // Check admin routes
  if (pathname.startsWith('/admin') && decoded.role !== 'admin') {
    console.log('🔄 User trying to access admin, redirect to dashboard');
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Check if admin trying to access user dashboard
  if (pathname.startsWith('/dashboard') && decoded.role === 'admin') {
    console.log('🔄 Admin trying to access user dashboard, redirect to admin');
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  // Redirect root to appropriate dashboard
  if (pathname === '/') {
    if (decoded.role === 'admin') {
      console.log('🔄 Admin root redirect to admin dashboard');
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    } else {
      console.log('🔄 User root redirect to user dashboard');
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  console.log('✅ Access allowed');
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};