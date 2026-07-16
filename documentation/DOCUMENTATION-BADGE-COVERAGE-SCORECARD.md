---
schema_version: "1.0.0"
document_id: "DOC-RPT-219"
aliases: []
document_type: "REPORT"
title: "Documentation Badge Coverage Scorecard"
summary: "Measures the public badge coverage delta achieved by Documentation UX Sprint 02."
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
related_requirements: ["DOCUMENTATION-UX-REQ-06"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-BADGE-COVERAGE-SCORECARD.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Badge Coverage Scorecard

## Coverage Delta

| Measure | Before | After | Delta |
| --- | ---: | ---: | ---: |
| Public pages | 269 | 269 | 0 |
| Pages with exactly one badge | 164 | 269 | +105 |
| Pages without a badge | 105 | 0 | -105 |
| Badge coverage | 60.97% | 100.00% | +39.03 points |
| Governed page-level decisions | 0 | 105 | +105 |
| Silent default classifications | 0 | 0 | 0 |

## Final Distribution

| Badge | Pages | Percent |
| --- | ---: | ---: |
| `Draft` | 161 | 59.85% |
| `Canonical` | 84 | 31.23% |
| `Reference` | 19 | 7.06% |
| `Planned` | 2 | 0.74% |
| `Review Required` | 2 | 0.74% |
| `Baseline` | 1 | 0.37% |
| **Total** | **269** | **100.00%** |

## Taxonomy Coverage

| Measure | Result |
| --- | --- |
| Definitive labels supported | 12 |
| Labels currently used by pages | 6 |
| Labels available without current page assignment | `Prototype`, `Testnet`, `Active if Verified`, `Deprecated`, `Governed`, `Legacy` |
| Redundant display labels | 0 |
| Operational or production labels | 0 |

Unused supported labels are not assigned merely to increase distribution. They
remain available only for future explicit, governed classifications.

## Safety Scorecard

| Check | Result |
| --- | --- |
| Maturity promotions | 0 |
| Operational promotions | 0 |
| Authority changes | 0 |
| Technical content rewrites | 0 |
| Schema changes | 0 |
| Generator logic changes | 0 |
| Relationship model changes | 0 |
| Private boundary changes | 0 |
| Financial gates opened | 0 |

## Final Position

`PASS_CLOSED_WITH_FULL_BADGE_COVERAGE`
