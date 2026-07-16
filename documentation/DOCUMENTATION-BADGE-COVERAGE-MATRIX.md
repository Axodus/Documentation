---
schema_version: "1.0.0"
document_id: "DOC-RPT-214"
aliases: []
document_type: "REPORT"
title: "Documentation Badge Coverage Matrix"
summary: "Freezes current public badge coverage and the classification groups requiring resolution."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-BADGE-COVERAGE-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Badge Coverage Matrix

## Baseline

| Measure | Count | Percent |
| --- | ---: | ---: |
| Public pages | 269 | 100.00% |
| Pages with a resolved badge | 164 | 60.97% |
| Pages without a resolved badge | 105 | 39.03% |

## Existing Resolved Coverage

| Badge | Pages | Source |
| --- | ---: | --- |
| `Draft` | 161 | Governed `DRAFT` or explicit legacy `Draft` |
| `Planned` | 1 | Explicit legacy `Planned` |
| `Needs Review` | 2 | Explicit legacy `Needs Review` |

## Unresolved Classification Groups

| Group | Pages | Current state | Candidate disposition |
| --- | ---: | --- | --- |
| A | 0 | No additional page already matches an existing badge exactly | None |
| B | 84 | `APPROVED/CURRENT/D2` | `Canonical` |
| C | 2 | Legacy `Future` and `Conceptual` | `Planned` and `Baseline` |
| D | 19 | Section `README.md` without status metadata | `Reference` by exact frozen path |

## Group D Finding

All 19 metadata-absent pages are section entry pages:

```text
docs/README.md
docs/academy/README.md
docs/accountability/README.md
docs/acs/README.md
docs/bba-agency/README.md
docs/business/README.md
docs/defi/README.md
docs/dex/README.md
docs/glossary/README.md
docs/governance/README.md
docs/lottery/README.md
docs/marketplace/README.md
docs/mining/README.md
docs/overview/README.md
docs/runtime/README.md
docs/security/README.md
docs/tokenomics/README.md
docs/trading/README.md
docs/treasury/README.md
```

Their missing badge does not establish orphanhood, redundancy, or reduced
authority. Their navigational role supports a `Reference` classification, but
the exact path list must be frozen before implementation.

## Target

```text
Classified pages: 269
Unclassified pages: 0
Silent defaults: 0
Runtime content inference: 0
```
