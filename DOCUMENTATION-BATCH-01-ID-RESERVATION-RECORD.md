---
schema_version: "1.0.0"
document_id: "DOC-REF-006"
aliases: []
document_type: "REFERENCE"
title: "Documentation Batch 01 ID Reservation Record"
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

# Documentation Batch 01 ID Reservation Record

## Final Reservations

- `ACCOUNT-GDE-001` → `docs/accountability/overview.md`
- `ACADEMY-GDE-001` → `docs/academy/overview.md`
- `ACS-GDE-001` → `docs/acs/overview.md`
- `BBA-GDE-001` → `docs/bba-agency/overview.md`
- `BUSINESS-GDE-001` → `docs/business/overview.md`
- `DEFI-GDE-001` → `docs/defi/overview.md`
- `DEX-GDE-001` → `docs/dex/overview.md`
- `GOV-GDE-001` → `docs/governance/overview.md`
- `LOTTERY-GDE-001` → `docs/lottery/overview.md`
- `MARKET-GDE-001` → `docs/marketplace/overview.md`
- `MINING-GDE-001` → `docs/mining/overview.md`
- `RUNTIME-GDE-001` → `docs/runtime/overview.md`
- `SEC-GDE-001` → `docs/security/overview.md`
- `TOKEN-GDE-001` → `docs/tokenomics/overview.md`
- `TRADING-GDE-001` → `docs/trading/overview.md`
- `TREASURY-GDE-001` → `docs/treasury/overview.md`
- `CORE-GDE-001` → `docs/overview/ecosystem-overview.md`
- `CORE-GDE-002` → `docs/overview/core-principles.md`
- `CORE-GDE-003` → `docs/overview/documentation-status.md`
- `CORE-GDE-004` → `docs/overview/risk-notices.md`

All IDs were allocated after individual approval, are unique, monotonic within their previously unused `(scope,GDE)` pairs, and are permanently unavailable for reuse.
