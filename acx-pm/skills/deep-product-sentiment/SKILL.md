---
name: deep-product-sentiment
description: Research customer sentiment about a product across web forums (Reddit, Quora, Autodesk forums, Stack Overflow, industry communities) and structure findings as a referenced SWOT-style analysis. Trigger on "/deep-product-sentiment", "what do customers say about X online", "forum sentiment", "research product sentiment", or "community sentiment analysis".
---

# Deep product sentiment

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first.

## Scope

Confirm before searching: which product/feature, which competitor(s) if any for contrast, and time horizon (default: last 18 months — forum sentiment goes stale).

## Research

Search broadly and iteratively — this is a deep-research task, not a single query. Cover at minimum:

- Reddit (product subreddits + adjacent professional subreddits)
- Autodesk forums / official community forums
- Quora, Stack Overflow (for API/dev products), Hacker News
- Review sites (G2, Capterra) and YouTube comment themes where relevant

For each finding capture: the claim, a representative quote, the URL, approximate date, and apparent user type (hobbyist, pro, enterprise admin, developer).

## Structure

Deliver as a **SWOT** grounded in community voice:

- **Strengths** — what users praise, with quotes + links
- **Weaknesses** — recurring complaints, ranked by frequency and intensity
- **Opportunities** — unmet needs, requested features, migration triggers from competitors
- **Threats** — competitor pull, churn language, ecosystem shifts

Then add:

- **Sentiment trendline** — is tone improving or degrading, and around which releases/events
- **Verbatim gallery** — the 8-10 most telling quotes
- **Caveats** — sample bias (forums over-represent the frustrated), thin-data areas

Every claim carries a reference. Distinguish widespread sentiment from loud individuals — note thread upvotes/reply counts as weight.

## Deliver

Show the draft, then ask the output-destination question per conventions. This output works well as a FigJam/Miro 2x2.
