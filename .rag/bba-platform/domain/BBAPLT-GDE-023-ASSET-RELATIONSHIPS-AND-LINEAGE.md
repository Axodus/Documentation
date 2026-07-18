---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-023"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Relationships and Lineage"
summary: "Defines typed directional relationships and provenance rules for the institutional Asset lineage graph."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-022"}, {type: "RELATES_TO", target: "BBAPLT-GDE-018"}, {type: "RELATES_TO", target: "BBAPLT-GDE-009"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-006"]
related_adrs: []
related_cores: ["Institutional Asset", "Mission", "Publication", "Review"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Relationships and Lineage

## Purpose

Define how an Asset is connected to other institutional results and how its
provenance is understood over time. Lineage is a domain record of meaning and
accountability, not merely a technical dependency graph.

## Canonical Relationships

| Relationship | Directional meaning |
| --- | --- |
| `derived_from` | The source Asset materially informed the resulting Asset. |
| `references` | The source Asset cites or points to another Asset without transforming it. |
| `supersedes` | The source Asset is formally designated to replace another Asset's role. |
| `generated_by` | An Asset was produced through the accountable action of an agent or mission. |
| `reviews` | A review Asset records evaluation of another Asset. |
| `translates` | An Asset expresses another Asset's meaning in another language. |
| `summarizes` | An Asset condenses the meaning of another Asset. |
| `extends` | An Asset intentionally expands the scope or meaning of another Asset. |
| `duplicates` | An Asset is recognized as a duplicate of another Asset. |
| `publishes` | A Publication Asset carries an Asset into an authorized publication context. |

Every relationship has a source, target, type, accountable authority, and
domain rationale. Direction must never be inferred from names or file paths.

## Mission Lineage

An Asset may be produced within a Mission, derived from Mission outputs, or
serve as an input to a Mission. The Mission remains the central unit of work;
the Asset remains the durable result being governed. A Mission-to-Asset
relationship must identify whether the Asset is an input, output, reference, or
accepted result.

## Provenance and Transitivity

Lineage must preserve the immediate relationship and enough context to answer:

* which Mission or authorized action originated the Asset;
* which source Assets materially contributed to it;
* which versions and representations were used;
* which review, translation, summary, or publication relations occurred.

Transitive lineage may be followed to explain ancestry, but it must not replace
the direct edges that establish immediate provenance. A cycle is permitted only
when the relationship's domain meaning explicitly allows it; derivation and
supersession must not form unexplained cycles.

## Relationship Rules

1. A relationship cannot change the identity or immutable content of either
   Asset.
2. A relationship must be authorized by the responsible Steward or policy.
3. Deleted files or unavailable representations do not erase domain lineage.
4. `supersedes` requires a successor and a reason; it is not an alias.
5. `duplicates` does not merge identities automatically.
6. Publication lineage records what was published, not merely where a file was
   copied.

## Technical Boundary

This document does not prescribe graph databases, foreign keys, event schemas,
search indexes, URLs, queues, or connector-specific provenance formats.
