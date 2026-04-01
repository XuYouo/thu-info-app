---
name: thu-info-settings-feedback
description: Implement settings, security controls, feedback, announcements, and about or privacy features in THU Info. Use when working on settings screens, app lock, function management, preferences, feedback submission, announcements, or version and update messaging.
---

# THU Info Settings & Feedback

Read `references/file-map.md` first. This skill owns the app's preference and support surfaces rather than any single campus backend.

## Treat config and credentials as the source of truth

- Use `apps/thu-info-app/src/redux/slices/config.ts` for feature toggles, app-lock settings, display preferences, language, DeepSeek token, receipt title, and other global preferences.
- Use `apps/thu-info-app/src/redux/slices/credentials.ts` for app secret and dorm password.
- Preserve any corresponding persistence expectations in `redux/store.ts`.

## Keep app-security UX coherent

- App-secret, biometric, lock-time, and sub-function protection flows span multiple screens; keep them aligned when changing copy or behavior.
- Preserve the distinction between full app lock and sub-function unlock state.
- Respect platform guards around biometrics and background-security warnings.

## Keep support and app-service flows aligned

- `packages/thu-info-lib/src/lib/app.ts` owns feedback submission, replied feedback, privacy URL, announcements, and version checks.
- The app layer owns how those results are surfaced in settings, about, login, and feedback screens.
- If you change announcement or version behavior, update both fetching and local read-state handling.

## Verify preference persistence and support loops

- Account and app-secret settings.
- Function management and general settings persistence.
- Schedule and DeepSeek settings.
- Privacy and about/update messaging.
- Feedback submission, replied-feedback list, and QR-code rendering.
