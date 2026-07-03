---
name: roadmap-sync
description: Reconcile the roadmap of record (Airtable, Confluence, or Miro) against Jira reality — surfacing status drift, missing items, and date slips with proposed corrections. Trigger on "/roadmap-sync", "sync the roadmap", "is the roadmap up to date", "roadmap vs jira", or "reconcile roadmap".
---

# Roadmap sync

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first and load config (`roadmap_source`, `airtable_roadmap`, `jira_project_keys`).

## Sources

The roadmap of record may live in **Airtable**, **Confluence**, or **Miro** — check config, ask if unset. Read the roadmap items (name, status, target date/horizon, owner). Then pull the corresponding Jira epics/initiatives.

## Match & compare

Match roadmap items to Jira epics by name/link/label; list unmatchable items rather than guessing. For each matched pair check:

1. **Status drift** — roadmap says "in progress", Jira shows nothing moving (or vice versa).
2. **Date drift** — Jira due dates or sprint assignments inconsistent with the roadmap horizon.
3. **Missing from roadmap** — substantial in-flight Jira epics with no roadmap entry.
4. **Missing from Jira** — roadmap commitments with no execution structure behind them.
5. **Orphaned owners** — items whose owner has no recent activity on them.

## Report

Discrepancy table: item, roadmap says, Jira says, drift type, proposed correction. Lead with a one-line health summary ("23 items, 17 in sync, 4 drifted, 2 unmatched"). Frame corrections as Now / Next / Later moves where relevant.

## Optional actions (draft-first, batch-confirmed)

Offer to draft the corrections: Airtable record updates, Confluence page edits, or a list of Jira changes. Show exact before → after per item; apply only what's approved.

## Deliver

Show the report, then ask the output-destination question per conventions.
