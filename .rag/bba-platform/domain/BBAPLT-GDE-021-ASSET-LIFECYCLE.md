---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-021"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Lifecycle"
summary: "Defines the domain lifecycle of an Institutional Asset from recognition through retention, archival, or supersession."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-020"}, {type: "RELATES_TO", target: "BBAPLT-GDE-019"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-004"]
related_adrs: []
related_cores: ["Institutional Asset", "Mission", "Review", "Publication"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Lifecycle

## Purpose

Define the meaning of each major stage in an Asset's institutional life. The
lifecycle describes domain responsibility and readiness, not a workflow engine
or storage state.

## Lifecycle Stages

```text
Proposed
  -> Produced
  -> Under Review
  -> Approved
  -> Published
  -> Archived
```

An Asset may also enter `Rejected` from review or approval, and may become
`Superseded` when a later Asset or version is formally designated as replacing
its institutional role. `Proposed` and `Rejected` can be revisited only under
the relevant governance policy; `Archived` is retained for historical meaning
and is not silently deleted.

## Stage Meaning

| Stage | Domain meaning |
| --- | --- |
| Proposed | A candidate Asset has been recognized but production is not complete. |
| Produced | A usable Asset version exists and awaits governance evaluation. |
| Under Review | An authorized review is evaluating quality, accuracy, rights, or risk. |
| Approved | Required governance authority has accepted the designated version. |
| Published | An approved version has been authorized for an identified audience or channel. |
| Archived | The Asset is retained for reference but is no longer active for new publication. |
| Superseded | The Asset's institutional role is replaced by a designated successor. |
| Rejected | The proposed result is not accepted for the current purpose. |

## Lifecycle Rules

1. An Asset must have a recognized identity and authority context before it is
   produced as a governed result.
2. Publication requires the appropriate approval and rights decisions.
3. A published Asset remains historically traceable even when superseded or
   archived.
4. Supersession identifies a relationship to a successor; it does not erase the
   prior Asset or its lineage.
5. Rejected work may be revised or abandoned according to policy, but rejection
   does not make an Asset's history disappear.
6. A lifecycle stage describes governance meaning and is distinct from a
   version's content snapshot.

## Retention and Existence

Archival preserves the Asset's identity, authority history, lineage, and
published meaning for the period required by policy. A domain decision to cease
retention is distinct from ordinary editing and must account for legal,
institutional, and Tenant obligations.

## Technical Boundary

This document does not define queues, jobs, database states, schedulers, API
transitions, deployment behavior, or storage deletion mechanisms.
