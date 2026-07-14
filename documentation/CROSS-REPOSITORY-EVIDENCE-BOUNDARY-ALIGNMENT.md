---
schema_version: "1.0.0"
document_id: "DOC-RPT-079"
aliases: []
document_type: "REPORT"
title: "Cross-Repository Evidence Boundary Alignment"
summary: "Aligns evidence classes, provenance requirements, publicability rules, and consumer scope across Documentation and Institutional."
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
related_requirements: ["DOCUMENTATION-REORG-INTAKE-REQ-02"]
related_adrs: ["DOC-ADR-003", "DOC-ADR-008", "DOC-ADR-014", "DOC-ADR-016", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Institutional", path: "governance/evidence-boundaries.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Institutional", path: "governance/citation-policy.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/DOCUMENTATION-EVIDENCE-FRAMEWORK.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Cross-Repository Evidence Boundary Alignment

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-02
Cross-Repository Content Copy: NOT_AUTHORIZED
Institutional Mutation: NOT_AUTHORIZED
Paper Mutation: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Relationship Mutation: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This report aligns evidence classes and provenance rules between Documentation
and Institutional so that internal validation, public claim support, paper
review evidence, and private evidence are not mixed.

## Evidence Classes

| Evidence class | Core meaning |
|---|---|
| Technical evidence | Code, tests, generators, validators, implementation references |
| Architectural evidence | ADRs, design decisions, governed specifications, accepted reviews |
| Operational evidence | Runtime observations, execution records, environment-specific controls |
| Institutional evidence | Public or paper-oriented evidence controlled by Institutional |
| Academic evidence | Manuscript, review, editorial, and paper-readiness evidence |
| Private evidence | Track B/C internal records, sensitive controls, legal or security review inputs |
| Historical evidence | Preserved record of earlier states or prior decisions |
| Derived evidence | Generated summaries, reports, inventories, or transformed evidence snapshots |

## Authority Sources

| Class | Primary source of truth |
|---|---|
| Documentation validation and snapshot evidence | Documentation |
| Public institutional claim-evidence policy | Institutional |
| Paper and review evidence | Institutional paper line |
| Private Track B/C evidence | Documentation private governance |

## Provenance Requirements

| Evidence class | Minimum provenance |
|---|---|
| Technical evidence | repository, path, revision or commit, test or validator reference |
| Architectural evidence | document ID, approval or review state, declared scope |
| Operational evidence | source environment, capture method, time, review owner |
| Institutional evidence | Institutional revision, source path, claim or paper scope |
| Academic evidence | paper revision, reviewer or editorial state, gate state |
| Private evidence | source path, scope owner, disclosure class, access ceiling |
| Historical evidence | preserved source, historical state, reason for retention |
| Derived evidence | generating source set, generator version, deterministic rule |

## Technical Evidence

Documentation technical evidence proves repository-local conditions such as:

- schema validity;
- deterministic generation;
- relationship integrity; and
- test or build results.

It does not prove Institutional publication suitability or paper readiness.

## Architectural Evidence

Documentation ADRs and governed reports support internal repository decisions,
scope boundaries, and documentary lifecycle states. They do not automatically
verify external public claims.

## Operational Evidence

Operational evidence can exist in either repository, but it remains
scope-bound. Institutional operational statements require Institutional review.
Documentation private evidence stays private unless separately abstracted.

## Institutional Evidence

Institutional evidence supports bounded public institutional wording and paper
framing. It remains revision-bound to Institutional sources and cannot be
treated as Documentation-owned truth simply because it is consumed by a report.

## Academic Evidence

Academic evidence covers manuscript framing, editorial controls, readiness,
review packages, and paper-specific exclusions. It is not interchangeable with
Documentation validation evidence.

## Private Evidence

Private evidence includes Track B/C disclosures, private governance mechanics,
sensitive operational controls, and internal legal or security review material.
REQ-02 preserves the rule that private evidence cannot be promoted into public
or paper evidence through alignment.

## Historical Evidence

Historical evidence may be referenced for provenance or chronology, but not as
current approval or public-readiness proof.

## Derived Evidence

Generated reports, manifests, graphs, and inventories are derived evidence.
They summarize governed inputs but do not create new authority.

## Publicability Matrix

| Evidence class | Allowed consumers | Publicability | Citation requirement | Freshness rule | Conflict rule |
|---|---|---|---|---|---|
| Technical evidence | Documentation internal governance | Internal only unless separately summarized | Repository path and revision | Re-run on source change | New run supersedes old result |
| Architectural evidence | Documentation internal governance | Scope-dependent | Document ID and current lifecycle state | Review-cycle dependent | Use current authoritative record |
| Operational evidence | Scope owner, reviewers | Not public by default | Source and capture context | Event-driven | Use stricter disclosure ceiling |
| Institutional evidence | Institutional public and paper line | Source-specific only | Institutional path and revision | Revision-bound | Institutional source remains authoritative |
| Academic evidence | Institutional paper line | Paper-only unless separately abstracted | Paper path and revision | Review-gate dependent | Paper gate prevails |
| Private evidence | Private authorized reviewers | Never public without separate approval | Private source and owner only | Event-driven | Private ceiling always wins |
| Historical evidence | Internal reviewers | Historical only | Historical source and date | Immutable once recorded | Cannot override current authority |
| Derived evidence | Internal reviewers | Scope inherited from sources | Generator/source set attribution | Recompute on source change | Derived output never broadens source permissions |

## Citation Requirements

- Public or paper-facing evidence must retain Institutional attribution.
- Documentation-generated evidence must cite the local repository path and
  revision or execution context.
- Derived reports must identify their source set rather than presenting
  themselves as original evidence.

## Freshness and Review Rules

- Revision-pinned Institutional evidence becomes stale when the source revision
  changes.
- Documentation validation evidence becomes stale when inputs or generators
  change.
- Historical evidence never becomes current merely by being preserved.

## Conflict Resolution

1. Consumer scope decides the first authority route.
2. The stricter disclosure boundary prevails.
3. Private and paper-only evidence never become public evidence by transfer.
4. Intake metadata may point to evidence; it may not upgrade it.

## Final Decision

```text
Knowledge family: evidence boundary
Consumer mode: DUAL_AUTHORITY_BY_SCOPE
Documentation consumption: revision-pinned reference and bounded metadata only
Mirror scope: policy metadata only
REQ-03 release: NOT_RELEASED
```

No evidence class becomes globally portable through REQ-02.
