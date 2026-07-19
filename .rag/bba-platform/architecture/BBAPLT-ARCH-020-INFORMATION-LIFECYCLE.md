---
schema_version: "1.0.0"
document_id: "BBAPLT-ARCH-020"
aliases: ["BBAPLT-ARC-020"]
document_type: "GUIDE"
title: "BBA Platform Information Lifecycle"
summary: "Defines the semantic states, transitions, entry criteria, exit criteria, and terminal meaning of canonical information."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.ARCHITECTURE"
authority_level: "PROJECT"
author: "BBA Architecture Governance"
owner: "BBA Architecture Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-19"
last_updated: "2026-07-19"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-19"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-ARCH-019"}, {type: "RELATES_TO", target: "BBAPLT-ARCH-016"}, {type: "RELATES_TO", target: "BBAPLT-ARCH-005"}]
related_epics: ["EPIC-003"]
related_requirements: ["REQ-003-04-003"]
related_adrs: ["BBA-ADR-0004"]
related_cores: ["Information Lifecycle", "Institutional Asset", "Mission", "Review", "Publication", "Human Governance", "Connector"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Information Lifecycle

## Purpose and Scope

This document defines how canonical information comes into scope, becomes
usable, is reviewed, approved, exposed, superseded, archived, or withdrawn.
The lifecycle is semantic: it describes meaning and authority, not physical
storage, retention software, synchronization, or transport.

The lifecycle applies to information objects with appropriate specialization.
An Institutional Asset, Mission Context, Governance Decision, Workflow
Progress record, and External Representation may use different transitions,
but none may bypass the ownership and authority rules defined in ARCH-019.

## Canonical Lifecycle States

| State | Meaning | May be consumed as authoritative meaning? |
| --- | --- | --- |
| Proposed | Information has been identified or suggested but is not yet accepted into active scope | No, except as explicitly marked proposal or evidence |
| Active | Information is current within its declared scope and may be used by authorized Consumers | Yes, within scope |
| Under Review | Information is being evaluated for quality, correctness, risk, or continued validity | Only with review status and limitations visible |
| Approved | A competent human authority accepted the applicable meaning or use | Yes, for the approved scope and purpose |
| Published | An approved representation is authorized for a declared audience or destination | Yes, as an approved representation; canonical ownership remains internal |
| Superseded | A later state or version replaces the information for future use while lineage remains preserved | Only for historical, lineage, or explicitly permitted comparison |
| Archived | Information is no longer active but is preserved for institutional, legal, evidentiary, or historical reasons | Only for permitted reference |
| Withdrawn | Information must no longer be relied on for its declared use because of error, risk, authority, or governance decision | No, except to understand the withdrawal and lineage |

States are semantic claims. They do not imply a file status, deployment state,
database state, or technical availability.

## Reference Lifecycle

```text
Proposed
   ↓ accepted into scope
Active
   ↓ material change, scheduled review, risk signal, or challenge
Under Review
   ├── accepted → Active
   ├── approved for governed use → Approved
   ├── replaced by later meaning → Superseded
   ├── retained without active use → Archived
   └── invalidated or restricted → Withdrawn

Approved
   ├── authorized representation → Published
   ├── changed meaning → Under Review
   ├── replaced → Superseded
   ├── retained historically → Archived
   └── invalidated or restricted → Withdrawn

Published
   ├── representation changed → Under Review or new Representation
   ├── replaced → Superseded
   ├── destination withdrawn → Archived or Withdrawn
   └── institutional decision invalidates use → Withdrawn
```

The reference lifecycle is not a mandatory fixed pipeline. Mission Policies,
Domain Rules, risk, and information classification determine which transitions
are permitted.

## Transition Contract

Every material transition identifies:

1. the Information Owner and affected object;
2. the current and target states;
3. the semantic reason and triggering evidence;
4. the responsible Steward;
5. the Institutional Authority when a gate requires human decision;
6. the impact on Mission context, Tenant Boundary, Lineage, and Consumers;
7. the expected postconditions and any limitations;
8. the conditions for reversal, supersession, archival, or withdrawal.

No transition may be justified solely by consumption, visibility, technical
availability, or a change of representation.

## Object-Specific Lifecycle Semantics

| Object | Active means | Approval means | Terminal or replacement meaning |
| --- | --- | --- | --- |
| Mission Context | Objective and scope are current for coordinated work | Human authority accepts direction or outcome | Completed, cancelled, or superseded Mission meaning remains traceable |
| Institutional Asset | Identity and current Version are valid within scope | Human authority accepts quality and permitted use | Superseded Versions or Archived Assets preserve identity and Lineage |
| Assignment | Responsibility is accepted within Mission scope | Deliverable acceptance or gate completion | Completed, rejected, cancelled, failed, or escalated with accountability |
| Governance Decision | Decision is in force for declared scope and duration | Authority has issued the institutional decision | Replaced, revoked, expired, or retired with reason and Lineage |
| Workflow Progress | Coordination is valid for the current Mission context | Applicable completion or gate is accepted | Completed, blocked, cancelled, or escalated; never silently reset |
| External Representation | Translation remains valid for declared external context | Human authority authorizes exposure when required | Withdrawn, replaced, or archived without changing canonical meaning |

## Entry Criteria

Information may enter Proposed or Active scope only when:

- its canonical identity and owning Context are known;
- its purpose, Mission or external context, and Tenant Boundary are declared;
- a Steward and applicable Accountability are identified;
- evidence, assumptions, uncertainty, and known limitations are represented;
- its classification and required Governance gates are known;
- relationships to source, derived, referenced, or superseded information are
  explicit when applicable.

## Exit Criteria

Information may leave a state only when:

- the transition is permitted by Rule and Policy;
- the reason, authority, and responsible Steward are recorded;
- Consumers can distinguish current, historical, restricted, and withdrawn
  meaning;
- identity and Lineage remain recoverable;
- impacted Missions, Assets, Workflows, Connectors, and Governance concerns
  have an explicit outcome;
- no transition creates authority that did not previously exist.

## Reversal and Exception Semantics

Reversal is a new governed transition, not an erasure of history. If a
withdrawn or superseded object becomes usable again, the responsible Context
must establish the evidence, review, authority, and scope for its reactivation.

An exception may pause, restrict, or redirect a lifecycle, but it cannot remove
Accountability, Tenant Boundary, Lineage, or a mandatory human gate. A blocked
transition remains visible as blocked until resolved, cancelled, escalated, or
replaced by an explicit decision.

## Lifecycle Invariants

1. A representation cannot become canonical merely by being published.
2. Approval is not inferred from Active, Published, or consumed status.
3. Supersession preserves the identity and Lineage of the replaced information.
4. Withdrawal prevents reliance for the withdrawn purpose but does not erase
   evidence or history.
5. Archive is not deletion and does not remove Accountability.
6. A new Version is required when Asset meaning changes; a new Representation
   alone does not create a new Asset.
7. Mission, Asset, Governance, Workflow, and Connector state changes remain
   authoritative in their own Contexts.
8. No lifecycle transition may bypass Human Governance where a Rule or Policy
   requires approval.

## Deferred Technical Concerns

This lifecycle does not define retention periods, deletion mechanisms,
databases, tables, schemas, files, storage, persistence, event processing,
queues, APIs, protocols, runtime, deployment, or infrastructure. Those are
separate implementation decisions.
