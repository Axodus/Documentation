---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-022"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset State Model"
summary: "Defines canonical Asset states, transitions, guards, terminal meaning, supersession, and reopening boundaries."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOMAIN"
authority_level: "PROJECT"
author: "BBA Domain Governance"
owner: "BBA Domain Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Domain Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-18"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-021"}, {type: "RELATES_TO", target: "BBAPLT-GDE-019"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-005"]
related_adrs: []
related_cores: ["Institutional Asset", "Review", "Publication", "Steward"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset State Model

## Canonical States

The Asset state represents the domain's current governance position:

`PROPOSED`, `PRODUCED`, `UNDER_REVIEW`, `APPROVED`, `PUBLISHED`, `ARCHIVED`,
`SUPERSEDED`, and `REJECTED`.

This state is about the Asset and its governed role. The state of an individual
version is defined separately by Version Semantics.

## Transitions and Guards

| From | To | Required guard |
| --- | --- | --- |
| Proposed | Produced | A usable version and accountable authority exist. |
| Produced | Under Review | An authorized review scope is opened. |
| Under Review | Approved | Required reviewers accept the designated version. |
| Under Review | Rejected | An authorized reviewer records a rejection reason. |
| Approved | Published | Publication authority confirms audience, rights, and destination. |
| Published | Archived | Steward authorizes end of active publication. |
| Published | Superseded | A successor and replacement relationship are designated. |
| Rejected | Produced | Responsible authority authorizes a revised production attempt. |
| Archived | Under Review | Steward authorizes a material revival review. |

No transition may bypass the authority and review conditions applicable to the
destination state. Publication is never implied by production or approval.

## Terminal Meaning

`SUPERSEDED` and `ARCHIVED` are terminal for the Asset's current active role,
not deletion commands. A governed exception may reopen an Archived Asset for
review, but it must preserve its history and explain the reason. Superseded
identity remains historical and is not reused for unrelated work.

## Reopening

Reopening is a governance decision, not an edit in place. Reopening an Archived
Asset creates a new review context and normally a new version. A Superseded
Asset is not reopened to compete with its successor; a new related Asset is
created when the prior purpose must return in a materially different form.

## Invariants

1. Every state has a responsible authority.
2. Every transition records its reason and designated version in the domain
   record.
3. A state never changes the immutable content of an existing version.
4. A rejected or archived Asset remains traceable.
5. A published state requires approval and publication authority.

## Technical Boundary

This state model does not define a state machine library, database enum, event
bus, queue, API endpoint, retry behavior, or frontend workflow.
