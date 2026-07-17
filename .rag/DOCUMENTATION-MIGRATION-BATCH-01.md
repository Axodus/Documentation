---
schema_version: "1.0.0"
document_id: "DOC-RPT-007"
aliases: []
document_type: "REPORT"
title: "Documentation Migration Batch 01"
summary: "Records governed Batch 01 migration evidence for DOCUMENTATION-EPIC-02."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.MIGRATION.BATCH_01"
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
relationships: [{type: "RELATES_TO", target: "DOC-RPT-005"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Migration Batch 01

## Result

PASS_EXECUTED on 2026-07-02. Exactly 20 frozen primaries migrated; no alternates used.

| Metric | Before | After |
|---|---:|---:|
| Legacy/baseline/exceptions | 633 | 613 |
| Migrated primary candidates | 0 | 20 |
| Public cores at ADOPTED_PARTIAL | 0 | 16 |

## Boundary

Documentation-only migration. No publication, runtime, production, provider, financial, wallet, contract, credential, API, or database gate was opened.
