---
name: standup
description: Prepare daily standup notes for a Strategic PM by pulling overnight activity from team-specific Slack channels and Jira. Trigger on "/standup", "prep my standup", "standup notes", "what happened since yesterday", or "daily standup".
---

# Standup prep

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first and load the user's config (`slack_team_channels`, `jira_project_keys`).

## Time window

Since the last business day's standup: 24 hours normally, since Friday morning on Mondays. Resolve against today's actual date.

## Gather

1. **Slack**: read the user's team channels for the window. Flag: unanswered questions directed at the user or their team, escalations, customer issues, decisions made in threads the user may have missed.
2. **Jira**: issues in the team's project(s) that changed in the window — status transitions, new blockers, new bugs, comments awaiting the PM.

## Compile

Standup format, tight enough to read aloud in 60 seconds:

- **Yesterday** — what moved (from Jira transitions + Slack evidence)
- **Today** — proposed focus, inferred from in-progress items and calendar-adjacent Slack context; mark inferences as proposals
- **Blockers** — anything stuck, with who/what is needed
- **Heads-up** — 1-3 items from Slack the team should know (customer noise, cross-team asks)

Link every item to its source. If nothing notable happened in a section, say so in one line rather than padding.

## Deliver

Show the draft, then ask the output-destination question per conventions. For Slack drafts, target the team channel but never send without confirmation.
