---
schema_version: "1.0.0"
document_id: "PRIV-GDE-007"
aliases: []
document_type: "GUIDE"
title: "Marketplace Private Architecture"
summary: "Private institutional baseline for Marketplace strategic architecture, transaction flows, and licensing-sensitive boundaries."
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
related_cores: ["MARKETPLACE", "TREASURY", "TOKENOMICS", "GOVERNANCE", "ACADEMY", "BUSINESS", "ACS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Marketplace Private Architecture

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

This document records the private Marketplace strategic architecture based on
the consolidated Track B and Track C elicitation material. Its purpose is to
capture operational, treasury-linked, licensing, and tokenomics-sensitive
Marketplace mechanics in an internal-only baseline.

Disclosure status remains restricted. Nothing in this document is approved for
public release, public navigation, academic reuse, investor circulation,
fundraising narratives, legal reliance, or production activation.

## Strategic Positioning

Marketplace is the centralized storefront and transaction engine for Axodus
ecosystem products and services. It is not limited to generic e-commerce. It
is intended to aggregate native Axodus products, support third-party content
ingestion, route multi-asset purchases, expose dynamic pricing models, enable
tenant-curated catalog channels, and operate as a sellable modular software
product.

Marketplace is a core coordination surface between Academy, Business, Treasury,
Tokenomics, Governance, and ACS. The Marketplace operating direction is
private/internal-only wherever it refers to `$Neurons`, treasury routing,
royalties, price-oracle conversion, dividends, or APR-sensitive language.

## Storefront and Content Integration Model

Marketplace functions as:

- a centralized storefront for Axodus-native products and services;
- a transaction layer for purchases and settlement-sensitive flows;
- a modular content-ingestion surface for external products where integration
  is viable;
- a curation layer for tenant-operated sub-marketplaces.

The storefront model may combine synchronous external integrations and manual
content import where technical connectivity is unavailable or undesirable.

## Native Axodus Products and Third-Party Content

Native Axodus products may include:

- Academy free and paid courses;
- Mining services;
- Trading services;
- Business services;
- other ecosystem products and modules.

Third-party content may enter Marketplace through:

- API-based integration when partner connectivity is technically feasible;
- manual or static import when direct integration is not feasible.

Private examples such as OpenSea and Harry remain internal reference points
only. Their mention in this document is not public integration disclosure.

Academy course listing and payment utility are part of the private Marketplace
surface where course access, tutor commerce, and supported payment assets
intersect.

API-sync governance rules remain:
[TBD — pending governance decision with first adopters]

Manual import governance rules remain:
[TBD — pending governance decision with first adopters]

## Dynamic Pricing Strategies

Marketplace privately supports three pricing strategies:

- Dutch auction, where the initial price starts high and falls progressively;
- American auction, where bids increase from a lower starting point;
- fixed price, where the listed price is static.

The manager or seller is expected to define the final price manually. The
system may provide a price suggestion based on similarity, demand, or market
signals, but the suggestion is informational rather than binding.

Price-suggestion methodology remains:
[TBD — pending governance decision with first adopters]

## Multi-Asset Payment Model

Marketplace may accept multiple payment assets, including:

- `$Neurons`;
- USDT;
- USDC;
- Bitcoin;
- Ethereum.

Accepted-asset policy by listing type remains:
[TBD — pending governance decision with first adopters]

The presence of these assets in this document is private/internal-only where
their use links to treasury routing, tokenomics, or seller-settlement logic.

## Revenue Flows by Product Origin

Two private revenue patterns are contemplated.

Native Axodus product flow:

1. A buyer pays in `$Neurons` or another supported asset.
2. Product value and Marketplace commission may aggregate through the central
   treasury.
3. The relevant tutor, creator, or internal core may receive value through a
   later treasury-linked settlement or redemption boundary.

Third-party product flow:

1. A buyer pays using the relevant asset or system native to the third-party
   platform.
2. Product value may continue to follow the original seller or platform
   payment logic.
3. Marketplace captures commission or operational fees that may later require
   conversion before treasury intake.

Native-product revenue path to central treasury remains:
[TBD — pending governance decision with first adopters]

Commission and conversion routing for third-party products remains:
[TBD — pending governance decision with first adopters]

Seller settlement model by product origin remains:
[TBD — pending governance decision with first adopters]

No settlement formula, seller payout rule, or treasury routing percentage is
finalized by this document.

## Tenant Sub-Marketplaces and Channel Commissions

Marketplace may support tenant sub-marketplaces where a tenant:

1. selects a subset of Marketplace catalog products;
2. curates a channel-specific storefront;
3. receives performance-linked commission from sales through that channel.

Tenant sub-marketplace commission rules remain:
[TBD — pending governance decision with first adopters]

Tenant commission mechanics are private/internal-only and not approved for
public commercialization language.

## Marketplace as a Modular Product

Marketplace is intended to be sellable or licensable as a modular software
product rather than only as internal Axodus infrastructure.

The modular-product direction includes:

- standalone deployment outside the Axodus federated ecosystem;
- custom branding and UI;
- custom product logic and catalog logic;
- partner-controlled infrastructure options;
- continuous royalty treatment under private commercial logic.

This document does not convert that direction into a public product page,
contract, or sales offer.

## Licensing and Continuous Royalty Model

The private business direction includes:

- low installation or setup-fee concept to reduce adoption friction;
- recurring royalty capture on licensed Marketplace deployments;
- partner-operated infrastructure with continuing commercial alignment to
  Axodus.

Royalty contract model remains:
[TBD — pending governance decision with first adopters]

Licensing negotiation mode, including direct negotiation versus future
orchestrated flow, remains:
[TBD — pending governance decision with first adopters]

Legal framing of royalty and treasury-linked revenue language remains:
[TBD — pending governance decision with first adopters]

Royalty, dividend, APR, and flywheel language is private/internal-only and not
approved for external use without legal review.

## Technical Integrations and Price-Oracle Boundary

When Marketplace intermediates third-party products, the private direction is
to preserve source-platform payment logic while allowing Marketplace to capture
its own fee layer. Where third-party fees require conversion for treasury
intake, a price-oracle boundary may be required.

Exact price-oracle provider remains:
[TBD — pending governance decision with first adopters]

Price-oracle conversion details are private/internal-only. This document does
not authorize a specific oracle provider, conversion path, or automated
execution mechanism.

## Operational Characteristics

Marketplace operational characteristics may include:

- catalog organization;
- search and filtering;
- category structures;
- dynamic-pricing configuration;
- recommendation or demand-intelligence features;
- tenant curation;
- internal and third-party listing governance.

Recommendation and search sophistication roadmap remains:
[TBD — pending governance decision with first adopters]

Business-nucleus reseller or affiliation integration remains:
[TBD — pending governance decision with first adopters]

## Development Status

Marketplace is described privately as an advanced prototype with core features
implemented and tests beginning soon. That status is internal planning context
only and must not be represented as a public release statement, production
readiness claim, or operational guarantee.

Infrastructure responsibility for licensed deployments remains:
[TBD — pending governance decision with first adopters]

SLA and scalability for multiple simultaneous Marketplace deployments remains:
[TBD — pending governance decision with first adopters]

## Open Questions

The following items remain unresolved and must not be replaced with invented
values:

- exact price-oracle provider:
  [TBD — pending governance decision with first adopters]
- commission and conversion routing for third-party products:
  [TBD — pending governance decision with first adopters]
- seller settlement model by product origin:
  [TBD — pending governance decision with first adopters]
- accepted-asset policy by listing type:
  [TBD — pending governance decision with first adopters]
- native-product revenue path to central treasury:
  [TBD — pending governance decision with first adopters]
- tenant sub-marketplace commission rules:
  [TBD — pending governance decision with first adopters]
- royalty contract model for modular licensing:
  [TBD — pending governance decision with first adopters]
- licensing negotiation mode:
  [TBD — pending governance decision with first adopters]
- infrastructure responsibility for licensed deployments:
  [TBD — pending governance decision with first adopters]
- recommendation/search sophistication roadmap:
  [TBD — pending governance decision with first adopters]
- Business-nucleus reseller or affiliation integration:
  [TBD — pending governance decision with first adopters]
- SLA and scalability for simultaneous deployments:
  [TBD — pending governance decision with first adopters]
- manual import versus API-sync governance rules:
  [TBD — pending governance decision with first adopters]
- legal framing of royalty and treasury-linked revenue language:
  [TBD — pending governance decision with first adopters]

## ADR Candidates

### ADR Candidate 1 - Marketplace as Central Storefront and Transaction Engine

Problem:
Axodus products and services require a common storefront and transaction layer
rather than fragmented purchase surfaces.

Alternatives:

1. Keep each core commercially isolated.
2. Use Marketplace as a unified storefront and transaction layer.
3. Use third-party storefronts only.
4. Defer Marketplace until other cores mature.

Adopted direction:
Marketplace acts as the centralized storefront and transaction engine for
Axodus-native and approved external content.

### ADR Candidate 2 - Mixed Native and Third-Party Content Model

Problem:
Marketplace needs to support both native Axodus offerings and externally
originated products without forcing one ingestion model.

Alternatives:

1. Native products only.
2. API integration only.
3. Manual import only.
4. Support both API-based and manual/static ingestion.

Adopted direction:
Support native Axodus products plus third-party ingestion through API or manual
import depending on technical feasibility.

### ADR Candidate 3 - Modular Licensing with Recurring Royalty Direction

Problem:
Marketplace may serve not only internal ecosystem commerce but also external
partners who want a standalone deployable product.

Alternatives:

1. Internal-use Marketplace only.
2. One-time software sale only.
3. Modular licensing with recurring royalty concept.
4. Fully hosted-only Marketplace service.

Adopted direction:
Treat Marketplace as a modular product that may be licensed with a continuing
royalty model under private commercial controls.

## Security and Compliance Risks

| Risk | Description | Mitigation |
| --- | --- | --- |
| Public tokenomics leakage | Private `$Neurons` payment mechanics could be exposed publicly | Keep this document private and separate from public paths |
| Treasury leakage | Central treasury routing could be mistaken for a public operating promise | Preserve private-only treasury language and legal review gates |
| Settlement misrepresentation | Third-party seller flows could be misread as finalized execution logic | Keep seller-settlement specifics unresolved |
| Royalty overclaim | Licensing notes could be mistaken for a sales offer or guaranteed revenue model | Block public commercial framing and invented terms |
| Oracle dependency | Price-conversion automation could create operational and legal exposure | Keep oracle provider and conversion mechanics unresolved |
| Tenant commission confusion | Sub-marketplace incentives could be interpreted as live affiliate rules | Keep commission rules private and unresolved |
| Integration risk | External APIs may fail, drift, or create policy mismatches | Preserve mixed ingestion model and governance review |
| Boundary failure | Track B/C Marketplace content could leak into public docs or papers | Keep boundary review and disclosure gate explicit |

## Non-Paper Boundary and Disclosure Gate

This document must not be copied into public documentation, cited by academic
papers, summarized in public repositories, linked from public navigation, used
for fundraising, circulated to investors, or treated as legal approval.

Externalization requires a separate disclosure decision, governance review, and
legal review. Public APIs, schemas, runtime interfaces, production systems,
financial execution, provider execution, wallet signing, contract writes, and
production databases remain unchanged and not enabled by this document.
