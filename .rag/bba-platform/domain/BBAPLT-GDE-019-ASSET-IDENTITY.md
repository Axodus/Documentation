---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-019"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Identity"
summary: "Defines the stable domain identity of an Institutional Asset and the boundary between identity continuity and creation of a new Asset."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-018"}, {type: "RELATES_TO", target: "BBAPLT-GDE-009"}, {type: "RELATES_TO", target: "BBAPLT-GDE-011"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-002"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003"]
related_cores: ["Institutional Asset", "Mission", "Tenant"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Identity

## Purpose

Define what makes an Institutional Asset the same domain object over time. The
identity rules apply equally to documents, media, knowledge, brand, learning,
and other Asset classes.

## Canonical Identity

An Institutional Asset has one stable identity within its owning Tenant context.
That identity refers to the institutional thing being governed, not to a file,
content hash, URL, format, publication, or storage record.

The identity is established when the domain recognizes a durable institutional
result or knowledge artifact. It remains stable while the Asset's institutional
purpose and identity remain materially the same.

## Identity Scope

Identity is interpreted together with:

* the owning Tenant context;
* the Asset's canonical purpose and meaning;
* its authority relationships;
* its Mission relationship, when one exists;
* its lineage and classification.

The same human-readable title, file name, URL, or format does not establish
identity. Two Tenants may independently govern Assets with similar names, and
one Tenant may govern many Assets represented by similar files.

## Identity Continuity

Identity is preserved when any of the following changes without changing the
institutional thing itself:

* a new immutable content version is created;
* a representation is rendered, translated, reformatted, or removed;
* a publication channel or destination changes;
* a title, description, classification, steward, or governance state evolves;
* a file or technical carrier is replaced.

An Asset may therefore have multiple versions, representations, publications,
and relationships while retaining one identity.

## New Asset Boundary

A new Institutional Asset is required when the proposed result has a materially
different institutional purpose, authority subject, identity, or meaning. The
new Asset should be related to the prior Asset through an explicit lineage
relationship such as `derived_from`, `supersedes`, or `extends` where the
relationship is meaningful.

Changing a file, format, URL, title, or publication destination alone does not
justify a new Asset. The domain must assess purpose and meaning before splitting
identity.

## Domain Invariants

1. An Asset identity is stable across its versions and representations.
2. An identity is interpreted within a Tenant and is never inferred from a file
   path, URL, or external system identifier.
3. A version identifies an immutable content snapshot, not a replacement Asset.
4. A materially different institutional purpose or identity creates a new Asset.
5. Every new Asset must have an accountable authority context before it can
   enter governed production.

## Technical Boundary

This document does not prescribe database keys, URL schemes, API resources,
object storage, filesystem paths, content hashes, or framework identifiers.
Those are implementation concerns that must preserve these domain rules.
