---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-028"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Constraints"
summary: "Defines domain constraints that limit Asset identity, authority, rights, risk, immutability, publication, versioning, and cross-Tenant use."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOMAIN"
authority_level: "PROJECT"
author: "BBA Domain Governance"
owner: "BBA Domain Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Domain Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-18"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-027"}, {type: "RELATES_TO", target: "BBAPLT-GDE-019"}, {type: "RELATES_TO", target: "BBAPLT-GDE-025"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-011"]
related_adrs: ["BBA-ADR-0003"]
related_cores: ["Institutional Asset", "Tenant", "Mission", "Human Governance"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Constraints

## Purpose

Record conditions that limit otherwise valid Asset operations. A constraint is
an applicable boundary of the domain; it is not a technical validation detail.

## Identity Constraints

* Identity is unique only within its Tenant context and cannot be reused for an
  unrelated institutional purpose.
* A file, URL, external ID, representation, or publication cannot establish or
  replace canonical Asset identity.
* A material identity or purpose change requires a new Asset and a justified
  lineage relation where applicable.

## Authority and Rights Constraints

* A governed Asset cannot proceed without accountable Ownership, Stewardship,
  Authorship, and Custody context or an explicit non-applicability decision.
* Editing, review, approval, publication, and archival authority must be
  separately authorized when policy requires it.
* Rights, consent, attribution, confidentiality, and retention obligations may
  prohibit reuse or publication even when content is technically available.
* Delegation cannot exceed the scope, duration, or Tenant boundary granted by
  the delegator.

## Risk and Publication Constraints

* Higher-risk Assets require the review and approval controls assigned by policy
  before publication.
* An approved version cannot be published to an audience or channel not covered
  by its authorization.
* Publication cannot be inferred from a representation existing or being shared.
* An Asset with unresolved rights, safety, privacy, or accuracy blockers cannot
  enter an approved or published state.

## Immutability and Version Constraints

* A version is an immutable content and meaning snapshot.
* Content changes after approval or publication create a new version.
* A representation conversion alone does not create a version.
* Version governance state may evolve, but it cannot mutate the governed
  snapshot.
* Superseded and archived versions remain historically traceable.

## Cross-Tenant Constraints

* Tenant context is preserved for every Asset, version, authority assignment,
  and lineage relation.
* Cross-Tenant access, derivation, translation, or publication requires an
  explicit authorized relationship and applicable rights.
* One Tenant's policy or identity cannot silently alter another Tenant's Asset.
* Axodus, external clients, white-label deployments, and self-hosted contexts
  use the same Core constraints.

## Unresolved Domain Boundaries

The exact legal retention periods, risk bands, rights vocabularies, and evidence
thresholds remain policy decisions for later governance work. Their absence
does not permit bypassing the constraints above.

## Technical Boundary

This document does not prescribe database constraints, encryption, network
isolation, IAM claims, file permissions, API validation, or deployment topology.
