---
schema_version: "1.0.0"
document_id: "DOC-STD-001"
aliases: []
document_type: "STANDARD"
title: "Documentation Gap Analysis"
summary: "Defines the method for classifying and reporting documentation gaps."
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
business_reviewers: []
security_reviewers: []
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "QUARTERLY"
next_review: "2026-10-01"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-SPEC-001"}, {type: "DEPENDS_ON", target: "DOC-SPEC-002"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-003", "DOC-ADR-004"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Gap Analysis

## Purpose

Define how documentation gaps are classified and reported without modifying affected content.

## Gap Categories

- Missing document or required coverage
- Missing or invalid metadata
- Missing ownership or approval
- Stale review or version
- Broken or absent traceability
- Conflicting authority or terminology
- Unversioned evidence
- Unsupported publication or production claim
- Missing audit or supersession history

## Required Assessment Fields

Every finding MUST record an ID, source path or expected artifact, category, evidence, severity, affected scope, owner, recommended remediation, gate impact, and status.

## Severity

`CRITICAL` blocks reliance or publication; `HIGH` requires planned remediation; `MEDIUM` requires tracked review; `LOW` is controlled improvement.

## Current Assessment

This method does not generate an inventory or current findings.

## Related Documents

- [Documentation Metadata Schema](DOCUMENTATION-METADATA-SCHEMA.md)
- [Documentation Traceability Model](DOCUMENTATION-TRACEABILITY-MODEL.md)
- [DOC-ADR-003](../adr/DOC-ADR-003-UNVERSIONED-CONTROL-ARTIFACTS.md)
- [DOC-ADR-004](../adr/DOC-ADR-004-CROSS-DOCUMENT-TRACEABILITY.md)

## Boundary

Gap classification does not infer missing metadata, migrate legacy documents, or change authority.
