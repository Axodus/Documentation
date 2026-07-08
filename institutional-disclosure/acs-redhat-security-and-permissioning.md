---
schema_version: "1.0.0"
document_id: "PRIV-GDE-011"
aliases: []
document_type: "GUIDE"
title: "ACS RedHat Security and Permissioning"
summary: "Private security, permissioning, and execution-boundary baseline for RedHat inside ACS."
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
related_cores: ["ACS", "SECURITY", "TREASURY", "GOVERNANCE", "BUSINESS", "ACADEMY", "MARKETPLACE"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# ACS RedHat Security and Permissioning

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
| wallet_signing | false |
| contract_writes | false |
| provider_execution | false |
| financial_execution | false |

## Purpose

This guide defines the private RedHat execution posture inside ACS, including
allowed scope, blocked scope, graduated permissioning, immutable logging, and
local versus in-Axodus execution policy.

## RedHat Operational Role

RedHat is the deep technical executor invoked when complex logic, data
transformation, architectural mutation, or infrastructure-level operations are
required.

RedHat is never the primary-facing decision authority. RedHat acts under
request, under scope, under logging, and under human approval when the action
class requires it.

## Allowed Execution Scope

RedHat may execute:

- business logic support;
- data transformation and analysis;
- orchestration of sub-agents;
- database queries;
- performance and APR-sensitive calculations;
- complex technical operations that do not breach blocked boundaries.

## Disallowed Execution Scope

RedHat may not execute:

- modification of smart contracts governing DAO core rules;
- alteration of core DAO rules;
- deletion or overwrite of audit logs;
- alteration of root-user permission structure;
- uncontrolled wallet signing;
- uncontrolled contract writes;
- uncontrolled provider activation;
- uncontrolled financial execution.

## Conditionally Allowed / TBD Scope

The following remain unresolved and context-dependent:

- client-local execution boundaries:
  [TBD — pending governance decision with first adopters]
- structural treasury modifications in specific contexts:
  [TBD — pending governance decision with first adopters]

## Permissioning Levels

### Level 1

Read-only, no mutation:

- queries;
- analysis;
- reports.

No special approval path is required beyond standard scope. Logging remains
mandatory.

### Level 2

Mutation in product or client data:

- user preferences;
- course or product data changes;
- transaction-associated data mutation where not treasury-critical.

Logging is mandatory. Prior human approval is not required by default, but
after-the-fact auditability is required.

### Level 3

Modification in pools, treasury-adjacent distribution, or APR-sensitive
operations:

- liquidity rebalance;
- APR-sensitive adjustments;
- treasury-adjacent distribution or division changes.

Prior human approval is required.

RedHat human-approval workflow remains:
[TBD — pending governance decision with first adopters]

### Level 4

Blocked.

No Level 4 operation is authorized in this baseline.

## Logging and Immutability

Every RedHat action must be logged with at minimum:

- timestamp;
- requester or originating agent;
- scope;
- command or action;
- result;
- state changes.

Logs must be append-only or functionally immutable. Log deletion or overwrite
is not allowed.

Immutable logging backend or pattern remains:
[TBD — pending governance decision with first adopters]

## Human Approval Requirements

Human approval is required before Level 3 actions and any action that approaches
treasury, pools, distribution, APR-sensitive effects, or comparable
high-consequence state mutation.

Approval authority may involve Business operators, product owners, governance,
or other designated human reviewers depending on scope.

Final approval-routing detail remains:
[TBD — pending governance decision with first adopters]

## Execution Local vs In-Axodus

### Local Execution

Local execution may occur through MCP, SDK, or client-managed infrastructure.

Characteristics:

- reduced systemic blast radius;
- less real-time centralized observability;
- post-execution synchronization direction where feasible;
- appropriate when Axodus-wide sensitive data access is not required.

### In-Axodus Execution

In-Axodus execution occurs inside Axodus-controlled infrastructure where
systemic coordination and visibility are needed.

Characteristics:

- stronger real-time observability;
- higher systemic exposure if compromised;
- direct access to more shared operational surfaces;
- appropriate only when ecosystem-level visibility or coordination is required.

## Default Deployment Policy

Default policy direction:

- execute locally when viable;
- use in-Axodus execution only when systemic visibility, coordination, or
  shared-state access is necessary.

Local versus in-Axodus default policy remains:
[TBD — pending governance decision with first adopters]

## Open Questions

- client-local execution boundaries:
  [TBD — pending governance decision with first adopters]
- structural treasury modification scope:
  [TBD — pending governance decision with first adopters]
- RedHat human-approval workflow:
  [TBD — pending governance decision with first adopters]
- immutable logging backend or pattern:
  [TBD — pending governance decision with first adopters]
- local versus in-Axodus default policy:
  [TBD — pending governance decision with first adopters]

## Non-Production Statement

This document does not enable production execution, provider activation, wallet
signing, contract writes, treasury mutation, public APIs, schema changes,
runtime-interface changes, or financial execution. It is not legal approval and
not an authorization for external disclosure.
