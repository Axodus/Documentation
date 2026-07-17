---
schema_version: "1.0.0"
document_id: "DOC-ADR-020"
aliases: []
document_type: "ADR"
title: "Legacy Archival Policy"
summary: "Establishes canonical historical archival with preserved identity, evidence, supersession, and non-authoritative status."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
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
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-02"]
related_adrs: ["DOC-ADR-008", "DOC-ADR-015", "DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-DEBT-CLASSIFICATION.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "governance/DOCUMENTATION-LIFECYCLE.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-020 — Legacy Archival Policy

## Status

APPROVED

## Approval Date

2026-07-02

## Context

Some legacy documents retain historical or audit value but contain obsolete scope, status, structure, or assumptions. Leaving them as active-looking legacy content creates ambiguity; deleting them removes evidence.

## Problem

Axodus needs a controlled disposition for historical documents that preserves identity and traceability without granting current authority.

## Alternatives Considered

1. Delete stale legacy documents.
2. Keep every stale document unchanged in place.
3. Canonicalize historical evidence with archival lifecycle and supersession metadata.
4. Replace historical documents without preserving identity.

## Adopted Solution

Legacy documents with historical value MUST be archived with historical status, supersession metadata, and traceability instead of being deleted.

Archive a legacy document as a canonical `ARCHIVED` + `HISTORICAL` record only when historical value, authority boundary, ownership, identity, evidence, and relationships can be established.

Archived records:

- preserve body meaning and historical dates;
- receive immutable IDs and complete metadata;
- identify replacements through `supersedes`, `SUPERSEDES`, or related traceability when applicable;
- explicitly disclaim current authority and operational readiness;
- remain searchable and auditable;
- leave baseline and exception registries only after validation.

Documents lacking sufficient evidence remain legacy or excepted; they are not artificially archived.

## Archive Criteria

An `ARCHIVE_CANDIDATE` may be archived only when:

- historical or audit value is demonstrated;
- current operational authority is explicitly disclaimed;
- identity, aliases, original dates, owner, and authority boundary are evidence-backed;
- supersession or replacement relations are recorded when a replacement exists;
- conflicts are identified and the stronger current authority is referenced;
- no secret value or unsafe operational assumption is exposed;
- ADR-018 batch governance and ADR-019 promotion thresholds pass.

Classification alone does not approve archival.

## Historical Preservation and Supersession

Preserve original meaning, chronology, attribution, and safe evidence. When a current replacement exists, the archived document records it through allowed supersession metadata or relationships. Absence of a replacement is recorded explicitly; it does not create one by inference.

Archived material is non-current evidence. Physical location cannot preserve or grant authority, and moving a file is not required for archival status.

Logical authority remains with the applicable current canonical source. Archival preserves historical scope and provenance but never elevates obsolete content over current authority.

## Deletion and Conflict Restrictions

Deletion is outside this policy and requires separate retention authorization. A conflict is not removed by archival: the archive MUST identify the applicable current authority and retain safe evidence of the historical discrepancy.

## Baseline, Exceptions, and Evidence

- Remove the legacy baseline entry and matching exception only after canonical archival passes full batch validation.
- Deferred or rejected archive candidates remain unchanged in both registries.
- Evidence records path, hashes, classification, reviewers, authority decision, supersession, registry deltas, and safe diagnostics.
- Evidence MUST NOT contain secret values or unnecessary source content.

## Rollback

Rollback reverses the entire archival batch changeset. The assigned ID remains permanently reserved, and restored legacy entries must match the pre-batch evidence and synchronized exception record.

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

This approved ADR is immutable. Material archival-policy changes require a new superseding ADR. Retention duration and any future publication surface require separate governance and do not alter archival authority.

## References

- ADR-008 retention and historical evidence.
- ADR-015 archiving strategy.
