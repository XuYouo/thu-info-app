# THU Info Skills

This file explains how to use the repo-local THU Info skills from the repository root.

## Core Rule

These skills are not standalone assets.

They are designed to be used together with:

- `packages/thu-info-lib`

If an agent only installs or copies the `thu-info-lib-*` skill folders without also carrying `packages/thu-info-lib`, the skills will lose most of their value because their instructions, file maps, and debugging workflow all resolve into that library.

In practice, the portable bundle is:

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

Do not distribute or install only the skill folders.

## What These Skills Cover

These root-level skills describe the API and model surface of `packages/thu-info-lib`.

- `thu-info-lib-overview`
  - Entry point for routing work to the right domain.
- `thu-info-lib-auth`
  - Login, logout, cookies, roaming, 2FA, trusted devices, auth hooks.
- `thu-info-lib-academic`
  - Report, GPA, evaluation, physical exam, classrooms, degree plan, THOS, course registration.
- `thu-info-lib-schedule`
  - Official schedules, custom schedule upload or delete, calendar data, schedule model helpers.
- `thu-info-lib-news`
  - News feeds, search, detail parsing, favorites, subscriptions, channels, sources.
- `thu-info-lib-reservations`
  - Library seats, library rooms, sports booking, reserves library.
- `thu-info-lib-finance`
  - Campus card, recharge, invoices, bank payment, graduate income.
- `thu-info-lib-dorm-life`
  - Dorm score, electricity, recharge pay code, dorm-password reset.
- `thu-info-lib-network`
  - Campus network login, balances, account info, online devices.
- `thu-info-lib-services`
  - Announcements, feedback, version, privacy, GitLab, mail, countdown, language, MadModel token.

## Recommended Usage

When an agent starts cold:

1. Read `thu-info-lib-overview/SKILL.md`.
2. Read `thu-info-lib-overview/references/repo-map.md`.
3. Switch to the matching domain skill.
4. Trace the code inside `packages/thu-info-lib/src/index.ts`, `src/lib/**`, `src/models/**`, and `src/mocks/**`.

For API bugs, parser bugs, or model bugs, stay inside `packages/thu-info-lib` first. Only inspect app-shell code if the library contract appears correct.

## Installing Into Codex

If you want Codex to load these as installed skills, link each root-level `thu-info-lib-*` directory into `$CODEX_HOME/skills` or `~/.codex/skills`.

Important:

- install the skill folders and `packages/thu-info-lib` from the same revision
- do not install the skill folders alone
- do not rename `packages/thu-info-lib` unless you also rewrite the skill contents

## Expected Shape

```text
thu-info-lib-overview/
thu-info-lib-auth/
thu-info-lib-academic/
thu-info-lib-schedule/
thu-info-lib-news/
thu-info-lib-reservations/
thu-info-lib-finance/
thu-info-lib-dorm-life/
thu-info-lib-network/
thu-info-lib-services/
packages/
  thu-info-lib/
```

## Source Of Truth

The source of truth is the repository copy of:

- the root-level `thu-info-lib-*` skill folders
- `packages/thu-info-lib`

If another agent installs these skills elsewhere, keep that installation synced with both parts together.
