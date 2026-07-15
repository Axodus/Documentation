---
schema_version: "1.0.0"
document_id: "TREASURY-GDE-005"
aliases: []
document_type: "GUIDE"
title: "Treasury Policy"
summary: "Defines the draft public Treasury policy framework within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "TREASURY"
authority_level: "CORE"
author: "Axodus Treasury"
owner: "Axodus Treasury"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-15"
last_reviewed: "2026-07-15"
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "TREASURY-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["TREASURY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/treasury/treasury-policy.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Treasury Policy

## Purpose

Treasury Policy defines what Axodus Treasury can hold, how funds can be allocated, which actions require approval, which risks are acceptable, and how reporting is performed.

This page is a draft public framework. It is not a live treasury authorization
record and must not be read as permission to execute Treasury actions by
default.

## Scope

This policy applies to treasury assets, approved custody types, revenue routing, operating budgets, reserves, reward budgets, trading allocations, DeFi and DaaS exposure, risk limits, governance thresholds, emergency actions, and reporting requirements.

## Approved Action Categories

- Operational expenses for infrastructure, services, tooling, contributors, or routine operations.
- Reserve management and treasury rebalancing under approved limits.
- Reward budget allocation for Academy, Marketplace, governance, or contributor incentives.
- Trading allocation to approved internal strategies under limits.
- DeFi or DaaS strategy allocation after review.
- Marketplace, tutor, partner, or seller settlement under policy.
- Liquidity support when approved by policy and governance.
- Emergency response to protect treasury assets under defined emergency rules.

## Restricted Actions

- Unmanaged speculation or unrestricted leverage.
- Treasury transfers without authority records.
- Private wallet transfers without reporting.
- Treasury use for unapproved personal benefit.
- Material interaction with unaudited or high-risk contracts without review.
- Exchange or API permissions that expose treasury assets beyond approved scope.
- Hiding losses, inflows, liabilities, or material incidents.
- Promising returns from treasury activity.

## Authority Matrix

| Materiality | Examples | Expected Authority |
| --- | --- | --- |
| Low | Small operational expense, routine reporting update | Treasury operator or business owner under policy |
| Medium | Moderate budget allocation, marketplace settlement batch | Designated treasury reviewer and record |
| High | Strategy allocation, reward budget change, new exchange or protocol exposure | Governance or Boardroom review, risk review, execution receipt |
| Critical | Large transfer, leverage use, contract control change, emergency recovery | Formal governance or high-level review, security review when relevant, post-action report |

Exact thresholds should not be published unless approved for public disclosure.

## Treasury Action Policy Object

A treasury action policy should define the policy identifier, action type, materiality level, allowed assets, allowed destinations, required approval, governance requirement, risk review requirement, security review requirement, reporting requirement, execution receipt requirement, emergency override rules, review frequency, and status.

## Review Cadence

Treasury policy should be reviewed periodically and after material incidents. Risk limits should be reviewed after strategy changes, market regime changes, or loss events. Reserves should be reviewed against runway and expenses. Reward budgets should be reviewed before major campaigns and after reporting periods. Custody controls should be reviewed after signer, wallet, tool, or process changes.

## Governance Touchpoints

Material treasury actions may require [Governance Alignment](governance-alignment.md), [Risk Management](risk-management.md), [Capital Allocation](capital-allocation.md), [Custody and Security](custody-and-security.md), and [Reporting and Accountability](reporting-and-accountability.md).

## Current Status

This policy is a draft framework. It does not publish final thresholds, production wallet rules, or final approval parameters.
