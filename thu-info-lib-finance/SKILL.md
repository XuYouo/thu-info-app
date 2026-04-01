---
name: thu-info-lib-finance
description: Implement finance APIs in the bundled THU Info runtime. Use when working on campus card, transaction history, loss reporting, recharge, bank payment, invoices, graduate income, or finance-sensitive parser changes.
---

# THU Info Lib Finance

Read `references/file-map.md` first. This domain combines sensitive campus-card mutations with read-mostly finance endpoints.

This skill is intended to stay standalone. Run `node scripts/run.mjs help` to see the supported finance commands. The runner installs and executes `@thu-info/lib@3.15.2` under `assets/runtime/node_modules`.

## Split the work by subsystem

- Use `assets/runtime/node_modules/@thu-info/lib/src/lib/card.ts` for campus-card login, info, transactions, password change, max-amount settings, loss reporting, cancellation, and recharge.
- Use `assets/runtime/node_modules/@thu-info/lib/src/lib/basics.ts` for bank payment, invoice list and PDF, and graduate income.
- Use models under `assets/runtime/node_modules/@thu-info/lib/src/models/card/**` and `src/models/home/{bank,invoice}.ts` as the normalized output layer.

## Preserve sensitive-flow guards

- Campus-card mutations are higher risk than read-only finance endpoints; keep confirmations and error handling semantics stable.
- `card.ts` maintains session-bound account state in module-level variables; do not break `cardLogin()` or follow-up requests.
- Card responses may arrive encrypted and are normalized centrally; keep decryption and result checking together.

## Keep money semantics explicit

- Transaction types and recharge types are encoded by `CardTransactionType` and `CardRechargeType`; preserve those enums as public contract.
- `canRechargeCampusCard()` gates both card and dorm-related recharge behavior.
- When invoice or graduate-income payloads change, update typed models before widening caller assumptions.

## Verify both read and write flows

- Card info and transaction history.
- Loss reporting and cancellation.
- Transaction-password and max-transaction updates.
- Recharge by bank and by WeChat or Alipay.
- Bank payment, invoice list, invoice PDF, and graduate-income queries.
