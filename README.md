# Sales Replay Test

Small TypeScript workspace for replaying sales call transcripts and producing coaching summaries.

The project intentionally keeps the data model compact so pull requests can exercise realistic review
workflows without requiring external services.

## Usage

```bash
pnpm start
pnpm test
pnpm typecheck
```


## Replay Workflow

The replay flow loads sample calls, scores each transcript for discovery, objection handling, and next steps, then renders a coaching report.

Use the sample data as a fixture for PR review experiments and keep new examples small enough to inspect in a browser diff.
