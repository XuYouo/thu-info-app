# File Map

## News Library Layer

- `packages/thu-info-lib/src/lib/news.ts`: list, search, detail, subscriptions, favorites, source list, and channel list.
- `packages/thu-info-lib/src/models/news/news.ts`: channel tags, slices, and subscription models.
- `packages/thu-info-lib/src/mocks/news.ts`: mock data for news flows.

## Important Seams

- `getNewsList()`, `searchNewsList()`, and `getNewsListBySubscription()` share normalization rules.
- `getNewsDetail()` owns HTML cleanup and returns a compact tuple contract.
- Favorite and subscription mutations return boolean success values; preserve those semantics.
- `getNewsChannelList()` has a language-sensitive branch through `needEnglish`.

## Common Risk Areas

- Encoded titles, channel IDs, and source IDs should be normalized in the library.
- Detail parsing is selector-sensitive and can fail even when list APIs still work.
- Search, favorites, and subscriptions can diverge if model changes are applied to only one branch.
