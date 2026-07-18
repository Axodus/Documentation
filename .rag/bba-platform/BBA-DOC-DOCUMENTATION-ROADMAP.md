---
schema_version: "1.0.0"
document_id: "BBA-ROAD-002"
aliases: []
document_type: "ROADMAP"
title: "BBA Platform Documentation Roadmap"
summary: "Orders documentation layers and execution epics without treating knowledge areas as work items."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOCUMENTATION"
authority_level: "PROJECT"
author: "BBA Documentation Governance"
owner: "BBA Documentation Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-18"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBA-GDE-100"}, {type: "DOCUMENTS", target: "BBA-ROAD-003"}]
related_epics: ["EPIC-000", "EPIC-001", "EPIC-002", "EPIC-003", "EPIC-004", "EPIC-005"]
related_requirements: ["REQ-000-003"]
related_adrs: ["BBA-ADR-0004"]
related_cores: []
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/bba-platform/DOCUMENTATION-MAP.yaml", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Documentation Roadmap

## Knowledge Order

```text
Foundation → Concept Map → Ubiquitous Language → Product → Domain →
Canonical Review → Architecture → Development → Operations
```

## Execution Order

```text
EPIC-000 Foundation
  ↓
EPIC-001 Product Documentation Rollout
  ↓
EPIC-002 Domain Documentation Rollout
  ↓
EPIC-003 Canonical Review and Architecture Rollout
  ↓
EPIC-004 Development Documentation Rollout
  ↓
EPIC-005 Operational Documentation Rollout
```

Execution epics contain Sprints and REQs. They do not rename or replace the
Documentation Layers or Documentation Areas in `DOCUMENTATION-MAP.yaml`.

## Milestones

| Milestone | Exit condition |
| --- | --- |
| M0 Foundation | Manifest, language, registries, ADRs, boundary, quality, and tests pass. |
| M1 Product baseline | Product areas are documented and approved without implementation claims. |
| M2 Domain baseline | Domain rules, states, events, and invariants pass Canonical Review. |
| M3 Architecture baseline | Architecture realizes approved domain concepts and has ADR coverage. |
| M4 Development baseline | Implementation contracts and contribution practices are actionable. |
| M5 Operations baseline | Runbooks, monitoring, incident, maintenance, and release practices are actionable. |
