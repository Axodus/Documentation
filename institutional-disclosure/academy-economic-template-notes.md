---
schema_version: "1.0.0"
document_id: "PRIV-GDE-006"
aliases: []
document_type: "GUIDE"
title: "Academy Economic Template Notes"
summary: "Private notes defining Academy as the first reusable economic template for other Axodus cores."
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
related_cores: ["ACADEMY", "TOKENOMICS", "TREASURY", "GOVERNANCE", "MARKETPLACE", "ACS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Academy Economic Template Notes

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

This guide defines Academy as the first reusable private economic template for
other Axodus cores without converting it into a production tokenomics
specification, public tokenomics specification, or legal disclosure artifact.

## Template Scope

The template scope covers the reusable operating pattern, not final numeric
policy. It exists to capture how a core may combine pricing, restricted
internal utility, governance-owned allocation, treasury-linked release or
redemption, and ACS review under one private architecture.

The template does not define production economics, live contracts, public
tokenomics claims, reserve commitments, legal framing, or active financial
execution.

## Reusable Components

The Academy economic template includes the following reusable components:

- `$Neurons`-denominated pricing;
- platform commission;
- internal utility paths;
- burn paths;
- restricted spend paths;
- treasury-linked release or redemption boundary;
- ACS audit gate;
- cascading governance;
- local allocation logic.

These components are reusable as architectural slots rather than as approved
implementation details.

## Required Invariants

The following invariants must remain intact when another core reuses the
template:

- education, access, or product utility must not be described as investment
  return;
- unresolved mechanics must remain explicitly unresolved until governance
  approval;
- private treasury behavior must not be disclosed publicly without legal
  review;
- ACS may advise, audit, or gate, but does not independently become final legal
  authority;
- local allocation logic must remain subordinate to central governance and
  treasury boundaries where applicable;
- restricted spend or burn paths must not be described as automatically active
  unless implementation and policy support them.

## Allowed Per-Core Variations

Each core may vary the template only at the abstract policy level, including:

- product or service classes;
- commission model category;
- local governance rules;
- allocation priority;
- ACS review thresholds as a governance-owned concept;
- treasury interaction type;
- tenant access rules.

These variations must not introduce new numbers, new percentages, new emission
formulas, new execution mechanics, new redemption rules, new signer logic, or
new legal framing inside this template note.

## Governance Dependency Points

Governance dependencies include:

- approval of local allocation logic;
- approval of issuance or budget pathways;
- approval of restricted-spend policy;
- approval of local participation rules;
- approval of unresolved economic parameters.

All unresolved governance-dependent items remain:
[TBD — pending governance decision with first adopters]

## Treasury Dependency Points

Treasury dependencies include:

- reserve-asset interaction;
- redemption boundary design;
- release-control design;
- payout or settlement policy where applicable;
- treasury accounting and reporting controls.

All unresolved treasury-dependent items remain:
[TBD — pending governance decision with first adopters]

## ACS Control Points

ACS control points include:

- behavioral audit before high-risk release or redemption;
- fraud, farming, and abuse detection;
- review support for exception cases;
- boundary challenge where a flow appears unsafe or misrepresented.

ACS review thresholds as an operating concept remain governance-owned and do
not become final mechanics in this template note.

## Replication Risks

| Risk | Description | Mitigation |
| --- | --- | --- |
| Pattern propagation risk | Errors in Academy design may spread to other cores | Keep the template abstract and private until validated |
| Over-specification risk | Future cores may mistake the template for approved mechanics | Preserve unresolved markers and non-production wording |
| Legal spillover risk | Revenue or redemption vocabulary may be reused publicly | Require legal review before any externalization |
| Treasury coupling risk | Centralized treasury dependencies may concentrate failure | Keep treasury rules governance-owned and unresolved where needed |
| ACS authority confusion | ACS gates may be misread as autonomous authority | Reiterate human and governance accountability boundaries |

## Boundary Warnings

This template note must not be mirrored into public docs, academic papers,
public institutional materials, investor materials, fundraising materials, or
product launch content.

The template may describe private terms such as `$Neurons`, treasury-linked
release, ACS audit, and local allocation logic, but those terms remain private
and not approved for public reuse.

## Non-Production Statement

This document does not enable production economics, public tokenomics,
financial execution, provider execution, wallet signing, contract writes,
production APIs, production databases, or operational activation. It is not
legal approval and not an authorization for external disclosure. It is a
private documentation-only artifact.
