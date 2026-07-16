---
schema_version: "1.0.0"
document_id: "DOC-RPT-194"
aliases: []
document_type: "REPORT"
title: "EPIC-08 Claim Traceability Register"
summary: "Links material public claim families to canonical sources, authority, evidence, status, boundaries, and dispositions."
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
related_requirements: ["DOCUMENTATION-EPIC-08-REQ-02"]
related_adrs: []
related_cores: ["AXODUS", "BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "GOVERNANCE", "MINING", "LOTTERY", "TOKENOMICS", "TRADING", "TREASURY", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-08-CLAIM-TRACEABILITY-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-08 Claim Traceability Register

## Materiality Rule

All 269 public Markdown pages were scanned. Rows consolidate materially
equivalent assertions at section/family level. A claim is material when it can
change interpretation of identity, capability, integration, authority,
execution, runtime state, finance, security, compliance, activation, or
production.

| Claim ID | Claim | Public Source | Canonical Source | Nuclei | Category | Authority Source | Evidence | Implementation / Activation / Maturity | Boundary | Qualifier | Disposition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `CLAIM-EP8-0001` | Axodus is a governed modular ecosystem and operational infrastructure. | `docs/overview/ecosystem-overview.md` | same | Axodus | `IDENTITY` | EPIC-07 concept freeze | `EVID-EP8-0002` | model / not activation / `F4` | public-safe | Preserve non-production framing. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0002` | Business transforms demand into governed delivery and reusable assets. | `docs/business/overview.md` | same | Business | `PRODUCT` | owner context and EPIC-07 freeze | `EVID-EP7-0004/0005` | mock model / not active service / `F4/F3` | public-safe with qualification | Separate mission from availability. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0003` | Business has one conceptual pipeline for internal and external demand. | `docs/business/request-intake.md` | `docs/business/runtime.md` | Business, Runtime | `EXECUTION` | Business process owner | `EVID-EP7-0005/0006` | prototype represented / not activated / `F3` | private data bounded | Use mock/read-only qualifier. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0004` | Trinity assists planning and estimation. | `docs/acs/trinity.md` | same | Business, ACS | `ARCHITECTURE` | Business human reviewer | `EVID-EP7-0004/0006` | directional interface / not activated / `F3` | advisory only | Transport and method unverified. | `RETAIN_AS_DIRECTIONAL` |
| `CLAIM-EP8-0005` | ACS analyzes, signals, and may create a local hold. | `docs/acs/overview.md` | same | ACS, Runtime | `SECURITY` | owning human/governance role | `EVID-EP7-0008/0009` | prototype verified / non-production / `F3` | no autonomous enforcement | Distinguish signal, hold, suspension, enforcement. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0006` | Governance decisions require a separately authorized executor and receipt. | `docs/governance/proposal-lifecycle.md` | same | Governance, Runtime | `GOVERNANCE` | scope-specific decision authority | `EVID-EP7-0013`, `EVID-EP8-0002` | model / active if verified / `F4` | decision is not execution | Preserve executor qualification. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0007` | Marketplace is a distribution channel, not Business replacement. | `docs/marketplace/overview.md` | same | Marketplace, Business | `IDENTITY` | Marketplace and Business owners | `EVID-EP7-0004/0012` | product model / commercial activation unverified / `F4/F2` | settlement gated | Preserve availability qualifier. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0008` | Marketplace can represent listings, licensing, and distribution flows. | `docs/marketplace/listing-model.md` | `docs/marketplace/overview.md` | Marketplace | `PRODUCT` | listing authority unresolved | `EVID-EP7-0012` | product surface / operation unverified / `F3` | rights and legal review | Use conceptual/if-enabled language. | `RETAIN_AS_DIRECTIONAL` |
| `CLAIM-EP8-0009` | Academy provides learning and scoped qualification evidence. | `docs/academy/overview.md` | `docs/academy/proof-of-knowledge.md` | Academy | `PRODUCT` | Academy owner; consumer decides effects | `EVID-EP7-0011` | intent/partial prototype / not active / `F3` | no automatic certification | Preserve scoped evidence wording. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0010` | Proof of Knowledge does not automatically grant governance or token effects. | `docs/academy/proof-of-knowledge.md` | same | Academy, Tokenomics, Governance | `AUTHORITY` | consuming authority | `EVID-EP7-0011/0019` | directional / blocked effects / `F3` | economic and authority gated | No automatic effect. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0011` | Academy rewards may exist only under implemented policy and contracts. | `docs/academy/token-reward-flows.md` | `docs/tokenomics/academy-rewards.md` | Academy, Tokenomics, Treasury | `TOKENOMICS` | economic authority unresolved | `EVID-EP7-0011/0019` | directional / distribution inactive / `F2` | financial boundary | Use future/if-approved terms. | `RETAIN_AS_DIRECTIONAL` |
| `CLAIM-EP8-0012` | Treasury defines custody and allocation concepts. | `docs/treasury/overview.md` | same | Treasury | `TREASURY` | Treasury and Governance model | `EVID-EP7-0003` | conceptual / not activated / `F3` | custody and signing unverified | Never imply active assets. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0013` | Treasury policy lists action classes and review requirements. | `docs/treasury/treasury-policy.md` | `docs/treasury/overview.md` | Treasury, Governance | `AUTHORITY` | draft policy, no final approver | `EVID-EP7-0003` | defined draft / not activated / `F3` | thresholds private/unfinalized | Label as draft framework. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0014` | Product economic effects require Treasury review and enabled execution. | `docs/overview/execution-model.md` | `docs/treasury/overview.md` | products, Treasury | `FINANCIAL` | Treasury/Governance authority | `EVID-EP7-0003`, `EVID-EP8-0002` | formally modeled / blocked / `F3` | financial gates closed | No movement or settlement claim. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0015` | Neurons contract artifacts can exist without active issuance or distribution. | `docs/tokenomics/utility-model.md` | `docs/tokenomics/overview.md` | Tokenomics | `TOKENOMICS` | economic authority unresolved | `EVID-EP7-0019` | artifact represented / activation unverified / `F3` | private tokenomics boundary | Separate artifact from enabled utility. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0016` | Token utility surfaces are future or conditional unless implementation and policy verify them. | `docs/tokenomics/utility-model.md` | `docs/tokenomics/overview.md` | Tokenomics, products | `ACTIVATION` | product/economic authorities | `EVID-EP7-0019` | directional / inactive / `F3` | no value expectation | Use may/if implemented. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0017` | Runtime standardizes lifecycle and evidence expectations across nuclei. | `docs/runtime/overview.md` | same | Runtime, all cores | `RUNTIME` | owning nucleus and runtime authority | `EVID-EP8-0002` | model/partial prototype / not integrated production / `F4/F3` | no authority transfer | Use operating discipline, not live bus. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0018` | Runtime provider adapters are closed. | `docs/runtime/overview.md` | `documentation/EPIC-07-INTERFACE-EVENT-DATA-REGISTER.md` | Runtime | `PRODUCTION` | provider/runtime authority absent | `EVID-EP8-0002` | not implemented/activated / `F2` | credentials and provider private | Preserve closed gate. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0019` | Mining describes infrastructure and product models, not active operation. | `docs/mining/overview.md` | same | Mining | `PRODUCT` | Mining owner pending evidence | `EVID-EP7-0015` | artifacts exist / operation unverified / `F3/F2` | financial and custody risk | Use concept/prototype. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0020` | Mining telemetry concepts do not prove continuous monitoring. | `docs/mining/monitoring-and-telemetry.md` | `docs/mining/overview.md` | Mining, ACS, Runtime | `RUNTIME` | Mining owner | `EVID-EP7-0015` | interface unconfirmed / inactive / `F2` | no 24/7 claim | Retain explicit negative qualifier. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0021` | Mining rewards, costs, or profitability are variable and unverified. | `docs/mining/costs-fees-and-profitability.md` | `docs/mining/overview.md` | Mining, Treasury | `FINANCIAL` | financial authority unresolved | `EVID-EP7-0015` | model / no active payout / `F2` | no return guarantee | Estimates only. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0022` | Trading strategy and connector artifacts do not prove live execution. | `docs/trading/overview.md` | same | Trading, Runtime | `EXECUTION` | product/provider authority absent | `EVID-EP7-0014` | prototype artifacts / inactive / `F3/F2` | exchange and custody gates | Explicitly non-production. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0023` | Trading monitoring or ACS support is conditional. | `docs/trading/acs-trinity-integration.md` | `docs/acs/overview.md` | Trading, ACS | `SECURITY` | Trading human/risk authority | `EVID-EP7-0008/0014` | conceptual/prototype / inactive / `F2` | no live enforcement | Use if implemented. | `RETAIN_AS_DIRECTIONAL` |
| `CLAIM-EP8-0024` | Lottery is a concept/prototype, not a licensed or public operation. | `docs/lottery/overview.md` | same | Lottery | `COMPLIANCE` | legal-safe release absent | `EVID-EP7-0016` | prototype artifacts / blocked / `F3/F2` | legal and consumer boundary | Preserve explicit block. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0025` | Lottery randomness and smart-contract mechanisms are conditional. | `docs/lottery/randomness-and-vrf.md` | `docs/lottery/overview.md` | Lottery | `SECURITY` | security/legal/release authority absent | `EVID-EP7-0016` | directional / not production / `F2` | no audit/VRF activation claim | Use if implemented and verified. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0026` | Lottery fees, prize pools, and payouts are model fields, not active financial flows. | `docs/lottery/treasury-and-fees.md` | `docs/lottery/overview.md` | Lottery, Treasury | `FINANCIAL` | legal/Treasury/Governance absent | `EVID-EP7-0016`, `EVID-EP7-0003` | model / blocked / `F2` | financial/legal gates | Conditional examples only. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0027` | Public documentation publication follows governed metadata and review. | `docs/overview/documentation-status.md` | repository governance | Documentation | `GOVERNANCE` | Documentation authority | `EVID-EP8-0001` | implemented pipeline / active locally / `F4` | publication status is not product state | Keep dimensions separate. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0028` | Security-sensitive actions are default-deny without authority. | `docs/acs/security-and-risk.md` | `docs/overview/cross-core-architecture.md` | ACS, all cores | `SECURITY` | security/governance authority | `EVID-EP7-0008/0009` | policy/prototype / production closed / `F4/F3` | secrets and controls private | No autonomous action. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0029` | Compliance language is review-bound and not legal approval. | `docs/overview/risk-notices.md` | same | all cores | `COMPLIANCE` | legal/compliance reviewer | `EVID-EP8-0002` | documentation rule / no approval / `F4` | legal boundary | Use subject-to-review. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0030` | Cross-core interfaces carry artifacts without transferring authority. | `docs/overview/cross-core-architecture.md` | same | all cores | `ARCHITECTURE` | EPIC-07 architecture freeze | `EVID-EP8-0002/0004` | model / interfaces vary / `F4/F2` | minimum necessary data | Qualify per interface state. | `TRACEABLE_WITH_QUALIFICATION` |
| `CLAIM-EP8-0031` | The portfolio is not one integrated production system. | `docs/overview/execution-model.md` | same | all cores | `PRODUCTION` | no production authority | `EVID-EP8-0002` | mixed prototypes / inactive portfolio / `F3` | all sensitive gates closed | Preserve explicit negative statement. | `FULLY_TRACEABLE` |
| `CLAIM-EP8-0032` | Implemented, activated, operational, and production are distinct states. | `docs/overview/terminology.md` | same | all cores | `ACTIVATION` | Documentation canonical terminology | `EVID-EP8-0002/0005` | terminology rule / not capability / `F4` | prevents maturity promotion | Apply to every material status claim. | `FULLY_TRACEABLE` |

## Coverage

All fourteen required claim categories are represented. The register freezes 32
material claim families; it does not authorize public remediation before the
REQ-04 manifest.
