---
name: thu-info-reservations
description: Implement reservation and booking features in THU Info. Use when working on library seats, library rooms, sports reservations, reserves library downloads, reservation records, or related availability and payment flows.
---

# THU Info Reservations

Read `references/file-map.md` first. This skill covers four related but distinct booking systems.

## Split the work by subsystem

- Use `packages/thu-info-lib/src/lib/library.ts` for library seats and library-room booking.
- Use `packages/thu-info-lib/src/lib/sports.ts` for sports venue availability, booking, payment, and records.
- Use `packages/thu-info-lib/src/lib/reserves-lib.ts` for reserves-library search, detail, and chapter download.
- Use `apps/thu-info-app/src/redux/slices/reservation.ts` for active reservation state surfaced in the app shell.

## Preserve separate auth and availability rules

- Library-room booking has its own login and account-number flow; do not assume plain library-seat auth rules apply there.
- Sports booking can require phone number setup, captcha, payment, and receipt-title handling; keep those steps explicit.
- Library seat availability and socket status are merged from different sources; preserve that separation.

## Keep records and home-state behavior aligned

- Startup preload populates active library and sports records; keep state shape compatible with `reservation.ts`.
- If you change booking or cancellation semantics, update the record screens and any startup refresh paths that depend on them.
- Preserve record filtering rules for "active" library bookings.

## Verify the end-to-end flow

- Library list, floor, section, seat, map, booking, and cancellation.
- Library-room search, booking, email update, record view, and cancellation.
- Sports detail, field selection, booking, payment or skip-payment path, and record view.
- Reserves-library search, detail, and PDF or chapter download flow.
