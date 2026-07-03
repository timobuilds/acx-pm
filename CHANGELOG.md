# Changelog

All notable changes to plugins in this marketplace are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versions use [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

When you ship a release, bump `version` in:

- `acx-pm/.cursor-plugin/plugin.json`
- `acx-pm/.claude-plugin/plugin.json`

Version lives in the per-plugin manifests only — the marketplace listing schema does not accept `version`, `category`, or `keywords` on plugin entries.

## [0.2.1] - 2026-07-03

### Fixed

- **`.cursor-plugin/marketplace.json`** — removed `version`, `category`, and `keywords` from the plugin entry (not allowed by the marketplace listing schema; blocked Dashboard import)

## [0.2.0] - 2026-07-03

### Changed

- **Repo layout** — restructured as a Cursor team marketplace monorepo (`.cursor-plugin/marketplace.json` at root, plugin in `acx-pm/`)
- **`/setup`** — MCP connectivity check runs before config interview; guides users through enabling Slack, Atlassian, Airtable, Miro, and Figma MCPs; gates channel/Jira validation on core MCPs
- **README** — marketplace admin/PM install guides; expanded MCP requirements and first-run steps

## [0.1.0] - 2026-07-03

### Added

- **acx-pm** — initial release with 15 skills: setup, one-on-one, standup, lt-weekly, transcripts-extract-insight, deep-product-sentiment, competitive-scan, strategic-memo, press-release, decision-log, call-prep, follow-up, feature-brief, jira-hygiene, roadmap-sync
- Cross-platform manifests for Cursor (`.cursor-plugin/plugin.json`) and Claude Code / Cowork (`.claude-plugin/plugin.json`)
- Team conventions in `acx-pm/CONVENTIONS.md` (draft-first, sourced claims, Now/Next/Later framing)
