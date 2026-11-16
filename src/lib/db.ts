import { Pool, type PoolClient, type QueryResultRow } from 'pg';

// One pool per server process. Idle connections close after 10s so Neon can scale to zero.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 5,
  idleTimeoutMillis: 10_000,
});

export { pool as db };

export type Queryable = Pick<PoolClient, 'query'>;

export const query = <T extends QueryResultRow = QueryResultRow>(text: string, params?: unknown[]) =>
  pool.query<T>(text, params);

// Runs fn inside BEGIN/COMMIT on one connection; rolls back on any error.
export const withTransaction = async <T>(fn: (client: PoolClient) => Promise<T>): Promise<T> => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK').catch(() => undefined);
    throw error;
  } finally {
    client.release();
  }
};
