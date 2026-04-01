# File Map

## Bundled API Snapshot

- `InfoHelper.getNetworkVerificationImageUrl()`
- `InfoHelper.loginUsereg()`
- `InfoHelper.getOnlineDevices()`
- `InfoHelper.getNetworkBalance()`
- `InfoHelper.getNetworkAccountInfo()`
- `InfoHelper.logoutNetworkDevice()`
- `InfoHelper.loginNetworkDevice()`

## Library Layer

- `assets/runtime/node_modules/@thu-info/lib/src/lib/network.ts`: verification image, usereg login, online devices, balance, account info, logout, and import-login actions.
- `assets/runtime/node_modules/@thu-info/lib/src/lib/basics.ts`: `getUserInfo()` helper used to derive the network username.
- `assets/runtime/node_modules/@thu-info/lib/src/models/network/account.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/models/network/balance.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/models/network/detail.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/models/network/device.ts`

## Important Seams

- `loginUsereg()` mixes captcha, RSA encryption, and CSRF handling.
- Device actions rely on hidden success markers in HTML responses.
- Network self-service uses its own session semantics even though it starts from main Info identity data.

## Common Risk Areas

- Regressions often appear only after usereg login succeeds, so verify both pre-login and post-login paths.
- Import-login and logout mutate shared device state and can desynchronize with list parsing.
- Account, balance, and device pages can drift independently because they are parsed from separate endpoints.
