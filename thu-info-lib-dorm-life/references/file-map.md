# File Map

## Official Dorm Layer

- `packages/thu-info-lib/src/lib/dorm.ts`: dorm score, electricity remainder, recharge pay code, payment records, and dorm-password reset.
- `packages/thu-info-lib/src/index.ts`: public helper methods and the gate around `getEleRechargePayCode()`.
- `packages/thu-info-lib/src/lib/card.ts`: `canRechargeCampusCard()` compatibility check for electricity recharge.
- `packages/thu-info-lib/src/mocks/dorm.ts`

## Important Seams

- Dorm score returns base64 image content, not a structured JSON model.
- Electricity record parsing currently returns a fixed six-string tuple contract.
- `resetDormPassword()` depends on the myhome-based flow documented in `index.ts`.

## Common Risk Areas

- Breaking the recharge gate changes both dorm and campus-card expectations.
- Changes to dorm score payload shape show up as render failures downstream, not typed parser errors.
- Electricity parsing failures may still leave recharge working, so verify both read and write-style paths.
