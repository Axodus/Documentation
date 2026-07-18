---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-025"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Version Semantics"
summary: "Defines stable Asset identity, immutable version snapshots, representation continuity, and governance meaning of version states."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-024"}, {type: "RELATES_TO", target: "BBAPLT-GDE-019"}, {type: "RELATES_TO", target: "BBAPLT-GDE-021"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-008"]
related_adrs: ["BBA-ADR-0005"]
related_cores: ["Institutional Asset", "Mission", "Publication"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Version Semantics

## Canonical Decision

An Institutional Asset has a stable identity. Each version is an immutable
snapshot of the Asset's content and meaning at a point in its institutional
history. The Asset's lifecycle, authority assignments, and governance metadata
may evolve without mutating a prior version's content.

This is domain semantics, not source-control semantics.

## New Version

A new version is created when the same Asset's content or meaningful expression
changes while its institutional identity and purpose remain materially the same.
Examples include correcting a paper, updating a guideline, revising a release,
or adding approved content to a course.

The prior version remains immutable and traceable. The new version records its
predecessor and the reason for change.

## New Asset

A new Asset is required when purpose, identity, authority subject, or meaning is
materially different. The new Asset may be linked to the prior Asset through
`derived_from`, `extends`, or `supersedes`, but it does not overwrite the prior
identity.

## Representations and Publications

A representation is a form in which a version is expressed, such as Markdown,
PDF, website, presentation, audio, or video. A representation is not a new
version by default. It becomes relevant to version semantics only when it
expresses a changed content or meaning snapshot.

A publication is an authorized presentation of a designated version to an
audience or channel. A new publication destination does not create a new Asset
or version unless the content or meaning is changed.

## Version Governance States

| State | Meaning |
| --- | --- |
| Draft | Snapshot is being prepared and has not passed required review. |
| Reviewed | Required review has completed, but approval or publication may remain. |
| Approved | Authorized approval applies to this exact immutable snapshot. |
| Published | This exact snapshot has been authorized for publication. |
| Archived | The snapshot is retained but is no longer active for new publication. |

A governance state can change while the snapshot remains byte-for-byte and
meaning-for-meaning immutable. A content change after approval or publication
must create a new version and cannot mutate the approved or published version.

## Version Invariants

1. One Asset identity may have many immutable versions.
2. One version may have many representations and publications.
3. A representation change alone does not create a version.
4. A content or meaning change creates a new version when identity is stable.
5. A material identity or purpose change creates a new Asset.
6. Published content cannot be edited in place.
7. Every version has a reason, predecessor context, and authority decision.

## Technical Boundary

This document does not prescribe semantic-version strings, Git commits, content
hashes, database snapshots, object storage, file naming, or API versioning.
