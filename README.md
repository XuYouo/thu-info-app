# THU Info Lib Agent README

This README is intentionally written for AI agents and skill-driven coding workflows.

Treat this repository as a lib-first monorepo. The repo-local skills at the repository root are intentionally scoped to THU Info library domains, but each `thu-info-lib-*` folder is now packaged as a standalone skill with its own references, runner scripts, and npm-installed runtime.

The preferred working mode is:

1. Read `thu-info-lib-overview/SKILL.md`.
2. Run `node scripts/run.mjs help` in the relevant domain skill.
3. Switch to the most specific `thu-info-lib-*` skill.
4. Use the bundled runner and npm-installed runtime for direct execution.

## Working Assumption

The source of truth for the AI-facing capability map is the set of root-level skill folders.

Each domain skill is designed to remain useful on its own because it carries:

- bundled instructions in `SKILL.md`
- bundled references in `references/`
- bundled helper scripts in `scripts/`
- bundled runtime bootstrap in `assets/runtime/`

The skills no longer require a separately packaged copy of `packages/thu-info-lib` just to be installable or runnable.

## Repo Shape

### Root-level skill layer

- `thu-info-lib-*`
- Repo-local standalone skills for library-domain orientation and direct execution.

### Library source layer

- `packages/thu-info-lib`
- The upstream source used when you intentionally sync the skill runners or bundled references with newer library behavior.

### Consumer layers

- `apps/thu-info-app`
- `packages/RTNNetworkUtils`
- Useful when the bug is not inside the library contract, but intentionally outside the scope of these skills.

## Installed Repo-Local Skills

- `thu-info-lib-overview`
  - Start here for cross-domain library work and standalone runner discovery.
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

### For direct capability use

1. Start with `thu-info-lib-overview/SKILL.md`.
2. Run `node scripts/run.mjs help` in the relevant skill.
3. Invoke the target API through that skill's runner.
4. Inspect `assets/runtime/node_modules/@thu-info/lib/dist/**` or `assets/runtime/node_modules/@thu-info/lib/src/**` when you need implementation details.

### For skill maintenance

If you are updating a standalone skill package:

- edit the skill's bundled references and runner first
- treat `assets/runtime/` as the executable source bundled with the skill
- compare against `packages/thu-info-lib` only when you are intentionally syncing the pinned npm runtime usage with upstream source

### For consumer-only bugs

If the standalone skill behavior is correct, inspect the app shell separately. Do not expand these skills to include `apps/thu-info-app` behavior unless you intentionally want to change the skill boundary.

## Repo-Local Skill Usage

The source of truth for these skills is the set of root-level `thu-info-lib-*` folders.

If Codex should load them as installed skills, link or copy each root-level skill directory into `$CODEX_HOME/skills` and restart Codex. Each skill should be copied as a whole folder so that its `references/`, `scripts/`, and `assets/runtime/` travel with it.

Expected shape:

```text
thu-info-lib-overview/
  SKILL.md
  agents/openai.yaml
  references/...
  scripts/...
thu-info-lib-auth/
  ...
  assets/runtime/...
thu-info-lib-academic/
  ...
  assets/runtime/...
...
```

## Editing Rules For Agents

- Prefer changing the narrowest skill package that fully fixes the problem.
- Keep direct execution logic in `scripts/`.
- Keep bundled implementation code in `assets/runtime/`.
- Keep explanatory material in `references/`.
- If you are syncing from upstream source, update the pinned npm package usage and the bundled references intentionally rather than depending on live external code at execution time.

## Skill-First Entry Point

If you are an agent starting cold, read these in order:

1. `thu-info-lib-overview/SKILL.md`
2. `thu-info-lib-overview/references/repo-map.md`
3. `node thu-info-lib-overview/scripts/run.mjs`
4. The domain skill that matches the task
5. `node <skill>/scripts/run.mjs help`

## Non-Goals Of This README

This file does not try to be:

- a user download page
- a release announcement page
- a general build tutorial
- a full contributor onboarding guide

It exists to help agents use the repo-local skills correctly as standalone runnable skill packages.
