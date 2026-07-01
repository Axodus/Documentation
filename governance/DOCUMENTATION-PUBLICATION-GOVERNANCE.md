---
schema_version: "1.0.0"
document_id: "DOC-POL-004"
aliases: []
document_type: "POLICY"
title: "Documentation Publication Governance"
summary: "Defines authority, evidence, gates, rollback, and audit for official publication."
version: "1.0.0"
publication_status: "ACTIVE"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "QUARTERLY"
next_review: "2026-10-01"
supersedes: []
relationships: [{type: "REALIZES", target: "DOC-ADR-014"}, {type: "DEPENDS_ON", target: "DOC-ADR-007"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-007", "DOC-ADR-014"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Publication Governance

## Purpose

Define documentary authority and gates required before official publication.

## Separation of Stages

Drafting, review, approval, activation, release approval, publication authorization, publication execution, rollback, and post-publication audit are distinct stages. Build success or `ACTIVE` status does not authorize publication.

## Required Publication Evidence

A publication request MUST identify the release, exact source commit, included document IDs and versions, target, command or mechanism, operator, scope approvals, enhanced reviews, validation evidence, known risks, rollback owner, rollback method, and post-publication audit plan.

## Blocking Conditions

Publication is blocked by missing approval, unresolved authority conflict, overdue active review, unsafe or unsupported claim, unknown target, missing rollback, sensitive-value exposure, or any implication that documentation grants production or financial execution.

## Roles

The Documentation owner prepares the release package. Domain owners approve domain facts. Security, financial/compliance, legal, and governance reviewers approve their risk domains. A separately authorized release operator performs publication.

## Emergency Correction

Emergency correction still requires a documented defect, affected routes, authorized rollback or patch, required safety review, and post-action audit.

## Related Documents

- [Documentation Authority Model](DOCUMENTATION-AUTHORITY-MODEL.md)
- [Documentation Lifecycle](DOCUMENTATION-LIFECYCLE.md)
- [Documentation Versioning Policy](DOCUMENTATION-VERSIONING-POLICY.md)
- [DOC-ADR-007](../adr/DOC-ADR-007-DOCUMENTATION-RELEASES.md)
- [DOC-ADR-014](../adr/DOC-ADR-014-PUBLICATION-PIPELINE.md)

## No-Publication Default

Publication remains disabled unless a separate execution request explicitly authorizes it.
