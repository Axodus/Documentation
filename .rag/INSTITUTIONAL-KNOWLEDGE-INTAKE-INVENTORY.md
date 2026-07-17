---
schema_version: "1.0.0"
document_id: "DOC-RPT-073"
aliases: []
document_type: "REPORT"
title: "Institutional Knowledge Intake Inventory"
summary: "Inventories Institutional governance, research, paper-line, historical, and derived surfaces relevant to Documentation without copying source content."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_04.INSTITUTIONAL_INTAKE"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Institutional Editorial Reviewer", "Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-14"
last_updated: "2026-07-14"
last_reviewed: "2026-07-14"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-04"]
related_requirements: ["DOCUMENTATION-REORG-INTAKE-REQ-01"]
related_adrs: ["DOC-ADR-008", "DOC-ADR-014", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Institutional", path: "index.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Institutional Knowledge Intake Inventory

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-01
Mode: CROSS_REPOSITORY_INVENTORY_ALIGNMENT_AND_FREEZE_ONLY
Cross-Repository Content Copy: NOT_AUTHORIZED
Controlled Absorption: NOT_AUTHORIZED
Repository Moves: NOT_AUTHORIZED
Institutional Mutation: NOT_AUTHORIZED
Documentation Public Mutation: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Generated Artifact Regeneration: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This inventory records Institutional surfaces that may affect Documentation
governance, terminology, claims, evidence, or future repository organization.
It captures paths, counts, revisions, authority roles, and eligibility only.
It does not reproduce source prose or authorize intake execution.

## Repository Identity

The observed paths `../Institutional` and `../institutional` are two spellings
of one case-insensitive filesystem object:

| Check | Uppercase path | Lowercase path | Verdict |
|---|---|---|---|
| Directory inode | `70:3096224747058350` | `70:3096224747058350` | Same directory |
| `.git` inode | `70:3659174700479408` | `70:3659174700479408` | Same worktree |
| Branch | `main` | `main` | Same branch |
| HEAD | `b921dace4d6be81b2233e09981108a6b29794e70` | same | Same revision |
| Remote | `https://github.com/Axodus/Institutional.git` | same | Same repository |
| Worktree | clean | clean | Same state |

```text
Repository identity result: ONE_AUTHORITATIVE_INSTITUTIONAL_WORKTREE
Canonical logical path: ../Institutional
Case-variant alias: ../institutional
```

## Institutional Baseline

```text
Repository: Axodus/Institutional
Branch: main
HEAD: b921dace4d6be81b2233e09981108a6b29794e70
Remote divergence: 0 ahead / 0 behind
Tracked files: 136
Worktree: CLEAN
```

| Surface | Document count | Tracked state | Authority role | Publication role | Paper dependency | Public/private status | Current owner | Historical status | Documentation relevance | Intake eligibility |
|---|---:|---|---|---|---|---|---|---|---|---|
| `governance/` | 8 | Tracked | Institutional policy and editorial controls | Controls public Institutional and paper framing | Direct | Public repository, controlled use | Institutional repository maintainer; owner confirmation required | Current governance controls | High | Alignment or reference only |
| `research/` | 7 | Tracked | Working claims, terms, sources, and research context | Supports public/paper claims under review | Direct | Public repository, draft controls | Institutional repository maintainer; owner confirmation required | Current research controls | High | Alignment, controlled intake, or reference |
| `papers/` | 109 | Tracked source plus ignored derived outputs | Academic-paper source and evidence line | Manuscript, review, readiness, and history | Primary | Public repository with external gates closed | Paper author/editorial authority; owner confirmation required | Mixed current, historical, and archived | Selective | Paper-only, historical, or bounded context |
| `whitepaper/` | 1 | Tracked | Navigation placeholder | No active whitepaper authority | None active | Public repository | Institutional repository maintainer | Placeholder | Low | `PUBLIC_ONLY_DO_NOT_ABSORB` |
| `articles/` | 1 | Tracked | Navigation placeholder | No active article authority | None active | Public repository | Institutional repository maintainer | Placeholder | Low | `PUBLIC_ONLY_DO_NOT_ABSORB` |
| `outreach/` | 1 | Tracked | Navigation placeholder | No external outreach authorization | Readiness dependent | Public repository | Institutional repository maintainer | Placeholder | Low | `PUBLIC_ONLY_DO_NOT_ABSORB` |
| root `history/` | 0 | Not present | Not present | Not applicable | None | Not present | Not assigned | Not present; paper-local history exists | None | Out of scope |
| root `.archive/` | 0 | Not present | Not present | Not applicable | None | Not present | Not assigned | Not present; paper-local archive exists | None | Out of scope |

The paper subtree contains 38 tracked files under `history/`, 22 tracked files
under `.archive/`, 30 tracked top-level `v0.6-*.md` records, and 7 tracked
review-package source/control files. Generated PDFs and LaTeX auxiliary files
exist only as ignored build outputs.

## Documentation Baseline

```text
Repository: Axodus/Documentation
Branch: main
HEAD: 1298814a1ebf97d186e1148063267cb55d639cd7
Remote divergence: 0 ahead / 0 behind
Public generator sources: 815
Public canonical: 210
Public legacy: 591
Templates: 14
Declared relationships: 389
Generator drift: 0
Full validation corpus: 873
Full validation canonical: 268
Worktree: CLEAN
```

Relevant tracked surfaces at baseline:

| Surface | Tracked files | Role in comparison |
|---|---:|---|
| `.rag/` | 109 | Governance reports, generated indexes, epic evidence, and intake target |
| `governance/` | 12 | Documentation authority, lifecycle, publication, traceability, and risk rules |
| `references/` | 1 | Minimal reference-surface guidance |
| `research/` | 1 | Minimal research-surface guidance |
| `standards/` | 1 | Minimal standards-surface guidance |
| `institutional-disclosure/` | 42 | Private Track B/C; inspect only for boundary conflict |
| `.knowledge/` | 286 | Internal knowledge packs and terminology candidates |
| `docs/` | 270 | Tracked public VitePress source and configuration |
| `requests/` | 17 | Execution evidence; excluded from public generator outputs |

## Inventory Methodology

1. Freeze repository branch, HEAD, remote divergence, and worktree state.
2. Prove case-variant repository identity using directory and `.git` inodes.
3. Enumerate tracked files with `git ls-files`; enumerate ignored derived files
   separately with `git status --ignored`.
4. Hash each candidate with Git blob hashing at the frozen revision.
5. Read source headings, status declarations, repository guidance, license,
   and authority context without transferring source prose.
6. Compare each knowledge family against current Documentation policies,
   reports, public terminology, private boundary controls, and gaps.
7. Assign one candidate disposition and one future request route.

## Governance Sources

| Institutional path | Role | Frozen blob | Documentation relevance | Inventory classification |
|---|---|---|---|---|
| `governance/maturity-taxonomy.md` | Axodus L/D operational taxonomy | `d904755f3fd0db5f9f664953c24a0d4651b5abe4` | Collides in name with document `maturity_level`; requires scoped crosswalk | Alignment |
| `governance/public-disclosure-boundary.md` | Public Institutional disclosure policy | `c4e11f8bbb099d79302f7c6254a57ac7d209c800` | Overlaps Documentation publication/private boundaries | Alignment; reference-only source authority |
| `governance/evidence-boundaries.md` | Paper/public evidence boundary | `5b545d6b5c0e5cac66ce92b162516a809f085355` | Complements, but does not equal, Documentation evidence snapshots | Alignment; reference-only source authority |
| `governance/citation-policy.md` | Citation and verification policy | `c4f1e159dfb3fe63e44da2c0d6df6cbf1c9febee` | No full Documentation equivalent | Reference only |
| `governance/ip-boundaries.md` | Institutional IP boundary | `295d98fb2e1f484aa66ea2ba4c8540c3d2cdb3ae` | No canonical Documentation equivalent | Reference only |
| `governance/governance-mechanics-v0.1.md` | Controlled public governance stub | `9222ecf6b4894d41d92476beb82dc8981bd5b1e1` | Overlaps private Track B mechanics | Conflict review required |
| `governance/publication-review-checklist.md` | Paper/publication review control | `ac390cc32b500b17e43ddef4a85ed6aebde93702` | Documentation has separate publication governance | Reference only |
| `governance/README.md` | Navigation | frozen by repository commit | Index only | Public-only; do not absorb |

## Research Sources

| Institutional path | Role | Frozen blob | Documentation relevance | Inventory classification |
|---|---|---|---|---|
| `research/claims-register.md` | Public/paper claim ledger | `9ff2c88827a8bb12a67985b46cc1a1422c9c176b` | No global canonical Documentation claim ledger | Alignment before claim-record intake |
| `research/terminology.md` | Controlled public/paper vocabulary | `8f18ecb1e8114e352d45bf9320bdc7ba4580a1ed` | Multiple smaller Documentation vocabularies exist | Alignment before terminology intake |
| `research/gaps.md` | Non-authoritative research questions | `750493b918083944f343a4af279b026fe43898be` | Useful research context without normative authority | Controlled absorption candidate |
| `research/related-work.md` | Paper research context | frozen by repository commit | Paper-specific research surface | Paper-only/reference as needed |
| `research/bibliography-candidates.md` | Unverified bibliography candidates | frozen by repository commit | Evidence discovery only | Paper-only |
| `research/bibliography-verified.md` | Verified bibliographic metadata | frozen by repository commit | Citation evidence only; third-party rights preserved | Reference only |
| `research/README.md` | Navigation | frozen by repository commit | Index only | Public-only; do not absorb |

## Claims Sources

The claims register is the sole identified repository-level Institutional
claim ledger. Its stable `AX-*` entries, evidence fields, allowed wording, and
statuses remain source-controlled by Institutional. This request records only
the file identity and future metadata-intake mode; it does not reproduce claim
rows or approve them for Documentation publication.

## Terminology Sources

The Institutional controlled vocabulary overlaps:

- the legacy public `docs/overview/terminology.md` surface;
- `.knowledge/core/terminology.akp.md`;
- `.knowledge/glossary/` knowledge packs; and
- private Track B/C terminology boundaries.

The overlaps are scope-sensitive. No source is silently replaced. REQ-02 must
produce a term-level crosswalk with preferred wording by consumer surface.

## Paper-Line Sources

| Institutional path or group | Tracked count | Role | Intake treatment |
|---|---:|---|---|
| `papers/axodus-architecture-paper/author-ecosystem-clarification.md` | 1 | Controlled source clarification and qualifiers | Controlled claim-record candidate |
| `papers/axodus-architecture-paper/paper-scope-impact-analysis.md` | 1 | Paper-scope impact analysis | Controlled research-context candidate |
| `papers/axodus-architecture-paper/publication-readiness.md` | 1 | Current paper readiness authority | Reference only |
| `papers/axodus-architecture-paper/v0.6-*.md` | 30 | Active paper-line plans, decisions, records, and audits | 18 paper-only; 12 historical evidence only |
| `papers/axodus-architecture-paper/review-package-v0.6/` | 7 | Review sources, reviewer controls, and bibliography | Paper-only |
| Manuscript sources | 4 primary source/reference files | Markdown, LaTeX, translation, and bibliography | Paper-only; automatic intake prohibited |

## Historical Evidence

The 38 tracked `history/` records and 22 tracked `.archive/` records preserve
paper-line history. They remain Institutional evidence and are not intake
candidates in this request. Future consumers may cite a frozen revision, but
must not promote historical decisions into current Documentation authority.

## Build and Derived Artifacts

Ignored build outputs observed include:

```text
paper.aux
paper.bbl
paper.blg
paper.fdb_latexmk
paper.fls
paper.log
paper.out
paper.pdf
review-package-v0.6/*-review.pdf
```

They are `BUILD_OR_DERIVED_ARTIFACT`, are not tracked source evidence, and are
excluded from the candidate register.

## Existing Documentation Equivalents

| Knowledge family | Documentation equivalent | Coverage verdict |
|---|---|---|
| Documentary lifecycle and maturity | `governance/DOCUMENTATION-LIFECYCLE.md` | Complete for canonical documents; not a product-development taxonomy |
| L/D assessment usage | `.rag/EPIC-03-MATURITY-AND-DEVELOPMENT-ASSESSMENT.md` | Assessment evidence exists; shared taxonomy authority unresolved |
| Publication governance | `governance/DOCUMENTATION-PUBLICATION-GOVERNANCE.md` | Complete for Documentation; does not control paper readiness |
| Documentation authority | `governance/DOCUMENTATION-AUTHORITY-MODEL.md` | Complete for Documentation; supports scope-based reconciliation |
| Evidence snapshots | `.rag/DOCUMENTATION-EVIDENCE-FRAMEWORK.md` | Internal snapshot evidence only; not public claim-evidence authority |
| Public terminology | `docs/overview/terminology.md` | Partial legacy vocabulary |
| Internal terminology | `.knowledge/core/terminology.akp.md`; `.knowledge/glossary/` | Broad but non-canonical knowledge sources requiring later normalization |
| Private disclosure | private disclosure-governance surface | Complete for current Track B/C baselines; not public authority |
| Citation policy | `references/README.md` | Minimal guidance only |
| Claims register | None | Gap |
| IP boundary | None | Gap |
| Paper readiness and scope | None | Correctly remains Institutional authority |

## Missing Documentation Coverage

Documented gaps are:

- a scope-safe L/D taxonomy crosswalk;
- a repository-wide internal claims intake model;
- a canonical terminology conflict register;
- an explicit citation-policy consumer rule;
- an IP and third-party-content intake rule;
- a cross-repository provenance and stale-source review mechanism; and
- an explicit paper-readiness reference protocol.

These gaps do not authorize new policy in REQ-01. They become inputs to
REQ-02 and REQ-03.

## Summary Metrics

```text
Institutional tracked files: 136
Governance files: 8
Research files: 7
Paper-line tracked files: 109
Tracked v0.6 top-level records: 30
Tracked paper history records: 38
Tracked paper archive records: 22
Tracked review-package files: 7
Knowledge families: 13
Candidate register rows: 43
Alignment candidates: 5
Controlled absorption candidates: 3
Reference-only candidates: 4
Conflict-review candidates: 1
Paper-only candidates: 18
Historical-evidence-only candidates: 12
Copied source content: 0
Institutional mutations: 0
```

## Generator Drift Assessment

The non-writing generator check after adding the five canonical reports
identified seven deterministic modified artifacts out of the eight-artifact
generation set:

```text
documentation.baseline.report.json
documentation.graph.json
documentation.manifest.json
documentation.validation.json
.rag/DOCUMENTATION-MASTER-INDEX.md
.rag/DOCUMENTATION-METADATA-COVERAGE.md
.rag/DOCUMENTATION-RELATIONSHIP-REPORT.md
```

`.rag/DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md` remains
byte-identical because the generator contract did not change. Candidate
generation reports 820 public sources, 215 canonical documents, 591 legacy
documents, 14 templates, and 389 declared relationships. No generated output
was written or patched. Regeneration is deferred to a separately authorized
execution request.

## Limitations

- Institutional sources do not provide canonical front matter IDs or
  structured owner metadata; candidate rows use `NOT_DECLARED` and functional
  owner roles pending confirmation.
- A clean Git worktree does not itself establish publication or content
  authority.
- Blob hashes freeze bytes, not semantic approval.
- CC BY 4.0 allows attributed adaptation of covered original text but does not
  transfer trademarks, third-party quotations, bibliographic rights, legal
  approval, or publication authority.
- No source content was copied, so term-level and claim-level semantic
  reconciliation remains future work.

## Gate Preservation

This request inventoried and reconciled cross-repository knowledge authority
between Documentation and Institutional and froze controlled intake
candidates only. It did not copy or absorb Institutional content, modify
papers or Institutional files, move or rename repository surfaces, alter
public navigation, expose private disclosure, create new claims, add
relationships, modify schemas or generator logic, enable production, activate
providers or exchanges, perform wallet signing, write contracts, perform
financial execution or open operational gates.
