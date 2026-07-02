---
schema_version: "1.0.0"
document_id: "DOC-REF-005"
aliases: []
document_type: "REFERENCE"
title: "Documentation Core Adoption Matrix"
summary: "Approves Batch 01 planning status for the 16 public cores without starting migration."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
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

## Status

APPROVED on 2026-07-02 for Batch 01 planning only.

## Batch Planning State

Canonical count is zero for each public core because no public-core legacy document has been promoted. Documentation-framework canonical artifacts are not attributed to product-core adoption.

| Core | Scope | Legacy | Canonical | Candidates | Eligible | Blocked | Status | Main blocker | Next action |
|---|---|---:|---:|---:|---:|---:|---|---|---|
| Accountability | `ACCOUNT` | 5 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Execution authorization pending | Execute REQ-05 review |
| Academy | `ACADEMY` | 24 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Execution authorization pending | Execute REQ-05 review |
| ACS | `ACS` | 31 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Execution authorization pending | Execute REQ-05 review |
| BBA Agency | `BBA` | 33 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Execution authorization pending | Execute REQ-05 review |
| Business | `BUSINESS` | 31 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Execution authorization pending | Execute REQ-05 review |
| DeFi | `DEFI` | 39 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Security/content review pending | Execute REQ-05 review |
| DEX | `DEX` | 43 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Security/content review pending | Execute REQ-05 review |
| Governance | `GOV` | 24 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Content approval pending | Execute REQ-05 review |
| Lottery | `LOTTERY` | 43 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Security/content review pending | Execute REQ-05 review |
| Marketplace | `MARKET` | 45 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Security/content review pending | Execute REQ-05 review |
| Mining | `MINING` | 47 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Security/content review pending | Execute REQ-05 review |
| Runtime | `RUNTIME` | 31 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Technical review pending | Execute REQ-05 review |
| Security | `SEC` | 7 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Security/content review pending | Execute REQ-05 review |
| Tokenomics | `TOKEN` | 33 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Security/content review pending | Execute REQ-05 review |
| Trading | `TRADING` | 32 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Security/content review pending | Execute REQ-05 review |
| Treasury | `TREASURY` | 33 | 0 | 1 | 1 | 0 | `BATCH_PLANNED` | Security/content review pending | Execute REQ-05 review |

`CORE` remains `GOVERNANCE_RESERVED` and is not a seventeenth public core. No core is `IN_MIGRATION`, `ADOPTED_PARTIAL`, or `ADOPTED_TARGET`.
