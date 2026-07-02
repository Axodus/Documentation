---
schema_version: "1.0.0"
document_id: "ACCOUNT-GDE-005"
aliases: []
document_type: "GUIDE"
title: "Roadmap Updates"
summary: "Provides governed roadmap updates guidance within the Axodus documentation corpus."
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
relationships: [{type: "RELATES_TO", target: "ACCOUNT-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["ACCOUNTABILITY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/accountability/roadmap-updates.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Roadmap Updates

---

## Purpose

Roadmap updates communicate progress, changes, delays, and priorities.

## Required Content

- Current phase
- Completed work
- Changed assumptions
- Blockers
- Next priorities
- Risks and dependencies

## Guardrails

Roadmap updates should not promise fixed delivery dates unless dates are confirmed.

## Draft Roadmap Rules

Roadmap updates should separate intent, active work, validated work, blocked work, and approved release scope. A planned item is not an implementation commitment and a completed local validation is not a publication or production approval.

Roadmap updates should record:

- request or sprint identifier;
- current maturity state;
- blockers and decision owners;
- validation evidence;
- production/execution state;
- next recommended request;
- changes from the prior roadmap.

## Publication Boundary

Roadmap pages must not imply production readiness, financial performance, governance approval, or legal/compliance approval unless the supporting evidence is referenced and approved for publication.
