---
schema_version: "1.0.0"
document_id: "BBA-ADR-0006"
aliases: []
document_type: "ADR"
title: "Agency Composition Over Certified Platform"
summary: "Records the proposed product decision to compose customer-facing Agency services over the certified BBA Platform without redefining its domain concepts."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.AGENCY.PRODUCT"
authority_level: "PROJECT"
author: "BBA Product Governance"
owner: "BBA Product Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Product Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: ["BBA Security Reviewer"]
approver: null
created_date: "2026-07-29"
last_updated: "2026-07-29"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "RELATES_TO", target: "BBAPLT-GDE-101"}, {type: "RELATES_TO", target: "BBAPLT-RPT-026"}]
related_epics: ["EPIC-006"]
related_requirements: ["REQ-006-05-002"]
related_adrs: ["BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Platform", "Agency Runtime", "Agency Product", "Agency Experience"]
implementation_refs: [{repository: "Axodus/BBA-Agency", path: ".rag/architecture/EPIC-IMP-015-BBA-STANDALONE-PRODUCT-SURFACE.md", ref: "ce1e46b", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA-ADR-0006 — Agency Composition Over Certified Platform

## Status

PROPOSED

## Context

The certified BBA Platform provides institutional capabilities and canonical
Domain semantics. The BBA Agency needs a customer-facing product model that
expresses services through outcomes rather than exposing internal Platform
entities as the primary commercial navigation.

## Problem

Directly exposing Mission, Workflow, Knowledge, Review, Publication, and Asset
concepts makes the commercial experience overly technical. Renaming those
concepts would fragment the Domain and create competing meanings.

## Alternatives Considered

1. Expose the Platform directly to customers: minimal composition, but poor
   service and outcome clarity.
2. Rename Platform concepts for commercial use: simpler labels, but semantic
   duplication and Domain fragmentation.
3. Compose Agency Runtime, Agency Products, and Agency Experience over the
   Platform: preserves certified semantics while enabling customer-oriented
   services.

## Proposed Decision

Adopt the third alternative. Agency Products are versioned, declarative
compositions oriented to Customer Outcomes. They may reference Platform
capabilities, Agents, Policies, Workflows, Deliverables, Reviews, Assets,
Publications, and Connectors, but they do not become Aggregates or acquire
institutional Authority, Ownership, Stewardship, or Accountability.

## Consequences

- customer-facing services can evolve without renaming Domain concepts;
- multiple products can reuse the same Platform capabilities;
- Agency Runtime and Experience require their own governance and contracts;
- product composition remains non-normative until Product Vision 2.0 review;
- future implementation must consume the accepted Documentation handoff;
- pricing, `$Neurons` economics, and technical Runtime choices remain separate
  governed decisions.

## Review Boundary

This ADR remains `PROPOSED` under the repository ADR lifecycle. Acceptance as
product guidance may be recorded in `BBAPLT-RPT-029` and `BBAPLT-RPT-030`, but
that acceptance does not make `BBAPLT-GDE-101` normative or alter the certified
Product, Domain, Architecture, Development, or Operations Layers.
