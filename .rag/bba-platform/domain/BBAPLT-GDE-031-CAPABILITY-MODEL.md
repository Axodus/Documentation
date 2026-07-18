---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-031"
aliases: []
document_type: "GUIDE"
title: "BBA Platform AI Workforce Capability Model"
summary: "Defines Capability as a declared aptitude with scope, evidence, quality expectations, and limitations, distinct from role and permission."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-030"}, {type: "RELATES_TO", target: "BBAPLT-GDE-003"}, {type: "RELATES_TO", target: "BBAPLT-GDE-018"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-03-003"]
related_adrs: []
related_cores: ["Capability", "Agent", "Role", "Responsibility", "Permission", "Assignment"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform AI Workforce Capability Model

## Capability Definition

A Capability is a declared aptitude to perform a class of activity within a
defined scope and quality expectation. It describes what an Agent may be able
to contribute; it does not by itself authorize the Agent to act.

Examples include bibliographic analysis, editorial drafting, translation,
fact checking, visual composition, data interpretation, quality assessment,
knowledge synthesis, and publication preparation.

## Capability Semantics

Every governed Capability should make its meaning clear through:

* activity or class of work;
* expected inputs and context;
* expected quality characteristics;
* evidence or demonstrated basis;
* known limitations and uncertainty;
* compatible Roles or Assignments;
* required review and escalation conditions.

No numeric score is required. A Capability may be qualitative, conditional, or
limited, provided that material limitations are visible to the responsible
Steward.

## Capability Boundaries

| Concept | Defines | Does not define |
| --- | --- | --- |
| Capability | Aptitude for a class of activity. | Permission or final authority. |
| Role | Function assumed in a context. | General aptitude. |
| Responsibility | Accountability for assigned work. | Capability breadth. |
| Permission | Explicit authority to act. | Competence or likelihood of success. |
| Assignment | Mission-bound work context. | Permanent capability ownership. |

An Agent may have multiple Capabilities. A Capability may be shared by many
Agents. A Role may require several Capabilities, and one Capability may support
several Roles, but neither relationship grants permission automatically.

## Capability and Assignment

Assignment determines whether a Capability is relevant and sufficient for a
Mission responsibility. A Capability mismatch must block or escalate the
Assignment rather than be silently compensated by assumed competence.

Capabilities may be combined for a Deliverable, but the Assignment must retain
which Agent and Capability contributed to the work and which limitations were
known at the time.

## Capability Evolution

Clarifying a Capability, adding evidence, narrowing scope, or recording a
limitation does not change Agent identity. A materially different aptitude or
institutional purpose may require a distinct Capability and explicit migration
or relationship guidance.

## Technical Boundary

This document does not define model benchmarks, provider metadata, embeddings,
registries, plugins, code modules, discovery indexes, numeric scoring systems,
APIs, or runtime capability negotiation.
