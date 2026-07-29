---
schema_version: "1.0.0"
document_id: "BBA-ROAD-004"
aliases: []
document_type: "ROADMAP"
title: "BBA Agency Product Evolution Roadmap"
summary: "Records the external implementation handoff from Documentation Product Vision 2.0 to the BBA Agency repository without controlling its backlog."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.AGENCY.PRODUCT.ROADMAP"
authority_level: "PROJECT"
author: "BBA Product Governance"
owner: "BBA Product Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Product Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: ["BBA Security Reviewer"]
approver: null
created_date: "2026-07-29"
last_updated: "2026-07-29"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-101"}, {type: "RELATES_TO", target: "BBA-ROAD-003"}, {type: "RELATES_TO", target: "BBA-ADR-0006"}]
related_epics: ["EPIC-006"]
related_requirements: ["REQ-006-05-003"]
related_adrs: ["BBA-ADR-0006"]
related_cores: ["Agency Runtime", "Agency Product", "Agency Experience", "Handoff"]
implementation_refs: [{repository: "Axodus/BBA-Agency", path: ".rag/architecture/EPIC-IMP-014-FRONTEND-FOUNDATION.md", ref: "ce1e46b", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/BBA-Agency", path: ".rag/architecture/EPIC-IMP-015-BBA-STANDALONE-PRODUCT-SURFACE.md", ref: "ce1e46b", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Agency Product Evolution Roadmap

## Authority and Boundary

This roadmap is governed by the Documentation repository as Product
Governance evidence. It does not replace or mutate the execution backlog of
`Axodus/BBA-Agency`.

The implementation identifiers below are external references. The canonical
Documentation execution hierarchy remains `PROGRAM-BBA-DOC → EPIC → SPRINT →
REQ`; no `EPIC-IMP-*` identifier belongs in its registries.

## External Evolution Sequence

```text
Product Vision 2.0
        ↓
Service Taxonomy and Composition
        ↓
Agency Runtime Requirements
        ↓
Agency Product Definitions
        ↓
Agency Experience
```

| External reference | Scope | Handoff status |
| --- | --- | --- |
| `EPIC-IMP-014` | Frontend Platform Foundation | IMPLEMENTATION_EVIDENCE |
| `EPIC-IMP-015` | BBA Standalone Product Surface | IMPLEMENTATION_EVIDENCE |
| `EPIC-IMP-016` | Identity and Access Expansion reserved by BBA Agency | DEFERRED_PENDING_PRODUCT_VISION_2_0 |
| `EPIC-IMP-017` | Agency Runtime, proposed future sequence | NOT_REGISTERED_IN_DOCUMENTATION |
| `EPIC-IMP-018` | Agency Products, proposed future sequence | NOT_REGISTERED_IN_DOCUMENTATION |
| `EPIC-IMP-019` | Agency Experience, proposed future sequence | NOT_REGISTERED_IN_DOCUMENTATION |
| `EPIC-IMP-020` | Identity and Access Expansion continuation, proposed future sequence | NOT_REGISTERED_IN_DOCUMENTATION |

The exact state of external references must be verified in the BBA Agency
repository. Documentation records recommendations and handoffs; it does not
claim external backlog mutation.

## Handoff Gate for EPIC-IMP-016

Before the external Identity and Access work begins, BBA Agency should receive
and accept:

1. `BBAPLT-GDE-101` Product Vision 2.0;
2. `BBA-ADR-0006` Agency Composition Over Certified Platform;
3. this roadmap and its external-boundary classification;
4. the non-normative status and unresolved `$Neurons` boundary;
5. the requirement to preserve certified Product, Domain, Architecture, and
   Development semantics.

This is a Documentation recommendation, not an external state transition.

## Reference Classification

```yaml
reference_type: IMPLEMENTATION_EVIDENCE
authority: EXTERNAL_NON_NORMATIVE
repository: Axodus/BBA-Agency
```

The implementation session `019f8f47-2697-7600-8a2b-0057d4786214` is retained as
context evidence for the handoff.
