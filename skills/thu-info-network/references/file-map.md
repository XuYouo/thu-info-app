# File Map

## Library Layer

- `packages/thu-info-lib/src/lib/network.ts`: verification image, usereg login, online devices, balance, account info, logout, and import-login actions.
- `packages/thu-info-lib/src/models/network/account.ts`
- `packages/thu-info-lib/src/models/network/balance.ts`
- `packages/thu-info-lib/src/models/network/device.ts`

## App Screens

- `apps/thu-info-app/src/ui/home/network.tsx`
- `apps/thu-info-app/src/ui/home/networkLogin.tsx`
- `apps/thu-info-app/src/ui/home/networkDetail.tsx`
- `apps/thu-info-app/src/ui/home/networkOnlineDevices.tsx`

## Shared Integration Points

- `apps/thu-info-app/src/ui/home/home.tsx`: network entrypoints.
- `apps/thu-info-app/src/ui/settings/functionManagement.tsx`: network feature toggles.
- `apps/thu-info-app/src/redux/store.ts`: shared helper and login context used before network-specific auth.

## Common Risk Areas

- `loginUsereg()` mixes `fetch()` and `uFetch()` with CSRF handling; preserve both steps.
- Device actions rely on hidden success markers in HTML responses.
- Regressions often appear only after login succeeds, so verify both unauthenticated and authenticated paths.
