# File Map

## State and Service Files

- `packages/thu-info-lib/src/lib/app.ts`: announcements, version, privacy URL, feedback, QR code, and app stats.
- `packages/thu-info-lib/src/models/app/announcement.ts`
- `packages/thu-info-lib/src/models/app/feedback.ts`
- `packages/thu-info-lib/src/models/app/version.ts`
- `packages/thu-info-lib/src/mocks/app.ts`
- `packages/thu-info-lib/src/lib/gitlab.ts`: GitLab namespace, project, tree, branch, blob, search, and markdown-render APIs.
- `packages/thu-info-lib/src/models/gitlab/gitlab.ts`
- `packages/thu-info-lib/src/mocks/gitlab.ts`
- `packages/thu-info-lib/src/lib/basics.ts`: `getUserInfo()`, `naiveSendMail()`, `switchLang()`, `getMadModelToken()`, and `countdown()`.
- `packages/thu-info-lib/src/index.ts`: `appStartUp()`, `appUsageStat()`, and public service methods.
- `packages/thu-info-lib/src/utils/error.ts`: `GitLabApiError`.

## Important Seams

- `appStartUp()` aggregates several service calls into one public contract.
- `getPrivacyUrl()` is mock-aware and intentionally avoids a network fetch.
- GitLab helpers translate transport failures into `GitLabApiError`.
- `switchLang()` changes downstream API language for multiple consumers, not just one service.

## Common Risk Areas

- Mock service data can drift from real payloads if only one branch is updated.
- Feedback and stats endpoints are write paths and should keep payload encoding stable.
- MadModel token bootstrap, user info, and mail send helpers live in `basics.ts`, so edits there can affect unrelated callers.
