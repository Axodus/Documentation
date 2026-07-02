---
schema_version: "1.0.0"
document_id: "DOC-ROAD-005"
aliases: []
document_type: "ROADMAP"
title: "Documentation Batch 02 Candidate Freeze Proposal"
summary: "Records Batch 01 audit or Batch 02 planning evidence for DOCUMENTATION-EPIC-02."
version: "1.1.0"
publication_status: "APPROVED"
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
relationships: [{type: "DEPENDS_ON", target: "DOC-ROAD-004"}, {type: "DEPENDS_ON", target: "DOC-RPT-015"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-06"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Batch 02 Candidate Freeze Proposal

## Primary Proposal

| Source path | Scope | Proposed ID pattern | Classification | Score | Semantic target | Status |
|---|---|---|---|---:|---|---|
| `docs/governance/accountability.md` | `GOV` | `GOV-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `GOV-GDE-001` | `MIGRATED` |
| `docs/governance/constitutional-governance.md` | `GOV` | `GOV-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `GOV-GDE-001` | `MIGRATED` |
| `docs/governance/execution-receipts.md` | `GOV` | `GOV-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `GOV-GDE-001` | `MIGRATED` |
| `docs/governance/governance-risk.md` | `GOV` | `GOV-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `GOV-GDE-001` | `MIGRATED` |
| `docs/governance/proposal-lifecycle.md` | `GOV` | `GOV-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `GOV-GDE-001` | `MIGRATED` |
| `docs/security/api-security.md` | `SEC` | `SEC-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `SEC-GDE-001` | `MIGRATED` |
| `docs/security/disclosure-policy.md` | `SEC` | `SEC-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `SEC-GDE-001` | `MIGRATED` |
| `docs/security/frontend-security.md` | `SEC` | `SEC-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `SEC-GDE-001` | `MIGRATED` |
| `docs/security/smart-contract-security.md` | `SEC` | `SEC-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `SEC-GDE-001` | `MIGRATED` |
| `docs/security/wallet-security.md` | `SEC` | `SEC-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `SEC-GDE-001` | `MIGRATED` |
| `docs/accountability/financial-reports.md` | `ACCOUNT` | `ACCOUNT-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `ACCOUNT-GDE-001` | `MIGRATED` |
| `docs/accountability/governance-records.md` | `ACCOUNT` | `ACCOUNT-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `ACCOUNT-GDE-001` | `MIGRATED` |
| `docs/accountability/release-notes.md` | `ACCOUNT` | `ACCOUNT-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `ACCOUNT-GDE-001` | `MIGRATED` |
| `docs/accountability/roadmap-updates.md` | `ACCOUNT` | `ACCOUNT-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `ACCOUNT-GDE-001` | `MIGRATED` |
| `docs/runtime/change-control.md` | `RUNTIME` | `RUNTIME-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `RUNTIME-GDE-001` | `MIGRATED` |
| `docs/runtime/governance-escalation.md` | `RUNTIME` | `RUNTIME-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `RUNTIME-GDE-001` | `MIGRATED` |
| `docs/runtime/risk-controls.md` | `RUNTIME` | `RUNTIME-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `RUNTIME-GDE-001` | `MIGRATED` |
| `docs/treasury/compliance-and-disclosures.md` | `TREASURY` | `TREASURY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `TREASURY-GDE-001` | `MIGRATED` |
| `docs/treasury/custody-and-security.md` | `TREASURY` | `TREASURY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `TREASURY-GDE-001` | `MIGRATED` |
| `docs/treasury/risk-management.md` | `TREASURY` | `TREASURY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `TREASURY-GDE-001` | `MIGRATED` |

## Ordered Alternates

| Source path | Scope | Proposed ID pattern | Classification | Score | Semantic target | Status |
|---|---|---|---|---:|---|---|
| `docs/business/risk-and-compliance.md` | `BUSINESS` | `BUSINESS-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `BUSINESS-GDE-001` | `FROZEN_ALTERNATE` |
| `docs/defi/risk-management.md` | `DEFI` | `DEFI-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `DEFI-GDE-001` | `FROZEN_ALTERNATE` |
| `docs/dex/risk-and-disclosures.md` | `DEX` | `DEX-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `DEX-GDE-001` | `FROZEN_ALTERNATE` |
| `docs/lottery/responsible-participation.md` | `LOTTERY` | `LOTTERY-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `LOTTERY-GDE-001` | `FROZEN_ALTERNATE` |
| `docs/marketplace/risk-and-compliance.md` | `MARKET` | `MARKET-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MARKET-GDE-001` | `FROZEN_ALTERNATE` |
| `docs/mining/risk-and-compliance.md` | `MINING` | `MINING-GDE-<NNN>` | `NEEDS_REVIEW` | 55 | `MINING-GDE-001` | `FROZEN_ALTERNATE` |

No numeric ID is allocated or reserved. REQ-07 owns formal freeze.
