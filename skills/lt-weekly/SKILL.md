---
name: lt-weekly
description: Prepare for the weekly PM leadership meeting by summarizing the last ten days of the #priv-acx-pm-lt Slack channel into themes, open decisions, and discussion topics. Trigger on "/lt-weekly", "prep the LT meeting", "leadership weekly", "summarize the LT channel", or "what's on the LT agenda".
---

# LT weekly prep

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first and load the user's config (`slack_lt_channel`, default `#priv-acx-pm-lt`).

## Gather

Read the last **10 days** of messages and threads in the LT channel. Include thread replies — decisions often live three replies deep.

## Synthesize

Don't summarize chronologically; cluster into themes. Produce:

1. **Top themes of the week** — 3-5, each with a two-sentence synthesis and links to the key threads. Rank by strategic weight, not message volume.
2. **Decisions made** — what was decided, by whom, in which thread.
3. **Open decisions / unresolved debates** — framed as questions the meeting could close. Note who holds opposing views.
4. **Proposed agenda** — 3-4 items for this week's meeting, ordered by urgency × impact, each with a one-line "why now".
5. **FYI** — notable items that need awareness but not discussion.

Distinguish signal from chatter: a topic mentioned once by the Director may outweigh a 40-message thread about scheduling.

## Deliver

Show the draft, then ask the output-destination question per conventions.
