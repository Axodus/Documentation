---
schema_version: "1.0.0"
document_id: "PRIV-GDE-013"
aliases: []
document_type: "GUIDE"
title: "Trading Promotional Agent Model"
summary: "Private guide for the free Personal Day Trading Agent, its structural limits, and its conversion path into licensed Trading."
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
related_cores: ["TRADING", "ACS", "ACADEMY", "BUSINESS", "MARKETPLACE"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Trading Promotional Agent Model

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

## Purpose

This guide records the private directional model for the free Personal Day
Trading Agent. It captures the acquisition logic, onboarding boundary,
operational flow, structural cap, and licensed transition path without
authorizing live deployment, public marketing claims, or execution enablement.

## Promotional Product Scope

The promotional product is intended to be:

- free to access;
- low-friction and invitational;
- non-custodial;
- bounded by a structural promotional limit;
- useful as a trust-building and conversion mechanism into the broader Axodus
  ecosystem.

It is not intended to be the primary monetization layer of Trading.

## Onboarding Flow

Private onboarding direction:

1. the user creates a free Axodus account;
2. the user completes a free Academy Trading preparation course covering market
   formation, leveraged operations, signal reading, technical analysis, and
   LLM API connection basics;
3. the user provides a personal LLM provider API key;
4. the user connects a personal Futures exchange account through an Axodus
   connector;
5. the user deposits a small starting balance into that personal exchange
   account.

Named provider examples include Anthropic, OpenAI, Google, and other
compatible providers. Named exchange examples include Binance, Kraken,
Coinbase, and other supported exchange surfaces. These references remain
private/internal-only in this guide.

## Operational Flow

Private operating direction:

- a Trading sub-agent coordinated by Trinity operates in isolation inside the
  user's own exchange account;
- Trinity defines the general short-term day-trading or scalping direction;
- the client does not manually manage each trade while the agent is active;
- all asset custody remains outside Axodus;
- internal reporting is generated for client transparency and ACS audit.

Final execution topology, runtime location, and strategy logic remain:
[TBD — pending governance decision with first adopters]

## USD 100 Structural Boundary

The promotional model includes a private structural boundary:

- historical cumulative result is monitored continuously;
- when the cumulative net result reaches USD 100 positive historical balance,
  the promotional sub-agent is automatically disabled for that account;
- if the user's monitored balance later falls below the boundary, reactivation
  may be possible under future policy;
- the USD 100 cap applies only to the promotional model.

This boundary is private Track B/C content and is not approved for public
documentation or academic-paper material.

## License Transition Boundary

When the user wants to continue beyond the promotional boundary:

- the user exits the free promotional model;
- the user enters a paid licensing path;
- the user may pay a licensing fee;
- the user may pay a performance commission;
- the user gains access to broader core Trading capability.

Licensing fee remains:
[TBD — pending governance decision with first adopters]

Performance commission remains:
[TBD — pending governance decision with first adopters]

## Client Result Reporting and Sharing Loop

The system is intended to calculate and report:

- initial balance;
- final balance;
- gains;
- losses;
- historical aggregated result.

This report serves three private purposes:

- internal ACS audit;
- client transparency;
- optional public sharing by the client.

Sharing is intended to be encouraged, never mandatory. Incentives for sharing
remain:
[TBD — pending governance decision with first adopters]

## Custody and Client-Risk Boundary

The promotional model is intended to remain non-custodial.

Key private boundary rules:

- client funds are never transferred to Axodus in this model;
- operations happen inside the client's own exchange account;
- the client sees balance directly in the connected exchange;
- the client carries trading-loss risk within the balance personally
  deposited;
- the promotional agent must not be framed as guaranteed profit, guaranteed
  return, or risk-free automation.

## ACS and Academy Dependencies

Academy is an onboarding dependency and ACS is an operating-control dependency.

Academy role:

- prepare the user before access;
- provide basic risk and operational understanding;
- support low-friction but informed onboarding.

ACS role:

- Smith monitors anomalous or manipulative patterns;
- Morpheus provides explanatory and educational context;
- Trinity coordinates the sub-agent and related telemetry.

Private ACS veto criteria remain:
[TBD — pending governance decision with first adopters]

## Open Variables

The following promotional-agent variables remain unresolved:

- licensing fee;
- performance commission;
- sharing incentive model;
- runtime topology;
- exchange connector permission scope;
- LLM provider key handling model;
- reactivation policy;
- reporting and settlement detail.

All unresolved items must retain the exact marker:
[TBD — pending governance decision with first adopters]

## Boundary Warnings

This guide must not be copied into public docs, public navigation, academic
paper material, investor material, fundraising material, or external product
claims.

In particular, do not externalize:

- the USD 100 promotional cap;
- licensing or commission direction;
- provider-key flow;
- connector flow;
- private ACS criteria;
- result-sharing incentive mechanics.

## Non-Production Statement

This document does not enable production runtime, provider activation, exchange
API activation, wallet signing, contract writes, financial execution, or live
user-facing Trading operation.
