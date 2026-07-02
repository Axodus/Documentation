---
schema_version: "1.0.0"
document_id: "DOC-ADR-020"
aliases: []
document_type: "ADR"
title: "Legacy Archival Policy"
summary: "Proposes canonical historical archival with preserved identity, evidence, supersession, and non-authoritative status."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.MIGRATION"
authority_level: "CORE"
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
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-008"}, {type: "DEPENDS_ON", target: "DOC-ADR-015"}, {type: "RELATES_TO", target: "DOC-ADR-018"}, {type: "RELATES_TO", target: "DOC-ADR-019"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-02"]
related_adrs: ["DOC-ADR-008", "DOC-ADR-015", "DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "DOCUMENTATION-DEBT-CLASSIFICATION.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "governance/DOCUMENTATION-LIFECYCLE.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-020 — Legacy Archival Policy

## Status

PROPOSED. This ADR is not approved and authorizes no archival operation.

## Context

Some legacy documents retain historical or audit value but contain obsolete scope, status, structure, or assumptions. Leaving them as active-looking legacy content creates ambiguity; deleting them removes evidence.

## Problem

Axodus needs a controlled disposition for historical documents that preserves identity and traceability without granting current authority.

## Alternatives Considered

1. Delete stale legacy documents.
2. Keep every stale document unchanged in place.
3. Canonicalize historical evidence with archival lifecycle and supersession metadata.
4. Replace historical documents without preserving identity.

## Proposed Decision

Archive historically valuable legacy documents as canonical `ARCHIVED` + `HISTORICAL` records when authority, ownership, identity, evidence, and relationships can be established.

Archived records:

- preserve body meaning and historical dates;
- receive immutable IDs and complete metadata;
- identify replacements through `supersedes`, `SUPERSEDES`, or related traceability when applicable;
- explicitly disclaim current authority and operational readiness;
- remain searchable and auditable;
- leave baseline and exception registries only after validation.

Documents lacking sufficient evidence remain legacy or excepted; they are not artificially archived.

## Rationale

Canonical archival preserves history while separating current guidance from obsolete evidence. It follows existing lifecycle and retention decisions without deletion or authority inflation.

## Trade-offs

- Archival still requires review and metadata evidence.
- Canonical counts include historical records and must be reported separately.
- Physical movement is not required and may remain deferred.
- Historical content remains accessible and must retain safety context.

## Consequences

- `ARCHIVE_CANDIDATE` is not an automatic decision.
- Archival requires batch governance and promotion threshold checks.
- Archived documents cannot be used as active operational authority.
- IDs, aliases, and history remain immutable.
- Deletion requires separately authorized retention governance.

## Future Impacts

EPIC-02 metrics must distinguish active canonical promotion from canonical archival. Future retention schedules may add storage rules without rewriting historical records.

## Related Documents

- `DOC-STD-003`
- `DOC-PLAY-001`
- `DOC-POL-003`
- `DOC-SPEC-004`

## Supersession Policy

If approved, this ADR becomes immutable. Material archival-policy changes require a new superseding ADR.

## Open Questions

- Retention duration for historical evidence outside regulated contexts.
- Whether future archives require a dedicated physical publication surface.

## References

- ADR-008 retention and historical evidence.
- ADR-015 archiving strategy.
