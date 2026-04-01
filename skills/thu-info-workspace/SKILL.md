---
name: thu-info-workspace
description: Orient yourself in the THU Info monorepo and coordinate changes that cross app, library, navigation, Redux, or platform boundaries. Use when a task spans multiple business domains, needs the right entrypoint quickly, or requires shared conventions for routes, state, persistence, theming, startup, and platform-specific behavior.
---

# THU Info Workspace

Start here for repo-wide work. Read `references/repo-map.md` first, then switch to the most specific downstream THU Info skill once the request is scoped to a single business domain.

## Follow the architecture split

- Treat `apps/thu-info-app` as the React Native shell: navigation, screens, components, Redux, theming, i18n, startup UX, and platform behavior.
- Treat `packages/thu-info-lib` as the business/API layer: `InfoHelper`, roaming/login, HTML parsing, typed models, and mock-aware wrappers.
- Treat `packages/RTNNetworkUtils` plus the Harmony-side module in `apps/thu-info-app/harmony/.../NetworkUtilsModule.ts` as the redirect bridge used by auth on OpenHarmony.

## Trace changes in this order

1. Find the route or tab in `apps/thu-info-app/src/components/Root.tsx`.
2. Find the entry screen under `apps/thu-info-app/src/ui/**`.
3. Check whether state lives in `apps/thu-info-app/src/redux/slices/**`.
4. Trace helper calls through `apps/thu-info-app/src/redux/store.ts` and `packages/thu-info-lib/src/index.ts`.
5. Update models or constants only after the request/response flow is clear.

## Respect shared state

- Reuse the singleton `helper` from `apps/thu-info-app/src/redux/store.ts`; do not instantiate ad hoc helpers inside screens.
- Keep persisted slice behavior intact when changing `auth`, `config`, `schedule`, `credentials`, `reservation`, `campusCard`, `timetable`, `announcement`, or `deepseek`.
- Check transforms and migrations in `store.ts` before changing persisted field shapes or date formats.

## Respect platform behavior

- Keep Android/iOS/Harmony differences explicit.
- Preserve split-view behavior driven by `SplitViewProvider` and `useDetailNavigator`.
- Preserve secure-storage choices: auth and credential slices use keychain storage on mobile and AsyncStorage elsewhere.

## Hand off to domain skills

- Use `thu-info-auth-session` for login, cookies, 2FA, trusted devices, and session persistence.
- Use `thu-info-academic` for grades, physical exam, teaching evaluation, classrooms, degree plans, score lookup, and course registration.
- Use `thu-info-schedule-calendar` for official schedules, custom schedules, sync, ICS export, and school calendar features.
- Use `thu-info-news-deepseek` for news feeds, subscriptions, favorites, and the DeepSeek tab.
- Use `thu-info-reservations` for library seats, library rooms, sports booking, and reserves library.
- Use `thu-info-campus-finance` for campus card, spending, invoices, bank payment, and graduate income.
- Use `thu-info-dorm-life` for dorm score, electricity, washer, water, and dorm-related credentials.
- Use `thu-info-network` for campus network login, balance, and online-device management.
- Use `thu-info-settings-feedback` for settings, app secret, privacy, feedback, announcements, and about/update UX.
