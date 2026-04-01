# File Map

## Library Entry Points

- `packages/thu-info-lib/src/lib/basics.ts`: report, evaluation, physical exam, classroom list/state, school calendar, and other general academic data.
- `packages/thu-info-lib/src/lib/cr.ts`: course-registration timetable, search, queue info, priorities, and selection flows.
- `packages/thu-info-lib/src/lib/program.ts`: degree-program completion and full-program parsing.
- `packages/thu-info-lib/src/lib/thos.ts`: score lookup by course ID.

## Models and Mocks

- `packages/thu-info-lib/src/models/home/report.ts`
- `packages/thu-info-lib/src/models/home/classroom.ts`
- `packages/thu-info-lib/src/models/cr/cr.ts`
- `packages/thu-info-lib/src/models/program/program.ts`
- `packages/thu-info-lib/src/mocks/basics.ts`
- `packages/thu-info-lib/src/mocks/cr.ts`
- `packages/thu-info-lib/src/mocks/program.ts`
- `packages/thu-info-lib/src/mocks/thos.ts`

## App Screens

- `apps/thu-info-app/src/ui/home/report.tsx`
- `apps/thu-info-app/src/ui/home/evaluation.tsx`
- `apps/thu-info-app/src/ui/home/form.tsx`
- `apps/thu-info-app/src/ui/home/physicalExam.tsx`
- `apps/thu-info-app/src/ui/home/classroomList.tsx`
- `apps/thu-info-app/src/ui/home/classroomDetail.tsx`
- `apps/thu-info-app/src/ui/home/peekScore.tsx`
- `apps/thu-info-app/src/ui/home/crHome.tsx`
- `apps/thu-info-app/src/ui/home/crCoursePlan.tsx`
- `apps/thu-info-app/src/ui/home/crSearchResult.tsx`

## Important App State

- `apps/thu-info-app/src/redux/slices/config.ts`: `newGPA`, `bx`, and other view-level academic preferences.
- `apps/thu-info-app/src/ui/home/home.tsx`: academic entrypoints and app-secret gates.

## Common Risk Areas

- Column indexes in report and program parsers differ between undergraduate and graduate flows.
- Course-registration pages use portal-specific footer parsing and timeout handling; preserve those branches.
- Screens often assume model fields already normalized; keep normalization in the library rather than in UI render loops.
