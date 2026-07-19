---
schema_version: "1.0.0"
document_id: "BBAPLT-ARCH-021"
aliases: ["BBAPLT-ARC-021"]
document_type: "GUIDE"
title: "BBA Platform Information Classification"
summary: "Defines semantic classes and orthogonal dimensions for institutional information handled by the BBA Platform."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.ARCHITECTURE"
authority_level: "PROJECT"
author: "BBA Architecture Governance"
owner: "BBA Architecture Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-19"
last_updated: "2026-07-19"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-19"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-ARCH-020"}, {type: "RELATES_TO", target: "BBAPLT-ARCH-018"}, {type: "RELATES_TO", target: "BBAPLT-ARCH-019"}]
related_epics: ["EPIC-003"]
related_requirements: ["REQ-003-04-004"]
related_adrs: ["BBA-ADR-0004"]
related_cores: ["Information Classification", "Institutional Asset", "Knowledge", "Governance", "Mission", "Connector"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Information Classification

## Purpose and Scope

This document classifies information by its institutional meaning and handling
implications. Classification supports ownership, lifecycle, review, lineage,
and Governance decisions without becoming a physical schema or technical
permission model.

Classification is descriptive and normative at the semantic level. A single
information object may have one primary class and several orthogonal
attributes. Classification never changes the object's identity or owner.

## Primary Information Classes

| Class | Definition | Typical examples | Primary concern |
| --- | --- | --- | --- |
| Institutional | Information that represents durable institutional meaning, identity, position, or approved expression | Institutional Assets, Mission Contexts, approved brand meaning, published knowledge | Canonical identity, Accountability, and long-term Lineage |
| Operational | Information that coordinates or records work needed to fulfill a Mission | Assignments, Deliverables, Workflow Progress, coordination outcomes | Scope, responsibility, completion, and exception handling |
| Knowledge | Information that explains, evidences, teaches, or makes institutional understanding reusable | Papers, research findings, documentation, evidence, courses, summaries | Provenance, confidence, uncertainty, and reuse context |
| Governance | Information that expresses authority, accountability, policy, review, approval, delegation, escalation, or restriction | Governance Decisions, Review Findings, approvals, constraints, Stewardship Records | Human authority, decision scope, and auditability |
| Analytical | Information derived from observations or outcomes to support evaluation, learning, or future direction | Outcome Evidence, indicators, analyses, lessons, learning signals | Method, assumptions, limitations, and non-inference |
| External | Information received from or prepared for a context outside the BBA domain boundary | External Representations, external references, partner context | Translation, trust boundary, source, and permitted use |
| Derived | Information created by transforming, combining, summarizing, translating, or interpreting other information | Summaries, translations, presentations, campaign adaptations, projections | Source Lineage, transformation meaning, and semantic loss |

The classes are not mutually exclusive in meaning. For example, a derived
knowledge Asset may also be institutional when it becomes an approved part of
the organization's canonical body of knowledge.

## Classification Rules

1. The primary class is selected by the Information Owner and Steward based on
   canonical purpose, not on format, audience, or storage location.
2. A class change is a semantic change and requires review of ownership,
   lifecycle, authority, Lineage, and affected Consumers.
3. Derived and External are provenance-oriented classes; they do not weaken
   the requirements for Accountability or Tenant Boundary.
4. Governance information remains authoritative only within its declared scope,
   authority, and duration.
5. Operational information cannot silently become Institutional information
   without acceptance under the relevant Domain Rules.
6. Analytical information is evidence for decisions, not a decision itself.
7. Knowledge may inform a Mission or Asset but cannot create authority merely
   by being cited.
8. Classification is preserved when information is represented through a
   Connector or transformed by an Agent.

## Orthogonal Classification Dimensions

Primary class alone is insufficient for safe semantic handling. Each material
information object should also declare the following dimensions.

| Dimension | Values or questions | Why it matters |
| --- | --- | --- |
| Authority status | Proposed, Active, Reviewed, Approved, Published, Restricted, Withdrawn | Determines what reliance is permitted |
| Provenance | Original, Derived, Translated, Referenced, External, Reconstructed | Determines Lineage and evidence obligations |
| Audience scope | Internal, Tenant-scoped, Partner-scoped, Publicly authorized, Restricted | Preserves purpose and Tenant Boundary |
| Sensitivity | Ordinary, Confidential, Regulated, Safety-critical, Unresolved | Determines review, handling, and escalation expectations |
| Temporal relevance | Current, Historical, Scheduled, Expired, Superseded | Prevents reliance on stale meaning |
| Evidence quality | Direct, Corroborated, Inferred, Unverified, Contested | Makes confidence and uncertainty visible |
| Transformation status | Canonical, Versioned, Represented, Summarized, Translated, Adapted | Preserves identity and semantic loss awareness |
| Accountability scope | Mission, Asset, Governance, Operational, External boundary | Identifies the human responsibility that remains attached |

These values are semantic labels, not implementation flags or technical access
levels.

## Classification by Context

| Context | Primary classes commonly owned | Classification responsibility |
| --- | --- | --- |
| Mission | Institutional, Operational, Analytical | Preserve objective, scope, outcomes, and temporal relevance |
| Institutional Asset | Institutional, Knowledge, Derived, External | Preserve identity, Version meaning, Representation, and Lineage |
| AI Workforce | Operational, Knowledge, Analytical, Derived | Disclose capability, evidence, uncertainty, and assignment scope |
| Human Governance | Governance, Institutional, Analytical | Preserve authority, Accountability, review, decision scope, and duration |
| Workflow | Operational, Governance-referenced | Preserve coordination meaning, dependencies, exceptions, and completion |
| Connector | External, Derived, Institutional-represented | Preserve source context, translation, trust boundary, and destination scope |

## Handling Implications

Classification must be consulted before an information object is:

- accepted as canonical or used to justify a Mission decision;
- transformed into a new Version, Representation, or Derived Asset;
- shared across a Tenant or Trust Boundary;
- reviewed, approved, published, archived, or withdrawn;
- used as evidence for quality, analytics, learning, or escalation.

The applicable Steward determines whether a Policy requires human review or
approval. Classification does not prescribe that every use requires an
individual review; low-risk use may be governed by explicit Policy while
material decisions remain accountable to human authority.

## Classification Invariants

1. Class is not identity.
2. Class is not ownership.
3. Class is not authority.
4. Class is not a permission or a Capability.
5. A change of class preserves prior classification, reason, and Lineage.
6. External or Derived information never loses its source attribution and
   uncertainty merely because it is consumed internally.
7. Governance information cannot be downgraded by representation or Connector
   translation.
8. Analytical information cannot be treated as a Governance Decision without
   the applicable human authority.
9. Publicly authorized representation does not make all related information
   public or remove Tenant Boundary.

## Deferred Technical Concerns

This classification does not define file types, document formats, database
schemas, indexes, search, encryption, access-control technology, APIs,
serialization, storage, persistence, replication, runtime, deployment, or
infrastructure. Those decisions belong to later Architecture and Development
Sprints.
