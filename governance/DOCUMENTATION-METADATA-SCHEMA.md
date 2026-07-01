---
schema_version: "1.0.0"
document_id: "DOC-SPEC-001"
aliases: []
document_type: "SPECIFICATION"
title: "Documentation Metadata Schema"
summary: "Defines Schema 1.0.0 and the canonical metadata contract for governed documentation."
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
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "SEMIANNUAL"
next_review: "2027-01-01"
supersedes: []
relationships: [{type: "REALIZES", target: "DOC-ADR-005"}, {type: "REALIZES", target: "DOC-ADR-011"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-002", "DOC-ADR-005", "DOC-ADR-010", "DOC-ADR-011", "DOC-ADR-013"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Metadata Schema

## Purpose

This specification defines the canonical metadata contract for governed Axodus documentation. It standardizes document identity, classification, authority, ownership, lifecycle, review, traceability, and production-boundary declarations.

## Scope

Schema 1.0.0 applies prospectively to new governed documents and to existing documents when they are intentionally migrated. It does not migrate legacy content, implement validation, or create a machine-readable JSON Schema.

The terms `MUST`, `MUST NOT`, `SHOULD`, and `MAY` are normative.

## Canonical Front Matter

Every conforming document MUST begin with YAML front matter containing all keys shown below. Keys with no current value MUST remain present with `null`, `[]`, or another allowed empty value.

```yaml
---
schema_version: "1.0.0"
document_id: "DOC-SPEC-001"
aliases: []
document_type: "SPECIFICATION"
title: "Documentation Metadata Schema"
summary: "Defines the canonical metadata contract for governed Axodus documents."
version: "1.0.0"
publication_status: "ACTIVE"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: []
business_reviewers: []
security_reviewers: []
approver: "Documentation Coordinator"
created_date: "2026-07-01"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "SEMIANNUAL"
next_review: "2027-01-01"
supersedes: []
relationships:
  - type: "REALIZES"
    target: "DOC-ADR-005"
related_epics:
  - "DOCUMENTATION-EPIC-01"
related_requirements:
  - "AXODUS-DOCUMENTATION-REQ-01"
related_adrs:
  - "DOC-ADR-005"
related_cores:
  - "DOCUMENTATION"
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---
```

## General Encoding Rules

- Front matter MUST be valid YAML encoded as UTF-8.
- Field names are lowercase `snake_case` and are case-sensitive.
- Controlled values and registered identifiers are uppercase unless this specification states otherwise.
- Dates MUST use quoted ISO 8601 calendar dates in `YYYY-MM-DD` form.
- Semantic versions MUST be quoted strings.
- Arrays MUST be present even when empty.
- Identifiers within an array MUST be unique.
- Placeholder values are permitted only in templates. Authored documents MUST replace every placeholder.
- Unknown top-level fields are not part of Schema 1.0.0. Future extensions require a schema revision.
- Metadata MUST NOT contain credentials, private keys, tokens, secret values, or sensitive operational endpoints.

## Field Specification

### Identity and Classification

| Field | Purpose | Type | Presence | Validation and allowed values | Example | Notes |
|---|---|---|---|---|---|---|
| `schema_version` | Identifies the metadata contract used by the document. | String | Required | Exact SemVer. For this contract the only allowed value is `"1.0.0"`. | `"1.0.0"` | Schema compatibility is defined by the versioning policy. |
| `document_id` | Provides the immutable canonical identity. | String | Required | MUST match `<SCOPE>-<TYPE>-<NNN>` using registered scope and type codes. MUST be unique. | `"DEX-REQ-010"` | It MUST NOT change after assignment and MUST NOT be reused. |
| `aliases` | Preserves historical or external identifiers. | Array of strings | Required; may be empty | Values MUST be unique, non-empty, and MUST NOT collide with another canonical ID or alias. | `["AXODUS-DOCUMENTATION-REQ-01"]` | Aliases resolve to the canonical `document_id`; they never become reusable. |
| `document_type` | Classifies the document in the official taxonomy. | String enum | Required | `ARCHITECTURE`, `REQUIREMENT`, `ADR`, `SPECIFICATION`, `API`, `GUIDE`, `RUNBOOK`, `PLAYBOOK`, `POLICY`, `STANDARD`, `PROCEDURE`, `REFERENCE`, `REPORT`, `RFC`, `PROPOSAL`, `MEETING`, `ROADMAP`, `RELEASE`, or `RESEARCH`. | `"ADR"` | Type determines expected content and type-specific review. |
| `title` | Supplies the human-readable canonical title. | String | Required | 3–160 visible characters; no Markdown heading marker; MUST match the document's H1 in meaning. | `"Official Documentation Source"` | Minor punctuation differences from the H1 are acceptable. |
| `summary` | Provides a concise discovery and index description. | String | Required | 20–300 visible characters; MUST state purpose without unsupported claims. | `"Defines authority for Axodus documentation."` | It is not an approval or readiness statement. |
| `version` | Identifies the semantic version of the document content. | String | Required | Valid SemVer without a leading `v`. | `"1.0.0"` | Version impact rules are defined in the versioning policy. |

### Lifecycle and Authority

| Field | Purpose | Type | Presence | Validation and allowed values | Example | Notes |
|---|---|---|---|---|---|---|
| `publication_status` | Declares the document's publication lifecycle position. | String enum | Required | `DRAFT`, `UNDER_REVIEW`, `APPROVED`, `ACTIVE`, `SUPERSEDED`, `DEPRECATED`, `ARCHIVED`, or `RETRACTED`. | `"UNDER_REVIEW"` | Publication status does not grant runtime or production authority. |
| `document_state` | Declares whether the content is current, obsolete, historical, or experimental. | String enum | Required | `CURRENT`, `OBSOLETE`, `HISTORICAL`, or `EXPERIMENTAL`. | `"CURRENT"` | Allowed combinations are defined in the lifecycle specification. |
| `maturity_level` | Describes documentary maturity independently of publication. | String enum | Required | `UNASSESSED`, `D1`, `D2`, `D3`, `D3+`, or `D4`. | `"D2"` | Maturity MUST NOT be interpreted as production readiness. |
| `authority_scope` | Identifies the logical subject boundary governed by the document. | String | Required | Uppercase registered scope path matching `^[A-Z][A-Z0-9_-]*(\.[A-Z][A-Z0-9_-]*)*$`. | `"DEX.ROUTER"` | Scope is logical and is not inferred from the file path. |
| `authority_level` | Describes the breadth of the declared authority. | String enum | Required | `PORTFOLIO`, `CORE`, `PROJECT`, `MODULE`, or `COMPONENT`. | `"MODULE"` | `EXPERIMENTAL` is a document state, not an authority level. |

### Ownership and Approval

Role values are stable team, role, or accountable-party names. Personal names MAY be used when governance requires them, but generic placeholders are forbidden outside templates.

| Field | Purpose | Type | Presence | Validation and allowed values | Example | Notes |
|---|---|---|---|---|---|---|
| `author` | Identifies the original drafting party. | String | Required | Non-empty role, team, or accountable-party name. | `"Documentation Working Group"` | Authorship does not grant approval authority. |
| `owner` | Identifies the party accountable for correctness and lifecycle decisions. | String | Required | Non-empty registered role, team, or accountable-party name. | `"Axodus Documentation Core"` | Exactly one accountable owner is declared. |
| `maintainer` | Identifies the party responsible for ongoing upkeep. | String or null | Required key | Non-empty role/team when maintained; `null` only for immutable or closed historical records. | `"Documentation Maintainer"` | Maintenance does not permit semantic approval. |
| `technical_reviewers` | Records required technical reviewers. | Array of strings | Required; may be empty conditionally | Unique role/team names. MUST be non-empty for technical specifications, APIs, architecture, and technical runbooks. | `["Core Architecture Reviewer"]` | Completed review evidence is separate from naming the reviewer. |
| `business_reviewers` | Records required business or domain reviewers. | Array of strings | Required; may be empty conditionally | Unique role/team names. MUST be populated when business behavior, public commitments, or domain policy is described. | `["Marketplace Owner"]` | A nucleus owner may fulfill this role. |
| `security_reviewers` | Records required security reviewers. | Array of strings | Required; may be empty conditionally | Unique role/team names. MUST be populated for credentials, wallets, contracts, APIs, security, production, or execution-sensitive content. | `["Security Reviewer"]` | Review does not enable the described capability. |
| `approver` | Identifies the authority that may approve the document for its scope. | String or null | Required key | MUST be `null` for an unassigned draft; MUST be non-null for `APPROVED`, `ACTIVE`, `SUPERSEDED`, `DEPRECATED`, `ARCHIVED`, or `RETRACTED`. | `"Documentation Coordinator"` | The approver MUST be authorized for the declared scope. |

### Dates and Review

| Field | Purpose | Type | Presence | Validation and allowed values | Example | Notes |
|---|---|---|---|---|---|---|
| `created_date` | Records when the canonical document was created. | Date string | Required | Quoted `YYYY-MM-DD`; MUST NOT be later than `last_updated`. | `"2026-07-01"` | Migration date MUST NOT be presented as original creation date when known otherwise. |
| `last_updated` | Records the latest intentional source change. | Date string | Required | Quoted `YYYY-MM-DD`; MUST be on or after `created_date`. | `"2026-07-01"` | Generated build timestamps do not update this field. |
| `last_reviewed` | Records the latest completed governed review. | Date string or null | Required key | `null` until reviewed; otherwise quoted `YYYY-MM-DD`, not later than `last_updated` unless the review made no source change. | `"2026-07-01"` | Review evidence SHOULD identify the relevant change or record. |
| `review_cycle` | Defines the maximum interval between governed reviews. | String enum | Required | `QUARTERLY`, `SEMIANNUAL`, `ANNUAL`, `EVENT_DRIVEN`, or `NONE`. | `"QUARTERLY"` | Defaults by document type are defined in the lifecycle specification. |
| `next_review` | Declares the next scheduled review date. | Date string or null | Required key | Required for quarterly, semiannual, and annual cycles; MUST be `null` for `EVENT_DRIVEN` and `NONE`. | `"2026-10-01"` | An overdue active document becomes review-blocked, not automatically obsolete. |

### Supersession and Relationships

| Field | Purpose | Type | Presence | Validation and allowed values | Example | Notes |
|---|---|---|---|---|---|---|
| `supersedes` | Declares canonical documents replaced by this document. | Array of document IDs | Required; may be empty | Unique resolvable IDs; MUST NOT contain self-reference or aliases when the canonical ID is known. | `["DOC-POL-001"]` | `superseded_by` is derived and MUST NOT be authored. |
| `relationships` | Declares typed semantic edges to other governed documents. | Array of objects | Required; may be empty only where traceability rules allow | Each object contains exactly `type` and `target`. Allowed authored types: `ADDRESSES`, `REALIZES`, `DEPENDS_ON`, `VALIDATES`, `OPERATES`, `DELIVERS`, `SUPERSEDES`, `RELATES_TO`, `GOVERNS`, `DOCUMENTS`, `DERIVED_FROM`. | `[{type: "ADDRESSES", target: "DOC-REQ-001"}]` | Constraints and inverse relationships are defined in the traceability model. |
| `related_epics` | Links relevant epic identifiers. | Array of strings | Required; may be empty | Unique stable epic identifiers. | `["DOCUMENTATION-EPIC-01"]` | This is a convenience projection; semantic edges remain in `relationships`. |
| `related_requirements` | Links relevant requirement identifiers. | Array of strings | Required; may be empty | Unique canonical IDs or preserved external requirement aliases. | `["AXODUS-DOCUMENTATION-REQ-01"]` | Prefer canonical IDs after formal registration. |
| `related_adrs` | Links relevant ADR identifiers. | Array of strings | Required; may be empty | Unique canonical ADR IDs. | `["DOC-ADR-017"]` | A related ADR is not automatically approved or controlling. |
| `related_cores` | Identifies affected Axodus cores or nuclei. | Array of strings | Required; may be empty | Unique registered uppercase core identifiers. | `["DOCUMENTATION", "CORE"]` | This field does not transfer ownership between cores. |

### Implementation and Gate Boundaries

| Field | Purpose | Type | Presence | Validation and allowed values | Example | Notes |
|---|---|---|---|---|---|---|
| `implementation_refs` | Links immutable implementation evidence without embedding implementation authority in documentation. | Array of objects | Required; may be empty | Each object contains `repository`, `path`, `ref`, `kind`, and `environment`. `kind`: `SOURCE`, `CONFIG`, `CONTRACT`, `TEST`, or `DEPLOYMENT_EVIDENCE`. `environment`: `LOCAL`, `TEST`, `STAGING`, `PRODUCTION`, or `NOT_APPLICABLE`. `ref` SHOULD be an immutable commit or tag. | `[{repository: "Axodus/Core", path: "src/contracts", ref: "abc123", kind: "CONTRACT", environment: "LOCAL"}]` | A reference is evidence only and MUST NOT enable execution. Sensitive paths or values are forbidden. |
| `production_gate_impact` | States how the document affects production and execution boundaries. | String enum | Required | `NONE`, `PRESERVES_CLOSED`, or `REQUIRES_SEPARATE_APPROVAL`. | `"PRESERVES_CLOSED"` | No value in Schema 1.0.0 authorizes opening a gate. |

## Conditional Requirements

- `APPROVED` and `ACTIVE` documents MUST have an `approver` and `last_reviewed`.
- `ACTIVE` documents MUST have `document_state: CURRENT`.
- `ARCHIVED` documents MUST have `document_state: HISTORICAL` and `review_cycle: NONE`.
- `SUPERSEDED` and `DEPRECATED` documents MUST have effective state `OBSOLETE`.
- `ADR` documents MUST use `review_cycle: EVENT_DRIVEN`.
- `REPORT`, `RELEASE`, and `MEETING` records that are closed historical evidence SHOULD use `review_cycle: NONE`.
- Documents with `production_gate_impact: REQUIRES_SEPARATE_APPROVAL` MUST NOT claim approval or execution from documentation status alone.
- High-risk content MUST identify the applicable technical, business, or security reviewer roles.

## Type-Specific Content Requirements

Metadata conformance does not replace required document content. Each document MUST also use the approved template or contain equivalent required sections for its `document_type`.

## Schema Evolution

- Schema versions use Semantic Versioning.
- A major change may remove fields, change meaning, tighten compatibility incompatibly, or alter serialized structures.
- A minor change may add optional fields or backward-compatible allowed values.
- A patch change may clarify wording without changing accepted documents.
- A document MUST declare exactly one schema version.
- Migrating a document to a new schema is an intentional source change and MUST update `last_updated`.

## Related Architectural Decisions

- [DOC-ADR-002 — Separate Maturity and Publication State](../adr/DOC-ADR-002-MATURITY-AND-PUBLICATION-STATE.md)
- [DOC-ADR-005 — Metadata Schema Architecture](../adr/DOC-ADR-005-METADATA-SCHEMA-ARCHITECTURE.md)
- [DOC-ADR-010 — Document Naming Convention](../adr/DOC-ADR-010-DOCUMENT-NAMING-CONVENTION.md)
- [DOC-ADR-011 — Required Metadata](../adr/DOC-ADR-011-REQUIRED-METADATA.md)
- [DOC-ADR-013 — Document Semantic Versioning](../adr/DOC-ADR-013-DOCUMENT-SEMANTIC-VERSIONING.md)

## Non-Implementation Boundary

This Markdown specification is the normative human-readable contract for Schema 1.0.0. It does not create `documentation.schema.json`, validation logic, a manifest, an index generator, or a migration process.
