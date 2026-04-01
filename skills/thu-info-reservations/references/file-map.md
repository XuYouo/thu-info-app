# File Map

## Library and Reservation Library

- `packages/thu-info-lib/src/lib/library.ts`: library lists, floors, sections, seats, socket status, seat booking, library-room booking, cancellation, and record APIs.
- `packages/thu-info-lib/src/models/home/library.ts`: seat, room, section, floor, record, and socket models.
- `packages/thu-info-lib/src/lib/reserves-lib.ts`: reserves-library search, detail, and chapter download.
- `packages/thu-info-lib/src/models/home/reserves-lib.ts`

## Sports

- `packages/thu-info-lib/src/lib/sports.ts`: resources, phone number, captcha, booking, payment, unsubscribe, record parsing.
- `packages/thu-info-lib/src/models/home/sports.ts`

## App Screens

- `apps/thu-info-app/src/ui/home/library.tsx`
- `apps/thu-info-app/src/ui/home/libraryFloor.tsx`
- `apps/thu-info-app/src/ui/home/librarySection.tsx`
- `apps/thu-info-app/src/ui/home/librarySeat.tsx`
- `apps/thu-info-app/src/ui/home/libraryMap.tsx`
- `apps/thu-info-app/src/ui/home/libBookRecord.tsx`
- `apps/thu-info-app/src/ui/home/libRoomSelect.tsx`
- `apps/thu-info-app/src/ui/home/libRoomBook.tsx`
- `apps/thu-info-app/src/ui/home/libRoomPerformBook.tsx`
- `apps/thu-info-app/src/ui/home/libRoomBookRecord.tsx`
- `apps/thu-info-app/src/ui/home/sports.tsx`
- `apps/thu-info-app/src/ui/home/sportsDetail.tsx`
- `apps/thu-info-app/src/ui/home/sportsSelect.tsx`
- `apps/thu-info-app/src/ui/home/sportsSelectField.tsx`
- `apps/thu-info-app/src/ui/home/sportsSelectTitle.tsx`
- `apps/thu-info-app/src/ui/home/sportsSuccess.tsx`
- `apps/thu-info-app/src/ui/home/sportsRecord.tsx`
- `apps/thu-info-app/src/ui/home/reservesLibWelcome.tsx`
- `apps/thu-info-app/src/ui/home/reservesLibPDF.tsx`

## Shared State

- `apps/thu-info-app/src/redux/slices/reservation.ts`: active reservation state.
- `apps/thu-info-app/src/ui/home/home.tsx`: reservation entrypoints and active-card surfacing.

## Common Risk Areas

- Socket status is separate from seat availability and can fail independently.
- Library-room booking has separate account and email prerequisites.
- Sports payment flow scrapes a form and posts through a QR-code generation step; small selector changes can break booking only after order creation.
