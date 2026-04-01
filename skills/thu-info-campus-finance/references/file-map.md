# File Map

## Library Layer

- `packages/thu-info-lib/src/lib/card.ts`: campus-card auth and all card mutations.
- `packages/thu-info-lib/src/models/card/info.ts`
- `packages/thu-info-lib/src/models/card/transaction.ts`
- `packages/thu-info-lib/src/models/card/recharge.ts`
- `packages/thu-info-lib/src/lib/basics.ts`: bank payment, invoice list and PDF, graduate income.
- `packages/thu-info-lib/src/models/home/bank.ts`
- `packages/thu-info-lib/src/models/home/invoice.ts`

## App Screens

- `apps/thu-info-app/src/ui/home/campusCard.tsx`
- `apps/thu-info-app/src/ui/home/expenditure.tsx`
- `apps/thu-info-app/src/ui/home/finance.tsx`
- `apps/thu-info-app/src/ui/home/bankPayment.tsx`
- `apps/thu-info-app/src/ui/home/invoice.tsx`
- `apps/thu-info-app/src/ui/home/invoicePDF.tsx`
- `apps/thu-info-app/src/ui/home/income.tsx`
- `apps/thu-info-app/src/ui/home/loseCard.tsx`

## Shared State and Guards

- `apps/thu-info-app/src/redux/slices/campusCard.ts`: cached balance, payment method, recharge bookkeeping.
- `apps/thu-info-app/src/redux/slices/config.ts`: finance-related security toggles and sports receipt title.
- `apps/thu-info-app/src/ui/home/home.tsx`: finance entrypoints and app-secret gating.

## Common Risk Areas

- Card API session state lives partly in module-level variables, not only in Redux.
- `expenditure.tsx` mutates transaction display semantics by flipping sign and grouping by month; keep that behavior intentional.
- Invoice PDF flow depends on base64 handling plus native share behavior.
