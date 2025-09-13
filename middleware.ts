// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Maintenance mode middleware - redirect all routes to maintenance page
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  console.log('🔥 MAINTENANCE MODE - MIDDLEWARE RUNNING FOR:', pathname);

  // Allow static assets and API routes to load properly
  const allowedPaths = [
    '/_next',     // Next.js assets
    '/favicon.ico',
    '/api',       // Keep API routes accessible if needed
    '/public'     // Public assets
  ];
  
  // If accessing static assets, allow them through
  if (allowedPaths.some(path => pathname.startsWith(path))) {
    console.log('✅ Static asset, allowing access');
    return NextResponse.next();
  }

  // If already on the main page (maintenance page), allow it
  if (pathname === '/') {
    console.log('✅ On maintenance page, allowing access');
    return NextResponse.next();
  }

  // For all other routes, redirect to maintenance page
  console.log('🔄 Redirecting to maintenance page from:', pathname);
  return NextResponse.redirect(new URL('/', request.url));
}
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};