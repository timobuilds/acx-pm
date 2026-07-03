---
name: press-release
description: Write a quick working-backwards press release (Amazon PR/FAQ style) from selected context — a feature idea, memo, Jira epic, or conversation. Trigger on "/press-release", "write a press release", "PR/FAQ", "working backwards doc", or "announce this as if it shipped".
---

# Press release (working backwards)

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first.

## Input

Use whatever context the user selected or pointed at: chat context, a file, a Confluence page, a Jira epic, a Figma/Miro board. If the core is unclear, ask exactly two questions: who is the customer, and what can they do now that they couldn't before?

## Format (one page)

1. **Headline** — customer-benefit language, no internal jargon.
2. **Subheading** — who it's for and the one-line value.
3. **Date & location** — future launch date.
4. **Opening paragraph** — the announcement as the customer experiences it.
5. **Problem paragraph** — the pain, in the customer's words.
6. **Solution paragraph** — how it works, only as deep as a customer cares.
7. **Leader quote** — why this matters strategically (mark as placeholder).
8. **Customer quote** — invented but realistic; mark as illustrative.
9. **Getting started** — how a customer begins.

Then a short **FAQ** (5-8 questions): the hardest internal questions — pricing, migration, why not the competitor, what's out of scope at launch.

## Writing rules

- If the press release is boring, the feature is boring — say so and suggest a sharper angle.
- Ban internal codenames and org-speak. A customer reading this cold should get it.
- Keep it under a page; the discipline is the point.

## Deliver

Show the draft, then ask the output-destination question per conventions.
