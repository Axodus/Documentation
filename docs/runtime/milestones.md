---
schema_version: "1.0.0"
document_id: "RUNTIME-GDE-011"
aliases: []
document_type: "GUIDE"
title: "Milestones"
summary: "Defines Runtime milestone and deliverable types, record fields, statuses, and quality gates."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "RUNTIME"
authority_level: "CORE"
author: "Axodus Runtime"
owner: "Axodus Runtime"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-14"
last_reviewed: "2026-07-14"
review_cycle: "QUARTERLY"
next_review: "2026-10-14"
supersedes: []
relationships: [{type: "RELATES_TO", target: "RUNTIME-GDE-001"}, {type: "RELATES_TO", target: "RUNTIME-GDE-004"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-10"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-023"]
related_cores: ["RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/runtime/milestones.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Milestones

---

## Purpose

Milestones make Runtime measurable. A milestone is a checkpoint. A deliverable is an output. Acceptance criteria define whether that output is complete.

Without milestones and deliverables, Runtime cannot distinguish progress from activity.

## Scope

This page applies to documentation, code, governance, Business, Academy, Trading, Treasury, BBA, ACS, and accountability work.

## Definitions

- Milestone: defined checkpoint in a runtime or delivery lifecycle.
- Deliverable: concrete output expected from scope or milestone.
- Acceptance criteria: conditions used to validate that a deliverable meets scope.
- Checkpoint: planned review moment or status boundary.

## Milestone Types

Milestones may track intake completion, classification, ACS analysis, human review, governance review, security review, scope confirmation, approval, implementation progress, validation, deployment, proposal execution, plugin activation, report publication, or archive completion.

## Deliverable Types

Deliverables may include public docs pages, knowledge packs, guides, code, APIs, smart contracts, tests, proposal drafts, reason codes, execution receipts, scope documents, campaign briefs, course outlines, assessments, reward policy drafts, strategy specs, risk reports, allocation reviews, exposure reports, ACS workflows, MCP permission models, and memory updates.

## Record Fields

A milestone record should include milestone identifier, runtime identifier, title, description, milestone type, owner, status, deliverables, acceptance criteria, required reviews, blockers, dependencies, evidence links, completion timestamp, and notes.

A deliverable record should include deliverable identifier, milestone identifier, runtime identifier, title, type, description, file or link, owner, status, review status, acceptance status, known limitations, and evidence links.

## Milestone Statuses

Milestones may be `Planned`, `In Progress`, `Under Review`, `Changes Requested`, `Accepted`, `Blocked`, `Cancelled`, or `Superseded`.

## Quality Gates

Each deliverable should be checked for scope match, completeness, required review, risk or limitation disclosure, documentation usefulness, and preserved evidence.

## Anti-Patterns

Avoid treating activity as a milestone, creating milestones without acceptance criteria, hiding blockers, leaving milestones without owners, and producing deliverables without evidence.

## Related Pages

- [Request Lifecycle](request-lifecycle.md)
- [Validation and Confirmation](validation-and-confirmation.md)
- [Business Delivery Lifecycle](../business/delivery-lifecycle.md)
- [Accountability Records](accountability-records.md)
