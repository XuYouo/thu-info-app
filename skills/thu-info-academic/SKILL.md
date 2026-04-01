---
name: thu-info-academic
description: Implement academic features in THU Info. Use when working on grades, GPA and report parsing, teaching evaluation, physical exam, classroom state, degree program parsing, score lookup, or course registration and its related screens and models.
---

# THU Info Academic

Read `references/file-map.md` first. This domain mixes several upstream systems, and each one has separate parsing rules and graduate or undergraduate branches.

## Split the work by subsystem

- Use `packages/thu-info-lib/src/lib/basics.ts` for report, evaluation, physical exam, classroom state, school calendar, and other general academic portals.
- Use `packages/thu-info-lib/src/lib/cr.ts` for course registration.
- Use `packages/thu-info-lib/src/lib/program.ts` for degree-plan parsing.
- Use `packages/thu-info-lib/src/lib/thos.ts` for single-course score lookup.

## Preserve upstream branching

- Keep graduate and undergraduate paths explicit; they often use different URLs and different table layouts.
- Treat HTML parsers as fragile. Change selectors and column indexes only after checking the upstream markup path.
- Update typed models before patching UI assumptions when upstream payloads change.

## Keep UI and config behavior aligned

- Report rendering depends on config flags such as `newGPA`, `bx`, and hidden report sections.
- Course registration is mobile-only in Home; preserve platform guards when changing surfacing.
- Several academic screens are protected by app-secret options in `config`.

## Prefer a lib-first debugging loop

1. Confirm the broken feature's UI entrypoint in `Root.tsx` or `ui/home/home.tsx`.
2. Trace the screen's helper call into `packages/thu-info-lib/src/index.ts`.
3. Fix parsing or model logic in the library.
4. Return to the screen and adjust presentation, sorting, hiding, or security UX only if needed.

## Keep mocks in sync when behavior changes

- Update `packages/thu-info-lib/src/mocks/basics.ts`, `mocks/cr.ts`, `mocks/program.ts`, or `mocks/thos.ts` when shape changes would otherwise leave tests and demos stale.
