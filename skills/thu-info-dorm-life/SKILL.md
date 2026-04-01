---
name: thu-info-dorm-life
description: Implement dorm and campus living features in THU Info. Use when working on dorm score, electricity balance and recharge, home-network password reset, washer or water integrations, or dorm-related credentials and screens.
---

# THU Info Dorm & Living

Read `references/file-map.md` first. This domain mixes official dorm portals with app-local convenience tools and third-party integrations.

## Split the work by source system

- Use `packages/thu-info-lib/src/lib/dorm.ts` for dorm score, electricity, recharge QR generation, payment record parsing, and dorm-password reset.
- Use `apps/thu-info-app/src/network/water.ts` plus `ui/home/water.tsx` for the third-party water-ticket integration.
- Use `ui/home/washer.tsx` and related config fields for washer discovery and favorites.

## Preserve dorm credential handling

- Dorm-related credentials live in `apps/thu-info-app/src/redux/slices/credentials.ts`; keep that separate from main Info credentials.
- Keep the `MyhomeLogin` and dorm-password-reset flows aligned with whatever dorm features require stored or refreshed credentials.
- If you touch dorm score or electricity login assumptions, verify that both main Info auth and dorm-specific flows still work.

## Preserve mixed integration boundaries

- Water is explicitly called out as a third-party integration in the app; do not assume it shares the same reliability or backend conventions as official portals.
- Electricity and dorm score come from official portals and should continue to use the helper-backed flows.
- Keep UX clear about which failures come from official systems and which come from third-party integrations.

## Verify the living-tool path

- Dorm score image load.
- Electricity balance refresh and recharge initiation.
- Electricity record screen.
- Washer list or favorites behavior.
- Water ticket lookup and purchase path.
- Myhome login and dorm-password reset.
