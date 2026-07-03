---
name: one-on-one
description: Prepare for the weekly 1:1 with the Director of Product Management. Pulls the user's recent Slack messages, Jira updates, and Confluence edits to compile a top-5 priorities brief framed Now/Next/Later. Trigger on "/one-on-one", "prep my 1on1", "prepare for my one on one", "1:1 prep", or "what should I bring to my 1:1". Also works in reverse for the Director prepping for a 1:1 with a specific PM.
---

# 1:1 prep

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first and load the user's config.

## Determine mode

- **PM mode** (default): prep the user for their 1:1 with the Director.
- **Director mode**: if the user is the Director or names a PM ("prep my 1:1 with the VRED strategic PM"), gather that PM's visible activity instead and frame it as questions to ask, not priorities to report.

## Gather (last 7 days unless told otherwise)

Run these lookups; skip gracefully if an MCP is unavailable and note the gap:

1. **Slack**: search messages authored by the user and mentions of them in their team channels and the LT channel. Capture threads with unresolved questions or escalations.
2. **Jira**: issues assigned to, reported by, or recently commented on by the user in their project keys — anything that changed status, got blocked, or slipped.
3. **Confluence**: pages the user created or edited; pages where they were mentioned or have open comments.

## Compile

Produce a one-page brief:

1. **Top 5 priorities** — ranked. Each: one-line status, what changed this week, what's needed from the Director (decision, air cover, resource, FYI). Frame the set as Now / Next / Later.
2. **Blockers & decisions needed** — things only the Director can unblock.
3. **Wins & signals** — brief, evidence-linked.
4. **Parking lot** — items to raise only if time permits.

Every item links to its source (Slack permalink, Jira key, Confluence URL). Keep it scannable in 2 minutes.

## Deliver

Show the draft, then ask the output-destination question per conventions (local markdown / Confluence / Slack draft / FigJam / Miro).
