---
schema_version: "1.0.0"
document_id: "DOC-RPT-215"
aliases: []
document_type: "REPORT"
title: "Documentation Status Mapping"
summary: "Records reviewed source-to-badge mappings for the status taxonomy freeze."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.UX"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "VitePress Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-16"
last_updated: "2026-07-16"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: ["DOCUMENTATION-UX-REQ-01"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-STATUS-MAPPING.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Status Mapping

## Reviewed Mapping Candidates

| Source condition | Current result | Candidate badge | Evidence class | Runtime inference |
| --- | --- | --- | --- | --- |
| `publication_status: DRAFT` | `Draft` | `Draft` | Explicit governed metadata | None |
| Legacy `Status: Draft` | `Draft` | `Draft` | Explicit legacy metadata | None |
| Legacy `Status: Planned` | `Planned` | `Planned` | Explicit legacy metadata | None |
| Legacy `Status: Needs Review` | `Needs Review` | `Review Required` | Explicit legacy metadata alias | None |
| `publication_status: UNDER_REVIEW` | `Needs Review` | `Review Required` | Explicit governed metadata | None |
| `publication_status: APPROVED` and `document_state: CURRENT` | No badge | `Canonical` | Explicit governed metadata pair | None |
| Legacy `Status: Future` | No badge | `Planned` | Explicit legacy migration | None |
| Legacy `Status: Conceptual` | No badge | `Baseline` | Explicit legacy migration | None |
| Exact section index path frozen in REQ-03 | No badge | `Reference` | Page-level classification register | None |
| Unknown or conflicting input | No badge | `Review Required` only after page-level freeze | Governed exception | Prohibited |

## Non-Mappings

| Source | Prohibited interpretation |
| --- | --- |
| `APPROVED` | Active, implemented, operational, production, or validated |
| `CURRENT` | Operationally active |
| `D2` | Prototype or production maturity |
| Repository path alone | Authority, maturity, or implementation state |
| Existing code | Activation or production state |

## Implementation Constraint

The final resolver must be deterministic and centralized. Path-based decisions
must use an exact frozen registry; broad filename, directory, or content
heuristics are prohibited.
