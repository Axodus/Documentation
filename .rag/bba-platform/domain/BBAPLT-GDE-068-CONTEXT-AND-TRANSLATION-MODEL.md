---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-068"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Connector Context and Translation Model"
summary: "Defines semantic context adaptation, canonical representation, translation, and semantic loss at Connector boundaries."
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
created_date: "2026-07-19"
last_updated: "2026-07-19"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-19"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-067"}, {type: "RELATES_TO", target: "BBAPLT-GDE-034"}, {type: "RELATES_TO", target: "BBAPLT-GDE-048"}, {type: "RELATES_TO", target: "BBAPLT-GDE-063"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-06-005"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Connector", "Context", "Translation", "Canonical Representation", "Semantic Loss", "Mission", "Institutional Asset", "Lineage", "Authority", "Evidence"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Connector Context and Translation Model

## Context

Context is the purpose, scope, origin, Tenant, Mission, Asset, authority,
accountability, assumptions, evidence, and intended audience that give an
exchange its institutional meaning. A Connector preserves enough context for
the receiving domain to interpret an exchange responsibly.

## Semantic Translation

Semantic translation adapts an external meaning into a canonical BBA concept,
or adapts a BBA concept for an external context. Translation may change
representation, terminology, granularity, sequence, or audience, but it cannot
silently change institutional purpose, Asset identity, lineage, Authority,
Accountability, Ownership, Stewardship, or Mission scope.

| Translation element | Required meaning |
| --- | --- |
| Source context | Where the meaning originated and which responsibility accompanied it. |
| Target context | The domain, Tenant, Mission, audience, or external purpose that will interpret it. |
| Canonical representation | The BBA meaning against which the exchange is interpreted and governed. |
| Transformation | The explicit change in representation, terminology, scope, or granularity. |
| Semantic loss | Meaning, evidence, uncertainty, relationship, or authority that cannot be preserved. |
| Consequence | Review, clarification, rejection, limitation, escalation, or acceptance permitted by Rule and Policy. |

## Canonical Representation

Canonical representation is a domain meaning, not a file format, schema, API
payload, or serialization. It is the form in which Mission, Asset, Agent,
Workflow, Human Governance, Tenant, Authority, lineage, and accountability can
be evaluated using the BBA Ubiquitous Language.

An external representation may be translated into canonical meaning only when
its origin, context, evidence, uncertainty, semantic loss, and responsible role
are explicit. A Connector cannot claim canonical status merely because a value
is well-formed or technically accepted.

## Semantic Loss

Semantic loss is any material meaning that is omitted, ambiguous, weakened,
contradicted, or made unverifiable by translation. It must be disclosed and may
block a Decision Point, require human Review, narrow the permitted use, trigger
rework, or cause Escalation. Loss cannot be filled with invented evidence or
silently treated as approval.

## Preservation and Accountability

Translation preserves Asset identity and lineage even when a representation is
derived, summarized, localized, or transformed. It also preserves Mission
context, Tenant boundary, Authority, Accountability, Ownership, Stewardship,
uncertainty, and known limitations. The responsible human role remains
accountable for consequential reliance on a translated meaning.

## Technical Boundary

This document does not define schemas, field mappings, serializers, parsers,
localization engines, data contracts, APIs, protocols, transformation code,
storage, synchronization, or runtime translation. It defines semantic context
and translation only.
