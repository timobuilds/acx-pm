---
name: transcripts-extract-insight
description: Analyze a folder of meeting transcripts to distill and rank unmet customer needs and nascent opportunities. Trigger on "/transcripts-extract-insight", "analyze these transcripts", "extract insights from customer calls", "what are customers asking for", or "mine the call transcripts".
---

# Transcript insight extraction

Read `../../CONVENTIONS.md` (at the plugin root, relative to this skill's directory) first and load the user's config (`transcripts_folder` as default location).

## Input

Ask for the transcript folder if not given and no default is configured. Read every transcript file (txt, md, docx, vtt, srt). If there are more than ~15, process in batches and keep a running tally rather than holding everything in context.

## Extract per transcript

- **Unmet needs** — explicit asks, workarounds described, complaints, "I wish", "we currently have to". Capture a verbatim quote + who said it (role, not name if sensitive) + source file.
- **Nascent opportunities** — problems adjacent to what we solve, emerging use cases, budget signals, competitive mentions.
- **Sentiment markers** — frustration, delight, churn risk language.

## Rank

Score each aggregated need/opportunity on:

- **Frequency** — how many distinct transcripts/customers raised it
- **Severity** — cost of the pain to the customer (workaround effort, revenue at stake)
- **Strategic fit** — alignment to ACX product areas (Alias, VRED, AI APIs, AI Engineering, Customer Success)

## Output

1. **Ranked table**: need/opportunity, frequency count, severity, strategic fit, composite rank.
2. **Top 5 deep-dives**: each framed as a problem statement ("Customers in X situation struggle to Y, so they Z"), 2-3 supporting verbatim quotes with source files, and a suggested framing (Now / Next / Later candidate).
3. **Surprises** — low-frequency but high-signal items worth watching.
4. **Method note** — how many transcripts, date range, any files skipped.

Never invent quotes; if evidence is thin, say so. Show the draft, then ask the output-destination question per conventions.
