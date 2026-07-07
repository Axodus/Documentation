---
schema_version: "1.0.0"
document_id: "DOC-GDE-002"
aliases: []
document_type: "GUIDE"
title: "Persistent Documentation Generator"
summary: "Defines Generator 1.0.0, its public API, deterministic outputs, atomic persistence, and drift detection."
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
relationships: [{type: "DOCUMENTS", target: "DOC-ADR-016"}, {type: "RELATES_TO", target: "DOC-GDE-001"}, {type: "DOCUMENTS", target: "DOC-SPEC-002"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-004", "DOC-ADR-014", "DOC-ADR-016"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "tools/documentation/generator", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "tools/documentation/tests/generator.test.js", ref: "main", kind: "TEST", environment: "TEST"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Persistent Documentation Generator

## Architecture

Documentation Generator 1.0.0 is the canonical producer of derived repository artifacts. Its layers are:

1. Public Validation Framework discovery and validation.
2. Document and relationship canonicalization.
3. Manifest, graph, index, and report projection.
4. Canonical JSON or Markdown serialization.
5. Byte-level drift comparison or atomic persistence.

The generator imports only the public API from `tools/documentation/index.js`. It contains no validation rules and does not reinterpret Validation Engine diagnostics.

## Responsibilities

The generator MAY discover and load documents through the public Validation Framework API, canonicalize declared data, calculate deterministic projections, serialize outputs, compare persisted bytes, and atomically replace generated artifacts.

It MUST NOT migrate source documents, infer governance approval, enforce repository policy, publish content, or duplicate schema, semantic, lifecycle, relationship, baseline, or exception validation.

## Public API

`tools/documentation/generator/index.js` exports:

- `generateManifest(options)`
- `generateGraph(options)`
- `generateMasterIndex(options)`
- `generateReports(options)`
- `generateAll(options)`
- `checkGeneratedArtifacts(generation?, options?)`
- `writeGeneratedArtifacts(generation?, options?)`

Generator API versions evolve independently from Validation Framework and CLI versions.

## Generated Artifacts

Generator 1.0.0 owns:

- `documentation.manifest.json` — Manifest 1.1.0.
- `documentation.graph.json` — Graph 1.1.0.
- `DOCUMENTATION-MASTER-INDEX.md`.
- `DOCUMENTATION-METADATA-COVERAGE.md`.
- `DOCUMENTATION-RELATIONSHIP-REPORT.md`.
- `DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md`.
- `documentation.validation.json`.
- `documentation.baseline.report.json`.

Generated Markdown files carry a notice prohibiting manual edits. Baseline and exception registry inputs are not generated.

## Atomic Persistence

Write mode generates every artifact in memory before persistence. Each target is written to a same-directory exclusive temporary file, flushed with `fsync()`, and atomically renamed over the previous target. Temporary files are removed after either success or failure.

Artifact replacement is atomic per file. The set of eight files is not a cross-file transaction; an interruption between successful renames can leave complete files from two generations. Running write mode again deterministically converges the set.

## Determinism

The generator uses UTF-8, LF endings, POSIX repository-relative paths, stable timestamps derived from declared source metadata, sorted object keys, stable arrays, and terminal LF. SHA-256 is calculated over canonical bytes.

Generated artifacts are excluded from source discovery and recursive hashing. Two runs over identical source and governance inputs produce byte-identical output.

## Drift Detection

Check mode generates all outputs in memory and performs byte-for-byte comparisons without writing. Each artifact is classified:

- `CURRENT`: persisted and expected bytes match.
- `MODIFIED`: the artifact exists but differs.
- `MISSING`: no persisted artifact exists.

EXEC-08 reports drift informationally and returns exit code 0 because repository enforcement remains out of scope.

## Serialization Rules

JSON object keys are lexicographically ordered, arrays retain their explicitly defined deterministic ordering, indentation is two spaces, and each file ends with LF. Markdown sections and rows use fixed grouping and deterministic document order.

## Failure Recovery

Failed writes preserve the previous target and remove the temporary file. After process interruption, rerun `pnpm docs:generate`; deterministic generation replaces any stale complete artifacts. Drift can be inspected without mutation through `pnpm docs:generate:check`.

## Relationship with Validation Engine

The generator passes one discovered document set to `validateRepository()`. Validation Framework 1.1.0 remains the sole authority for diagnostics, baseline comparison, exception lifecycle, and validity.

Graph reachability, counts, inverse supersession edges, and cycle projections are descriptive graph products. They do not replace relationship validation.

## Relationship with CLI

The CLI remains an interface layer:

```sh
pnpm docs:generate
pnpm docs:generate:check
```

The first command invokes `generateAll()` followed by `writeGeneratedArtifacts()`. The second invokes `generateAll()` followed by `checkGeneratedArtifacts()`. No generator behavior is implemented in the CLI.

## Versioning

Generator 1.0.0, CLI 1.0.0, and Validation Framework 1.1.0 are independent contracts. Breaking Generator API or serialization changes require a Generator major version. Additive outputs require a minor version. Compatible corrections require a patch version.

Manifest and graph formats each use their own version and are currently 1.1.0.

## Future Extensions

GitHub Actions, repository enforcement, publication, snapshotting, and legacy migration remain separate executions. Future automation SHOULD call check mode and MUST preserve the separation between generation and validation.
