# File Map

## Library Entry Points

- `packages/thu-info-lib/src/lib/basics.ts`: report, evaluation, physical exam, and classroom data.
- `packages/thu-info-lib/src/lib/cr.ts`: course-registration timetable, search, queue info, priority, and selection flows.
- `packages/thu-info-lib/src/lib/program.ts`: degree-program completion and full-program parsing.
- `packages/thu-info-lib/src/lib/thos.ts`: score lookup by course ID.

## Models and Mocks

- `packages/thu-info-lib/src/models/home/report.ts`
- `packages/thu-info-lib/src/models/home/assessment.ts`
- `packages/thu-info-lib/src/models/home/classroom.ts`
- `packages/thu-info-lib/src/models/home/thos.ts`
- `packages/thu-info-lib/src/models/cr/cr.ts`
- `packages/thu-info-lib/src/models/program/program.ts`
- `packages/thu-info-lib/src/mocks/basics.ts`
- `packages/thu-info-lib/src/mocks/cr.ts`
- `packages/thu-info-lib/src/mocks/program.ts`
- `packages/thu-info-lib/src/mocks/thos.ts`

## Common Risk Areas

- Report and program parsers use different column layouts for undergraduate and graduate flows.
- Course-registration pages depend on portal-specific footer parsing and timeout handling.
- `bx`, `newGPA`, and degree-plan variants affect returned shapes and should stay explicit.
- Normalize and type data in the library rather than leaving table repair work to callers.
