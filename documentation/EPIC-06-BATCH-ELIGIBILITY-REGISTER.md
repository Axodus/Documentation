---
schema_version: "1.0.0"
document_id: "DOC-RPT-154"
aliases: []
document_type: "REPORT"
title: "EPIC-06 Batch Eligibility Register"
summary: "Assigns later execution eligibility to the frozen high-risk core decisions under EPIC-06 REQ-03."
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
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-03"]
related_adrs: []
related_cores: ["MINING", "LOTTERY", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-06-BATCH-ELIGIBILITY-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-06 Batch Eligibility Register

## Eligibility Register

| Decision ID | Core | Source Path | Recommended Action | REQ-05 Eligibility | Reading |
| --- | --- | --- | --- | --- | --- |
| `HRC-0001` | `mining` | `docs/mining/overview.md` | status and activation qualifiers | `ELIGIBLE_FOR_BATCH_01` | Low-risk narrowing change. |
| `HRC-0002` | `mining` | `docs/mining/infrastructure-and-operations.md` | maturity qualifier replacement | `ELIGIBLE_FOR_BATCH_01` | Phrase-level correction only. |
| `HRC-0003` | `mining` | `docs/mining/rewards-and-payouts.md` | payout and approval qualifiers | `ELIGIBLE_AFTER_DOCUMENTATION_REVIEW` | Financial wording needs precise narrowing but stays inside existing page. |
| `HRC-0004` | `mining` | `docs/mining/user-facing-products.md` | status and availability qualifiers | `ELIGIBLE_AFTER_DOCUMENTATION_REVIEW` | User-product posture needs careful review. |
| `HRC-0005` | `mining` | `docs/mining/monitoring-and-telemetry.md` | implementation-state qualifier | `ELIGIBLE_FOR_BATCH_01` | Low-risk boundary clarification. |
| `HRC-0006` | `mining` | `docs/mining/*` | authority/economic-boundary consolidation | `ELIGIBLE_AFTER_DOCUMENTATION_REVIEW` | Requires cross-page wording coordination. |
| `HRC-0007` | `lottery` | `docs/lottery/overview.md` | preserve anchor; no expansion | `ELIGIBLE_FOR_BATCH_01` | No broad change required. |
| `HRC-0008` | `lottery` | `docs/lottery/prize-pools-and-payouts.md` | funded-only and legal-dependent qualifiers | `ELIGIBLE_AFTER_LEGAL_REVIEW` | Prize commitments remain legally sensitive. |
| `HRC-0009` | `lottery` | `docs/lottery/claims-and-settlement.md` | settlement-model qualifiers | `ELIGIBLE_AFTER_LEGAL_REVIEW` | Claims and settlement remain legally sensitive. |
| `HRC-0010` | `lottery` | `docs/lottery/operations-and-runtime.md` | non-live runtime qualifiers | `ELIGIBLE_AFTER_LEGAL_REVIEW` | Operational wording still tied to legal-safe release posture. |
| `HRC-0011` | `lottery` | `docs/lottery/treasury-and-fees.md` | fee and reserve qualifiers | `ELIGIBLE_AFTER_LEGAL_REVIEW` | Financial and legal sensitivity combined. |
| `HRC-0012` | `lottery` | `docs/lottery/*` | maintain expansion block | `NOT_ELIGIBLE_HIGH_RISK` | No net-new Lottery expansion allowed. |
| `HRC-0013` | `treasury` | `docs/treasury/overview.md` | conceptual/prototype/active qualifiers | `ELIGIBLE_FOR_BATCH_01` | Narrowing change only. |
| `HRC-0014` | `treasury` | `docs/treasury/treasury-policy.md` | non-authorization qualifiers | `ELIGIBLE_FOR_BATCH_01` | Already partially frozen by EPIC-05. |
| `HRC-0015` | `treasury` | `docs/treasury/capital-allocation.md` | directional-policy qualifiers | `ELIGIBLE_FOR_BATCH_01` | Already partially frozen by EPIC-05. |
| `HRC-0016` | `treasury` | `docs/treasury/revenue-and-fees.md` | non-operational revenue qualifiers | `ELIGIBLE_AFTER_DOCUMENTATION_REVIEW` | Financial posture needs careful narrowing. |
| `HRC-0017` | `treasury` | `docs/treasury/custody-and-security.md` | preserve control posture | `ELIGIBLE_FOR_BATCH_01` | Mostly alignment-oriented. |
| `HRC-0018` | `treasury` | `docs/treasury/*` | authority consolidation | `ELIGIBLE_AFTER_DOCUMENTATION_REVIEW` | Cross-page coherence work. |
| `HRC-0019` | `tokenomics` | `docs/tokenomics/overview.md` | authority-anchor preservation | `ELIGIBLE_FOR_BATCH_01` | Low-risk alignment use. |
| `HRC-0020` | `tokenomics` | `docs/tokenomics/neurons-token.md` | documented-model qualifiers | `ELIGIBLE_AFTER_DOCUMENTATION_REVIEW` | Needs controlled claim narrowing. |
| `HRC-0021` | `tokenomics` | `docs/tokenomics/pok-minting.md` | prototype and scope qualifiers | `ELIGIBLE_FOR_BATCH_01` | Already aligned with EPIC-05 freeze. |
| `HRC-0022` | `tokenomics` | `docs/tokenomics/supply-and-emission.md` | exact parameter handling | `DEFER_INSUFFICIENT_EVIDENCE` | Remains outside low-risk execution. |
| `HRC-0023` | `tokenomics` | `docs/tokenomics/utility-model.md` | future-utility qualifiers | `ELIGIBLE_FOR_BATCH_01` | Narrowing change only. |
| `HRC-0024` | `tokenomics` | `docs/tokenomics/*` | cluster-wide status and linkage coherence | `ELIGIBLE_AFTER_DOCUMENTATION_REVIEW` | Requires cross-page coordination. |
| `HRC-0025` | `runtime` | `docs/runtime/overview.md` | readiness qualifier | `ELIGIBLE_FOR_BATCH_01` | Low-risk clarification. |
| `HRC-0026` | `runtime` | `docs/runtime/architecture.md` | integration-surface qualifier | `ELIGIBLE_FOR_BATCH_01` | Low-risk clarification. |
| `HRC-0027` | `runtime` | `docs/runtime/acs-integration.md` | preserve non-autonomous boundary | `ELIGIBLE_FOR_BATCH_01` | Already strong; minor clarification only if needed. |
| `HRC-0028` | `runtime` | `docs/runtime/governance-escalation.md` | process-model qualifier | `ELIGIBLE_FOR_BATCH_01` | Low-risk clarification. |
| `HRC-0029` | `runtime` | `docs/runtime/*` | cluster-wide readiness alignment | `ELIGIBLE_AFTER_DOCUMENTATION_REVIEW` | Cross-page consolidation task. |

## Result

`PASS_WITH_HIGH_RISK_CORE_COHERENCE_DECISIONS_FROZEN`

## Reading

Later execution should prioritize:

1. status qualifiers
2. authority qualifiers
3. prototype/readiness qualifiers
4. boundary corrections
5. metadata adoption

Lottery remains the most restricted surface. `docs/tokenomics/supply-and-emission.md`
remains deferred until a narrower documentation review explicitly re-authorizes
execution.
