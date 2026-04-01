---
name: thu-info-news-deepseek
description: Implement THU Info news and AI-assisted news workflows. Use when working on news feeds, search, detail parsing, favorites, subscriptions, channel grouping, or the DeepSeek tab that grounds answers in campus news.
---

# THU Info News & DeepSeek

Read `references/file-map.md` first. This domain has two layers: the structured news system and the DeepSeek chat flow that optionally uses news as retrieval context.

## Keep the two layers separate

- Use `packages/thu-info-lib/src/lib/news.ts` for news APIs, detail parsing, search, subscriptions, and favorites.
- Use `apps/thu-info-app/src/ui/news/**` for the news tab UX.
- Use `apps/thu-info-app/src/ui/home/deepseek.tsx` plus `redux/slices/deepseek.ts` for conversation history, streaming, and optional news-grounded prompting.

## Preserve news normalization in the library

- Keep channel IDs, source IDs, favorites, and decoded titles normalized in `lib/news.ts`.
- Keep upstream selector quirks and content extraction in the library rather than duplicating parsing logic in screens.
- Update `models/news/news.ts` before changing news-tab rendering assumptions.

## Preserve DeepSeek-specific behavior

- Conversation history is stored locally in the `deepseek` slice; do not introduce server-side assumptions into that state.
- The DeepSeek screen streams via `EventSource`; preserve incremental updates when touching assistant message rendering.
- The news-grounded path first extracts keywords, then fetches top news, then injects abstracts into the final prompt; keep those steps explicit.
- Keep token management aligned with `config.deepseekToken` and the MadModel endpoints/constants already used by the screen.

## Preserve UX grouping and shortcuts

- News categories are UI groupings over channel tags; keep grouping logic in the news tab coherent with translation keys.
- Favorite and subscription state changes must update both detail pages and list pages correctly.
- The DeepSeek tab is hidden when the helper is logged out or mocked; preserve that gating unless product requirements change.

## Verify both retrieval and chat paths

- Verify list, search, detail, favorite, and subscription flows in the news tab.
- Verify the DeepSeek non-RAG path.
- Verify the DeepSeek news-grounded path with and without matching articles.
- Verify conversation title generation and local history updates.
