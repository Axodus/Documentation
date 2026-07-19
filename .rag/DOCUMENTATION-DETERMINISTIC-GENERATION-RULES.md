# Deterministic Documentation Generation Rules

> GENERATED FILE — DO NOT EDIT MANUALLY.

Version: 1.0.0
Generated At: 2026-07-19T00:00:00Z

## Source Scope

Discover repository Markdown through the public Validation Framework API. Exclude generated outputs, dependency trees, VitePress build/cache output, Git internals, and private disclosure/request surfaces from public generated artifacts. Generated artifacts are listed separately and never recursively hashed.

## Public Artifact Exclusions

- `institutional-disclosure/**`
- `requests/**`

Private excluded paths may still be validated by the Validation Framework outside generator public-artifact mode.

## Canonicalization

- Normalize repository-relative paths to POSIX separators.
- Preserve declared metadata; unavailable scalar values become `null` and unavailable lists become `[]`.
- Derive `SUPERSEDES` and inverse `SUPERSEDED_BY` edges only from declared `supersedes` metadata.
- Sort documents by `source_path` and relationships by source, type, target, then source path.

## Encoding and Line Endings

Read and emit UTF-8. Normalize CRLF and CR to LF. End every generated artifact with exactly one LF.

## Stable Timestamp

Set generation timestamps to the greatest declared `last_updated` date, normalized to `00:00:00Z`; use `1970-01-01T00:00:00Z` when no valid date exists.

## Hashing

Use lowercase SHA-256 over normalized UTF-8 source bytes. Generated artifacts are excluded from source hashes and from recursive generation inputs.

## JSON Serialization

Sort object keys lexicographically, preserve explicitly ordered arrays, indent by two spaces, emit unescaped Unicode, and terminate with LF.

## Atomic Persistence

Generate in memory, write a same-directory temporary file, fsync the file, atomically rename it over the target, and remove temporary files after success or failure.

## Drift Detection

Check mode compares canonical in-memory bytes with persisted bytes. It performs no writes and reports `MISSING`, `MODIFIED`, or `CURRENT` status per artifact.

## Reproducibility

Identical source bytes, governed inputs, and explicit metadata produce byte-identical generated artifacts.
