# File Map

## News Library Layer

- `packages/thu-info-lib/src/lib/news.ts`: list, search, detail, subscriptions, favorites, source list, channel list.
- `packages/thu-info-lib/src/models/news/news.ts`: channel tags, slices, and subscription models.
- `packages/thu-info-lib/src/mocks/news.ts`: mock data for news flows.

## News App Layer

- `apps/thu-info-app/src/ui/news/news.tsx`: main tab, category grouping, search mode, pagination.
- `apps/thu-info-app/src/ui/news/newsDetail.tsx`
- `apps/thu-info-app/src/ui/news/newsFav.tsx`
- `apps/thu-info-app/src/ui/news/newsSub.tsx`
- `apps/thu-info-app/src/components/news/NewsListItem.tsx`
- `apps/thu-info-app/src/components/news/IconStarButton.tsx`

## DeepSeek Layer

- `apps/thu-info-app/src/ui/home/deepseek.tsx`: streaming UI, conversation state updates, optional news-grounded prompt building.
- `apps/thu-info-app/src/redux/slices/deepseek.ts`: local conversation history.
- `apps/thu-info-app/src/redux/slices/config.ts`: `deepseekToken` and related preferences.
- `packages/thu-info-lib/src/lib/basics.ts`: `getMadModelToken` helper used to bootstrap tokens.

## Important Seams

- News lists dedupe by URL in the app layer.
- Favorites can be toggled from both list and detail views; keep those updates synchronized.
- DeepSeek strips reasoning markup for prior assistant messages before sending follow-up prompts.
- The news-grounded path depends on `helper.searchNewsList()` and `helper.getNewsDetail()` returning sane, short abstracts.
