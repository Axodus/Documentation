---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-020"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Classification"
summary: "Defines the semantic classes used to describe Institutional Assets without conflating domain meaning with format or delivery medium."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-019"}, {type: "RELATES_TO", target: "BBAPLT-GDE-018"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-003"]
related_adrs: []
related_cores: ["Institutional Asset", "Mission", "Capability"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Classification

## Purpose

Provide a shared semantic vocabulary for describing what an Asset is and why
the institution governs it. Classification supports discovery, policy, review,
and reuse; it does not define storage or delivery mechanics.

## Canonical Asset Classes

| Class | Meaning | Illustrative Assets |
| --- | --- | --- |
| Knowledge | Institutional understanding or evidence | paper, research note, dataset |
| Editorial | Crafted informational or narrative content | article, newsletter, release |
| Brand | Institutional identity and expression | identity system, guideline |
| Marketing | Material intended to support awareness or engagement | campaign, landing page |
| Publication | An intentionally released institutional work | journal issue, public report |
| Media | Audiovisual or visual communication work | video, image, presentation |
| Learning | Material whose purpose is education or enablement | course, lesson |
| Governance | Material that defines direction, control, or accountability | policy, decision record |
| Data | Curated institutional data with governed meaning | dataset, evidence register |
| Model | Governed model or prompt used as institutional capability | prompt, AI model |
| Template | Reusable structure for producing other Assets | brief, document template |
| Guideline | Reusable normative or quality direction | editorial guideline |

These classes are canonical domain categories, not a closed list of all future
Asset types. A future class requires documented domain review and vocabulary
alignment before it becomes canonical.

## Multiple Classification

An Asset may have more than one class when its institutional meaning genuinely
spans domains. For example, a research paper may be both Knowledge and
Publication, while a brand guideline may be both Brand and Guideline.

Classification must describe the Asset's purpose, not merely its current file or
audience. The primary class identifies the dominant purpose; secondary classes
record material additional meanings.

## Classification Boundaries

The following are not semantic Asset classes:

* Markdown, PDF, image, video, HTML, or any other file format;
* website, email, print, social, or any other publication channel;
* file, object, URL, database record, or storage medium;
* MIME type, encoding, resolution, or other technical media property.

Those properties may describe a representation of an Asset, but they cannot
replace its domain classification.

## Rules

1. Every governed Asset has at least one semantic class.
2. Classification is evaluated against purpose and meaning.
3. Multiple classes are allowed when each one is materially justified.
4. A format or channel change does not require reclassifying the Asset.
5. A material purpose change may require a new class, new version, or new Asset
   according to the identity and version rules.

## Technical Boundary

This document does not prescribe enum storage, search indexes, MIME mappings,
serialization, APIs, or user-interface taxonomies.
