---
schema_version: "1.0.0"
document_id: "DOC-RPT-217"
aliases: []
document_type: "REPORT"
title: "Documentation Page Status Register"
summary: "Freezes one deterministic badge classification for every previously unresolved public page."
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
related_requirements: ["DOCUMENTATION-UX-REQ-03"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-PAGE-STATUS-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Page Status Register

## Result

`PASS_WITH_PAGE_STATUS_CLASSIFICATION_FROZEN`

## Classification Criteria

| Criterion | Decision | Evidence |
| --- | --- | --- |
| `MAP-CAN-01` | `Canonical` | Governed `APPROVED/CURRENT` metadata |
| `MAP-REF-01` | `Reference` | Exact section index path frozen below |
| `MAP-PLAN-02` | `Planned` | Explicit legacy `Future` declaration |
| `MAP-BASE-01` | `Baseline` | Explicit legacy `Conceptual` declaration |

## Frozen Page Decisions

| ID | Source path | Current source | Badge | Criterion | Justification |
| --- | --- | --- | --- | --- | --- |
| `PSC-001` | `docs/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-002` | `docs/academy/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-003` | `docs/academy/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-004` | `docs/accountability/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-005` | `docs/accountability/financial-reports.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-006` | `docs/accountability/governance-records.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-007` | `docs/accountability/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-008` | `docs/accountability/release-notes.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-009` | `docs/accountability/roadmap-updates.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-010` | `docs/acs/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-011` | `docs/acs/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-012` | `docs/bba-agency/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-013` | `docs/bba-agency/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-014` | `docs/business/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-015` | `docs/business/acs-integration.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-016` | `docs/business/client-lifecycle.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-017` | `docs/business/dao-service-requests.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-018` | `docs/business/delivery-lifecycle.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-019` | `docs/business/governance-alignment.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-020` | `docs/business/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-021` | `docs/business/plugin-requests.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-022` | `docs/business/request-intake.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-023` | `docs/business/runtime.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-024` | `docs/business/service-catalog.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-025` | `docs/defi/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-026` | `docs/defi/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-027` | `docs/dex/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-028` | `docs/dex/architecture.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-029` | `docs/dex/liquidity-pools.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-030` | `docs/dex/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-031` | `docs/dex/risk-and-disclosures.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-032` | `docs/dex/routing-and-aggregation.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-033` | `docs/dex/security-and-smart-contracts.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-034` | `docs/glossary/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-035` | `docs/governance/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-036` | `docs/governance/accountability.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-037` | `docs/governance/constitutional-governance.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-038` | `docs/governance/execution-receipts.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-039` | `docs/governance/governance-risk.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-040` | `docs/governance/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-041` | `docs/governance/proposal-lifecycle.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-042` | `docs/lottery/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-043` | `docs/lottery/cryptodraw.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-044` | `docs/lottery/game-models.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-045` | `docs/lottery/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-046` | `docs/lottery/responsible-participation.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-047` | `docs/lottery/risk-and-compliance.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-048` | `docs/lottery/security-and-smart-contracts.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-049` | `docs/marketplace/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-050` | `docs/marketplace/architecture.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-051` | `docs/marketplace/buyer-flow.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-052` | `docs/marketplace/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-053` | `docs/marketplace/risk-and-compliance.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-054` | `docs/marketplace/security-and-data-protection.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-055` | `docs/marketplace/seller-provider-model.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-056` | `docs/mining/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-057` | `docs/mining/architecture.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-058` | `docs/mining/infrastructure-and-operations.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-059` | `docs/mining/mining-models.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-060` | `docs/mining/monitoring-and-telemetry.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-061` | `docs/mining/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-062` | `docs/mining/risk-and-compliance.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-063` | `docs/mining/security-and-custody.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-064` | `docs/overview/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-065` | `docs/overview/core-principles.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-066` | `docs/overview/documentation-status.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-067` | `docs/overview/ecosystem-overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-068` | `docs/overview/risk-notices.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-069` | `docs/runtime/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-070` | `docs/runtime/accountability-records.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-071` | `docs/runtime/acs-integration.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-072` | `docs/runtime/architecture.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-073` | `docs/runtime/change-control.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-074` | `docs/runtime/communication-cadence.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-075` | `docs/runtime/delays-and-blockers.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-076` | `docs/runtime/execution-handoff.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-077` | `docs/runtime/governance-escalation.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-078` | `docs/runtime/milestones.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-079` | `docs/runtime/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-080` | `docs/runtime/request-lifecycle.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-081` | `docs/runtime/risk-controls.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-082` | `docs/runtime/status-model.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-083` | `docs/runtime/validation-and-confirmation.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-084` | `docs/security/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-085` | `docs/security/api-security.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-086` | `docs/security/disclosure-policy.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-087` | `docs/security/frontend-security.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-088` | `docs/security/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-089` | `docs/security/smart-contract-security.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-090` | `docs/security/wallet-security.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-091` | `docs/tokenomics/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-092` | `docs/tokenomics/governance-participation.md` | `Future` | `Planned` | `MAP-PLAN-02` | Explicit future direction |
| `PSC-093` | `docs/tokenomics/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-094` | `docs/tokenomics/pok-minting.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-095` | `docs/tokenomics/utility-model.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-096` | `docs/trading/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-097` | `docs/trading/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-098` | `docs/trading/scalper-futures.md` | `Conceptual` | `Baseline` | `MAP-BASE-01` | Explicit conceptual line of record |
| `PSC-099` | `docs/treasury/README.md` | No status; section index | `Reference` | `MAP-REF-01` | Frozen navigational entry path |
| `PSC-100` | `docs/treasury/capital-allocation.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-101` | `docs/treasury/compliance-and-disclosures.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-102` | `docs/treasury/custody-and-security.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-103` | `docs/treasury/overview.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-104` | `docs/treasury/risk-management.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |
| `PSC-105` | `docs/treasury/treasury-policy.md` | `APPROVED/CURRENT` | `Canonical` | `MAP-CAN-01` | Current approved public corpus page |

## Reconciliation

| Badge | Frozen pages |
| --- | ---: |
| `Canonical` | 84 |
| `Reference` | 19 |
| `Planned` | 1 |
| `Baseline` | 1 |
| **Total** | **105** |

Every previously unresolved page has exactly one decision. This register does
not classify orphanhood, redundancy, implementation maturity, operational
state, authority, legal approval, security validation, or financial enablement.
