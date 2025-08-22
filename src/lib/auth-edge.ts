// lib/auth-edge.ts
// Edge-compatible auth utilities (no database imports)
import jwt from 'jsonwebtoken';

export interface TokenPayload {
  userId: number;
  email: string;
  full_name?: string;
  role: 'user' | 'admin';
  classId: number | null;
}

// Verify JWT token (Edge Runtime compatible)
export function verifyTokenEdge(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    return {
      userId: decoded.userId,
      email: decoded.email,
      full_name: decoded.full_name || '',
      role: decoded.role,
      classId: decoded.classId
    };
  } catch (error) {
    return null;
  }
}