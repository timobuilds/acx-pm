---
name: strategic-memo
description: Write an Amazon-style narrative strategic memo from ingested context (local folders, Figma, Miro, or Confluence), framed Now/Next/Later. Trigger on "/strategic-memo", "write a strategy memo", "amazon style memo", "six pager", "narrative memo", or "turn this into a strategic memo".
---

# Strategic memo

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first.

## Ingest

Ask which context sources to pull from (any combination):

- **Local folder(s)** — read all docs, notes, transcripts
- **Confluence** — pages or a space the user names
- **Figma/FigJam** — boards with research or design exploration
- **Miro** — workshop boards, sticky-note clusters

Extract claims, data points, customer evidence, and open questions from each. Track provenance — the memo must cite where each supporting fact came from.

## Structure (narrative prose, no bullet decks)

1. **Situation** — where we are, what changed, why this memo now. One page max.
2. **Customer & problem** — who hurts, how badly, evidence.
3. **Opportunity** — size, shape, why us, why now.
4. **Approach** — the proposal, framed as **Now / Next / Later** with what we'd deliver, learn, and decide at each horizon.
5. **Risks & what we're not doing** — honest tradeoffs, explicit non-goals.
6. **Asks** — decisions and resources needed.
7. **Appendix: FAQ** — anticipated hard questions with direct answers.

## Writing rules

- Full sentences and paragraphs. Data beats adjectives; every number sourced.
- No weasel words ("significant", "leverage", "synergy"). If a claim can't survive "how do we know that?", cut it or mark it as a hypothesis.
- Target 2-4 pages body. Write the FAQ last — it's where reviewers will go first.
- Flag any section where ingested context was thin so the author knows where to strengthen.

## Deliver

Show the draft, iterate with the user, then ask the output-destination question per conventions.
