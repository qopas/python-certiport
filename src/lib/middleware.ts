// lib/middleware.ts
import { NextRequest } from 'next/server';
import { verifyToken, User } from './auth';

export function getAuthUser(request: NextRequest): User | null {
  try {
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) return null;

    const decoded = verifyToken(token);
    
    if (!decoded) return null;

    return {
      id: decoded.userId,
      email: decoded.email,
      full_name: decoded.full_name || '',
      class_id: decoded.classId,
      role: decoded.role,
      is_active: true
    };
  } catch (error) {
    console.error('getAuthUser error:', error);
    return null;
  }
}

export function requireAuth(request: NextRequest): User | null {
  return getAuthUser(request);
}

export function requireAdmin(request: NextRequest): User | null {
  const user = getAuthUser(request);
  return user?.role === 'admin' ? user : null;
}