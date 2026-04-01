---
name: thu-info-lib-network
description: Implement campus network self-service APIs in `packages/thu-info-lib`. Use when working on usereg login, verification code, account info, balance, online devices, import-login, logout device actions, or network-specific error handling.
---

# THU Info Lib Network

Read `references/file-map.md` first. This domain is separate from main Info login even though it reuses identity information.

## Preserve the usereg login chain

- Keep verification-code refresh, RSA encryption, and CSRF handling inside `packages/thu-info-lib/src/lib/network.ts`.
- Preserve the dependency on `getUserInfo()` from `packages/thu-info-lib/src/lib/basics.ts` to derive the email-style username used by the network portal.
- Keep `loginUsereg()` and the implicit network-login guard behavior consistent before device or balance actions.

## Keep device actions consistent

- Online-device listing, logout, and import-login are all mutations against the self-service portal; preserve CSRF and success checks around them.
- Keep model parsing aligned with `src/models/network/account.ts`, `balance.ts`, `detail.ts`, and `device.ts`.
- Preserve clear error distinction between usereg auth failure and general network failure.

## Verify the self-service flow

- Verification image refresh.
- Usereg login with captcha.
- Balance and account-info pages.
- Online-device list.
- Device logout and device import-login actions.
