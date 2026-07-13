---
schema_version: "1.0.0"
document_id: "PRIV-GDE-012"
aliases: []
document_type: "GUIDE"
title: "Trading Private Architecture"
summary: "Private institutional baseline for Trading strategic architecture, promotional-agent boundary, and licensed core strategy direction."
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
related_cores: ["TRADING", "ACS", "ACADEMY", "TREASURY", "GOVERNANCE", "MARKETPLACE", "TOKENOMICS", "BUSINESS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Trading Private Architecture

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
| provider_activation | false |
| exchange_api_activation | false |
| wallet_signing | false |
| contract_writes | false |
| financial_execution | false |

This document is a private institutional baseline. It is not public
documentation, not academic-paper source material, not investor material, not
fundraising material, not legal approval, and not production authorization.

## Purpose and Disclosure Status

This document records the private strategic architecture for Trading based on
the July 2026 consolidated elicitation material. Its purpose is to capture the
Track B operational-governance model and Track C tokenomics-sensitive boundary
for Trading without converting that model into public product language,
execution approval, or financial authorization.

Disclosure status remains restricted. Nothing in this document is approved for
public release, public navigation, academic reuse, investor circulation,
fundraising narratives, legal reliance, provider activation, exchange API
activation, or live operational enablement.

## Strategic Positioning

Trading is a dual-role core with two distinct but connected purposes:

1. a free promotional acquisition product;
2. a licensed and configurable core strategy nucleus.

The promotional layer is not intended to be the primary revenue engine. It is
an acquisition, trust-building, and ecosystem-conversion mechanism. The core
Trading nucleus is the monetizable layer through licensed access, strategy
selection, tenant configuration, and governance-defined commissions or fees.

## Dual-Role Operating Model

Private Trading direction is organized around two operating surfaces:

- Promotional Personal Day Trading Agent:
  free, invitational, non-custodial, constrained, and designed to generate
  trust and social proof.
- Core strategy catalog:
  paid or licensed access to modular strategies such as day trading,
  arbitrage, grid trading, liquidity or market making, spread trading, and
  later strategy classes.

This separation is intentional. The promotional model is a bounded acquisition
surface. The core model is the broader operating and monetization surface.

## Promotional Product - Personal Day Trading Agent

The Personal Day Trading Agent is a free promotional product intended to
provide direct experience with autonomous trading support under a controlled
private boundary.

High-level private onboarding direction:

1. the user creates a free Axodus account;
2. the user completes a free Academy Trading preparation course;
3. the user provides a personal LLM provider API key;
4. the user connects a personal Futures exchange account through an Axodus
   connector;
5. the user funds that personal exchange account with a small initial balance.

Named examples from the source direction include Anthropic, OpenAI, and Google
for LLM providers, and Binance, Kraken, and Coinbase for exchange surfaces.
These references remain private/internal-only in this document.

Operational direction:

- a Trading sub-agent coordinated by Trinity operates inside the client's own
  exchange account;
- Trinity defines the general short-term day-trading or scalping direction;
- the client does not manually manage each trade while the agent is active;
- no assets are transferred to Axodus wallets or Axodus-controlled accounts.

Specific strategy logic, signal timing, and execution rules remain:
[TBD — pending governance decision with first adopters]

## USD 100 Structural Boundary and License Transition

The promotional model includes a private structural boundary:

- when the monitored cumulative net result reaches USD 100 positive historical
  balance, the promotional sub-agent is automatically disabled for that
  account;
- if the client's monitored balance later falls below that boundary, reentry
  or reactivation may be possible under future policy;
- this USD 100 cap applies only to the promotional model and not to licensed
  or core Trading use.

The license-transition direction is:

- the client exits the free promotional mode;
- the client enters a paid licensing model;
- the client may pay a licensing fee;
- the client may pay a performance commission;
- the client gains access to broader core Trading capability.

Licensing fee remains:
[TBD — pending governance decision with first adopters]

Performance commission remains:
[TBD — pending governance decision with first adopters]

## Growth Loop and Result Sharing

The promotional product is also a growth-loop mechanism.

Private intended loop:

1. low-capital users enter through the free product;
2. users learn Trading basics through Academy;
3. users test the agent in a non-custodial personal account context;
4. users observe real results directly in their own exchange accounts;
5. satisfied users are encouraged, but never forced, to share results
   publicly;
6. public sharing generates social proof and attracts new users;
7. qualified users convert into core Trading or other Axodus products.

The result report is intended to track:

- initial balance;
- final balance;
- gains;
- losses;
- historical aggregated result.

Result-sharing incentives remain:
[TBD — pending governance decision with first adopters]

## Core Strategy Catalog and Access Models

The core Trading nucleus is a modular catalog of strategies that may be
acquired individually or configured through tenant operation.

Private strategy classes currently contemplated:

- Day Trading / Scalping;
- Arbitrage;
- Grid Trading;
- Liquidity / Market Making;
- Spread Trading;
- additional strategies added later by demand and development.

Two access models are intended:

- Individual model:
  the client buys `$Neurons` and or contracts direct Trading access, selects
  strategies individually or as a package, and Trinity coordinates the
  relevant sub-agents.
- Tenant model:
  the client opens a tenant, deposits funds into that tenant context, defines
  percentage capital allocation by strategy, and Trinity respects that
  allocation when orchestrating sub-agents.

Tenant allocation governance remains:
[TBD — pending governance decision with first adopters]

## Client and Tenant Configurability

Trading is not intended to be a unilateral autonomous allocator of client
capital.

Client or tenant configuration may define:

- which strategies to use;
- capital allocation between strategies;
- risk profile within governance-defined limits;
- reinvestment versus withdrawal direction;
- operational preferences where policy allows.

Trinity may suggest rebalancing or risk adjustments but does not unilaterally
override user or tenant configuration.

## Risk-Profile Classification Boundary

The core Trading nucleus does not inherit the promotional USD 100 cap. The
governing limit is instead intended to be a risk-profile classification model.

Private direction includes:

- a risk-profile questionnaire similar to a KYC-of-risk process;
- classification-specific leverage and exposure limits;
- possible restrictions by strategy class;
- governance-defined operating boundaries for higher-risk profiles.

Risk-profile questionnaire remains:
[TBD — pending governance decision with first adopters]

Risk thresholds by classification remain:
[TBD — pending governance decision with first adopters]

## Integration With ACS

ACS is a critical dependency for Trading.

Smith direction includes monitoring for:

- anomalous sub-agent behavior;
- trades without apparent analytical basis;
- manipulation of balance or historical reporting;
- inconsistency between declared risk profile and actual leverage or exposure.

Morpheus direction includes:

- continuous education about risk;
- strategy context and explanation;
- transparency for client and tenant choices.

Trinity direction includes:

- centralized strategy coordination;
- sub-agent generation and orchestration;
- telemetry collection;
- signal, trade, and P&L monitoring;
- strategy-level performance review;
- rebalance suggestion without unilateral override.

Private ACS veto criteria remain:
[TBD — pending governance decision with first adopters]

## Integration With Academy

Academy is part of the Trading preparation and access model.

Expected Trading-related educational coverage includes:

- day trading;
- arbitrage;
- grid trading;
- liquidity and market making;
- spread trading;
- leveraged operations;
- risk management;
- technical analysis;
- LLM API connection;
- exchange connector setup.

The promotional product is intended to require a free Academy onboarding path.
Advanced or specialized core Trading education may later include paid Academy
courses under the tutor marketplace model.

Trading curriculum structure remains:
[TBD — pending governance decision with first adopters]

## Revenue Boundary

The private revenue boundary is high-level only.

Current direction:

- promotional model up to the private USD 100 boundary generates no direct
  Trading revenue and is treated as acquisition investment;
- post-promotional licensed use may involve licensing fee and performance
  commission;
- core Trading may involve strategy or operation commissions and tenant-linked
  fee logic.

Commission percentages remain:
[TBD — pending governance decision with first adopters]

Revenue split remains:
[TBD — pending governance decision with first adopters]

Tenant fee model remains:
[TBD — pending governance decision with first adopters]

## Security and Custody Principles

The promotional model is intended to be explicitly non-custodial.

Private security and custody principles:

- promotional client funds remain in the client's own exchange account;
- Axodus does not take custody of promotional funds;
- the client carries trading-loss risk within the capital personally deposited;
- the client should be able to view account balance directly in the connected
  exchange;
- API permissions must be least privilege where possible;
- provider-key handling, exchange permissions, and execution boundaries remain
  security-sensitive private content;
- no Trading surface may be framed as guaranteed profit, guaranteed return,
  passive-income certainty, or risk-free automation.

Provider-key handling model remains:
[TBD — pending governance decision with first adopters]

Exchange connector permission scope remains:
[TBD — pending governance decision with first adopters]

## Open Questions

The following Trading parameters remain unresolved:

- promotional licensing fee;
- promotional performance commission;
- commission percentages by strategy;
- risk-profile questionnaire structure;
- leverage and exposure limits by classification;
- Academy Trading curriculum depth;
- Trinity internal algorithms;
- signals and timing rules;
- compliance framing for leveraged operations;
- public result-sharing incentive model;
- local versus Axodus infrastructure for sub-agents;
- exchange connector permission scope;
- provider-key handling model;
- settlement and reporting model;
- tenant allocation governance.

All unresolved items must retain the exact marker:
[TBD — pending governance decision with first adopters]

## ADR Candidates

### ADR Candidate - Promotional Trading Agent as Acquisition Channel

Problem:
Trading is high-risk and difficult to trust without direct user experience.

Alternatives:
1. Launch only paid Trading products.
2. Offer demo-only simulations.
3. Offer a real but capped non-custodial promotional agent.
4. Delay Trading until the full monetized core is ready.

Adopted Direction:
Use a free promotional Personal Day Trading Agent as an acquisition and
trust-building channel, bounded by a private structural USD 100 model.

Justification:
Real experience can build trust and social proof while limiting promotional
scope and preserving a path into licensed core products.

Trade-offs:
Users may misunderstand risk, public result sharing may create
investment-like perception, and ACS plus disclosure controls become critical.

### ADR Candidate - Non-Custodial Promotional Trading

Problem:
Taking custody of promotional client funds would increase regulatory,
operational, and trust risk.

Alternatives:
1. Axodus custodies promotional funds.
2. User operates manually without agent coordination.
3. Agent operates inside the user's own exchange account.
4. Use simulation only.

Adopted Direction:
The promotional trading agent operates inside the user's own exchange account
without transferring assets to Axodus.

Justification:
This preserves transparency and reduces custody exposure.

Trade-offs:
Exchange API permissioning becomes critical, the user still faces trading-loss
risk, and operational visibility depends on connectors and telemetry.

### ADR Candidate - Tenant Allocation Controlled by Client

Problem:
Trinity may optimize strategy choices, but unilateral reallocation of client
capital would create governance and trust risk.

Alternatives:
1. Trinity fully controls allocation.
2. Tenant fully controls allocation without suggestions.
3. Tenant defines allocation and Trinity may suggest rebalance.
4. Manual human operator controls all allocation.

Adopted Direction:
Tenant defines allocation. Trinity coordinates execution and may suggest
rebalance without unilateral override.

Justification:
This preserves client autonomy while keeping data-driven coordination
available.

Trade-offs:
Performance may be lower than fully autonomous allocation, clients may choose
suboptimal allocations, and Morpheus plus ACS must support education and risk
awareness.

## Security and Compliance Risks

| Risk | Description | Mitigation Direction |
| --- | --- | --- |
| leveraged loss risk | Futures and high-risk strategies may amplify client losses | Academy onboarding, risk disclosure, risk-profile classification |
| API permission abuse | Over-permissioned exchange APIs could expand blast radius | Least-privilege API guidance, connector controls, ACS monitoring |
| provider-key misuse | User-supplied LLM keys may be mishandled or overexposed | Private key-handling policy, logging, scoped integrations |
| misleading public sharing | Positive result sharing may be misread as investment promotion | Boundary controls, no-guarantee language, future sanitization if needed |
| sub-agent malfunction | Execution bugs or bad signals may create unsafe trading behavior | Trinity telemetry, Smith monitoring, pause or flagging logic |
| manipulation or bot-like behavior | External systems may interpret patterns as abusive or manipulative | ACS review, anomaly detection, connector governance |
| regulatory framing risk | Leveraged automation may be over-read as financial advice or managed service | Legal review before externalization, disclosure controls |
| custody misunderstanding | Users may wrongly assume Axodus holds or protects promotional funds | Clear custody boundary and user-owned-account language |

## Non-Paper Boundary and Disclosure Gate

This document belongs to Track B private operational governance and Track C
private tokenomics boundary material.

It must not be imported, summarized, or adapted into:

- public docs;
- academic paper material;
- public institutional narratives;
- investor materials;
- fundraising materials;
- public navigation;
- external sales or product claims.

Only abstract public-safe themes such as education about financial risk,
accountability in automated financial operations, transparency of autonomous
agents, risk-aware access, and high-level non-custodial automation may be used
outside this private disclosure path, and only under separate review.
