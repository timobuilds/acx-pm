# ACX Plugins — Cursor team marketplace

Private plugin marketplace for the ACX product management team. Import this repo in Cursor to distribute **acx-pm** (and future plugins) to the team.

## For admins — import the marketplace

Requires Cursor **Teams** or **Enterprise** with admin access.

1. Push this repo to GitHub (`https://github.com/timobuilds/acx-pm`).
2. **Private repo?** Register the **Cursor GitHub App** under **[Dashboard → Integrations](https://cursor.com/dashboard?tab=integrations)** and grant it access to this repo — otherwise import cannot read `.cursor-plugin/marketplace.json`.
3. Open **[Dashboard → Settings → Plugins](https://cursor.com/dashboard)** → **Team Marketplaces** → **Import Marketplace**.
4. Paste `https://github.com/timobuilds/acx-pm` and continue. Cursor parses the manifest and lists **acx-pm**.
5. Set distribution for **acx-pm**:
   - **Default Off** — teammates opt in via Customize (recommended until battle-tested)
   - **Default On** — auto-installed, can opt out
   - **Required** — auto-installed, cannot uninstall
6. Enable **Auto Refresh** so pushes to `main` re-index the marketplace without manual re-import.

## For PMs — install the plugin

### Option A — team marketplace (recommended)

After an admin imports the marketplace:

1. Open **Customize** in Cursor (Agents sidebar).
2. Find **acx-pm** from the ACX team marketplace.
3. Install the plugin.
4. Enable MCPs (Slack, Atlassian, etc.) in **Settings → Plugins**, then run `/setup`.

### Option B — npm (no admin setup)

Published as [`create-acx-pm`](https://www.npmjs.com/package/create-acx-pm) on npm. One-shot install (recommended):

```bash
npx create-acx-pm
```

Or install globally and re-run anytime:

```bash
npm install -g create-acx-pm
create-acx-pm
```

Installs skills to `~/.cursor/skills/acx-pm`. Then enable MCPs and run `/setup`.

**Flags:** `--project` (install to `./.cursor/skills/acx-pm`), `--claude` (`~/.claude/skills/acx-pm`), `--force` (overwrite). See [`acx-pm/README.md`](acx-pm/README.md) for details.

## Repo layout

```
.cursor-plugin/marketplace.json   ← team marketplace manifest (import this repo)
bin/create-acx-pm.js              ← npx installer CLI
package.json                      ← publish as create-acx-pm on npm
CHANGELOG.md
acx-pm/                           ← acx-pm plugin
  .cursor-plugin/plugin.json      ← version lives here
  .claude-plugin/plugin.json
  skills/
  CONVENTIONS.md
  README.md
```

## Maintaining

On release:

1. Bump `version` in `acx-pm/.cursor-plugin/plugin.json`, `acx-pm/.claude-plugin/plugin.json`, and root `package.json`
2. Add a dated section to `CHANGELOG.md`
3. Push to `main` (auto-refresh picks it up if enabled)
4. Publish to npm: `npm publish` from repo root (keep `create-acx-pm` version in sync with plugin manifests)

Do **not** add `version`, `category`, or `keywords` to plugin entries in `.cursor-plugin/marketplace.json` — the listing schema rejects them. Category and keywords belong in each plugin's own `plugin.json`.
