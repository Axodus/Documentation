---
schema_version: "1.0.0"
document_id: "DOC-POL-005"
aliases: []
document_type: "POLICY"
title: "Documentation Legacy Baseline Policy"
summary: "Defines the descriptive baseline, hash controls, change detection, and migrate-on-change policy for legacy documentation."
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
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-01"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "QUARTERLY"
next_review: "2026-10-01"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-REF-003"}, {type: "RELATES_TO", target: "DOC-POL-006"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-005", "DOC-ADR-011", "DOC-ADR-016"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Legacy Baseline Policy

## Purpose

Define a deterministic, descriptive record of known legacy documentation so future validation can distinguish accepted technical debt from modified or newly introduced non-compliant content.

## Scope

The baseline covers every Markdown source document classified `LEGACY` by Documentation Validation Framework 1.0. Templates, canonical Schema 1.0.0 documents, generated outputs, dependency trees, caches, build output, and external snapshot payloads are excluded.

## Principles

- The baseline describes current state and never corrects or infers metadata.
- Every entry is pinned to a normalized POSIX path and canonical SHA-256.
- Inclusion does not grant authority, approval, maturity, or publication status.
- Baseline diagnostics remain informational until separately approved enforcement.
- The default disposition is `MIGRATE_ON_CHANGE`.

## Lifecycle

Baseline version `1.0.0` is immutable as an accepted snapshot. A later baseline update uses Semantic Versioning and records its source inventory version, deterministic timestamp, and reviewed change set.

## Ownership and Approval

The Axodus Documentation Core owns baseline integrity. The Documentation Maintainer prepares updates. The Documentation Coordinator approves baseline revisions and any cohort-level governance exception.

## Review

The baseline is reviewed quarterly and whenever document discovery, hashing, classification, or source-scope rules change.

## Update Process

1. Discover repository Markdown using the Validation Engine source scope.
2. Classify documents without inferring unavailable metadata.
3. Compute canonical SHA-256 after UTF-8 decoding and LF normalization.
4. Compare paths and hashes with the accepted baseline.
5. Record known, changed, removed, and unbaselined legacy states.
6. Review every baseline delta before publishing a new baseline version.

No automatic baseline acceptance is permitted.

## Migration Policy

`MIGRATE_ON_CHANGE` means an unchanged baseline document remains tolerated as known debt. Any intentional content change requires migration to the current documentation schema unless a separately approved exception authorizes another disposition.

Deletion, relocation, or rename is not silently accepted as migration. It must be reviewed as a removed baseline entry and, where applicable, a new unbaselined document.

## Hash Policy

- Input encoding: UTF-8.
- Line endings: CRLF and CR normalized to LF.
- Algorithm: SHA-256, lowercase hexadecimal.
- Paths: repository-relative POSIX paths.
- Serialization: deterministic JSON with sorted object keys and terminal LF.
- Generated artifacts are excluded from the source corpus and never hash themselves.

## Change Detection

| State | Meaning |
|---|---|
| `KNOWN_LEGACY` | Path exists, remains legacy, and hash matches baseline. |
| `LEGACY_CHANGED` | Baseline path exists but canonical hash differs. |
| `UNBASELINED_LEGACY` | Legacy path exists without a baseline entry. |
| `BASELINE_DOCUMENT_REMOVED` | Baseline path no longer exists in the legacy corpus. |

All four states are informational during EXEC-06.

## Governance Rules

- Duplicate baseline paths are invalid.
- Baseline hashes must use 64 lowercase hexadecimal characters.
- Schema version detection records only explicit values.
- Missing rules contain only actual validation Rule IDs.
- Baseline changes must remain auditable and must not alter source documents.

## Related Documents

- [Documentation Validation Rules](./DOCUMENTATION-VALIDATION-RULES.md)
- [Documentation Exception Policy](./DOCUMENTATION-EXCEPTION-POLICY.md)
- [Documentation Metadata Schema](../governance/DOCUMENTATION-METADATA-SCHEMA.md)

## Preservation Boundary

This policy does not migrate documents, enable enforcement, publish content, or grant production or execution authority.
