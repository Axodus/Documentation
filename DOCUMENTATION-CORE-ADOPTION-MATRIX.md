---
schema_version: "1.0.0"
document_id: "DOC-REF-005"
aliases: []
document_type: "REFERENCE"
title: "Documentation Core Adoption Matrix"
summary: "Records successful Batch 01 adoption for the 16 public cores."
version: "1.1.0"
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

APPROVED on 2026-07-02 with Batch 01 adoption results.

## Batch 01 Adoption State

Each public core has one migrated canonical overview. Documentation-framework canonical artifacts are not attributed to product-core adoption.

| Core | Scope | Legacy | Canonical | Batch 01 migrated | Eligible | Blocked | Status | Main blocker | Next action |
|---|---|---:|---:|---:|---:|---:|---|---|---|
 | Accountability | `ACCOUNT` | 4 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Academy | `ACADEMY` | 23 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | ACS | `ACS` | 30 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | BBA Agency | `BBA` | 32 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Business | `BUSINESS` | 30 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | DeFi | `DEFI` | 38 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | DEX | `DEX` | 42 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Governance | `GOV` | 23 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Lottery | `LOTTERY` | 42 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Marketplace | `MARKET` | 44 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Mining | `MINING` | 46 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Runtime | `RUNTIME` | 30 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Security | `SEC` | 6 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Tokenomics | `TOKEN` | 32 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Trading | `TRADING` | 31 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |
 | Treasury | `TREASURY` | 32 | 1 | 1 | 0 | 0 | `ADOPTED_PARTIAL` | None | Plan Batch 02 |

`CORE` remains `GOVERNANCE_RESERVED` and is not a seventeenth public core. All 16 public cores are `ADOPTED_PARTIAL`; none is `IN_MIGRATION` or `ADOPTED_TARGET`.
