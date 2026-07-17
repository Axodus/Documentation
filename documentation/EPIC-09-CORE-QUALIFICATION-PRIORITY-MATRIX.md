---
schema_version: "1.0.0"
document_id: "DOC-RPT-224"
aliases: []
document_type: "REPORT"
title: "EPIC-09 Core Qualification Priority Matrix"
summary: "Prioritizes public content qualification by governed review domain."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_09"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-17"
last_updated: "2026-07-17"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-09"]
related_requirements: ["DOCUMENTATION-EPIC-09-REQ-01"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-09-CORE-QUALIFICATION-PRIORITY-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-09 Core Qualification Priority Matrix

| Priority | Review Domain | Pages | Edit Candidates | Status Decisions | Sensitive Pages | Governing Rule |
| ---: | --- | ---: | ---: | ---: | ---: | --- |
| 1 | FOUNDATIONS | 34 | 11 | 6 | 0 | Freeze before execution; unresolved evidence routes to EPIC-10. |
| 2 | USER_VALUE | 64 | 34 | 5 | 0 | Freeze before execution; unresolved evidence routes to EPIC-10. |
| 3 | CONTROL_INFRA | 72 | 23 | 7 | 41 | Freeze before execution; unresolved evidence routes to EPIC-10. |
| 4 | PRODUCT_PROTOCOL | 99 | 68 | 12 | 99 | Freeze before execution; unresolved evidence routes to EPIC-10. |

Cross-core shared surfaces are reviewed in their primary domain and may receive execution ownership only through the final non-overlapping REQ-06 manifests.

