---
schema_version: "1.0.0"
document_id: "DOC-REF-003"
aliases: []
document_type: "REFERENCE"
title: "Documentation Validation Rules"
summary: "Defines the immutable validation rule catalog for Documentation Validation Framework 1.0."
version: "1.1.0"
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
relationships: [{type: "DEPENDS_ON", target: "DOC-SPEC-001"}, {type: "RELATES_TO", target: "DOC-REF-004"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-005", "DOC-ADR-011", "DOC-ADR-016"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Validation Rules

## Contract

Rule IDs are immutable. A rule's semantics MUST NOT change after publication. Deprecated IDs remain reserved, and materially new behavior receives a new ID.

Only `ERROR` diagnostics on Schema 1.0.0 canonical documents make repository validation invalid during EXEC-05. Template diagnostics are warnings; legacy diagnostics are informational.

## Rule Catalog

| Rule ID | Name | Purpose | Severity | Validation logic | Affected fields | Example | Suggested resolution |
|---|---|---|---|---|---|---|---|
| `DOC-RULE-001` | Legacy classification | Identify non-Schema 1.0.0 documents without enforcement. | INFO | A non-template document not declaring Schema 1.0.0 is classified `LEGACY`. | `schema_version` | README without YAML front matter | Keep unchanged until baseline/migration scope exists. |
| `DOC-RULE-002` | Template profile | Confirm template field presence and ordering while allowing placeholders. | WARNING | Templates must contain every canonical key, Schema 1.0.0, canonical order, and an H1. | All metadata | Template missing `owner` | Repair the static template; do not migrate content. |
| `DOC-RULE-003` | Front matter required | Require a canonical YAML metadata envelope. | ERROR | A canonical document must begin with parseable YAML front matter. | Front matter | Schema marker without delimiters | Add canonical front matter delimiters and metadata. |
| `DOC-RULE-004` | Schema conformance | Enforce the machine-readable Schema 1.0.0 contract. | ERROR | Validate metadata with JSON Schema Draft 2020-12 and report every failure. | All metadata | Missing `authority_scope` | Supply a valid declared value. |
| `DOC-RULE-005` | Semantic Version | Enforce stable Semantic Versioning. | ERROR | `version` must be a valid stable `MAJOR.MINOR.PATCH`. | `version` | `v1.0` | Use a value such as `1.0.0`. |
| `DOC-RULE-006` | Date consistency | Enforce valid date encoding and chronology. | ERROR | Dates use `YYYY-MM-DD`; updated/reviewed/next dates cannot precede their governing dates. | Date fields | `last_updated` before `created_date` | Correct dates using evidence; do not invent history. |
| `DOC-RULE-007` | Identifier syntax | Enforce canonical identifier structure and type code. | ERROR | ID must match `<SCOPE>-<TYPE>-<NNN>`. | `document_id` | `DOC-DECISION-1` | Allocate a registered canonical ID. |
| `DOC-RULE-008` | Reserved identifier | Prevent use of permanently reserved sequence zero. | ERROR | Numeric sequence composed only of zeroes is forbidden. | `document_id` | `DOC-ADR-000` | Allocate a non-reserved sequence. |
| `DOC-RULE-009` | Metadata order | Preserve deterministic canonical key order. | ERROR | Top-level front matter keys must exactly follow Schema 1.0.0 order. | All metadata | `owner` before `author` | Reorder keys without changing values. |
| `DOC-RULE-010` | Title/H1 consistency | Keep metadata and visible title equivalent. | ERROR | H1 equals `title` or uses `<ID> — <title>` for identified records. | `title`, H1 | Metadata title differs from H1 | Align the two titles. |
| `DOC-RULE-011` | Lifecycle consistency | Enforce valid publication/document-state combinations. | ERROR | Apply ACTIVE/CURRENT, ARCHIVED/HISTORICAL, obsolete and draft/review rules. | `publication_status`, `document_state` | ACTIVE + EXPERIMENTAL | Select a valid lifecycle combination. |
| `DOC-RULE-012` | Review scheduling | Match scheduled review cycles and `next_review`. | ERROR | Time-based cycles require a date; event/none cycles require null. | `review_cycle`, `next_review` | QUARTERLY + null | Assign the evidence-based next review date. |
| `DOC-RULE-013` | Ownership | Require accountable ownership and approval where applicable. | ERROR | Author/owner are non-empty; relied-upon states require approver. | Ownership fields | APPROVED + null approver | Assign the authorized role or revert lifecycle. |
| `DOC-RULE-014` | Relationship structure | Enforce typed, unique relationship objects. | ERROR | Every edge has one allowed type and target; duplicate edges are rejected. | `relationships` | Two identical edges | Remove the duplicate or correct semantics. |
| `DOC-RULE-015` | Duplicate document ID | Ensure one canonical node per ID. | ERROR | Repository canonical IDs must be unique. | `document_id` | Two `DOC-POL-001` files | Allocate a new ID to the incorrect document. |
| `DOC-RULE-016` | Duplicate alias | Ensure one canonical target per alias. | ERROR | An alias may be declared by only one canonical document. | `aliases` | Shared historical ID | Resolve ownership and retain one mapping. |
| `DOC-RULE-017` | ID/alias collision | Prevent aliases from shadowing canonical IDs. | ERROR | Alias values must not equal any canonical ID. | `aliases`, `document_id` | Alias `DOC-ADR-001` | Use the canonical relationship instead. |
| `DOC-RULE-018` | Broken relationship | Require every semantic target to resolve uniquely. | ERROR | Relationship targets resolve through canonical ID or unique alias. | `relationships` | Target `DOC-ADR-999` absent | Add the governed target or remove/correct the edge. |
| `DOC-RULE-019` | Supersession consistency | Keep supersession representations equivalent. | ERROR | `supersedes` and `SUPERSEDES` edges must contain identical targets. | `supersedes`, `relationships` | Target appears in only one field | Add the matching declaration. |
| `DOC-RULE-020` | Forbidden cycle | Reject cycles in hierarchical relationship types. | ERROR | Directed graph excluding `RELATES_TO` must be acyclic. | `relationships` | A DEPENDS_ON B and B DEPENDS_ON A | Reframe or remove the incorrect dependency. |
| `DOC-RULE-021` | Allowed relates cycle | Report non-hierarchical cycles without failure. | INFO | Cycles containing only `RELATES_TO` are allowed and reported. | `relationships` | A relates B; B relates A | No change unless the relationship is semantically wrong. |
| `DOC-RULE-022` | Filename convention | Align ADR filename with immutable identity. | ERROR | ADR filenames begin with `<document_id>-`. | Filename, `document_id` | `decision.md` for DOC-ADR-001 | Rename only under authorized scope. |
| `DOC-RULE-023` | Canonical placeholder prohibition | Prevent template placeholders in governed documents. | ERROR | Canonical metadata cannot contain `<placeholder>` values. | All metadata | `owner: "<owner>"` | Replace with an accountable value. |
| `DOC-RULE-024` | Schema version | Require the supported metadata contract. | ERROR | Canonical profile accepts exact Schema 1.0.0. | `schema_version` | `1.1.0` with engine 1.0 | Use a compatible engine or migrate intentionally. |
| `DOC-RULE-025` | Implementation reference | Require complete evidence coordinates. | ERROR | Each reference declares repository, path, immutable ref, kind, and environment. | `implementation_refs` | Missing `ref` | Add an immutable reference or remove unsupported evidence. |
| `DOC-RULE-026` | Orphan document | Identify canonical nodes without semantic edges. | INFO | Canonical ID has no incoming or outgoing declared relationship. | `relationships` | Isolated reference record | Add a valid semantic relationship before promotion. |
| `DOC-RULE-027` | Known legacy | Confirm an unchanged legacy document is covered by baseline. | INFO | Current path and canonical SHA-256 match one baseline entry. | Path, hash | Baseline README unchanged | Retain until intentional migration. |
| `DOC-RULE-028` | Legacy changed | Detect modification to a baselined legacy document. | INFO | Baseline path exists but current canonical SHA-256 differs. | Path, hash | Edited legacy README | Migrate on change or obtain reviewed exception update. |
| `DOC-RULE-029` | Unbaselined legacy | Detect newly introduced legacy debt. | INFO | Current legacy path has no baseline entry. | Path | New Markdown without Schema 1.0.0 | Migrate before future enforcement. |
| `DOC-RULE-030` | Baseline document removed | Detect path absent from current legacy corpus. | INFO | Baseline path no longer resolves to a legacy document. | Path | Deleted or renamed legacy file | Review deletion/rename and update baseline deliberately. |
| `DOC-RULE-031` | Exception expired | Identify exception beyond its validity period. | INFO | Status is EXPIRED or ACTIVE expiry precedes validation reference time. | `status`, `expires_at` | Expiry before current review | Renew, revoke, reject, or migrate with approval. |
| `DOC-RULE-032` | Exception invalid | Detect malformed or inconsistent governance exceptions. | INFO | Schema, identity, dates, rule references, uniqueness, or baseline linkage fails. | Exception object | Unknown affected Rule ID | Correct through reviewed registry change. |
| `DOC-RULE-033` | Exception revoked | Identify explicitly withdrawn tolerance. | INFO | Exception status is REVOKED. | `status` | Revoked waiver | Migrate or create a newly approved exception. |
| `DOC-RULE-034` | Baseline invalid | Detect malformed baseline envelope or entry. | INFO | Required version, timestamp, path, hash, classification, or provenance is invalid. | Baseline object | Non-SHA-256 hash | Rebuild and review the baseline without editing source docs. |
| `DOC-RULE-035` | Duplicate baseline entry | Ensure one baseline record per path. | INFO | A normalized path occurs more than once. | `entries[].path` | Duplicate README entry | Retain one deterministic entry. |

## Security Boundary

Diagnostics report rule, path, field, and safe explanation only. They MUST NOT copy matched credentials, tokens, keys, private endpoints, or other potentially sensitive values.
