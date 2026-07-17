---
schema_version: "1.0.0"
document_id: "DOC-ROAD-006"
aliases: []
document_type: "ROADMAP"
title: "Documentation Batch 03 Planning"
summary: "Records Batch 02 audit, traceability, or Batch 03 planning for DOCUMENTATION-EPIC-02."
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
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-08"]
related_adrs: ["DOC-ADR-004", "DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Batch 03 Planning

## Scope

Plan exactly 20 migrations across Mining, Marketplace, Lottery and DEX, five each. These are the highest remaining mapped public-core debts. Only docs/**/*.md is eligible.

## Scoring

Candidates score 55: public +30, owner/scope +20, navigation +15, risk/cross-core relevance +10, recent date +10, pending review -30. Ties use lexicographic path. REQ-09 owns freeze and execution authorization.
