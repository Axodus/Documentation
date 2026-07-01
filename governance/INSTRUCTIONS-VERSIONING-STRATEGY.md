---
schema_version: "1.0.0"
document_id: "DOC-SPEC-003"
aliases: []
document_type: "SPECIFICATION"
title: "Instructions Versioning Strategy"
summary: "Defines the versioned-authority direction for global unversioned instruction artifacts."
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
review_cycle: "SEMIANNUAL"
next_review: "2027-01-01"
supersedes: []
relationships: [{type: "REALIZES", target: "DOC-ADR-003"}, {type: "DEPENDS_ON", target: "DOC-ADR-001"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-001", "DOC-ADR-003"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Instructions Versioning Strategy

## Purpose

Define the approved architectural direction for making global unversioned instruction artifacts auditable without modifying `/opt/Axodus`.

## Current Boundary

`/opt/Axodus` is not presumed to be a Git repository. Its `.instructions` artifacts are local portfolio controls without native root history. They remain operational evidence until an approved migration or representation is executed.

## Direction

Use a versioned documentary authority to preserve approved representations of global controls. Do not initialize Git at `/opt/Axodus`. A future request must define selection, sensitive-data review, provenance, hashing, timestamps, reconciliation, edit ownership, and transition.

## Authority

Copying or snapshotting a file does not grant authority. The versioned representation becomes authoritative only through explicit scope ownership, review, approval, and transition evidence. While unresolved, conflicts apply the stricter safety boundary and enter the conflict register.

## History

History before formal versioning MUST be described as unavailable or reconstructed evidence, never invented. Future changes SHOULD originate from the selected versioned authority after transition approval.

## Related Documents

- [Documentation Authority Model](DOCUMENTATION-AUTHORITY-MODEL.md)
- [Documentation Conflict Register](DOCUMENTATION-CONFLICT-REGISTER.md)
- [DOC-ADR-001](../adr/DOC-ADR-001-OFFICIAL-DOCUMENTATION-SOURCE.md)
- [DOC-ADR-003](../adr/DOC-ADR-003-UNVERSIONED-CONTROL-ARTIFACTS.md)

## Non-Execution Boundary

This strategy does not inspect, copy, hash, snapshot, move, or modify `/opt/Axodus/.instructions`.
