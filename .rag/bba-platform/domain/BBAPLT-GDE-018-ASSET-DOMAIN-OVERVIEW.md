---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-018"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Domain Overview"
summary: "Defines Institutional Asset as a canonical domain Aggregate Root and distinguishes it from files, representations, versions, publications, and storage."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-RPT-003"}, {type: "RELATES_TO", target: "BBAPLT-GDE-011"}, {type: "RELATES_TO", target: "BBAPLT-GDE-009"}, {type: "RELATES_TO", target: "BBA-REF-002"}, {type: "RELATES_TO", target: "BBA-ADR-0002"}, {type: "RELATES_TO", target: "BBA-ADR-0004"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-001"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0004"]
related_cores: ["Institutional Asset", "Mission", "Tenant", "Review", "Publication"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Domain Overview

## Purpose

Define Institutional Asset as the canonical domain Aggregate Root for durable
institutional value. An Asset is the thing the institution governs, reviews,
reuses, publishes, supersedes, and traces to a Mission. It is not the file,
format, channel, URL, storage record, or technical representation used to carry
its meaning.

## Institutional Asset Definition

An Institutional Asset is a durable, identity-bearing result or knowledge
artifact that is produced, transformed, reviewed, governed, published, or
retained for institutional value.

Examples include documentation, articles, papers, releases, videos, images,
identity systems, landing pages, newsletters, courses, presentations, datasets,
prompts, models, templates, and guidelines.

The class of Asset may vary, but every Asset has a stable domain identity,
Tenant context, authority relationships, version meaning, lifecycle, and
lineage.

## Asset Is Not a File

```text
Institutional Asset
        ├── Version 1
        │     ├── Markdown representation
        │     └── PDF representation
        ├── Version 2
        │     ├── Website representation
        │     └── Presentation representation
        └── Related audiovisual representation
```

All representations may express the same Asset. A file can be replaced,
converted, rendered, or removed without changing the Asset's domain identity.
Conversely, a new Asset may be created when the institutional meaning, purpose,
authority, or lineage is materially different.

## Aggregate Root Boundary

The Institutional Asset Aggregate Root governs:

- stable identity and Tenant scope;
- classification and institutional purpose;
- current lifecycle state;
- version relationship and immutable version snapshots;
- representations and their relation to a version;
- lineage to Missions, Assets, Agents, Reviews, and Publications;
- Ownership, Stewardship, Authorship, and Custody;
- review, approval, publication, archival, and supersession meaning.

The Aggregate Root does not define storage tables, object locations, binary
processing, rendering pipelines, URLs, API resources, or publication transport.

## Asset and Mission

```text
Mission
  ├── produces → Institutional Asset
  ├── transforms → Institutional Asset
  ├── reviews → Institutional Asset
  └── learns from → Institutional Asset and its outcomes
```

An Asset normally has a producing or governing Mission context. An Asset may be
reused by later Missions without losing the provenance or authority of the
original context. A transformation may create a new version or a new related
Asset depending on whether the institutional identity and purpose remain the
same.

## Asset and Publication

Publication is a governed relationship between an accepted Asset version and a
destination or audience. Publication does not create the Asset and does not
change its identity. A single Asset may have multiple authorized Publications,
each with its own audience, destination, authority, and outcome context.

## Asset and Knowledge Graph

Asset relationships form an institutional lineage graph. The graph records how
Assets are derived, referenced, reviewed, translated, summarized, extended,
duplicated, superseded, generated, or published. Lineage is domain meaning and
must survive changes to files, formats, channels, and technical systems.

## Product-to-Domain Traceability

| Product source | Domain refinement |
| --- | --- |
| Institutional Asset Portfolio | Asset classes, ownership, review intent, and publication relationships become domain responsibilities. |
| Mission Domain Overview | Mission produces, transforms, reviews, and learns from Assets. |
| Mission Rules and Constraints | Asset authority, provenance, Tenant boundaries, acceptance, and Publication constraints apply to Asset work. |
| Ubiquitous Language | Institutional Asset remains distinct from Document, File, Project, Campaign, and Publication. |

## Domain Questions Deferred to This Sprint

The following REQs define the remaining Asset semantics:

- what makes an Asset unique;
- which classifications are canonical;
- how an Asset progresses through lifecycle and states;
- how lineage relations are typed and constrained;
- how four authority dimensions differ;
- what makes a new version versus a new Asset;
- which rules, policies, and constraints apply universally.

## Technical Boundary

This document does not define database entities, object storage, filesystem
paths, APIs, URL identity, binary formats, rendering, version-control commits,
publication transports, or runtime services. Those mechanisms must preserve the
canonical Asset identity and lineage defined here.
