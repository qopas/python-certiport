// Pure parsing/validation for route input. Every function throws HttpError(400) on bad input.
import { badRequest } from './errors';

export const MAX_PAGE_SIZE = 100;
const DEFAULT_PAGE_SIZE = 25;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const parseId = (value: unknown, name = 'id'): number => {
  const n = typeof value === 'number' ? value : typeof value === 'string' && /^\d+$/.test(value) ? Number(value) : NaN;
  if (!Number.isSafeInteger(n) || n <= 0) throw badRequest(`Invalid ${name}`);
  return n;
};

export const optionalId = (value: unknown, name = 'id'): number | null =>
  value === undefined || value === null || value === '' || value === 'all' ? null : parseId(value, name);

export interface Pagination {
  page: number;
  pageSize: number;
  offset: number;
}

const intInRange = (raw: string | null, fallback: number, min: number, max: number) => {
  if (raw === null || raw === '') return fallback;
  const n = Number(raw);
  return Number.isInteger(n) ? Math.min(Math.max(n, min), max) : fallback;
};

export const parsePagination = (params: URLSearchParams): Pagination => {
  const page = intInRange(params.get('page'), 1, 1, 100_000);
  const pageSize = intInRange(params.get('pageSize'), DEFAULT_PAGE_SIZE, 1, MAX_PAGE_SIZE);
  return { page, pageSize, offset: (page - 1) * pageSize };
};

export const parseSearch = (params: URLSearchParams): string | null => {
  const search = params.get('search')?.trim().slice(0, 100);
  return search ? search : null;
};

export const parseFrom = (params: URLSearchParams): Date | null => {
  const raw = params.get('from');
  if (!raw) return null;
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) throw badRequest('Invalid from date');
  return date;
};

export interface SubmissionFilters {
  classId: number | null;
  from: Date | null;
  search: string | null;
}

export const parseSubmissionFilters = (params: URLSearchParams): SubmissionFilters => ({
  classId: optionalId(params.get('classId'), 'classId'),
  from: parseFrom(params),
  search: parseSearch(params),
});

// LIKE pattern that matches `term` literally anywhere in the value.
export const containsPattern = (term: string) => `%${term.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;

export const requireText = (value: unknown, name: string, maxLength = 255): string => {
  const text = typeof value === 'string' ? value.trim() : '';
  if (!text) throw badRequest(`${name} is required`);
  if (text.length > maxLength) throw badRequest(`${name} is too long`);
  return text;
};

export const optionalText = (value: unknown, name: string, maxLength = 1000): string | null => {
  if (value === undefined || value === null) return null;
  if (typeof value !== 'string') throw badRequest(`${name} must be text`);
  const text = value.trim();
  if (text.length > maxLength) throw badRequest(`${name} is too long`);
  return text || null;
};

export const requireEmail = (value: unknown): string => {
  // Kept as typed: sign-in matches the stored email exactly.
  const email = requireText(value, 'Email');
  if (!EMAIL_RE.test(email)) throw badRequest('Email is not valid');
  return email;
};

export const optionalPassword = (value: unknown): string | null => {
  const password = optionalText(value, 'Password', 128);
  if (password !== null && password.length < 6) throw badRequest('Password must be at least 6 characters');
  return password;
};

export const requireBoolean = (value: unknown, name: string): boolean => {
  if (typeof value !== 'boolean') throw badRequest(`${name} must be true or false`);
  return value;
};

export const parseIdList = (value: unknown, name: string): number[] => {
  if (!Array.isArray(value)) throw badRequest(`${name} must be an array`);
  if (value.length > 5000) throw badRequest(`${name} is too long`);
  return [...new Set(value.map((v) => parseId(v, name)))];
};
