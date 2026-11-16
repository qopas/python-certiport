import { describe, expect, it } from 'vitest';
import { HttpError } from './errors';
import { containsPattern, optionalId, parseId, parseIdList, parsePagination, parseSubmissionFilters, requireEmail } from './params';

const q = (s: string) => new URLSearchParams(s);

describe('parseId', () => {
  it('accepts positive integers', () => {
    expect(parseId('42')).toBe(42);
    expect(parseId(7)).toBe(7);
  });
  it.each(['0', '-1', '1.5', 'abc', '', '1e3', ' 5'])('rejects %j', (v) => {
    expect(() => parseId(v)).toThrow(HttpError);
  });
});

describe('optionalId', () => {
  it('treats empty and "all" as no filter', () => {
    expect(optionalId(null)).toBeNull();
    expect(optionalId('')).toBeNull();
    expect(optionalId('all')).toBeNull();
    expect(optionalId('3')).toBe(3);
  });
});

describe('parsePagination', () => {
  it('defaults and clamps', () => {
    expect(parsePagination(q(''))).toEqual({ page: 1, pageSize: 25, offset: 0 });
    expect(parsePagination(q('page=3&pageSize=10'))).toEqual({ page: 3, pageSize: 10, offset: 20 });
    expect(parsePagination(q('page=0&pageSize=100000'))).toEqual({ page: 1, pageSize: 100, offset: 0 });
    expect(parsePagination(q('page=x&pageSize=-4'))).toEqual({ page: 1, pageSize: 1, offset: 0 });
  });
});

describe('parseSubmissionFilters', () => {
  it('parses all filters', () => {
    const f = parseSubmissionFilters(q('classId=4&from=2026-11-01T00:00:00.000Z&search=%20ana%20'));
    expect(f).toEqual({ classId: 4, from: new Date('2026-11-01T00:00:00.000Z'), search: 'ana' });
  });
  it('rejects a bad date', () => {
    expect(() => parseSubmissionFilters(q('from=yesterday'))).toThrow(HttpError);
  });
});

describe('containsPattern', () => {
  it('escapes LIKE wildcards', () => {
    expect(containsPattern('50%_a\\b')).toBe('%50\\%\\_a\\\\b%');
  });
});

describe('requireEmail / parseIdList', () => {
  it('trims email and checks its shape', () => {
    expect(requireEmail('  Ana@Example.COM ')).toBe('Ana@Example.COM');
    expect(() => requireEmail('nope')).toThrow(HttpError);
  });
  it('dedupes ids and rejects junk', () => {
    expect(parseIdList([1, '2', 2], 'ids')).toEqual([1, 2]);
    expect(() => parseIdList('1,2', 'ids')).toThrow(HttpError);
    expect(() => parseIdList([1, 'x'], 'ids')).toThrow(HttpError);
  });
});
