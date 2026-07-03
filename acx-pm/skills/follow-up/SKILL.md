---
name: follow-up
description: Process customer call notes or a transcript into action items, a follow-up message draft, and proposed Jira tickets. Trigger on "/follow-up", "process these call notes", "write the follow-up email", "what were the action items", or "turn this call into tickets".
---

# Call follow-up

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first and load config (`jira_project_keys`).

## Input

Call notes or transcript — pasted, a file, or a pointer to where they live. Confirm who the customer was and who attended if not evident.

## Extract

1. **Decisions made** — with who agreed to them.
2. **Action items** — each with owner (us vs. customer), due date if stated, and source line from the notes.
3. **Commitments we made** — flag anything promised to the customer; these become tracked items, not vibes.
4. **New asks / feature requests** — candidates for the backlog.
5. **Risks heard** — churn signals, competitor mentions, frustration.

## Produce (all drafts, nothing sent or created without confirmation)

1. **Follow-up message** — external-facing recap email or Slack draft: thanks, decisions, our commitments with dates, their action items, next step. Professional, no internal jargon.
2. **Internal summary** — 5 lines for the team channel: temperature, key decisions, risks.
3. **Proposed Jira tickets** — for each action item and feature request that belongs in Jira: title, description (with customer quote), suggested project/type/priority. Present as a table; create only the ones the user approves, one confirmation for the batch.

## Deliver

Show all three drafts. Ask the output-destination question per conventions for the summary; the follow-up message defaults to a Slack/email draft the user sends themselves.
