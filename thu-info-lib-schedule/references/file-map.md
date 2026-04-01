# File Map

## Bundled API Snapshot

- `InfoHelper.getSchedule()`
- `InfoHelper.saveCustomSchedule()`
- `InfoHelper.deleteCustomSchedule()`
- `InfoHelper.getCalendar()`
- `InfoHelper.getCalendarYear()`
- `InfoHelper.getCalendarImageUrl()`
- `mergeSchedules()`
- `getOverlappedBlock()`
- `parseJSON()`
- `parseSecondaryWeek()`
- `parseScript()`

## Library and Models

- `assets/runtime/node_modules/@thu-info/lib/src/lib/schedule.ts`: official schedule fetch, custom schedule upload, and custom schedule delete.
- `assets/runtime/node_modules/@thu-info/lib/src/lib/basics.ts`: school calendar data, calendar year, and calendar image URL helpers.
- `assets/runtime/node_modules/@thu-info/lib/src/models/schedule/schedule.ts`: schedule model, merge helpers, overlap helpers, and parser utilities.
- `assets/runtime/node_modules/@thu-info/lib/src/models/schedule/calendar.ts`: semester and school-calendar models.
- `assets/runtime/node_modules/@thu-info/lib/src/mocks/schedule.ts`

## Notable Exports

- `getSchedule()`, `saveCustomSchedule()`, `deleteCustomSchedule()`
- `getCalendar()`, `getSchoolCalendarYear()`, `getCalendarImageUrl()`
- `getBeginPeriod()`, `getEndPeriod()`, `getWeekFromTime()`
- `mergeSchedules()`, `getOverlappedBlock()`, `parseJSON()`, `parseSecondaryWeek()`, `parseScript()`

## Common Risk Areas

- `getSchedule()` depends on calendar context, so semester parsing bugs can surface as schedule bugs.
- `TimeSlice`, `ScheduleTime`, and `Schedule` shape changes must stay compatible with parser helpers.
- Custom schedule upload and delete use `Schedule[]` payloads directly; keep serialization assumptions stable.
- Calendar year and image helpers come from a different backend path than official schedule fetch.
