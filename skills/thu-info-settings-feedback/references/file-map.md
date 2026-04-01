# File Map

## State and Services

- `apps/thu-info-app/src/redux/slices/config.ts`: global preferences, security flags, feature toggles, DeepSeek token, receipt title, tablet mode.
- `apps/thu-info-app/src/redux/slices/credentials.ts`: app secret and dorm password.
- `apps/thu-info-app/src/redux/slices/announcement.ts`: local read-state over fetched announcements.
- `packages/thu-info-lib/src/lib/app.ts`: announcements, version, privacy URL, feedback, QR code.

## Core Screens

- `apps/thu-info-app/src/ui/settings/settings.tsx`
- `apps/thu-info-app/src/ui/settings/account.tsx`
- `apps/thu-info-app/src/ui/settings/appSecret.tsx`
- `apps/thu-info-app/src/ui/settings/appSecretCustomize.tsx`
- `apps/thu-info-app/src/ui/settings/appSecretSelectLockTime.tsx`
- `apps/thu-info-app/src/ui/settings/digitalPassword.tsx`
- `apps/thu-info-app/src/ui/settings/general.tsx`
- `apps/thu-info-app/src/ui/settings/language.tsx`
- `apps/thu-info-app/src/ui/settings/darkMode.tsx`
- `apps/thu-info-app/src/ui/settings/functionManagement.tsx`
- `apps/thu-info-app/src/ui/settings/scheduleSettings.tsx`
- `apps/thu-info-app/src/ui/settings/deepseekSettings.tsx`
- `apps/thu-info-app/src/ui/settings/privacy.tsx`
- `apps/thu-info-app/src/ui/settings/feedback.tsx`
- `apps/thu-info-app/src/ui/settings/popi.tsx`
- `apps/thu-info-app/src/ui/settings/about.tsx`

## Supporting Screens

- `apps/thu-info-app/src/ui/settings/login.tsx`: version banner and feedback links visible before login.
- `apps/thu-info-app/src/App.tsx`: student-notified prompt and lock-screen handoff.
- `apps/thu-info-app/src/redux/store.ts`: app-lock transitions when app state changes.

## Common Risk Areas

- Settings often look local but still rely on persisted state and app startup logic.
- App-secret behavior spans `config`, `credentials`, `store.ts`, and multiple settings screens.
- Version and announcement changes can affect badges and banners outside the settings tab.
