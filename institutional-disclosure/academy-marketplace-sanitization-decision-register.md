---
schema_version: "1.0.0"
document_id: "PRIV-RPT-011"
aliases: []
document_type: "REPORT"
title: "Academy and Marketplace Sanitization Decision Register"
summary: "Private decision register classifying current Academy and Marketplace public findings for future sanitization follow-up."
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
related_cores: ["ACADEMY", "MARKETPLACE", "TOKENOMICS", "TREASURY", "GOVERNANCE", "ACS", "BUSINESS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Academy and Marketplace Sanitization Decision Register

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

## Purpose

This register classifies current public Academy and Marketplace references so
future sanitization work, if chosen, can be executed through dedicated
follow-up requests without editing public files in this request.

## Decision Criteria

The following criteria govern classification:

- generic conceptual references may remain public only if they do not reveal
  private mechanics;
- specific private mechanics require sanitization;
- any `institutional-disclosure/` path outside `institutional-disclosure/`
  would be a boundary blocker;
- any public dividend, APR, profit, yield, investor-return, public-sale, or
  legal-approval framing would require legal review or sanitization;
- any public numbers for emission, royalty, commission, treasury routing,
  redemption, or oracle mechanics would require sanitization;
- findings are classified only; no public edits occur in this request.

## Academy Decision Register

| Core | Public Surface | Observed Reference | Classification | Rationale | Required Action | Follow-Up Request | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Academy | `docs/academy/overview.md` | Generic `$Neurons` utility in Academy overview | SANITIZATION_REQUIRED | Private Academy public-safe framing excludes token-specific utility language | Replace with abstract competence/education language in a future public pass | Future Academy public sanitization request | Documentation Core / Academy | RECOMMENDED |
| Academy | `docs/academy/locked-rewards.md` | Locked rewards as a detailed design concept | SANITIZATION_REQUIRED | Current public-safe boundary should avoid reward-mechanic specificity | Reduce to high-level readiness or internal-utility abstraction | Future Academy public sanitization request | Documentation Core / Academy | RECOMMENDED |
| Academy | `docs/academy/token-reward-flows.md` | Reward flows including locked, unlocked, claimed, and Marketplace-spendable states | SANITIZATION_REQUIRED | Flow vocabulary overlaps too closely with private operational mechanics | Remove flow-shape detail from public Academy framing | Future Academy public sanitization request | Documentation Core / Academy | RECOMMENDED |
| Academy | `docs/academy/marketplace-integration.md` | Marketplace payment utility using `$Neurons`, locked rewards, and tutor-settlement questions | SANITIZATION_REQUIRED | Public-safe Academy framing should not expose payment-utility or settlement-sensitive detail | Rewrite toward generic course-commerce integration without token or settlement detail | Future Academy public sanitization request | Documentation Core / Academy / Marketplace | RECOMMENDED |

## Marketplace Decision Register

| Core | Public Surface | Observed Reference | Classification | Rationale | Required Action | Follow-Up Request | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Marketplace | `docs/marketplace/tokenomics-alignment.md` | Generic `$Neurons` payment utility and tokenomics-interface questions | SANITIZATION_REQUIRED | Stricter public-safe Marketplace framing should avoid token-specific payment mechanics | Rewrite to abstract payment and transaction-surface language | Future Marketplace public sanitization request | Documentation Core / Marketplace | RECOMMENDED |
| Marketplace | `docs/marketplace/treasury-alignment.md` | Treasury alignment and treasury-facing reporting fields | SANITIZATION_REQUIRED | Public-safe Marketplace framing should avoid treasury-linked operational detail | Reduce to abstract reporting/accountability language | Future Marketplace public sanitization request | Documentation Core / Marketplace / Treasury | RECOMMENDED |
| Marketplace | `docs/marketplace/fees-and-revenue.md` | Generic fees as a structured Marketplace subsystem | SANITIZATION_REQUIRED | Current private boundary narrows public-safe Marketplace framing below fee-mechanic specificity | Rewrite to abstract commercial-governance language or move detail behind a later disclosure gate | Future Marketplace public sanitization request | Documentation Core / Marketplace | RECOMMENDED |
| Marketplace | `docs/marketplace/fees-and-revenue.md` | Royalty references | SANITIZATION_REQUIRED | Royalty economics connect directly to the private licensing model | Remove or abstract royalty-specific treatment from public Marketplace surfaces | Future Marketplace public sanitization request | Documentation Core / Marketplace / Business | RECOMMENDED |
| Marketplace | `docs/marketplace/fees-and-revenue.md` and `docs/marketplace/treasury-alignment.md` | Commission references | SANITIZATION_REQUIRED | Commission mechanics are part of private operational and treasury-sensitive logic | Replace with generic cost or policy language if public disclosure remains restricted | Future Marketplace public sanitization request | Documentation Core / Marketplace / Treasury | RECOMMENDED |
| Marketplace | `docs/marketplace/payments-and-settlement.md` | Seller settlement and payout-field references | SANITIZATION_REQUIRED | Seller-settlement detail exceeds the preferred public-safe abstraction layer | Rewrite toward generic order-completion language without payout-field detail | Future Marketplace public sanitization request | Documentation Core / Marketplace | RECOMMENDED |
| Marketplace | `docs/marketplace/credits-and-locked-rewards.md` | Locked rewards and Marketplace internal-utility language | SANITIZATION_REQUIRED | Current public-safe framing should avoid token/reward mechanics | Replace with generic restricted-utility caution or remove from public path | Future Marketplace public sanitization request | Documentation Core / Marketplace | RECOMMENDED |
| Marketplace | `docs/marketplace/payments-and-settlement.md` and `docs/marketplace/tokenomics-alignment.md` | Marketplace payment utility and accepted-asset references | SANITIZATION_REQUIRED | Accepted-asset and payment-utility detail overlaps with private multi-asset operating logic | Rewrite to abstract transaction interface language | Future Marketplace public sanitization request | Documentation Core / Marketplace | RECOMMENDED |

## Cross-Core Decision Register

| Core | Public Surface | Observed Reference | Classification | Rationale | Required Action | Follow-Up Request | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cross-Core | `docs/`, `README.md`, `SUMMARY.md`, `docs/.vitepress/`, `documentation/DOCUMENTATION-MASTER-INDEX.md` | No `institutional-disclosure/` path or private artifact filename exposure found | MONITOR_ONLY | No boundary blocker exists, but future regressions would be severe | Keep as a recurring boundary regression scan | None | Documentation Core | ACTIVE |
| Cross-Core | `README.md` and `docs/index.md` | Negative risk language around profit, yield, APY, and return | ACCEPTABLE_PUBLIC_ABSTRACTION | These references are cautionary prohibitions, not return promises | No remediation in this request; retain watch for accidental promotional drift | None | Documentation Core | ACTIVE |
| Cross-Core | `docs/index.md` | Generic `PoK minting` reference on the Tokenomics card | MONITOR_ONLY | Generic tokenomics reference does not expose Academy or Marketplace private mechanics, but remains adjacent to private themes | Keep under watch if stricter whole-corpus sanitization is later pursued | None | Documentation Core / Tokenomics | ACTIVE |

## Recommended Future Requests

- Separate Academy public sanitization request.
- Separate Marketplace public sanitization request.
- Optional later public-safe framing guide only if the rewrite effort needs a
  shared abstraction baseline.

## Deferred Items

- No public remediation occurs here.
- No legal approval is inferred.
- No boundary blocker is currently open.
- No change to public APIs, schemas, runtime interfaces, or production systems
  is authorized.

## Gate Preservation

This register does not remediate public documentation, update academic paper
material, update investor material, update fundraising material, expose private
artifacts, change public navigation, modify public APIs, modify schemas, modify
runtime interfaces, enable production systems, perform financial execution,
activate providers, perform wallet signing, write contracts, write production
databases, or open operational gates.
