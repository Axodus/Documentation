---
schema_version: "1.0.0"
document_id: "BBA-ADR-0004"
aliases: []
document_type: "ADR"
title: "Domain Before Architecture"
summary: "Requires canonical domain review before architecture decisions are accepted as implementation guidance."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOCUMENTATION"
authority_level: "PROJECT"
author: "BBA Documentation Governance"
owner: "BBA Documentation Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Domain Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBA-REF-002"}, {type: "RELATES_TO", target: "BBA-ROAD-002"}]
related_epics: ["EPIC-000", "EPIC-003"]
related_requirements: ["REQ-000-006", "REQ-000-008"]
related_adrs: ["BBA-ADR-0001", "BBA-ADR-0002"]
related_cores: []
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA-ADR-0004 — Domain Before Architecture

## Status

PROPOSED

## Context

Architecture choices can accidentally define the domain when technical
structures are introduced before concepts, rules, states, and invariants are
stable.

## Problem

Premature decisions about services, events, storage, APIs, or runtimes can
contaminate the permanent domain model.

## Proposed Decision

Architecture work starts only after the relevant Domain Areas complete
Canonical Review. Architecture documents must reference approved terminology,
domain rules, and decision records.

## Consequences

The roadmap includes an explicit Canonical Review between Domain and
Architecture. Unresolved domain decisions block dependent architecture REQs.

## Open Questions

The exact review quorum is a Foundation governance deliverable.
