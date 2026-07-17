---
schema_version: "1.0.0"
document_id: "DOC-RPT-047"
aliases: []
document_type: "REPORT"
title: "Documentation Generator Drift Reconciliation Plan"
summary: "Defines the authorized follow-up sequence for safely regenerating and validating the deterministic public documentation artifacts."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.GENERATOR.PLANNING"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-13"
last_updated: "2026-07-13"
last_reviewed: "2026-07-13"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{"type":"DEPENDS_ON","target":"DOC-RPT-046"},{"type":"RELATES_TO","target":"DOC-GDE-002"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["DOCUMENTATION-GENERATOR-DRIFT-REQ-01"]
related_adrs: ["DOC-ADR-009","DOC-ADR-014"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{"repository":"Axodus/Documentation","path":"tools/documentation/generator/index.js","ref":"main","kind":"SOURCE","environment":"LOCAL"},{"repository":"Axodus/Documentation","path":".rag/DOCUMENTATION-GENERATOR-DRIFT-INVESTIGATION.md","ref":"main","kind":"SOURCE","environment":"LOCAL"},{"repository":"Axodus/Documentation","path":"documentation.manifest.json","ref":"main","kind":"CONFIG","environment":"LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Generator Drift Reconciliation Plan

## Purpose

This plan defines a decision-complete follow-up for reconciling deterministic
public generated-artifact drift. It authorizes no regeneration itself.

## Approved Reconciliation Candidates

The following initial drift candidates are approved for regeneration in one
future authorized execution:

1. `documentation.baseline.report.json`
2. `documentation.graph.json`
3. `documentation.manifest.json`
4. `documentation.validation.json`
5. `.rag/DOCUMENTATION-MASTER-INDEX.md`
6. `.rag/DOCUMENTATION-METADATA-COVERAGE.md`
7. `.rag/DOCUMENTATION-RELATIONSHIP-REPORT.md`

Approval rationale:

- each drift has one identified source;
- all primary classifications are `EXPECTED_SOURCE_CHANGE`;
- two initial candidate generations were byte-identical;
- no generator defect or boundary failure exists;
- all outputs derive from the same public document inventory and should be
  reconciled atomically as one generated set.

The follow-up must accept that
`.rag/DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md` may also
change because the two new canonical reports use a later `last_updated`
date. It must be reviewed and included if the final generator check marks it
modified. No generated artifact may be manually omitted from the generator
write set.

## Blocked Candidates

None of the seven initial artifacts is blocked.

Regeneration becomes blocked if the follow-up finds:

- non-byte-identical candidate sets;
- an unreviewed source delta after revision freeze;
- private or request paths, filenames, IDs, or mechanics in public outputs;
- generator logic or exclusion-policy changes;
- validation errors or warnings;
- a public Master Index entry for `AGENTS.md` that the Documentation owner
  does not approve;
- unrelated tracked or untracked changes that overlap generated outputs.

## Regeneration Order

The authorized follow-up must use this sequence:

1. Commit or otherwise freeze the two investigation documents and all intended
   source inputs.
2. Require a clean worktree before generation; preserve unrelated user changes
   separately.
3. Record HEAD, Node version, pnpm version, generator version, and initial
   `generate --check --json` output.
4. Generate two complete candidates in memory and require byte-identical
   artifacts.
5. Review the candidate inventory for `AGENTS.md`, both new reports, counts,
   relationships, timestamps, and private-path exclusion.
6. Run one authorized `pnpm docs:generate` invocation. Do not edit generated
   files manually.
7. Review the complete generated diff, including any eighth artifact changed
   by the stable timestamp.
8. Run the validation sequence below.
9. Commit source reports and all generated artifacts together, or use a
   dedicated generated-output commit if governance requires separation.

The generator determines its own write order. The implementer must not perform
partial manual regeneration or choose a subset of generated outputs.

## Validation Sequence

Run after regeneration:

1. `node tools/documentation/cli/index.js generate --check`
2. `node tools/documentation/cli/index.js validate --summary`
3. `node tools/documentation/cli/index.js relationships --summary`
4. `node tools/documentation/cli/index.js check --summary`
5. `node --test tools/documentation/tests/*.test.js`
6. `pnpm docs:build`
7. `git diff --check`
8. boundary scans for excluded prefixes, private filenames, private IDs, and
   Track B/C mechanics
9. `git status --short`

Required result:

- generator drift zero;
- zero validation errors and warnings;
- all tests pass;
- VitePress build passes;
- no private disclosure or request content enters public outputs;
- generated diffs contain only reviewed source-derived changes.

## Rollback Strategy

Before commit:

- if any acceptance target fails, stop;
- preserve the investigation evidence;
- restore only the generated artifacts changed by the authorized regeneration
  to the frozen pre-run revision;
- do not revert source reports, unrelated user changes, or private artifacts;
- rerun `generate --check` to confirm the expected pre-run drift state;
- classify and resolve the blocker through
  `DOCUMENTATION-GENERATOR-DRIFT-FIX-REQ-01` if necessary.

After commit:

- use a normal revert of the dedicated regeneration commit;
- do not rewrite shared history;
- rerun validation and boundary checks after the revert.

## Public Review Requirements

Reviewers must approve:

- the public Master Index entry for `AGENTS.md`;
- classification of `AGENTS.md` as legacy and unbaselined;
- the inventory entries and metadata for `DOC-RPT-046` and
  `DOC-RPT-047`;
- final total, canonical, legacy, template, relationship, orphan, and coverage
  counts;
- any stable-timestamp update;
- the absence of public meaning changes beyond repository inventory and
  metadata reporting;
- the absence of VitePress navigation changes outside generated inventory.

## Boundary Checks

The follow-up must prove:

- no manifest document path starts with `institutional-disclosure/` or
  `requests/`;
- no graph node path starts with either excluded prefix;
- no private ID or private artifact filename appears in public JSON, reports,
  indexes, VitePress navigation, README, or SUMMARY;
- no USD 100 promotional mechanic, private fee or commission, provider-key
  flow, private ACS veto criterion, Trinity internal strategy logic, or other
  private Track B/C mechanic appears;
- no schema, runtime-interface, production, provider, wallet, contract, or
  financial gate is changed.

Any failure is a `BOUNDARY_BLOCKER` and stops regeneration acceptance.

## Acceptance Targets

The authorized follow-up passes only when:

- the final source revision is recorded and unchanged during generation;
- two final candidate sets are byte-identical;
- every generated output hash matches the reviewed final candidate;
- all generated artifacts are current;
- `generate --check` reports `CLEAN` and drift zero;
- public inventory changes are limited to reviewed inputs;
- no generated file is manually edited;
- validation and relationship checks report zero errors and warnings;
- all repository tests and the VitePress build pass;
- `git diff --check` passes;
- all boundary checks pass;
- gates remain closed.

## Recommended Follow-Up Request

Proceed with:

`DOCUMENTATION-GENERATOR-DRIFT-REQ-02 — Authorized Public Artifact
Regeneration and Validation`

That request must explicitly authorize:

- regeneration of all public generated artifacts;
- review and commit of the complete generated diff;
- inclusion of the `AGENTS.md`, `DOC-RPT-046`, and `DOC-RPT-047`
  inventory effects;
- acceptance of any deterministic stable-timestamp change.

Do not open `DOCUMENTATION-GENERATOR-DRIFT-FIX-REQ-01` unless the follow-up
finds nondeterminism, an exclusion failure, a generator defect, or another
blocked condition.

This request investigated public generated-artifact drift and produced a
reconciliation plan only. It did not regenerate or modify public artifacts,
expose private disclosure content, modify schemas or runtime interfaces,
enable production, activate providers, perform wallet signing, write
contracts, perform financial execution or open operational gates.
