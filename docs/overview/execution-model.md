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
