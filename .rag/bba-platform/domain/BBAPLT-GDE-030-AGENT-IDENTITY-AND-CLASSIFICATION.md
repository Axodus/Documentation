---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-030"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Agent Identity and Classification"
summary: "Defines Agent as a stable functional and institutional identity independent of technical executors and separates role, capability, responsibility, and permission."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-029"}, {type: "RELATES_TO", target: "BBAPLT-GDE-024"}, {type: "RELATES_TO", target: "BBAPLT-GDE-025"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-03-002"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003"]
related_cores: ["Agent", "AI Workforce", "Capability", "Assignment", "Mission", "Tenant"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Agent Identity and Classification

## Purpose

Define what an Agent is in the domain and prevent functional identity from
being confused with a model, provider, runtime, or temporary execution.

## Agent Identity

An Agent is a stable functional and institutional identity that may assume
bounded responsibilities within Assignments. The identity represents what the
Agent is accountable to contribute, not how software performs the work.

Agent identity does not depend on:

* an AI model or model version;
* a provider, endpoint, API, or credential;
* a prompt, container, process, or runtime;
* a deployment, session, worker, or temporary execution instance;
* a file, configuration record, or technical secret.

```text
Agent: Research Analyst
Capability: Bibliographic Analysis
Assignment: Evaluate references for Mission M-001
Runtime executor: outside the scope of the domain
```

Replacing a model, provider, endpoint, prompt, process, or runtime executor
does not create a new Agent when functional identity, responsibility context,
and institutional purpose remain the same. A materially different purpose,
authority subject, or functional identity requires a new Agent and an explicit
relationship when relevant.

## Classification Dimensions

| Concept | Meaning | Does not mean |
| --- | --- | --- |
| Agent | Stable functional identity available to assume bounded work. | Model, process, service, or autonomous authority. |
| Role | Function assumed by an Agent in a Mission or Assignment context. | Permanent capability or permission. |
| Capability | Declared aptitude for a class of activity. | Permission, role, provider, or guarantee of success. |
| Responsibility | Work and accountability assigned in context. | General aptitude or final institutional authority. |
| Permission | Explicit authority granted by policy or delegation. | Capability, competence, or identity. |
| Assignment | Contextual binding of Agent, Mission, responsibility, scope, and expected results. | Runtime dispatch or technical job. |

One Agent may have multiple Capabilities and may assume different Roles in
different Missions. A Role may require several Capabilities, while a Capability
does not authorize an Agent to use itself outside an Assignment.

## Identity Continuity

Identity remains stable across changes to capabilities, roles, assignments,
quality expectations, representations of work, or technical executors when the
functional and institutional subject remains the same. Assignment history must
retain which Agent identity acted in which Mission context.

Identity is not inferred from a provider name, model name, endpoint, prompt
text, process identifier, credential, or execution trace.

## Authority Boundary

Agent identity does not grant institutional authority. Permission is separately
determined by Mission, Tenant policy, Assignment scope, delegation, and Human
Governance. No Agent may grant permission to itself, expand its own scope, or
convert Capability into authority.

## Deferred Questions

This document does not decide whether Agent later becomes an Aggregate Root,
how identity maps to technical executors, how Agent history is persisted, or
how capability discovery is implemented. Those questions remain explicit gaps
for later domain and architecture work.

## Technical Boundary

This document does not define model registries, provider adapters, prompt
stores, endpoint identifiers, containers, processes, credentials, databases,
APIs, runtime identities, or deployment semantics.
