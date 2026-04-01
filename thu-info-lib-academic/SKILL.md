---
name: thu-info-lib-academic
description: Implement academic APIs in `packages/thu-info-lib`. Use when working on grades, GPA and report parsing, teaching evaluation, physical exam, classroom state, degree program parsing, score lookup, or course registration.
---

# THU Info Lib Academic

Read `references/file-map.md` first. This domain mixes several upstream systems, and each one has separate graduate or undergraduate branches.

## Split the work by subsystem

- Use `packages/thu-info-lib/src/lib/basics.ts` for report, evaluation, physical exam, and classroom data.
- Use `packages/thu-info-lib/src/lib/cr.ts` for course registration and queue-state flows.
- Use `packages/thu-info-lib/src/lib/program.ts` for degree-program parsing.
- Use `packages/thu-info-lib/src/lib/thos.ts` for score lookup by course ID.

## Preserve upstream branching

- Keep graduate and undergraduate paths explicit; they often use different URLs and table layouts.
- Treat HTML parsers as fragile. Change selectors and column indexes only after confirming the upstream markup.
- Keep normalization in the library instead of asking callers to repair raw table data.

## Keep models and mocks aligned

- Update `src/models/home/report.ts`, `assessment.ts`, `classroom.ts`, `thos.ts`, `src/models/cr/cr.ts`, and `src/models/program/program.ts` before widening caller assumptions.
- Update `src/mocks/basics.ts`, `cr.ts`, `program.ts`, or `thos.ts` whenever parser output shapes change.
- Preserve option-sensitive behavior such as `bx`, `newGPA`, and degree-plan variants.

## Verify each subsystem explicitly

- Report and GPA calculation branches.
- Evaluation list, form parsing, and submit path.
- Physical exam result parsing.
- Classroom list and per-week classroom state.
- Course-registration login, search, queue, selection, and deletion.
- Degree-program and THOS lookup flows.
