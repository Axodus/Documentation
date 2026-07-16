---
schema_version: "1.0.0"
document_id: "DOC-RPT-213"
aliases: []
document_type: "REPORT"
title: "Documentation Status Taxonomy Review"
summary: "Reviews public badge semantics and identifies documentary states without visual representation."
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
related_requirements: ["DOCUMENTATION-UX-REQ-01"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-STATUS-TAXONOMY-REVIEW.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Status Taxonomy Review

## Result

`PASS_WITH_STATUS_TAXONOMY_REVIEW_FROZEN`

## Scope

The review covers all `269` public Markdown pages under `docs/` and the current
badge resolver introduced by `DOCUMENTATION-UX-SPRINT-01`. It changes no public
page, metadata field, schema, authority, maturity, or product claim.

## Current Badge Taxonomy

| Badge | Current interpretation | Dimension | Finding |
| --- | --- | --- | --- |
| `Draft` | Page under development | Documentary stage | Retain |
| `Planned` | Direction without confirmed implementation | Content posture | Retain |
| `Needs Review` | Review is required | Documentary stage | Rename to `Review Required` |
| `Prototype` | Experimental, not production-ready | Content posture | Retain |
| `Testnet` | Non-production environment only | Availability boundary | Retain |
| `Active if Verified` | Conditional on current evidence | Availability boundary | Retain with warning semantics |
| `Deprecated` | Not current guidance | Documentary lifecycle | Retain |

## Repository Metadata States

The governed schema supports publication states beyond the values currently
used by public pages.

| Source | Values present in `docs/` | Visual coverage before this sprint |
| --- | --- | --- |
| `publication_status` | `APPROVED` (84), `DRAFT` (8) | `DRAFT` only |
| `document_state` | `CURRENT` (92) | No direct mapping |
| `maturity_level` | `D2` (92) | No direct mapping by design |
| Legacy `Status:` | `Draft` (154), `Needs Review` (2), `Planned` (1), `Future` (1), `Conceptual` (1) | Three exact labels only |
| No status source | 19 section `README.md` pages | None |

## Missing Documentary Meanings

| Meaning | Required badge | Reason |
| --- | --- | --- |
| Approved current canonical page | `Canonical` | Publication approval must not imply operation or production |
| Section entry and navigation page | `Reference` | The page orients readers rather than declaring project maturity |
| Formally governed control surface | `Governed` | Available for future explicit classifications; never inferred from ownership alone |
| Conceptual line of record | `Baseline` | Distinguishes a governed concept from implementation state |
| Classification or content review required | `Review Required` | Canonical replacement for legacy `Needs Review` |
| Historical compatibility surface | `Legacy` | Retained without presenting it as current canonical guidance |

## Redundancy Decision

`Needs Review` and `Review Required` express the same documentary condition.
The definitive taxonomy should expose only `Review Required`; the resolver may
accept `Needs Review` as a legacy input alias.

`Approved` is not adopted as a badge because it repeats the schema field and
remains ambiguous to readers. `Canonical` communicates the intended public
meaning while remaining independent from implementation maturity.

## Boundary Rules

- A documentary badge does not state that a capability is implemented.
- `Canonical` means current official corpus, not production readiness.
- `Reference` means navigational or supporting function, not reduced authority.
- `Governed` requires an explicit future classification and is not inferred.
- `Baseline` identifies a conceptual line of record, not a deployed baseline.
- No badge grants authority, activation, financial enablement, or legal approval.

## Freeze

The review and gap analysis are frozen for `DOCUMENTATION-UX-REQ-02`. No public
classification changes are authorized by this report alone.
