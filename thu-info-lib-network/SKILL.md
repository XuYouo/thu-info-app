---
name: thu-info-lib-network
description: Implement campus network self-service APIs in the bundled THU Info runtime. Use when working on usereg login, verification code, account info, balance, online devices, import-login, logout device actions, or network-specific error handling.
---

# THU Info Lib Network

Read `references/file-map.md` first. This domain is separate from main Info login even though it reuses identity information.

This skill is intended to stay standalone. Run `node scripts/run.mjs help` to see the supported network commands. The runner installs and executes `@thu-info/lib@3.15.2` under `assets/runtime/node_modules`.

## Preserve the usereg login chain

- Keep verification-code refresh, RSA encryption, and CSRF handling inside `assets/runtime/node_modules/@thu-info/lib/src/lib/network.ts`.
- Preserve the dependency on `getUserInfo()` from `assets/runtime/node_modules/@thu-info/lib/src/lib/basics.ts` to derive the email-style username used by the network portal.
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
