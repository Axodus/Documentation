---
schema_version: "1.0.0"
document_id: "PRIV-RPT-023"
aliases: []
document_type: "REPORT"
title: "Marketplace Public Sanitization Decision"
summary: "Private decision report for the eight current Marketplace public sanitization finding groups."
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
created_date: "2026-07-13"
last_updated: "2026-07-13"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: ["MARKETPLACE-PUBLIC-SANITIZATION-DECISION-REQ-01"]
related_adrs: []
related_cores: ["MARKETPLACE", "ACADEMY", "TOKENOMICS", "TREASURY", "BUSINESS", "LEGAL"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Marketplace Public Sanitization Decision

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| request_id | MARKETPLACE-PUBLIC-SANITIZATION-DECISION-REQ-01 |
| execution_mode | DECISION_ONLY |
| final_decision | DEFERRED_PENDING_LEGAL |
| public_file_mutation | NOT_AUTHORIZED |
| public_sanitization | NOT_AUTHORIZED |
| authorized_correction_set | NONE |
| legal_review | REQUIRED_BEFORE_PUBLICATION |
| legal_approval | NOT_GRANTED |
| production | NOT_ENABLED |
| financial_gates | PRESERVED_CLOSED |

## Purpose

This report decides the treatment of the eight current Marketplace
`SANITIZATION_REQUIRED` finding groups. It freezes the reviewed public
occurrences, separates public-safe commerce abstractions from private economic
and operational mechanics, defines candidate target directions for Legal and
owner review, and records the conditions required before any decision may be
reopened.

This is a decision-only private record. It does not authorize a public edit,
sanitization execution, generated-artifact refresh, external use, legal
conclusion, commercial offer, or operational or financial enablement.

## Decision Authority

This report applies the Marketplace private baseline, the Academy and
Marketplace boundary consolidation audit and sanitization decision register,
and the cross-core disclosure matrix, governance standard, and sanitization
roadmap. The governing rows classify Marketplace token-specific payments,
treasury routing, fees, commissions, seller settlement, royalties, locked
rewards and internal credits, and accepted assets or multi-asset payments as
`PRIVATE_ONLY` for public documentation and `REQUIRED` for sanitization.

The standard requires Legal review before external use or publication of token
utility, locked rewards, settlement, payment assets, fees, commissions,
royalties, licensing, and recurring economic entitlements. Treasury and
settlement execution also remain subject to execution-level Legal review. A
classification expresses eligibility and routing; it is not publication,
commercial, technical, production, or financial authority.

Documentation Core owns the evidence freeze and repository boundary.
Marketplace owns product and transaction-interface accuracy. Tokenomics and
Academy own token, reward, credit, and utility accuracy. Treasury owns routing,
settlement, payout, liability, reserve, and reporting accuracy. Business owns
commercial and licensing accuracy. Governance owns policy and authority
accuracy. Integrations and Security own conversion and provider-boundary
accuracy without acquiring disclosure authority. Legal owns the exact-use
publication determination. No owner, including Legal, can independently
authorize public mutation or open a production or financial gate.

The reviewed repository state is commit
`24d1431f0546efa96a929896364749e214257d07`. No governed Marketplace Markdown,
root navigation, or VitePress source configuration changed after the Academy
and Marketplace boundary audit. The later generated master-index
reconciliation updated repository-wide counts and added unrelated records; it
did not change a Marketplace title or add an independent Marketplace mechanic.
Its current state is included in this freeze. The worktree was clean before
this report was created. The current evidence therefore does not require
corpus-change escalation.

## Source Findings

The Marketplace private baseline reviewed for this decision consists of:

- `institutional-disclosure/marketplace-private-architecture.md`
- `institutional-disclosure/marketplace-boundary-risk-review.md`
- `institutional-disclosure/marketplace-open-decisions.md`
- `institutional-disclosure/marketplace-licensing-and-royalty-notes.md`

The governing consolidation and cross-core records reviewed were:

- `institutional-disclosure/academy-marketplace-boundary-consolidation-audit.md`
- `institutional-disclosure/academy-marketplace-sanitization-decision-register.md`
- `institutional-disclosure/cross-core-disclosure-matrix.md`
- `institutional-disclosure/cross-core-disclosure-governance-standard.md`
- `institutional-disclosure/cross-core-sanitization-roadmap.md`

| Finding | Current state | Source conclusion |
| --- | --- | --- |
| MARKETPLACE-SAN-01 — `$Neurons` payment utility | STILL_PRESENT | Public Marketplace pages associate the token with Marketplace utility, payment, listing acceptance, and commerce policy. Conditional language does not satisfy the token-neutral public boundary. |
| MARKETPLACE-SAN-02 — treasury alignment and reporting | STILL_PRESENT | Public pages describe treasury-facing flows, allocation, liabilities, review, and reporting contexts beyond generic accountability. No route or percentage is treated as approved. |
| MARKETPLACE-SAN-03 — fee categories and routing | STILL_PRESENT | Public pages structure fees as commercial records, policies, fields, and routing contexts that may be read as live or approved terms. |
| MARKETPLACE-SAN-04 — royalties | STILL_PRESENT | Public royalty references overlap the private licensing and continuing-economic boundary even though no rate, duration, or entitlement is stated. |
| MARKETPLACE-SAN-05 — commissions | STILL_PRESENT | Public commission references overlap private partner, channel, and treasury-sensitive commercial policy. No split or rate is stated. |
| MARKETPLACE-SAN-06 — seller settlement and payout fields | STILL_PRESENT | Public pages describe settlement models, seller or tutor payout fields, release conditions, and reporting contexts beyond generic order completion. |
| MARKETPLACE-SAN-07 — locked rewards and internal utility | STILL_PRESENT | Public pages describe locked or restricted value, internal credits, spend or eligibility uses, liabilities, and policy fields rather than non-financial recognition alone. |
| MARKETPLACE-SAN-08 — payment and accepted-asset framing | STILL_PRESENT | Public pages describe payment methods, assets, payment records, conversions, checkout, and transaction states beyond a generic transaction interface. |

The current scan found no public private-artifact path or filename, private
provider selection, private conversion rule, private routing percentage,
private payout formula, private royalty term, private commission split,
approved asset list, guaranteed economic outcome, legal-approval claim, or
enabled-execution claim. The eight findings are abstraction-boundary and
legal-routing issues, not direct private-artifact leakage incidents or current
boundary blockers.

The expanded inventory below does not create a new finding group. It freezes
semantic occurrences that the earlier page-level register grouped under the
same eight findings.

## Public Occurrence Inventory

Line references freeze the governed Markdown and source-configuration files at
the reviewed commit. Multiple references on one line are one occurrence
context. Overlap is intentional where one context combines payment, fee,
reward, settlement, or treasury meaning. Page-title and navigation occurrences
are separated from substantive source contexts.

### MARKETPLACE-SAN-01 — `$Neurons` Payment Utility

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/marketplace/tokenomics-alignment.md` | 12; 16; 20; 32 | Marketplace utility, payment, listing acceptance, policy questions, and token-page navigation are associated with `$Neurons`. |
| `docs/marketplace/payments-and-settlement.md` | 16 | The token is named as a conditional Marketplace payment method. |

### MARKETPLACE-SAN-02 — Treasury Alignment and Reporting

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/marketplace/treasury-alignment.md` | 1; 12; 16; 18; 20; 24; 28 | The dedicated page describes flows, liabilities, record fields, review triggers, subsidies, settlement, revenue, and risk. |
| `docs/marketplace/architecture.md` | 42; 52; 57; 68 | Architecture layers connect treasury to seller payout, fees, liabilities, reporting, payment, settlement, and locked rewards. |
| `docs/marketplace/governance-alignment.md` | 12; 16; 23; 28 | Governance-sensitive items include treasury flows, routing, settlement policy, and review reason codes. |
| `docs/marketplace/payments-and-settlement.md` | 12; 20; 26 | Payment and settlement are aligned to treasury policy and include routing and allocation fields. |
| `docs/marketplace/fees-and-revenue.md` | 12; 16; 20; 28; 32 | Fee policy, revenue routing, review triggers, and revenue-risk language are treasury-adjacent. |
| `docs/marketplace/credits-and-locked-rewards.md` | 12; 20; 28; 32 | Locked-value utility, settlement support, subsidies, liabilities, and seller acceptance depend on treasury policy. |
| `docs/marketplace/dex-and-defi-integration.md` | 16; 24; 28 | Conversion, checkout disclosure, payout-asset, and exposure questions are treasury-adjacent. |
| `docs/marketplace/reporting-and-accountability.md` | 12; 20; 28 | Marketplace reports include revenue, payouts, fees, liabilities, and treasury-facing distinctions. |
| `docs/marketplace/overview.md` | 46; 52 | Marketplace scope and ecosystem-role text includes treasury reporting and settlement accountability. |
| `docs/marketplace/acs-integration.md` | 18; 29; 34 | Financial reporting review, treasury escalation, and authority limits are described. |
| `docs/marketplace/tokenomics-alignment.md` | 20; 24 | Policy questions and records include treasury-adjacent fee, destination, and settlement fields. |

### MARKETPLACE-SAN-03 — Fee Categories and Routing

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/marketplace/fees-and-revenue.md` | 1; 12; 14; 16; 22; 24; 28; 32 | The dedicated page defines fee categories, record fields, formula or destination fields, review triggers, and revenue risk. |
| `docs/marketplace/architecture.md` | 52; 56; 60 | Settlement, governance, and reporting layers include fees. |
| `docs/marketplace/buyer-flow.md` | 58; 66 | Order records and pre-payment transparency include fees. |
| `docs/marketplace/dex-and-defi-integration.md` | 24 | Checkout disclosure includes fee complexity. |
| `docs/marketplace/governance-alignment.md` | 12; 16; 23; 28 | Marketplace fee policy is a governance-sensitive item, formal-proposal trigger, and reason code. |
| `docs/marketplace/overview.md` | 46 | Marketplace scope includes fees. |
| `docs/marketplace/payments-and-settlement.md` | 24; 26 | Payment and settlement records include fee fields. |
| `docs/marketplace/reporting-and-accountability.md` | 16; 20; 28 | Report types, fields, and quality rules include fees. |
| `docs/marketplace/risk-and-compliance.md` | 66 | Marketplace fee changes are review triggers. |
| `docs/marketplace/tokenomics-alignment.md` | 16; 20; 24 | Tokenomics interfaces, policy questions, and records include fee routing or fee amounts. |
| `docs/marketplace/treasury-alignment.md` | 16; 20; 24; 28 | Treasury interfaces, records, reviews, and risk language include Marketplace fees. |
| `docs/marketplace/acs-integration.md` | 18 | Financial reporting context includes fees. |

### MARKETPLACE-SAN-04 — Royalties

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/marketplace/fees-and-revenue.md` | 16 | Royalty is presented as a possible fee category. |
| `docs/marketplace/architecture.md` | 52 | The settlement layer lists royalties. |
| `docs/marketplace/payments-and-settlement.md` | 26 | Settlement records include a royalty field. |

### MARKETPLACE-SAN-05 — Commissions

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/marketplace/fees-and-revenue.md` | 16; 28 | Commission is a possible fee category and partner commissions are a review trigger. |
| `docs/marketplace/architecture.md` | 52 | The settlement layer lists commissions. |
| `docs/marketplace/payments-and-settlement.md` | 26 | Settlement records include a commission field. |
| `docs/marketplace/treasury-alignment.md` | 16; 20; 24 | Treasury interfaces, reporting fields, and review triggers include commissions. |

### MARKETPLACE-SAN-06 — Seller Settlement and Payout Fields

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/marketplace/payments-and-settlement.md` | 1; 12; 16; 18; 20; 22; 26; 30 | The dedicated page describes settlement models, records, seller net, payout asset, release condition, status, and delay risks. |
| `docs/marketplace/architecture.md` | 42; 52; 54; 57; 60; 64; 68 | Architecture layers and objects include settlement, seller payout, payout adjustment, reporting, and auditability. |
| `docs/marketplace/treasury-alignment.md` | 16; 20; 24; 28 | Treasury interfaces, fields, reviews, and risks include seller or tutor payout and settlement. |
| `docs/marketplace/credits-and-locked-rewards.md` | 12; 20; 28; 30; 32 | Locked-value use is tied to seller acceptance, settlement models, refund risk, and seller-settlement gaps. |
| `docs/marketplace/dex-and-defi-integration.md` | 16; 28 | Checkout models and policy questions include seller settlement conversion and payout asset. |
| `docs/marketplace/disputes-refunds-and-support.md` | 16; 20 | Dispute types and records include settlement issues and seller-payout adjustment. |
| `docs/marketplace/fees-and-revenue.md` | 20; 28; 32 | Revenue routing, fee review, and risk language include seller payout and settlement fees. |
| `docs/marketplace/governance-alignment.md` | 16; 23; 28 | Seller settlement and treasury settlement are governance-sensitive policy and review contexts. |
| `docs/marketplace/reporting-and-accountability.md` | 12; 16; 20; 24; 28 | Reporting types, fields, records, and quality rules include settlement and seller payout. |
| `docs/marketplace/buyer-flow.md` | 54; 58 | Buyer workflow and order fields include settlement status under order terms. |
| `docs/marketplace/business-and-bba-alignment.md` | 31 | Service-request tracking includes settlement. |
| `docs/marketplace/security-and-data-protection.md` | 46 | Security scope includes seller payout data. |
| `docs/marketplace/seller-provider-model.md` | 50 | Seller profile fields include payout preferences. |
| `docs/marketplace/tokenomics-alignment.md` | 20; 24 | Tokenomics questions and records include seller-value settlement and a settlement model. |
| `docs/marketplace/overview.md` | 46; 52; 79 | Scope, ecosystem role, and risk framing include settlement or seller-facing risk. |
| `docs/marketplace/acs-integration.md` | 18 | Financial reporting context includes settlement. |

### MARKETPLACE-SAN-07 — Locked Rewards and Internal Utility

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/marketplace/credits-and-locked-rewards.md` | 1; 12; 16; 20; 24; 28; 32 | The dedicated page defines restricted balances, internal credits, potential uses, spend rules, settlement, refund, and liability risks. |
| `docs/marketplace/tokenomics-alignment.md` | 12; 16; 20; 24; 28; 33 | Utility, reward spending, locked or unlocked states, credits, record fields, liabilities, and page navigation are described. |
| `docs/marketplace/academy-alignment.md` | 16; 20; 24; 26; 28; 33 | Course commerce, listing fields, reward status, reward claims, and locked-reward rules are described. |
| `docs/marketplace/architecture.md` | 50; 56; 57; 60; 64; 68 | Checkout, governance, treasury, reporting, objects, and invariants include credits or locked rewards. |
| `docs/marketplace/payments-and-settlement.md` | 16; 20; 24; 30 | Payment, settlement, records, and risk contexts include locked or internal credit. |
| `docs/marketplace/treasury-alignment.md` | 16; 20; 24 | Treasury interfaces, record fields, and reviews include locked credits or reward budgets. |
| `docs/marketplace/reporting-and-accountability.md` | 12; 16; 20; 24; 28 | Reports and records include credits and locked-credit liabilities. |
| `docs/marketplace/risk-and-compliance.md` | 42; 50; 54; 58; 66 | Risk, prohibited-claim, safe-language, and review-trigger text includes locked rewards or internal credits. |
| `docs/marketplace/listing-model.md` | 20; 28; 32 | Listing fields, claim review, and quality rules include credits, eligibility, utility, or locked-reward spending. |
| `docs/marketplace/disputes-refunds-and-support.md` | 12; 16; 20; 28 | Dispute and refund contexts include credit issues, adjustments, and credit refunds. |
| `docs/marketplace/fees-and-revenue.md` | 20; 28; 32 | Revenue, settlement-fee review, subsidies, and risk language include rewards or credits. |
| `docs/marketplace/governance-alignment.md` | 12; 16; 22; 24 | Locked-reward policy and credit liability are governance and emergency-review contexts. |
| `docs/marketplace/buyer-flow.md` | 49; 58 | Buyer workflow and order fields include applied credits. |
| `docs/marketplace/overview.md` | 46; 63; 79 | Scope, navigation, and risk framing include credits, locked rewards, or locked-credit liability. |
| `docs/marketplace/acs-integration.md` | 17 | Adversarial review includes locked-reward policy risk. |
| `docs/marketplace/business-and-bba-alignment.md` | 35 | Reward claims are a review trigger. |
| `docs/marketplace/seller-provider-model.md` | 66 | Tutor-listing requirements include reward rules. |

### MARKETPLACE-SAN-08 — Payment and Accepted-Asset Framing

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/marketplace/payments-and-settlement.md` | 1; 12; 14; 16; 22; 24; 26; 30 | The dedicated page describes payment methods, assets, records, transaction references, statuses, and conversion or volatility risk. |
| `docs/marketplace/architecture.md` | 42; 50; 51; 58; 64; 68 | Architecture layers and objects include checkout, asset selection, payment capture, conversion, records, and payment safety. |
| `docs/marketplace/buyer-flow.md` | 42; 47; 48; 50; 51; 58; 62; 66 | Buyer workflow, order fields, statuses, and transparency text include accepted assets, payment method, transaction, and payment status. |
| `docs/marketplace/security-and-data-protection.md` | 42; 46; 50; 54; 58 | Security scope, controls, incidents, and user responsibilities include payments, gateways, transactions, and payment assets. |
| `docs/marketplace/dex-and-defi-integration.md` | 12; 16; 24; 28 | Integration framing includes payments, accepted assets, checkout conversion, transaction failure, and asset questions. |
| `docs/marketplace/listing-model.md` | 20 | Listing fields include accepted assets. |
| `docs/marketplace/service-catalog.md` | 20 | Service listing fields include accepted assets. |
| `docs/marketplace/academy-alignment.md` | 20 | Course listing fields include accepted assets. |
| `docs/marketplace/governance-alignment.md` | 23; 24 | Token-payment policy and payment issues are governance-review contexts. |
| `docs/marketplace/credits-and-locked-rewards.md` | 16 | Internal Marketplace credit is connected to purchase use. |
| `docs/marketplace/disputes-refunds-and-support.md` | 12; 16; 28 | Dispute and refund models include failed payments, payment issues, and asset-based refunds. |
| `docs/marketplace/fees-and-revenue.md` | 16; 28 | Fee categories and review triggers include payment processing and checkout. |
| `docs/marketplace/reporting-and-accountability.md` | 24 | Accountability records include payment records. |
| `docs/marketplace/risk-and-compliance.md` | 42; 50; 54; 66 | Risk, prohibited-claim, and review-trigger text includes token payment, payment failure, purchase, and checkout claims. |
| `docs/marketplace/tokenomics-alignment.md` | 16 | Tokenomics interfaces include conditional payments. |
| `docs/marketplace/treasury-alignment.md` | 16; 24 | Treasury interfaces and reviews include payment processing and checkout settlement. |
| `docs/marketplace/overview.md` | 46; 61; 79 | Scope, navigation, and risk framing include payments. |

### Navigation, Index, and Root Surfaces

| Exact public source | Occurrence lines | Decision context |
| --- | --- | --- |
| `docs/index.md` | 97 | The Marketplace card advertises payments and credits; this is part of MARKETPLACE-SAN-07 and MARKETPLACE-SAN-08. |
| `docs/marketplace/overview.md` | 61-63; 69 | The Marketplace map names Payments and Settlement, Fees and Revenue, Credits and Locked Rewards, and Treasury Alignment. |
| `SUMMARY.md` | 630; 633; 637; 644-645 | Public navigation reproduces the sensitive Marketplace page titles. |
| `docs/.vitepress/config.mts` | 120-123; 128 | Marketplace sidebar source reproduces the sensitive page titles. |
| `.rag/DOCUMENTATION-MASTER-INDEX.md` | 723; 726; 729; 734-735 | The generated public index reproduces the sensitive Marketplace page titles. |
| `SUMMARY.md` | 322; 325; 332; 339-340 | Legacy Marketplace navigation mirrors the sensitive topic labels without adding an independent governed mechanic. |
| `.rag/DOCUMENTATION-MASTER-INDEX.md` | 485; 488; 495; 503-504 | The generated index mirrors the corresponding legacy topic paths without adding an independent governed mechanic. |

`README.md` lines 42, 65, and 102, `docs/index.md` lines 56 and 109, and
the generic Marketplace root, navigation, and approved-document rows contain
ecosystem, risk, or navigation context only. They do not independently add a
Marketplace economic mechanic beyond the occurrences above. Generic price,
order, listing, seller, buyer-protection, delivery, refund, dispute, security,
and quality references outside the inventories remain frozen as reviewed but
are not automatically part of a sanitization finding.

### Derived Public Mirrors

The current rendered Marketplace pages, compiled page modules, home-page
mirrors, sidebar rendering, and local search index reproduce the governed
source contexts. They are derived mirrors rather than independent policy
sources. Their current paths are frozen because any later authorized source
correction would require a separately authorized, controlled regeneration and
verification pass.

Rendered page mirrors:

- `docs/.vitepress/dist/marketplace/academy-alignment.html`
- `docs/.vitepress/dist/marketplace/acs-integration.html`
- `docs/.vitepress/dist/marketplace/architecture.html`
- `docs/.vitepress/dist/marketplace/business-and-bba-alignment.html`
- `docs/.vitepress/dist/marketplace/buyer-flow.html`
- `docs/.vitepress/dist/marketplace/credits-and-locked-rewards.html`
- `docs/.vitepress/dist/marketplace/dex-and-defi-integration.html`
- `docs/.vitepress/dist/marketplace/disputes-refunds-and-support.html`
- `docs/.vitepress/dist/marketplace/fees-and-revenue.html`
- `docs/.vitepress/dist/marketplace/governance-alignment.html`
- `docs/.vitepress/dist/marketplace/listing-model.html`
- `docs/.vitepress/dist/marketplace/overview.html`
- `docs/.vitepress/dist/marketplace/payments-and-settlement.html`
- `docs/.vitepress/dist/marketplace/reporting-and-accountability.html`
- `docs/.vitepress/dist/marketplace/risk-and-compliance.html`
- `docs/.vitepress/dist/marketplace/security-and-data-protection.html`
- `docs/.vitepress/dist/marketplace/seller-provider-model.html`
- `docs/.vitepress/dist/marketplace/service-catalog.html`
- `docs/.vitepress/dist/marketplace/tokenomics-alignment.html`
- `docs/.vitepress/dist/marketplace/treasury-alignment.html`
- `docs/.vitepress/dist/index.html`

Compiled page mirrors:

- `docs/.vitepress/dist/assets/marketplace_academy-alignment.md.JvTT93CF.js`
- `docs/.vitepress/dist/assets/marketplace_academy-alignment.md.JvTT93CF.lean.js`
- `docs/.vitepress/dist/assets/marketplace_acs-integration.md._MwKZcPd.js`
- `docs/.vitepress/dist/assets/marketplace_acs-integration.md._MwKZcPd.lean.js`
- `docs/.vitepress/dist/assets/marketplace_architecture.md.CsA8z9bI.js`
- `docs/.vitepress/dist/assets/marketplace_architecture.md.CsA8z9bI.lean.js`
- `docs/.vitepress/dist/assets/marketplace_business-and-bba-alignment.md.DopW-62t.js`
- `docs/.vitepress/dist/assets/marketplace_business-and-bba-alignment.md.DopW-62t.lean.js`
- `docs/.vitepress/dist/assets/marketplace_buyer-flow.md.D7IfEEmm.js`
- `docs/.vitepress/dist/assets/marketplace_buyer-flow.md.D7IfEEmm.lean.js`
- `docs/.vitepress/dist/assets/marketplace_credits-and-locked-rewards.md.D3dTJhOg.js`
- `docs/.vitepress/dist/assets/marketplace_credits-and-locked-rewards.md.D3dTJhOg.lean.js`
- `docs/.vitepress/dist/assets/marketplace_dex-and-defi-integration.md.CrRDBghI.js`
- `docs/.vitepress/dist/assets/marketplace_dex-and-defi-integration.md.CrRDBghI.lean.js`
- `docs/.vitepress/dist/assets/marketplace_disputes-refunds-and-support.md.C5KX4m7s.js`
- `docs/.vitepress/dist/assets/marketplace_disputes-refunds-and-support.md.C5KX4m7s.lean.js`
- `docs/.vitepress/dist/assets/marketplace_fees-and-revenue.md.D6v_Q31_.js`
- `docs/.vitepress/dist/assets/marketplace_fees-and-revenue.md.D6v_Q31_.lean.js`
- `docs/.vitepress/dist/assets/marketplace_governance-alignment.md.CeHthHRa.js`
- `docs/.vitepress/dist/assets/marketplace_governance-alignment.md.CeHthHRa.lean.js`
- `docs/.vitepress/dist/assets/marketplace_listing-model.md.Byu9tPSj.js`
- `docs/.vitepress/dist/assets/marketplace_listing-model.md.Byu9tPSj.lean.js`
- `docs/.vitepress/dist/assets/marketplace_overview.md.CMZ7zRQD.js`
- `docs/.vitepress/dist/assets/marketplace_overview.md.CMZ7zRQD.lean.js`
- `docs/.vitepress/dist/assets/marketplace_payments-and-settlement.md.BOIkJ1tF.js`
- `docs/.vitepress/dist/assets/marketplace_payments-and-settlement.md.BOIkJ1tF.lean.js`
- `docs/.vitepress/dist/assets/marketplace_reporting-and-accountability.md.DeRKYH0U.js`
- `docs/.vitepress/dist/assets/marketplace_reporting-and-accountability.md.DeRKYH0U.lean.js`
- `docs/.vitepress/dist/assets/marketplace_risk-and-compliance.md.BS2gopZj.js`
- `docs/.vitepress/dist/assets/marketplace_risk-and-compliance.md.BS2gopZj.lean.js`
- `docs/.vitepress/dist/assets/marketplace_security-and-data-protection.md.E0xNdj_D.js`
- `docs/.vitepress/dist/assets/marketplace_security-and-data-protection.md.E0xNdj_D.lean.js`
- `docs/.vitepress/dist/assets/marketplace_seller-provider-model.md.huPC_CaN.js`
- `docs/.vitepress/dist/assets/marketplace_seller-provider-model.md.huPC_CaN.lean.js`
- `docs/.vitepress/dist/assets/marketplace_service-catalog.md.xfsCYzUM.js`
- `docs/.vitepress/dist/assets/marketplace_service-catalog.md.xfsCYzUM.lean.js`
- `docs/.vitepress/dist/assets/marketplace_tokenomics-alignment.md.DVwBDDXj.js`
- `docs/.vitepress/dist/assets/marketplace_tokenomics-alignment.md.DVwBDDXj.lean.js`
- `docs/.vitepress/dist/assets/marketplace_treasury-alignment.md.DAF0XVIz.js`
- `docs/.vitepress/dist/assets/marketplace_treasury-alignment.md.DAF0XVIz.lean.js`
- `docs/.vitepress/dist/assets/index.md.BJdFBIos.js`
- `docs/.vitepress/dist/assets/index.md.BJdFBIos.lean.js`
- `docs/.vitepress/dist/assets/chunks/@localSearchIndexroot.CzgpSeLt.js`

Global sidebar labels may be repeated in other rendered pages. That repetition
is generated from `docs/.vitepress/config.mts` and is not an independent policy
source. VitePress cache dependencies contain no independent governed
Marketplace wording.

## Commerce Abstraction Boundary

| Public-safe abstraction candidate | Required limit |
| --- | --- |
| Product discovery | Describe search, discovery, visibility, and navigation without commercial ranking formulas, private eligibility, or economic preference rules. |
| Catalog and storefront | Describe listings, categories, seller visibility, and storefront organization without private product-origin economics or approval mechanics. |
| Tenant curation | Describe tenant-selected catalogs or channels conceptually without commission, revenue-share, licensing, settlement, or private control terms. |
| Transaction interface | Describe order initiation, status visibility, confirmation, delivery, dispute, refund, and record traceability without payment assets, economic fields, routing, payout, conversion, or settlement mechanics. |
| High-level dynamic pricing | Describe adaptable or variable pricing only at concept level without formulas, auction mechanics, providers, conversion rules, or financial claims. |
| Listing transparency | Describe visible seller status, deliverables, exclusions, risk notices, and review state without fee, payout, reward, treasury, or accepted-asset commitments. |
| Modular commerce infrastructure | Describe configurable commerce software and separable deployment conceptually without licensing terms, recurring economics, commercial offer, service commitment, or infrastructure responsibility claims. |

The public-safe boundary does not include fee formulas, fee destinations,
royalty terms, commission routing, seller or tutor settlement, payout fields,
treasury routing, revenue splits, conversion rules, provider selection,
auction rules, accepted-asset policy, token-specific payment, internal credits,
locked or spendable reward flows, recurring economic entitlements, or private
licensing mechanics.

Generic order and transaction-interface language is not automatically a
finding. It becomes in-scope when the context adds a private economic field,
asset, route, entitlement, locked value state, conversion, payout, or approved
commercial implication.

## Financial and Commercial Risk Assessment

| Finding | Financial or commercial risk | Decision effect |
| --- | --- | --- |
| MARKETPLACE-SAN-01 | Token-specific utility or payment language may imply an approved use, acceptance policy, access entitlement, or economic demand surface. | Prevents `NO_ACTION`; exact token-neutral treatment requires review. |
| MARKETPLACE-SAN-02 | Treasury-facing flows, allocations, liabilities, and reporting may be read as approved routing, backing, reserve, or operating policy. | Prevents `NO_ACTION` and unreviewed execution; accountability abstraction remains a candidate only. |
| MARKETPLACE-SAN-03 | Structured fee types, fields, formulas, destinations, and routing language may imply live commercial terms or predictable revenue. | Prevents `NO_ACTION`; any retained fee reference needs exact review. |
| MARKETPLACE-SAN-04 | Royalty vocabulary may imply a continuing payment entitlement, licensed-product term, or revenue claim. | Prevents `NO_ACTION`; removal or abstraction remains review-dependent. |
| MARKETPLACE-SAN-05 | Commission vocabulary may imply a partner, seller, referral, or channel compensation policy and a defined value split. | Prevents `NO_ACTION`; generic policy wording is not yet approved. |
| MARKETPLACE-SAN-06 | Settlement models, payout fields, release conditions, and seller-net language may imply implemented custody, escrow, entitlement, or payout obligations. | Prevents `NO_ACTION`; generic order completion is separable only after exact review. |
| MARKETPLACE-SAN-07 | Locked rewards and internal credits may be interpreted as spendable, redeemable, treasury-backed, transferable, or cash-equivalent value. | Prevents `NO_ACTION`; non-financial recognition does not automatically preserve Marketplace utility. |
| MARKETPLACE-SAN-08 | Payment methods, accepted assets, checkout, conversion, and payment records may imply supported rails, approved assets, or live transaction capability. | Prevents `NO_ACTION`; only a method-neutral transaction interface is a candidate. |

Conditional phrases such as `may`, `if implemented`, `if approved`, `subject
to policy`, and `Needs Review` reduce implementation certainty but do not
convert the underlying economic or payment mechanic into a public-safe commerce
abstraction. Negative and cautionary language reduces promotional risk but does
not resolve the stricter private/public classification.

## Legal Dependency Assessment

| Finding | Legal state | Required determination | Other required owners |
| --- | --- | --- | --- |
| MARKETPLACE-SAN-01 | REQUIRED_BEFORE_PUBLICATION; approval not granted | Determine whether any Marketplace token-utility or payment reference may remain and whether the exact replacement removes payment, access, sale, entitlement, or investment meaning. | Marketplace / Tokenomics / Treasury / Documentation Core |
| MARKETPLACE-SAN-02 | REQUIRED_BEFORE_EXTERNAL_USE and REQUIRED_BEFORE_EXECUTION; approval not granted | Review the exact accountability wording and confirm that it does not imply routing, allocation, backing, reserve, liability acceptance, settlement, or approved treasury operation. | Marketplace / Treasury / Governance / Documentation Core |
| MARKETPLACE-SAN-03 | REQUIRED_BEFORE_PUBLICATION; approval not granted | Review every retained fee reference and confirm that it does not imply a live type, rate, formula, destination, split, revenue stream, or approved commercial term. | Marketplace / Treasury / Business / Documentation Core |
| MARKETPLACE-SAN-04 | REQUIRED_BEFORE_PUBLICATION; approval not granted | Determine whether royalty vocabulary must be removed or may be abstracted without implying a rate, duration, entitlement, licensing term, or recurring revenue. | Marketplace / Business / Treasury / Documentation Core |
| MARKETPLACE-SAN-05 | REQUIRED_BEFORE_PUBLICATION; approval not granted | Review every retained commission reference and confirm that it does not imply an approved recipient, basis, route, split, partner arrangement, or compensation entitlement. | Marketplace / Treasury / Business / Documentation Core |
| MARKETPLACE-SAN-06 | REQUIRED_BEFORE_PUBLICATION and REQUIRED_BEFORE_EXECUTION; approval not granted | Determine whether exact order-completion wording removes payout, custody, escrow, asset, release, obligation, and seller-entitlement meaning. | Marketplace / Treasury / Governance / Documentation Core |
| MARKETPLACE-SAN-07 | REQUIRED_BEFORE_PUBLICATION; approval not granted | Classify the exact proposed treatment as non-financial and confirm that it removes spendable, redeemable, transferable, cash-equivalent, payment, treasury-backed, or return meaning. | Marketplace / Academy / Tokenomics / Treasury / Documentation Core |
| MARKETPLACE-SAN-08 | REQUIRED_BEFORE_PUBLICATION; approval not granted | Determine whether a method-neutral transaction abstraction removes accepted-asset, conversion, payment-rail, checkout-availability, settlement, and live-capability meaning. | Marketplace / Treasury / Integrations / Documentation Core |

Legal may approve, condition, reject, or defer exact wording. Legal review does
not grant repository mutation, publication, governance, product, commercial,
technical, production, or financial authority. Because the required exact-use
determinations are absent, no finding can advance to `GO_SCOPED`.

## Public-Safe Target Framing

The following directions are candidates for Legal and owner review only. They
are not authorized replacement text and do not form a correction set.

| Finding | Candidate direction | Required boundary |
| --- | --- | --- |
| MARKETPLACE-SAN-01 | Describe Marketplace utility through generic discovery, access coordination, and transaction interfaces. | Remove `$Neurons`, token acceptance, token payment, token-linked access, and token-value implications. |
| MARKETPLACE-SAN-02 | Describe accountability through auditable Marketplace records and governance-visible reporting. | Remove treasury identity, routing, allocation, reserve, subsidy, liability, destination, payout, and settlement implications. |
| MARKETPLACE-SAN-03 | Describe commercial terms only as subject to separately approved policy and transparent listing terms, if any reference is retained. | Remove fee types, rate or formula fields, destinations, routing, splits, revenue treatment, and live-term implications. |
| MARKETPLACE-SAN-04 | Describe modular commerce without royalty vocabulary or continuing economic entitlement. | Remove royalty, recurring payment, duration, basis, payout, licensing-economics, and revenue implications. |
| MARKETPLACE-SAN-05 | Describe tenant and partner policy abstractly without compensation mechanics. | Remove commission, recipient, basis, split, route, partner compensation, and entitlement implications. |
| MARKETPLACE-SAN-06 | Describe order completion, delivery confirmation, dispute handling, and record traceability. | Remove seller or tutor payout, seller net, settlement model, asset, release condition, custody, escrow, route, and obligation implications. |
| MARKETPLACE-SAN-07 | Describe non-financial participation recognition or restricted eligibility only if separately approved; otherwise omit the value concept. | Remove lock, balance, claim, transfer, withdrawal, spend, payment, credit, cash-equivalent, redemption, Marketplace-utility, and treasury-backed implications. |
| MARKETPLACE-SAN-08 | Describe a method-neutral transaction interface and order-status visibility. | Remove accepted assets, named payment methods, conversion, gateways, payment fields, payment availability, settlement, and enabled transaction implications. |
| Shared context | Retain product discovery, catalog, storefront, tenant curation, transaction interfaces, high-level dynamic pricing, listing transparency, and modular commerce infrastructure only at abstract level. | Do not imply approved commercial terms, legal approval, active availability, provider selection, economic entitlement, or enabled execution. |

## Decision

| Finding | Decision | Rationale | Frozen source set | Candidate target framing | Dependencies | Future execution scope |
| --- | --- | --- | --- | --- | --- | --- |
| MARKETPLACE-SAN-01 | DEFERRED_PENDING_LEGAL | The finding remains. Token-specific payment and utility are expressly legal-sensitive, and no exact-wording determination authorizes the token-neutral candidate. | MARKETPLACE-SAN-01 inventory above | Generic discovery, access coordination, and transaction interfaces only, subject to review. | Marketplace / Tokenomics / Treasury / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| MARKETPLACE-SAN-02 | DEFERRED_PENDING_LEGAL | The finding remains. Accountability is separable in principle, but exact wording must remove treasury route, backing, allocation, liability, and execution meaning. | MARKETPLACE-SAN-02 inventory above | Auditable records and governance-visible accountability only, subject to review. | Marketplace / Treasury / Governance / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| MARKETPLACE-SAN-03 | DEFERRED_PENDING_LEGAL | The finding remains. Every retained fee reference requires explicit review, and no determination confirms that generic commercial-policy language avoids live-term or revenue implications. | MARKETPLACE-SAN-03 inventory above | Generic commercial-governance and listing-term transparency only, subject to review. | Marketplace / Treasury / Business / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| MARKETPLACE-SAN-04 | DEFERRED_PENDING_LEGAL | The finding remains. Current royalty vocabulary overlaps private licensing economics, and removal or exact abstraction has not received Legal review. | MARKETPLACE-SAN-04 inventory above | Modular commerce without continuing economic entitlement only, subject to review. | Marketplace / Business / Treasury / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| MARKETPLACE-SAN-05 | DEFERRED_PENDING_LEGAL | The finding remains. Commission language may imply defined recipients, routes, splits, or partner compensation, and no exact replacement is approved. | MARKETPLACE-SAN-05 inventory above | Abstract tenant and partner policy without compensation mechanics only, subject to review. | Marketplace / Treasury / Business / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| MARKETPLACE-SAN-06 | DEFERRED_PENDING_LEGAL | The finding remains. Seller settlement and payout fields carry obligation, custody, asset, and execution meaning beyond generic order completion. | MARKETPLACE-SAN-06 inventory above | Order completion, delivery confirmation, dispute handling, and traceability only, subject to review. | Marketplace / Treasury / Governance / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| MARKETPLACE-SAN-07 | DEFERRED_PENDING_LEGAL | The finding remains. Locked rewards and internal credits may represent spendable or redeemable value, and no Legal determination authorizes a non-financial treatment. | MARKETPLACE-SAN-07 inventory above | Non-financial recognition or restricted eligibility without value mechanics only, subject to review. | Marketplace / Academy / Tokenomics / Treasury / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| MARKETPLACE-SAN-08 | DEFERRED_PENDING_LEGAL | The finding remains. Payment methods, assets, checkout, and conversion contexts imply support or availability that a method-neutral transaction abstraction must remove. | MARKETPLACE-SAN-08 inventory above | Method-neutral transaction interface and order-status visibility only, subject to review. | Marketplace / Treasury / Integrations / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |

Final request decision: `DEFERRED_PENDING_LEGAL`.

No finding is `NO_ACTION` because all eight remain present. No finding is
`NO_GO` because a bounded public-safe commerce abstraction may be possible
after exact review. No finding is `GO_SCOPED` because every publication-level
Legal dependency is open and legal approval is not granted.

## Authorized Correction Set

`NONE`.

No public source line, public file, navigation entry, rendered artifact, search
index, generated artifact, commercial material, or runtime surface is
authorized for mutation. Candidate directions above exist only to make the
Legal dependency reviewable.

If the decision is later reopened, the candidate source envelope is limited to
the exact occurrence lines in this inventory and any source navigation label
that must change to avoid retaining a rejected concept. A superseding decision
must identify the selected path and occurrence context individually; the
inventory does not make every listed path automatically editable.

| Finding | Candidate source envelope for a future superseding decision |
| --- | --- |
| MARKETPLACE-SAN-01 | `docs/marketplace/tokenomics-alignment.md`; `docs/marketplace/payments-and-settlement.md` |
| MARKETPLACE-SAN-02 | `docs/marketplace/treasury-alignment.md`; `docs/marketplace/architecture.md`; `docs/marketplace/governance-alignment.md`; `docs/marketplace/payments-and-settlement.md`; `docs/marketplace/fees-and-revenue.md`; `docs/marketplace/credits-and-locked-rewards.md`; `docs/marketplace/dex-and-defi-integration.md`; `docs/marketplace/reporting-and-accountability.md`; `docs/marketplace/overview.md`; `docs/marketplace/acs-integration.md`; `docs/marketplace/tokenomics-alignment.md` |
| MARKETPLACE-SAN-03 | The twelve Marketplace Markdown sources listed in MARKETPLACE-SAN-03 and affected source navigation labels only. |
| MARKETPLACE-SAN-04 | `docs/marketplace/fees-and-revenue.md`; `docs/marketplace/architecture.md`; `docs/marketplace/payments-and-settlement.md` |
| MARKETPLACE-SAN-05 | `docs/marketplace/fees-and-revenue.md`; `docs/marketplace/architecture.md`; `docs/marketplace/payments-and-settlement.md`; `docs/marketplace/treasury-alignment.md` |
| MARKETPLACE-SAN-06 | The sixteen Marketplace Markdown sources listed in MARKETPLACE-SAN-06 and affected source navigation labels only. |
| MARKETPLACE-SAN-07 | The seventeen Marketplace Markdown sources listed in MARKETPLACE-SAN-07; `docs/index.md` line 97; affected source navigation labels only. |
| MARKETPLACE-SAN-08 | The seventeen Marketplace Markdown sources listed in MARKETPLACE-SAN-08; `docs/index.md` line 97; affected source navigation labels only. |

Derived and generated files are not candidate manual-edit targets. A future
execution request must separately authorize controlled regeneration, identify
the expected derived file set, and verify the exact generated changes.

## Excluded Changes

- All files under `docs/`, including every frozen Marketplace source and
  `docs/index.md`.
- `README.md`, `SUMMARY.md`, `docs/.vitepress/`, and
  `.rag/DOCUMENTATION-MASTER-INDEX.md`.
- Public manifests, graphs, indexes, validation outputs, rendered output,
  search artifacts, and legacy knowledge-pack surfaces.
- Marketplace, Academy, Tokenomics, Treasury, Business, Governance,
  Integrations, Security, Legal, or cross-core private baseline policy and
  unresolved mechanics.
- Public-safe discovery, catalog, storefront, curation, listing transparency,
  risk, security, dispute, refund, delivery, accountability, and no-guarantee
  wording outside an independently approved future scope.
- Dynamic-pricing formulas, auction mechanics, provider or conversion details,
  licensing terms, recurring economics, accepted-asset policy, payment rails,
  treasury routes, seller or tutor payouts, revenue splits, fee terms,
  royalties, commissions, and locked-value flows.
- Academic-paper, institutional-public, investor, fundraising, marketing,
  product-launch, sales, or commercial-offer material.
- Public API, schema, runtime interface, provider, wallet, contract,
  production, treasury, token, settlement, redemption, or financial changes.

## Execution Preconditions

No sanitization execution may begin under this decision. The decision may be
reopened only after all of the following are recorded:

1. Legal issues a written determination for the exact candidate wording, exact
   public source lines, and surrounding context for every finding intended for
   correction. Every proposed retained fee, royalty, commission, settlement,
   asset, or payment reference must receive explicit review and must not imply
   live terms or capability.
2. Marketplace and the applicable Academy, Tokenomics, Treasury, Business,
   Governance, Integrations, and Security owners confirm product, commercial,
   economic, authority, conversion, and safety accuracy without introducing
   private mechanics or new policy.
3. Documentation Core refreshes the occurrence inventory and confirms that the
   public corpus, private baseline, consolidation audit, decision register,
   matrix, standard, roadmap, owners, generated-artifact state, and gates have
   not changed.
4. A new or superseding decision assigns `GO_SCOPED` to each row intended for
   correction and records exact source paths, exact occurrence contexts,
   approved target wording, acceptance evidence, and a reversible correction
   set.
5. A separate execution request explicitly authorizes those public source
   paths and defines source-navigation, legacy-mirror, generated-artifact, and
   build-output treatment.
6. The pre-execution revision, exact authorized line envelope, expected derived
   changes, rejected wording, and non-destructive rollback path are recorded.
7. Metadata validation, relationship checks, combined documentation checks,
   generator drift checks, boundary scans, focused tests, VitePress build, diff
   hygiene, and worktree checks pass before and after execution.

Satisfying a Legal dependency alone does not satisfy the remaining conditions.

## Rollback Requirements

There is no approved public correction and therefore no approved file-specific
rollback set.

If an unauthorized public, legacy, rendered, search, or generated mutation
appears while this decision is in effect, execution must stop, the exact diff
and pre-change revision must be preserved, and the incident must be escalated
before any reviewed, non-destructive restoration. Regeneration must not conceal
unrelated drift or overwrite user-owned changes.

Any later authorized execution must define its source revision, exact file and
line envelope, accepted wording, expected generated output, rejection evidence,
and non-destructive revert path before mutation begins. Rollback must restore
the last accepted public wording and rerun the occurrence scan, private-boundary
scan, metadata and relationship validation, documentation checks, generator
check, focused tests, build, diff, and worktree checks.

## Review Triggers

Review is `EVENT_DRIVEN`. Reopen this decision when any of the following
occurs:

- Legal issues or changes guidance for token utility, locked or redeemable
  value, internal credits, payment assets, checkout, settlement, fees,
  commissions, royalties, licensing, revenue, treasury-backed benefits,
  recurring entitlements, sale language, or investment-like interpretation.
- Any frozen source, source-navigation, legacy-navigation, or derived-mirror
  path changes.
- A new Marketplace page, navigation entry, index, manifest, generated surface,
  or cross-core page introduces related token, reward, payment, fee, royalty,
  commission, settlement, payout, treasury, or accepted-asset meaning.
- Marketplace, Academy, Tokenomics, Treasury, Business, Governance,
  Integrations, Security, Legal, or Documentation Core changes the applicable
  policy, owner, or authority.
- The Marketplace private baseline, consolidation audit, decision register,
  cross-core matrix, governance standard, or sanitization roadmap changes.
- A pricing formula, auction rule, conversion rule, provider selection,
  accepted-asset policy, route, reserve, payout formula, rate, split, duration,
  entitlement, or recurring commercial term appears or changes publicly.
- Production, provider, wallet, contract, public API, schema, runtime,
  financial, commercial, or disclosure gate status changes.
- A private path, private identifier, unsupported approval claim, guaranteed
  outcome claim, live-term claim, or enabled-operation claim is detected
  publicly.

Any occurrence or governing-corpus change requires a new evidence freeze before
decision work continues.

## Gate Preservation

This report creates one private decision artifact only. It does not sanitize or
modify public documentation, update navigation or generated public artifacts,
authorize external disclosure, claim Legal approval, create investor,
fundraising, marketing, product-launch, or commercial material, or change an
academic paper. It does not alter public APIs, schemas, runtime interfaces,
providers, wallets, contracts, token or treasury mechanics, payment,
settlement, redemption, or production systems.

Public mutation and sanitization remain unauthorized. Legal approval is not
granted. Production, provider activation, wallet signing, contract writes,
payment or settlement execution, and financial execution remain disabled. All
operational, commercial, production, and financial gates remain preserved
closed.
