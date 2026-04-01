---
name: thu-info-schedule-calendar
description: Implement schedule and calendar features in THU Info. Use when working on official schedules, custom schedules, hidden or deleted slices, schedule sync, ICS export, school calendar, week selection, or schedule-related Redux persistence and UI.
---

# THU Info Schedule & Calendar

Read `references/file-map.md` first. This domain is half library parsing and half local state management.

## Separate official and local schedule logic

- Treat `packages/thu-info-lib/src/lib/schedule.ts` as the source of official schedule fetch, merge, upload, and delete behavior.
- Treat `apps/thu-info-app/src/redux/slices/schedule.ts` as the owner of local merge rules, aliases, custom events, and hide or delete state.
- Treat `apps/thu-info-app/src/ui/schedule/**` and `components/schedule/**` as render and editing layers over that state.

## Preserve the data model invariants

- Hidden or deleted slices live in `delOrHideTime`; do not destroy official schedule data just to hide it.
- Custom schedules are merged by title, location, and exact time slices; keep dedupe rules intentional.
- Persisted schedule data goes through transforms and migration code in `store.ts`; update that path if time representations change.

## Trace changes in this order

1. Start at the schedule screen or settings screen.
2. Inspect the relevant Redux action in `apps/thu-info-app/src/redux/slices/schedule.ts`.
3. Inspect the model helpers in `packages/thu-info-lib/src/models/schedule/schedule.ts`.
4. Only then adjust `lib/schedule.ts` if the source data or upload/delete behavior is wrong.

## Keep companion features aligned

- Home-screen preview in `ui/home/home.tsx` must stay compatible with schedule state shape.
- School-calendar settings in `config` and `setCalendarConfig` must stay aligned with whatever semester is currently active.
- ICS export in `utils/calendar.ts` must reflect the same visible schedule semantics as the UI.
- Sync flow in `ui/schedule/scheduleSync.tsx` depends on Redux state shape; keep token-based send/receive flows intact.

## Verify both local and remote behaviors

- Verify week navigation and schedule rendering.
- Verify hide/delete/custom-edit behavior.
- Verify ICS generation or download/share behavior.
- Verify remote upload/delete of custom schedules if you touched network-facing code.
