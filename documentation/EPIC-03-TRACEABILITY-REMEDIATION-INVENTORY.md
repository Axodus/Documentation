---
schema_version: "1.0.0"
document_id: "DOC-RPT-048"
aliases: []
document_type: "REPORT"
title: "Epic 03 Traceability Remediation Inventory"
summary: "Inventories public documentation traceability debt, separates actionable semantic gaps from governed standalone and migration cases, and establishes reproducible remediation metrics."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_03.TRACEABILITY.INVENTORY"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-14"
last_updated: "2026-07-14"
last_reviewed: "2026-07-14"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-07"]
related_adrs: ["DOC-ADR-004", "DOC-ADR-017", "DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020", "DOC-ADR-022"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.graph.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.manifest.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exception-dispositions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Epic 03 Traceability Remediation Inventory

## Purpose

This report establishes the evidence baseline for
`AXODUS-DOCUMENTATION-EPIC-03-REQ-07`. It distinguishes graph shape from
semantic debt, identifies the cohort that can support relationship proposals,
and prevents legacy, template, generated, or private surfaces from being used
as artificial public graph targets.

## Repository Baseline

The frozen analytical baseline is clean
`a2e79d1f7588baa939e04d25050dbb2cc301eaa5` as observed on `2026-07-14`.
Persistent generated artifacts were produced at `2026-07-13T00:00:00Z`.

| Measure | Baseline |
|---|---:|
| Public source documents / graph nodes | 791 |
| Canonical source documents | 176 |
| Legacy source documents | 601 |
| Template source documents | 14 |
| Generated artifacts outside the source graph | 8 |
| Declared relationships | 351 |
| Derived relationships | 0 |
| Unresolved relationship targets | 0 |
| Duplicate relationship references | 0 |
| Canonical validation errors / warnings | 0 / 0 |
| Baseline entries / active exceptions | 573 / 573 |
| Companion disposition entries | 573 |
| Generator drift before this request | 0 of 8 |
| Node tests in the supplied baseline | 168 of 168 |

The four reports created by this request are not part of those frozen counts.
They intentionally make the persisted generated set stale until a separately
authorized regeneration.

## Methodology

The analysis used the persistent graph and manifest as the structural source
of truth, then reviewed source content before assigning semantic candidates.
It used these exact governed inputs:

- `documentation.graph.json`, `documentation.manifest.json`,
  `documentation.validation.json`, `documentation.baseline.json`, and
  `documentation.baseline.report.json`;
- `documentation/DOCUMENTATION-MASTER-INDEX.md`,
  `documentation/DOCUMENTATION-METADATA-COVERAGE.md`, and
  `documentation/DOCUMENTATION-RELATIONSHIP-REPORT.md`;
- `documentation/DOCUMENTATION-TRACEABILITY-DEPTH-BASELINE.md`,
  `documentation/DOCUMENTATION-GRAPH-ENRICHMENT-REPORT.md`, and
  `documentation/DOCUMENTATION-TRACEABILITY-EXPANSION.md`;
- `documentation/DOCUMENTATION-GENERATOR-DRIFT-INVESTIGATION.md` and
  `documentation/DOCUMENTATION-GENERATOR-DRIFT-RECONCILIATION-PLAN.md`;
- the current exception registry at `documentation.exceptions.json` and the
  current companion disposition registry at
  `documentation.exception-dispositions.json`;
- `documentation.schema.json`, `governance/DOCUMENTATION-TRACEABILITY-MODEL.md`,
  `tools/documentation/shared/constants.js`,
  `tools/documentation/repository/repository-validator.js`, and their
  relationship and generator tests;
- ADR-004, ADR-017 through ADR-020, ADR-022, public core overviews, and the
  candidate source and target documents cited in the candidate register.

For each canonical node, total degree is incoming plus outgoing declared and
derived edge incidence. Default-overview-only is a non-overview canonical
document with exactly one authored edge and that edge targets its domain or
ecosystem overview. Low depth means total degree at most two; it is a screening
condition, not proof of debt.

Duplicate checks compare the ordered triple `(source, type, target)`. Cycle
simulation applies both the graph generator's strongly connected component
model and the validator's stricter rule that evaluates non-`RELATES_TO` edges
for forbidden directed cycles.

## Corpus Scope

Repository-wide structural totals cover all 791 public source documents in the
manifest. The reviewed semantic cohort is narrower:

| Cohort | Count | Use |
|---|---:|---|
| All public source nodes | 791 | Repository-wide graph and orphan totals |
| Canonical nodes | 176 | Degree analysis |
| Canonical nodes with total degree at most two | 75 | Low-depth screening |
| Default-overview-only canonical nodes | 42 | Shallow-traceability screening |
| Migrated public-core default-overview-only guides | 40 | Candidate register cohort |
| Transversal default-overview-only observations | 2 | Reported but not proposed in this request |
| Legacy migration candidates in governed registry | 187 | Migration-preferred, not edge-eligible |
| Templates | 14 | Acceptable standalone |

`institutional-disclosure/**` and `requests/**` are excluded from public
generation by `PUBLIC_GENERATION_EXCLUDED_PATH_PREFIXES`. This request verified
that neither prefix occurs in manifest documents or graph nodes. It did not use
those surfaces as public evidence or targets.

## Traceability Debt Taxonomy

| Category | Definition | Allowed response |
|---|---|---|
| `TRUE_ORPHAN_CANDIDATE` | A governed document has no valid declared relationship and its governed disposition or semantic role establishes that traceability is expected. | Evidence-backed edge after canonical identity exists, or migration first |
| `ACCEPTABLE_STANDALONE` | A non-authoritative authoring template is intentionally outside semantic traceability. | No edge |
| `DEFAULT_OVERVIEW_ONLY` | A document's only authored relationship targets its generic domain or ecosystem overview. | Semantic review before proposing a deeper edge |
| `LOW_TRACEABILITY_DEPTH` | A document has relationships but total degree at most two for this screening baseline. | Semantic review; degree alone does not authorize an edge |
| `MISSING_DECISION_TRACEABILITY` | Content relies on a decision or governed status but has no semantically useful decision edge. | Evidence-backed edge or authority review |
| `MISSING_DEPENDENCY_TRACEABILITY` | Content identifies a required control, input, or companion artifact beyond its overview. | Directed dependency or scoped association |
| `MISSING_IMPLEMENTATION_TRACEABILITY` | Architecture, execution, or implementation state lacks a documentary bridge to the applicable governed record. | Evidence-backed implementation association; implementation references remain separate |
| `MISSING_INTEGRATION_TRACEABILITY` | Content declares a cross-core integration without a cross-core graph edge. | Boundary-safe cross-core association |
| `MISSING_SECURITY_TRACEABILITY` | Security-sensitive content lacks a safe public security context edge. | Security review or bounded public association |
| `MISSING_GOVERNANCE_TRACEABILITY` | Governance, accountability, compliance, or risk obligations lack a governed context edge. | Authority review or bounded public association |
| `SUPERSESSION_GAP` | Replacement is asserted without synchronized `supersedes` and `SUPERSEDES` metadata. | Block pending authority and consistency evidence |
| `MIGRATION_PREFERRED` | A legacy source cannot participate in the graph until governed promotion assigns canonical identity. | Migrate before relationship enrichment |
| `AUTHORITY_REVIEW_REQUIRED` | A candidate would imply authority, ownership, governance, constitutional, or compliance meaning that is not yet confirmed. | Route to the named authority owner; do not freeze |
| `SECURITY_REVIEW_REQUIRED` | A candidate would assert security, custody, disclosure, or sensitive operational meaning requiring Security confirmation. | Route to Security; do not freeze |
| `INSUFFICIENT_EVIDENCE` | Relevance is generic, metadata-derived, or unsupported by exact repository evidence. | Defer; do not add an edge |

## Relationship Type Inventory

The schema supports 11 authored types. Five occur in the baseline graph.
Inverse labels are projections and must not be authored.

| Authored type | Current count | Direction supported by the traceability model | Cycle posture |
|---|---:|---|---|
| `ADDRESSES` | 0 | ADR, RFC, or proposal to motivating requirement/problem | Cycles invalid |
| `REALIZES` | 13 | Specification, policy, standard, or API to upstream requirement/ADR | Cycles invalid |
| `DEPENDS_ON` | 114 | Governed source to a target required for interpretation or applicability | Cycles presumptively invalid; validator forbids directed cycles |
| `VALIDATES` | 45 | Report or reference to reviewed governed target | Cycles invalid |
| `OPERATES` | 0 | Runbook, playbook, or procedure to operated API/specification/architecture | Cycles invalid |
| `DELIVERS` | 0 | Release to delivered governed document | Cycles invalid |
| `SUPERSEDES` | 0 | New authoritative document to replaced document | Cycles forbidden; must match `supersedes` |
| `RELATES_TO` | 164 | Governed source to a relevant non-hierarchical target | Cycles allowed and informational |
| `GOVERNS` | 0 | Policy, standard, or ADR to governed target | Non-`RELATES_TO` cycle forbidden by validator |
| `DOCUMENTS` | 15 | Guide, reference, report, or meeting to documented target | Non-`RELATES_TO` cycle forbidden by validator |
| `DERIVED_FROM` | 0 | Document to identified documentary source | Non-`RELATES_TO` cycle forbidden by validator |

Only `RELATES_TO` and `DEPENDS_ON` are used in the frozen set. The proposed
direction is always authored by the shallow source document toward the
evidence-bearing target. No inverse edge is proposed.

## Graph Degree Distribution

All 615 degree-zero nodes are legacy or templates. Every nonzero-degree node is
canonical.

| Total degree | Repository nodes | Canonical nodes |
|---:|---:|---:|
| 0 | 615 | 0 |
| 1 | 54 | 54 |
| 2 | 21 | 21 |
| 3 | 10 | 10 |
| 4 | 22 | 22 |
| 5 | 15 | 15 |
| 6 | 23 | 23 |
| 7 | 12 | 12 |
| 8 | 4 | 4 |
| 9 | 8 | 8 |
| 10 | 2 | 2 |
| 11 | 2 | 2 |
| 12 | 1 | 1 |
| 14 | 1 | 1 |
| 19 | 1 | 1 |
| **Total** | **791** | **176** |

Canonical outgoing degree is `1:83`, `2:45`, `3:26`, `4:13`, `5:8`, and
`8:1`. Canonical incoming degree is `0:70`, `1:29`, `2:17`, `3:18`, `4:13`,
`5:15`, `6:6`, `7:4`, `8:2`, `9:1`, and `18:1`. The total incident degree is
702, exactly twice the 351 directed edges.

## Orphan Analysis

| Classification | Nodes | Orphans | Actionability |
|---|---:|---:|---|
| Canonical | 176 | 0 | Connected; evaluate depth semantically |
| Legacy | 601 | 601 | Cannot author valid graph edges without canonical promotion |
| Template | 14 | 14 | Acceptable standalone authoring assets |
| Generated | 8 artifacts | 0 graph nodes | Outside source graph; no orphan state |
| **Public source total** | **791** | **615** | **187 true migration candidates; 428 non-edge cases** |

The 601 legacy orphans split disjointly into 187 governed migration
candidates, 285 `AUTHORITY_REVIEW` dispositions, 59 `SECURITY_REVIEW`
dispositions, 42 `DEFER_WITH_RISK` dispositions, and 28 new unbaselined legacy
records. The 187 migration candidates are the true orphan-remediation
candidates, but remediation must be migration first and relationship review
second. The other 414 legacy records are blocked from edge candidacy. Together
with 14 templates, they account for the remaining 428 non-edge orphan cases.

## Default-Overview-Only Analysis

Forty-two canonical documents have one authored relationship and it targets
only their default overview. Forty are migrated public-core guides and are
listed one-for-one in `DOC-RPT-049`. `CORE-GDE-002` and `CORE-GDE-004` are the
two transversal observations; this request does not invent a target for either
solely to reduce the metric.

The 40-document candidate cohort is distributed as follows:

| Domain | Documents |
|---|---:|
| Accountability | 4 |
| DEX | 5 |
| Governance | 5 |
| Lottery | 5 |
| Marketplace | 5 |
| Mining | 5 |
| Runtime | 3 |
| Security | 5 |
| Treasury | 3 |
| **Total** | **40** |

## Low-Traceability-Depth Analysis

Seventy-five canonical documents have total degree at most two: 54 have degree
one and 21 have degree two. The 42 default-overview-only nodes are a strict
subset. The remaining low-degree nodes include public core overviews, ADRs,
bounded batch evidence, registries, and governance artifacts. Degree alone is
not enough to classify them as debt, so only the 40 source-reviewed guides enter
the candidate register.

No edge is proposed for the purpose of raising a degree value. A low-degree
record remains valid when no stronger semantic evidence exists.

## Decision Traceability Analysis

Four candidate-cohort documents have a reviewed decision gap: release state,
constitutional alignment, proposal execution, or disclosure publication is
material to their meaning, but their only current edge is the overview edge.
One is frozen because the approved publication-pipeline decision is exact and
boundary-safe. Three require authority or security review.

This count does not treat `related_adrs` metadata as a graph edge and does not
rewrite approved ADRs. Downstream documents author the edge toward the decision.

## Dependency Traceability Analysis

Eight cohort documents identify an explicit companion control or content
dependency beyond the overview. Seven are sufficiently exact to use a scoped
`RELATES_TO` proposal; one security-sensitive operational case remains under
review. `DEPENDS_ON` is reserved for the release/publication candidate whose
interpretation requires the approved stage-separation decision.

## Implementation Traceability Analysis

All 40 cohort documents contain a local `implementation_refs` source record,
so the missing-field count is zero. Six nevertheless have semantic
implementation debt: their bodies connect architecture, execution receipts, or
implementation state to another governed document while the graph exposes only
the overview. These are documentary associations, not claims that software is
deployed.

## Integration Traceability Analysis

Six cohort documents explicitly cross DEX, Lottery, Marketplace, Mining,
Security, or Treasury boundaries. Three public overview associations are
frozen. Three remain security-review-gated. Generic mentions of an ecosystem
area are not enough; the source must describe the integration or name the
target as a related page.

## Security and Governance Traceability Analysis

The candidate taxonomy identifies nine security-traceability and seven
governance-traceability source documents. Risk routing is stricter than the
taxonomy: 12 candidates require `SECURITY_REVIEW_REQUIRED` and seven require
`AUTHORITY_REVIEW_REQUIRED` because cross-core meaning or boundary posture must
be approved before execution.

At repository scale, the disposition registry routes 344 of 573 entries to
security review and 327 to authority review; those routing populations overlap.
These totals are not added to the 40-candidate cohort.

## Supersession Analysis

The manifest contains zero `supersedes` or `superseded_by` records, and the
graph contains zero `SUPERSEDES` relationships or derived inverses. No reviewed
candidate provides exact authority evidence that one canonical document
replaces another, so the frozen set contains zero supersession mutations.

One exact legacy hash duplicate exists:
`docs/trading/README.md` and `legacy/trading/README.md`. Both are unbaselined
legacy sources without canonical IDs. The duplicate is a migration conflict,
not evidence that either path supersedes the other.

## Acceptable Standalone Documents

The 14 `templates/*.md` source templates are acceptable standalone authoring
assets. Their placeholder identities are intentionally not canonical graph
targets, and attaching semantic edges would misrepresent authority. No
canonical document receives an acceptable-standalone disposition in the
reviewed cohort.

## Migration-Preferred Documents

The companion disposition registry marks 187 legacy `docs/**` records as
`migration_candidate: true`. They are `MIGRATION_PREFERRED` for traceability
purposes because they have no canonical ID and cannot satisfy referential
integrity today. Of those, 116 also require security routing. Migration remains
subject to ADR-018 and ADR-019, authority review, ID reservation, semantic diff,
and validation; this request freezes no migration.

## Blocked Candidates

| Block | Count | Reason |
|---|---:|---|
| Candidate register authority review | 7 | Cross-core governance or constitutional meaning requires authority confirmation |
| Candidate register security review | 12 | Security, custody, disclosure, or sensitive operational scope requires security confirmation |
| Candidate register owner review | 2 | Evidence is relevant but source-owner intent is not explicit enough to freeze |
| Candidate register insufficient evidence | 1 | Target specificity is not supported by the generic roadmap text |
| Legacy authority disposition | 285 | No canonical identity and authority remains unresolved |
| Legacy security disposition | 59 | No canonical identity and security review remains unresolved |
| Legacy deferred disposition | 42 | No canonical identity and evidence is insufficient for a governed action |
| New unbaselined legacy | 28 | Outside the 573-entry governed registry set |
| Critical-risk candidates | 0 | None admitted |

## Summary Metrics

| Metric | Count | Reproducible basis |
|---|---:|---|
| Nodes | 791 | `documentation.graph.json.nodes` |
| Relationships | 351 | Declared baseline edges; derived edges are 0 |
| Total public source orphans | 615 | 601 legacy plus 14 templates |
| Canonical orphans | 0 | Manifest classification joined to graph connectivity |
| Legacy orphans | 601 | All legacy nodes lack canonical identity |
| Template orphans | 14 | All template nodes are intentionally standalone |
| Generated orphans | 0 | Eight generated artifacts are outside the graph |
| Acceptable standalone | 14 | Template classification |
| True orphan candidates | 187 | Governed `migration_candidate: true` entries |
| Default-overview-only | 42 | 40 reviewed public-core guides plus 2 transversal observations |
| Low-depth canonical nodes | 75 | Total degree at most 2 |
| Missing ADR / decision traceability | 4 | Candidate taxonomy, unique source documents |
| Missing dependency traceability | 8 | Candidate taxonomy, unique source documents |
| Missing implementation traceability | 6 | Candidate taxonomy, unique source documents |
| Missing integration traceability | 6 | Candidate taxonomy, unique source documents |
| Candidate security review | 12 | Candidate disposition |
| Candidate authority review | 7 | Candidate disposition |
| Repository security routing | 344 | Companion disposition registry; overlapping population |
| Repository authority routing | 327 | Companion disposition registry; overlapping population |
| Migration-preferred | 187 | Governed migration candidates |
| Insufficient evidence | 70 | 42 governed deferrals plus 28 unbaselined legacy records |
| Frozen source documents / mutations | 18 / 18 | `TRACEABILITY-BATCH-01` |

## Limitations

- Degree measures graph structure, not semantic correctness.
- The semantic register reviews 40 of 176 canonical documents; it does not
  claim that all higher-degree documents are complete.
- Legacy bodies were not converted into graph evidence. Registry metadata was
  sufficient to classify migration and review gates.
- Private institutional-disclosure and request surfaces were checked only for
  exclusion and were never used as public targets or evidence.
- Generated artifacts remain unchanged in this request, so their persisted
  counts continue to represent the frozen baseline until authorized
  regeneration.
- No supersession authority can be inferred from duplicate bytes, titles,
  paths, or historical proximity.

This request analyzed documentation traceability, classified remediation candidates and froze a bounded execution set only. It did not add, remove or alter relationships; modify document metadata or public content; regenerate public artifacts; expose private disclosure or request content; change schemas, generator logic or runtime interfaces; enable production; activate providers or exchanges; perform wallet signing; write contracts; perform financial execution; or open operational gates.
