---
schema_version: "1.0.0"
document_id: "DOC-RPT-075"
aliases: []
document_type: "REPORT"
title: "Institutional Cross-Repository Risk Review"
summary: "Assesses authority, taxonomy, claims, terminology, disclosure, paper, provenance, licensing, and repository-identity risks for Institutional intake."
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

# Institutional Cross-Repository Risk Review

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-01
Cross-Repository Copy: NOT_AUTHORIZED
Controlled Absorption: NOT_AUTHORIZED
Authority Transfer: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Paper Mutation: NOT_AUTHORIZED
Generated Artifact Regeneration: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This report evaluates risks created by consuming knowledge across the
Documentation and Institutional repositories. It classifies the frozen
candidate set and defines mitigations for later alignment or absorption.

## Review Scope

The review covers repository identity, authority, maturity and development
taxonomies, disclosure and evidence boundaries, claims, terminology, citation
and IP rules, governance mechanics, paper readiness, provenance, historical
evidence, derived artifacts, public/private separation, and stale-source
behavior.

## Risk Model

| Level | Meaning | Required treatment |
|---|---|---|
| LOW | Bounded metadata or organizational risk with direct controls | Record and monitor |
| MEDIUM | Misclassification or stale-source risk with reversible impact | Named owner and validation gate |
| HIGH | Authority, disclosure, legal, IP, or semantic conflict | Dedicated alignment or review before intake |
| CRITICAL | Likely private leakage, unauthorized publication, or unbounded authority transfer | Block candidate; no freeze for absorption |

## Risk Register

| Risk ID | Risk | Level | Evidence | Affected candidates | Mitigation | Residual state |
|---|---|---|---|---|---|---|
| `XRISK-001` | Dual authority | HIGH | Both repositories contain governance, maturity, disclosure, and terminology controls | `0001`-`0005`, `0013` | Register authority by scope; no path-based precedence; joint conflict decision | OPEN_FOR_ALIGNMENT |
| `XRISK-002` | Taxonomy divergence | HIGH | Institutional D0-D5 measures implementation while Documentation schema D1-D4 measures document completeness | `0001`, `0004` | Create an explicit dimension and vocabulary crosswalk; reserve distinct field names | OPEN_FOR_ALIGNMENT |
| `XRISK-003` | Claim inconsistency | HIGH | Institutional has a public/paper claims ledger; Documentation lacks a canonical global equivalent | `0005`, `0007` | Intake metadata only after claim-level authority and publicability review | OPEN_FOR_ALIGNMENT |
| `XRISK-004` | Terminology conflict | HIGH | Public, paper, internal knowledge, and private vocabularies overlap | `0004`, `0007`, `0013` | Scope-qualified term map; most restrictive boundary; no silent replacement | OPEN_FOR_ALIGNMENT |
| `XRISK-005` | Paper/internal governance confusion | HIGH | Paper planning and readiness records can be mistaken for internal normative governance | `0008`, `0011`, `0014`-`0043` | Keep paper-only and historical dispositions; reference revision only | CONTROLLED |
| `XRISK-006` | Publication-state leakage | HIGH | Review-package readiness can be mistaken for publication authorization | `0011`, `0012`, `0020`-`0023`, `0029`, `0030`, `0039`, `0043` | Preserve external gates; never inherit status across repositories | CONTROLLED |
| `XRISK-007` | Private disclosure leakage | CRITICAL | Public governance abstractions overlap private Track B/C mechanics | `0002`, `0007`, `0013` | Block content copy; compare private surface only for conflict; require boundary scan | MITIGATED_BY_NO_COPY |
| `XRISK-008` | Legal or IP boundary conflict | HIGH | CC BY 4.0 excludes third-party quotations, metadata, marks, and unlicensed linked material | `0006`-`0010`, paper-line candidates | Preserve attribution, revision, change notice, and source-specific rights review | OPEN_FOR_FUTURE_REVIEW |
| `XRISK-009` | Citation-policy mismatch | MEDIUM | Documentation has minimal reference guidance; Institutional has paper-specific rules | `0009` | Consume by reference; define consumer rule in REQ-02 | OPEN_FOR_ALIGNMENT |
| `XRISK-010` | Stale mirror | HIGH | Frozen source may change after Documentation commit | All alignment or absorption candidates | Store commit and blob; event-driven review; stale state blocks reliance | CONTROLLED_BY_REVISION |
| `XRISK-011` | Uncontrolled copying | CRITICAL | Verbatim intake could transfer context, claims, or publication expectations | `0001`-`0013` | REQ-01 records metadata only; REQ-03 requires allowlisted units and diff review | MITIGATED_BY_SCOPE |
| `XRISK-012` | Loss of provenance | HIGH | Summaries without source revision could become independent claims | `0005`-`0008` | Commit plus blob hashes, attribution, source path, and non-authority disclaimer | CONTROLLED_BY_REGISTER |
| `XRISK-013` | Historical evidence misclassification | MEDIUM | Closed workstream records can look like current paper authority | `0017`, `0018`, `0024`-`0026`, `0028`, `0032`, `0034`-`0038` | `HISTORICAL_EVIDENCE_ONLY`; no current-governance promotion | CONTROLLED |
| `XRISK-014` | Case-sensitive repository ambiguity | LOW | Two spellings were observed | All | Canonicalize logical path to `../Institutional`; record same-inode proof | RESOLVED |
| `XRISK-015` | Derived artifact promotion | MEDIUM | Ignored PDFs and LaTeX auxiliaries exist in the paper tree | None; excluded group | Classify as `BUILD_OR_DERIVED_ARTIFACT`; exclude from register | RESOLVED |
| `XRISK-016` | Owner invention | HIGH | Institutional sources lack structured owner metadata | All | Use functional roles and require named-owner confirmation before authority transfer | OPEN_DEPENDENCY |

## Critical-Risk Treatment

No candidate with an unmitigated CRITICAL risk is frozen for absorption.
`XRISK-007` and `XRISK-011` are mitigated in REQ-01 by the no-copy rule,
private-path boundary scan, source-only inspection, and prohibition on
generated-output publication. If those controls fail, the result is `FAIL`,
not a review dependency.

## Candidate Risk Summary

| Disposition | Count | Maximum candidate risk | Readiness |
|---|---:|---|---|
| `FREEZE_FOR_ALIGNMENT` | 5 | HIGH | Eligible for REQ-02 only |
| `FREEZE_FOR_CONTROLLED_ABSORPTION` | 3 | HIGH | Eligible for REQ-03 planning after REQ-02 gates |
| `REFERENCE_ONLY` | 4 | HIGH | Reference metadata only |
| `CONFLICT_REVIEW_REQUIRED` | 1 | HIGH | Blocked pending governance/private-boundary reconciliation |
| `PAPER_ONLY` | 18 | HIGH | Excluded from Documentation intake |
| `HISTORICAL_EVIDENCE_ONLY` | 12 | MEDIUM | Retained in Institutional only |

## Boundary Assessment

- No Institutional file is a private Documentation target.
- No private Track B/C content is evidence for an intake candidate.
- The governance-mechanics candidate is blocked from absorption because the
  public stub and private operational baseline have different scopes.
- Paper and public Institutional evidence cannot authorize Documentation
  publication or operational claims.
- Documentation intake cannot change the source's publication status.

## Mitigations for REQ-02

REQ-02 must:

1. name each taxonomy dimension explicitly;
2. map disclosure and evidence rules by consumer surface;
3. define claim and terminology authority without copying records;
4. confirm functional owners or record unresolved ownership;
5. preserve paper readiness and citation/IP policy as reference-only;
6. produce a conflict register before any absorption request.

## Mitigations for REQ-03

REQ-03 must:

1. accept only the frozen `0006`, `0007`, and `0008` candidates plus any
   candidate explicitly promoted by REQ-02;
2. define exact allowed metadata or abstract units;
3. retain source commit, blob, attribution, change notice, and non-authority
   disclaimer;
4. scan for paper-only, private, third-party, financial, operational, and
   publication-state leakage;
5. provide per-candidate rollback and stale-source handling;
6. regenerate only under separate authorization.

## Final Verdict

```text
Repository Identity: RESOLVED
Candidate Set: BOUNDED
Unmitigated Critical Candidates Frozen: 0
Alignment Candidates: 5
Controlled Absorption Candidates: 3
Conflict Review Dependencies: 1
Paper/Historical Exclusions: 30
REQ-01 Risk Verdict: PASS_WITH_CONTROLLED_FUTURE_DEPENDENCIES
```

## Gate Preservation

This request inventoried and reconciled cross-repository knowledge authority
between Documentation and Institutional and froze controlled intake
candidates only. It did not copy or absorb Institutional content, modify
papers or Institutional files, move or rename repository surfaces, alter
public navigation, expose private disclosure, create new claims, add
relationships, modify schemas or generator logic, enable production, activate
providers or exchanges, perform wallet signing, write contracts, perform
financial execution or open operational gates.
