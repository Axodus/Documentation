---
schema_version: "1.0.0"
document_id: "DOC-GDE-004"
aliases: []
document_type: "GUIDE"
title: "Documentation Continuous Integration"
summary: "Defines the read-only GitHub Actions integration for validation, drift, evidence integrity, and VitePress build checks."
version: "1.0.0"
publication_status: "ACTIVE"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: []
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-01"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "QUARTERLY"
next_review: "2026-10-01"
supersedes: []
relationships: [{type: "DOCUMENTS", target: "DOC-ADR-014"}, {type: "RELATES_TO", target: "DOC-GDE-001"}, {type: "RELATES_TO", target: "DOC-GDE-002"}, {type: "RELATES_TO", target: "DOC-GDE-003"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-014", "DOC-ADR-016"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".github/workflows/documentation.yml", ref: "main", kind: "CONFIG", environment: "TEST"}, {repository: "Axodus/Documentation", path: "tools/documentation/tests/ci-workflow.test.js", ref: "main", kind: "TEST", environment: "TEST"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Continuous Integration

## Purpose

The Documentation Framework workflow is the read-only automated consumer of the Validation Framework, Generator, Evidence Framework, legacy baseline, exception registry, and VitePress build.

It detects invalid or inconsistent versioned state without generating, fixing, publishing, deploying, or creating snapshots.

## Workflow Architecture

The workflow contains one isolated GitHub Actions job with repository permission limited to `contents: read`. Every verification consumes the checked-out, versioned repository state.

Temporary JSON reports are written only below GitHub Actions `RUNNER_TEMP`. The final step executes with `if: always()` and verifies that no tracked checkout content changed.

## Events

The workflow runs on:

- every pull request;
- pushes to `main`;
- manual `workflow_dispatch`;
- Monday at 03:00 UTC through the weekly schedule.

Concurrency is scoped by workflow and Git reference. A newer execution cancels an obsolete execution for the same reference.

## Runtime

- Runner: `ubuntu-latest`
- Node.js: `24`
- pnpm: `11.1.2`
- Installation: `pnpm install --frozen-lockfile`
- Job timeout: 20 minutes

The workflow never invokes npm installation or updates lockfiles.

## Execution Stages

1. Checkout with read-only repository permission.
2. Configure pnpm and Node.js.
3. Install frozen dependencies.
4. Validate canonical and legacy documentation profiles.
5. Validate relationships and references.
6. Validate baseline structure and legacy hash consistency.
7. Validate exception structure and lifecycle at current UTC time.
8. Compare generated artifacts byte-for-byte without writing.
9. Validate committed evidence registry, metadata, redaction stability, and hashes.
10. Build VitePress without deployment.
11. Verify the tracked checkout remains unchanged.

## Supported Commands

```text
pnpm docs:validate -- --summary
pnpm docs:validate:relationships -- --summary
pnpm docs:baseline:check
pnpm docs:exceptions:check
pnpm docs:generate:check
pnpm docs:build
```

Evidence verification calls only `listSnapshots()` and `validateInstructionsSnapshot()` from the public Snapshot API. It never calls `createInstructionsSnapshot()` and never reads `/opt/Axodus/.instructions`.

## Read-only Guarantees

- No generator write mode is invoked.
- No snapshot creation or comparison with local source is invoked.
- Baseline and exception registries are read but never updated.
- No formatter, migration, auto-fix, publication, or deployment runs.
- Intermediate reports are stored outside the checkout.
- `git diff --exit-code`, `git diff --cached --exit-code`, and porcelain status audit tracked and non-ignored untracked state after all stages, including failed runs.

## Failure Conditions

The job fails for:

- canonical validation errors;
- broken references, aliases, or forbidden relationships;
- malformed baseline or duplicate baseline entries;
- changed, removed, or unbaselined legacy documents;
- expired, revoked, or invalid exceptions;
- generator drift;
- malformed or hash-invalid versioned evidence;
- VitePress build failure;
- tracked checkout mutation.

The job does not fail for:

- known legacy informational diagnostics;
- allowed `RELATES_TO` cycles;
- orphan statistics classified as informational;
- the existing VitePress bundle-size warning;
- other informational counts.

## Deterministic Execution

Validation, relationship, baseline, generator, and evidence checks operate on deterministic versioned inputs. Generated-artifact comparison is byte-for-byte. Evidence validation reads only committed snapshots.

Exception expiry intentionally uses the workflow's current UTC timestamp so the weekly schedule can identify time-based expiration without repository changes.

## Logging

Logs contain summaries, counts, status, stable diagnostic codes, and affected paths only. Document bodies, evidence payloads, matched redaction values, secrets, credentials, and confidential source content are never printed.

## Maintenance

- Keep Node and pnpm versions aligned with `package.json`.
- Update action major versions only through reviewed pull requests.
- Regenerate documentation artifacts locally in an explicitly authorized execution before submitting source-document changes.
- Renew or revoke exceptions through governed repository changes before expiration.
- Create evidence snapshots only through an authorized local evidence execution.

## Troubleshooting

- Validation failure: run the corresponding `pnpm docs:*` command locally with summary or JSON output.
- Baseline inconsistency: inspect changed path counts without printing document content; do not update the baseline automatically.
- Generator drift: run check mode locally, then request explicit authority before write mode.
- Evidence failure: validate the committed snapshot ID; never substitute a local `/opt` source in CI.
- Build failure: run `pnpm docs:build`; the bundle-size warning alone is non-failing.
- Worktree failure: identify which command changed tracked state and remove that mutation from CI.

## Future Extensions

Future changes may split checks into parallel jobs, pin actions by immutable commit SHA, upload non-sensitive summary artifacts, or add branch-protection requirements. Publication, deployment, snapshot creation, automatic regeneration, and auto-fix remain separate authorized workflows.
