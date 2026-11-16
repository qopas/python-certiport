// Server only: admin management of students (role 'user') and classes.
import { randomBytes } from 'node:crypto';
import { query, withTransaction } from '@/lib/db';
import { hashPassword } from '@/lib/auth';
import { badRequest, notFound } from '@/lib/api/errors';
import { containsPattern, type Pagination } from '@/lib/api/params';
import type { AdminClass, AdminUser, Page, RosterStudent } from './types';

interface UserDbRow {
  id: number;
  email: string;
  full_name: string;
  class_id: number | null;
  class_name: string | null;
  is_active: boolean;
  created_at: Date | null;
  last_login: Date | null;
}

const USER_COLUMNS = `u.id, u.email, u.full_name, u.class_id, c.name AS class_name, u.is_active,
  (u.created_at AT TIME ZONE 'UTC') AS created_at, (u.last_login AT TIME ZONE 'UTC') AS last_login`;

const toUser = (r: UserDbRow): AdminUser => ({
  id: r.id,
  email: r.email,
  fullName: r.full_name,
  classId: r.class_id,
  className: r.class_name,
  isActive: r.is_active !== false,
  createdAt: r.created_at ? r.created_at.toISOString() : '',
  lastLogin: r.last_login ? r.last_login.toISOString() : null,
});

export const generateTemporaryPassword = () => randomBytes(9).toString('base64url');

export const listStudents = async (
  filters: { search: string | null; classId: number | null },
  page: Pagination,
): Promise<Page<AdminUser>> => {
  const clauses = [`u.role = 'user'`];
  const params: unknown[] = [];
  if (filters.classId !== null) {
    params.push(filters.classId);
    clauses.push(`u.class_id = $${params.length}`);
  }
  if (filters.search) {
    params.push(containsPattern(filters.search));
    clauses.push(`(u.full_name ILIKE $${params.length} OR u.email ILIKE $${params.length})`);
  }
  const where = `WHERE ${clauses.join(' AND ')}`;
  const [list, count] = await Promise.all([
    query<UserDbRow>(
      `SELECT ${USER_COLUMNS} FROM users u LEFT JOIN classes c ON c.id = u.class_id ${where}
       ORDER BY u.created_at DESC, u.id DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      [...params, page.pageSize, page.offset],
    ),
    query<{ count: number }>(`SELECT count(*)::int AS count FROM users u ${where}`, params),
  ]);
  return { items: list.rows.map(toUser), total: count.rows[0].count, page: page.page, pageSize: page.pageSize };
};

const assertClassExists = async (classId: number | null) => {
  if (classId === null) return;
  const { rowCount } = await query('SELECT 1 FROM classes WHERE id = $1', [classId]);
  if (!rowCount) throw badRequest('Class not found');
};

export const createStudent = async (input: {
  email: string;
  fullName: string;
  classId: number | null;
  password: string | null;
}): Promise<{ user: AdminUser; temporaryPassword: string | null }> => {
  await assertClassExists(input.classId);
  // Without a typed password the admin gets a one-time password to hand to the student.
  const temporaryPassword = input.password ? null : generateTemporaryPassword();
  const { rows } = await query<{ id: number }>(
    `INSERT INTO users (email, password_hash, full_name, class_id) VALUES ($1, $2, $3, $4) RETURNING id`,
    [input.email, await hashPassword(input.password ?? temporaryPassword!), input.fullName, input.classId],
  );
  return { user: await getStudent(rows[0].id), temporaryPassword };
};

export const getStudent = async (id: number): Promise<AdminUser> => {
  const { rows } = await query<UserDbRow>(
    `SELECT ${USER_COLUMNS} FROM users u LEFT JOIN classes c ON c.id = u.class_id WHERE u.id = $1 AND u.role = 'user'`,
    [id],
  );
  if (rows.length === 0) throw notFound('Student not found');
  return toUser(rows[0]);
};

export const updateStudent = async (
  id: number,
  input: { email: string; fullName: string; classId: number | null; isActive: boolean; newPassword: string | null },
): Promise<AdminUser> => {
  await assertClassExists(input.classId);
  const params: unknown[] = [input.email, input.fullName, input.classId, input.isActive, id];
  let passwordSql = '';
  if (input.newPassword) {
    params.push(await hashPassword(input.newPassword));
    passwordSql = `, password_hash = $${params.length}`;
  }
  const { rowCount } = await query(
    `UPDATE users SET email = $1, full_name = $2, class_id = $3, is_active = $4, updated_at = CURRENT_TIMESTAMP${passwordSql}
     WHERE id = $5 AND role = 'user'`,
    params,
  );
  if (!rowCount) throw notFound('Student not found');
  return getStudent(id);
};

export const resetStudentPassword = async (id: number): Promise<string> => {
  const temporaryPassword = generateTemporaryPassword();
  const { rowCount } = await query(
    `UPDATE users SET password_hash = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 AND role = 'user'`,
    [await hashPassword(temporaryPassword), id],
  );
  if (!rowCount) throw notFound('Student not found');
  return temporaryPassword;
};

// Submissions and quiz sessions go with the user (ON DELETE CASCADE). Admin accounts are never deleted here.
export const deleteStudent = async (id: number): Promise<string> => {
  const { rows } = await query<{ email: string }>(`DELETE FROM users WHERE id = $1 AND role = 'user' RETURNING email`, [id]);
  if (rows.length === 0) throw notFound('Student not found');
  return rows[0].email;
};

export const listRoster = async (): Promise<RosterStudent[]> => {
  const { rows } = await query<{ id: number; full_name: string; email: string; class_id: number | null; class_name: string | null }>(
    `SELECT u.id, u.full_name, u.email, u.class_id, c.name AS class_name
     FROM users u LEFT JOIN classes c ON c.id = u.class_id
     WHERE u.role = 'user' AND u.is_active = true ORDER BY u.full_name, u.id`,
  );
  return rows.map((r) => ({ id: r.id, fullName: r.full_name, email: r.email, classId: r.class_id, className: r.class_name }));
};

// Makes studentIds exactly the class's students: others leave the class, these join it.
export const setClassStudents = async (classId: number, studentIds: number[]): Promise<number> =>
  withTransaction(async (tx) => {
    const cls = await tx.query('SELECT 1 FROM classes WHERE id = $1 FOR UPDATE', [classId]);
    if (!cls.rowCount) throw notFound('Class not found');
    await tx.query(
      `UPDATE users SET class_id = NULL, updated_at = CURRENT_TIMESTAMP
       WHERE class_id = $1 AND role = 'user' AND NOT (id = ANY($2::int[]))`,
      [classId, studentIds],
    );
    const { rowCount } = await tx.query(
      `UPDATE users SET class_id = $1, updated_at = CURRENT_TIMESTAMP WHERE id = ANY($2::int[]) AND role = 'user'`,
      [classId, studentIds],
    );
    return rowCount ?? 0;
  });

interface ClassDbRow {
  id: number;
  name: string;
  description: string | null;
  user_count: number;
  created_at: Date | null;
}

const toClass = (r: ClassDbRow): AdminClass => ({
  id: r.id,
  name: r.name,
  description: r.description,
  userCount: r.user_count,
  createdAt: r.created_at ? r.created_at.toISOString() : '',
});

export const listClasses = async (): Promise<AdminClass[]> => {
  const { rows } = await query<ClassDbRow>(
    `SELECT c.id, c.name, c.description, (c.created_at AT TIME ZONE 'UTC') AS created_at,
            count(u.id)::int AS user_count
     FROM classes c
     LEFT JOIN users u ON u.class_id = c.id AND u.role = 'user' AND u.is_active = true
     GROUP BY c.id ORDER BY c.created_at DESC, c.id DESC`,
  );
  return rows.map(toClass);
};

export const createClass = async (input: { name: string; description: string | null }, adminId: number) => {
  const { rows } = await query<{ id: number }>(
    `INSERT INTO classes (name, description, created_by_admin_id) VALUES ($1, $2, $3) RETURNING id`,
    [input.name, input.description, adminId],
  );
  return rows[0].id;
};

export const updateClass = async (id: number, input: { name: string; description: string | null }) => {
  const { rowCount } = await query(`UPDATE classes SET name = $1, description = $2 WHERE id = $3`, [input.name, input.description, id]);
  if (!rowCount) throw notFound('Class not found');
};

// Refuses while any user (active or not) is still in the class.
export const deleteClass = async (id: number): Promise<string> =>
  withTransaction(async (tx) => {
    const cls = await tx.query<{ name: string }>('SELECT name FROM classes WHERE id = $1 FOR UPDATE', [id]);
    if (!cls.rowCount) throw notFound('Class not found');
    const members = await tx.query<{ count: number }>('SELECT count(*)::int AS count FROM users WHERE class_id = $1', [id]);
    if (members.rows[0].count > 0) {
      throw badRequest(`Class "${cls.rows[0].name}" still has ${members.rows[0].count} users. Move them to another class first.`);
    }
    await tx.query('DELETE FROM classes WHERE id = $1', [id]);
    return cls.rows[0].name;
  });
