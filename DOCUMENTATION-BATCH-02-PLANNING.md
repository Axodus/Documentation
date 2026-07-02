---
schema_version: "1.0.0"
document_id: "DOC-ROAD-004"
aliases: []
document_type: "ROADMAP"
title: "Documentation Batch 02 Planning"
summary: "Records Batch 01 audit or Batch 02 planning evidence for DOCUMENTATION-EPIC-02."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.MIGRATION"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-RPT-014"}, {type: "DEPENDS_ON", target: "DOC-STD-002"}, {type: "DEPENDS_ON", target: "DOC-STD-003"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-06"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Batch 02 Planning

## Scope

Plan 20 migrations across Governance (5), Security (5), Accountability (4), Runtime (3), and Treasury (3). Only `docs/**/*.md` is eligible. No candidate is frozen, migrated, or assigned a final ID.

## Scoring

Every proposed candidate scores 55: public +30, explicit owner/scope +20, navigation +15, governance/security/risk relevance +10, recent date +10, pending technical review -30. Ties use lexicographic source path.

## Gates

REQ-07 must resolve authority, security, semantics, candidate ordering, and final freeze. Execution remains separately unauthorized.
