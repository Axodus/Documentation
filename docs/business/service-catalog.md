---
schema_version: "1.0.0"
document_id: "BUSINESS-GDE-003"
aliases: []
document_type: "GUIDE"
title: "Business Service Catalog"
summary: "Defines the Business request and service taxonomy as a scoped documentation baseline within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "BUSINESS"
authority_level: "CORE"
author: "Axodus Business"
owner: "Axodus Business"
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
relationships: [{type: "RELATES_TO", target: "BUSINESS-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-04"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["BUSINESS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/business/service-catalog.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Business Service Catalog

## Purpose

The Business service catalog defines the request categories Axodus Business can receive, classify, scope, coordinate, and deliver.

This catalog is not a price list, guarantee, or automatic acceptance policy.
It is also not a statement that every listed service area is commercially
available, production-ready, or active under current operating policy.

## Scope

Each service category must define the requester, inputs, possible outputs, review requirements, and what is explicitly not promised.

## Service Categories

### Governance Services

Governance services may include DAO setup review, governance design, federation support, proposal support, plugin request support, reason-code drafting, and execution checklist preparation.

Requests that affect official Axodus governance, federation status, product access, treasury, or policy must be routed to Governance.

### Development Services

Development services may include frontend, backend, API, dashboard, indexer, smart contract, integration, automation, documentation, and handoff work.

Smart contracts, production integrations, sensitive infrastructure, and permissioned tooling require appropriate security and governance review.

### DAO Services

DAO services may include custom DAO dashboards, governance plugins, reporting packages, federation support, workflow automation, and DAO training.

DAO authority and constitutional alignment must be reviewed when the request claims official DAO status or access to Axodus infrastructure.

### Academy Services

Academy services may include custom course creation, partner training programs, tutor onboarding, certification design, Learn-to-Win workflows, and reward-policy support.

Reward flows must remain subject to governance and contract-level validation.

### Marketplace Services

Marketplace services may include listing support, payment or fee model planning, course commerce, seller workflows, product distribution, and Marketplace policy documentation.

Marketplace is a channel and commercial surface. It does not replace Business
as the operational infrastructure nucleus that receives, scopes, routes, and
coordinates work.

Fees, refunds, locked reward usage, and seller rules must not be treated as final unless approved and implemented.

### Trading Services

Trading services may include strategy access support, API key safety guidance, trading-product documentation, internal strategy review, and risk model preparation.

Trading services must include risk language. Business must not imply guaranteed trading performance.

### Treasury and Risk Services

Treasury and risk services may include reporting support, risk policy support, allocation review documentation, accountability records, and financial exposure summaries.

Business does not approve treasury actions alone.

### Tokenomics Services

Tokenomics services may include reward policy support, token utility documentation, locked reward analysis, access-rule design, and governance participation language review.

`$Neurons` must be described as utility, access, reward, governance participation, or coordination infrastructure, not as an investment promise.

### ACS Services

ACS services may include agent workflow design, MCP tooling planning, knowledge pack creation, documentation generation support, and automation review.

ACS services must define authority boundaries and human review requirements.

### BBA Services

BBA services may include product positioning, campaign strategy, growth operations, blockchain business communication, AI-assisted advertising workflows, creative testing, and measurement planning.

BBA must avoid hype, token pump language, fake urgency, and unverified audit or partnership claims.

### Documentation Services

Documentation services may include public docs, internal docs, knowledge packs, agent instructions, operational playbooks, release notes, and accountability records.

## Service Status Model

Service areas may be marked as `Concept`, `Planned`, `Available`, `Limited`, `Experimental`, `Governance Required`, or `Suspended`.

These labels describe documented service posture only. They must not be read as
evidence of production activation, finalized commercial terms, or unrestricted
public availability unless independent records support that reading.

## Guardrails

- Services must not promise financial outcomes.
- Development services must not skip security review.
- DAO services must not bypass governance.
- Trading services must include risk context.
- Tokenomics services must avoid investment language.
- ACS services must define authority boundaries.
- Marketplace services must define payment, fee, and refund assumptions before execution.

## Future Work

- Add service-specific intake templates.
- Define status per service category.
- Add approved pricing and funding rules only after formal validation.
