---
schema_version: "1.0.0"
document_id: "BBA-STD-001"
aliases: []
document_type: "STANDARD"
title: "BBA Platform Decision Traceability"
summary: "Defines the required path from intent and domain knowledge to executable requests, implementation, tests, and commits."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOCUMENTATION"
authority_level: "PROJECT"
author: "BBA Documentation Governance"
owner: "BBA Documentation Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-18"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBA-ROAD-003"}, {type: "RELATES_TO", target: "BBA-STD-002"}]
related_epics: ["EPIC-000", "EPIC-006"]
related_requirements: ["REQ-000-008", "REQ-006-05-005"]
related_adrs: ["BBA-ADR-0001", "BBA-ADR-0004"]
related_cores: []
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Decision Traceability

## Required Trace

```text
Vision
  ↓
Principle
  ↓
Documentation Layer
  ↓
Documentation Area
  ↓
EPIC
  ↓
SPRINT
  ↓
REQ
  ↓
Document / ADR / Domain Rule
  ↓
Architecture
  ↓
Implementation
  ↓
Tests
  ↓
Commit
```

`REQ` is the executable request in this chain. A domain rule is not a REQ.

## Matrix Contract

| Field | Required meaning |
| --- | --- |
| Source intent | Vision or principle that justifies the work. |
| Knowledge location | Layer and Area receiving the result. |
| Execution location | Epic, Sprint, and REQ executing the work. |
| Decision evidence | ADR, domain rule, policy, or approved record. |
| Implementation evidence | Code, configuration, or contract reference. |
| Test evidence | Test command and result. |
| Commit evidence | Commit implementing the REQ. |

Missing links are recorded as gaps and block the relevant gate.

## Cross-Repository Handoff Contract

| Element | Documentation authority | External implementation reference |
| --- | --- | --- |
| Product Vision 2.0 | `BBAPLT-GDE-101` | `Axodus/BBA-Agency/.rag/architecture/EPIC-IMP-014` through `EPIC-IMP-016` |
| Composition decision | `BBA-ADR-0006` | External ADRs remain repository-owned |
| Product roadmap | `BBA-ROAD-004` | BBA Agency backlog and state are external |
| Evidence classification | `IMPLEMENTATION_EVIDENCE` / `EXTERNAL_NON_NORMATIVE` | Must not be treated as Product or Domain authority |
| Handoff session | `019f8f47-2697-7600-8a2b-0057d4786214` | Context evidence only |

Documentation may recommend that an external implementation epic wait for an
accepted handoff. It must not claim to have changed the external backlog or
external status.
