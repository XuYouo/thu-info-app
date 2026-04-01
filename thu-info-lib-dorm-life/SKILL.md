---
name: thu-info-lib-dorm-life
description: Implement dorm APIs in the bundled THU Info runtime. Use when working on dorm score, electricity balance, electricity recharge pay codes, electricity records, or dorm-password reset.
---

# THU Info Lib Dorm & Living

Read `references/file-map.md` first. This skill is limited to the dorm endpoints bundled into this standalone runtime.

This skill is intended to stay standalone. Run `node scripts/run.mjs help` to see the supported dorm commands. The runner installs and executes `@thu-info/lib@3.15.2` under `assets/runtime/node_modules`.

## Focus on the official dorm flows

- Use `assets/runtime/node_modules/@thu-info/lib/src/lib/dorm.ts` for dorm score, electricity recharge pay code, electricity payment records, electricity balance, and dorm-password reset.
- Check `assets/runtime/node_modules/@thu-info/lib/src/index.ts` for the public helper methods and the recharge gate around `getEleRechargePayCode()`.
- Keep `assets/runtime/node_modules/@thu-info/lib/src/mocks/dorm.ts` aligned with parser output.

## Preserve recharge and reset assumptions

- Electricity recharge is gated by `canRechargeCampusCard()` before the library returns a pay code; keep that compatibility path intact.
- Dorm-password reset depends on the myhome-based flow described in `index.ts`; do not introduce an old-password requirement unless the upstream system changes.
- Keep base64 dorm-score handling and electricity parser output stable for downstream consumers.

## Verify the living-tool path

- Dorm score retrieval.
- Electricity balance refresh.
- Electricity recharge pay-code generation.
- Electricity record parsing.
- Dorm-password reset.
