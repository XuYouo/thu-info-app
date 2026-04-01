---
name: thu-info-lib-dorm-life
description: Implement dorm APIs in `packages/thu-info-lib`. Use when working on dorm score, electricity balance, electricity recharge pay codes, electricity records, or dorm-password reset.
---

# THU Info Lib Dorm & Living

Read `references/file-map.md` first. This skill is limited to dorm endpoints that already live inside `packages/thu-info-lib`.

## Focus on the official dorm flows

- Use `packages/thu-info-lib/src/lib/dorm.ts` for dorm score, electricity recharge pay code, electricity payment records, electricity balance, and dorm-password reset.
- Check `packages/thu-info-lib/src/index.ts` for the public helper methods and the recharge gate around `getEleRechargePayCode()`.
- Keep `packages/thu-info-lib/src/mocks/dorm.ts` aligned with parser output.

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
