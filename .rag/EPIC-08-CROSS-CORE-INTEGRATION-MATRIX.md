---
schema_version: "1.0.0"
document_id: "DOC-RPT-190"
aliases: []
document_type: "REPORT"
title: "EPIC-08 Cross-Core Integration Matrix"
summary: "Inventories material cross-core integration families and classifies bilateral documentation symmetry."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_08"
authority_level: "PORTFOLIO"
author: "Axodus Documentation Core"
owner: "Axodus Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
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
related_epics: ["DOCUMENTATION-EPIC-08"]
related_requirements: ["DOCUMENTATION-EPIC-08-REQ-01"]
related_adrs: []
related_cores: ["BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "GOVERNANCE", "MINING", "LOTTERY", "TOKENOMICS", "TRADING", "TREASURY", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-08-CROSS-CORE-INTEGRATION-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-08 Cross-Core Integration Matrix

## Method

All 269 public pages were included in the source scan. The register below
freezes the 36 mandatory pair families. A pair may support more than one
relationship type, but one row identifies its material contract and current
documentation posture. Symmetry confirms compatible descriptions, not active
integration.

| Integration ID | Source Core | Target Core | Source Canonical Page | Target Canonical Page | Type | Input | Output | Interface | Authority Dependency | Status / Evidence | Boundary | Symmetry | Contradiction |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `INTG-EP8-0001` | Academy | ACS | `docs/academy/tutor-validation.md` | `docs/acs/overview.md` | `REVIEW` | assessment or content review request | advisory risk result | `INT-EP7-006/007` | Academy human owner | directional / `EVID-EP7-0008` | ACS is not approval authority. | `TARGET_SIDE_ONLY` | Academy describes detailed use; ACS side is generic. |
| `INTG-EP8-0002` | Academy | Governance | `docs/academy/governance-alignment.md` | `docs/governance/overview.md` | `APPROVAL` | qualification or policy decision package | scoped decision | `INT-EP7-004/005` | scope-specific Governance authority | model / `EVID-EP7-0011/0013` | No automatic governance right. | `SYMMETRIC_WITH_QUALIFICATION` | Active authority remains unverified. |
| `INTG-EP8-0003` | Academy | Marketplace | `docs/academy/marketplace-integration.md` | `docs/marketplace/academy-alignment.md` | `PUBLICATION` | course or learning asset package | listing or rejection record | `INT-EP7-008/009` | asset and listing authority | conceptual / `EVID-EP7-0011/0012` | Settlement and rights unverified. | `SYMMETRIC_WITH_QUALIFICATION` | Lifecycle terminology differs. |
| `INTG-EP8-0004` | Academy | Runtime | `docs/academy/overview.md` | `docs/runtime/overview.md` | `RUNTIME_DEPENDENCY` | learning lifecycle event | lifecycle receipt | `INT-EP7-014` | Academy process owner | directional / `EVID-EP8-0002` | Runtime is not production activation. | `TARGET_SIDE_ONLY` | Academy lacks an explicit runtime contract. |
| `INTG-EP8-0005` | Academy | Tokenomics | `docs/academy/token-reward-flows.md` | `docs/tokenomics/academy-rewards.md` | `ECONOMIC_FLOW` | validated eligibility evidence | reward decision or no action | `INT-EP7-010/011/013` | Academy, Tokenomics, Treasury, Governance | blocked / `EVID-EP7-0011/0019` | No automatic issuance or distribution. | `SYMMETRIC_WITH_QUALIFICATION` | Reward-state language needs one status model. |
| `INTG-EP8-0006` | ACS | Governance | `docs/acs/governance-alignment.md` | `docs/governance/overview.md` | `BLOCK_OR_SUSPENSION` | signal or escalation | governed disposition | `INT-EP7-007/004` | Governance or emergency authority | prototype/model / `EVID-EP7-0008/0013` | Local hold is not governed suspension. | `SYMMETRIC_WITH_QUALIFICATION` | Enforcement boundary is not uniform. |
| `INTG-EP8-0007` | ACS | Runtime | `docs/acs/runtime.md` | `docs/runtime/acs-integration.md` | `MONITORING` | lifecycle signal | alert, local hold, or review | `INT-EP7-007/014` | owning nucleus and incident authority | prototype / `EVID-EP7-0008/0009` | No production enforcement. | `SYMMETRIC_WITH_QUALIFICATION` | Runtime side is more governed. |
| `INTG-EP8-0008` | Business | ACS | `docs/business/acs-integration.md` | `docs/acs/business-integration.md` | `REVIEW` | intake, scope, or risk package | advisory analysis | `INT-EP7-006/007` | Business human owner | prototype/model / `EVID-EP7-0006/0008` | ACS cannot commit or approve. | `SOURCE_SIDE_ONLY` | ACS page lacks governed metadata and current qualifiers. |
| `INTG-EP8-0009` | Business | Governance | `docs/business/governance-alignment.md` | `docs/governance/overview.md` | `APPROVAL` | decision package | decision or rejection | `INT-EP7-004/005` | scope-specific Governance authority | model / `EVID-EP7-0013` | Business cannot grant authority. | `SYMMETRIC_WITH_QUALIFICATION` | Execution receipt remains separate. |
| `INTG-EP8-0010` | Business | Marketplace | `docs/business/service-catalog.md` | `docs/marketplace/business-and-bba-alignment.md` | `PUBLICATION` | reusable asset candidate | listing, licensing, or rejection | `INT-EP7-008/009` | asset and listing authority | incomplete / `EVID-EP7-0012` | Marketplace is a channel, not Business. | `SYMMETRIC_WITH_QUALIFICATION` | Ownership and release steps remain incomplete. |
| `INTG-EP8-0011` | Business | Runtime | `docs/business/runtime.md` | `docs/runtime/overview.md` | `RUNTIME_DEPENDENCY` | request and authorized transition | lifecycle state and receipt | `INT-EP7-014` | Business process owner | mock/read-only / `EVID-EP7-0006/0007` | No autonomous execution. | `SYMMETRIC_CONFIRMED` | None at current qualifier level. |
| `INTG-EP8-0012` | Business | Treasury | `docs/business/overview.md` | `docs/treasury/overview.md` | `SERVICE_REQUEST` | funding or economic-effect package | review decision | `INT-EP7-012/013` | Treasury and Governance | conceptual/blocked / `EVID-EP7-0003` | Business cannot move resources. | `TARGET_SIDE_ONLY` | No dedicated bilateral Business page. |
| `INTG-EP8-0013` | Business | Trinity | `docs/business/runtime.md` | `docs/acs/trinity.md` | `SERVICE_REQUEST` | planning context | advisory plan and estimate | `INT-EP7-002/003` | Business human reviewer | incomplete/advisory / `EVID-EP7-0004/0006` | No commitment or authority transfer. | `SYMMETRIC_WITH_QUALIFICATION` | Transport and estimate method unconfirmed. |
| `INTG-EP8-0014` | Governance | Marketplace | `docs/governance/overview.md` | `docs/marketplace/governance-alignment.md` | `APPROVAL` | listing or policy decision | scoped decision | `INT-EP7-004/005` | listing or governance authority | model / `EVID-EP7-0012/0013` | Decision is not publication execution. | `TARGET_SIDE_ONLY` | Governance side is portfolio-generic. |
| `INTG-EP8-0015` | Governance | Mining | `docs/governance/overview.md` | `docs/mining/governance-alignment.md` | `APPROVAL` | activation or policy package | decision | `INT-EP7-004/005` | product and financial authority | unconfirmed / `EVID-EP7-0015` | Operation and revenue remain unverified. | `TARGET_SIDE_ONLY` | Governance side has no Mining-specific contract. |
| `INTG-EP8-0016` | Governance | Lottery | `docs/governance/overview.md` | `docs/lottery/governance-alignment.md` | `APPROVAL` | legal-safe release package | release decision | `INT-EP7-004/005` | legal and Governance release authority | blocked / `EVID-EP7-0016` | No legal approval exists. | `SYMMETRIC_WITH_QUALIFICATION` | Governance cannot substitute legal release. |
| `INTG-EP8-0017` | Governance | Runtime | `docs/governance/overview.md` | `docs/runtime/governance-escalation.md` | `AUTHORITY_DELEGATION` | authorized decision | bounded execution instruction | `INT-EP7-005/014` | formal decision plus executor authority | model / `EVID-EP7-0013` | Decision does not prove activation. | `TARGET_SIDE_ONLY` | Runtime defines more exact handoff. |
| `INTG-EP8-0018` | Governance | Tokenomics | `docs/governance/overview.md` | `docs/tokenomics/governance-participation.md` | `APPROVAL` | economic or eligibility proposal | governed decision | `INT-EP7-004/005/011` | explicit economic authority | directional/blocked / `EVID-EP7-0019` | No active token right follows. | `TARGET_SIDE_ONLY` | Tokenomics describes future utility. |
| `INTG-EP8-0019` | Governance | Trading | `docs/governance/overview.md` | `docs/trading/governance-alignment.md` | `APPROVAL` | activation or risk package | decision | `INT-EP7-004/005` | product, financial, legal authority | blocked / `EVID-EP7-0014` | Exchange/provider gates closed. | `TARGET_SIDE_ONLY` | No Trading-specific Governance anchor. |
| `INTG-EP8-0020` | Governance | Treasury | `docs/governance/overview.md` | `docs/treasury/governance-alignment.md` | `APPROVAL` | Treasury action package | scoped decision | `INT-EP7-004/005/012` | Treasury and Governance authority | model/blocked / `EVID-EP7-0003` | No signer or custody proof. | `TARGET_SIDE_ONLY` | Governance side remains generic. |
| `INTG-EP8-0021` | Lottery | ACS | `docs/lottery/acs-integration.md` | `docs/acs/overview.md` | `MONITORING` | game or risk signal | alert or recommendation | `INT-EP7-006/007` | Lottery owner and incident authority | conceptual/prototype / `EVID-EP7-0008/0016` | No production enforcement. | `SOURCE_SIDE_ONLY` | ACS side lacks Lottery-specific contract. |
| `INTG-EP8-0022` | Lottery | Runtime | `docs/lottery/operations-and-runtime.md` | `docs/runtime/overview.md` | `RUNTIME_DEPENDENCY` | activation or draw lifecycle | state and incident receipt | `INT-EP7-014/015` | legal-safe release and runtime authority | blocked / `EVID-EP7-0016` | Public operation blocked. | `SOURCE_SIDE_ONLY` | Runtime side is generic. |
| `INTG-EP8-0023` | Lottery | Tokenomics | `docs/lottery/tokenomics-alignment.md` | `docs/tokenomics/overview.md` | `ECONOMIC_FLOW` | possible token eligibility or payment | no action without policy | `INT-EP7-011/013` | legal, economic, Treasury, Governance | blocked / `EVID-EP7-0016/0019` | No token incentive or issuance claim. | `SOURCE_SIDE_ONLY` | Tokenomics side lacks Lottery-specific boundary. |
| `INTG-EP8-0024` | Lottery | Treasury | `docs/lottery/treasury-and-fees.md` | `docs/treasury/overview.md` | `ECONOMIC_FLOW` | prize or fee request | authorized instruction or rejection | `INT-EP7-012/013` | legal, Treasury, Governance | blocked / `EVID-EP7-0003/0016` | Custody, prize, and operation unverified. | `SOURCE_SIDE_ONLY` | Treasury side is generic. |
| `INTG-EP8-0025` | Marketplace | ACS | `docs/marketplace/acs-integration.md` | `docs/acs/overview.md` | `REVIEW` | asset/listing review request | advisory risk result | `INT-EP7-006/007` | Marketplace listing authority | conceptual/prototype / `EVID-EP7-0008/0012` | ACS cannot list or remove autonomously. | `SOURCE_SIDE_ONLY` | ACS side lacks Marketplace contract. |
| `INTG-EP8-0026` | Marketplace | Runtime | `docs/marketplace/overview.md` | `docs/runtime/overview.md` | `RUNTIME_DEPENDENCY` | publication lifecycle | state and receipt | `INT-EP7-009/014/015` | Marketplace operator when enabled | incomplete / `EVID-EP7-0012` | Commercial operation unverified. | `INTERFACE_UNCONFIRMED` | No dedicated bilateral runtime page. |
| `INTG-EP8-0027` | Marketplace | Treasury | `docs/marketplace/treasury-alignment.md` | `docs/treasury/overview.md` | `ECONOMIC_FLOW` | settlement or fee request | decision/instruction | `INT-EP7-012/013` | Treasury and listing policy authority | blocked / `EVID-EP7-0003/0012` | Settlement and custody unverified. | `SOURCE_SIDE_ONLY` | Treasury side is generic. |
| `INTG-EP8-0028` | Mining | ACS | `docs/mining/acs-integration.md` | `docs/acs/overview.md` | `MONITORING` | telemetry or risk signal | alert/recommendation | `INT-EP7-006/007` | Mining owner and incident authority | unconfirmed / `EVID-EP7-0008/0015` | No 24/7 production claim. | `SOURCE_SIDE_ONLY` | Production telemetry is unverified. |
| `INTG-EP8-0029` | Mining | Runtime | `docs/mining/infrastructure-and-operations.md` | `docs/runtime/overview.md` | `RUNTIME_DEPENDENCY` | infrastructure lifecycle | state/incident receipt | `INT-EP7-014/015` | Mining and runtime authority | unconfirmed / `EVID-EP7-0015` | Ownership and operation unresolved. | `INTERFACE_UNCONFIRMED` | No verified provider contract. |
| `INTG-EP8-0030` | Mining | Treasury | `docs/mining/treasury-alignment.md` | `docs/treasury/overview.md` | `ECONOMIC_FLOW` | cost/revenue request | decision/instruction | `INT-EP7-012/013` | Mining, Treasury, Governance | blocked / `EVID-EP7-0003/0015` | Cost, revenue, custody unverified. | `SOURCE_SIDE_ONLY` | Treasury side is generic. |
| `INTG-EP8-0031` | Tokenomics | Runtime | `docs/tokenomics/contract-dependencies.md` | `docs/runtime/overview.md` | `RUNTIME_DEPENDENCY` | authorized economic instruction | contract/provider result | `INT-EP7-013/015` | economic and runtime authority | blocked / `EVID-EP7-0019` | Contract existence is not activation. | `INTERFACE_UNCONFIRMED` | No enabled executor exists. |
| `INTG-EP8-0032` | Tokenomics | Treasury | `docs/tokenomics/treasury-alignment.md` | `docs/treasury/tokenomics-alignment.md` | `ECONOMIC_FLOW` | issuance/distribution proposal | authorized instruction or rejection | `INT-EP7-012/013` | Treasury, Tokenomics, Governance | blocked / `EVID-EP7-0003/0019` | Issuance and distribution unverified. | `SYMMETRIC_WITH_QUALIFICATION` | Authority instance remains unresolved. |
| `INTG-EP8-0033` | Trading | ACS | `docs/trading/acs-trinity-integration.md` | `docs/acs/overview.md` | `MONITORING` | strategy or risk signal | advisory result/local hold | `INT-EP7-006/007` | Trading owner and risk authority | prototype/blocked / `EVID-EP7-0008/0014` | No live trading enforcement. | `SOURCE_SIDE_ONLY` | ACS side lacks Trading-specific status. |
| `INTG-EP8-0034` | Trading | Runtime | `docs/trading/architecture.md` | `docs/runtime/overview.md` | `RUNTIME_DEPENDENCY` | strategy execution request | provider result/receipt | `INT-EP7-014/015` | Trading, provider, financial authority | blocked / `EVID-EP7-0014` | Provider/exchange gates closed. | `INTERFACE_UNCONFIRMED` | Execution transport unverified. |
| `INTG-EP8-0035` | Trading | Treasury | `docs/trading/treasury-alignment.md` | `docs/treasury/trading-alignment.md` | `ECONOMIC_FLOW` | risk/allocation request | decision/instruction | `INT-EP7-012/013` | Trading, Treasury, Governance | blocked / `EVID-EP7-0003/0014` | No custody or financial execution. | `SYMMETRIC_WITH_QUALIFICATION` | Operational state requires one qualifier. |
| `INTG-EP8-0036` | Treasury | Runtime | `docs/treasury/architecture.md` | `docs/runtime/overview.md` | `RUNTIME_DEPENDENCY` | authorized financial instruction | signer/provider result and receipt | `INT-EP7-013/014/015` | Treasury signer and runtime authority | blocked / `EVID-EP7-0003` | Signing and custody unverified. | `INTERFACE_UNCONFIRMED` | No active executor contract. |

## Freeze Decision

- `SYMMETRIC_CONFIRMED`: 1
- `SYMMETRIC_WITH_QUALIFICATION`: 10
- one-sided, generic, or unconfirmed: 25
- active integration inferred from symmetry: 0

REQ-02 through REQ-04 must trace claims, authority, status, and interfaces before
REQ-05 may align any public page.
