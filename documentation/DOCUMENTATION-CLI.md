---
schema_version: "1.0.0"
document_id: "DOC-GDE-001"
aliases: []
document_type: "GUIDE"
title: "Documentation CLI"
summary: "Defines the stable command-line interface for the Axodus Documentation Validation Framework."
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
relationships: [{type: "DOCUMENTS", target: "DOC-SPEC-001"}, {type: "DOCUMENTS", target: "DOC-POL-005"}, {type: "DOCUMENTS", target: "DOC-POL-006"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-014", "DOC-ADR-016"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "tools/documentation/cli", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "tools/documentation/tests/cli.test.js", ref: "main", kind: "TEST", environment: "TEST"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation CLI

## Purpose

Documentation CLI 1.0.0 exposes Validation Framework 1.1.0 and the Legacy Governance Framework through a stable command-line interface. It is an interface layer only: parsing, dispatch, presentation, file output, and process exit codes are its responsibilities. All validation decisions remain in the public Validation Engine API.

## Architecture

The CLI imports only these public operations from `tools/documentation/index.js`:

- `loadDocument()`
- `validateRepository()`
- `loadBaseline()`
- `loadExceptions()`

The remaining approved public operations—`validateDocument()`, `validateBaseline()`, and `validateExceptions()`—remain available to API consumers. Generation commands import only the public Generator API from `tools/documentation/generator/index.js`. The CLI does not import parsers, validators, rules, schemas, generator internals, or repository internals.

Command dispatch selects an engine-owned validation layer. Formatters receive the resulting diagnostics without changing their content. No command writes repository governance artifacts unless the caller explicitly requests a presentation copy through `--output`.

## Commands

| Command | Validation scope |
| --- | --- |
| `pnpm docs:validate` | Canonical schema, semantic, and repository rules |
| `pnpm docs:validate:schema` | Schema profile, front matter, conformance, and schema version |
| `pnpm docs:validate:relationships` | Relationship shape, identity collisions, references, cycles, and orphan reporting |
| `pnpm docs:baseline:check` | Baseline structure and legacy hash states |
| `pnpm docs:exceptions:check` | Exception registry structure and lifecycle |
| `pnpm docs:check` | Complete schema, repository, baseline, and exception pipeline |
| `pnpm docs:generate` | Generate and atomically persist all derived artifacts |
| `pnpm docs:generate:check` | Compare generated in-memory bytes with persisted artifacts without writing |

`docs:check` is the CLI parity command for `validateRepository()` with default options.

## Arguments

| Argument | Meaning |
| --- | --- |
| `--json` | Emit deterministic JSON instead of human-readable text. |
| `--pretty` | Indent JSON output; requires `--json`. |
| `--summary` | Suppress diagnostic details in human-readable output. |
| `--verbose` | Include INFO diagnostics in human-readable output. |
| `--quiet` | Suppress standard output; may be combined with `--output`. |
| `--fail-on-warning` | Return exit code 1 when the selected result contains warnings. |
| `--scope <scope>` | Show diagnostics for documents with the exact `authority_scope`. |
| `--path <path>` | Show diagnostics for an exact repository-relative path or its descendants. |
| `--document-id <id>` | Show diagnostics for the exact canonical document ID. |
| `--type <type>` | Show diagnostics for the exact canonical `document_type`. |
| `--baseline <path>` | Use an alternate baseline JSON file. |
| `--exceptions <path>` | Use an alternate exception registry JSON file. |
| `--output <path>` | Write the rendered result to a file. |
| `--reference-date <timestamp>` | Evaluate time-dependent exception state at an RFC3339 timestamp. |
| `--write` | Persist generated artifacts; valid only for the generator command. |
| `--check` | Check generated artifact drift without writing; valid only for the generator command. |

Filters limit presented diagnostics; they do not change Validation Engine decisions or repository content. Option names and controlled metadata values are case-sensitive.

Invalid combinations include `--pretty` without `--json`, `--quiet` with `--verbose` or `--summary`, and `--verbose` with `--summary`.

## Exit Codes

| Code | Meaning |
| ---: | --- |
| `0` | Validation succeeded with no errors; warnings are allowed. |
| `1` | At least one ERROR exists, or a warning exists with `--fail-on-warning`. |
| `2` | An internal execution error occurred. |
| `3` | The command or its arguments are invalid. |
| `4` | A configured baseline, exception registry, or configuration input is unavailable or invalid. |
| `5` | Reserved for future repository enforcement; unused in CLI 1.0.0. |

Exit code meanings are immutable within CLI major version 1.

## Examples

```sh
pnpm docs:check
pnpm docs:check -- --json --pretty
pnpm docs:validate:schema -- --summary
pnpm docs:validate:relationships -- --document-id DOC-SPEC-001
pnpm docs:baseline:check -- --baseline documentation.baseline.json
pnpm docs:exceptions:check -- --reference-date 2026-07-01T00:00:00Z
pnpm docs:check -- --json --output /tmp/documentation-check.json --quiet
pnpm docs:generate
pnpm docs:generate:check -- --json
```

## Output Formats

Human-readable output includes repository statistics, severity totals, selected diagnostic details, elapsed execution time, and exit status. INFO diagnostics appear only with `--verbose`.

JSON output is deterministic for identical repository contents, arguments, and reference date. Object keys and diagnostics have stable ordering. JSON intentionally omits wall-clock execution duration because elapsed time is nondeterministic.

## JSON Schema

CLI 1.0.0 does not publish a separate JSON Schema artifact. The JSON envelope contains:

```json
{
  "cli_version": "1.0.0",
  "validation_version": "1.1.0",
  "schema_version": "1.0.0",
  "command": "check",
  "status": "SUCCESS",
  "exit_code": 0,
  "statistics": {},
  "diagnostics": []
}
```

Diagnostics retain the Validation Engine fields `rule_id`, `error_code`, `severity`, `source_path`, `document_id`, `field`, and `message`.

## Troubleshooting

- Exit code 3: inspect the error message for an unknown command, unknown option, missing value, or invalid combination.
- Exit code 4: verify that `--baseline` and `--exceptions` resolve from the repository working directory and contain readable JSON.
- Unexpected exception expiry: provide an explicit `--reference-date` for reproducible time-dependent checks.
- Different diagnostic subsets: confirm that the API and CLI use the same validation layer and filter arguments. Use `docs:check -- --json` for default API parity.

## Versioning Policy

CLI and Validation Framework versions evolve independently. Breaking command, argument, output-envelope, or exit-code changes require a new CLI major version. Compatible commands or optional fields require a minor version. Corrections that preserve the interface require a patch version.

Validation rule semantics, diagnostic codes, and document contracts remain governed by the Validation Framework and Schema specifications.

## Future Extensions

Repository enforcement, CI integration, and publication workflows remain outside CLI 1.0.0. Future validation interfaces MUST continue to consume the public Validation Engine API. Future generation interfaces MUST consume the public Generator API. Neither interface may duplicate validation or generation logic.
