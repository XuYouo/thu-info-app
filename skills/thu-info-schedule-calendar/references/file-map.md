# File Map

## Library and Models

- `packages/thu-info-lib/src/lib/schedule.ts`: official schedule fetch, custom upload, custom delete.
- `packages/thu-info-lib/src/models/schedule/schedule.ts`: core schedule model, merging, hide/delete helpers, period calculations.
- `packages/thu-info-lib/src/models/schedule/calendar.ts`: semester and school-calendar models.

## App State

- `apps/thu-info-app/src/redux/slices/schedule.ts`: merge rules, aliases, custom schedules, hide/delete rules, local edits.
- `apps/thu-info-app/src/redux/store.ts`: schedule persistence transform and migration logic.
- `apps/thu-info-app/src/redux/slices/config.ts`: active semester, display toggles, height, and schedule UI preferences.

## App Screens and Components

- `apps/thu-info-app/src/ui/schedule/schedule.tsx`: main schedule screen.
- `apps/thu-info-app/src/ui/schedule/scheduleDetail.tsx`
- `apps/thu-info-app/src/ui/schedule/scheduleHidden.tsx`
- `apps/thu-info-app/src/ui/schedule/scheduleSync.tsx`
- `apps/thu-info-app/src/components/schedule/schedule.tsx`
- `apps/thu-info-app/src/components/schedule/scheduleAdd.tsx`
- `apps/thu-info-app/src/ui/settings/scheduleSettings.tsx`
- `apps/thu-info-app/src/ui/home/home.tsx`: schedule preview cards.

## Export and Sync Helpers

- `apps/thu-info-app/src/utils/calendar.ts`: ICS generation and export.
- `apps/thu-info-app/src/utils/webApi.ts`: remote schedule sync helpers used by the sync screen.

## Common Risk Areas

- Changing persisted `TimeSlice` shape without updating transforms breaks rehydration.
- Changing hide/delete semantics without updating `scheduleHidden` UI causes invisible state drift.
- Changing custom schedule naming or hashing rules can break dedupe and upload behavior.
