---
name: call-prep
description: Build a briefing for a customer presentation or support call by pulling account history from Jira, Confluence, and Slack. Trigger on "/call-prep", "prep me for the call with [customer]", "customer call briefing", "I'm presenting to [customer]", or "support call prep".
---

# Customer call prep

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first and load config.

## Input

Need: customer/account name, call type (presentation, support escalation, discovery, QBR), and when. Ask only for what's missing.

## Gather

1. **Jira**: tickets mentioning the customer — open bugs, escalations, feature requests, recent resolutions. Note age and severity of anything open.
2. **Confluence**: account notes, past meeting notes, previous presentations to this customer.
3. **Slack**: threads mentioning the customer in the last 90 days — internal chatter often knows things tickets don't.
4. **Web** (light): recent customer news that could change the conversation (layoffs, acquisitions, launches).

## Compile

One-page briefing:

1. **Snapshot** — who they are, product areas they use, relationship temperature in one line.
2. **Open items they will bring up** — ranked by likelihood; for each: status, honest talking point, and what NOT to promise.
3. **Wins to reference** — recently shipped things they asked for.
4. **Likely questions & suggested answers** — especially for support calls: the three hardest questions and grounded answers.
5. **Goals for the call** — what we want out of it; proposed agenda if it's ours to set.
6. **Landmines** — unresolved escalations, missed commitments, pricing sensitivities.

Every item sourced. For presentations, offer to also draft an outline of slides/talking points as a follow-up.

## Deliver

Show the draft, then ask the output-destination question per conventions.
