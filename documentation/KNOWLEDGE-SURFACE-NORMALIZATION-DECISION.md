---
schema_version: "1.0.0"
document_id: "DOC-RPT-107"
aliases: []
document_type: "REPORT"
title: "Knowledge Surface Normalization Decision"
summary: "Records the architectural decision for future .knowledge normalization while preserving the current surface unchanged."
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
related_requirements: ["DOCUMENTATION-REORG-REQ-04"]
related_adrs: ["DOC-ADR-009", "DOC-ADR-017", "DOC-ADR-020", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/KNOWLEDGE-SURFACE-TOPOLOGY-EVALUATION.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/KNOWLEDGE-SURFACE-AUTHORITY-REGISTER.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/KNOWLEDGE-SURFACE-CONSUMER-MAP.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Knowledge Surface Normalization Decision

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-04
Decision: HYBRID
Physical Mutation: NOT_PERFORMED
Generator Write: NOT_PERFORMED
Public Navigation Mutation: NOT_PERFORMED
```

## Purpose

This document records the architectural decision for the `.knowledge/` surface.
It is a decision and freeze record only. It does not move, rename, split,
delete, rewrite, or publish any knowledge-pack file.

## ADR

### Problem

`.knowledge/` is a large internal knowledge-source surface with 286 tracked
files, generator inventory participation, test dependencies, institutional
intake references, and 285 governed exception-disposition entries routed
through `AUTHORITY_REVIEW`.

The current hidden path communicates "internal implementation detail", while
the generated inventory exposes it as repository-visible source material. That
creates ambiguity between:

- internal knowledge memory;
- public source eligibility;
- generated inventory inclusion;
- public navigation;
- publication approval;
- domain authority; and
- private or sensitive operational boundaries.

### Alternatives

| Alternative | Summary |
| --- | --- |
| A. KEEP | Preserve `.knowledge/` unchanged and document its role |
| B. RENAME | Rename `.knowledge/` to `knowledge/` as a visible knowledge root |
| C. MOVE | Move `.knowledge/` to `.axodus/knowledge/` |
| D. SPLIT | Split future `knowledge/` by authority class |
| E. SPLIT BY CONSUMER | Split future `knowledge/` by consumer class |
| F. HYBRID | Keep current path until review, then normalize into visible and partitioned knowledge surfaces by authority and consumer |

### Chosen Solution

The selected decision is:

```text
HYBRID
```

The repository shall keep `.knowledge/` unchanged until a separate execution
request is authorized. The future target is a visible governed knowledge
surface, expected to use `knowledge/` as the root, with partitioning by
authority and consumer only after family-level review.

### Justification

The hybrid decision is required because:

- a direct rename improves discoverability but does not resolve authority;
- a split improves boundary clarity but cannot be safely executed while 285
  records remain under `AUTHORITY_REVIEW`;
- the generator, registries, tests, and intake reports all depend on current
  `.knowledge/` paths;
- `.knowledge/core/` and `.knowledge/glossary/` already support internal
  terminology controls, but public terminology remains separately governed;
- several families include financial, trading, treasury, security, compliance,
  or claims-sensitive topics; and
- private Track B/C material must remain outside public repository surfaces.

### Trade-offs

- Ambiguity remains temporarily because `.knowledge/` is not renamed in this
  request.
- Future execution requires registry and generator reconciliation.
- Family-level authority review adds work before physical simplification.
- Historical reports may retain `.knowledge/` references rather than being
  rewritten.
- A phased execution creates more commits than a broad rename.

### Future Impacts

The decision enables future requests to:

- review knowledge families by authority and disclosure class;
- define the exact `knowledge/` target tree;
- update generator, registry, tests, and reports through one controlled
  execution;
- preserve provenance for historical `.knowledge/` references;
- prevent hidden knowledge packs from being mistaken for public documentation;
  and
- keep public navigation and disclosure rules unchanged until explicitly
  authorized.

## Decision Rules

| Rule | Decision |
| --- | --- |
| `.knowledge/` current physical path | Keep unchanged in REQ-04 |
| Future target root | `knowledge/`, subject to execution request |
| Future partitioning | Hybrid authority and consumer partitioning |
| Public navigation | No change |
| Public disclosure | No expansion |
| Private Track B/C | Must remain outside knowledge normalization |
| Generated inventory | Reconcile only during future execution |
| Registries | Reconcile only during future execution |
| Tests | Update only during future execution |
| Historical references | Preserve or annotate as historical evidence |

## Current Recorded State

```text
Knowledge surface files: 286
Governed exception entries: 285
Primary disposition: AUTHORITY_REVIEW
Manifest entries: 286
Graph nodes: 0
Direct VitePress source status: Not public source
Public navigation mutation: Not authorized
```

## Final Decision

`HYBRID` is frozen as the normalization strategy. No physical normalization is
performed by this request.

