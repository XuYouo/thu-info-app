# Repo Map

## Scope

- These repo-local skills intentionally stop at `packages/thu-info-lib`.
- Use them as the source of truth for THU Info API behavior, models, and mock contracts.
- If a request turns out to be consumer-only UI logic, inspect the app separately instead of expanding the skill boundary.

## Layout

- `packages/thu-info-lib/src/index.ts`: public `InfoHelper` methods, hooks, and comments.
- `packages/thu-info-lib/src/lib`: request flow, roaming, parsing, normalization, and write actions.
- `packages/thu-info-lib/src/models`: typed outputs and merge helpers consumed by callers.
- `packages/thu-info-lib/src/mocks`: mock fixtures paired with major domains.
- `packages/thu-info-lib/src/constants/strings.ts`: shared endpoints and URL templates.
- `packages/thu-info-lib/src/utils/network.ts`: fetch helpers, encoding, cookies, and request plumbing.
- `packages/thu-info-lib/src/utils/error.ts`: typed library errors.

## Trace Patterns

- For a broken API, start at the `InfoHelper` method in `src/index.ts`, then trace to the owning `src/lib/*.ts` file.
- For a parser mismatch, update `src/models/**` together with the parser that produces that shape.
- For a transport or auth issue, inspect `src/lib/core.ts`, `src/utils/network.ts`, and the relevant constants before changing business logic.
- For mock-only regressions, keep the mocked branch shape aligned with the real branch.

## Cross-Cutting Risk Areas

- `packages/thu-info-lib/src/index.ts`: public contract drift and auth hook expectations.
- `packages/thu-info-lib/src/lib/core.ts`: roaming, login, 2FA, trusted device, and cross-domain auth reuse.
- `packages/thu-info-lib/src/lib/basics.ts`: shared academic, finance, calendar, mail, and bootstrap endpoints.
- `packages/thu-info-lib/src/constants/strings.ts`: silent endpoint drift can affect multiple domains at once.
- `packages/thu-info-lib/src/utils/network.ts`: encoding, cookie, and request semantics are shared.

## Domain-to-Skill Map

- `thu-info-lib-auth`: login, logout, cookies, roaming, 2FA, trusted devices, fingerprint hooks.
- `thu-info-lib-academic`: report, evaluation, physical exam, classrooms, degree plan, THOS, course registration.
- `thu-info-lib-schedule`: official schedule fetch, custom schedule upload or delete, calendar data, and calendar image.
- `thu-info-lib-news`: news list, search, detail, favorite, subscription, channels, and sources.
- `thu-info-lib-reservations`: library seats, library rooms, sports booking, and reserves library.
- `thu-info-lib-finance`: campus card, bank payment, invoices, and graduate income.
- `thu-info-lib-dorm-life`: dorm score, electricity, and dorm-password reset.
- `thu-info-lib-network`: usereg login, balance, account info, devices, import-login, and logout.
- `thu-info-lib-services`: app backend services, GitLab, mail, countdown, language switch, user info, and MadModel token bootstrap.
