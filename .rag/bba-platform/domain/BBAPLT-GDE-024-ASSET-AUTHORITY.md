---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-024"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Authority"
summary: "Defines Ownership, Stewardship, Authorship, Custody, and action-specific authority for Institutional Assets."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-023"}, {type: "RELATES_TO", target: "BBAPLT-GDE-011"}, {type: "RELATES_TO", target: "BBAPLT-GDE-012"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-007"]
related_adrs: ["BBA-ADR-0003"]
related_cores: ["Institutional Asset", "Tenant", "Steward", "Human Governance"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Authority

## Purpose

Define who is accountable for an Asset and which authority is required for each
governance action. These roles may be held by different people, groups, Tenants,
or authorized agents under human governance.

## Four Distinct Responsibilities

| Responsibility | Meaning |
| --- | --- |
| Ownership | The institutional authority that holds the Asset's accountable interest and decides its permitted purpose. |
| Stewardship | The responsible governance role that maintains quality, meaning, review readiness, and policy compliance. |
| Authorship | The person, agent, or collective contribution responsible for producing or materially shaping content. |
| Custody | The role entrusted with preserving access, integrity, and retention of the governed Asset. |

Ownership is not authorship. Stewardship is not custody. A creator may author an
Asset without owning it, while a custodian may preserve it without authority to
change or publish it.

## Action Authority

| Action | Minimum accountable authority |
| --- | --- |
| Edit or create a new version | Authorized author or delegate within Stewardship policy. |
| Request review | Steward or authorized mission participant. |
| Review | Assigned reviewer with the required capability and independence. |
| Approve | Authority designated by the Asset's purpose, risk, and Tenant policy. |
| Publish | Publication authority after approval, rights, audience, and destination checks. |
| Archive | Steward or Owner-authorized role with retention rationale. |
| Supersede | Owner or delegated Steward with a designated successor and reason. |
| Change authority assignments | Owner or Tenant governance authority. |

No agent can gain authority merely by producing an Asset. Agent actions remain
within an explicitly delegated scope and require human governance at the gates
defined by policy.

## Delegation and Tenant Scope

Delegation must name the delegator, delegate, action scope, Asset or class scope,
start and end conditions, and revocation authority. Delegation cannot cross
Tenant boundaries unless an explicit governed relationship authorizes it.

When roles conflict, the narrower action authority and the higher-risk policy
control apply until a Steward or Owner resolves the conflict. All authority
changes preserve the prior accountability history.

## Authority Invariants

1. Every governed Asset has an Owner, Steward, Author context, and Custodian or
   an explicit reason why one role is not applicable.
2. Action authority is explicit; it is never inferred from file access.
3. Publication authority cannot bypass approval or rights requirements.
4. Custody does not imply permission to edit, approve, or publish.
5. Authority assignments do not change Asset identity or immutable version
   content.

## Technical Boundary

This document does not define IAM providers, roles tables, tokens, ACL syntax,
service accounts, API permissions, or storage ownership.
