---
schema_version: "1.0.0"
document_id: "CORE-GDE-006"
aliases: []
document_type: "GUIDE"
title: "Axodus Execution Model"
summary: "Presents the eleven priority Axodus flows with their actors, decisions, outputs, current state, and explicit gaps."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "AXODUS.EXECUTION"
authority_level: "PORTFOLIO"
author: "Axodus Core"
owner: "Axodus Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-15"
last_updated: "2026-07-15"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-07"]
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-07"]
related_adrs: []
related_cores: ["AXODUS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/overview/execution-model.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Axodus Execution Model

These flows describe how Axodus is intended to coordinate work. Structural
completeness does not mean production implementation. Incomplete flows remain
explicitly incomplete.

| Flow | Canonical Path | Current State |
| --- | --- | --- |
| Demand qualification | Submit -> validate -> classify -> identify risk, authority, dependencies -> route | Business mock/read-only prototype |
| Trinity planning | Qualified context -> decomposition -> assumptions, risks, estimate -> human review | Incomplete, advisory |
| Business delivery | Scope -> reviews -> milestones -> development -> validation -> acceptance -> lifecycle | Model and mock runtime |
| Custom agent | Need -> capability search -> permission/data design -> isolated build -> tests -> activation request | Incomplete, provisioning blocked |
| Reusable asset | Accepted delivery -> rights/privacy review -> asset classification -> owner/version/license -> release decision | Incomplete |
| Marketplace publication | Asset package -> ownership/claim/security review -> listing decision -> publication -> lifecycle | Incomplete; settlement unverified |
| Academy and PoK | Learn -> assess -> validate -> scoped qualification -> independent eligibility decision | Incomplete; no automatic token effect |
| Governance | Propose -> review -> decide -> validate executor -> execute -> verify -> receipt | Governed model; active if verified |
| ACS protection | Signal -> inspect -> classify -> alert -> local hold -> human disposition -> governed escalation | Non-production prototype |
| Economic flow | Product event -> Treasury/Tokenomics/Governance reviews -> authorization -> enabled execution -> reconciliation | Incomplete and blocked |
| Runtime activation and incident | Readiness -> approval -> activation -> monitoring -> incident -> pause -> recovery decision -> receipt | Model and partial prototype |

## Decision and Evidence Rule

Every material transition identifies who proposes, reviews, approves, executes,
observes, may suspend, and may reverse. The transition is incomplete until its
required evidence exists.

## Failure Rule

Missing context, authority, custody, signer, contract, provider, credentials
policy, security review, legal review, rollback, or recovery evidence closes the
gate. The system must not silently substitute an agent, Business, Runtime, or a
documentation status for the missing authority.

## Current Portfolio Boundary

Axodus has multiple implemented and validated prototype/read-only surfaces, but
the ecosystem is not documented as one integrated production system. Financial
execution, active token distribution, provider activation, autonomous
governance, production ACS enforcement, and public Lottery operation remain
unverified or blocked.

## Canonical Traceability

| Flow ID | Flow | Primary interfaces | Traceability status |
| --- | --- | --- | --- |
| `FLOW-EP8-0001` | Demand qualification | `INT-EP7-001`, `INT-EP7-014` | Prototype/read-only representation |
| `FLOW-EP8-0002` | Trinity planning | `INT-EP7-002`, `INT-EP7-003` | Incomplete; advisory interface unconfirmed |
| `FLOW-EP8-0003` | Business delivery | `INT-EP7-004`, `INT-EP7-006`, `INT-EP7-014` | Model and partial prototype |
| `FLOW-EP8-0004` | Custom agent | `INT-EP7-015` | Incomplete; provisioning and authority blocked |
| `FLOW-EP8-0005` | Reusable asset | `INT-EP7-008` | Incomplete; rights and release authority unresolved |
| `FLOW-EP8-0006` | Marketplace publication | `INT-EP7-008`, `INT-EP7-009` | Incomplete; operator and settlement unverified |
| `FLOW-EP8-0007` | Academy and PoK | `INT-EP7-010`, `INT-EP7-011`, `INT-EP7-013` | Incomplete; effects remain independently gated |
| `FLOW-EP8-0008` | Governance | `INT-EP7-004`, `INT-EP7-005`, `INT-EP7-014` | Governed model; executor must be verified |
| `FLOW-EP8-0009` | ACS protection | `INT-EP7-006`, `INT-EP7-007`, `INT-EP7-014` | Non-production prototype and authority gap |
| `FLOW-EP8-0010` | Economic flow | `INT-EP7-012`, `INT-EP7-013`, `INT-EP7-015` | Incomplete and financially blocked |
| `FLOW-EP8-0011` | Runtime activation and incident | `INT-EP7-007`, `INT-EP7-014`, `INT-EP7-015` | Model and partial prototype; activation blocked |

The interface IDs are documentation crosswalks, not claims of live transport.
Six flows (`0002`, `0004`, `0005`, `0006`, `0007`, and `0010`) remain
explicitly incomplete under `EVID-EP8-0007`.

## End-To-End Handoff Rule

A defensible execution chain is:

`need -> qualification -> scoped decision -> authorized plan -> bounded action -> validation -> accountability record`

At every handoff, the receiving actor checks scope, authority, required
evidence, and open gates. Rejection returns the item with a reason; a missing
interface or authority blocks progression; an incident can suspend the action
and route it to the responsible recovery authority. Completion requires an
output that matches the approved scope and a reviewable receipt. No agent,
runtime, or product core may infer permission from an upstream request.
