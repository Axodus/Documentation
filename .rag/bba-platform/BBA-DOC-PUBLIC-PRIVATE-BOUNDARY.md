---
schema_version: "1.0.0"
document_id: "BBA-POL-001"
aliases: []
document_type: "POLICY"
title: "BBA Platform Public Private Boundary"
summary: "Defines which BBA Platform documentation remains private and how approved public projections are derived."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOCUMENTATION"
authority_level: "PROJECT"
author: "BBA Documentation Governance"
owner: "BBA Documentation Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-18"
supersedes: []
relationships: [{type: "RELATES_TO", target: "BBA-GDE-100"}, {type: "RELATES_TO", target: "BBA-REF-003"}]
related_epics: ["EPIC-000"]
related_requirements: ["REQ-000-010"]
related_adrs: ["BBA-ADR-0001"]
related_cores: []
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Public Private Boundary

## Private by Default

The following remain private in `.rag/bba-platform/`:

- Foundation manifests and checksums;
- execution backlog and dependency graph;
- proposed ADRs and unresolved decisions;
- internal risk, migration, and review evidence;
- tenant-specific data, credentials, prompts, and operational details;
- unsanitized agent outputs and claim-review records.

## Public Candidate

Approved product concepts, public domain explanations, safe capability
descriptions, and validated user guidance may be projected to
`docs/bba-platform/` after Editorial and Publication Approval.

## Prohibited Publication

Do not publish secrets, tenant data, unsupported implementation claims,
unapproved security or compliance claims, private prompts, internal agent
instructions, or evidence that exposes another tenant.

## Derived Documents

Every public document must identify its private source, preserve canonical
terminology, remove private evidence, and pass the existing documentation
validation and publication gates.
