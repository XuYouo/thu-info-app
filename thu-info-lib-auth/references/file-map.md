# File Map

## Bundled API Snapshot

- `InfoHelper.login()`
- `InfoHelper.logout()`
- `InfoHelper.forgetDevice()`
- `InfoHelper.clearCookieHandler`
- `InfoHelper.loginErrorHook`
- `InfoHelper.twoFactorMethodHook`
- `InfoHelper.twoFactorAuthHook`
- `InfoHelper.twoFactorAuthLimitHook`
- `InfoHelper.trustFingerprintHook`
- `InfoHelper.trustFingerprintNameHook`

## Primary Files

- `assets/runtime/node_modules/@thu-info/lib/src/index.ts`: `InfoHelper` fields, hooks, and public auth methods.
- `assets/runtime/node_modules/@thu-info/lib/src/lib/core.ts`: login, logout, `forgetDevice()`, roaming wrappers, SM2 encryption, 2FA, trusted devices, and redirect handling.
- `assets/runtime/node_modules/@thu-info/lib/src/constants/strings.ts`: auth, WebVPN, OAuth, and trusted-device endpoints.
- `assets/runtime/node_modules/@thu-info/lib/src/utils/network.ts`: request helpers, cookie-aware transport, and shared fetch plumbing.
- `assets/runtime/node_modules/@thu-info/lib/src/utils/error.ts`: `LoginError` and other typed failures surfaced to callers.

## Important Seams

- `index.ts` owns the hook interface, while `core.ts` decides when each hook fires.
- Helper fields are mutated in the library, so state changes must stay coherent even for non-app consumers.
- Roaming policies in `core.ts` are shared by multiple domains such as `card`, `cab`, `gitlab`, and `cr`.
- Mock account behavior should stay available when auth paths are refactored.

## Common Failure Modes

- Changing fingerprint or trusted-device handling without updating hook expectations breaks login continuation.
- Changing login flow without preserving the outstanding promise guard reintroduces parallel-login races.
- Changing redirect or roaming behavior can break only one downstream policy such as `card`, `cab`, `gitlab`, or `cr`.
- Clearing helper auth fields inconsistently leaves consumers in a half-logged-in state.
