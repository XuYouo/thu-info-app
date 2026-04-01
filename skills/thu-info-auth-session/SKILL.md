---
name: thu-info-auth-session
description: Implement and debug authentication and session flows for THU Info. Use when working on login, logout, cookies, trusted devices, 2FA hooks, fingerprint handling, credential persistence, or any feature that depends on InfoHelper session state.
---

# THU Info Auth & Session

Read `references/file-map.md` before editing. This domain spans both the app shell and `thu-info-lib`; treat them as one workflow.

## Follow the session lifecycle

1. Start at `apps/thu-info-app/src/ui/settings/login.tsx` for the user entrypoint.
2. Follow the call into the singleton `helper` in `apps/thu-info-app/src/redux/store.ts`.
3. Trace `InfoHelper.login()` through `packages/thu-info-lib/src/index.ts` into `packages/thu-info-lib/src/lib/core.ts`.
4. Keep app-owned hooks in `store.ts` aligned with library-owned protocol logic in `core.ts`.

## Preserve app-owned hooks

- Keep `helper.clearCookieHandler` wired to `CookieManager.clearAll()`.
- Keep `helper.loginErrorHook` responsible for navigation back to `Login` and for surfacing errors.
- Keep the `futures` bridge and `TwoFactorAuthScreen` aligned with `twoFactorMethodHook` and `twoFactorAuthHook`.
- Keep `helper.trustFingerprintHook` and `helper.trustFingerprintNameHook` aligned with trusted-device UX.

## Preserve library-owned protocol behavior

- Preserve WebVPN and OAuth redirect handling in `lib/core.ts`.
- Preserve SM2 password encryption and 2FA branching unless the upstream protocol changes.
- Preserve the single outstanding login promise guard; it prevents overlapping login attempts.
- Keep Harmony redirect handling working when touching redirect resolution code.

## Change cautiously around persisted auth data

- `auth.fingerprint` is persisted and copied into the singleton helper during rehydration.
- If you change auth state shape, update the auth transform in `store.ts`.
- If you change logout semantics, keep Redux state, helper fields, and cookie clearing behavior consistent.

## Verify the full path

- Normal login success.
- Login error routing and Snackbar messaging.
- 2FA method selection and 6-digit code entry.
- Trusted-device prompt and trusted-device limit handling.
- Logout and force-login flows from settings.
