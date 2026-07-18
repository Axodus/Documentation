---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-009"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Portfolio"
summary: "Defines the product-level classes, ownership, review intent, and publication relationships of Institutional Assets."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-008"}, {type: "RELATES_TO", target: "BBAPLT-GDE-007"}, {type: "RELATES_TO", target: "BBAPLT-GDE-005"}]
related_epics: ["EPIC-001"]
related_requirements: ["REQ-001-02-005"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003"]
related_cores: []
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Portfolio

## Purpose

Define the product meaning and representative classes of Institutional Assets.
An Institutional Asset is any durable result produced, transformed, reviewed,
published, distributed, or managed by the platform for institutional value.

An Asset is an outcome-bearing product object, not merely a file or media
format. Its meaning includes the Mission context, responsible authorities,
intended audience, quality expectations, and publication relationship.

## Asset Portfolio

| Asset class | Product purpose | Representative examples |
| --- | --- | --- |
| Knowledge Asset | Preserve or communicate governed institutional understanding. | Paper, research brief, documentation, knowledge base entry, course. |
| Editorial Asset | Shape an idea or narrative for a defined audience and purpose. | Article, editorial package, newsletter, script, interview brief. |
| Brand Asset | Express or support institutional identity and positioning. | Brand brief, messaging system, identity guidance, campaign concept. |
| Campaign Asset | Coordinate a set of related communications toward an objective. | Campaign package, content calendar, audience narrative, launch kit. |
| Publication Asset | Prepare a reviewed asset for an authorized publication context. | Publication package, release, landing page, journal submission. |
| Distribution Asset | Adapt an authorized asset for an approved channel or recipient context. | Channel package, audience delivery package, localized edition. |
| Educational Asset | Enable learning, orientation, or capability transfer. | Course, lesson, tutorial, handbook, training module. |
| Multimedia Asset | Communicate through visual, audio, or audiovisual forms. | Video, storyboard, podcast package, infographic, visual system. |
| Governance Asset | Record or communicate institutional direction and accountability. | Policy explanation, decision brief, review record, public statement. |
| Analytics Asset | Preserve observations, interpretation, or learning from outcomes. | Measurement brief, performance snapshot, feedback synthesis, learning record. |

These classes describe product intent. One concrete Asset may have multiple
representations or be related to several classes without changing its canonical
identity.

## Asset Relationships

```text
Mission
  ├── requests or produces → Institutional Assets
  ├── assigns → Steward and AI Workforce
  └── defines → Objective, Audience, Context, and Outcome

Institutional Asset
  ├── has → Responsible Steward
  ├── receives → Domain and Quality Review
  ├── may become → Publication Asset
  ├── may be adapted into → Distribution Asset
  └── contributes to → Mission Outcome or Institutional Knowledge
```

An Asset may be created within a Mission, revised by a later Mission, or
retained as institutional knowledge. Creation does not imply acceptance;
acceptance does not imply publication; publication does not guarantee the
intended outcome.

## Ownership and Responsibility

| Concern | Responsible authority | Product rule |
| --- | --- | --- |
| Institutional context and rights | Tenant and designated Domain Owner | The Tenant supplies or authorizes the context in which the Asset may be used. |
| Mission alignment | Mission Steward | The Steward explains why the Asset supports the Mission objective. |
| Domain correctness | Domain Owner or Human Reviewer | Relevant claims and meaning must be reviewed under human authority. |
| Quality and readiness | Human Reviewer | Review may request revision, reject the Asset, or recommend acceptance. |
| Publication authorization | Publication Authority | Only authorized publication may expose the Asset to a destination or audience. |
| Outcome interpretation | Steward, Sponsor, or Analytics role | Results are interpreted in the Tenant's institutional context. |
| Agent contribution | AI Workforce | Agents may produce or transform work but do not own final authority. |

Ownership here means accountability for decisions and context; it does not
define legal title, filesystem ownership, database ownership, or access-control
implementation.

## Asset Quality and Readiness Intent

The required review depth depends on the Asset class, audience, claims, risk,
and intended destination. At product level, a review should make it possible to
answer:

- Is the Asset aligned with its Mission and intended audience?
- Is its institutional context and source responsibility understood?
- Have relevant domain, quality, safety, and rights concerns been considered?
- Is the Asset accepted for its intended use, or does it require revision?
- Is publication authorized for the specific destination and audience?
- What limitations or uncertainty must accompany the Asset?

No Asset is considered publication-ready solely because an agent generated it,
because a draft exists, or because a review was requested.

## Asset Lifecycle Intent

At the product level, an Asset may be:

```text
Proposed → Produced → Under Review → Accepted or Revised
                                      ↓
                             Authorized for Publication
                                      ↓
                              Published or Distributed
                                      ↓
                             Observed, Retained, or Superseded
```

This is lifecycle intent, not a technical state machine. The authoritative
domain documentation must later define exact rules, transitions, events, and
invariants.

## Portfolio Boundaries

- A file format, channel, database record, or interface is not an Asset class
  unless it carries institutional product meaning.
- A publication destination is not itself an Asset; it is a context in which an
  authorized Asset may be released.
- A generated draft remains an Asset candidate subject to human governance.
- Tenant-specific branding or naming may describe an Asset without redefining
  the Core portfolio.
- Axodus examples may illustrate classes, but no class depends on Axodus.

## Technical Boundary

This document does not define content schemas, storage, versioning mechanics,
binary processing, rendering, APIs, publication transports, or retention
implementation. Those decisions must follow the product meaning and later
Domain and Architecture documentation.
