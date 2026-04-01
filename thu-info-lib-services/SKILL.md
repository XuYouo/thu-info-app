---
name: thu-info-lib-services
description: Implement shared service APIs in `packages/thu-info-lib`. Use when working on announcements, version checks, feedback, privacy URLs, WeChat group QR code, app startup stats, GitLab access, countdown, language switch, user info, mail, or MadModel token bootstrap.
---

# THU Info Lib Services

Read `references/file-map.md` first. This skill groups the library endpoints that do not fit the major campus-data domains.

## Split the work by service family

- Use `packages/thu-info-lib/src/lib/app.ts` for announcements, latest version, feedback, privacy URL, QR code, and usage or startup stats.
- Use `packages/thu-info-lib/src/lib/gitlab.ts` for GitLab namespace, project, branch, file, search, and markdown-render endpoints.
- Use `packages/thu-info-lib/src/lib/basics.ts` for user info, mail, language switching, countdown, and MadModel token bootstrap.
- Check `packages/thu-info-lib/src/models/app/**` and `src/models/gitlab/gitlab.ts` before changing caller assumptions.

## Preserve service contracts

- `getLatestVersion()` and `getLatestAnnounces()` are compact bootstrap endpoints; keep their typed shapes stable.
- Feedback and usage-stat endpoints are write paths; preserve payload semantics and encoding.
- GitLab helpers wrap transport failures as `GitLabApiError`; keep that classification stable.
- `getPrivacyUrl()` is intentionally cheap and mock-aware; do not turn it into a network fetch.

## Keep mixed mock behavior aligned

- `src/mocks/app.ts` and `src/mocks/gitlab.ts` should stay compatible with the real service shapes.
- `appStartUp()` in `src/index.ts` aggregates multiple service calls; preserve its return contract if underlying services change.
- When `getMadModelToken()` or `switchLang()` behavior changes, verify downstream consumers can still bootstrap correctly.

## Verify each service family

- Announcements, latest version, privacy URL, QR code, feedback, and stats.
- GitLab list, search, detail, tree, blob, branches, and markdown-render flows.
- User info, mail send, countdown, language switch, and MadModel token bootstrap.
