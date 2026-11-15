# Deploying python-certiport

The app (`https://python-certiport.dev.impact-academies.com`) runs as a Docker container on the
ImpactERP **dev server** `impacterp-staging` (178.105.86.227, Hetzner, 4 vCPU, 7.7 GB RAM). That
box also runs Coolify itself and the ImpactERP dev apps. It moved off Vercel in November 2026.

```
browser ──443──▶ coolify-proxy (Traefik v3, Let's Encrypt DNS-01) ──coolify network──▶ python-certiport-app-N :3000
app ──▶ Neon Postgres (eu-central-1)
```

- Traefik and its certificate resolver belong to Coolify; this stack only adds Docker labels, so it
  needs no proxy config and publishes no host port. It is not a Coolify resource and does not show
  in the Coolify dashboard.
- DNS: `*.dev.impact-academies.com` is a wildcard A record to 178.105.86.227 (Cloudflare, DNS only),
  so the hostname needed no DNS change.
- SSH is `deploy@178.105.86.227` (root login is disabled; `deploy` has passwordless sudo).

## Files on the server (`/opt/python-certiport`, root only)

| Path | From |
|---|---|
| `compose.yaml` | `deploy/compose.yaml` |
| `deploy.sh` | `deploy/deploy.sh` |
| `.env` (mode 600) | secrets, names in `deploy/env.example` |

These change rarely and are **not** updated by the workflow. After editing them in the repo, copy
them over:

```bash
ssh deploy@178.105.86.227 'sudo tee /opt/python-certiport/compose.yaml >/dev/null' < deploy/compose.yaml
ssh deploy@178.105.86.227 'sudo tee /opt/python-certiport/deploy.sh >/dev/null' < deploy/deploy.sh
```

A change to the `app` service's labels or limits takes effect on the next release (or run
`sudo /opt/python-certiport/deploy.sh <current tag>` to roll it out now without downtime).

## Releasing

Every push to `master` runs `.github/workflows/deploy.yml`: it builds the `Dockerfile` (Next
`output: 'standalone'`, Node 22; `next build` type-checks and lints), pushes
`ghcr.io/qopas/python-certiport:<sha>`, then SSHes to the dev server as `deploy` with the
deploy key. That key is pinned in `~deploy/.ssh/authorized_keys` to
`command="sudo -n --preserve-env=SSH_ORIGINAL_COMMAND /opt/python-certiport/deploy.sh",restrict`,
so it can only run `deploy.sh <sha> --pull`. The job's short-lived `GITHUB_TOKEN` goes over stdin
so the server can pull that one image; no registry credentials stay on the server. The image is
never built on the dev server.

`deploy.sh` tags the image `python-certiport-app:current`, starts a second `app` container, waits
for it to become healthy (`GET /login`, the one public page; Traefik only routes to healthy
containers), then stops the old one with SIGTERM and a 30s grace. A new container that never
becomes healthy is removed and the old one keeps serving.

GitHub settings the workflow needs: secrets `DEPLOY_SSH_KEY` (private key), `DEPLOY_KNOWN_HOSTS`
(`ssh-keyscan -t ed25519 178.105.86.227`), variable `DEPLOY_HOST=178.105.86.227`.

Manual release of `master` (no push): Actions → Deploy → Run workflow.

## Rollback

Coolify's Docker cleanup runs on this server every night at 00:00 and deletes images that no
container uses, so older release images do not stay on the box. To go back to an older commit,
open its successful **Deploy** run in GitHub Actions and choose **Re-run all jobs**: the run
rebuilds that commit (cached) and releases it the same way.

## Day-to-day

```bash
ssh deploy@178.105.86.227
sudo docker compose -f /opt/python-certiport/compose.yaml ps
sudo docker compose -f /opt/python-certiport/compose.yaml logs -f --tail 200 app
sudo docker stats --no-stream $(sudo docker compose -f /opt/python-certiport/compose.yaml ps -q)
```

- **Resources**: `app` is capped at 1 CPU and 512 MB so it cannot starve the ImpactERP dev apps.
- **Logs**: json-file, 10 MB x 3 per container. The middleware logs every request.
- **Secrets**: edit `/opt/python-certiport/.env`, then `sudo /opt/python-certiport/deploy.sh <current tag>`
  to restart without downtime. Never print it.

## Differences from Vercel

- **Address**: `python-certiport.vercel.app` is no longer used; sign-in cookies are per host, so
  users sign in again once.
- **Database**: unchanged. The Neon project was created through Vercel's Neon integration; move it
  to a Neon account of its own before deleting the Vercel project or that integration.
- **No preview deployments and no CDN**: `_next/static` is served by Next with immutable cache
  headers.
- **Single box**: the dev server failing takes this app down with the ImpactERP dev apps.

## Server bootstrap (already done; for a rebuild)

```bash
ssh deploy@178.105.86.227 'sudo install -d -m 750 /opt/python-certiport'
# copy the files listed above and write .env (the names in deploy/env.example)
ssh deploy@178.105.86.227 'sudo docker network inspect coolify >/dev/null'   # Coolify's proxy network must exist
# ~deploy/.ssh/authorized_keys line for the GitHub deploy key:
# command="sudo -n --preserve-env=SSH_ORIGINAL_COMMAND /opt/python-certiport/deploy.sh",restrict ssh-ed25519 AAAA... python-certiport-deploy
```

The first release before the workflow existed was built on a workstation
(`docker buildx build --platform linux/amd64`), copied with `docker save | ssh ... sudo docker load`
and released with `sudo ./deploy.sh bootstrap-1`.
