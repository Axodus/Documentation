# Documentation ADR Index

Status: MANUALLY_MAINTAINED
Version: 1.0.0
Last Updated: 2026-07-01
Owner: Axodus Documentation Core

This index records the approved architectural baseline for the Documentation Governance Framework. It is manually maintained and is not generated.

| ADR ID | Title | Status | Version | Owner | Approval Date | Scope | Summary | Related ADRs | Related Governance Documents |
|---|---|---|---|---|---|---|---|---|---|
| [DOC-ADR-001](adr/DOC-ADR-001-OFFICIAL-DOCUMENTATION-SOURCE.md) | Official Documentation Source | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Hybrid versioned authority with domain ownership. | 003, 017 | Authority Model; Instructions Strategy |
| [DOC-ADR-002](adr/DOC-ADR-002-MATURITY-AND-PUBLICATION-STATE.md) | Separate Maturity and Publication State | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Independent maturity, publication, and state dimensions. | 005 | Lifecycle; Metadata Schema |
| [DOC-ADR-003](adr/DOC-ADR-003-UNVERSIONED-CONTROL-ARTIFACTS.md) | Unversioned Control Artifacts | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Versioned representation without root Git initialization. | 001 | Instructions Strategy; Conflict Register |
| [DOC-ADR-004](adr/DOC-ADR-004-CROSS-DOCUMENT-TRACEABILITY.md) | Cross-Document Traceability | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Typed directed relationships with derived inverses. | 005, 010 | Traceability Model; Metadata Schema |
| [DOC-ADR-005](adr/DOC-ADR-005-METADATA-SCHEMA-ARCHITECTURE.md) | Metadata Schema Architecture | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Front matter is source; artifacts are derived. | 011, 016 | Metadata Schema; Versioning Policy |
| [DOC-ADR-006](adr/DOC-ADR-006-DOCUMENTATION-CONFLICT-RESOLUTION.md) | Documentation Conflict Resolution | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Scope-aware resolution with strict safety boundaries. | 001, 017 | Authority Model; Conflict Register |
| [DOC-ADR-007](adr/DOC-ADR-007-DOCUMENTATION-RELEASES.md) | Documentation Releases | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Explicit releases with source, approval, and rollback evidence. | 013, 014 | Versioning Policy; Publication Governance |
| [DOC-ADR-008](adr/DOC-ADR-008-RETENTION-AND-HISTORICAL-EVIDENCE.md) | Retention and Historical Evidence | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Retain evidence while excluding it from current guidance. | 015 | Lifecycle; Audit Log Schema |
| [DOC-ADR-009](adr/DOC-ADR-009-OFFICIAL-REPOSITORY-STRUCTURE.md) | Official Repository Structure | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Prospective structure without legacy movement. | 012, 017 | Authority Model; Master Index |
| [DOC-ADR-010](adr/DOC-ADR-010-DOCUMENT-NAMING-CONVENTION.md) | Document Naming Convention | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Immutable scoped IDs and permanent aliases. | 012 | Authority Model; Metadata Schema |
| [DOC-ADR-011](adr/DOC-ADR-011-REQUIRED-METADATA.md) | Required Metadata | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Universal metadata envelope with conditional rules. | 005 | Metadata Schema; Gap Analysis |
| [DOC-ADR-012](adr/DOC-ADR-012-DOCUMENTATION-HIERARCHY.md) | Documentation Hierarchy | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Logical scope and breadth without global path precedence. | 006, 017 | Authority Model; Conflict Register |
| [DOC-ADR-013](adr/DOC-ADR-013-DOCUMENT-SEMANTIC-VERSIONING.md) | Document Semantic Versioning | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Independent SemVer contracts. | 005, 007 | Versioning Policy; Metadata Schema |
| [DOC-ADR-014](adr/DOC-ADR-014-PUBLICATION-PIPELINE.md) | Publication Pipeline | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Gated validation, release, publication, and audit stages. | 007, 016 | Publication Governance; Lifecycle |
| [DOC-ADR-015](adr/DOC-ADR-015-ARCHIVING-STRATEGY.md) | Archiving Strategy | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Logical archival state with preserved identity. | 008, 009 | Lifecycle; Audit Log Schema |
| [DOC-ADR-016](adr/DOC-ADR-016-DOCUMENTATION-AUTOMATION.md) | Documentation Automation | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Contracts precede incremental layered automation. | 005, 011 | Metadata Schema; Traceability Model |
| [DOC-ADR-017](adr/DOC-ADR-017-LOGICAL-AUTHORITY-VS-PHYSICAL-LOCATION.md) | Logical Authority versus Physical Location | APPROVED | 1.0.0 | Axodus Documentation Core | 2026-07-01 | DOCUMENTATION / CORE | Governance evidence, not path, establishes authority. | 001, 006, 012 | Authority Model; Conflict Register |

## Architecture Consistency Review

The approved baseline was reviewed across Schema 1.0.0, taxonomy, identifiers, authority, lifecycle, versioning, traceability, publication, archival policy, and templates.

- `publication_status`, `document_state`, and `maturity_level` remain independent.
- `authority_scope` and `authority_level` express logical applicability; paths do not grant authority.
- Canonical front matter is the source; indexes, manifests, and graph views are derived.
- Relationships are authored downstream-to-upstream where immutability requires it; inverse edges are derived.
- Approved ADRs are immutable and are replaced only through a new superseding ADR.
- Version domains remain independent.
- Documentation approval and publication never grant operational execution.

No unresolved semantic conflict was identified within this baseline.

## Remaining External Decisions

The approved architecture intentionally leaves implementation choices to separately scoped executions, including machine-readable schema representation, generator implementation, CI enforcement, publication target, and migration scheduling.
