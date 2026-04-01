---
name: thu-info-lib-reservations
description: Implement reservation APIs in `packages/thu-info-lib`. Use when working on library seats, library rooms, sports reservations, reserves library downloads, reservation records, socket status, or related availability and payment flows.
---

# THU Info Lib Reservations

Read `references/file-map.md` first. This skill covers four related but distinct booking systems.

## Split the work by subsystem

- Use `packages/thu-info-lib/src/lib/library.ts` for library lists, floors, sections, seats, socket status, booking, cancellation, and library-room flows.
- Use `packages/thu-info-lib/src/lib/sports.ts` for sports resources, phone setup, captcha, booking, payment, unsubscribe, and records.
- Use `packages/thu-info-lib/src/lib/reserves-lib.ts` for reserves-library search, detail, and chapter download.
- Use the related models under `packages/thu-info-lib/src/models/home/**` as the canonical output shapes.

## Preserve separate auth and availability rules

- Library-room booking has its own login and account-number flow; do not collapse it into plain library-seat auth.
- Sports booking can require phone number setup, captcha, payment, and receipt-title validation; keep those steps explicit.
- Library seat availability and socket status are separate data flows and can fail independently.

## Keep records and mutations aligned

- Booking and cancellation APIs should continue to round-trip through the same record models.
- `downloadChapters()` is a side-effecting helper; keep progress callbacks optional and non-breaking.
- Preserve `VALID_RECEIPT_TITLES` and `getSportsCaptchaUrlMethod()` behavior for downstream consumers.

## Verify the end-to-end flow

- Library list, floor, section, seat, socket, booking, and cancellation.
- Library-room login, info list, resource list, booking, email update, record view, and cancellation.
- Sports resource detail, booking, payment, unsubscribe, and record view.
- Reserves-library search, detail, and chapter download flow.
