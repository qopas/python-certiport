#!/usr/bin/env bash
# Zero-downtime release of one image tag on the dev server. Lives at /opt/python-certiport/deploy.sh
# and runs as root (sudo).
#
#   deploy.sh <tag>          release ghcr.io/qopas/python-certiport:<tag> (already on the host)
#   deploy.sh <tag> --pull   first read "<user> <token>" from stdin, pull the tag from GHCR, log out
#
# The GitHub Action's deploy key is pinned to this script in ~deploy/.ssh/authorized_keys
# (`command="sudo -n --preserve-env=SSH_ORIGINAL_COMMAND /opt/python-certiport/deploy.sh",restrict`),
# so over SSH the requested arguments arrive in SSH_ORIGINAL_COMMAND and are validated here.
#
# Rollout: tag the image python-certiport-app:current, start one more `app` container next to the
# running one, wait until Docker reports it healthy (Traefik only routes to healthy containers),
# then stop the old one (SIGTERM, 30s grace). A new container that never gets healthy is removed
# and the old one keeps serving.
set -euo pipefail

IMAGE_REPO="ghcr.io/qopas/python-certiport"
CURRENT="python-certiport-app:current"
KEEP_IMAGES=3
HEALTH_TIMEOUT_SECONDS=180

cd "$(dirname "$(readlink -f "$0")")"

if [[ -n "${SSH_ORIGINAL_COMMAND:-}" ]]; then
  read -r -a args <<<"$SSH_ORIGINAL_COMMAND"
  set -- "${args[@]}"
fi

tag="${1:-}"
mode="${2:-}"
if [[ ! "$tag" =~ ^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$ ]] || [[ -n "$mode" && "$mode" != "--pull" ]] || (($# > 2)); then
  echo "usage: deploy.sh <tag> [--pull]" >&2
  exit 2
fi

exec 9>/run/lock/python-certiport-deploy.lock
flock -w 600 9 || { echo "another deploy is still running" >&2; exit 1; }

log() { echo "[deploy $(date -u +%H:%M:%S)] $*"; }

image="$IMAGE_REPO:$tag"

if [[ "$mode" == "--pull" ]]; then
  read -r registry_user registry_token
  DOCKER_CONFIG="$(mktemp -d)"
  export DOCKER_CONFIG
  trap 'rm -rf "$DOCKER_CONFIG"' EXIT
  printf '%s' "$registry_token" | docker login ghcr.io -u "$registry_user" --password-stdin >/dev/null
  log "pulling $image"
  docker pull --quiet "$image" >/dev/null
  docker logout ghcr.io >/dev/null
fi

docker image inspect "$image" >/dev/null 2>&1 || { echo "image $image is not on this host" >&2; exit 1; }

# A stopped app container would be restarted by `--scale` instead of a new one being created.
mapfile -t stale_ids < <(docker compose ps -a -q --status created --status exited --status dead app)
((${#stale_ids[@]} == 0)) || docker rm -f "${stale_ids[@]}" >/dev/null

mapfile -t old_ids < <(docker compose ps -q app)
previous_image=""
if ((${#old_ids[@]} > 0)); then
  previous_image="$(docker inspect -f '{{.Image}}' "${old_ids[0]}")"
fi

docker tag "$image" "$CURRENT"

if ((${#old_ids[@]} == 0)); then
  log "no running app container: starting $image"
  docker compose up -d
else
  log "starting $image next to ${#old_ids[@]} running container(s)"
  docker compose up -d --no-deps --no-recreate --scale "app=$((${#old_ids[@]} + 1))" app
fi

new_id=""
for id in $(docker compose ps -q app); do
  [[ " ${old_ids[*]} " == *" $id "* ]] || new_id="$id"
done
[[ -n "$new_id" ]] || { echo "the new app container did not start" >&2; exit 1; }

deadline=$((SECONDS + HEALTH_TIMEOUT_SECONDS))
status="starting"
while ((SECONDS < deadline)); do
  status="$(docker inspect -f '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "$new_id")"
  [[ "$status" == "healthy" || "$status" == "unhealthy" || "$status" == "exited" ]] && break
  sleep 2
done

if [[ "$status" != "healthy" ]]; then
  log "new container is $status; keeping the running release"
  docker logs --tail 50 "$new_id" >&2 || true
  docker rm -f "$new_id" >/dev/null
  [[ -n "$previous_image" ]] && docker tag "$previous_image" "$CURRENT"
  exit 1
fi

log "new container healthy"
if ((${#old_ids[@]} > 0)); then
  # Give Traefik a moment to add the new backend before the old one leaves.
  sleep 5
  log "stopping old container(s)"
  docker stop -t 30 "${old_ids[@]}" >/dev/null
  docker rm "${old_ids[@]}" >/dev/null
fi

# Keep the newest few release images for rollback (`deploy.sh <older tag>`); in-use ones are skipped.
docker image ls "$IMAGE_REPO" --format '{{.Repository}}:{{.Tag}}' | tail -n +$((KEEP_IMAGES + 1)) |
  xargs -r docker rmi >/dev/null 2>&1 || true

log "released $image"
