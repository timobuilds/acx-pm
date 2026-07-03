# ACX - PM plugin

Shared workflows for the ACX product management team — installable as a **Cursor plugin** or a **Claude Code / Cowork plugin** from the same repo. Fifteen skills covering recurring meetings, customer insight, strategic writing, and Jira/roadmap execution.

## Cross-platform

One directory, two manifests:

| Client | Manifest | Install via |
|---|---|---|
| **Cursor** (primary) | `.cursor-plugin/plugin.json` | Cursor plugin settings or team marketplace |
| **Claude Code / Cowork** | `.claude-plugin/plugin.json` | Claude plugin install flow |

Skills live in `skills/*/SKILL.md` — a cross-agent format both clients read. No duplicated skill content; bump `version` in **both** manifests when you ship changes.

## Requirements

acx-pm does **not** bundle MCP servers — install them separately in your client, then `/setup` verifies they're working.

| Integration | Tier | Install in Cursor |
|---|---|---|
| **Slack** | Core | Plugins → enable **Slack** MCP → OAuth |
| **Atlassian** (Jira + Confluence) | Core | Plugins → enable **Atlassian** MCP → sign in |
| **Airtable** | Optional | Plugins → enable **Airtable** MCP → personal access token |
| **Miro** | Optional | Plugins → enable **Miro** MCP → authorize workspace |
| **Figma** | Optional | Plugins → enable **Figma** MCP → sign in (FigJam output) |

**Core** integrations power standup, 1:1 prep, Jira hygiene, call prep, and most daily workflows. **Optional** ones matter when your roadmap lives in Airtable/Miro or you want FigJam output from `/strategic-memo`. Skills degrade gracefully if one is missing.

Claude Code / Cowork: same integrations via Claude's plugin/MCP settings.

## First run

1. **Install MCPs** — enable the integrations above in Cursor Settings → Plugins (or Claude's equivalent) and complete auth.
2. **Run `/setup`** — it probes each MCP, guides you through any gaps, then writes personal config to `~/.acx-pm/config.md` (name, team channels, Jira project keys, defaults). Every other skill reads that file so you never re-type channel names.
3. **Confirm** — setup validates Slack channels and Jira project keys against live data when MCPs are connected.

Re-run `/setup` anytime to update config or re-check MCP connectivity. Individual fields remain skippable — skills ask inline for anything missing.

## Skills

| Skill | What it does |
|---|---|
| `/setup` | MCP connectivity check + personal config all other skills read |
| `/one-on-one` | Weekly 1:1 prep — top 5 priorities from Slack/Jira/Confluence, Now/Next/Later |
| `/standup` | Daily standup notes from team channels + Jira changes |
| `/lt-weekly` | Themes, decisions, and agenda from the last 10 days of the LT channel |
| `/transcripts-extract-insight` | Mine a transcript folder for ranked unmet needs and opportunities |
| `/deep-product-sentiment` | Referenced SWOT of community sentiment (Reddit, Autodesk forums, etc.) |
| `/competitive-scan` | Quick competitor/feature-area brief with sources |
| `/strategic-memo` | Amazon-style narrative memo from folders, Figma, Miro, or Confluence |
| `/press-release` | Working-backwards PR/FAQ from selected context |
| `/decision-log` | Capture a decision with options + rationale to Confluence |
| `/call-prep` | Customer call briefing from Jira, Confluence, Slack history |
| `/follow-up` | Call notes → action items, follow-up draft, proposed Jira tickets |
| `/feature-brief` | Isolate a fuzzy initiative into scope, dependencies, draft epic |
| `/jira-hygiene` | Board audit: stale, underspecified, orphaned, zombie |
| `/roadmap-sync` | Reconcile Airtable/Confluence/Miro roadmap against Jira reality |

## Team conventions (baked into every skill)

- **Draft first, human confirms** — nothing is ever posted or created in Slack/Jira/Confluence/Airtable/Miro/Figma without showing the exact content and getting a yes.
- **Output destination is always your choice** — local markdown, Confluence page, Slack draft, FigJam board, or Miro board.
- **Now / Next / Later** is the default prioritization framing.
- **Everything is sourced** — claims link back to the Slack message, Jira ticket, page, or URL they came from.

See `CONVENTIONS.md` for the full set.

## Installing

### Cursor

Per the [Cursor plugin spec](https://github.com/cursor/plugins):

- **Team marketplace (recommended)**: clone this repo and add it in Cursor's plugin settings. The root `.cursor-plugin/marketplace.json` points at `./acx-pm` — no extra setup.
- **Local/manual**: copy the `skills/` folders into a project's `.cursor/skills/` or globally into `~/.cursor/skills/`. Copy `CONVENTIONS.md` alongside them and keep the relative `../../CONVENTIONS.md` reference resolvable.

### Claude Code / Cowork

Install the same repo via Claude's plugin flow — it picks up `.claude-plugin/plugin.json` automatically. MCP requirements and skill behavior are identical to Cursor.

## Maintaining

The source of truth for this plugin lives in the team repo. On any release:

1. Bump `version` in `acx-pm/.cursor-plugin/plugin.json`, `acx-pm/.claude-plugin/plugin.json`, and the `acx-pm` entry in the root `.cursor-plugin/marketplace.json`
2. Add a dated section to the root `CHANGELOG.md`
