---
schema_version: "1.0.0"
document_id: "DOC-RPT-005"
aliases: []
document_type: "REPORT"
title: "Documentation Batch 01 Freeze Record"
summary: "Records the immutable candidate scope and ordering frozen for Batch 01 execution preparation."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.MIGRATION.BATCH_01"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ROAD-003"}, {type: "DEPENDS_ON", target: "DOC-REF-005"}, {type: "DEPENDS_ON", target: "DOC-RPT-006"}, {type: "DEPENDS_ON", target: "DOC-ADR-018"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-04"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["ACCOUNTABILITY", "ACADEMY", "ACS", "BBA_AGENCY", "BUSINESS", "DEFI", "DEX", "GOVERNANCE", "LOTTERY", "MARKETPLACE", "MINING", "RUNTIME", "SECURITY", "TOKENOMICS", "TRADING", "TREASURY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-BATCH-01-CANDIDATE-FREEZE-PROPOSAL.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Batch 01 Freeze Record

## Freeze Status

```text
Freeze date: 2026-07-02
Primary candidates: 20 FROZEN_PRIMARY
Alternate candidates: 4 FROZEN_ALTERNATE
Blocked candidates: 0
Missing candidates: 0
Final numeric IDs reserved: 0
Migration started: false
```

The ordered path lists and their scope/type patterns are authoritative in `DOC-ROAD-003`.

## Ordered List Integrity

```text
primary ordered path-set SHA-256:
5773a61769d7b2a679f07639022eaf52a4125aebf601f38cee1d695d39bbd06d

alternate ordered path-set SHA-256:
b68d76b352804876ef61ef02f1b9667b42274d3e9b6b17bdeb7e68aacdf17333
```

The hashes cover normalized POSIX paths in listed order, joined by LF with a final LF. They do not hash or expose source contents.

## Freeze Invariants

- Candidate substitution may use alternates only in their frozen order.
- A path, scope, type, or order change requires a new approval record.
- `CORE` remains `GOVERNANCE_RESERVED`, not a public-core adoption entry.
- Every proposed identifier remains `<SCOPE>-GDE-<NNN>`.
- `DOC-GDE-006` is the resolvable default semantic target; REQ-05 may add stricter applicable canonical targets.
- No source body, baseline entry, exception, or final ID changed.

## Exit Boundary

This record authorizes execution preparation only. REQ-05 must perform content authority, semantic diff, security, metadata, relationship, and final authorization checks before any migration.
