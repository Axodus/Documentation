---
schema_version: "1.0.0"
document_id: "BBA-ADR-0002"
aliases: []
document_type: "ADR"
title: "Mission as Core Domain Entity"
summary: "Adopts Mission as the central unit of purposeful work in the BBA Platform domain."
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
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBA-REF-001"}, {type: "RELATES_TO", target: "BBA-REF-002"}]
related_epics: ["EPIC-000", "EPIC-002"]
related_requirements: ["REQ-000-005", "REQ-000-006"]
related_adrs: ["BBA-ADR-0001"]
related_cores: []
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA-ADR-0002 — Mission as Core Domain Entity

## Status

PROPOSED

## Context

The platform may produce documents, campaigns, publications, branding, and
other institutional outputs. Those outputs need a common accountable context.

## Problem

Treating Document, Campaign, or Project as the universal root would make the
domain depend on one output type or one operating model.

## Proposed Decision

Mission is the central domain entity. Institutional Assets, agent work,
reviews, approvals, and publications are scoped to a Mission or explicitly
related to one.

## Consequences

The domain model must define Mission lifecycle, authority, composition, and
closure before individual output workflows. Product-specific workflows remain
specializations rather than competing roots.

## Open Questions

Mission state transitions remain a Domain-layer deliverable.
