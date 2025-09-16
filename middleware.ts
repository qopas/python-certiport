// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
 
  console.log('🔐 SECRET ACCESS MODE - MIDDLEWARE RUNNING FOR:', pathname);
  
  // Allow static assets and essential paths
  const allowedPaths = [
    '/_next',        // Next.js assets
    '/favicon.ico',
    '/api',          // API routes
    '/public'        // Public assets
  ];
 
  // If accessing static assets, allow them through
  if (allowedPaths.some(path => pathname.startsWith(path))) {
    console.log('✅ Static asset, allowing access');
    return NextResponse.next();
  }

  // Check if user has the secret access cookie
  const hasSecretAccess = request.cookies.get('secret-access')?.value === 'true';
  
  // Handle the super secret route
  if (pathname === '/super-secret') {
    console.log('🔑 Secret route accessed! Setting access cookie and redirecting to login');
    const response = NextResponse.redirect(new URL('/login', request.url));
    // Set a cookie to remember they accessed through the secret route
    response.cookies.set('secret-access', 'true', { 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 24 hours
    });
    return response;
  }

  // If user has secret access, allow them to navigate freely
  if (hasSecretAccess) {
    console.log('✅ User has secret access, allowing navigation to:', pathname);
    return NextResponse.next();
  }

  // If on maintenance page (root), allow it
  if (pathname === '/') {
    console.log('✅ On maintenance page, allowing access');
    return NextResponse.next();
  }

  // For all other routes without secret access, redirect to maintenance page
  console.log('🔄 No secret access, redirecting to maintenance page from:', pathname);
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};