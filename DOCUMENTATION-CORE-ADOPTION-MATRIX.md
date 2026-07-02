---
schema_version: "1.0.0"
document_id: "DOC-REF-005"
aliases: []
document_type: "REFERENCE"
title: "Documentation Core Adoption Matrix"
summary: "Records inventory-stage adoption status and Batch 01 readiness for the 16 approved public cores."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.ADOPTION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-RPT-003"}, {type: "RELATES_TO", target: "DOC-SPEC-005"}, {type: "RELATES_TO", target: "DOC-STD-002"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-03"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["ACCOUNTABILITY", "ACADEMY", "ACS", "BBA_AGENCY", "BUSINESS", "DEFI", "DEX", "GOVERNANCE", "LOTTERY", "MARKETPLACE", "MINING", "RUNTIME", "SECURITY", "TOKENOMICS", "TRADING", "TREASURY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "DOCUMENTATION-MIGRATION-CRITERIA.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Core Adoption Matrix

## Inventory State

Canonical count is zero for each public core because no public-core legacy document has been promoted. Documentation-framework canonical artifacts are not attributed to product-core adoption.

| Core | Scope | Legacy | Canonical | Candidates | Eligible | Blocked | Status | Main blocker | Next action |
|---|---|---:|---:|---:|---:|---:|---|---|---|
| Accountability | `ACCOUNT` | 5 | 0 | 1 | 0 | 1 | `INVENTORIED` | Review/approval evidence | Authority review |
| Academy | `ACADEMY` | 24 | 0 | 1 | 0 | 1 | `INVENTORIED` | Review/approval evidence | Authority review |
| ACS | `ACS` | 31 | 0 | 1 | 0 | 1 | `INVENTORIED` | Review/approval evidence | Authority review |
| BBA Agency | `BBA` | 33 | 0 | 1 | 0 | 1 | `INVENTORIED` | Review/approval evidence | Authority review |
| Business | `BUSINESS` | 31 | 0 | 1 | 0 | 1 | `INVENTORIED` | Review/approval evidence | Authority review |
| DeFi | `DEFI` | 39 | 0 | 1 | 0 | 1 | `INVENTORIED` | Security and authority review | Assign reviewers |
| DEX | `DEX` | 43 | 0 | 1 | 0 | 1 | `INVENTORIED` | Security and authority review | Assign reviewers |
| Governance | `GOV` | 24 | 0 | 1 | 0 | 1 | `INVENTORIED` | Authority review | Assign approver |
| Lottery | `LOTTERY` | 43 | 0 | 1 | 0 | 1 | `INVENTORIED` | Security and authority review | Assign reviewers |
| Marketplace | `MARKET` | 45 | 0 | 1 | 0 | 1 | `INVENTORIED` | Security and authority review | Assign reviewers |
| Mining | `MINING` | 47 | 0 | 1 | 0 | 1 | `INVENTORIED` | Security and authority review | Assign reviewers |
| Runtime | `RUNTIME` | 31 | 0 | 1 | 0 | 1 | `INVENTORIED` | Technical review | Assign reviewers |
| Security | `SEC` | 7 | 0 | 1 | 0 | 1 | `INVENTORIED` | Security authority approval | Assign approver |
| Tokenomics | `TOKEN` | 33 | 0 | 1 | 0 | 1 | `INVENTORIED` | Security and authority review | Assign reviewers |
| Trading | `TRADING` | 32 | 0 | 1 | 0 | 1 | `INVENTORIED` | Security and authority review | Assign reviewers |
| Treasury | `TREASURY` | 33 | 0 | 1 | 0 | 1 | `INVENTORIED` | Security and authority review | Assign reviewers |

No core is `BATCH_PLANNED`; REQ-03 does not freeze candidates.
