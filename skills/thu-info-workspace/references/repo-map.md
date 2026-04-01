# Repo Map

## Layout

- `apps/thu-info-app`: React Native application, navigation, UI, Redux, theme, translations, and startup UX.
- `packages/thu-info-lib`: typed access layer over Tsinghua systems, exposed through `InfoHelper`.
- `packages/RTNNetworkUtils`: TurboModule redirect bridge used by auth on Harmony/OpenHarmony.

## Navigation

- Root tabs live in `apps/thu-info-app/src/components/Root.tsx`.
- Top-level tabs are `HomeTab`, `NewsTab`, `DeepSeekTab`, `ScheduleTab`, and `SettingsTab`.
- Most business features enter through Home routes defined in the same file.
- News, Schedule, and Settings each have additional stack routes in the same navigator file.

## Shared State

- The singleton `helper` is created in `apps/thu-info-app/src/redux/store.ts`.
- Persisted slices are `auth`, `config`, `schedule`, `credentials`, `reservation`, `campusCard`, `timetable`, `announcement`, and `deepseek`.
- `config` is the main feature-flag and preference bucket.
- `schedule` has custom transforms and migration logic in `store.ts`; check that before changing time representations.

## Trace Patterns

- For a UI-only change, start at the screen in `apps/thu-info-app/src/ui/**`, then check shared components and translations.
- For a data bug, start at the screen, then trace the helper call into `packages/thu-info-lib/src/index.ts`, then into the corresponding file under `packages/thu-info-lib/src/lib/**`.
- For a model mismatch, update `packages/thu-info-lib/src/models/**` before adjusting render code.
- For a startup or persistence issue, inspect `apps/thu-info-app/src/redux/store.ts` and the relevant slice first.

## Cross-Cutting Risk Areas

- `apps/thu-info-app/src/redux/store.ts`: helper hooks, persistence transforms, auth bootstrap, app-lock behavior.
- `apps/thu-info-app/src/components/Root.tsx`: route registration and tab visibility.
- `apps/thu-info-app/src/ui/home/home.tsx`: home entrypoints, security gating, top-5 shortcuts, feature surfacing.
- `apps/thu-info-app/src/assets/translations/*.ts`: missing labels often break new screens quietly.
- `packages/thu-info-lib/src/constants/strings.ts`: shared endpoints and URL templates used across domains.

## Domain-to-Skill Map

- `thu-info-auth-session`: login, cookies, 2FA, trusted device, helper session lifecycle.
- `thu-info-academic`: report, evaluation, physical exam, classrooms, degree plan, THOS, course registration.
- `thu-info-schedule-calendar`: schedule fetch/merge, custom events, sync, ICS, school calendar.
- `thu-info-news-deepseek`: news list/search/detail/subscription/favorite and DeepSeek RAG over news.
- `thu-info-reservations`: library seats, library rooms, sports booking, reserves library.
- `thu-info-campus-finance`: campus card, expenditure, bank payment, invoice, graduate income.
- `thu-info-dorm-life`: dorm score, electricity, washer, water, and related credentials.
- `thu-info-network`: usereg login, balance, account info, online devices.
- `thu-info-settings-feedback`: preferences, app secret, feedback, announcements, privacy, about.
