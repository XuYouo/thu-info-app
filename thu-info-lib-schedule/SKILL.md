---
name: thu-info-lib-schedule
description: Implement schedule and calendar APIs in the bundled THU Info runtime. Use when working on official schedules, custom schedule upload or delete, school calendar data, calendar images, semester parsing, or schedule model merge helpers.
---

# THU Info Lib Schedule

Read `references/file-map.md` first. This domain combines remote schedule APIs with reusable schedule and calendar model helpers.

This skill is intended to stay standalone. Run `node scripts/run.mjs help` to see the supported schedule commands. The runner installs and executes `@thu-info/lib@3.15.2` under `assets/runtime/node_modules`.

## Separate remote APIs and local model logic

- Treat `assets/runtime/node_modules/@thu-info/lib/src/lib/schedule.ts` as the owner of official schedule fetch, custom schedule upload, and custom schedule delete flows.
- Treat `assets/runtime/node_modules/@thu-info/lib/src/lib/basics.ts` as the owner of school calendar data, calendar year lookup, and calendar image URL bootstrap.
- Treat `assets/runtime/node_modules/@thu-info/lib/src/models/schedule/schedule.ts` and `calendar.ts` as the canonical shape for periods, weeks, time slices, and semesters.

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
