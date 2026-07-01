---
schema_version: "1.0.0"
document_id: "DOC-REF-004"
aliases: []
document_type: "REFERENCE"
title: "Documentation Validation Error Catalog"
summary: "Defines immutable validation error codes and remediation guidance for Validation Framework 1.0."
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
review_cycle: "SEMIANNUAL"
next_review: "2027-01-01"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-REF-003"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-005", "DOC-ADR-011", "DOC-ADR-016"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Validation Error Catalog

## Contract

Error codes are immutable and map one-to-one to the initial rule catalog. A deprecated code remains reserved permanently. New semantics require a new code.

| Error Code | Severity | Description | Cause | Resolution | Related Rule |
|---|---|---|---|---|---|
| `DOC-VAL-001` | INFO | Legacy document detected. | Schema 1.0.0 is not declared. | Preserve until baseline or migration. | `DOC-RULE-001` |
| `DOC-VAL-002` | WARNING | Template profile inconsistency. | Missing/order-invalid template metadata or H1. | Repair the template structure. | `DOC-RULE-002` |
| `DOC-VAL-003` | ERROR | Canonical front matter missing. | Required YAML envelope is absent. | Add canonical front matter. | `DOC-RULE-003` |
| `DOC-VAL-004` | ERROR | JSON Schema validation failed. | Metadata violates Schema 1.0.0. | Correct the reported field. | `DOC-RULE-004` |
| `DOC-VAL-005` | ERROR | Semantic Version invalid. | Version is not stable SemVer. | Use `MAJOR.MINOR.PATCH`. | `DOC-RULE-005` |
| `DOC-VAL-006` | ERROR | Date invalid or inconsistent. | Invalid encoding or chronological order. | Correct dates from evidence. | `DOC-RULE-006` |
| `DOC-VAL-007` | ERROR | Canonical ID syntax invalid. | Scope/type/sequence format is invalid. | Allocate a valid ID. | `DOC-RULE-007` |
| `DOC-VAL-008` | ERROR | Reserved ID used. | Sequence zero is assigned. | Allocate a non-reserved sequence. | `DOC-RULE-008` |
| `DOC-VAL-009` | ERROR | Metadata order invalid. | Keys differ from canonical order. | Reorder keys only. | `DOC-RULE-009` |
| `DOC-VAL-010` | ERROR | Title and H1 differ. | Visible and metadata titles are not equivalent. | Align titles. | `DOC-RULE-010` |
| `DOC-VAL-011` | ERROR | Lifecycle combination invalid. | Publication and document state conflict. | Apply an allowed combination. | `DOC-RULE-011` |
| `DOC-VAL-012` | ERROR | Review schedule invalid. | Cycle and next review disagree. | Correct review metadata. | `DOC-RULE-012` |
| `DOC-VAL-013` | ERROR | Ownership requirement missing. | Accountable role or approver is absent. | Assign authorized ownership. | `DOC-RULE-013` |
| `DOC-VAL-014` | ERROR | Relationship object invalid. | Type/target is invalid or duplicated. | Correct the edge declaration. | `DOC-RULE-014` |
| `DOC-VAL-015` | ERROR | Duplicate canonical ID. | Multiple canonical documents share an ID. | Allocate a unique ID. | `DOC-RULE-015` |
| `DOC-VAL-016` | ERROR | Duplicate alias. | Alias resolves to multiple documents. | Retain one authoritative mapping. | `DOC-RULE-016` |
| `DOC-VAL-017` | ERROR | Alias collides with canonical ID. | Alias shadows another document identity. | Remove or replace the alias. | `DOC-RULE-017` |
| `DOC-VAL-018` | ERROR | Relationship target unresolved. | Target ID/alias is absent or ambiguous. | Correct or govern the target. | `DOC-RULE-018` |
| `DOC-VAL-019` | ERROR | Supersession declarations disagree. | List and relationship edge differ. | Make both declarations equivalent. | `DOC-RULE-019` |
| `DOC-VAL-020` | ERROR | Forbidden relationship cycle. | Hierarchical graph contains a cycle. | Correct dependency direction or semantics. | `DOC-RULE-020` |
| `DOC-VAL-021` | INFO | Allowed relates cycle observed. | Non-hierarchical mutual relation exists. | Review only if unintended. | `DOC-RULE-021` |
| `DOC-VAL-022` | ERROR | ADR filename inconsistent. | Filename does not start with ADR ID. | Rename under authorized scope. | `DOC-RULE-022` |
| `DOC-VAL-023` | ERROR | Placeholder in canonical metadata. | Template token remains in governed content. | Replace with a governed value. | `DOC-RULE-023` |
| `DOC-VAL-024` | ERROR | Unsupported schema version. | Document declares another contract. | Use compatible engine or migrate. | `DOC-RULE-024` |
| `DOC-VAL-025` | ERROR | Implementation reference incomplete. | Evidence coordinate lacks required fields. | Complete or remove the reference. | `DOC-RULE-025` |
| `DOC-VAL-026` | INFO | Canonical orphan detected. | Document has no semantic edge. | Add traceability before promotion. | `DOC-RULE-026` |

## Result Semantics

`ERROR` invalidates canonical validation. `WARNING` does not invalidate EXEC-05 and is used for template-profile defects. `INFO` is observational and includes legacy and allowed-cycle diagnostics.
