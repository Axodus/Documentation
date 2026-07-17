---
schema_version: "1.0.0"
document_id: "DOC-RPT-074"
aliases: []
document_type: "REPORT"
title: "Institutional Knowledge Intake Candidate Register"
summary: "Freezes 43 Institutional knowledge candidates with provenance, authority, risk, disposition, and future execution routing."
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

# Institutional Knowledge Intake Candidate Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-01
Candidate Set: FROZEN
Candidate Count: 43
Cross-Repository Copy: NOT_AUTHORIZED
Controlled Absorption: NOT_AUTHORIZED
Paper Mutation: NOT_AUTHORIZED
Relationship Mutation: NOT_AUTHORIZED
Generated Artifact Regeneration: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This is the authoritative REQ-01 candidate list. Candidate IDs are permanent
and must not be renumbered. Each row identifies a tracked source at frozen
Institutional revision
`b921dace4d6be81b2233e09981108a6b29794e70`. Institutional source documents
declare no canonical repository document ID; `NOT_DECLARED` is evidence, not
an invitation to assign one.

## Disposition Rules

- `FREEZE_FOR_ALIGNMENT` permits REQ-02 analysis only.
- `FREEZE_FOR_CONTROLLED_ABSORPTION` permits REQ-03 execution planning only
  after provenance, attribution, disclosure, legal/IP, and rollback checks.
- `REFERENCE_ONLY` prohibits content mirroring.
- `CONFLICT_REVIEW_REQUIRED` blocks alignment and absorption until authority
  scopes are reconciled.
- `PAPER_ONLY` and `HISTORICAL_EVIDENCE_ONLY` prohibit Documentation intake.
- No row authorizes source mutation, public disclosure, or publication.

## Primary Governance, Research, and Scope Candidates

| Candidate ID | Institutional Path | Institutional Document ID | Knowledge Family | Current Authority | Documentation Equivalent | Gap Type | Proposed Intake Mode | Target Documentation Surface | Publicability | Private Review Requirement | Legal Review Requirement | Conflict Status | Evidence | Priority | Risk | Owner | Disposition | Execution Request | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `INTAKE-EP4-0001` | `governance/maturity-taxonomy.md` | `NOT_DECLARED` | Maturity and development taxonomy | Institutional L/D taxonomy | Documentation Lifecycle; EPIC-03 maturity assessment | Same D labels represent different dimensions | `REFERENCE_ONLY` pending crosswalk | Cross-repository taxonomy alignment record | Internal rubric; bounded public wording only | Required for scope collision | Required before external score use | `SCOPED_NAMING_COLLISION` | blob `d904755f3fd0db5f9f664953c24a0d4651b5abe4`; Purpose, L-Level, D-Level, publication headings | P0 | HIGH | Institutional repository maintainer / Documentation Coordinator | `FREEZE_FOR_ALIGNMENT` | `DOCUMENTATION-REORG-INTAKE-REQ-02` | Never map schema `maturity_level` directly to product D-Level |
| `INTAKE-EP4-0002` | `governance/public-disclosure-boundary.md` | `NOT_DECLARED` | Public disclosure boundary | Institutional public/paper policy | Documentation Publication Governance; private boundary controls | Scope overlap | `REFERENCE_ONLY` with alignment | Disclosure-boundary crosswalk | Source-controlled public abstraction only | Required | Required for regulated or external claims | `SCOPED_OVERLAP` | blob `c4e11f8bbb099d79302f7c6254a57ac7d209c800`; permitted, prohibited, document-specific, and review headings | P0 | HIGH | Institutional repository maintainer / Documentation Coordinator | `FREEZE_FOR_ALIGNMENT` | `DOCUMENTATION-REORG-INTAKE-REQ-02` | Stricter applicable boundary wins |
| `INTAKE-EP4-0003` | `governance/evidence-boundaries.md` | `NOT_DECLARED` | Evidence boundary | Institutional public/paper evidence policy | Documentation Evidence Framework | Different evidence purposes | `REFERENCE_ONLY` with alignment | Evidence-boundary crosswalk | Bounded by consumer surface | Required | Conditional on external use | `SCOPED_OVERLAP` | blob `5b545d6b5c0e5cac66ce92b162516a809f085355`; allowed, blocked, controlled disclosure, and distinction headings | P0 | HIGH | Institutional repository maintainer / Documentation Architecture Reviewer | `FREEZE_FOR_ALIGNMENT` | `DOCUMENTATION-REORG-INTAKE-REQ-02` | Internal snapshots do not prove public claims |
| `INTAKE-EP4-0004` | `research/terminology.md` | `NOT_DECLARED` | Terminology | Institutional public/paper vocabulary | Public terminology page; internal knowledge/glossary surfaces | Multiple vocabularies | `ABSORB_AS_TERMINOLOGY_CONTROL` after alignment | Future canonical terminology control | Source terms are public but context-bound | Required | Required for branding, token, regulated, or external terms | `MULTIPLE_VOCABULARIES` | blob `8f18ecb1e8114e352d45bf9320bdc7ba4580a1ed`; D/L, maturity, tokenomics, and controlled-term headings | P0 | HIGH | Institutional repository maintainer / Axodus Core / Documentation Maintainer | `FREEZE_FOR_ALIGNMENT` | `DOCUMENTATION-REORG-INTAKE-REQ-02` | No silent replacement of product or private terminology |
| `INTAKE-EP4-0005` | `research/claims-register.md` | `NOT_DECLARED` | Claims governance | Institutional public/paper claims ledger | No global canonical Documentation equivalent | Missing internal claim ledger | `ABSORB_AS_CLAIM_RECORD` after alignment | Future internal claim intake register | Allowed wording is revision-bound, not permanent approval | Required | Required for legal, financial, regulated, or external claims | `AUTHORITY_TRANSFER_RISK` | blob `9ff2c88827a8bb12a67985b46cc1a1422c9c176b`; claims table and register-maintenance heading | P0 | HIGH | Institutional claim maintainer / Documentation Coordinator | `FREEZE_FOR_ALIGNMENT` | `DOCUMENTATION-REORG-INTAKE-REQ-02` | REQ-01 does not reproduce claim rows |
| `INTAKE-EP4-0006` | `research/gaps.md` | `NOT_DECLARED` | Research gaps | Institutional research context | Documentation research surface is minimal | Missing governed internal research context | `ABSORB_AS_RESEARCH_CONTEXT` | `research/` or a future canonical research record | Non-authoritative framing only | Required before intake | Not required unless a gap includes regulated/external claims | `NO_DIRECT_CONFLICT` | blob `750493b918083944f343a4af279b026fe43898be`; preliminary status and eight gap headings | P1 | MEDIUM | Institutional repository maintainer / Documentation Architecture Reviewer | `FREEZE_FOR_CONTROLLED_ABSORPTION` | `DOCUMENTATION-REORG-INTAKE-REQ-03` | Preserve research status; do not convert questions into facts |
| `INTAKE-EP4-0007` | `papers/axodus-architecture-paper/author-ecosystem-clarification.md` | `NOT_DECLARED` | Controlled institutional disclosure | Institutional author clarification | Internal claims and private boundary records | Provenance-safe claim metadata missing | `ABSORB_AS_CLAIM_RECORD` | Future internal claim intake register | Controlled Institutional abstraction only | Required | Required for branding, regulated, financial, or external reuse | `BOUNDARY_SENSITIVE` | blob `b788ea413e9130ee775b9cee0a555642a7cc2b29`; purpose, module inventory, boundary, and classification headings | P0 | HIGH | Paper author/editorial authority / Documentation Coordinator | `FREEZE_FOR_CONTROLLED_ABSORPTION` | `DOCUMENTATION-REORG-INTAKE-REQ-03` | Intake is metadata and provenance only; no module-detail copy |
| `INTAKE-EP4-0008` | `papers/axodus-architecture-paper/paper-scope-impact-analysis.md` | `NOT_DECLARED` | Paper scope evidence | Institutional paper line | No Documentation paper-scope authority | Missing bounded research-context reference | `ABSORB_AS_RESEARCH_CONTEXT` | Future cross-repository research context | Paper-only framing unless separately abstracted | Required | Conditional on external reuse | `SCOPE_TRANSLATION_REQUIRED` | blob `af172e81e050af984c9530b960b10343224eacb6`; assessment, reusable, reframing, exclusions, and scope-decision headings | P1 | HIGH | Institutional editorial authority / Documentation Architecture Reviewer | `FREEZE_FOR_CONTROLLED_ABSORPTION` | `DOCUMENTATION-REORG-INTAKE-REQ-03` | Preserve analytical status and exclusions |
| `INTAKE-EP4-0009` | `governance/citation-policy.md` | `NOT_DECLARED` | Citation policy | Institutional | Minimal references guidance | Missing canonical citation consumer rule | `REFERENCE_ONLY` | Source register only | Institutional/paper policy | Not required for reference | Required before adapting third-party material | `NO_CONFLICT` | blob `c4f1e159dfb3fe63e44da2c0d6df6cbf1c9febee`; source classes, verification, manuscript, and internal-claims headings | P1 | MEDIUM | Institutional repository maintainer | `REFERENCE_ONLY` | None | Third-party rights remain independent |
| `INTAKE-EP4-0010` | `governance/ip-boundaries.md` | `NOT_DECLARED` | IP boundary | Institutional | None | Missing Documentation IP intake rule | `REFERENCE_ONLY` | Source register only | Institutional policy | Required for intake proposal | Required | `DOCUMENTATION_GAP` | blob `295d98fb2e1f484aa66ea2ba4c8540c3d2cdb3ae`; allowed, prohibited, and review headings | P0 | HIGH | Content Rights Holder / Institutional repository maintainer | `REFERENCE_ONLY` | None | CC BY 4.0 excludes third-party rights and authority transfer |
| `INTAKE-EP4-0011` | `papers/axodus-architecture-paper/publication-readiness.md` | `NOT_DECLARED` | Paper readiness | Institutional paper line | None; Documentation publication policy is separate | No local equivalent by design | `REFERENCE_ONLY` | Source register only | External progression remains source-controlled | Not required for reference | Required before delivery/publication | `NO_CONFLICT` | blob `0327ac4b69d45e7ec8ef5d5fdc97318915bbc76b`; controlling decision and publication-status headings | P0 | HIGH | Paper author/editorial authority | `REFERENCE_ONLY` | None | Documentation cannot authorize paper progression |
| `INTAKE-EP4-0012` | `governance/publication-review-checklist.md` | `NOT_DECLARED` | Publication review | Institutional | Documentation Publication Governance | Separate release processes | `REFERENCE_ONLY` | Source register only | Institutional/paper review control | Not required for reference | Required when checklist triggers it | `STATUS_SCOPE_SEPARATED` | blob `ac390cc32b500b17e43ddef4a85ed6aebde93702`; human-review, evidence, rights, and release gates | P1 | MEDIUM | Institutional repository maintainer | `REFERENCE_ONLY` | None | Passing one repository's checklist does not release the other |
| `INTAKE-EP4-0013` | `governance/governance-mechanics-v0.1.md` | `NOT_DECLARED` | Governance mechanics | Institutional public stub | Documentation Authority Model; private Track B governance surface | Public/private overlap | `PRIVATE_REVIEW_REQUIRED` | Alignment decision only | Public conceptual stub only | Required | Required before external governance claims | `PUBLIC_PRIVATE_OVERLAP` | blob `9222ecf6b4894d41d92476beb82dc8981bd5b1e1`; public-stub status, boundary, AI roles, unresolved parameters, other-tracks headings | P0 | HIGH | Governance Owner / Documentation Coordinator / Security Reviewer | `CONFLICT_REVIEW_REQUIRED` | `DOCUMENTATION-REORG-INTAKE-REQ-02` | No Track B detail may enter the public stub |

## v0.6 Paper-Line Candidate Register

All rows below have `Institutional Document ID: NOT_DECLARED`, current
authority `Institutional paper line`, no Documentation authority equivalent,
target surface `NONE`, private review `NOT_REQUIRED_FOR_REFERENCE`, legal
review `REQUIRED_BEFORE_EXTERNAL_USE`, owner `Paper author/editorial authority`,
and no execution request. Their source revision is the frozen Institutional
commit.

| Candidate ID | Institutional Path | Institutional Document ID | Knowledge Family | Current Authority | Documentation Equivalent | Gap Type | Proposed Intake Mode | Target Documentation Surface | Publicability | Private Review Requirement | Legal Review Requirement | Conflict Status | Evidence | Priority | Risk | Owner | Disposition | Execution Request | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `INTAKE-EP4-0014` | `papers/axodus-architecture-paper/v0.6-author-scientific-decision-record.md` | `NOT_DECLARED` | Paper decision | Institutional paper line | None | None | `PAPER_ONLY` | None | Source-controlled; external gates closed | Not required for reference | Required before external use | `NO_CONFLICT` | blob `04d96880ccf573aa66a8dd9858ad6d877f41327c`; decision authority and summary headings | P2 | HIGH | Paper author/editorial authority | `PAPER_ONLY` | None | Active paper decision; no intake |
| `INTAKE-EP4-0015` | `papers/axodus-architecture-paper/v0.6-bibliography-candidate-evaluation-plan.md` | `NOT_DECLARED` | Bibliography planning | Institutional paper line | None | None | `PAPER_ONLY` | None | Paper planning only | Not required for reference | Required before external use | `NO_CONFLICT` | blob `707be49e0e6a50dc552fb6e428c0c71440efcebe`; planning status, candidate set, deferred actions | P3 | MEDIUM | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0016` | `papers/axodus-architecture-paper/v0.6-bibliography-metadata-verification-plan.md` | `NOT_DECLARED` | Bibliography planning | Institutional paper line | None | None | `PAPER_ONLY` | None | Paper planning only | Not required for reference | Required before external use | `NO_CONFLICT` | blob `602d9b5369de39c476370004c022f97688c0a6c3`; plan status, source policy, advancement criteria | P3 | MEDIUM | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0017` | `papers/axodus-architecture-paper/v0.6-bibliography-metadata-verification-record.md` | `NOT_DECLARED` | Bibliography evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `f4eabb0edcdadb105d17f1d5ec38face4a3838d4`; execution status, verification method, summary, advancement decision | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0018` | `papers/axodus-architecture-paper/v0.6-bibliography-track-closure-record.md` | `NOT_DECLARED` | Bibliography closure | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `9a384efc6e03069ffad6dee4ee35c5cf2e6905b9`; closed scope, validation, external-use gates | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0019` | `papers/axodus-architecture-paper/v0.6-citation-fit-and-patch-plan.md` | `NOT_DECLARED` | Citation planning | Institutional paper line | None | None | `PAPER_ONLY` | None | Paper planning only | Not required for reference | Required before external use | `NO_CONFLICT` | blob `899af8d01beac8f078f1733c77cf96aef21b8dce`; plan status, decisions, patch map | P3 | MEDIUM | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0020` | `papers/axodus-architecture-paper/v0.6-controlled-human-review-package-readiness-decision.md` | `NOT_DECLARED` | Review readiness decision | Institutional paper line | None | None | `PAPER_ONLY` | None | External gates closed | Not required for reference | Required before external use | `NO_CONFLICT` | blob `d2dbda492c601e0e15e4b558e4b49b8280a668db`; decision metadata, basis, and scope | P2 | HIGH | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0021` | `papers/axodus-architecture-paper/v0.6-controlled-human-review-package-record.md` | `NOT_DECLARED` | Review package control | Institutional paper line | None | None | `PAPER_ONLY` | None | External gates closed | Not required for reference | Required before external use | `NO_CONFLICT` | blob `c8a8d8f8a206c669ec047e1b81e887ac517e2411`; package inventory, controls, license/confidentiality | P2 | HIGH | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0022` | `papers/axodus-architecture-paper/v0.6-controlled-human-review-readiness-decision.md` | `NOT_DECLARED` | Review readiness decision | Institutional paper line | None | None | `PAPER_ONLY` | None | Candidate-only; external gates closed | Not required for reference | Required before external use | `NO_CONFLICT` | blob `f99afe385c4f855aabd2bc7ac12ae0442f0099ec`; status, decision, preconditions, prohibitions | P2 | HIGH | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0023` | `papers/axodus-architecture-paper/v0.6-controlled-review-protocol-draft.md` | `NOT_DECLARED` | Review protocol | Institutional paper line | None | None | `PAPER_ONLY` | None | Internal paper protocol | Not required for reference | Required before external use | `NO_CONFLICT` | blob `cd16494f5cc454cb7384a232258f1574e90f1467`; internal status, permitted/prohibited use, data handling, legal review | P2 | HIGH | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0024` | `papers/axodus-architecture-paper/v0.6-controlled-scientific-revision-record.md` | `NOT_DECLARED` | Revision evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `84f5ef53041f728256e51cd4518685b6fbd70061`; implementation status, change inventory, boundaries, verification | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0025` | `papers/axodus-architecture-paper/v0.6-editorial-closure-audit.md` | `NOT_DECLARED` | Editorial closure evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `6a749885d7bd18d072f8e0338e4f79c2ef1eb1f1`; purpose, patch inventory, validation, closure decision | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0026` | `papers/axodus-architecture-paper/v0.6-editorial-consistency-audit.md` | `NOT_DECLARED` | Editorial audit evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `f83f5df4be8d6937bee8a5143234755130ee1bb3`; purpose, scope, findings, audit decision, closure | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0027` | `papers/axodus-architecture-paper/v0.6-editorial-correction-plan.md` | `NOT_DECLARED` | Editorial planning | Institutional paper line | None | None | `PAPER_ONLY` | None | Paper planning only | Not required for reference | Required before external use | `NO_CONFLICT` | blob `94d12af2395774e97687fff88d1d61859aa5de4b`; purpose, correction map, protected surfaces, verification | P3 | MEDIUM | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0028` | `papers/axodus-architecture-paper/v0.6-editorial-workstream-closure-record.md` | `NOT_DECLARED` | Editorial closure evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `258b1419bd66af103f6382c3fe8ed3d3e2692e88`; closure basis, closed scope, validation, external gates | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0029` | `papers/axodus-architecture-paper/v0.6-external-readiness-gate-matrix.md` | `NOT_DECLARED` | External readiness | Institutional paper line | None | None | `PAPER_ONLY` | None | No external authorization | Not required for reference | Required before external use | `NO_CONFLICT` | blob `306657ae7eea78b9e9497cbc04cea68a7e70022a`; no-authorization status, rules, gate matrix, decision boundary | P2 | HIGH | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0030` | `papers/axodus-architecture-paper/v0.6-external-readiness-preparation-plan.md` | `NOT_DECLARED` | External readiness | Institutional paper line | None | None | `PAPER_ONLY` | None | No external authorization | Not required for reference | Required before external use | `NO_CONFLICT` | blob `9290b74d47cbe36e9d418cc4671d38e429f3d879`; purpose, gate architecture, legal/IP, blockers, forbidden actions | P2 | HIGH | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0031` | `papers/axodus-architecture-paper/v0.6-independent-scientific-reassessment.md` | `NOT_DECLARED` | Scientific review | Institutional paper line | None | None | `PAPER_ONLY` | None | Paper review only | Not required for reference | Required before external use | `NO_CONFLICT` | blob `a065cbebd4b819e084bf93d6bf7bde0ee8c4ab36`; mandate, materials, findings, outcome | P3 | MEDIUM | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0032` | `papers/axodus-architecture-paper/v0.6-package-integrity-and-hash-record.md` | `NOT_DECLARED` | Package integrity evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `b20ad203babf25738ecebe60763a3fefbe4b1c5e`; package baseline and hash inventory | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0033` | `papers/axodus-architecture-paper/v0.6-planning-entry.md` | `NOT_DECLARED` | Paper planning | Institutional paper line | None | None | `PAPER_ONLY` | None | Paper planning only | Not required for reference | Required before external use | `NO_CONFLICT` | blob `4acecedc6d86be886199bcab8270317dc5aeeb82`; status, sources, scope, boundary, non-goals | P3 | MEDIUM | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0034` | `papers/axodus-architecture-paper/v0.6-post-patch-bibliography-audit.md` | `NOT_DECLARED` | Bibliography audit evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `e39b9aa9d51e3c5816ef3580f6a24f9a15970a93`; purpose, scope, patch inventory, findings, closure | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0035` | `papers/axodus-architecture-paper/v0.6-post-revision-finding-resolution-matrix.md` | `NOT_DECLARED` | Revision evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `b9642334872ef6e082e6cd9daeffac0c95cb8b98`; completed status, resolution matrix, final state | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0036` | `papers/axodus-architecture-paper/v0.6-post-revision-verification-report.md` | `NOT_DECLARED` | Revision verification evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `8874dcb391976e7295dbc296c0567dfc9840336f`; verification state, files, boundaries, findings, decision | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0037` | `papers/axodus-architecture-paper/v0.6-pt-BR-translation-control-record.md` | `NOT_DECLARED` | Translation evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `dc3993554e140aa7f42503ea39674c163b9397ba`; control metadata, terminology, parity, non-equivalences | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0038` | `papers/axodus-architecture-paper/v0.6-review-pdf-visual-inspection-record.md` | `NOT_DECLARED` | Review-package evidence | Institutional paper line | None | None | `HISTORICAL_EVIDENCE_ONLY` | None | Historical paper evidence | Not required for reference | Required before external use | `NO_CONFLICT` | blob `fbfb377786f4800a3333bc4fcf4d2bcc56660ac7`; inspection metadata, results, decision | P3 | MEDIUM | Paper author/editorial authority | `HISTORICAL_EVIDENCE_ONLY` | None | Preserve in Institutional |
| `INTAKE-EP4-0039` | `papers/axodus-architecture-paper/v0.6-reviewer-package-inventory.md` | `NOT_DECLARED` | Reviewer package | Institutional paper line | None | None | `PAPER_ONLY` | None | No distribution authorization | Not required for reference | Required before external use | `NO_CONFLICT` | blob `6ec629b215857ebd76602d12bb1e30746df51c45`; no-distribution status, rules, inventory, decision, boundary | P2 | HIGH | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0040` | `papers/axodus-architecture-paper/v0.6-roadmap-and-scope-plan.md` | `NOT_DECLARED` | Paper roadmap | Institutional paper line | None | None | `PAPER_ONLY` | None | Paper planning only | Not required for reference | Required before external use | `NO_CONFLICT` | blob `5a4d6afb6a4de75c73b317ffa80cf0c070c92f8c`; status, scope, exclusions, workstreams, roadmap | P3 | MEDIUM | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0041` | `papers/axodus-architecture-paper/v0.6-scientific-review-intake-and-triage.md` | `NOT_DECLARED` | Scientific review | Institutional paper line | None | None | `PAPER_ONLY` | None | Paper review only | Not required for reference | Required before external use | `NO_CONFLICT` | blob `d3fd21e630792302d1ce6500e346323aa376f22f`; purpose, inputs, controlled state, findings, outcome | P3 | MEDIUM | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0042` | `papers/axodus-architecture-paper/v0.6-scientific-revision-plan.md` | `NOT_DECLARED` | Scientific revision planning | Institutional paper line | None | None | `PAPER_ONLY` | None | Paper planning only | Not required for reference | Required before external use | `NO_CONFLICT` | blob `106ddc2d4c18156dcb2f99d43b255e0f5eb38087`; status, revision units, forbidden actions, verification | P3 | MEDIUM | Paper author/editorial authority | `PAPER_ONLY` | None | No intake |
| `INTAKE-EP4-0043` | `papers/axodus-architecture-paper/v0.6-think-in-coin-telegram-delivery-control-plan.md` | `NOT_DECLARED` | Delivery control | Institutional paper line | None | None | `PAPER_ONLY` | None | Separate delivery authorization required | Not required for reference | Required before external use | `NO_CONFLICT` | blob `d9b720d361c0f9e0df49846847339f3e8c510afe`; delivery purpose, channel controls, checks, incident procedure | P2 | HIGH | Paper author/editorial authority | `PAPER_ONLY` | None | No intake or delivery authorization |

## Disposition Reconciliation

```text
FREEZE_FOR_ALIGNMENT: 5
FREEZE_FOR_CONTROLLED_ABSORPTION: 3
REFERENCE_ONLY: 4
CONFLICT_REVIEW_REQUIRED: 1
PAPER_ONLY: 18
HISTORICAL_EVIDENCE_ONLY: 12
Total: 43
Undecided: 0
```

The historical v0.6 set is exactly candidates `0017`, `0018`, `0024`,
`0025`, `0026`, `0028`, `0032`, `0034`, `0035`, `0036`, `0037`, and `0038`.
The other 18 v0.6 candidates are paper-only.

## Freeze Statement

The candidate set is frozen at 43 rows. REQ-02 and REQ-03 may not add,
renumber, replace, or absorb a candidate silently. Any source revision change
invalidates the affected row until provenance and authority are revalidated.

## Gate Preservation

This request inventoried and reconciled cross-repository knowledge authority
between Documentation and Institutional and froze controlled intake
candidates only. It did not copy or absorb Institutional content, modify
papers or Institutional files, move or rename repository surfaces, alter
public navigation, expose private disclosure, create new claims, add
relationships, modify schemas or generator logic, enable production, activate
providers or exchanges, perform wallet signing, write contracts, perform
financial execution or open operational gates.
