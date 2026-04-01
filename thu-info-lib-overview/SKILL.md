---
name: thu-info-lib-overview
description: Orient yourself in `packages/thu-info-lib` and route work to the correct lib-only THU Info skill. Use when a task spans multiple THU Info API domains, needs the right `InfoHelper` entrypoint quickly, or requires shared conventions for methods, models, mocks, constants, and network wrappers.
---

# THU Info Lib Overview

Start here for library-only work. Read `references/repo-map.md` first, then switch to the most specific downstream `thu-info-lib-*` skill once the request is scoped.

## Follow the library split

- Treat `packages/thu-info-lib/src/index.ts` as the public `InfoHelper` surface and auth hook contract.
- Treat `packages/thu-info-lib/src/lib/*.ts` as protocol, request, parsing, and normalization code.
- Treat `packages/thu-info-lib/src/models/**` as normalized return types and merge helpers.
- Treat `packages/thu-info-lib/src/mocks/**` as contract fixtures that should stay compatible with real parser output.
- Treat `packages/thu-info-lib/src/constants/strings.ts`, `src/utils/network.ts`, and `src/utils/error.ts` as shared infrastructure.

## Trace changes in this order

1. Find the public method in `packages/thu-info-lib/src/index.ts`.
2. Trace into the corresponding file under `packages/thu-info-lib/src/lib/**`.
3. Inspect related types under `packages/thu-info-lib/src/models/**`.
4. Update mocks, constants, or shared utilities only after the response shape is clear.

## Respect shared invariants

- Keep `InfoHelper` method signatures aligned with model types and comments.
- Prefer centralizing parsing quirks in the library instead of pushing them to callers.
- When payload shapes change, update models before adding compatibility fallbacks.
- Keep mock-account behavior and `roamingWrapperWithMocks()` branches usable.

## Hand off to domain skills

- Use `thu-info-lib-auth` for login, roaming, 2FA, trusted devices, and helper auth hooks.
- Use `thu-info-lib-academic` for report, evaluation, physical exam, classrooms, degree plans, THOS, and course registration.
- Use `thu-info-lib-schedule` for official schedule fetch, custom schedule upload or delete, and school calendar data.
- Use `thu-info-lib-news` for news list, search, detail, subscription, favorite, channel, and source APIs.
- Use `thu-info-lib-reservations` for library seats, library rooms, sports booking, and reserves library.
- Use `thu-info-lib-finance` for campus card, transactions, recharge, bank payment, invoices, and graduate income.
- Use `thu-info-lib-dorm-life` for dorm score, electricity, and dorm-password reset flows.
- Use `thu-info-lib-network` for usereg login, balance, account info, and online-device management.
- Use `thu-info-lib-services` for announcements, version, feedback, privacy, GitLab, mail, language, countdown, and MadModel token bootstrap.
