import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyTokenEdge } from './src/lib/auth-edge';

const PUBLIC_PATHS = ['/login', '/api/auth'];

const isPublic = (pathname: string) => PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
const isAdminArea = (pathname: string) => pathname.startsWith('/admin') || pathname.startsWith('/api/admin');

// Signed-out users go to /login (APIs get 401); only admins reach /admin and /api/admin.
// Route handlers still check the token themselves.
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isPublic(pathname)) return NextResponse.next();

  const isApi = pathname.startsWith('/api/');
  const token = request.cookies.get('auth-token')?.value;
  const user = token ? await verifyTokenEdge(token) : null;

  if (!user) {
    const response = isApi
      ? NextResponse.json({ error: 'Authentication required' }, { status: 401 })
      : NextResponse.redirect(new URL('/login', request.url));
    if (token) response.cookies.delete('auth-token');
    return response;
  }

  if (isAdminArea(pathname) && user.role !== 'admin') {
    return isApi
      ? NextResponse.json({ error: 'Admin access required' }, { status: 403 })
      : NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
