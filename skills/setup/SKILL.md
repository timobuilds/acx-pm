---
name: setup
description: First-run configuration for the acx-pm plugin — verifies MCP connectivity, then collects the user's name, role, team channels, Jira projects, and other defaults into a personal config that every other acx-pm skill reads. Trigger on "/setup", "set up the pm plugin", "configure acx-pm", "update my pm config", "check my MCPs", or whenever another acx-pm skill finds no config.
---

# ACX PM setup

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) for the config schema and team roster.

## Flow

1. Check for `~/.acx-pm/config.md`. If it exists, show current values and ask what to change (config fields, re-run MCP check, or both). If missing, start fresh.
2. **MCP check (always run first on a fresh setup; offer on config updates)** — see below. Do not validate Slack channels or Jira project keys until core MCPs pass or the user explicitly skips.
3. Interview — ask in two short rounds, not one wall of questions:
   - **Round 1 (identity)**: name; role/team (offer the roster from CONVENTIONS.md as options).
   - **Round 2 (tools)**: team Slack channels; Jira project key(s); Confluence space; LT channel (default `#priv-acx-pm-lt`); roadmap source + location (Airtable base / Confluence page / Miro board); transcripts folder; decision-log parent page.
   Every question is skippable — skills will ask inline later for anything missing.
4. Where possible, validate instead of trusting: search Slack for the named channels, check the Jira project key exists. If an MCP needed for validation is down, say so — don't treat a failed lookup as a bad channel name.
5. Write `~/.acx-pm/config.md` in the schema from CONVENTIONS.md. Show the final file content for confirmation before writing.

## MCP check

acx-pm does **not** bundle MCP servers. Users install and authenticate them separately in their client. This step verifies what's actually connected before collecting config that depends on it.

### Required integrations

| Integration | Tier | Used by | Smoke test |
|---|---|---|---|
| **Slack** | Core | standup, 1:1, lt-weekly, call-prep, follow-up | Search or list a channel the user can access |
| **Atlassian** (Jira + Confluence) | Core | one-on-one, jira-hygiene, feature-brief, decision-log, call-prep, roadmap-sync | Resolve a Jira project or list a Confluence space |
| **Airtable** | Optional | roadmap-sync (when `roadmap_source: airtable`) | List bases or read a table |
| **Miro** | Optional | strategic-memo, roadmap-sync (when `roadmap_source: miro`) | List boards or read board metadata |
| **Figma** | Optional | strategic-memo (FigJam output) | List files or confirm Figma MCP responds |

**Core** = needed for most daily skills. **Optional** = checked when the user's roadmap source or output choices need it; still report status but don't block setup.

### How to probe

1. Inspect available MCP servers (list tool descriptors under the MCP file system, or attempt lightweight read-only calls).
2. Map servers to integrations by capability — e.g. a server with Jira issue search counts as Atlassian even if the server name isn't literally `atlassian`.
3. Run the smoke test for each integration. Auth errors mean "installed but not authenticated"; missing tools mean "not installed".
4. Present a status table:

   ```
   | Integration | Status | Notes |
   | Slack       | ✅ connected | searched #general |
   | Atlassian   | ⚠️ auth needed | Jira tools found, OAuth expired |
   | Airtable    | — not installed | needed only if roadmap lives in Airtable |
   ```

### If something is missing — guide the user

Tailor instructions to the client (Cursor vs Claude Code / Cowork). Keep it short; link to team docs if the user has them.

**Cursor**

1. Open **Cursor Settings → Plugins** (or **MCP**).
2. Enable the MCP plugin for each missing integration from the marketplace:
   - **Slack** — Slack MCP plugin; complete OAuth when prompted.
   - **Atlassian** — Atlassian MCP plugin (Jira + Confluence); sign in with your Autodesk/Atlassian account.
   - **Airtable** — Airtable MCP plugin; provide a personal access token.
   - **Miro** — Miro MCP plugin; authorize the workspace.
   - **Figma** — Figma MCP plugin; sign in to access FigJam/files.
3. Restart the agent chat or reload MCPs if tools don't appear immediately.
4. Re-run the smoke tests. Offer to call `mcp_auth` for servers that support it when auth fails.

**Claude Code / Cowork**

Same integrations, installed via Claude's plugin/MCP settings. OAuth and token flows are identical; only the settings path differs.

### Gate before config validation

- If **Slack** or **Atlassian** are missing or unauthenticated: explain which skills will be degraded, give the setup steps above, and ask whether to **retry MCP check** or **continue anyway** (config can still be saved; validation steps are skipped).
- If the user picks a roadmap source in Round 2 that needs an optional MCP that's down, flag it inline — e.g. "roadmap_source is Airtable but Airtable MCP isn't connected; `/roadmap-sync` won't work until you enable it."

## Ongoing behavior

When any acx-pm skill discovers a new stable fact (a corrected channel name, a preferred threshold), offer a one-line config update — never write silently.
