---
name: decision-log
description: Capture a product decision with context, options considered, rationale, and revisit criteria, then draft it to the team's Confluence decision log. Trigger on "/decision-log", "log this decision", "record the decision", "write up what we decided", or "decision record".
---

# Decision log

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first and load config (`decision_log_parent`, `confluence_space`).

## Capture

Pull as much as possible from the conversation, linked Slack threads, or meeting notes before asking. Fill this record:

- **Decision** — one sentence, active voice ("We will X").
- **Date & deciders** — who made the call, who was consulted.
- **Context** — what forced the decision now.
- **Options considered** — 2-4, each with the strongest honest case for it.
- **Rationale** — why the chosen option won; which tradeoff we accepted.
- **Consequences** — what this makes easier/harder; teams affected.
- **Revisit trigger** — the condition or date that reopens this ("revisit if churn > X", "review at Q3 planning").
- **Links** — Slack threads, Jira epics, memos.

If options or rationale are missing, ask — a decision log without the losing options is worthless in six months.

## Deliver

Show the complete record in chat. Default destination is a **Confluence page** under the configured decision-log parent (title: `YYYY-MM-DD — <decision>`), but ask the output-destination question per conventions. Create the page only after explicit confirmation. Offer to also drop a one-line summary + link as a Slack draft for the relevant channel.
