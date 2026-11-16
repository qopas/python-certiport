import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, requireAuth } from '@/lib/middleware';
import type { User } from '@/lib/auth';
import { HttpError, badRequest } from './errors';

export const jsonError = (status: number, error: string) => NextResponse.json({ error }, { status });

const isPgError = (error: unknown): error is { code: string } =>
  typeof error === 'object' && error !== null && typeof (error as { code?: unknown }).code === 'string';

export const toErrorResponse = (error: unknown) => {
  if (error instanceof HttpError) return jsonError(error.status, error.message);
  if (isPgError(error) && error.code === '23505') return jsonError(409, 'A record with these details already exists');
  console.error('Unhandled API error:', error);
  return jsonError(500, 'Something went wrong');
};

type RouteContext<P> = { params: Promise<P> };

// Admin-only route: 403 for anyone else, uniform error handling for the handler.
export const withAdmin =
  <P = Record<string, never>>(
    handler: (request: NextRequest, admin: User, params: P) => Promise<Response>,
  ) =>
  async (request: NextRequest, context: RouteContext<P>) => {
    const admin = requireAdmin(request);
    if (!admin) return jsonError(403, 'Admin access required');
    try {
      return await handler(request, admin, await context.params);
    } catch (error) {
      return toErrorResponse(error);
    }
  };

// Any signed-in user: 401 otherwise, same error handling as withAdmin.
export const withUser =
  <P = Record<string, never>>(
    handler: (request: NextRequest, user: User, params: P) => Promise<Response>,
  ) =>
  async (request: NextRequest, context: RouteContext<P>) => {
    const user = requireAuth(request);
    if (!user) return jsonError(401, 'Authentication required');
    try {
      return await handler(request, user, await context.params);
    } catch (error) {
      return toErrorResponse(error);
    }
  };

export const readJson = async (request: NextRequest): Promise<Record<string, unknown>> => {
  try {
    const body: unknown = await request.json();
    if (typeof body === 'object' && body !== null && !Array.isArray(body)) return body as Record<string, unknown>;
  } catch {
    // fall through
  }
  throw badRequest('Request body must be a JSON object');
};
