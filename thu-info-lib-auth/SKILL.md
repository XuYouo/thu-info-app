---
name: thu-info-lib-auth
description: Implement and debug authentication and session flows in `packages/thu-info-lib`. Use when working on `InfoHelper` login and logout, cookies, roaming, SM2 encryption, 2FA, trusted devices, fingerprint state, or auth hook contracts.
---

# THU Info Lib Auth

Read `references/file-map.md` before editing. This skill owns library-level session semantics and the `InfoHelper` auth extension points.

## Follow the session lifecycle

1. Start at helper fields and hooks in `packages/thu-info-lib/src/index.ts`.
2. Trace `login()`, `logout()`, and `forgetDevice()` into `packages/thu-info-lib/src/lib/core.ts`.
3. Check shared auth endpoints in `packages/thu-info-lib/src/constants/strings.ts`.
4. Inspect `packages/thu-info-lib/src/utils/network.ts` and `src/utils/error.ts` when failures look transport- or error-classification-related.

## Preserve hook contracts

- Keep `clearCookieHandler`, `loginErrorHook`, `twoFactorMethodHook`, `twoFactorAuthHook`, and `twoFactorAuthLimitHook` callable from the library side.
- Keep `trustFingerprintHook` and `trustFingerprintNameHook` aligned with the trusted-device branch.
- Keep default hook behavior lightweight so non-app consumers can still embed the library.

## Preserve protocol behavior

- Preserve WebVPN and OAuth redirect handling in `src/lib/core.ts`.
- Preserve SM2 password encryption and 2FA branching unless the upstream protocol changes.
- Preserve the single outstanding login promise guard; it prevents overlapping login attempts.
- Keep roaming policies and `roamingWrapperWithMocks()` behavior consistent across auth-dependent domains.

## Change cautiously around helper state

- `InfoHelper.userId`, `password`, and `fingerprint` are the auth source of truth inside the library.
- If you change logout semantics, clear helper fields consistently with cookie handling expectations.
- `forgetDevice()` is intentionally app-facing but still library-owned; keep its contract narrow and stable.

## Verify the full path

- Normal login success.
- Login failure classification via `LoginError`.
- 2FA method selection, code entry, and over-limit handling.
- Trusted-device prompt and trusted-device naming.
- Logout and forget-device flows.
