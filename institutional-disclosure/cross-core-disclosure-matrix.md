---
schema_version: "1.0.0"
document_id: "PRIV-GDE-015"
aliases: []
document_type: "REFERENCE"
title: "Cross-Core Disclosure Matrix"
summary: "Private authoritative matrix for public, academic, institutional, operational, and economic disclosure boundaries across Academy, Marketplace, ACS, and Trading."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "EXPERIMENTAL"
maturity_level: "D1"
authority_scope: "DOCUMENTATION.PRIVATE_DISCLOSURE"
authority_level: "PROJECT"
author: "Axodus Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: []
business_reviewers: []
security_reviewers: []
approver: null
created_date: "2026-07-08"
last_updated: "2026-07-08"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: []
related_adrs: []
related_cores: ["ACADEMY", "MARKETPLACE", "ACS", "TRADING", "DOCUMENTATION", "GOVERNANCE", "SECURITY", "TREASURY", "TOKENOMICS", "LEGAL"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Cross-Core Disclosure Matrix

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| public_documentation_mutation | NOT_AUTHORIZED |
| public_sanitization | NOT_AUTHORIZED |
| academic_paper_update | NOT_AUTHORIZED |
| institutional_publication | NOT_AUTHORIZED |
| investor_use | NOT_AUTHORIZED |
| fundraising_use | NOT_AUTHORIZED |
| legal_approval | NOT_GRANTED |
| production_enablement | false |
| provider_activation | false |
| exchange_api_activation | false |
| wallet_signing | false |
| contract_writes | false |
| financial_execution | false |
| public_api_change | false |
| schema_change | false |
| runtime_interface_change | false |

## Purpose

This matrix is the private disclosure-classification reference for Academy,
Marketplace, ACS, and Trading. It identifies the maximum disclosure posture
that may be considered for each concept, the legal and sanitization
dependencies, ownership, and review triggers. A matrix classification is not
publication authorization.

## Scope

The matrix covers:

- Academy competence, reward, certification, treasury, and access mechanics.
- Marketplace discovery, commerce, settlement, licensing, and royalty mechanics.
- ACS accountability, agent governance, permissioning, veto, and execution mechanics.
- Trading education, account control, promotion, licensing, strategy, connector,
  allocation, and risk mechanics.

It governs classification and decision routing only. It does not edit public
documentation, approve an academic-paper update, create investor or fundraising
material, grant legal approval, or enable execution.

## Disclosure Domains

| Domain | Matrix meaning |
| --- | --- |
| PUBLIC_DOCUMENTATION | Public repository prose and navigation; only approved abstraction is eligible |
| ACADEMIC_PAPER | Research-level abstraction without operational or financial mechanics |
| INSTITUTIONAL_PUBLIC | Controlled external institutional disclosure after explicit review and authorization |
| PRIVATE_TRACK_B | Internal operational governance, security, permissioning, topology, and execution design |
| PRIVATE_TRACK_C | Internal tokenomics, revenue, treasury, reward, fee, royalty, settlement, and financial design |
| INVESTOR_MATERIAL | Prohibited under the current gate; requires a separate authorization path |
| FUNDRAISING_MATERIAL | Prohibited under the current gate; requires a separate authorization path |
| LEGAL_REVIEW | Required routing for legal-sensitive publication or execution decisions |
| PRODUCTION_DISCLOSURE | Prohibited while production and operational gates remain closed |

Disclosure-state meanings:

- ALLOWED_ABSTRACT: concept-level language only; no private mechanics, numbers,
  thresholds, providers, formulas, or enabled-execution claims.
- ALLOWED_WITH_REVIEW: eligible only after the named owners review the exact
  wording and a separate disclosure request authorizes the target surface.
- PRIVATE_ONLY: may be governed internally but must not enter external surfaces.
- PROHIBITED: not eligible in the target domain under this standard.
- NOT_APPLICABLE: the concept does not belong to that private track or target.
- UNDEFINED: classification remains unresolved and must not be externalized.

## Core-by-Core Matrix

### Academy

| Core | Concept or Mechanic | Public Documentation | Academic Paper | Institutional Public | Private Track B | Private Track C | Investor Material | Fundraising Material | Legal Review | Sanitization Status | Boundary Blocker | Owner | Review Trigger | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Academy | competence gateway | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | NO | Documentation Core / Academy / Governance | Changes to access enforcement or competence thresholds | Public language may describe readiness, never private thresholds |
| Academy | epistemic self-determination | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | NO | Documentation Core / Academy | Changes to assessment or access consequences | Optional learning and direct validation may remain conceptual |
| Academy | certification | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | IF_EXTERNAL_CREDENTIAL_CLAIM_EXPANDS | Documentation Core / Academy / Governance | Credential claims affect rights, access, or external recognition | Do not imply accreditation or legal recognition |
| Academy | generic education rewards | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXTERNAL_USE | MONITOR_ONLY | IF_REWARD_BECOMES_FINANCIAL_PROMISE | Documentation Core / Academy / Tokenomics / Legal | Token, redemption, yield, or cash-equivalent language appears | Abstract participation recognition is distinct from economic mechanics |
| Academy | $Neurons mechanics | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | IF_PRIVATE_FLOW_OR_NUMBER_IS_EXPOSED | Documentation Core / Academy / Tokenomics / Treasury / Legal | Any public token utility, emission, release, or redemption reference | Current public generic utility exceeds the stricter boundary |
| Academy | locked rewards | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | IF_LOCK_OR_REDEMPTION_FLOW_IS_EXPOSED | Documentation Core / Academy / Tokenomics / Treasury / Legal | Any public lock, unlock, claim, wallet, or spendable-state detail | Current public flow vocabulary requires a separate decision |
| Academy | reward-flow states | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | IF_LOCKED_UNLOCKED_CLAIMED_OR_WALLET_FLOW_IS_EXPOSED | Documentation Core / Academy / Tokenomics / Treasury / ACS / Legal | Any public state transition, claim, wallet, or Marketplace-spendable reference | Current public locked, unlocked, claimed, and spendable vocabulary requires a decision |
| Academy | POK Minter | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXTERNAL_USE | MONITOR_ONLY | IF_OPERATIONAL_MINTING_MECHANIC_IS_EXPOSED | Documentation Core / Academy / Tokenomics / Treasury / Governance | Any named minter, budget, cadence, signer, or distribution reference | Generic PoK language may remain monitored; operational mechanics stay private |
| Academy | ACS release veto | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | NOT_REQUIRED | YES_IF_CRITERIA_OR_AUTOMATION_IS_EXPOSED | Academy / ACS / Governance / Security / Treasury | Any external veto criterion, automated restriction, or release-enforcement claim | Criteria and approval flow remain private |
| Academy | central treasury alignment | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | NOT_REQUIRED | YES_IF_ROUTING_OR_RESERVE_MECHANIC_IS_EXPOSED | Treasury / Governance / Academy / Legal | Treasury structure, reserve assets, routing, or concentration changes | High-level accountability is separable from treasury design |
| Academy | tutor redemption | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | YES_IF_PAYOUT_OR_RESERVE_MECHANIC_IS_EXPOSED | Treasury / Academy / Governance / Legal | Any public tutor settlement, redemption, asset, cap, or reserve reference | Existing course-commerce settlement adjacency requires a decision |
| Academy | dividends, APR, and revenue distribution | PROHIBITED | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | MONITOR_ONLY | YES_IF_PROMISE_OR_APPROVAL_CLAIM_APPEARS | Legal / Treasury / Governance / Tokenomics | Any dividend, APR, yield, profit, return, or distribution language | Terms remain unresolved and blocked from external use |
| Academy | tenant access passports | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | YES_IF_PRIVATE_ENFORCEMENT_IS_EXPOSED | Academy / Governance / Security / Documentation Core | Access limits, enforcement criteria, or certification thresholds change | Public language may describe tenant readiness only |

### Marketplace

| Core | Concept or Mechanic | Public Documentation | Academic Paper | Institutional Public | Private Track B | Private Track C | Investor Material | Fundraising Material | Legal Review | Sanitization Status | Boundary Blocker | Owner | Review Trigger | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Marketplace | product discovery | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | NO | Documentation Core / Marketplace | Discovery ranking or commercial mechanics change | Public framing may describe discovery and visibility |
| Marketplace | catalog and storefront | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | NO | Documentation Core / Marketplace | Product eligibility, listing authority, or tenant scope changes | Storefront architecture may remain conceptual |
| Marketplace | dynamic pricing | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXTERNAL_USE | MONITOR_ONLY | YES_IF_FORMULA_OR_PROVIDER_IS_EXPOSED | Marketplace / Treasury / Governance / Legal | Pricing formula, auction rule, oracle, or financial claim changes | Only generic price adaptation is public-safe |
| Marketplace | tenant curation | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | YES_IF_PRIVATE_APPROVAL_RULE_IS_EXPOSED | Marketplace / Governance / Documentation Core | Tenant approval, moderation, or commercial control changes | Curation may remain conceptual |
| Marketplace | $Neurons payments | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | YES_IF_ASSET_OR_PAYMENT_FLOW_IS_EXPOSED | Marketplace / Tokenomics / Treasury / Legal / Documentation Core | Any public token-specific payment or accepted-asset reference | Current public payment utility requires a separate decision |
| Marketplace | treasury routing | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | REQUIRED | YES_IF_ROUTE_OR_PERCENTAGE_IS_EXPOSED | Treasury / Marketplace / Governance / Legal | Routing fields, percentages, destination, or reserve logic changes | Current treasury-facing language exceeds the strict boundary |
| Marketplace | fees and commissions | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | YES_IF_RATE_OR_SPLIT_IS_EXPOSED | Marketplace / Treasury / Business / Legal | Any public fee, commission, percentage, or split reference | Current structured fee and commission language requires a decision |
| Marketplace | seller settlement | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | REQUIRED | YES_IF_PAYOUT_FORMULA_OR_ASSET_IS_EXPOSED | Marketplace / Treasury / Governance / Legal | Payout fields, origin routing, reserve, or settlement formula changes | Current payout-field references exceed the strict boundary |
| Marketplace | royalties | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | YES_IF_RATE_OR_ENTITLEMENT_IS_EXPOSED | Marketplace / Business / Treasury / Legal | Any public royalty, rate, entitlement, or ongoing payment claim | Current royalty references connect to private licensing economics |
| Marketplace | locked rewards and internal credits | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | YES_IF_LOCKED_VALUE_OR_SPENDABLE_UTILITY_IS_EXPOSED | Marketplace / Academy / Tokenomics / Treasury / Legal | Any public locked reward, credit, claim, or internal-utility reference | Current public reward and credit language requires a decision |
| Marketplace | accepted assets and multi-asset payments | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | YES_IF_ASSET_LIST_OR_PAYMENT_FLOW_IS_EXPOSED | Marketplace / Treasury / Integrations / Legal | Any accepted asset, conversion, payment utility, or settlement reference | Current public asset and payment references require a decision |
| Marketplace | price oracle | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | NOT_REQUIRED | YES_IF_PROVIDER_OR_CONVERSION_RULE_IS_EXPOSED | Marketplace / Integrations / Treasury / Security | Provider selection, fallback, conversion, or activation changes | Provider and conversion details remain unresolved and private |
| Marketplace | licensed modular deployment | PRIVATE_ONLY | ALLOWED_ABSTRACT | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXTERNAL_USE | MONITOR_ONLY | YES_IF_COMMERCIAL_TERM_IS_EXPOSED | Marketplace / Business / Governance / Legal | License scope, tenant deployment, fee, or product claim changes | Academic abstraction may discuss modularity, not licensing economics |
| Marketplace | continuous royalty model | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | YES_IF_RATE_OR_CONTINUING_ENTITLEMENT_IS_EXPOSED | Marketplace / Business / Treasury / Legal | Any recurring royalty, duration, basis, or settlement detail appears | Existing public royalty language requires a separate decision |

### ACS

| Core | Concept or Mechanic | Public Documentation | Academic Paper | Institutional Public | Private Track B | Private Track C | Investor Material | Fundraising Material | Legal Review | Sanitization Status | Boundary Blocker | Owner | Review Trigger | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACS | accountability | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | NO | Documentation Core / ACS / Governance | Authority, audit, or execution language changes | Human accountability and receipts may remain conceptual |
| ACS | anomaly detection | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | YES_IF_PRIVATE_HEURISTIC_IS_EXPOSED | ACS / Security / Documentation Core | Thresholds, fraud criteria, or automatic enforcement changes | Public language may describe risk awareness only |
| ACS | Smith, Morpheus, and Trinity conceptual roles | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | MONITOR_ONLY | YES_IF_ROLE_IMPLIES_FINAL_OR_FINANCIAL_AUTHORITY | ACS / Governance / Trading / Documentation Core | Role authority, financial execution, or veto wording changes | Trinity operational framing requires continued monitoring |
| ACS | RedHat | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | YES_IF_NAME_OR_ROLE_IS_EXPOSED | ACS / Security / Governance | Any external RedHat name, role, level, or execution reference | No public RedHat reference is currently present |
| ACS | L1-L4 permissioning | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | YES_IF_MODEL_OR_MAPPING_IS_EXPOSED | ACS / Security / Governance | Permission labels, mappings, approval workflow, or authority change | Generic public permissions must not map to L1-L4 |
| ACS | private veto heuristics | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | NOT_REQUIRED | YES | ACS / Security / Governance / Legal | Any criterion, automated restriction, fraud, or account heuristic changes | Direct exposure is a boundary blocker |
| ACS | override semantics | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | NOT_REQUIRED | YES_IF_SPECIFIC_AUTHORITY_OR_FLOW_IS_EXPOSED | ACS / Governance / Security | Smith, DAO, or human override authority changes | Public governance language must remain advisory |
| ACS | no-silent-drift mechanics | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | YES_IF_IMPLEMENTATION_MECHANIC_IS_EXPOSED | ACS / Governance / Documentation Core | Drift detection, override recording, or enforcement changes | High-level change control is public-safe; mechanics are not |
| ACS | immutable logging specifics | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | YES_IF_BACKEND_OR_SCHEMA_IS_EXPOSED | ACS / Security / Accountability | Backend, schema, retention, integrity, or access policy changes | Public auditability must remain implementation-neutral |
| ACS | local versus in-Axodus execution | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | NOT_REQUIRED | YES_IF_TOPOLOGY_OR_ACTIVATION_IS_EXPOSED | ACS / Security / Architecture | Runtime location, root permission, provider, or deployment changes | Execution topology remains private and non-production |
| ACS | custom-agent generation | PRIVATE_ONLY | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXTERNAL_USE | MONITOR_ONLY | YES_IF_PRICING_OR_EXECUTION_BOUNDARY_IS_EXPOSED | ACS / Business / Academy / Marketplace / Documentation Core | Productization, pricing, Agent Mariana, or sub-agent boundary changes | Research may discuss specialization, not commercialization or execution |

### Trading

| Core | Concept or Mechanic | Public Documentation | Academic Paper | Institutional Public | Private Track B | Private Track C | Investor Material | Fundraising Material | Legal Review | Sanitization Status | Boundary Blocker | Owner | Review Trigger | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Trading | risk education | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | NO | Trading / Academy / Legal / Documentation Core | Advice, return, product, or execution framing changes | Cautionary education must not become investment advice |
| Trading | automated trading accountability | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | MONITOR_ONLY | YES_IF_LIVE_EXECUTION_IS_CLAIMED | Trading / ACS / Governance / Legal | Automation, performance, execution, or authority wording changes | Oversight and telemetry may remain conceptual |
| Trading | user-owned exchange accounts | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | NOT_REQUIRED | YES_IF_CUSTODY_OR_MANAGED_ACCOUNT_IS_IMPLIED | Trading / Security / Legal / Documentation Core | Custody, funding, connector, or account-control language changes | Public-safe only as a conditional user-control principle |
| Trading | non-custodial-by-default | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | NOT_REQUIRED | YES_IF_CUSTODY_GUARANTEE_IS_CLAIMED | Trading / Security / Legal | Custody topology, recovery, protection, or liability language changes | No custody guarantee or enabled product claim is permitted |
| Trading | least-privilege integrations | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | NOT_REQUIRED | NOT_REQUIRED | YES_IF_PRIVATE_PERMISSION_OR_ACTIVATION_FLOW_IS_EXPOSED | Trading / Security / Integrations | Permission, storage, provider, or activation mechanics change | Generic revocation and restricted permissions are public-safe |
| Trading | USD 100 promotional cap | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | NOT_REQUIRED | YES_IF_CAP_OR_REACTIVATION_RULE_IS_EXPOSED | Trading / Business / Governance / Legal | Any cap, balance, withdrawal, reactivation, or conversion reference | No public direct exposure is currently present |
| Trading | licensing fee | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | NOT_REQUIRED | YES_IF_FEE_OR_PAID_TRANSITION_IS_EXPOSED | Trading / Business / Treasury / Legal | Fee, license, tier, or paid-transition decision changes | Exact fee remains unresolved and private |
| Trading | performance commission | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | NOT_REQUIRED | YES_IF_COMMISSION_OR_RETURN_LINK_IS_EXPOSED | Trading / Business / Treasury / Legal | Commission basis, rate, performance, settlement, or return framing changes | Percentage and formula remain unresolved |
| Trading | LLM provider-key flow | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | NOT_REQUIRED | YES_IF_ONBOARDING_STORAGE_OR_PROVIDER_IS_EXPOSED | Trading / Security / Integrations | Provider, storage, onboarding, telemetry, or activation changes | Generic exchange-key safety does not authorize this private flow |
| Trading | exchange connector flow | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | MONITOR_ONLY | YES_IF_PROVIDER_STEPS_OR_ACTIVATION_IS_EXPOSED | Trading / Security / Integrations / Legal | Provider list, connector steps, permission scope, or activation changes | Generic connector references are monitored; specific flow is private |
| Trading | tenant allocation mechanics | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | NOT_REQUIRED | YES_IF_PERCENTAGE_OR_GOVERNANCE_RULE_IS_EXPOSED | Trading / Governance / Treasury / Legal | Allocation percentages, rebalance authority, custody, or tenant model changes | Client-defined allocation and formulas remain private |
| Trading | private ACS veto criteria | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | NOT_REQUIRED | YES | Trading / ACS / Security / Governance / Legal | Any veto, pause, anomaly, fraud, or enforcement criterion changes | Direct exposure is a boundary blocker |
| Trading | Trinity strategy logic | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_EXECUTION | NOT_REQUIRED | YES_IF_ALGORITHM_SIGNAL_OR_TIMING_IS_EXPOSED | Trading / ACS / Security | Strategy, signal, timing, generation, or sub-agent topology changes | Public Trinity role remains conceptual only |
| Trading | result-sharing incentives | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | NOT_REQUIRED | YES_IF_BONUS_OR_PROMOTIONAL_RETURN_IS_EXPOSED | Trading / Business / Legal / Governance | Sharing, bonus, referral, result, or promotional claim changes | Optional sharing and incentive mechanics remain private |
| Trading | leverage and risk classification | ALLOWED_ABSTRACT | ALLOWED_ABSTRACT | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | NOT_APPLICABLE | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | MONITOR_ONLY | YES_IF_NUMERIC_RANGE_OR_APPROVAL_IS_EXPOSED | Trading / Governance / Legal / Security | Threshold, leverage range, loss limit, exposure, or product status changes | Public language must remain non-numeric and cautionary |
| Trading | $Neurons-linked access eligibility | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | YES_IF_TOKEN_ACCESS_POLICY_IS_PRESENTED_AS_APPROVED | Trading / Tokenomics / Governance / Legal / Documentation Core | Any token balance, status, sale, or access-condition reference | Current public references require a separate sanitization decision |
| Trading | promotional, subscription, and tier access | PRIVATE_ONLY | PROHIBITED | PRIVATE_ONLY | ALLOWED_WITH_REVIEW | ALLOWED_WITH_REVIEW | PROHIBITED | PROHIBITED | REQUIRED_BEFORE_PUBLICATION | REQUIRED | YES_IF_COMMERCIAL_PATH_IS_PRESENTED_AS_FINAL | Trading / Business / Governance / Legal / Documentation Core | Any campaign, subscription, tier, milestone, or paid-conversion language | Current combined framing may imply an approved commercial path |

## Cross-Core Sensitive Themes

| Theme | Cross-core classification | Consistency decision |
| --- | --- | --- |
| $Neurons utility and access | PRIVATE_ONLY when tied to payments, rewards, redemption, or access policy | Academy, Marketplace, and Trading current public references require separate decisions; ACS is not applicable |
| Rewards and locked value | ALLOWED_ABSTRACT only when non-financial; otherwise PRIVATE_ONLY | Generic participation recognition differs from locked, claimable, redeemable, or spendable value |
| Fees, commissions, royalties, and revenue | PRIVATE_ONLY and legal-sensitive | Marketplace has current public sanitization findings; Trading fee and commission specifics remain unexposed |
| Treasury, settlement, and redemption | PRIVATE_ONLY | Academy and Marketplace current adjacency requires sanitization decisions; formulas and routes are blockers if exposed |
| ACS and Trinity roles | ALLOWED_ABSTRACT for advisory oversight; private criteria and logic remain PRIVATE_ONLY | ACS and Trading both classify operationally suggestive role language as MONITOR_ONLY |
| Permissions and least privilege | ALLOWED_ABSTRACT for generic safety; private level models and activation flows remain PRIVATE_ONLY | Trading credential safety is acceptable; ACS public permission labels remain monitored because they describe broader authority |
| Risk and leverage | ALLOWED_ABSTRACT and non-numeric | Trading requires legal review before publication of expanded framing; private thresholds remain prohibited |
| Dynamic pricing and oracle behavior | ALLOWED_ABSTRACT only for generic adaptation | Algorithms, providers, auctions, formulas, conversion, and activation remain private |

## Cross-Core Consistency Check

| Check | Evidence | Conflict status | Resolution |
| --- | --- | --- | --- |
| Terms classified differently across cores | Generic rewards, permissions, least privilege, Trinity, pricing, and access have context-dependent classifications | DOCUMENTED_CONTEXT_DIFFERENCE | Generic abstractions may be public; economic, authority, provider, or execution mechanics use the stricter PRIVATE_ONLY state |
| Public docs versus private baselines | Academy has 4, Marketplace 8, and Trading 2 public findings beyond their stricter private public-safe boundaries; ACS has 0 | ABSTRACTION_DRIFT | Preserve findings and require separate decision requests; no remediation occurs here |
| Boundary-review conflicts | No audit disagrees about direct leakage, blockers, or closed gates | NONE | Retain the existing finding classifications |
| Legal-review consistency | Prior audits found no active public legal-sensitive claim, while this matrix requires prospective review before specified external use, publication, or execution | NO_CONFLICT | Current-finding classification and future-use dependency are separate decisions |
| Sanitization consistency | Academy, Marketplace, and Trading have REQUIRED findings; ACS is MONITOR_ONLY or NOT_REQUIRED | NO_CONFLICT | Preserve core-specific evidence rather than forcing equal outcomes |
| Missing owners | Every matrix row identifies at least one Core or functional owner | NONE | Documentation Core maintains completeness |
| Missing review triggers | Every matrix row defines an event-driven trigger | NONE | New evidence or architecture changes reopen review |
| Undefined disclosure states | No external target is assigned UNDEFINED in this version | NONE | Unresolved parameters remain PRIVATE_ONLY and use the approved TBD marker in source artifacts |

Terms with intentionally different treatment:

- Generic education rewards may be ALLOWED_ABSTRACT, while token-denominated,
  locked, redeemable, or spendable reward mechanics are PRIVATE_ONLY.
- Trading least-privilege credential guidance is ALLOWED_ABSTRACT, while ACS
  authority levels, provider-key onboarding, and private permission mappings
  remain MONITOR_ONLY or PRIVATE_ONLY.
- Trinity may be named conceptually, but financial execution, strategy logic,
  signals, timing, sub-agent topology, and veto coordination remain private.
- Dynamic pricing may be described abstractly, but algorithms, auction rules,
  oracle providers, conversions, and settlement formulas remain private.
- User-controlled and non-custodial principles may be public abstractions, but
  connector steps, provider activation, funding flows, and custody claims are
  not.

## Academic Paper Boundaries

Academic-paper eligibility is limited to approved conceptual abstractions:

- competence and epistemic self-determination;
- product discovery and modular architecture without commercial economics;
- accountability, anomaly detection, explainability, and conceptual agents;
- risk education, user control, non-custodial principles, least privilege, and
  automated-operation accountability.

The paper must exclude named or detailed token mechanics, reward release,
treasury routing, settlement, fees, commissions, royalties, RedHat, L1-L4,
veto criteria, override flows, execution topology, promotional caps, provider
flows, strategy logic, allocation formulas, leverage thresholds, performance,
returns, and enabled-production claims. Academic-paper update remains
unauthorized by this matrix.

## Investor and Fundraising Boundaries

Investor and fundraising use is PROHIBITED for every matrix row under the
current gate. No matrix classification is a projection, promise, offering,
performance statement, economic entitlement, or authorization to prepare
external materials. Any future request requires explicit governance
authorization, source-level review, legal review, and a separate approved
artifact set.

## Legal Review Dependencies

Legal review is required before:

- external use of token, reward, treasury, redemption, payment, commercial
  licensing, or custom-agent commercialization framing;
- publication of dividends, APR, yield, revenue distribution, fees,
  commissions, royalties, leverage, automated trading, custody, performance,
  access eligibility, or automated-restriction framing;
- execution of treasury routing, settlement, redemption, veto, override,
  provider, connector, tenant allocation, or financial automation.

Legal review does not grant technical, governance, publication, or production
authority. No legal approval is recorded in this matrix.

## Sanitization Status

| Core | REQUIRED | MONITOR_ONLY | Current decision |
| --- | ---: | ---: | --- |
| Academy | 4 public findings | Cross-core tokenomics and adjacent legal language | Separate decision request required before any public edit |
| Marketplace | 8 public findings | Dynamic pricing and licensed modularity | Separate decision request required before any public edit |
| ACS | 0 public findings | 8 conceptual, permission, runtime, and absence controls | No current sanitization required; continue monitoring |
| Trading | 2 public findings | 7 conceptual, connector, risk, automation, and reporting areas | Separate decision request required before any public edit |

The counts summarize existing boundary audits, not the number of matrix rows.
No sanitization is performed or authorized here.

## Boundary Blockers

The following conditions block disclosure:

- any institutional-disclosure path, private filename, or private ID appears in
  a public, academic, investor, fundraising, navigation, manifest, or generated
  surface;
- a private numeric threshold, rate, formula, percentage, provider, route,
  algorithm, signal, timing rule, veto criterion, permission mapping, or
  execution topology appears externally;
- public text claims legal approval, guaranteed profit, investment return,
  yield, live autonomous execution, provider activation, exchange activation,
  wallet signing, contract writes, or financial execution;
- a row has UNDEFINED classification for its intended external target;
- a disclosure decision lacks an owner, review trigger, or required approval.

No current boundary blocker was found by the source audits.

## Ownership and Review Triggers

| Authority | Matrix responsibility |
| --- | --- |
| Documentation Core | Classification, repository enforcement, boundary scans, and public-change authorization evidence |
| Core Owner | Technical and operational accuracy for Academy, Marketplace, ACS, or Trading |
| Security | Permissioning, credentials, providers, topology, execution, logging, and security-sensitive mechanics |
| Governance | Authority, veto, override, access, allocation, and political-control mechanics |
| Treasury | Treasury, redemption, settlement, revenue, reserve, and distribution mechanics |
| Tokenomics | Token, reward, emission, lock, utility, and economic-system mechanics |
| Legal | Investment, revenue, APR, royalty, leverage, custody, automated restriction, and external commercial framing |
| Documentation Coordinator or established project authority | Final approval after all required reviewers complete their decisions |

Review is event-driven. Triggers include changes to public text, academic-paper
scope, core architecture, tokenomics, fees, treasury, providers, permissions,
execution status, legal posture, production gates, boundary audit findings, or
generator exclusion behavior.

## Gate Preservation

This request created private cross-core disclosure governance artifacts only. It did not sanitize or modify public documentation, update the academic paper, create investor or fundraising material, authorize public disclosure, claim legal approval, change public APIs, schemas or runtime interfaces, enable production, activate providers or exchanges, perform wallet signing, write contracts, perform financial execution or open operational gates.

Public sanitization, public documentation mutation, academic-paper update,
investor use, fundraising use, and public disclosure remain unauthorized.
Legal approval is not granted. Production, provider activation, exchange API
activation, wallet signing, contract writes, and financial execution remain
disabled. Public APIs, schemas, and runtime interfaces remain unchanged.
Financial gates remain preserved closed.
