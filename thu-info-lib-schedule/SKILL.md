---
name: thu-info-lib-schedule
description: Implement schedule and calendar APIs in `packages/thu-info-lib`. Use when working on official schedules, custom schedule upload or delete, school calendar data, calendar images, semester parsing, or schedule model merge helpers.
---

# THU Info Lib Schedule

Read `references/file-map.md` first. This domain combines remote schedule APIs with reusable schedule and calendar model helpers.

## Separate remote APIs and local model logic

- Treat `packages/thu-info-lib/src/lib/schedule.ts` as the owner of official schedule fetch, custom schedule upload, and custom schedule delete flows.
- Treat `packages/thu-info-lib/src/lib/basics.ts` as the owner of school calendar data, calendar year lookup, and calendar image URL bootstrap.
- Treat `packages/thu-info-lib/src/models/schedule/schedule.ts` and `calendar.ts` as the canonical shape for periods, weeks, time slices, and semesters.

## Preserve the model invariants

- `Schedule`, `ScheduleTime`, and `TimeSlice` helpers define merge and hide-delete semantics; update them intentionally.
- Keep `getBeginPeriod()`, `getEndPeriod()`, `getWeekFromTime()`, and `mergeSchedules()` coherent with parser output.
- Preserve `parseJSON()`, `parseSecondaryWeek()`, and `parseScript()` compatibility when upstream payloads change.

## Keep remote and parsed data aligned

- `getSchedule()` depends on calendar context; verify semester resolution before changing parser behavior.
- `saveCustomSchedule()` and `deleteCustomSchedule()` should keep the same payload expectations as `Schedule[]`.
- Update `src/mocks/schedule.ts` when custom or official schedule shapes change.

## Verify both calendar and schedule paths

- Official schedule fetch across semester boundaries.
- Custom schedule upload and delete.
- Calendar data fetch and calendar image URL generation.
- Week, period, and overlap helpers used by downstream consumers.
