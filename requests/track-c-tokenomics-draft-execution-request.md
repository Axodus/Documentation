---
schema_version: "1.0.0"
document_id: "INT-PROP-TRACK-C-001"
aliases: []
document_type: "PROPOSAL"
title: "Track C Execution Request — Tokenomics Draft"
summary: "Internal execution request for drafting the private tokenomics track with legal-review-pending and no-external-use controls."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "EXPERIMENTAL"
maturity_level: "D1"
authority_scope: "DOCUMENTATION"
authority_level: "PROJECT"
author: "Axodus Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: []
business_reviewers: []
security_reviewers: []
approver: null
created_date: "2026-07-06"
last_updated: "2026-07-06"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: []
related_adrs: []
related_cores: ["TOKENOMICS", "TREASURY", "ACADEMY", "GOVERNANCE"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
classification: "INTERNAL_CONFIDENTIAL"
distribution: "RESTRICTED"
external_use: "PROHIBITED"
legal_review: "PENDING"
public_reference: "PROHIBITED"
---

# Track C Execution Request — Tokenomics Draft

> This request is an internal execution instruction. It is not itself a public
> disclosure document, fundraising document, investment material, governance
> charter, token issuance plan, projection, promise, offer, or legal position.

## Summary

Create a private tokenomics draft at
`institutional-disclosure/tokenomics-draft.md` inside the private
Documentation repository.

The resulting document must preserve numeric and structural decisions already
stated by the founder, must flag unresolved items explicitly, and must use
defensive language that prevents interpretation as investment material,
fundraising material, or public disclosure.

## Context

Track C records token-economic parameters that are intentionally excluded from
the public `Institutional` repository and from the academic paper. The track
exists to preserve internal traceability and execution boundaries while legal
review remains pending.

## Requested Output

Create:

- `institutional-disclosure/tokenomics-draft.md`

Update if needed:

- `institutional-disclosure/README.md`

## Mandatory Front Matter for the Target Document

The target document must include front matter stating all of the following:

- `classification: internal-confidential`
- `distribution: restricted`
- `external_use: prohibited`
- `legal_review: pending`
- `public_reference: prohibited`

It must also state in plain language:

- not public-facing
- not for external distribution
- not for fundraising use
- not for investor circulation
- not a projection, promise, or offer of any kind
- not part of the academic paper track

## Required Document Structure

The target document must include at least these sections:

1. Purpose and disclosure status
2. Token supply and reserve status
3. Emission schedule and halving rule
4. Treasury allocation status
5. Liquidity-pairing planning status
6. PoK Minter emission mechanics
7. Validator incentive structure
8. Open items and unresolved parameters
9. Legal-review-pending boundary
10. Non-paper boundary and disclosure gate

## Content Requirements

The target document must record the parameters already discussed:

- total supply of `10,000,000 $Neurons`
- annual halving schedule on May 13
- initial treasury allocation of `10% / 1,000,000 tokens`
- liquidity pairing plan involving USD, BTC, ETH, and gold via Ethereum
- remaining 90% reserve status as unallocated and subject to later governance
  decision
- PoK Minter emission split between paid-course direct emission and free-course
  locked emission
- validator reward structure with base reward, accuracy bonus, and penalty

The target document may record the reference price hypothesis of
`$10,000 per Neuron` only if it is explicitly and repeatedly framed as a
working hypothesis, not as a fact, projection, promise, valuation claim, price
support mechanism, or market expectation.

## Decision and Uncertainty Rules

Every unresolved parameter must be written exactly as:

`[TBD — pending governance decision with first adopters]`

Every numeric or structural parameter must be handled in one of two ways:

- explicitly stated as founder-decided and identified as such in the text
- explicitly marked with the required TBD label

## Prohibited Language and Content

The target document must not use or imply:

- investment opportunity
- expected return
- price support
- market demand
- guaranteed scarcity
- yield
- profit
- valuation
- investor allocation
- public sale
- fundraising round
- airdrop promise
- staking reward guarantee

The target document must also avoid:

- security, safety, or performance guarantees
- legal or regulatory compliance claims
- claims of active deployment, production use, active users, adoption, or
  revenue
- public-token-launch language

## Non-Mirroring Rule

Nothing from the target document may be:

- copied into `papers/axodus-architecture-paper/`
- cited in the public academic paper
- summarized in the public paper track
- linked from the public paper track
- imported into the public `Institutional` repository
- converted into public investor, grant, fundraising, or outreach material
  without a separate disclosure and legal decision

## Required Open Items Section

The target document must explicitly list all known unresolved parameters,
including any not-yet-finalized items in:

- reserve allocation
- liquidity execution
- validator penalties or thresholds
- emission calibration
- Boardroom / Executive approval dependencies

Each item must either be founder-decided or use the required TBD label.

## Shared Index Requirement

If `institutional-disclosure/README.md` does not already exist, create it as a
short private index for the disclosure track. It must identify:

- governance mechanics
- tokenomics draft
- their confidential status
- their separation from the academic paper track

## Verification and Acceptance

The execution is complete only if:

- `institutional-disclosure/tokenomics-draft.md` exists
- the document carries the legal-review-pending flag in front matter
- every numeric parameter is either founder-decided or explicitly marked TBD
- the reference price hypothesis is flagged as a working hypothesis only
- no fundraising, investor, valuation, return, guarantee, or public-sale
  language appears
- no public-paper-facing directory receives copied, linked, or summarized
  tokenomics content

## Out of Scope

This request does not authorize:

- edits to the academic paper track
- public release of tokenomics
- external distribution
- fundraising use
- investor circulation
- legal approval
- final economic-policy approval
- resolution of parameters explicitly deferred to first-adopter governance
  decisions
