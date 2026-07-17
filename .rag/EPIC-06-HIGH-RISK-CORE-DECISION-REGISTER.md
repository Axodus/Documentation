---
schema_version: "1.0.0"
document_id: "DOC-RPT-152"
aliases: []
document_type: "REPORT"
title: "EPIC-06 High-Risk Core Decision Register"
summary: "Freezes exact authority, status, claim, and boundary decisions for Mining, Lottery, Treasury, Tokenomics, and Runtime under EPIC-06 REQ-03."
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
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-06-HIGH-RISK-CORE-DECISION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-06 High-Risk Core Decision Register

## Mining

| Decision ID | Source Path | Focus | Current State | Frozen Decision | Future Action | Risk |
| --- | --- | --- | --- | --- | --- | --- |
| `HRC-0001` | `docs/mining/overview.md` | Concept versus active operation | Governed overview still presents a broad product and infrastructure nucleus. | Freeze concept-model and `active if verified` reading for user products, operations, and treasury exposure. | Add operational-state qualifiers only. | `HIGH` |
| `HRC-0002` | `docs/mining/infrastructure-and-operations.md` | Lifecycle maturity | Lifecycle includes `production operation`. | Freeze replacement with operation-model wording that separates lifecycle design from verified deployment. | Remove maturity conflation only. | `HIGH` |
| `HRC-0003` | `docs/mining/rewards-and-payouts.md` | Revenue and payout inference | Rewards and payout models can imply active reward flow, payout routes, or funded user distribution. | Freeze rewards as accounting and model vocabulary only unless verified. | Add payout-availability and approval qualifiers. | `HIGH` |
| `HRC-0004` | `docs/mining/user-facing-products.md` | Product availability and custody | Product types and status labels include `Active` and payout/custody fields. | Freeze conditional availability and no-product-release inference without verified records. | Add prototype and activation qualifiers. | `HIGH` |
| `HRC-0005` | `docs/mining/monitoring-and-telemetry.md` | Live-monitoring inference | Telemetry reads like continuous operational monitoring. | Freeze telemetry as model and reporting design unless operational evidence exists. | Add implementation-state qualifier. | `MEDIUM` |
| `HRC-0006` | `docs/mining/*` cluster | Ownership and economic authority | Public surface does not clearly freeze who owns infrastructure, who bears costs, losses, and revenue, or when treasury/user flows exist. | Freeze explicit need for authority clarification before any active economic reading. | Consolidate authority and economic-boundary wording in existing pages only. | `HIGH` |

## Lottery

| Decision ID | Source Path | Focus | Current State | Frozen Decision | Future Action | Risk |
| --- | --- | --- | --- | --- | --- | --- |
| `HRC-0007` | `docs/lottery/overview.md` | Release posture | Overview already blocks live/licensed/publicly available inference. | Keep overview as boundary anchor and do not broaden public release reading. | Preserve and reuse as anchor only. | `HIGH` |
| `HRC-0008` | `docs/lottery/prize-pools-and-payouts.md` | Prize commitment and funding | Prize formulas and payout models can imply funded or authorized public operation. | Freeze funded-only, approved-only, legal-dependent, and implementation-dependent reading. | Qualifier-only remediation. | `HIGH` |
| `HRC-0009` | `docs/lottery/claims-and-settlement.md` | Settlement and unclaimed-prize policy | Settlement models and treasury/unclaimed prize references can imply active claim infrastructure. | Freeze claims and settlement as policy/model only until implementation, legal, and governance evidence exists. | Add legal-safe and activation qualifiers. | `HIGH` |
| `HRC-0010` | `docs/lottery/operations-and-runtime.md` | Operational readiness | Runtime phases read like runnable draw operations. | Freeze operations as conceptual runtime model only, not active product operations. | Add non-live runtime qualifier. | `HIGH` |
| `HRC-0011` | `docs/lottery/treasury-and-fees.md` | Fees, reserves, and treasury revenue | Fee and reserve model can imply active financial flows. | Freeze all fee, reserve, refund, and treasury routing language as conditional and governance-dependent. | Add financial and legal qualifiers. | `HIGH` |
| `HRC-0012` | `docs/lottery/*` cluster | Public expansion gate | Broad topical coverage exists, but legal-safe posture is still uneven. | Freeze explicit rule that no Lottery page expansion is authorized before legal-safe and public-boundary-safe wording is settled. | Preserve expansion block. | `HIGH` |

## Treasury

| Decision ID | Source Path | Focus | Current State | Frozen Decision | Future Action | Risk |
| --- | --- | --- | --- | --- | --- | --- |
| `HRC-0013` | `docs/treasury/overview.md` | Conceptual versus active Treasury | Governed overview is directionally strong but can still be over-read through surrounding pages. | Freeze conceptual/prototype/active Treasury separation as a required cross-page rule. | Apply status qualifiers across cluster. | `HIGH` |
| `HRC-0014` | `docs/treasury/treasury-policy.md` | Action enablement and approval | Draft policy describes what Treasury can hold and how funds can be allocated. | Freeze non-authorization and draft-framework reading for public policy pages. | Qualifier-only remediation. | `HIGH` |
| `HRC-0015` | `docs/treasury/capital-allocation.md` | Allocation categories and execution handoff | Allocation categories and approval references can imply active programs. | Freeze allocation pages as directional design and reporting model only unless verified. | Add non-live and conditional execution qualifiers. | `HIGH` |
| `HRC-0016` | `docs/treasury/revenue-and-fees.md` | Revenue posture | Revenue and fee surfaces are financially sensitive and can imply live inflows or settlement. | Freeze non-operational reading and require explicit evidence for live revenue interpretation. | Add directional and reporting-only qualifiers. | `HIGH` |
| `HRC-0017` | `docs/treasury/custody-and-security.md` | Custody authority | Governed control page is strong, but surrounding pages still need consistent custody and execution-authority posture. | Freeze custody as controlled conceptual guidance, not proof of deployed wallet regime. | Preserve control posture and align adjacent pages. | `MEDIUM` |
| `HRC-0018` | `docs/treasury/*` cluster | Authority and signing | Public surface still lacks a fully unified active-authority model across under-governed pages. | Freeze authority clarification before any expansion or operational interpretation. | Consolidate existing pages only. | `HIGH` |

## Tokenomics

| Decision ID | Source Path | Focus | Current State | Frozen Decision | Future Action | Risk |
| --- | --- | --- | --- | --- | --- | --- |
| `HRC-0019` | `docs/tokenomics/overview.md` | Utility versus financial expectation | Governed overview is strong, but broad surface remains under-governed. | Freeze overview as the authority anchor and require utility-bound interpretation across adjacent pages. | Align breadth pages to anchor. | `HIGH` |
| `HRC-0020` | `docs/tokenomics/neurons-token.md` | Current token model reading | Ungoverned token page can be over-read as finalized token deployment or operating policy. | Freeze documented-model and non-investment reading only. | Add publication and verification qualifiers. | `HIGH` |
| `HRC-0021` | `docs/tokenomics/pok-minting.md` | Issuance scope and prototype status | Mint flow reads as specific implemented path. | Freeze prototype/documented-model reading and educational-scope interpretation. | Qualifier-only remediation. | `HIGH` |
| `HRC-0022` | `docs/tokenomics/supply-and-emission.md` | Exact parameters and issuance/distribution status | Exact parameter and mint-validity formula remain highly sensitive. | Freeze this page as higher-sensitivity than Batch 01 and require explicit documentation review before execution. | Keep outside low-risk execution until separately authorized. | `HIGH` |
| `HRC-0023` | `docs/tokenomics/utility-model.md` | Future utility activation | Utility page already blocks staking and vague value claims, but adjacent breadth must stay aligned. | Freeze future-utility and non-active-access reading as cross-page rule. | Align utility references only. | `MEDIUM` |
| `HRC-0024` | `docs/tokenomics/*` cluster | Issuance, distribution, governance, and treasury linkage | Broad surface exists without matching governed density. | Freeze cluster-wide rule that issuance/distribution/utility are not active facts unless implementation and governance records support them. | Consolidate and metadata-harden existing pages only. | `HIGH` |

## Runtime

| Decision ID | Source Path | Focus | Current State | Frozen Decision | Future Action | Risk |
| --- | --- | --- | --- | --- | --- | --- |
| `HRC-0025` | `docs/runtime/overview.md` | Operating model versus live automation | Overview describes a full operating discipline. | Freeze runtime as documentation baseline and operating model, not proof of implemented automation or provider activation. | Add readiness qualifier only if needed later. | `MEDIUM` |
| `HRC-0026` | `docs/runtime/architecture.md` | Integration-surface interpretation | Architecture lists Governance, Treasury, Marketplace, GitHub/Coder, and ACS integration surfaces. | Freeze these as architecture surfaces, not evidence of active production integrations. | Preserve concept/prototype distinction. | `MEDIUM` |
| `HRC-0027` | `docs/runtime/acs-integration.md` | ACS execution boundary | Governed ACS page is already strong, but must remain non-executive and non-production by interpretation. | Freeze ACS Runtime support as analytical and review-bound, not autonomous production execution. | Maintain current boundary posture. | `LOW` |
| `HRC-0028` | `docs/runtime/governance-escalation.md` | Governance path versus implementation reality | Escalation flow is clear but can be over-read as fully activated workflow stack. | Freeze governance escalation as a canonical process model, not proof of complete operational tooling. | Add readiness qualifier only if needed. | `LOW` |
| `HRC-0029` | `docs/runtime/*` cluster | Prototype versus production runtime | Runtime is mostly canonical, but other cores can over-read it as active platform evidence. | Freeze cluster-wide rule that Runtime governs readiness language and preserves closed production gates. | Use runtime as consolidation, not expansion surface. | `MEDIUM` |

## Outcome

`PASS_WITH_HIGH_RISK_CORE_COHERENCE_DECISIONS_FROZEN`
