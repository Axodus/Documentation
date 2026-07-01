---
schema_version: "1.0.0"
document_id: "DOC-POL-001"
aliases: []
document_type: "POLICY"
title: "Documentation Authority Model"
summary: "Defines taxonomy, identifiers, logical authority, ownership, approval, and conflict resolution."
version: "1.0.0"
publication_status: "ACTIVE"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "QUARTERLY"
next_review: "2026-10-01"
supersedes: []
relationships: [{type: "REALIZES", target: "DOC-ADR-001"}, {type: "REALIZES", target: "DOC-ADR-017"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-001", "DOC-ADR-006", "DOC-ADR-009", "DOC-ADR-010", "DOC-ADR-012", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Authority Model

## Purpose

This document defines the official Axodus documentation taxonomy, identifier convention, logical authority model, ownership hierarchy, approval hierarchy, and conflict-resolution rules.

## Governing Principle

**Physical location SHALL NOT determine document authority.**

Authority is established by declared scope, authority level, accountable ownership, applicable review, explicit approval, lifecycle state, and supporting evidence. A path controls organization and potential publication exposure only.

This principle is governed architecturally by [DOC-ADR-017](../adr/DOC-ADR-017-LOGICAL-AUTHORITY-VS-PHYSICAL-LOCATION.md). Until the ADR baseline is approved, this specification and the ADR MUST be reviewed together.

## Official Document Taxonomy

| Type | Purpose and scope | Expected audience | Primary relationships |
|---|---|---|---|
| `ARCHITECTURE` | Describes system structure, boundaries, components, and cross-cutting design. | Architects, technical owners, reviewers | Addresses requirements; is governed by ADRs; informs specifications. |
| `REQUIREMENT` | States a verifiable need, constraint, or acceptance condition. | Requestors, owners, architects, implementers | Is addressed by ADRs and realized by specifications. |
| `ADR` | Records a significant architectural decision, rationale, alternatives, and consequences. | Owners, architects, reviewers, maintainers | Addresses requirements; governs specifications, policies, or standards. |
| `SPECIFICATION` | Defines detailed normative behavior, data, interfaces, or contracts. | Implementers, reviewers, testers | Realizes requirements and ADRs; may link implementation evidence. |
| `API` | Defines an interface contract, operations, schemas, errors, and compatibility. | API consumers, implementers, security reviewers | Realizes specifications; depends on architecture; is operated by runbooks. |
| `GUIDE` | Explains how to understand or use a capability without defining mandatory policy. | Users, contributors, operators | Documents authoritative sources; relates to APIs or references. |
| `RUNBOOK` | Defines a repeatable task and its checks, rollback, and escalation boundaries. | Authorized operators and reviewers | Operates an API, specification, component, or implementation reference. |
| `PLAYBOOK` | Defines coordinated response and decision guidance for a scenario. | Coordinators, responders, owners | Depends on policies; relates to runbooks and reports. |
| `POLICY` | Declares mandatory governance intent, responsibilities, and prohibitions. | Owners, approvers, governed participants | Governs standards, procedures, and scoped documents. |
| `STANDARD` | Defines mandatory, testable conventions or conformance requirements. | Authors, maintainers, reviewers | Realizes policy; governs specifications and procedures. |
| `PROCEDURE` | Defines an approved sequence of controlled actions. | Authorized practitioners and reviewers | Implements policy or standard; may depend on runbooks. |
| `REFERENCE` | Provides curated factual lookup material, catalogs, mappings, or terminology. | All documentation consumers | Documents sources and relates to governed documents. |
| `REPORT` | Preserves dated assessment, validation, audit, status, or closeout evidence. | Owners, reviewers, auditors | Validates or documents other artifacts; may support releases. |
| `RFC` | Requests structured review of a substantial design or policy change before decision. | Subject experts, owners, reviewers | Addresses requirements; may result in ADRs or proposals. |
| `PROPOSAL` | Presents a change for consideration before it becomes a requirement, decision, or policy. | Sponsors, owners, reviewers | May address requirements and lead to an RFC or ADR. |
| `MEETING` | Preserves agenda, minutes, actions, and decisions requiring formalization. | Participants and accountable owners | Relates to proposals, requirements, and formal follow-up records. |
| `ROADMAP` | Communicates intended sequencing, milestones, dependencies, and status boundaries. | Portfolio and project stakeholders | Depends on requirements; relates to releases and reports. |
| `RELEASE` | Records a controlled documentation release, included artifacts, evidence, and approvals. | Release owners, approvers, auditors | Delivers governed documents and references validation evidence. |
| `RESEARCH` | Records exploratory questions, evidence, analysis, limitations, and findings. | Researchers, architects, owners | Informs proposals, requirements, or ADRs but is non-authoritative by default. |

Document type defines purpose, not authority. A `REPORT` may carry portfolio evidence, while an unapproved `POLICY` remains non-active.

## Identifier Standard

### Canonical Form

```text
<SCOPE>-<TYPE>-<NNN>
```

- `SCOPE` is a registered uppercase alphanumeric code identifying the accountable domain.
- `TYPE` is the registered type code.
- `NNN` is a zero-padded decimal sequence of at least three digits.

Examples:

```text
DOC-ADR-017
DOC-SPEC-001
CORE-POL-002
DEX-REQ-010
CHAIN-ARCH-001
```

### Type Codes

| Document type | Code | Document type | Code |
|---|---:|---|---:|
| Architecture | `ARCH` | Requirement | `REQ` |
| ADR | `ADR` | Specification | `SPEC` |
| API | `API` | Guide | `GDE` |
| Runbook | `RUN` | Playbook | `PLAY` |
| Policy | `POL` | Standard | `STD` |
| Procedure | `PROC` | Reference | `REF` |
| Report | `RPT` | RFC | `RFC` |
| Proposal | `PROP` | Meeting | `MTG` |
| Roadmap | `ROAD` | Release | `REL` |
| Research | `RES` |  |  |

### Scope Rules

- Scope codes MUST be registered before use and MUST NOT contain the `-` separator.
- `DOC` is reserved for the Documentation Governance Framework.
- `CORE` is reserved for Axodus Core.
- Product or nucleus scopes use stable short codes such as `DEX`, `ACADEMY`, or `BBA`.
- A repository name MAY inform registration but does not automatically reserve a scope.
- Cross-portfolio artifacts SHOULD use the accountable portfolio scope selected by governance.

### Numbering and Reservation

- Numbering is monotonic within each `(SCOPE, TYPE)` pair.
- `000` is reserved and MUST NOT identify a normal document.
- An ID MAY be marked reserved before publication, but the reservation MUST have an accountable owner and MUST NOT be silently reassigned.
- Gaps are allowed. Numbers MUST NOT be renumbered to remove gaps.
- Concurrent allocation requires coordination by the owning scope until an approved registry exists.

### Aliases and Deprecated IDs

- Existing external or historical IDs are preserved in `aliases`.
- An alias MUST resolve to exactly one canonical ID.
- A deprecated ID remains permanently unavailable.
- Canonical IDs and aliases are compared case-sensitively but MUST use their registered casing.
- Filenames MAY change only under separately approved migration rules; canonical IDs remain stable.

### Immutability and Reuse

- A canonical ID MUST NOT change after assignment.
- A deleted, rejected, retracted, superseded, or archived ID MUST NOT be reused.
- Supersession creates a new canonical document and relation; it does not transfer the old ID.

## Authority Scope

`authority_scope` names the logical subject boundary to which claims apply.

Examples:

- `AXODUS` — portfolio-wide subject.
- `DOCUMENTATION` — Documentation nucleus.
- `DEX.ROUTER` — router module within the DEX scope.
- `MARKETPLACE.SETTLEMENT.RECEIPT` — a specific component boundary.

A document MUST NOT claim authority outside its declared scope. Multiple affected cores belong in `related_cores`; they do not broaden `authority_scope`.

## Authority Level

| Level | Meaning |
|---|---|
| `PORTFOLIO` | Applies across the Axodus portfolio within the declared subject scope. |
| `CORE` | Applies to one Axodus core or nucleus. |
| `PROJECT` | Applies to a bounded project or product initiative. |
| `MODULE` | Applies to a subsystem or module. |
| `COMPONENT` | Applies to a specific component, interface, or artifact. |

Authority level expresses breadth, not an unconditional precedence rank. A portfolio document cannot override a stricter local safety boundary, and a component document cannot redefine portfolio policy.

## Logical Authority

A claim has logical authority only when all of the following hold:

1. The document type is suitable for the claim.
2. The claim falls within `authority_scope` and `authority_level`.
3. The owner is accountable for that scope.
4. Required technical, business, security, and governance reviews are complete.
5. The approver has authority for the scope.
6. The lifecycle permits reliance on the document.
7. No stricter applicable safety boundary or approved decision conflicts with it.

`DRAFT`, `UNDER_REVIEW`, `EXPERIMENTAL`, and unreviewed legacy documents do not establish active normative authority.

## Physical Location

Paths communicate organization:

- `/docs` is the public VitePress source surface.
- `/governance`, `/adr`, `/requirements`, and related top-level directories organize governed records.
- `.instructions` contains operational documentation controls.
- `.knowledge` and historical locations may contain supporting context.

Location MAY impose stricter exposure rules, but it SHALL NOT create approval, ownership, maturity, or execution authority. Moving or copying a document SHALL NOT promote it.

## Ownership Hierarchy

| Role | Responsibility | May not infer |
|---|---|---|
| Author | Drafts the document and records sources. | Ownership or approval. |
| Maintainer | Keeps content current and coordinates review. | Semantic approval outside delegated authority. |
| Technical reviewer | Reviews technical correctness and feasibility. | Business, security, or portfolio approval. |
| Business reviewer | Reviews domain behavior and commitments. | Technical or security approval. |
| Security reviewer | Reviews security and execution-sensitive claims. | Product or financial execution authority. |
| Owner | Is accountable for correctness, scope, lifecycle, and remediation. | Approval above the owner's delegated scope. |
| Approver | Accepts the document for a defined scope and lifecycle transition. | Runtime or production authority not explicitly delegated. |

The owner is accountable; the maintainer is responsible for upkeep. One party MAY fill multiple roles only when the applicable governance permits it and separation-of-duty requirements are preserved.

## Approval Hierarchy

| Document impact | Minimum approval |
|---|---|
| Component or module documentation | Accountable component/module owner |
| Project or core normative documentation | Project/core owner plus required reviewers |
| Portfolio-wide policy or authority | Portfolio Coordinator and affected owners |
| Security, credentials, wallet, contract, or execution-sensitive claims | Scope approver plus Security Reviewer |
| Financial, treasury, settlement, payout, token, or regulated claims | Scope approver plus financial/compliance and governance review |
| Official publication | Documentation publication approver plus every applicable scope approval |

Documentation approval records claims; it does not authorize the underlying operation.

## Conflict Resolution

Conflicts MUST be resolved in this order:

1. Apply the stricter production, security, financial, legal, and execution boundary.
2. Confirm that each claim falls within the document's declared logical scope.
3. Prefer an applicable approved and current document over draft, obsolete, historical, experimental, or unreviewed material.
4. Prefer the accountable domain source for domain facts and the portfolio source for portfolio policy.
5. Apply an accepted ADR or requirement governing the same subject.
6. Prefer the newer applicable semantic version only when the documents share authority and scope.
7. Record unresolved conflicts in the Documentation Conflict Register and block promotion or publication.

Modification time, filename, directory depth, repository location, or public visibility MUST NOT resolve a conflict by themselves.

## Related Architectural Decisions

- [DOC-ADR-001 — Official Documentation Source](../adr/DOC-ADR-001-OFFICIAL-DOCUMENTATION-SOURCE.md)
- [DOC-ADR-006 — Documentation Conflict Resolution](../adr/DOC-ADR-006-DOCUMENTATION-CONFLICT-RESOLUTION.md)
- [DOC-ADR-009 — Official Repository Structure](../adr/DOC-ADR-009-OFFICIAL-REPOSITORY-STRUCTURE.md)
- [DOC-ADR-010 — Document Naming Convention](../adr/DOC-ADR-010-DOCUMENT-NAMING-CONVENTION.md)
- [DOC-ADR-012 — Documentation Hierarchy](../adr/DOC-ADR-012-DOCUMENTATION-HIERARCHY.md)
- [DOC-ADR-017 — Logical Authority versus Physical Location](../adr/DOC-ADR-017-LOGICAL-AUTHORITY-VS-PHYSICAL-LOCATION.md)

## Non-Execution Boundary

This model establishes documentary governance only. It does not enable publication, production, providers, credentials, wallets, contracts, databases, financial operations, or any runtime behavior.
