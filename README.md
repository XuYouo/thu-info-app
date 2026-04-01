# THU Info Agent README

This README is intentionally written for AI agents and skill-driven coding workflows.

Treat this repository as a skill-enabled monorepo for THU Info. The preferred working mode is:

1. Read the repo-local skill index in `skills/`.
2. Start with `thu-info-workspace` for orientation.
3. Switch to the most specific domain skill before making changes.
4. Trace bugs from app entrypoint to Redux to `InfoHelper` to `packages/thu-info-lib`.

## Working Assumption

Use this repository together with the repo-local skills under `skills/`. These skills are designed for the full monorepo, not for `packages/thu-info-lib` in isolation.

That means a typical bug fix may touch:

- `apps/thu-info-app`
- `packages/thu-info-lib`
- `packages/RTNNetworkUtils`
- `skills/*`

Do not assume API bugs always live only in `packages/thu-info-lib`. Many failures are caused by one of:

- wrong screen parameters
- stale Redux state
- incorrect helper call site
- parser or model drift in `thu-info-lib`
- UI assumptions that no longer match normalized data

## Repo Shape

### App shell

- `apps/thu-info-app`
- Owns navigation, screens, components, Redux, themes, translations, startup, and platform-specific UX.

### Library layer

- `packages/thu-info-lib`
- Owns `InfoHelper`, login and roaming flows, request wrappers, parsers, typed models, and mocks.

### Native redirect bridge

- `packages/RTNNetworkUtils`
- Supports redirect handling used by auth on Harmony/OpenHarmony.

### Agent skill layer

- `skills`
- Holds repo-local skills for workspace orientation and domain-specific coding tasks.

## Installed Repo-Local Skills

- `thu-info-workspace`
  - Start here for cross-domain work, architecture mapping, and multi-module bug triage.
- `thu-info-auth-session`
  - Use for login, logout, cookies, 2FA, trusted devices, and session persistence.
- `thu-info-academic`
  - Use for report, GPA, evaluation, physical exam, classrooms, degree plan, THOS, and course registration.
- `thu-info-schedule-calendar`
  - Use for official schedules, custom schedules, sync, ICS export, and school calendar behavior.
- `thu-info-news-deepseek`
  - Use for news feeds, search, detail parsing, subscriptions, favorites, and DeepSeek integration.
- `thu-info-reservations`
  - Use for library seats, library rooms, sports booking, and reserves library flows.
- `thu-info-campus-finance`
  - Use for campus card, expenditure, invoices, bank payment, and graduate income.
- `thu-info-dorm-life`
  - Use for dorm score, electricity, washer, water, and dorm-related credentials.
- `thu-info-network`
  - Use for campus network login, balances, account info, and online devices.
- `thu-info-settings-feedback`
  - Use for settings, app secret, privacy, feedback, announcements, and about/update UX.

## Recommended Agent Workflow

### For unknown bugs

1. Start with `skills/thu-info-workspace/SKILL.md`.
2. Find the route in `apps/thu-info-app/src/components/Root.tsx`.
3. Find the entry screen in `apps/thu-info-app/src/ui/**`.
4. Check relevant Redux slices in `apps/thu-info-app/src/redux/slices/**`.
5. Trace the helper call through `apps/thu-info-app/src/redux/store.ts`.
6. Continue into `packages/thu-info-lib/src/index.ts`.
7. Fix parsing, model, or request logic in `packages/thu-info-lib/src/lib/**` only after confirming the app-side call path.

### For API bugs

Use the same full trace. API bugs in this repo commonly fall into four categories:

- endpoint or auth issue in `packages/thu-info-lib/src/lib/**`
- parsing mismatch in `packages/thu-info-lib/src/models/**` or parser code
- app passes the wrong parameters into `helper`
- app renders stale assumptions over correct normalized data

### For state or persistence bugs

Start in:

- `apps/thu-info-app/src/redux/store.ts`
- `apps/thu-info-app/src/redux/slices/**`

Pay special attention to:

- persistence transforms
- schedule migrations
- keychain vs AsyncStorage behavior
- singleton `helper` rehydration

## Repo-Local Skill Usage

The source of truth for these skills is the repo-local `skills/` directory.

If Codex should load them as installed skills, link or copy each skill directory into `$CODEX_HOME/skills` and restart Codex. Symlinks are acceptable and keep the repository copy as the single source of truth.

Expected shape:

```text
skills/
  thu-info-workspace/
    SKILL.md
    agents/openai.yaml
    references/...
  thu-info-auth-session/
  thu-info-academic/
  ...
```

## Editing Rules For Agents

- Prefer changing the narrowest domain module that fully fixes the bug.
- Keep app-level UX decisions in `apps/thu-info-app`.
- Keep protocol, parsing, and normalization logic in `packages/thu-info-lib`.
- Update mocks when response shape or parser behavior changes.
- Preserve platform-specific branches for Android, iOS, and Harmony.
- Preserve app-secret gates and security-sensitive flows when touching finance, report, or auth surfaces.

## High-Value Files

- `apps/thu-info-app/src/components/Root.tsx`
- `apps/thu-info-app/src/ui/home/home.tsx`
- `apps/thu-info-app/src/redux/store.ts`
- `apps/thu-info-app/src/redux/slices/config.ts`
- `packages/thu-info-lib/src/index.ts`
- `packages/thu-info-lib/src/constants/strings.ts`

## Skill-First Entry Point

If you are an agent starting cold, read these in order:

1. `skills/thu-info-workspace/SKILL.md`
2. `skills/thu-info-workspace/references/repo-map.md`
3. The domain skill that matches the task
4. Only then the corresponding app screen and `thu-info-lib` implementation

## Non-Goals Of This README

This file does not try to be:

- a user download page
- a release announcement page
- a general build tutorial
- a full contributor onboarding guide

It exists to help agents enter the right part of the codebase quickly and use the repo-local skills correctly.
