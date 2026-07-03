# ACX Plugins — Cursor team marketplace

Private plugin marketplace for the ACX product management team. Import this repo in Cursor to distribute **acx-pm** (and future plugins) to the team.

## For admins — import the marketplace

Requires Cursor **Teams** or **Enterprise** with admin access.

1. Push this repo to GitHub (`https://github.com/timobuilds/acx-pm`).
2. Open **[Cursor Dashboard](https://cursor.com/dashboard) → Settings → Plugins**.
3. Under **Team Marketplaces**, click **Import Marketplace**.
4. Paste the repo URL and continue. Cursor parses `.cursor-plugin/marketplace.json` and lists available plugins.
5. Set distribution for **acx-pm** (Default Off, Default On, or Required) and save.
6. Optional: enable **Auto Refresh** so pushes re-index plugins without manual re-import.

For GitHub Enterprise, register the Cursor GitHub App under Dashboard → Integrations and grant it access to this repo.

## For PMs — install the plugin

After an admin imports the marketplace:

1. Open **Customize** in Cursor (Agents sidebar).
2. Find **acx-pm** from the ACX team marketplace.
3. Install the plugin.
4. Enable MCPs (Slack, Atlassian, etc.) in **Settings → Plugins**, then run `/setup`.

See [`acx-pm/README.md`](acx-pm/README.md) for skill list, MCP requirements, and conventions.

## Repo layout

```
.cursor-plugin/marketplace.json   ← team marketplace manifest (import this repo)
CHANGELOG.md
acx-pm/                           ← acx-pm plugin
  .cursor-plugin/plugin.json
  .claude-plugin/plugin.json
  skills/
  CONVENTIONS.md
  README.md
```

## Maintaining

On release:

1. Bump `version` in `acx-pm/.cursor-plugin/plugin.json`, `acx-pm/.claude-plugin/plugin.json`, and the `acx-pm` entry in `.cursor-plugin/marketplace.json`
2. Add a dated section to `CHANGELOG.md`
3. Push to `main` (auto-refresh picks it up if enabled)
