---
schema_version: "1.0.0"
document_id: "PRIV-GDE-014"
aliases: []
document_type: "GUIDE"
title: "Trading Core Strategy Catalog"
summary: "Private guide for the licensed Trading strategy catalog, access models, and configurable client or tenant orchestration boundaries."
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
related_cores: ["TRADING", "ACS", "ACADEMY", "TREASURY", "GOVERNANCE", "TOKENOMICS", "BUSINESS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Trading Core Strategy Catalog

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

This guide records the private directional model for the paid or licensed
Trading core. It describes strategy classes, individual and tenant access
patterns, configurability boundaries, and high-level monetization direction
without authorizing live execution, public product claims, or production
operations.

## Core Strategy Scope

The core Trading nucleus is the monetizable operating layer of Trading. It is
intended to provide modular strategies that may be accessed individually or
configured within tenant-managed capital allocation.

The core model is separate from the promotional agent and is not subject to
the private USD 100 cap.

## Strategy Classes

Private strategy classes currently contemplated include:

- Day Trading / Scalping;
- Arbitrage;
- Grid Trading;
- Liquidity / Market Making;
- Spread Trading;
- future strategy classes added later according to demand and development.

Specific strategy algorithms, signal design, and execution timing remain:
[TBD — pending governance decision with first adopters]

## Individual Access Model

In the individual model:

- the client buys `$Neurons` and or contracts direct Trading access;
- the client selects strategies individually or as a package;
- Trinity coordinates sub-agents according to the selected strategy mix;
- the client remains the authority for configured strategy and risk direction
  within approved limits.

Access policy details remain:
[TBD — pending governance decision with first adopters]

## Tenant Access Model

In the tenant model:

- the client opens a tenant inside Axodus;
- the tenant deposits funds into the tenant context;
- the tenant defines percentage capital allocation by strategy;
- Trinity respects that allocation while orchestrating sub-agents;
- tenant-managed configuration becomes the primary strategy-mix input.

Illustrative allocation examples such as arbitrage, grid trading, day trading,
and liquidity percentages remain directional only and are not hard policy.

Tenant allocation governance remains:
[TBD — pending governance decision with first adopters]

## Client and Tenant Configurability

Client or tenant configuration may define:

- which strategies to use;
- capital allocation between strategies;
- risk profile within approved boundaries;
- reinvestment versus withdrawal direction;
- related operational preferences where policy allows.

Trinity may suggest rebalancing, but does not unilaterally override client or
tenant configuration.

## Risk-Profile Classification Boundary

The governing operating limit for the core Trading nucleus is intended to be a
risk-profile classification process rather than the promotional USD 100 cap.

Private direction includes:

- a risk-profile questionnaire;
- classification-specific leverage limits;
- classification-specific exposure limits;
- possible restrictions by strategy class;
- governance-defined operational risk boundaries.

Risk-profile questionnaire remains:
[TBD — pending governance decision with first adopters]

Leverage and exposure limits by classification remain:
[TBD — pending governance decision with first adopters]

## ACS and Academy Dependencies

ACS is required for monitoring, anomaly review, and strategy-governance
support. Academy is required for preparation, education, and future
specialized course alignment.

ACS direction includes:

- Smith monitoring anomalous behavior and inconsistency with declared risk
  profile;
- Morpheus providing explanatory risk context;
- Trinity coordinating strategies, telemetry, and sub-agents.

Academy direction includes:

- mandatory preparation for promotional onboarding;
- future advanced Trading courses for specialized or higher-risk strategy use;
- possible paid expert courses later under Academy's tutor model.

Curriculum depth remains:
[TBD — pending governance decision with first adopters]

## Revenue Boundary

The private revenue boundary is high-level only.

Possible core revenue paths include:

- strategy or operation commissions;
- licensing-linked access;
- tenant-linked fee models;
- future governance-defined revenue split rules.

Commission percentages remain:
[TBD — pending governance decision with first adopters]

Tenant fee model remains:
[TBD — pending governance decision with first adopters]

Revenue split remains:
[TBD — pending governance decision with first adopters]

Settlement and reporting model remains:
[TBD — pending governance decision with first adopters]

## Open Variables

The following core Trading variables remain unresolved:

- commission percentages by strategy;
- tenant fee model;
- revenue split model;
- risk-profile questionnaire;
- leverage and exposure limits by class;
- Academy curriculum for Trading strategies;
- Trinity internal algorithms;
- signals and timing rules;
- local versus Axodus infrastructure for sub-agents;
- settlement and reporting model;
- access-policy details;
- tenant allocation governance.

All unresolved items must retain the exact marker:
[TBD — pending governance decision with first adopters]

## Boundary Warnings

This guide is private and must not be copied into public docs, public
navigation, academic paper material, investor material, fundraising material,
or external commercial language.

Do not externalize:

- core fee or commission mechanics;
- risk-classification thresholds;
- strategy algorithms;
- private ACS criteria;
- exact tenant allocation governance;
- settlement or reporting mechanics.

## Non-Production Statement

This document does not enable production runtime, exchange API activation,
provider activation, wallet signing, contract writes, financial execution, or
live client capital orchestration.
