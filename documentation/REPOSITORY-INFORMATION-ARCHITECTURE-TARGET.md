---
schema_version: "1.0.0"
document_id: "DOC-RPT-095"
aliases: []
document_type: "REPORT"
title: "Repository Information Architecture Target"
summary: "Records the recommended phased target architecture for Documentation repository reorganization without authorizing any physical mutation."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_04.REPOSITORY_REORGANIZATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
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
related_epics: ["DOCUMENTATION-EPIC-04"]
related_requirements: ["DOCUMENTATION-REORG-REQ-01"]
related_adrs: ["DOC-ADR-009", "DOC-ADR-012", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/REPOSITORY-SURFACE-INVENTORY.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/REPOSITORY-BOUNDARY-RISK-REVIEW.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Repository Information Architecture Target

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-01
Execution Mode: planning and freeze only
Physical Mutation: NOT_AUTHORIZED
Generator Write: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This document records the target architectural direction for repository
reorganization. It does not execute moves or renames. Its function is to define
the design boundary for later isolated requests.

## Problem

```text
Repository surfaces have strong governance but ambiguous physical and semantic topology.
```

## Alternatives

### A. Keep all paths unchanged and document them

Benefits:

- zero mutation risk now;
- no registry or generator churn.

Costs:

- preserves `Documents/` versus `documentation/` ambiguity;
- leaves `.knowledge/` discoverability and authority ambiguity unresolved;
- keeps build artifacts nested under `docs/` without a dedicated hygiene phase.

### B. Apply only build hygiene

Benefits:

- low risk;
- immediate cleanup of the most mechanical ambiguity.

Costs:

- does not address legacy or knowledge-surface topology;
- leaves root namespace ambiguity unresolved.

### C. Normalize legacy and knowledge surfaces

Benefits:

- addresses the two most ambiguous non-private surfaces.

Costs:

- high registry, generator, and reference churn;
- risks semantic misclassification if `Documents/` and `.knowledge/` are moved
  before authority or purpose is separated.

### D. Consolidate all root collections in one operation

Benefits:

- maximally simplified directory tree.

Costs:

- largest rollback scope;
- highest risk of authority distortion;
- unnecessary churn for sparse but semantically clear collections.

### E. Execute phased reorganization with independent audits

Benefits:

- limits rollback scope;
- preserves traceability and validation checkpoints;
- separates low-risk hygiene from higher-risk authority and legacy changes.

Costs:

- temporary coexistence of ambiguous paths;
- multiple commits and closure audits;
- longer total timeline.

## Recommended Solution

```text
Phased reorganization with isolated requests,
frozen candidate sets, deterministic regeneration,
registry reconciliation and independent closures.
```

## Recommended Target Shape

The evidence supports the following target architecture principles:

- `docs/` remains the sole structured VitePress publication surface.
- `documentation/` remains the governance namespace.
- Build outputs under `docs/.vitepress/` remain clearly non-source and ignored.
- `Documents/` is not renamed until planning versus historical semantics are
  separated.
- `.knowledge/` is not normalized until authority, consumer scope, and public
  inventory treatment are explicitly reconciled.
- Sparse root collections remain canonical collections unless a later
  consolidation plan proves that fewer namespaces improves authority clarity.

## Justification

- Limits rollback scope per request.
- Preserves traceability and existing validation guarantees.
- Protects public/private and source/output boundaries.
- Avoids making generator or registry changes merely to simplify naming.
- Prevents `.knowledge/` and `Documents/` from being flattened before their
  authority and semantic roles are fully separated.

## Trade-offs

- Ambiguous paths remain temporarily present.
- Some future requests may become documentation-only or no-op closures if the
  evidence shows current controls are already sufficient.
- Later phases require disciplined candidate-set release instead of a single
  broad cleanup.

## Future Impacts

- Cleaner onboarding once build hygiene and surface semantics are formalized.
- Better path governance through explicit dependency registers.
- Safer future consolidation because candidate sets will already be bounded by
  this report and its companion registers.
- Reduced chance of treating repository visibility as publication authority.

## Final Decision

The repository should not be reorganized in one operation. EPIC-04 should
continue with:

1. low-risk build hygiene;
2. separate legacy-surface planning and execution only after additional
   reconciliation;
3. separate knowledge-surface authority work before any normalization; and
4. planning-only review of sparse root collections before any consolidation.

