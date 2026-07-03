---
name: feature-brief
description: Isolate a fuzzy feature or initiative into a crisp brief — problem statement, scope boundaries, dependencies, open questions — with draft Jira epic and stories. Trigger on "/feature-brief", "isolate this feature", "scope this feature", "break down this initiative", "feature isolation", or "turn this idea into an epic".
---

# Feature brief (feature isolation)

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first and load config (`jira_project_keys`).

## Input

The fuzzy thing: an idea from chat, a memo, a customer ask, a Miro board. Before writing, check Jira and Confluence for prior art — an existing epic or spec for the same thing changes this from "create" to "reconcile".

## Isolate

Force sharp edges:

1. **Problem statement** — who, pain, evidence. If evidence is missing, say so explicitly; don't launder assumption into fact.
2. **In scope** — the smallest coherent slice that delivers customer value.
3. **Out of scope** — explicitly named, with one line on why (defer, never, someone else's).
4. **Dependencies** — technical (systems, teams, APIs), sequencing (what must land first), and cross-PM (which ACX team owns adjacent pieces).
5. **Open questions** — each with a proposed owner and the decision it blocks.
6. **Success measure** — how we'd know it worked; one primary metric.
7. **Now / Next / Later cut** — if the slice is still too big, propose the horizon split.

## Draft Jira structure

Propose (don't create): one epic + 3-8 stories with titles, one-paragraph descriptions, and acceptance criteria where determinable. Present as a table. Create in Jira only after explicit approval, batch-confirmed.

## Deliver

Show the brief, then ask the output-destination question per conventions. Confluence is the natural home; offer the Jira creation step separately.
