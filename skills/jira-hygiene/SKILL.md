---
name: jira-hygiene
description: Audit a Jira project for stale tickets, missing descriptions or acceptance criteria, unestimated work, and orphaned issues, producing a prioritized cleanup list. Trigger on "/jira-hygiene", "audit my jira board", "clean up the backlog", "jira health check", or "what's stale in jira".
---

# Jira hygiene

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first and load config (`jira_project_keys`).

## Scan

Query the project(s) for:

1. **Stale** — in progress with no update > 14 days; in review > 7 days; blocked with no comment > 7 days.
2. **Underspecified** — empty/one-line descriptions, stories without acceptance criteria, bugs without repro steps.
3. **Unestimated** — items in the next sprint or top of backlog without estimates.
4. **Orphaned** — stories with no epic; epics with no recent child activity.
5. **Zombie epics** — open > 1 quarter with < 20% recent movement.
6. **Duplicates** — near-identical summaries (flag, don't judge).

Adjust thresholds if the user's team works differently — ask once, remember in config.

## Report

Prioritized cleanup list, worst first, grouped by fix type:

- **Close candidates** — likely done or obsolete; one-line rationale each.
- **Needs an owner decision** — stale items where the assignee must fish-or-cut-bait.
- **Quick fixes** — missing fields the PM can fill in minutes.
- **Restructure** — orphans to re-parent, epics to split or close.

Include counts up front ("142 open issues, 31 flagged") so progress is measurable week over week.

## Optional actions (draft-first, batch-confirmed)

Offer to draft: nudge comments on stale tickets, bulk field updates, or a Slack draft to the team channel summarizing asks per assignee. Execute nothing without explicit approval.

## Deliver

Show the report, then ask the output-destination question per conventions.
