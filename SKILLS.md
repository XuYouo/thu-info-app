# THU Info Skills

This file explains how to use the repo-local THU Info skills from the repository root.

## Core Rule

Each `thu-info-lib-*` folder is intended to be a standalone, atomic skill package.

That means each skill remains useful when installed by itself, because it carries:

- `SKILL.md`
- `agents/openai.yaml`
- bundled `references/`
- bundled `scripts/`
- bundled executable runtime in `assets/runtime/` for domain skills

The skill should not require another separately installed skill bundle or an extra copied code folder just to run.

## What "Standalone" Means Here

Standalone does not mean the skill magically contains the whole application repository.

It means:

- the skill carries enough bundled guidance to understand the domain on its own
- the skill carries its own runner scripts for direct execution
- domain skills install `@thu-info/lib@3.15.2` into `assets/runtime/node_modules/`
- the skill can be installed alone into Codex without packaging `packages/thu-info-lib` beside it

If no matching workspace exists, the skill is still usable through its bundled references and direct runners.

## What These Skills Cover

- `thu-info-lib-overview`
  - Entry point for routing work to the right domain and listing the standalone runners.
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
3. Run `node scripts/run.mjs help` inside the matching domain skill.
4. Use the domain runner and its installed npm runtime for direct execution.
5. Read the bundled references when you need implementation details or method coverage.

## Installing Into Codex

If you want Codex to load these as installed skills, link any root-level `thu-info-lib-*` directory into `$CODEX_HOME/skills` or `~/.codex/skills`.

Important:

- a skill may be installed independently
- bundled `references/`, `scripts/`, and `assets/runtime/` should travel with that skill folder
- domain skills run against their own installed npm runtime and do not require an extra packaged copy of `packages/thu-info-lib`

## Expected Shape

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

## Source Of Truth

The source of truth for each skill is its own folder.

If another agent installs a skill elsewhere, copy or link the whole skill directory, not just `SKILL.md`.
