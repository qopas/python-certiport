This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Development

Create `.env.local` with `DATABASE_URL` (Postgres; schema in `src/scripts/setup-database.sql`),
`JWT_SECRET` and `DEFAULT_USER_PASSWORD`, then:

```bash
npm install
npm run dev         # http://localhost:3000
npm test            # unit tests (Vitest)
npm run typecheck
npm run lint
```

Production mode connects with SSL; for a local Postgres without SSL add `?sslmode=disable` to
`DATABASE_URL`.

### Admin dashboard data

The admin dashboard never downloads all submissions. Each tab asks the server for one page:

- `GET /api/admin/submissions?classId=&from=&search=&page=&pageSize=` returns a page of rows plus
  aggregate stats, without the stored question data.
- `GET /api/admin/submissions/:id` loads one submission's questions when "View details" is opened.
- `GET /api/admin/question-analytics?classId=` aggregates the hardest questions in Postgres.
- `GET /api/admin/submissions/export` returns the filtered rows as CSV.

Stored answers come from the student's browser, so the admin API only returns question-bank HTML
or escaped text (`src/lib/admin/question-view.ts`).

## Deploy

Production runs in Docker on the ImpactERP dev server and is released on every push to `master`;
see [`deploy/README.md`](deploy/README.md).
