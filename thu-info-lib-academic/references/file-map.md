# File Map

## Bundled API Snapshot

- `InfoHelper.getReport()`
- `InfoHelper.getAssessmentList()`
- `InfoHelper.getAssessmentForm()`
- `InfoHelper.postAssessmentForm()`
- `InfoHelper.getPhysicalExamResult()`
- `InfoHelper.getClassroomList()`
- `InfoHelper.getClassroomState()`
- `InfoHelper.getCrTimetable()`
- `InfoHelper.getCrCoursePlan()`
- `InfoHelper.selectCourse()`
- `InfoHelper.deleteCourse()`
- `InfoHelper.getQueueInfo()`
- `InfoHelper.getDegreeProgramCompletion()`
- `InfoHelper.getFullDegreeProgram()`
- `InfoHelper.getScoreByCourseId()`

## Library Entry Points

- `assets/runtime/node_modules/@thu-info/lib/src/lib/basics.ts`: report, evaluation, physical exam, and classroom data.
- `assets/runtime/node_modules/@thu-info/lib/src/lib/cr.ts`: course-registration timetable, search, queue info, priority, and selection flows.
- `assets/runtime/node_modules/@thu-info/lib/src/lib/program.ts`: degree-program completion and full-program parsing.
- `assets/runtime/node_modules/@thu-info/lib/src/lib/thos.ts`: score lookup by course ID.

## Models and Mocks

- `assets/runtime/node_modules/@thu-info/lib/src/models/home/report.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/models/home/assessment.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/models/home/classroom.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/models/home/thos.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/models/cr/cr.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/models/program/program.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/mocks/basics.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/mocks/cr.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/mocks/program.ts`
- `assets/runtime/node_modules/@thu-info/lib/src/mocks/thos.ts`

## Common Risk Areas

- Report and program parsers use different column layouts for undergraduate and graduate flows.
- Course-registration pages depend on portal-specific footer parsing and timeout handling.
- `bx`, `newGPA`, and degree-plan variants affect returned shapes and should stay explicit.
- Normalize and type data in the library rather than leaving table repair work to callers.
