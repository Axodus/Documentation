---
schema_version: "1.0.0"
document_id: "DOC-RPT-046"
aliases: []
document_type: "REPORT"
title: "Documentation Generator Drift Investigation"
summary: "Investigates the seven public generated-artifact drift items, their source input, determinism, semantic impact, and public/private boundary posture."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.GENERATOR.AUDIT"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-13"
last_updated: "2026-07-13"
last_reviewed: "2026-07-13"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{"type":"DEPENDS_ON","target":"DOC-RPT-045"},{"type":"RELATES_TO","target":"DOC-GDE-002"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["DOCUMENTATION-GENERATOR-DRIFT-REQ-01"]
related_adrs: ["DOC-ADR-009","DOC-ADR-014"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{"repository":"Axodus/Documentation","path":"tools/documentation/generator/index.js","ref":"main","kind":"SOURCE","environment":"LOCAL"},{"repository":"Axodus/Documentation","path":"tools/documentation/generator/shared/constants.js","ref":"main","kind":"SOURCE","environment":"LOCAL"},{"repository":"Axodus/Documentation","path":"documentation.manifest.json","ref":"main","kind":"CONFIG","environment":"LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Generator Drift Investigation

## Purpose

This report identifies and classifies the seven public generated artifacts
that reported drift after commit `f05c77f`. It records source causality,
determinism, semantic impact, boundary impact, and safe disposition without
regenerating or modifying any generated output.

## Baseline

| Item | Evidence |
| --- | --- |
| Initial drift baseline | `f05c77f5c14b36484069de04417924492da56c68` |
| Parent revision | `b501a0f3015af22d24146862708a2ed5e0ce0b21` |
| Final validation HEAD | `9b0a8362d2219eabc2b287f9e8295361729d9e4a` |
| HEAD change relevant to public generation | Added root `AGENTS.md` |
| HEAD private changes | Five Trading artifacts and private index update; excluded from public generation |
| Last clean generated baseline | 788 sources, 174 canonical, 600 legacy, 14 templates |
| Initial drift candidate | 789 sources, 174 canonical, 601 legacy, 14 templates |
| Initial drift count | 7 of 8 generated artifacts |
| Unchanged generated artifact | `documentation/DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md` |

The worktree initially contained uncommitted private Trading boundary-audit
files from a separate request. They were treated as protected preexisting
changes and were committed externally as `9b0a836` during this
investigation. They did not contribute to public generation because
`institutional-disclosure/` is excluded.

## Commands Executed

The investigation used non-writing commands and in-memory generator calls:

- `node tools/documentation/cli/index.js generate --check --json --pretty`
- two independent `generateAll` calls against the same revision and
  configuration;
- byte and SHA-256 comparison of both candidate sets;
- manifest inventory comparison between tracked and candidate content;
- simulated parent generation by removing only `AGENTS.md` from the
  discovered document set;
- `git show`, `git log`, `git diff`, and `git ls-tree` history
  inspection;
- targeted boundary scans for `institutional-disclosure/`, `requests/`,
  private paths, and private IDs;
- validation, check, tests, diff check, status, and VitePress build after the
  investigation documents were created.

No generator write mode or public artifact regeneration command was run.

## Affected Artifact Inventory

All seven artifacts receive the primary classification
`EXPECTED_SOURCE_CHANGE`. Byte and line deltas compare the tracked output
with the initial in-memory candidate generated before this report was added.

| Path | Artifact Type | Builder | Tracked SHA-256 | Initial Candidate SHA-256 | Size Delta | Primary Classification | Secondary Risk Flags | Semantic Change | Last Modifying Commit | Deterministic | Private Contribution | Disposition |
| --- | --- | --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| `documentation.baseline.report.json` | JSON baseline report | `buildBaselineReport` | `59d03b9600038f1073c4b93f1bf8c0d66bd711b7ee2fcdae0b059b84d62895ef` | `9f89da55b1d0065d73761c2d141a4ef08a02f0043257efe63e7222b8fcf87119` | 0 bytes / 0 lines | EXPECTED_SOURCE_CHANGE | METADATA_CHANGE | YES — inventory counts only | `5023574` | YES | NO | Regenerate with the complete set |
| `documentation.graph.json` | JSON relationship graph | `buildGraph` | `ff4ee80dd0defb76e9878d0a8b55f62237efac2bb221dcb29757ea01ff41aca5` | `bdf49699fc46ec168df55488733e66c7b1a31bb0b38e849eccd839b6bd4d46bf` | +307 bytes / +12 lines | EXPECTED_SOURCE_CHANGE | PUBLIC_CONTENT_CHANGE, RELATIONSHIP_GRAPH_CHANGE | YES — one inventory node, no edge | `3a00b73` | YES | NO | Regenerate with the complete set |
| `documentation.manifest.json` | JSON source manifest | `buildManifest` | `61bcaefc81912c2b721719e6b28c8d13ca7e59eb73d7ca2cee3054401c4e6fba` | `4fb61e4d223559db331472c6e523e12ac0c6da890061c5d6e14bd8187dc2eb1a` | +591 bytes / +20 lines | EXPECTED_SOURCE_CHANGE | PUBLIC_CONTENT_CHANGE, METADATA_CHANGE | YES — one legacy inventory record | `3a00b73` | YES | NO | Regenerate with the complete set |
| `documentation.validation.json` | JSON validation report | validation report builder | `9d4a0de90fe0c28fd11fc491ab92377e176cb915bf001d8c3788d6d236fab689` | `e3069698a282b3bb17977f10d69b1c8c0f425a56ab8f04fb95e101bfeb03a3d9` | +541 bytes / +18 lines | EXPECTED_SOURCE_CHANGE | METADATA_CHANGE | YES — validation statistics only | `3a00b73` | YES | NO | Regenerate with the complete set |
| `documentation/DOCUMENTATION-MASTER-INDEX.md` | Markdown public inventory index | `buildMasterIndex` | `54ea6f81a3f9f48ed0f684bc3fbe70635fa872adf56f747ccf5d9fd56fc00448` | `7af2a183c181833ee99def9a8680227409b96ff0c9ad65f2ddbc2ce5b06fc6a5` | +90 bytes / +1 line | EXPECTED_SOURCE_CHANGE | PUBLIC_CONTENT_CHANGE, NAVIGATION_CHANGE, METADATA_CHANGE | YES — public inventory link and counts | `3a00b73` | YES | NO | Regenerate after public index review |
| `documentation/DOCUMENTATION-METADATA-COVERAGE.md` | Markdown metadata report | `buildMetadataCoverage` | `df5e5cfc01fd3142e709e83f68b1520d8f65e722615e5c52d773c1956ed3588a` | `8793c56c8f1b17eb961271534287d352e0c7ef1481ba91d153b22fb7d9e48dd4` | +24 bytes / +2 lines | EXPECTED_SOURCE_CHANGE | PUBLIC_CONTENT_CHANGE, METADATA_CHANGE | YES — coverage and missing-metadata counts | `3a00b73` | YES | NO | Regenerate with the complete set |
| `documentation/DOCUMENTATION-RELATIONSHIP-REPORT.md` | Markdown relationship report | `buildRelationshipReport` | `4ad749b51d184f360a27d494b9e80ecea249257de12afe8288ef289c25a514b3` | `61769e89d8266db21c887976b8e50eb0126e690aa62d16414d58ddf3686e56db` | +12 bytes / +1 line | EXPECTED_SOURCE_CHANGE | RELATIONSHIP_GRAPH_CHANGE, METADATA_CHANGE | YES — node and orphan counts | `3a00b73` | YES | NO | Regenerate with the complete set |

## Source-to-Output Trace

| Output | Complete Source Inputs | Causal Input in Initial Drift | Derived Change |
| --- | --- | --- | --- |
| Manifest | Public discovered Markdown, exclusion rules, canonical serialization | New `AGENTS.md` legacy record | One document and legacy count added |
| Graph | Manifest documents and declared relationships | New manifest record for `AGENTS.md` | One node and one orphan added; no edge added |
| Master Index | Manifest inventory and statistics | New manifest record | `AGENTS.md` legacy row plus count changes |
| Validation Report | Public documents, baseline, exceptions, disposition registry, validation rules | New unbaselined legacy `AGENTS.md` | Legacy, info, unbaselined, and total counts changed |
| Baseline Report | Manifest, baseline, exceptions, validation result | New unbaselined legacy `AGENTS.md` | Total, legacy, and new-legacy counts changed |
| Metadata Coverage | Public documents, manifest, validation result, canonical field list | Metadata-free `AGENTS.md` | Coverage 23.86% to 23.83%; missing count plus one |
| Relationship Report | Graph | New unconnected `AGENTS.md` node | Nodes and orphans plus one |

The generator responsible for all outputs is
`tools/documentation/generator/index.js`, with builders under
`tools/documentation/generator/outputs/`. Public generation filters
`institutional-disclosure/` and `requests/` before manifest creation.

## Diff Classification

Primary classification for all seven artifacts:
`EXPECTED_SOURCE_CHANGE`.

The tracked outputs are stale relative to an intentional source addition, but
`STALE_GENERATED_OUTPUT` is not used as a second primary classification.
There is no evidence of formatting-only change, ordering-only change,
generator-logic change, boundary-exclusion change, nondeterminism, or unknown
causality.

## Determinism Assessment

Two complete in-memory generations used:

- the same HEAD and worktree;
- the same Node environment;
- the same generator configuration;
- no writes to generated artifacts.

Both candidate sets reported:

- generated timestamp: `2026-07-07T00:00:00Z` before these reports;
- public sources: 789;
- canonical: 174;
- legacy: 601;
- templates: 14;
- declared relationships: 347;
- identical SHA-256 for every artifact.

Result: `DETERMINISTIC`.

No artifact is classified `NON_DETERMINISTIC_OUTPUT`.

## Semantic Impact Assessment

Regeneration would change public inventory meaning in a narrow, explainable
way:

- identify `AGENTS.md` as a legacy repository document titled
  `Repository Guidelines`;
- add it to the public generated Master Index;
- increase total and legacy counts by one;
- increase graph nodes and orphans by one without changing relationships;
- reduce metadata coverage from 23.86% to 23.83%;
- increase unbaselined legacy from 27 to 28;
- preserve 174 canonical documents, 347 relationships, zero errors, and zero
  warnings in the initial candidate.

This is not formatting-only. It is an inventory and metadata update with no
change to governed product meaning, API behavior, schemas, production state,
or financial behavior.

## Boundary Impact Assessment

Boundary result: `PASS`.

- `institutional-disclosure/` remains excluded by
  `PUBLIC_GENERATION_EXCLUDED_PATH_PREFIXES`.
- `requests/` remains excluded by the same rule.
- Tests assert that neither prefix appears in manifest documents, graph nodes,
  or the Master Index.
- Private Trading filenames and private IDs were absent from public candidate
  artifacts.
- No private Track B/C mechanics appeared in candidate outputs.
- `AGENTS.md` contains repository guidelines, not private disclosure
  mechanics.

No `BOUNDARY_BLOCKER` exists.

## Root-Cause Analysis

The drift did not predate `f05c77f`.

Evidence:

1. Commit `f05c77f` added `AGENTS.md` and private Trading files.
2. The private files are excluded from public generation.
3. Manifest comparison found exactly one added public record:
   `AGENTS.md`; no record was removed or changed.
4. A simulated parent generation using the current generator and the
   discovered set without `AGENTS.md` produced 788 public sources.
5. Every tracked generated artifact matched that simulated parent candidate
   byte for byte.
6. The parent and current tracked manifest, graph, and validation hashes are
   identical.

Root cause:
`f05c77f` introduced a new public generator input without regenerating the
derived artifacts.

This is not a generator defect and is unrelated to the private Trading
baseline content.

## Risks

| Risk | Status | Mitigation |
| --- | --- | --- |
| Public Master Index exposes an unintended repository-guideline file | REVIEW_REQUIRED | Explicitly approve the `AGENTS.md` inventory row in the follow-up |
| Regeneration includes source changes made after this investigation | CONTROLLED | Freeze the follow-up revision and rerun the two-pass determinism check |
| Private or request content enters public artifacts | NOT_FOUND | Repeat prefix, filename, ID, and mechanic scans before commit |
| Manual partial output update creates inconsistent artifacts | CONTROLLED | Use one generator write command and commit all generated deltas together |
| Investigation reports change the final candidate set | EXPECTED | Recompute candidate hashes after these reports are committed |
| Generator nondeterminism | NOT_FOUND | Require byte-identical two-pass candidates in the follow-up |

## Conclusion

The seven initial drift items are fully explained, deterministic, and safe to
reconcile together after public regeneration is explicitly authorized.

The follow-up must not reuse the initial candidate hashes as final acceptance
hashes because this investigation and its reconciliation plan are themselves
new governed public source documents. It must freeze the final source revision,
generate twice in memory, review the complete candidate diff, then regenerate
all derived artifacts in one controlled execution.

Result:
`DOCUMENTATION-GENERATOR-DRIFT-REQ-01: PASS`.

This request investigated public generated-artifact drift and produced a
reconciliation plan only. It did not regenerate or modify public artifacts,
expose private disclosure content, modify schemas or runtime interfaces,
enable production, activate providers, perform wallet signing, write
contracts, perform financial execution or open operational gates.
