---
schema_version: "1.0.0"
document_id: "BBA-ADR-0003"
aliases: []
document_type: "ADR"
title: "Tenant-Neutral Core"
summary: "Requires the BBA Platform core to support Axodus, external tenants, white-label deployments, self-hosted use, and SaaS without tenant-specific domain semantics."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOMAIN"
authority_level: "PROJECT"
author: "BBA Product Governance"
owner: "BBA Product Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Domain Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "RELATES_TO", target: "BBA-REF-002"}, {type: "RELATES_TO", target: "BBA-POL-001"}]
related_epics: ["EPIC-000", "EPIC-002"]
related_requirements: ["REQ-000-006", "REQ-000-010"]
related_adrs: ["BBA-ADR-0002"]
related_cores: []
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA-ADR-0003 — Tenant-Neutral Core

## Status

PROPOSED

## Context

Axodus is the first intended consumer, but the platform must also support
tenants, white-label deployments, self-hosted installations, and SaaS.

## Problem

Axodus-specific names, assumptions, policies, or integrations could leak into
the core and make other deployment models second-class consumers.

## Proposed Decision

Keep the core tenant-neutral. Tenant-specific branding, policies, connectors,
content, and deployment choices are adapters, configuration, or bounded
consumer documentation rather than core domain rules.

## Consequences

Every platform-level concept must be tested against at least one non-Axodus
consumer scenario. Axodus references remain valid in consumer and adapter
documentation.

## Open Questions

Tenant isolation and authorization details belong to the Architecture layer.
