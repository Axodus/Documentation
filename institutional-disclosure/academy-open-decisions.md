---
schema_version: "1.0.0"
document_id: "PRIV-RPT-007"
aliases: []
document_type: "REPORT"
title: "Academy Open Decisions"
summary: "Private decision register for unresolved Academy governance, tokenomics, treasury, and validation parameters."
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
related_cores: ["ACADEMY", "GOVERNANCE", "TOKENOMICS", "TREASURY", "ACS", "MARKETPLACE"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Academy Open Decisions

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| academic_paper_use | PROHIBITED |
| public_reference | PROHIBITED |
| fundraising_use | PROHIBITED |
| investor_material | false |
| legal_review | REQUIRED_BEFORE_EXTERNAL_USE |

## Decision Register

| Decision Area | Current Status | Current Default or Note | Dependency Owner | TBD Marker Where Unresolved |
| --- | --- | --- | --- | --- |
| course category structure | Unresolved | No final category taxonomy is adopted for Academy | Governance | [TBD — pending governance decision with first adopters] |
| single governance pool vs category pools | Unresolved | No final Academy allocation-pool structure is adopted | Governance | [TBD — pending governance decision with first adopters] |
| lock-up rules | Unresolved | Locked reward behavior exists as a private design concept without final lock policy | Governance / Treasury | [TBD — pending governance decision with first adopters] |
| rate-limiting for wallet release | Unresolved | No release cadence, cooldown, or cap is finalized | Governance / ACS / Treasury | [TBD — pending governance decision with first adopters] |
| post-audit mint signer | Unresolved | Mint signer remains undefined after ACS-governed release approval | Treasury / Governance | [TBD — pending governance decision with first adopters] |
| automatic contract vs human validation | Unresolved | Final approval path is not fixed between automation and human validation | Governance / ACS | [TBD — pending governance decision with first adopters] |
| curriculum structure | Unresolved | No final curriculum decomposition or progression architecture is adopted | Academy / Governance | [TBD — pending governance decision with first adopters] |
| course prerequisites | Unresolved | Prerequisite chains are not finalized | Academy / Governance | [TBD — pending governance decision with first adopters] |
| emission rates | Unresolved | Reward emission values and formulas are intentionally undefined | Governance / Tokenomics | [TBD — pending governance decision with first adopters] |
| quiz score thresholds | Unresolved | No final competence threshold is adopted for certification or rewards | Governance / Academy | [TBD — pending governance decision with first adopters] |
| platform commission percentages | Unresolved | Marketplace-style commission exists conceptually without approved percentages | Marketplace / Governance | [TBD — pending governance decision with first adopters] |
| treasury redemption rules | Unresolved | Treasury-facing redemption policy is not approved for users or tutors | Treasury / Governance / Legal | [TBD — pending governance decision with first adopters] |
| tutor redemption limits | Unresolved | No caps, windows, reserve priorities, or payout bounds are finalized | Treasury / Governance / Legal | [TBD — pending governance decision with first adopters] |
| local governance voting rules | Unresolved | Academy local governance exists conceptually without final vote mechanics | Governance | [TBD — pending governance decision with first adopters] |
| legal framing of revenue distribution | Unresolved | High-risk wording remains blocked pending legal review | Legal | [TBD — pending governance decision with first adopters] |

## Dependency Notes

### Governance

Governance owns the unresolved decisions around Academy allocation pools, local
voting rules, issuance authority, release policy, prerequisites, quiz
thresholds, and progressive governance participation. Governance must preserve
the exact unresolved marker until first-adopter decisions exist.

### Treasury

Treasury owns unresolved questions around redemption rules, reserve interaction,
wallet release controls, and post-audit mint-signing responsibility. No
treasury execution rule is approved by this register.

### ACS

ACS owns dependency input for behavior review, risk flags, release gating, and
possible automation versus human review boundaries. ACS does not resolve these
items independently and does not acquire final approval authority through this
register.

### Marketplace

Marketplace owns dependency input for commission structure, course-purchase
settlement, tutor-facing economic pathways, and potential internal-spend
behavior. Marketplace does not finalize the economic rules alone.

### Legal

Legal review is required before any Academy language related to revenue
distribution, dividends, APR, tutor redemption, or reserve-backed conversion is
treated as externally usable. This register does not authorize legal framing.

## Boundary

This decision register is private and must not be copied into public
documentation, academic papers, public institutional materials, investor
materials, fundraising materials, or external governance/tokenomics
communications.

It is not legal approval, public governance activation, production
enablement, or authorization for external disclosure.
