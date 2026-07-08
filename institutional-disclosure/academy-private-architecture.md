---
schema_version: "1.0.0"
document_id: "PRIV-GDE-005"
aliases: []
document_type: "GUIDE"
title: "Academy Private Architecture"
summary: "Private institutional baseline for Academy strategic architecture, governance dependencies, and tokenomics-sensitive boundaries."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "EXPERIMENTAL"
maturity_level: "D2"
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
related_cores: ["ACADEMY", "MARKETPLACE", "ACS", "TREASURY", "GOVERNANCE", "TOKENOMICS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Academy Private Architecture

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
| production_enablement | false |
| financial_execution | false |

This document is a private institutional baseline. It is not public
documentation, not academic-paper source material, not investor material, not
fundraising material, not legal approval, and not production authorization.

## Purpose and Disclosure Status

This document records the private strategic architecture for Academy based on
`ACADEMY-PRIVATE-ARCH-001`. Its purpose is to consolidate Track B private
operational governance and Track C private tokenomics dependencies in one
internal-only Academy baseline.

Disclosure status remains restricted. Nothing in this document is approved for
public release, public navigation, academic reuse, investor circulation,
fundraising narratives, or legal reliance.

## Strategic Positioning and Competence-Gateway Logic

Academy is the educational and competence-gateway layer of the Axodus
ecosystem. Its strategic role is not limited to content delivery. Academy is
intended to establish a lightweight mechanism through which users, tenants, and
ecosystem participants demonstrate minimum competence before receiving broader
access to higher-risk or higher-complexity capabilities.

The private operating premise is:

`Knowledge is a prerequisite for responsible access.`

The competence-gateway logic applies especially to domains with elevated misuse
risk, support burden, or operational complexity, including DeFi, trading,
mining, treasury-related flows, and tenant-operated ecosystem modules.

Academy is not intended to become a bureaucratic gate. The architecture must
stay fast and low-friction so that education supports product readiness without
becoming a commercial dead-end.

## Epistemic Self-Determination and Direct Quiz Validation

Academy should allow epistemic self-determination. Users who already possess
the relevant knowledge are not required to consume the full instructional path
before demonstrating competence.

The intended flow allows:

- optional content consumption;
- direct access to validation quizzes where appropriate;
- certification only after sufficient demonstrated performance;
- low-friction validation for knowledgeable users;
- learning-before-action for users who do not yet possess the required
  competence.

Quiz score thresholds remain:
[TBD — pending governance decision with first adopters]

Course prerequisites remain:
[TBD — pending governance decision with first adopters]

## Course Model

Academy supports both free and paid course models.

Free-course baseline:

- educational content;
- quiz;
- certificate after successful completion.

Certificate validity is conditional on passing the associated assessment at the
required threshold. The certificate must not be treated as automatically valid
without demonstrated competence.

Paid-course baseline:

- tutors may register as instructors;
- tutors may create and publish their own courses using Academy
  infrastructure;
- tutors define the reference price in USD;
- the system converts the USD-denominated price into the equivalent amount in
  `$Neurons`;
- users pay using `$Neurons`.

Platform commission exists as a marketplace-style infrastructure fee. The exact
commission percentage remains:
[TBD — pending governance decision with first adopters]

Course category structure remains:
[TBD — pending governance decision with first adopters]

## Private $Neurons Economy Inside Academy

Academy privately models an internal `$Neurons` economy with both earning and
spending paths.

Users may earn `$Neurons` by:

- completing free courses;
- passing associated quizzes;
- achieving higher scores.

The intended allocation is performance-sensitive, meaning stronger quiz
performance may release a larger internal allocation. Exact emission rates,
score bands, and distribution formulas remain:
[TBD — pending governance decision with first adopters]

Users may spend `$Neurons` by:

- paying for paid tutor courses;
- consuming other internal ecosystem services;
- participating in burn or restricted utility paths where policy defines them.

External acquisition paths may include:

- DEX purchase at market price;
- VALT mint using reserve assets such as USDT, USDC, Ethereum, or Bitcoin.

VALT minting mechanics, reserve-asset treatment, and wallet-facing operating
flows are private and not approved for external disclosure.

## Locked-to-Wallet Redemption Flow and ACS Veto Boundary

Academy introduces a private distinction between earned, mined, or locked
`$Neurons` and wallet-realized `$Neurons`.

The intended flow is:

1. A user completes a free course.
2. The user passes the associated quiz.
3. Locked rewards are allocated internally.
4. The user either consumes them internally, burns them where permitted, or
   requests wallet release.
5. ACS evaluates behavioral and ecosystem-wide risk conditions.
6. If approved, mint may occur at a 1:1 ratio from locked allocation to wallet
   realization.
7. If rejected or delayed, wallet release does not proceed.

ACS monitors behavior across the wider ecosystem and may veto release on
private grounds such as fraud, massive or farmed-account patterns, abusive
behavior, or other risk flags.

Lock-up rules remain:
[TBD — pending governance decision with first adopters]

Rate-limiting for wallet release remains:
[TBD — pending governance decision with first adopters]

Post-audit mint signer details remain:
[TBD — pending governance decision with first adopters]

Automatic contract versus human validation remains:
[TBD — pending governance decision with first adopters]

## Cascading Governance and Progressive Power Transfer

Academy follows a private cascading governance model.

Private governance flow:

1. Central governance, composed of Executive DAO and Community DAO, defines the
   annual `$Neurons` budget leaving DAO treasury control and entering the POK
   Minter contract.
2. POK Minter distributes the governance-defined allocation on a periodic basis
   such as daily or epoch-based cadence.
3. Academy local governance defines how the received budget is allocated among
   courses, users, quiz performance bands, local incentive priorities, and
   demand signals.
4. User rewards and ecosystem access inherit from those local allocation rules.

POK Minter periodicity remains:
[TBD — pending governance decision with first adopters]

Single governance pool versus category-specific pools remains:
[TBD — pending governance decision with first adopters]

Local governance voting rules remain:
[TBD — pending governance decision with first adopters]

Progressive power transfer is intended to evolve from community-DAO-led private
baseline governance toward participation by certified students,
tutors/instructors, and `$Neurons` holders. That transfer remains private,
governance-dependent, and not approved as a public decentralization claim.

## Integration With Marketplace, ACS, and Tenant Access Passports

Marketplace is the intended commercial storefront for Academy courses and other
ecosystem products. Marketplace responsibilities include:

- course listing;
- ecommerce flow;
- transaction processing;
- payment routing.

Academy certification may function as a tenant access passport. Certified
tenants may receive broader access to complex modules, while uncertified
tenants may operate under reduced limits, increased restrictions, or higher
central support burden.

ACS remains a continuous cross-core exception. It monitors behavior across the
ecosystem, including Academy, and can affect reward release and redemption
flows. Detailed tenant access passport enforcement and ACS veto criteria remain
private operational content.

## Extreme Modularity and Tenant-Specific Deployment Boundary

Academy must be architected as an independently operable core rather than only
as a tightly coupled ecosystem feature. The private modularity baseline
requires:

- modular deployment boundaries;
- separable economic configuration;
- isolated governance configuration;
- tenant-specific customization capability;
- independent operating mode outside the federated ecosystem.

This allows Axodus to provide customized or exclusive Academy deployments where
approved, without assuming federation-wide coupling.

## Academy as Replicable Economic Template for Other Cores

Academy is intended to serve as the first detailed private economic template
for other Axodus cores.

The reusable pattern includes:

- `$Neurons`-denominated pricing;
- platform commission;
- treasury-linked redemption or release boundaries;
- ACS audit gates;
- cascading governance;
- local allocation rules.

Other cores may reuse the pattern while defining their own products, services,
commission tables, value splits, and local financial mechanics. This document
does not authorize those downstream mechanics as active, implemented, or
publicly disclosed.

## Central Treasury Alignment and Tutor Redemption Boundary

Current private treasury direction is a single central treasury rather than
fragmented treasuries per core.

The private rationale is that aggregated treasury resources may support active
revenue generation across liquidity pools, mining, and trading. Those revenue
paths are treated as private strategic assumptions and are not approved for
external description as active return, guaranteed yield, price support, or
investment opportunity.

Tutor redemption boundary:

- tutors may accumulate `$Neurons` through paid-course activity;
- tutors may request redemption into reserve currency through the treasury;
- possible assets include USDC, USDT, Bitcoin, or other treasury reserve
  assets.

Treasury redemption rules remain:
[TBD — pending governance decision with first adopters]

Tutor redemption limits remain:
[TBD — pending governance decision with first adopters]

## Foundational Pillars and Legally Sensitive Framing

The private Academy architecture inherits two foundational pillars from the
broader Axodus design debates.

Pillar 1:

`Knowledge generates freedom.`

Knowledge is treated as a prerequisite for safe action, especially before users
or tenants access complex ecosystem tools.

Pillar 2:

`Real revenue, not disguised dilution.`

The private direction rejects reward systems based purely on dilution without
economic backing. The intended model assumes that distributions should rest on
verifiable revenue generated by the ecosystem.

Legally sensitive terms such as dividends, APR, revenue distribution, profit
participation, investor, shareholder, or partner-shareholder profile remain
private/internal-only and are not approved for public use without legal review.

Legal framing of revenue distribution remains:
[TBD — pending governance decision with first adopters]

## Revenue Audit and Verification Model

ACS is expected to serve as the primary routine verifier because most ecosystem
transactions occur on-chain and can be structurally inspected.

The private assumption is that ACS may cover the majority of routine
verification, while conventional external audit is reserved for:

- exceptional requests;
- detected problems;
- specific governance requirements;
- legal or institutional review needs.

The intended transparency model is structural and on-chain rather than purely
institutional.

## Open Questions

The following items remain unresolved and must not be filled with invented
values:

- course category structure:
  [TBD — pending governance decision with first adopters]
- single governance pool versus category-specific pools:
  [TBD — pending governance decision with first adopters]
- lock-up rules:
  [TBD — pending governance decision with first adopters]
- rate-limiting for wallet release:
  [TBD — pending governance decision with first adopters]
- technical mint signer after audit:
  [TBD — pending governance decision with first adopters]
- automatic contract versus human validation:
  [TBD — pending governance decision with first adopters]
- curriculum structure:
  [TBD — pending governance decision with first adopters]
- course prerequisites:
  [TBD — pending governance decision with first adopters]
- emission rates:
  [TBD — pending governance decision with first adopters]
- quiz score thresholds:
  [TBD — pending governance decision with first adopters]
- platform commission percentages:
  [TBD — pending governance decision with first adopters]
- treasury redemption rules:
  [TBD — pending governance decision with first adopters]
- tutor redemption limits:
  [TBD — pending governance decision with first adopters]
- local governance voting rules:
  [TBD — pending governance decision with first adopters]
- legal framing of revenue distribution:
  [TBD — pending governance decision with first adopters]

## ADR Candidates

### ADR Candidate 1 - Academy as Competence Gateway

Problem:
Users can access complex ecosystem products without adequate knowledge,
increasing support burden, misuse risk, and accountability failures.

Alternatives:

1. Allow unrestricted access.
2. Require mandatory full-course consumption.
3. Require lightweight knowledge validation with optional content consumption.
4. Centralize manual approval.

Adopted direction:
Academy acts as a competence gateway with optional learning paths and direct
quiz validation for users who already possess the relevant knowledge.

### ADR Candidate 2 - Central Treasury for Cross-Core Economics

Problem:
Per-core treasuries may fragment liquidity, concentrate operational duplication,
and weaken aggregated treasury strategy.

Alternatives:

1. Separate treasury per core.
2. Central treasury only.
3. Hybrid treasury with sub-accounts.
4. External custody per core.

Adopted direction:
Single central treasury with future core-specific accounting rules still
pending.

### ADR Candidate 3 - Academy as Reusable Economic Template

Problem:
If each core invents separate pricing, commission, governance, audit, and
redemption mechanics, the ecosystem accumulates operational fragmentation.

Alternatives:

1. Unique economic model per core.
2. Academy model as the first reusable template.
3. Marketplace-only monetization.
4. No internal tokenized pricing.

Adopted direction:
Academy is used as the first private economic template for later core reuse.

## Security and Compliance Risks

| Risk | Description | Mitigation |
| --- | --- | --- |
| Public tokenomics leakage | Private `$Neurons` mechanics could be exposed publicly | Keep this document private and separate from public paths |
| Investment framing | Revenue or dividends language may be interpreted as securities-like claims | Require legal review before externalization |
| Reward farming | Users may exploit free courses to mine locked rewards | Use ACS monitoring and release veto |
| Tutor abuse | Low-quality or fraudulent paid courses may enter the system | Require tutor governance, review, and dispute controls |
| Treasury concentration | Central treasury concentrates operational and legal risk | Maintain strong governance and audit boundaries |
| Redemption pressure | Tutor or user redemptions may stress treasury reserves | Keep rate limits and redemption rules unresolved until approved |
| Governance capture | Local Academy governance may be dominated by narrow groups | Use progressive governance and safeguards |
| Quiz manipulation | Users may game validation quizzes | Use quiz quality controls, randomization, and ACS analysis |
| Tenant misuse | Uncertified tenants may operate risky modules | Use certification-gated access and limits |
| Boundary failure | Track B/C private content may leak into public or academic outputs | Preserve boundary audits and disclosure gates |

## Non-Paper Boundary and Disclosure Gate

This document must not be copied into public documentation, cited by academic
papers, summarized in public repositories, linked from public navigation, used
for fundraising, circulated to investors, or treated as legal approval.

Externalization requires a separate disclosure decision, governance review, and
legal review. Production, financial execution, provider execution, wallet
signing, contract writes, and public APIs remain closed and not enabled by this
document.
