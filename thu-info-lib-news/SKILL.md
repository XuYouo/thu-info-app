---
name: thu-info-lib-news
description: Implement news APIs in the bundled THU Info runtime. Use when working on news feeds, search, detail parsing, favorites, subscriptions, channel lists, source lists, or news normalization.
---

# THU Info Lib News

Read `references/file-map.md` first. This skill is limited to library-side news retrieval, mutation, and parsing.

This skill is intended to stay standalone. Run `node scripts/run.mjs help` to see the supported news commands. The runner installs and executes `@thu-info/lib@3.15.2` under `assets/runtime/node_modules`.

## Keep the news API surface together

- Use `assets/runtime/node_modules/@thu-info/lib/src/lib/news.ts` for list, search, detail, source, channel, subscription, and favorite flows.
- Use `assets/runtime/node_modules/@thu-info/lib/src/models/news/news.ts` for normalized slice, subscription, and channel types.
- Use `assets/runtime/node_modules/@thu-info/lib/src/mocks/news.ts` to keep mocked behavior compatible with real parsing.

## Preserve normalization in the library

- Keep channel IDs, source IDs, decoded titles, and short abstracts normalized in `lib/news.ts`.
- Keep detail extraction and HTML cleanup centralized in the library rather than pushing raw content downstream.
- Preserve the distinction between channel-driven feeds, subscription-driven feeds, and favorites.

## Change carefully around write flows

- Subscription add or remove and favorite add or remove should keep their boolean success semantics stable.
- `getNewsChannelList()` has language-sensitive behavior; preserve the `needEnglish` branch.
- When payload shapes change, update `models/news/news.ts` before changing callers.

## Verify the full content path

- List pagination.
- Search results.
- Detail parsing.
- Source and channel list retrieval.
- Subscription add, remove, and list.
- Favorite add, remove, and list.
