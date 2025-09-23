// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyTokenEdge } from './src/lib/auth-edge';

// middleware.ts
export async function middleware(request: NextRequest) {
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

  // Verify token (now async)
  const decoded = await verifyTokenEdge(token);
  if (!decoded) {
    console.log('❌ Invalid token, redirecting to login');
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('auth-token');
    return response;
  }

  console.log('✅ Valid token for user:', decoded.email);
  
  // Rest of your middleware logic...
  // ... (keep the admin route checks and redirects as they are)
  
  console.log('✅ Access allowed');
  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};