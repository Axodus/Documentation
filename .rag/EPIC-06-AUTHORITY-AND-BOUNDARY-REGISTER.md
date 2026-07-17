---
schema_version: "1.0.0"
document_id: "DOC-RPT-145"
aliases: []
document_type: "REPORT"
title: "EPIC-06 Authority and Boundary Register"
summary: "Freezes authority posture, publication safety, and boundary review priorities for all EPIC-06 target cores."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_06"
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
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-01"]
related_adrs: []
related_cores: ["BUSINESS", "MINING", "LOTTERY", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-06-AUTHORITY-AND-BOUNDARY-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-06 Authority and Boundary Register

## Domain Authority and Boundary Freeze

| Core | Canonical Authority Anchor | Authority Posture | Publication Safety | Claim Sensitivity | Boundary Reading |
| --- | --- | --- | --- | --- | --- |
| `business` | `docs/business/overview.md` | `CORE_AUTHORITY_PRESENT_BUT_SEVERELY_UNDER-GOVERNED_SURROUNDING_SURFACE` | `PUBLIC_SAFE_WITH_QUALIFICATION` | `MEDIUM` | Business is documented as an intake and coordination nucleus, but surrounding pages still risk drift toward software-house, service-marketplace, or activation over-read. |
| `mining` | `docs/mining/overview.md` and governed Mining anchors | `CORE_AUTHORITY_PRESENT_WITH_PARTIAL_CANONICAL_CLUSTER` | `PUBLIC_ACTIVE_IF_VERIFIED` | `HIGH` | Mining pages must remain concept, risk, and product-model documentation unless ownership, operation, and revenue are verified. |
| `lottery` | `docs/lottery/overview.md` and governed Lottery anchors | `CORE_AUTHORITY_PRESENT_WITH_LEGAL_AND_BOUNDARY_DEPENDENCY` | `PUBLIC_PROTOTYPE_ONLY` | `HIGH` | Lottery remains the most boundary-sensitive public surface. Expansion stays blocked absent legal-safe and public-safe freeze. |
| `treasury` | `docs/treasury/overview.md` and governed control pages | `CORE_AUTHORITY_PRESENT_WITH_HIGH_FINANCIAL_SENSITIVITY` | `PUBLIC_DIRECTIONAL_ONLY` | `HIGH` | Treasury pages must distinguish draft policy from active custody, allocation, and execution authority. |
| `tokenomics` | `docs/tokenomics/overview.md` | `MINIMAL_GOVERNED_AUTHORITY_CLUSTER` | `PUBLIC_SAFE_WITH_QUALIFICATION` | `HIGH` | Tokenomics breadth exists, but public authority is thin relative to claim sensitivity. |
| `runtime` | `docs/runtime/overview.md` and governed runtime cluster | `STRONG_CANONICAL_AUTHORITY_CLUSTER` | `PUBLIC_SAFE_WITH_QUALIFICATION` | `MEDIUM` | Runtime is largely canonical already and mainly needs readiness and production-boundary consolidation rather than expansion. |

## Page-Level Boundary Priorities

| Path | Frozen Boundary Class | Primary Concern | REQ-02 or REQ-03 Dependency |
| --- | --- | --- | --- |
| `docs/business/runtime.md` | `BOUNDARY_REVIEW_REQUIRED` | Runtime wording does not yet state the current mock/read-only bridge posture. | `EPIC-06-REQ-02` |
| `docs/business/service-catalog.md` | `PUBLIC_SAFE_WITH_QUALIFICATION` | Can be over-read as commercial availability instead of structured service taxonomy. | `EPIC-06-REQ-02` |
| `docs/business/overview.md` | `PUBLIC_SAFE_WITH_QUALIFICATION` | Needs identity hardening so Business is not read as generic software house or freelancer marketplace. | `EPIC-06-REQ-02` |
| `docs/mining/infrastructure-and-operations.md` | `BOUNDARY_REVIEW_REQUIRED` | Operation lifecycle wording can imply active deployment or infrastructure ownership. | `EPIC-06-REQ-03` |
| `docs/mining/rewards-and-payouts.md` | `BOUNDARY_REVIEW_REQUIRED` | Reward and payout wording can imply active revenue flow. | `EPIC-06-REQ-03` |
| `docs/mining/user-facing-products.md` | `BOUNDARY_REVIEW_REQUIRED` | User-product posture is high sensitivity without verified operating state. | `EPIC-06-REQ-03` |
| `docs/lottery/prize-pools-and-payouts.md` | `LEGAL_REVIEW_REQUIRED` | Prize commitments and funding inference. | `EPIC-05-REQ-03`, `EPIC-06-REQ-03` |
| `docs/lottery/claims-and-settlement.md` | `LEGAL_REVIEW_REQUIRED` | Legal and consumer-protection exposure. | `EPIC-06-REQ-03` |
| `docs/lottery/operations-and-runtime.md` | `LEGAL_REVIEW_REQUIRED` | Operations wording can imply runnable public product. | `EPIC-06-REQ-03` |
| `docs/treasury/treasury-policy.md` | `BOUNDARY_REVIEW_REQUIRED` | Draft policy can be mistaken for active treasury authorization. | `EPIC-05-REQ-03`, `EPIC-06-REQ-03` |
| `docs/treasury/capital-allocation.md` | `BOUNDARY_REVIEW_REQUIRED` | Allocation categories can be mistaken for active program. | `EPIC-05-REQ-03`, `EPIC-06-REQ-03` |
| `docs/treasury/revenue-and-fees.md` | `BOUNDARY_REVIEW_REQUIRED` | Revenue language requires strict non-operational framing. | `EPIC-06-REQ-03` |
| `docs/tokenomics/pok-minting.md` | `BOUNDARY_REVIEW_REQUIRED` | Prototype issuance model still needs stronger scope hardening. | `EPIC-05-REQ-03`, `EPIC-06-REQ-03` |
| `docs/tokenomics/supply-and-emission.md` | `BOUNDARY_REVIEW_REQUIRED` | Exact parameters remain high-sensitivity. | `EPIC-05-REQ-03`, `EPIC-06-REQ-03` |
| `docs/tokenomics/neurons-token.md` | `PUBLIC_SAFE_WITH_QUALIFICATION` | Token system language must stay utility-bound and non-investment. | `EPIC-06-REQ-03` |
| `docs/runtime/overview.md` | `PUBLIC_SAFE_WITH_QUALIFICATION` | Runtime is canonical, but not proof of live automation or provider activation. | `EPIC-06-REQ-03` |
| `docs/runtime/architecture.md` | `PUBLIC_SAFE_WITH_QUALIFICATION` | Integration surfaces must not be mistaken for active production integrations. | `EPIC-06-REQ-03` |

## Business Canonical Context Intake

The following execution guidance is accepted for EPIC-06 Business review:

- Business is operational infrastructure, not a traditional software house.
- Business is not a freelancer marketplace or simple hiring portal.
- Business may coordinate contracted, community, and strategic development.
- Business may build Axodus-owned assets before monetization.
- Business does not override Governance, Treasury, or ACS authority.
- Business runtime must remain explicitly `mock/read-only` until verified otherwise.

This guidance is frozen as review control for `EPIC-06-REQ-02` and
`EPIC-06-REQ-04`. It is not yet a direct mutation of public pages.
