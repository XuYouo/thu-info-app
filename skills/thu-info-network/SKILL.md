---
name: thu-info-network
description: Implement campus network self-service features in THU Info. Use when working on usereg login, verification code, account info, balance, online devices, import or logout device actions, or network-specific error handling.
---

# THU Info Network

Read `references/file-map.md` first. This domain is separate from main Info login even though it reuses identity information.

## Preserve the usereg login chain

- Keep verification-code refresh, RSA encryption, and CSRF handling inside `packages/thu-info-lib/src/lib/network.ts`.
- Preserve the dependency on `helper.getUserInfo()` to derive the email-style username used by the network portal.
- Keep `ensureNetworkLoggedIn()` as the main guard before balance, account, or device actions.

## Keep device actions consistent

- Online-device listing, logout, and import-login are all mutations against the self-service portal; preserve the CSRF and success-message checks around them.
- Keep UI screens aligned with the typed network models rather than parsing strings again in the app layer.
- Preserve clear error distinction between needing usereg login and general network failure.

## Respect platform and module boundaries

- Network self-service lives in its own Home subgroup and detail screens.
- The redirect bridge in `RTNNetworkUtils` matters indirectly because auth and roaming can affect access to related endpoints; avoid changes that silently assume one platform.

## Verify the self-service flow

- Verification image refresh.
- Usereg login with captcha.
- Balance and account-info pages.
- Online-device list.
- Device logout and device import/login actions.
