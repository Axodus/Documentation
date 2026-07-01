---
schema_version: "1.0.0"
document_id: "DOC-ADR-011"
aliases: []
document_type: "ADR"
title: "Required Metadata"
summary: "Requires a universal metadata envelope with conditional type and risk rules."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: null
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: []
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-005"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-005"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-011 — Required Metadata

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Optional metadata cannot reliably support ownership, review, authority, and traceability.

## Decision

Require the complete Schema 1.0.0 key set, allowing explicit null or empty arrays only where conditional rules permit.

## Rationale

Consistent key presence simplifies review and future deterministic processing without inventing values.

## Alternatives Considered

- Minimal title/owner fields: insufficient governance.
- One rigid non-null set: unsuitable for drafts and immutable history.
- External metadata only: dual source risk.

## Trade-offs

Templates are verbose and migrated files require deliberate metadata work.

## Consequences

Missing facts remain explicit; placeholders are forbidden in authored documents.

## Future Impacts

Future JSON Schema and validators must implement the human-readable contract exactly.

## Related Documents

- [Documentation Metadata Schema](../governance/DOCUMENTATION-METADATA-SCHEMA.md)
- [Documentation Gap Analysis](../governance/DOCUMENTATION-GAP-ANALYSIS.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-011`.

## References

- Schema 1.0.0
