import { describe, expect, it } from 'vitest';
import { submissionWhere } from './submission-sql';

describe('submissionWhere', () => {
  it('is empty without filters', () => {
    expect(submissionWhere({ classId: null, from: null, search: null })).toEqual({ sql: '', params: [] });
  });
  it('binds every filter as a parameter', () => {
    const from = new Date('2026-11-01T00:00:00.000Z');
    const where = submissionWhere({ classId: 3, from, search: "o'brien%" }, 2);
    expect(where.sql).toBe(
      "WHERE u.class_id = $2 AND qs.completed_at >= ($3::timestamptz AT TIME ZONE 'UTC') AND (u.full_name ILIKE $4 OR u.email ILIKE $4)",
    );
    expect(where.params).toEqual([3, from.toISOString(), "%o'brien\\%%"]);
  });
});
