---
name: thu-info-campus-finance
description: Implement finance features in THU Info. Use when working on campus card, transaction history, loss reporting, recharge, bank payment, invoices, graduate income, or finance-sensitive UI and security checks.
---

# THU Info Campus Finance

Read `references/file-map.md` first. This domain combines sensitive campus-card operations with read-mostly finance views.

## Split the work by subsystem

- Use `packages/thu-info-lib/src/lib/card.ts` for campus-card login, info, transactions, password change, max-amount settings, loss reporting, cancellation, and recharge.
- Use `packages/thu-info-lib/src/lib/basics.ts` for bank payment, invoice list and PDF, and graduate income.
- Treat `apps/thu-info-app/src/ui/home/expenditure.tsx` as a presentation layer over campus-card transactions rather than a separate backend flow.

## Preserve sensitive-flow guards

- Finance entrypoints are protected by `verifyPasswordBeforeEnterFinance` and related app-secret settings; keep those gates intact when changing navigation.
- Campus-card actions such as loss reporting, password changes, and recharge are higher-risk than read-only screens; preserve confirmations and error surfacing.
- Keep balance refresh behavior aligned with the `campusCard` slice.

## Preserve card-session semantics

- `card.ts` maintains token-bound account state in module-level variables; do not break `assureLoginValid()` when refactoring.
- Card responses may arrive encrypted and are normalized by `fetchWithParse()`. Keep decryption and result checking centralized there.
- If you change recharge behavior, keep daily recharge bookkeeping in the app slice aligned with the UI.

## Verify both read and write flows

- Campus-card info, transaction history, and expenditure grouping.
- Loss reporting and cancellation.
- Password or max-transaction updates.
- Recharge path, balance refresh, and payment-method state.
- Bank payment, invoices, invoice PDF sharing, and graduate-income views.
