---
schema_version: "1.0.0"
document_id: "DOC-RPT-059"
aliases: []
document_type: "REPORT"
title: "Epic 03 Batch 04 Execution Plan"
summary: "Defines the mutation contract, synchronization sequence, validation, and acceptance gates for EPIC-03 legacy migration Batch 04."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_03.MIGRATION.BATCH_04.EXECUTION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-14"
last_updated: "2026-07-14"
last_reviewed: "2026-07-14"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-09", "AXODUS-DOCUMENTATION-EPIC-03-REQ-10", "AXODUS-DOCUMENTATION-EPIC-03-REQ-10-CLOSURE"]
related_adrs: ["DOC-ADR-004", "DOC-ADR-017", "DOC-ADR-018", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-03-BATCH-04-CANDIDATE-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/EPIC-03-BATCH-04-ROLLBACK-PLAN.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Epic 03 Batch 04 Execution Plan

## Purpose

This is the decision-complete mutation contract for REQ-10. It does not perform
the migration in REQ-09.

## Frozen Set

The primary set is `MIG-EP3-B04-001` through `MIG-EP3-B04-010`. Ordered
alternates are `MIG-EP3-B04-011` through `MIG-EP3-B04-015`. Candidate paths,
IDs, strategy, ordering, relationships, preservation rules, and registry
actions are frozen by `DOC-RPT-055`.

## Execution Preconditions

REQ-10 must:

1. start from the committed REQ-09 revision and a clean worktree;
2. prove that all generator drift is caused only by `DOC-RPT-054` through
   `DOC-RPT-059`;
3. recheck candidate path, disposition, hash, owner, target ID, authority,
   security, conflict, boundary, and rollback evidence;
4. require unique, unused target IDs and Schema 1.0.0 compatibility;
5. assign one final execution state to every primary;
6. activate an alternate only under the one-for-one frozen rule.

## Authorized Files

REQ-10 may modify only:

- activated candidate paths in `DOC-RPT-055`;
- `documentation.baseline.json`;
- `documentation.exceptions.json`;
- `documentation.exception-dispositions.json`;
- `documentation/EPIC-03-BATCH-04-CANDIDATE-REGISTER.md` for execution state;
- the four REQ-10 evidence reports;
- complete generator-derived outputs;
- tests whose exact live-registry expectations must change from 573 to the
  evidenced post-migration population.

Historical disposition inventory and summary reports remain immutable evidence
of the original 573-entry decision population.

## Canonicalization Rules

Each activated path receives complete front matter consistent with its current
core overview. REQ-10 must copy the legacy title, owner, and original creation
date; set `last_updated` and review fields to the execution date; add only the
frozen relationships; and preserve `production_gate_impact: PRESERVES_CLOSED`.

The duplicated body header (`Status`, `Version`, `Last Updated`, `Owner`, and
separator) may be removed because the same facts move to governed metadata.
All sections from `## Purpose` onward must remain semantically equivalent. The
allowed semantic verdict is `SEMANTICALLY_PRESERVED_WITH_NORMALIZATION`.

## Registry Synchronization

For each migrated primary, remove the exact path from the baseline, active
exception registry, and compact companion disposition registry in one logical
change. Preserve exception IDs in the migration evidence register. After ten
primary promotions the expected active population is:

```text
Baseline entries: 563
Active exceptions: 563
Companion dispositions: 563
Remaining MIGRATE dispositions: 177
Undecided dispositions: 0
```

If an alternate replaces a primary, the population delta remains ten, but the
evidence register must name both the invalidated primary and activated
alternate.

## Mutation Order

1. freeze pre-migration hashes and active registry records;
2. revalidate all primary candidates;
3. activate any allowed alternate replacements;
4. promote candidates in execution order;
5. synchronize the three active registries and candidate execution states;
6. create the four REQ-10 evidence reports with `relationships: []`;
7. update only strictly derived test expectations;
8. run one complete generator write;
9. run deterministic generation check, validation, tests, boundary scans, and
   VitePress;
10. review the complete diff and create the scoped REQ-10 commit.

## Generated Artifact Regeneration

REQ-10 must use the repository generator in write mode once for the complete
set. Generated JSON and Markdown outputs may not be manually edited. A second
equivalent generation must produce no tracked diff and `generate --check` must
report zero drift.

## Validation Sequence

```text
validate --summary
relationships --summary
check --summary
generate --check
registry population and path reconciliation
document ID uniqueness
candidate-state completeness
semantic body comparison
duplicate-edge and cycle checks
private-boundary scan
full Node test suite
VitePress build
git diff --check
```

## Blocking Conditions

Block a candidate on changed source bytes, missing path, occupied ID, authority
or security regression, semantic conflict, unplanned relationship, private
boundary dependency, or incomplete rollback. Block the request if generator
drift has an unexplained cause, registry populations cannot reconcile, output
is nondeterministic, tests fail, or VitePress fails.

## Acceptance Criteria

- only frozen candidates are processed;
- all candidates receive a final state;
- semantic meaning and public history are preserved;
- all three active registries reconcile;
- no private path, ID, filename, or mechanic is published;
- generated outputs are complete and deterministic;
- validation, tests, boundary scans, and VitePress pass;
- generator drift is zero before the REQ-10 commit.

## Recommended Follow-Up

After the REQ-10 commit and post-commit validation, execute
`AXODUS-DOCUMENTATION-EPIC-03-REQ-10-CLOSURE` as an independent acceptance
audit. The closure may not perform another migration.

## Gate Preservation

This plan authorizes only the future frozen migration. It does not itself edit
legacy or canonical content, mutate registries, regenerate outputs, expose
private material, or open production or financial gates.
