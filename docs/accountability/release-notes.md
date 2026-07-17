---
schema_version: "1.0.0"
document_id: "ACCOUNT-GDE-004"
aliases: []
document_type: "GUIDE"
title: "Release Notes"
summary: "Provides governed release notes guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "ACCOUNTABILITY"
authority_level: "CORE"
author: "Accountability Nucleus"
owner: "Accountability Nucleus"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-05"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "ACCOUNT-GDE-001"}, {type: "DEPENDS_ON", target: "DOC-ADR-014"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["ACCOUNTABILITY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/accountability/release-notes.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Release Notes

---

## Purpose

Release notes communicate product and documentation changes.

## Contents

- Product releases
- Breaking changes
- Security updates
- Governance-approved releases
- Known limitations
- Migration notes

## Guardrails

Do not claim releases are deployed unless deployment evidence exists.

## Draft Release Note Rules

Release notes should classify each entry as draft, candidate, approved, published, deprecated, or superseded. Draft and candidate notes are not production release announcements.

Each material release note should include:

- scope of change;
- affected nucleus or product;
- validation evidence;
- known limitations;
- migration or rollback note if applicable;
- publication authority;
- links to governance, security, or deployment evidence when required.

## Publication Boundary

Release notes must not imply that contracts, APIs, frontends, treasury flows, trading flows, swaps, payouts, settlement, or production infrastructure are live unless verified release evidence exists.

## Change Classification

Release notes classify changes as documentary, prototype, configuration,
deployment, activation, rollback, or correction. These classes are not
interchangeable: a merged document or implementation artifact does not prove
deployment, and deployment does not prove authorized activation.

Each entry should identify the affected surface, previous and new state,
effective context, source reference, reviewer, known limitations, and rollback
or supersession path. Security-sensitive or private details remain in the
appropriate restricted record.

If evidence is incomplete, the entry records the change as reported or pending
verification. It must not use release language to promote an unverified
capability to active, operational, or production status.
