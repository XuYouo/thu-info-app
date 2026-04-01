# File Map

## Primary Files

- `apps/thu-info-app/src/ui/settings/login.tsx`: login form, startup bootstrap after successful auth.
- `apps/thu-info-app/src/ui/settings/twoFactorAuth.tsx`: method picker and code-entry UI for 2FA.
- `apps/thu-info-app/src/redux/store.ts`: singleton `helper`, cookie clearing, login error hook, 2FA futures, trusted-device prompts, persistence transforms.
- `apps/thu-info-app/src/redux/slices/auth.ts`: persisted `userId`, `password`, and `fingerprint`.
- `packages/thu-info-lib/src/index.ts`: public `InfoHelper` entrypoints.
- `packages/thu-info-lib/src/lib/core.ts`: login/logout, WebVPN roaming, 2FA, trusted device, redirect handling.

## Supporting Files

- `apps/thu-info-app/src/ui/settings/account.tsx`: account/security entrypoint.
- `apps/thu-info-app/src/ui/settings/settings.tsx`: force login, logout, reset of auth-adjacent state.
- `packages/RTNNetworkUtils/src/specs/v2/NativeNetworkUtils.ts`: TurboModule contract for redirect lookup.
- `apps/thu-info-app/harmony/entry/src/main/ets/turbomodule/NetworkUtilsModule.ts`: Harmony implementation of the redirect bridge.

## Important Seams

- `login.tsx` calls `helper.login()` and only then dispatches the Redux `login` action.
- `store.ts` rehydrates auth into the singleton helper, so app state and helper state must stay shape-compatible.
- `core.ts` owns protocol details, but `store.ts` owns user interaction for 2FA and trusted devices.
- `loginErrorHook` intentionally navigates to `Login`; avoid replacing it with silent failure behavior.

## Common Failure Modes

- Changing fingerprint handling without updating the auth transform breaks trusted-device continuity.
- Changing login flow without preserving `outstandingLoginPromise` reintroduces parallel-login races.
- Changing redirect handling without checking Harmony-specific `getRedirectLocation()` can break OpenHarmony only.
- Clearing Redux auth without clearing helper fields, or vice versa, leaves the app in a half-logged-in state.
