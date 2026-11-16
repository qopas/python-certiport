// Pure SQL building for the admin submission queries (filters are always bound parameters).
import { containsPattern, type SubmissionFilters } from '@/lib/api/params';

export const SUBMISSION_FROM = `
  FROM quiz_submissions qs
  JOIN users u ON u.id = qs.user_id
  LEFT JOIN classes c ON c.id = u.class_id`;

// Columns for list/detail rows. Never selects questions_and_answers (large JSONB).
export const SUBMISSION_COLUMNS = `
  qs.id, u.full_name, u.email, u.class_id, c.name AS class_name, qs.score, qs.total_questions,
  qs.percentage::float8 AS percentage, qs.total_time, (qs.completed_at AT TIME ZONE 'UTC') AS completed_at`;

export interface SqlFragment {
  sql: string;
  params: unknown[];
}

// WHERE clause for the filters. Class means the student's current class (as in the dashboard).
// completed_at is a UTC timestamp without time zone.
export const submissionWhere = (filters: SubmissionFilters, firstParam = 1): SqlFragment => {
  const clauses: string[] = [];
  const params: unknown[] = [];
  const bind = (value: unknown) => {
    params.push(value);
    return `$${firstParam + params.length - 1}`;
  };
  if (filters.classId !== null) clauses.push(`u.class_id = ${bind(filters.classId)}`);
  if (filters.from) clauses.push(`qs.completed_at >= (${bind(filters.from.toISOString())}::timestamptz AT TIME ZONE 'UTC')`);
  if (filters.search) {
    const pattern = bind(containsPattern(filters.search));
    clauses.push(`(u.full_name ILIKE ${pattern} OR u.email ILIKE ${pattern})`);
  }
  return { sql: clauses.length ? `WHERE ${clauses.join(' AND ')}` : '', params };
};
