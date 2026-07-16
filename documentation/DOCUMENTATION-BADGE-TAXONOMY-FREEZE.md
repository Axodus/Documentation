---
schema_version: "1.0.0"
document_id: "DOC-RPT-216"
aliases: []
document_type: "REPORT"
title: "Documentation Badge Taxonomy Freeze"
summary: "Freezes the definitive public badge vocabulary and deterministic resolution rules."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.UX"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "VitePress Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-16"
last_updated: "2026-07-16"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: ["DOCUMENTATION-UX-REQ-02"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-BADGE-TAXONOMY-FREEZE.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Badge Taxonomy Freeze

## Result

`PASS_WITH_BADGE_TAXONOMY_FROZEN`

## Definitive Public Taxonomy

### Content Posture

| Badge | Meaning | Explicit non-meaning |
| --- | --- | --- |
| `Draft` | Page is under documentary development | Capability is active |
| `Planned` | Content describes direction or roadmap | Implementation is confirmed |
| `Prototype` | Content is limited to an experimental posture | Production readiness |
| `Testnet` | Content is bounded to non-production use | Mainnet or production activation |
| `Active if Verified` | Any active reading requires current external evidence | Unconditional active state |
| `Deprecated` | Page or subject must not guide current work | Deletion or loss of historical value |

### Documentary Posture

| Badge | Meaning | Explicit non-meaning |
| --- | --- | --- |
| `Canonical` | Current official page in the public corpus | Implemented, operational, production, or successful |
| `Reference` | Navigational or supporting page | Optional, orphaned, or low-authority content |
| `Governed` | Page is explicitly classified as a formal control surface | Governance activation or execution authority |
| `Baseline` | Page records a conceptual or documentary line of record | Deployed system baseline |
| `Review Required` | Classification or content requires review | Invalid or unsafe by default |
| `Legacy` | Page is retained for compatibility or history | Current canonical guidance |

## Removed Display Alias

`Needs Review` is removed from the display vocabulary because it duplicates
`Review Required`. The resolver must continue accepting `Needs Review` as an
input alias and render `Review Required`.

## Deterministic Resolution Order

1. Exact path classification frozen in the page status register.
2. Explicit legacy `Status:` value mapped through the frozen alias table.
3. Governed `publication_status` mapped without operational interpretation.
4. Governed documentary lifecycle state when an unambiguous mapping exists.
5. `NO_BADGE_WITH_REVIEW_WARNING` for new, conflicting, or unknown input.

No content scanning beyond the explicit legacy `Status:` declaration is
authorized. Directory name, prose, product claims, code, and maturity level are
not status evidence.

## Frozen Source Mappings

| Source | Display badge |
| --- | --- |
| `publication_status: DRAFT` | `Draft` |
| `publication_status: UNDER_REVIEW` | `Review Required` |
| `publication_status: APPROVED` with `document_state: CURRENT` | `Canonical` |
| `publication_status: ACTIVE` with `document_state: CURRENT` | `Canonical` |
| `publication_status: DEPRECATED` | `Deprecated` |
| `publication_status: SUPERSEDED`, `ARCHIVED`, or `RETRACTED` | `Legacy` |
| `document_state: OBSOLETE` or `HISTORICAL` without a stronger source | `Legacy` |
| Legacy `Draft` | `Draft` |
| Legacy `Planned` or `Future` | `Planned` |
| Legacy `Needs Review` or `Review Required` | `Review Required` |
| Legacy `Prototype` | `Prototype` |
| Legacy `Testnet` | `Testnet` |
| Legacy `Active if Verified` | `Active if Verified` |
| Legacy `Deprecated` | `Deprecated` |
| Legacy `Conceptual` | `Baseline` |
| Exact section index paths in REQ-03 | `Reference` |

## Non-Adopted Labels

| Candidate | Decision | Reason |
| --- | --- | --- |
| `Approved` | Not adopted | Ambiguous between editorial and operational approval |
| `Research` | Deferred | No current page-level source requires it |
| `Active Development` | Deferred | Could conflate documentary and implementation activity |
| `Operational` | Prohibited for this sprint | Requires operational evidence outside presentation scope |
| `Archived` | Represented as `Legacy` | Avoids redundant lifecycle badges |
| `Pending Classification` | Represented as `Review Required` | Avoids redundant review badges |

## Visual Semantics

- `Canonical`: teal, not unrestricted production green.
- `Reference`: neutral slate.
- `Governed`: blue.
- `Baseline`: restrained violet.
- `Review Required`: amber.
- `Legacy`: brown-gray.
- Every badge includes visible text and a non-color symbol.

## Freeze Boundary

This report authorizes page classification in REQ-03 and implementation in
REQ-04 only. It does not alter front matter, technical content, authority,
maturity, architecture, public boundaries, or operational gates.
