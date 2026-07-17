---
schema_version: "1.0.0"
document_id: "DOC-RPT-183"
aliases: []
document_type: "REPORT"
title: "EPIC-07 New Page Justification Register"
summary: "Freezes the two structural public gaps that justify new overview pages in EPIC-07 REQ-07."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_07"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-15"
last_updated: "2026-07-15"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-07"]
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-06"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-07-NEW-PAGE-JUSTIFICATION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 New Page Justification Register

| Decision ID | Proposed Path | Gap | Why Existing Pages Are Insufficient | Authority / Boundary | Decision |
| --- | --- | --- | --- | --- | --- |
| `NEW-EP7-001` | `docs/overview/cross-core-architecture.md` | No public page defines interfaces, events, data ownership, fail-closed dependencies, and runtime state across all nuclei. | Ecosystem overview is conceptual; nucleus architecture pages are local; root architecture is not the canonical VitePress target and remains draft. | Public-safe REQ-03 model; no sensitive interface parameters. | `NEW_PAGE_AUTHORIZED_WITH_QUALIFIERS` |
| `NEW-EP7-002` | `docs/overview/execution-model.md` | No public page presents the eleven complete or explicitly incomplete end-to-end flows. | Lifecycle pages cover only local domains and cannot show cross-core authority and evidence transitions. | Public-safe REQ-05 model; incomplete and blocked states remain visible. | `NEW_PAGE_AUTHORIZED_WITH_QUALIFIERS` |

No other new public page is authorized.
