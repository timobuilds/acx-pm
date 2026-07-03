# ACX PM plugin conventions

Every skill in this plugin follows these rules. Read this file before executing any acx-pm skill.

## 1. User config

Personal config lives at `~/.acx-pm/config.md`. Read it at the start of every skill.

- If the file exists: confirm the values you're about to use in one short line (e.g. "Using team channel #acx-alias-team, Jira project ACX — correct?") and proceed unless corrected.
- If the file is missing or lacks a value the skill needs: ask for just the missing values inline, then offer to save them by running the `/setup` flow (or append them directly to the config with the user's OK).

Config schema (all fields optional until needed):

```yaml
name:                # e.g. Timotheus
role:                # e.g. Strategic PM - AI APIs
team:                # e.g. AI APIs
slack_team_channels: # channels for standup/team context, e.g. [#acx-ai-apis, #acx-ai-apis-eng]
slack_lt_channel:    # default #priv-acx-pm-lt
jira_project_keys:   # e.g. [ACX]
confluence_space:    # e.g. ACXPM
decision_log_parent: # Confluence page or space for decision logs
airtable_roadmap:    # base/table name for the roadmap
roadmap_source:      # airtable | confluence | miro (where the roadmap of record lives)
transcripts_folder:  # default local folder of meeting transcripts
director:            # name of Director, Product Management
```

## 2. Output destination — always ask

Whenever a skill produces a deliverable, ask the user where it should land before finalizing:

1. **Local markdown file** — write to the current workspace folder
2. **Confluence page** — draft in the user's space (config: `confluence_space`)
3. **Slack draft** — a message the user reviews and sends themselves
4. **FigJam board** — via the Figma MCP
5. **Miro board** — via the Miro MCP

Show the full draft in chat first, then place it. For FigJam/Miro, translate the content into board-native structure (frames, sticky notes, columns) rather than pasting a wall of text. If the target MCP is unavailable, say so and fall back to local markdown.

## 3. Draft first, human confirms — always

Never post, create, or modify anything in Slack, Jira, Confluence, Airtable, Miro, or Figma without showing the exact content and getting explicit confirmation. This includes Jira tickets, Slack messages, Confluence pages, and Airtable records. Reads are always fine; writes always require a visible draft and a yes.

## 4. Framing defaults

- Prioritization framing is **Now / Next / Later** unless the user asks otherwise.
- Strategic writing is narrative prose ("Amazon style"): full sentences, no bullet-wall decks. Data beats adjectives.
- Every claim sourced from Slack/Jira/Confluence/web gets a reference (link or message/ticket ID) so teammates can verify.
- Dates: resolve relative dates ("last week") against today's actual date before querying.

## 5. Team roster

| Role | Area |
|---|---|
| Strategic PM | Alias |
| Technical PM | Alias |
| Strategic PM | VRED |
| Technical PM | VRED |
| PM | Customer Success |
| Strategic PM | AI APIs |
| Strategic PM | AI Engineering |
| Director, Product Management | All |
