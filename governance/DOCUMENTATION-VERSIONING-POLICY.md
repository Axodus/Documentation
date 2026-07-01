---
schema_version: "1.0.0"
document_id: "DOC-POL-002"
aliases: []
document_type: "POLICY"
title: "Documentation Versioning Policy"
summary: "Defines Semantic Versioning for documents, schemas, manifests, and releases."
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
relationships: [{type: "REALIZES", target: "DOC-ADR-013"}, {type: "REALIZES", target: "DOC-ADR-007"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-007", "DOC-ADR-013", "DOC-ADR-014"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Versioning Policy

## Purpose

This policy defines Semantic Versioning for documents, metadata schemas, future manifests, and documentation releases.

## General Format

Versions MUST follow Semantic Versioning:

```text
MAJOR.MINOR.PATCH
```

- Values are non-negative decimal integers without leading zeroes.
- Versions are serialized as quoted strings in YAML and strings in JSON.
- A leading `v` is not part of the stored version.
- Pre-release and build metadata MAY be introduced only by a later policy revision; Schema 1.0.0 does not use them.

## Document Versioning

### Major

Increment `MAJOR` when a change:

- reverses or incompatibly changes normative meaning;
- removes obligations, fields, interfaces, or supported behavior;
- changes authority, scope, or ownership incompatibly;
- invalidates downstream reliance or requires consumer migration;
- materially changes a safety, governance, financial, or execution boundary.

Example: `1.4.2` → `2.0.0`.

### Minor

Increment `MINOR` when a change:

- adds compatible requirements or sections;
- expands explanation without invalidating existing compliant use;
- adds an optional relationship or supported case;
- introduces compatible guidance or examples with semantic value.

Example: `1.4.2` → `1.5.0`.

### Patch

Increment `PATCH` when a change:

- corrects spelling, formatting, links, or non-semantic wording;
- clarifies existing meaning without changing obligations;
- records a review or lifecycle metadata update that does not alter normative meaning.

Example: `1.4.2` → `1.4.3`.

Every merged source change to an approved or active mutable document MUST update its version. Draft changes MAY be accumulated before review, but the version presented for approval MUST represent the reviewed content.

## Immutable Documents

An approved ADR is immutable. A change to its decision, rationale, trade-offs, consequences, or metadata is represented by a new ADR that declares `supersedes`. The original ADR version remains fixed.

Closed historical records such as signed release evidence SHOULD also be treated as immutable. Corrections require an additive correction record or replacement, not silent rewriting.

## Schema Versioning

`schema_version` identifies the metadata contract.

| Change | Version impact | Compatibility |
|---|---|---|
| Remove or rename a field | Major | Breaking |
| Change a field's type or meaning | Major | Breaking |
| Make an optional value mandatory for existing documents | Major | Breaking |
| Add an optional field | Minor | Backward compatible |
| Add an allowed enum value that old consumers may ignore safely | Minor | Conditionally compatible |
| Clarify prose without changing accepted instances | Patch | Compatible |

Schema 1.0.0 is the first canonical contract. A document declares exactly one schema version. Migration to another major version is explicit and MUST NOT be inferred.

## Manifest Versioning

The future `manifest_version` describes the serialized manifest contract independently from `schema_version`.

- Major: incompatible object structure, key removal/rename, hash semantic change, or ordering semantic change.
- Minor: additive keys, additive statistics, or new optional projections.
- Patch: serialization clarification that preserves identical semantic interpretation.

A manifest may contain documents using supported schema versions. Manifest compatibility does not imply document-schema compatibility.

No manifest is created by this policy.

## Documentation Release Versioning

A documentation release version identifies a reviewed set of document versions.

- Major release: incompatible portfolio-wide documentary contract or publication structure.
- Minor release: compatible governed content additions.
- Patch release: corrections to a released documentation set.

A release record MUST identify the source commit, included document IDs and versions, approvals, known limitations, and publication boundary. A Git tag MAY mirror the release version after publication governance approves that mechanism.

## Version Compatibility

- Consumers supporting schema major `1` MUST reject unsupported higher major versions rather than guessing.
- A consumer MAY process a newer minor version only when unknown additive fields can be retained or safely ignored.
- Producers MUST emit an exact version, never a range.
- Downstream documents MUST reference canonical IDs and SHOULD record relied-upon versions where compatibility matters.
- Newer does not automatically mean authoritative; lifecycle, scope, and approval still apply.
- A document version MUST NOT be downgraded or reused for different content.

## Relationship Between Versions

| Version | Describes |
|---|---|
| `version` | One document's content and metadata revision |
| `schema_version` | Metadata contract used by that document |
| `manifest_version` | Future inventory serialization contract |
| Release version | Reviewed collection of document versions |
| Epic version | Planning and delivery baseline when explicitly defined |

These versions advance independently.

## Breaking-Change Review

A major change requires:

1. impact analysis;
2. affected owner review;
3. technical, business, security, financial, legal, or governance review as applicable;
4. migration or supersession plan;
5. explicit approval for the declared scope.

Versioning never authorizes implementation, publication, or production.

## Related Architectural Decisions

- [DOC-ADR-007 — Documentation Releases](../adr/DOC-ADR-007-DOCUMENTATION-RELEASES.md)
- [DOC-ADR-013 — Document Semantic Versioning](../adr/DOC-ADR-013-DOCUMENT-SEMANTIC-VERSIONING.md)
- [DOC-ADR-014 — Publication Pipeline](../adr/DOC-ADR-014-PUBLICATION-PIPELINE.md)

## Non-Implementation Boundary

This policy does not create tags, manifests, release automation, validation logic, CI/CD, or publication workflows.
