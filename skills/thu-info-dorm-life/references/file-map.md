# File Map

## Official Dorm Portal Layer

- `packages/thu-info-lib/src/lib/dorm.ts`: dorm score, electricity remainder, recharge QR, payment records, dorm password reset.
- `packages/thu-info-lib/src/mocks/dorm.ts`

## App Screens

- `apps/thu-info-app/src/ui/home/dorm.tsx`
- `apps/thu-info-app/src/ui/home/dormScore.tsx`
- `apps/thu-info-app/src/ui/home/electricity.tsx`
- `apps/thu-info-app/src/ui/home/eleRecord.tsx`
- `apps/thu-info-app/src/ui/home/washer.tsx`
- `apps/thu-info-app/src/ui/home/water.tsx`
- `apps/thu-info-app/src/ui/settings/myhomeLogin.tsx`
- `apps/thu-info-app/src/ui/settings/resetDormPassword.tsx`

## Supporting State

- `apps/thu-info-app/src/redux/slices/credentials.ts`: dorm password and app secret.
- `apps/thu-info-app/src/redux/slices/config.ts`: `waterId`, `waterBrand`, and `washerFavourites`.
- `apps/thu-info-app/src/ui/home/home.tsx` and `ui/settings/functionManagement.tsx`: dorm feature surfacing and toggles.

## Third-Party Integration

- `apps/thu-info-app/src/network/water.ts`: water integration transport layer.

## Common Risk Areas

- Dorm features are easy to break by conflating main Info auth with dorm-specific credential storage.
- Water and washer UX may need different retry and error semantics from official portal features.
- `dormScore.tsx` is an image-centric screen; changes to returned base64 shape will show up as rendering failures rather than typed errors.
