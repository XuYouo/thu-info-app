# File Map

## Library and Models

- `packages/thu-info-lib/src/lib/library.ts`: library lists, floors, sections, seats, socket status, seat booking, library-room booking, cancellation, and record APIs.
- `packages/thu-info-lib/src/models/home/library.ts`
- `packages/thu-info-lib/src/mocks/library.ts`
- `packages/thu-info-lib/src/lib/sports.ts`: resources, phone number, captcha, booking, payment, unsubscribe, and record parsing.
- `packages/thu-info-lib/src/models/home/sports.ts`
- `packages/thu-info-lib/src/mocks/sports.ts`
- `packages/thu-info-lib/src/lib/reserves-lib.ts`: reserves-library search, detail, and chapter download.
- `packages/thu-info-lib/src/models/home/reserves-lib.ts`
- `packages/thu-info-lib/src/mocks/reserves-lib.ts`

## Important Seams

- Library-room booking has separate login and account-number prerequisites from seat booking.
- Socket status is distinct from seat availability and can fail on its own path.
- Sports booking mixes phone setup, captcha, booking, payment, and unsubscribe flows.
- `downloadChapters()` is a side-effecting helper with an optional progress callback.

## Common Risk Areas

- Booking and cancellation responses must stay aligned with record parsing.
- Sports payment depends on scraped forms and receipt-title validation.
- Library-room email update and fuzzy-search flows have their own request and response quirks.
