---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-026"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Rules"
summary: "Defines non-negotiable domain invariants for Institutional Asset identity, lineage, representations, versions, authority, approval, publication, and supersession."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-025"}, {type: "RELATES_TO", target: "BBAPLT-GDE-023"}, {type: "RELATES_TO", target: "BBAPLT-GDE-024"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-009"]
related_adrs: []
related_cores: ["Institutional Asset", "Mission", "Review", "Publication"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Rules

## Purpose

State the domain invariants that every Asset operation must preserve. These
rules are stronger than convenience, workflow preference, or implementation
choice.

## Identity and Version Rules

1. An Asset has one stable identity in its Tenant context.
2. A file, URL, format, representation, or publication is not an Asset identity.
3. A version is an immutable content and meaning snapshot.
4. A content change creates a new version when Asset identity remains stable.
5. A material purpose or identity change creates a new Asset.
6. Governance metadata may evolve without mutating version content.

## Representation and Lineage Rules

1. Multiple representations may express one version.
2. A representation conversion does not create a new version by itself.
3. Every material derivation, translation, summary, extension, review, or
   publication relationship uses a typed directional lineage relation.
4. Direct provenance is preserved even when transitive lineage is available.
5. Supersession never deletes or reassigns the identity of the predecessor.

## Authority and Governance Rules

1. Ownership, Stewardship, Authorship, and Custody remain distinct.
2. Each governed action has an authorized role and a reason.
3. Agents may act only inside delegated authority and cannot self-approve.
4. Approval applies to a designated immutable version.
5. Publication requires approval, rights, audience, and publication authority.
6. Archival and supersession preserve historical traceability.

## Mission and Tenant Rules

1. An Asset produced by a Mission records its Mission context and provenance.
2. Mission membership does not make Axodus a special Core assumption.
3. Asset identity and authority are interpreted within a Tenant boundary.
4. Cross-Tenant reuse requires an explicit governed relationship and rights.
5. A Tenant-specific policy cannot redefine a canonical Core concept silently.

## Failure Meaning

An operation that would violate an invariant is not a partial success. It must be
rejected or escalated to the responsible governance role with the violated rule,
affected Asset/version, and remediation context made explicit.

## Technical Boundary

These rules do not prescribe transaction handling, database constraints, API
responses, event schemas, or runtime error classes.
