# File Map

## Library Layer

- `packages/thu-info-lib/src/lib/card.ts`: campus-card auth and all card mutations.
- `packages/thu-info-lib/src/models/card/info.ts`
- `packages/thu-info-lib/src/models/card/transaction.ts`
- `packages/thu-info-lib/src/models/card/recharge.ts`
- `packages/thu-info-lib/src/mocks/card.ts`
- `packages/thu-info-lib/src/lib/basics.ts`: bank payment, invoice list and PDF, and graduate income.
- `packages/thu-info-lib/src/models/home/bank.ts`
- `packages/thu-info-lib/src/models/home/invoice.ts`
- `packages/thu-info-lib/src/mocks/basics.ts`

## Important Seams

- Card API session state lives partly in module-level variables, not only in `InfoHelper`.
- Card responses may be encrypted and are normalized centrally in `card.ts`.
- `canRechargeCampusCard()` is shared with dorm electricity recharge compatibility logic.
- Invoice list, invoice PDF, and graduate-income queries all come from `basics.ts` but return different typed shapes.

## Common Risk Areas

- Recharge flows differ between bank and WeChat or Alipay paths.
- Transaction and recharge enums are public contract and should not drift from parsed values.
- Bank payment and graduate-income date-range logic can regress independently from campus-card flows.
