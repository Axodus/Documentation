---
schema_version: "1.0.0"
document_id: "DOC-RPT-078"
aliases: []
document_type: "REPORT"
title: "Cross-Repository Disclosure Boundary Alignment"
summary: "Aligns disclosure-boundary authority, precedence rules, and consumer behavior across Documentation and Institutional without expanding publication scope."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_04.INSTITUTIONAL_INTAKE"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
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
related_adrs: ["DOC-ADR-014", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Institutional", path: "governance/public-disclosure-boundary.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "governance/DOCUMENTATION-PUBLICATION-GOVERNANCE.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "institutional-disclosure/cross-core-disclosure-governance-standard.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Cross-Repository Disclosure Boundary Alignment

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-02
Cross-Repository Content Copy: NOT_AUTHORIZED
Institutional Mutation: NOT_AUTHORIZED
Paper Mutation: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
Governance Mechanics Public Merge: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Relationship Mutation: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This report aligns disclosure-boundary layers between Institutional and
Documentation. It defines precedence, ownership, and consumer rules so that
public visibility, publication eligibility, and private-boundary protection are
not conflated.

## Authority Sources

| Source | Scope |
|---|---|
| `../Institutional/governance/public-disclosure-boundary.md` | Institutional public and paper-facing conceptual disclosure |
| `governance/DOCUMENTATION-PUBLICATION-GOVERNANCE.md` | Documentation publication authority and release gates |
| `institutional-disclosure/cross-core-disclosure-matrix.md` | Private Track B/C disclosure ceilings |
| `institutional-disclosure/cross-core-disclosure-governance-standard.md` | Internal disclosure classification and change-control rules |

## Boundary Layers

| Layer | Meaning |
|---|---|
| Repository visibility | A file can be present in a repository path |
| Public source eligibility | A file can exist under a public source surface |
| Public inventory eligibility | A file can appear in generated public inventory |
| Public navigation eligibility | A file can appear in user-facing navigation |
| Public disclosure authorization | Exact wording is approved for public delivery |
| Institutional publication approval | Institutional source-specific approval for its public or paper targets |
| Paper inclusion | Wording is suitable for paper use |
| External delivery | Wording may be delivered outside repository context |
| Private Track B/C | Internal operational or economic detail prohibited from externalization |

## Repository Visibility

Repository presence is not publication authority.

- Institutional is intentionally public, but its public visibility does not
  grant Documentation publication authority.
- Documentation contains both public and private surfaces.
- `institutional-disclosure/` and `requests/` remain excluded from public
  generator outputs and public navigation.

## Public Source Eligibility

Content under `docs/` may be public-source eligible for Documentation, but it
still requires the Documentation publication pipeline and any domain review.

Institutional public governance or paper files remain public in their own
repository, but that status does not authorize copying or broader reuse inside
Documentation.

## Public Navigation Eligibility

Public navigation is stricter than source visibility. Generated inventory and
public navigation must not expose:

- private Track B/C paths;
- request artifacts;
- private legal or governance-review records; or
- controlled internal intake records.

## Public Disclosure Authorization

Documentation public disclosure requires:

- Documentation publication governance;
- exact source and target identification;
- applicable domain review; and
- compliance with the stricter of any overlapping Documentation or
  Institutional rule.

## Institutional Publication Approval

Institutional remains authoritative for its public institutional and paper
wording. Documentation may reference that authority, but may not inherit it.

## Paper Inclusion

Paper inclusion remains a distinct gate owned by Institutional paper authority.
Statements allowed in Institutional public context are not automatically
suitable for the paper. Statements allowed in Documentation are not
automatically suitable for the paper either.

## External Delivery

External delivery requires explicit authorization for the exact consumer
surface. Neither repository may treat internal intake or generated inventory as
external publication approval.

## Private Track B/C

Private Track B/C material remains controlled by Documentation private
governance. REQ-02 confirms:

- public Institutional governance wording remains public-scoped only;
- private Track B governance mechanics remain private;
- no cross-surface merge is authorized; and
- no private Track B detail may enter these alignment reports.

## Conflict Precedence

When multiple valid rules apply, the most restrictive rule prevails until an
explicit authority decision supersedes it.

## Approval Matrix

| Content class | Repository allowed | Public inventory allowed | Public navigation allowed | External delivery allowed | Paper use allowed | Approval owner | Most restrictive rule |
|---|---|---|---|---|---|---|---|
| Documentation canonical public page | Yes in Documentation | Yes when in public scope | Yes when separately routed | No by default | No by default | Documentation Core and domain owner | Documentation publication governance |
| Documentation generated inventory | Yes | Yes for public governed artifacts only | Not automatically | No | No | Documentation Core | Generated inventory is not publication approval |
| Institutional public governance page | Yes in Institutional | No automatic Documentation import | No automatic Documentation link | Only within Institutional's own approved scope | Conditional | Institutional authority | No cross-repository authority transfer |
| Institutional paper record | Yes in Institutional | No | No | No by default | Paper-line only | Institutional editorial authority | Paper gate remains separate |
| Documentation private Track B/C | Yes in Documentation private surfaces | No | No | No | No | Documentation private authority | Private ceiling always wins |
| Controlled metadata mirror | Conditional | Conditional if public-safe and separately authorized | No by default | No by default | Conditional | Scope-specific owner | Mirror never becomes source authority |
| Request or sprint artifact | Yes | No | No | No | No | Documentation Core | Request surfaces remain excluded |

## Prohibited Transitions

- Public repository presence -> publication approval
- Public inventory presence -> external delivery approval
- Institutional wording -> Documentation authority transfer
- Documentation public page -> paper eligibility
- Private Track B/C evidence -> public or paper disclosure
- Generated index entry -> safe navigation or marketing reuse

## Review Triggers

- New public claim or public release request
- New paper update request
- New cross-repository mirror proposal
- New private/public overlap finding
- New governance-mechanics wording touching public or private boundaries
- New legal, financial, or regulatory-sensitive wording

## Final Decision

```text
Knowledge family: public disclosure boundary
Consumer mode: DUAL_AUTHORITY_BY_SCOPE
Mirror scope: reference-only plus bounded decision metadata
Publication ceiling: the most restrictive applicable rule
REQ-03 release: NOT_RELEASED
```

No new publication path is authorized by this alignment.
