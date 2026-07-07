---
schema_version: "1.0.0"
document_id: "DOC-GDE-003"
aliases: []
document_type: "GUIDE"
title: "Documentation Evidence Snapshot Framework"
summary: "Defines immutable, redacted, deterministic evidence snapshots for local unversioned instructions."
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
relationships: [{type: "DOCUMENTS", target: "DOC-ADR-003"}, {type: "RELATES_TO", target: "DOC-GDE-002"}, {type: "DOCUMENTS", target: "DOC-SPEC-003"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-003", "DOC-ADR-008", "DOC-ADR-016"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "tools/documentation/evidence", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "tools/documentation/tests/evidence.test.js", ref: "main", kind: "TEST", environment: "TEST"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Evidence Snapshot Framework

## Architecture

Evidence Framework 1.0.0 captures `/opt/Axodus/.instructions` as redacted, immutable, versioned evidence. It extends the persistent Generator by importing its canonical serialization, SHA-256, UTF-8/LF normalization, and atomic writer. It does not create a parallel persistence implementation.

Evidence is isolated under `evidence/instructions/`. Snapshot payload files use the `.evidence` suffix and therefore remain outside the Markdown documentation corpus and Validation Framework discovery.

## Responsibilities

The framework:

- reads the configured instructions source without modifying it;
- computes raw source hashes in memory;
- redacts potentially sensitive values before persistence;
- writes immutable evidence payloads and versioned metadata;
- maintains a deterministic snapshot registry;
- validates snapshot integrity;
- compares snapshots without returning file contents.

It does not establish documentation authority, synchronize evidence back to its source, validate documentation semantics, publish evidence, or enable repository enforcement.

## Evidence Lifecycle

Evidence lifecycle states are:

1. `CAPTURED`: source bytes were read and hashed in memory.
2. `REDACTED`: sensitive patterns and unsupported binary or symbolic-link payloads were replaced.
3. `PERSISTED`: the staged snapshot directory was atomically renamed.
4. `REGISTERED`: metadata was recorded in the deterministic registry.
5. `ACTIVE`: the immutable snapshot remains available for audit and comparison.

Evidence does not enter documentation publication lifecycle states.

## Snapshot Lifecycle and Immutability

Snapshot IDs are UTC RFC3339 timestamps with filesystem-unsafe colons removed, for example `2026-07-01T000000Z`. An initial capture uses its creation timestamp. Repeated capture of an identical source hash reuses the existing snapshot and does not create or overwrite evidence.

If a snapshot ID already represents different evidence, creation fails. Existing snapshot directories are never updated.

## Storage

```text
evidence/
└── instructions/
    └── <snapshot-id>/
        ├── documentation.instructions.snapshot.json
        └── payload/
            └── <source-relative-path>.evidence
```

The repository root contains:

- `documentation.instructions.snapshot.json`: latest captured snapshot metadata.
- `documentation.instructions.registry.json`: deterministic registry of all snapshots.

The latest metadata file is a pointer copy; the immutable authoritative record remains inside its snapshot directory.

## Metadata

Snapshot metadata records identity, schema/evidence versions, source and snapshot paths, creation attribution, source and redacted-tree hashes, file and directory inventories, redaction statistics, snapshot size, and framework versions.

Metadata contains hashes, counts, categories, and paths only. It never contains captured secret values.

## Hashing

Each source file receives a SHA-256 over its raw bytes in memory. Each persisted payload receives a SHA-256 over redacted canonical bytes. Aggregate source and snapshot hashes are computed from deterministically sorted `path + file hash` records.

Generated metadata and registries use canonical JSON serialization with sorted keys, two-space indentation, UTF-8, LF, and terminal LF.

## Registry

Registry 1.0.0 lists snapshots in `snapshot_id` order with creation date, hashes, status, size, evidence version, inventory counts, and redaction count. The registry contains no payload content.

## Comparison

`compareSnapshots()` reports:

- added paths;
- removed paths;
- modified paths;
- whether source and redacted hashes changed;
- framework metadata changes.

Comparison never prints or returns captured file contents.

## Redaction

Automatic redaction covers labeled credentials, passwords, secrets, private keys, API keys, bearer tokens, authorization values, mnemonic or seed phrases, signing material, credentials embedded in URLs, common token signatures, JWTs, symbolic links, and unsupported binary content.

Persisted replacement text is:

```text
<REDACTED>
```

Redaction metadata reports only count, affected paths, and categories. It never records matched values. Pattern-based redaction cannot prove that an unlabeled, novel secret format is non-sensitive; source governance must therefore avoid storing credentials in `.instructions`.

## Security

- Source contents are never logged by the framework.
- Diagnostics contain stable codes, safe messages, and paths only.
- Symbolic links are not followed.
- Binary content is fully redacted.
- Snapshot payloads are evidence and must not be published.
- A source hash proves byte identity but does not grant authority or approval.

## Atomic Persistence

The complete snapshot is assembled in a sibling staging directory. Every staged file uses the Generator atomic writer: exclusive temporary file, `fsync()`, and atomic rename. The completed staging directory is then atomically renamed to its immutable snapshot ID.

Failure before the directory rename removes staging data and leaves existing evidence unchanged. Registry and latest-metadata writes are also atomic and can be deterministically reconstructed from snapshot metadata.

## Public API

`tools/documentation/evidence/index.js` exports:

- `createInstructionsSnapshot()`
- `loadInstructionsSnapshot()`
- `validateInstructionsSnapshot()`
- `listSnapshots()`
- `compareSnapshots()`

The same operations are re-exported through the public Generator API.

## Generator Integration

The Generator remains responsible for shared canonical serialization, hashing, and atomic persistence. Document artifacts and evidence artifacts are separate domains:

- Document artifacts describe the repository documentation corpus.
- Evidence artifacts preserve redacted observations of local unversioned controls.

Evidence snapshots are not included in manifest, graph, master index, documentation reports, or legacy migration.

## Validation Engine Integration

The Documentation Validation Engine is unchanged. Snapshot integrity validation belongs to the Evidence Framework and checks only metadata completeness, payload hashes, aggregate hashes, and redaction stability.

Evidence integrity does not imply documentation validity or authority.

## CLI Integration

```sh
pnpm docs:snapshot
pnpm docs:snapshot:list
pnpm docs:snapshot:compare -- --snapshot <snapshot-id> --reference <snapshot-id>
```

All commands support JSON presentation and optional `--output`. CLI commands consume only the public Snapshot API.

## Future Extensibility

Future executions may add CI drift checks, signed attestations, retention policy, external evidence storage, or additional evidence sources. Such changes must preserve immutability, redaction, non-publication, and separation from canonical documentation.
