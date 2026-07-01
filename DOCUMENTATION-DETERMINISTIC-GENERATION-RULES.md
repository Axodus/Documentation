# Deterministic Documentation Generation Rules

Status: EXECUTION BASELINE
Version: 1.0.0
Generated At: 2026-07-01T00:00:00Z

## Source Scope

Inventory every repository Markdown source except generated outputs, dependency trees, VitePress build/cache output, and Git internals. Generated artifacts are listed separately to prevent recursive hashes.

## Ordering

- Normalize paths to repository-relative POSIX form.
- Sort documents by Unicode code-point order of `source_path`.
- Sort graph nodes by canonical ID and edges by source, type, target, then source path.
- Emit report groups in the documented fixed order.

## Encoding and Line Endings

Read and emit UTF-8. Normalize CRLF and CR to LF before SHA-256 calculation. End every generated text file with one LF.

## Stable Timestamp

Set `generated_at` to the greatest explicit `last_updated` date in source content, normalized to `00:00:00Z`. If no valid date exists, use `1970-01-01T00:00:00Z`.

## Hashing

Use lowercase SHA-256 over canonical UTF-8 bytes after LF normalization. Generated outputs are excluded from source-document hashes.

## Metadata and Nulls

Read declared YAML front matter. Preserve explicit legacy header metadata where directly present. Do not infer unavailable metadata: serialize unavailable scalars as JSON `null` and unavailable or undeclared lists as `[]`.

## Serialization

Serialize JSON with two-space indentation, lexicographically sorted object keys, unescaped Unicode, and a terminal LF. Markdown tables and lists use deterministic source-path ordering.

## Reproducibility

Identical source bytes and explicit metadata produce byte-identical generated artifacts. This execution adds no persistent generator or validation tooling.
