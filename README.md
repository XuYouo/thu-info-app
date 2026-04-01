# THU Info Lib Agent README

This README is intentionally written for AI agents and skill-driven coding workflows.

Treat this repository as a lib-first monorepo. The repo-local skills at the repository root are intentionally scoped to `packages/thu-info-lib`, so the preferred working mode is:

1. Read `thu-info-lib-overview/SKILL.md`.
2. Switch to the most specific `thu-info-lib-*` skill.
3. Stay inside `packages/thu-info-lib` unless the request explicitly requires a consumer-side fix.
4. Trace bugs from `src/index.ts` to `src/lib/**` to `src/models/**` to `src/mocks/**`.

## Working Assumption

The source of truth for the AI-facing capability map is the set of root-level skill folders plus `packages/thu-info-lib`.

That means the portable core for these skills is:

- `thu-info-lib-overview/`
- `thu-info-lib-auth/`
- `thu-info-lib-academic/`
- `thu-info-lib-schedule/`
- `thu-info-lib-news/`
- `thu-info-lib-reservations/`
- `thu-info-lib-finance/`
- `thu-info-lib-dorm-life/`
- `thu-info-lib-network/`
- `thu-info-lib-services/`
- `packages/thu-info-lib/`

The repository still contains app-shell code such as `apps/thu-info-app` and native glue such as `packages/RTNNetworkUtils`, but those are consumers of the library rather than the source of truth for these skills.

## Repo Shape

### Root-level skill layer

- `thu-info-lib-*`
- Repo-local skills for library-only orientation and domain-specific coding tasks.

### Library layer

- `packages/thu-info-lib`
- Owns `InfoHelper`, login and roaming flows, request wrappers, parsers, typed models, mocks, and shared endpoints.

### Consumer layers

- `apps/thu-info-app`
- `packages/RTNNetworkUtils`
- Useful when the bug is not inside the library contract, but intentionally outside the scope of these skills.

## Installed Repo-Local Skills

- `thu-info-lib-overview`
  - Start here for cross-domain library work and API triage.
- `thu-info-lib-auth`
  - Use for login, logout, cookies, 2FA, trusted devices, roaming, and helper auth hooks.
- `thu-info-lib-academic`
  - Use for report, GPA, evaluation, physical exam, classrooms, degree plan, THOS, and course registration.
- `thu-info-lib-schedule`
  - Use for official schedules, custom schedule upload or delete, calendar data, and schedule model helpers.
- `thu-info-lib-news`
  - Use for news feeds, search, detail parsing, subscriptions, favorites, channels, and sources.
- `thu-info-lib-reservations`
  - Use for library seats, library rooms, sports booking, and reserves library flows.
- `thu-info-lib-finance`
  - Use for campus card, expenditure APIs, invoices, bank payment, recharge, and graduate income.
- `thu-info-lib-dorm-life`
  - Use for dorm score, electricity, recharge pay code, and dorm-password reset.
- `thu-info-lib-network`
  - Use for campus network login, balances, account info, and online-device actions.
- `thu-info-lib-services`
  - Use for announcements, feedback, version checks, privacy, GitLab, mail, countdown, language, user info, and MadModel token bootstrap.

## Recommended Agent Workflow

### For API bugs

1. Start with `thu-info-lib-overview/SKILL.md`.
2. Find the public method in `packages/thu-info-lib/src/index.ts`.
3. Trace into the owning file under `packages/thu-info-lib/src/lib/**`.
4. Inspect the related types under `packages/thu-info-lib/src/models/**`.
5. Update mocks or shared constants only after the response shape is clear.

### For parser or model bugs

Use the same lib-first trace. Parser bugs in this repo commonly fall into four categories:

- upstream HTML or JSON shape drift in `packages/thu-info-lib/src/lib/**`
- model drift in `packages/thu-info-lib/src/models/**`
- endpoint or parameter drift in `packages/thu-info-lib/src/constants/strings.ts`
- shared transport, encoding, or cookie behavior in `packages/thu-info-lib/src/utils/network.ts`

### For consumer-only bugs

If the library contract looks correct, inspect the app shell separately. Do not expand these skills to include `apps/thu-info-app` behavior unless you intentionally want to change the skill boundary.

## Repo-Local Skill Usage

The source of truth for these skills is the set of root-level `thu-info-lib-*` folders.

If Codex should load them as installed skills, link or copy each root-level skill directory into `$CODEX_HOME/skills` and restart Codex. Symlinks are acceptable and keep the repository copy as the single source of truth.

Expected shape:

```text
thu-info-lib-overview/
  SKILL.md
  agents/openai.yaml
  references/...
thu-info-lib-auth/
thu-info-lib-academic/
...
packages/
  thu-info-lib/
```

## Editing Rules For Agents

- Prefer changing the narrowest library module that fully fixes the bug.
- Keep protocol, parsing, and normalization logic in `packages/thu-info-lib/src/lib/**`.
- Keep public method signatures and hook contracts coherent in `packages/thu-info-lib/src/index.ts`.
- Update models before widening downstream assumptions.
- Update mocks when response shape or parser behavior changes.

## High-Value Files

- `packages/thu-info-lib/src/index.ts`
- `packages/thu-info-lib/src/lib/core.ts`
- `packages/thu-info-lib/src/lib/basics.ts`
- `packages/thu-info-lib/src/constants/strings.ts`
- `packages/thu-info-lib/src/utils/network.ts`
- `packages/thu-info-lib/src/utils/error.ts`

## Skill-First Entry Point

If you are an agent starting cold, read these in order:

1. `thu-info-lib-overview/SKILL.md`
2. `thu-info-lib-overview/references/repo-map.md`
3. The domain skill that matches the task
4. Only then the corresponding code under `packages/thu-info-lib`

## Non-Goals Of This README

This file does not try to be:

- a user download page
- a release announcement page
- a general build tutorial
- a full contributor onboarding guide

It exists to help agents enter the right part of `packages/thu-info-lib` quickly and use the repo-local skills correctly.
