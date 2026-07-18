---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-005"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Product Personas and Governance Roles"
summary: "Defines the people, organizational roles, and AI Workforce roles that use, govern, consume, and review BBA Platform work."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.PRODUCT"
authority_level: "PROJECT"
author: "BBA Product Governance"
owner: "BBA Product Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Product Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-18"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-RPT-001"}, {type: "RELATES_TO", target: "BBA-REF-002"}, {type: "RELATES_TO", target: "BBA-ADR-0002"}]
related_epics: ["EPIC-001"]
related_requirements: ["REQ-001-02-001"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003"]
related_cores: []
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Product Personas and Governance Roles

## Purpose

Define who uses, directs, reviews, consumes, and is accountable for Mission
work. These are product roles, not technical services, database identities, or
authorization implementation decisions.

## Human Personas

| Persona | Primary need | Product responsibility |
| --- | --- | --- |
| Tenant Sponsor | Turn an institutional objective into an accountable outcome. | Defines priorities, context, constraints, and success expectations. |
| Mission Steward | Direct one Mission from intent to completion. | Owns scope, strategy, workforce direction, review routing, and outcome acceptance. |
| Capability Owner | Ensure a reusable capability has a clear purpose and quality boundary. | Defines intended use, limitations, quality criteria, and evolution needs. |
| Domain Owner | Protect correctness for a subject or institutional area. | Supplies authoritative knowledge, resolves domain ambiguity, and reviews relevant assets. |
| Human Reviewer | Assess quality, evidence, claims, risk, or readiness. | Recommends approval, revision, rejection, or escalation within assigned authority. |
| Publication Authority | Decide whether an asset may reach a destination or audience. | Grants, limits, defers, or withdraws publication authorization. |
| Audience or Recipient | Understand or use an authorized Institutional Asset. | Provides feedback or outcome signals; does not automatically hold governance authority. |
| Platform Operator | Maintain the product service or tenant operating context. | Supports availability, policy, and operational boundaries without owning tenant content decisions. |

## Governance Roles

### Steward

The Steward is accountable for a Mission or explicitly delegated scope. The
Steward may prioritize work, assemble a workforce, request review, redirect
strategy, accept outcomes, and escalate unresolved risk.

### Human Governance

Human Governance is the collective authority model. It includes objective
setting, review, approval, exception handling, strategy change, publication
authorization, and accountability. It is not a synonym for a single person or
for technical access control.

### Domain Authority

Domain Owners and designated reviewers protect the correctness and context of
institutional knowledge. They may reject an asset or claim even when a Mission
Steward considers it operationally useful.

### Publication Authority

Publication Authority is the human decision point for external release. Asset
creation, review completion, or agent recommendation does not imply permission
to publish.

## AI Workforce Roles

AI agents operate as specialized contributors within an approved Mission:

- research and knowledge agents gather and organize relevant context;
- strategy agents propose objectives, audiences, narratives, and work plans;
- editorial agents draft and transform Institutional Assets;
- review agents detect quality, claim, and risk concerns;
- analytics agents summarize outcomes and learning;
- connector-oriented agents prepare interaction context for approved channels.

An agent role has a mission, responsibilities, capabilities, inputs, outputs,
tools, and quality criteria. It does not possess final human authority merely
because it generated a recommendation or completed a task.

## Authority Matrix

| Decision | Tenant Sponsor | Steward | Domain Owner | Human Reviewer | Publication Authority | AI Workforce |
| --- | --- | --- | --- | --- | --- | --- |
| Set institutional objective | A | C | C | I | I | I |
| Define Mission scope | A | R | C | C | I | I |
| Assemble workforce | C | A/R | C | I | I | C |
| Produce asset | I | A | C | I | I | R |
| Validate domain correctness | I | C | A/R | R | I | C |
| Approve sensitive claims | I | C | C | A/R | C | I |
| Authorize publication | I | C | C | C | A/R | I |
| Accept Mission outcome | A | R | C | C | I | I |

`A` means accountable, `R` responsible, `C` consulted, and `I` informed.
Assignments are product governance semantics, not implementation permissions.

## Axodus Boundary

Axodus may instantiate these personas and roles, but no Axodus title is required
by the Core. External tenants must be able to map their own organizational
roles to the same responsibilities.

## Technical Boundary

This document does not define users, tokens, ACLs, identity providers, service
accounts, authentication flows, or authorization middleware. Those are later
Architecture and Development concerns derived from these responsibilities.
