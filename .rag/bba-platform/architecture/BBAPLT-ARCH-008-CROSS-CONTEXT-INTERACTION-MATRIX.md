---
schema_version: "1.0.0"
document_id: "BBAPLT-ARCH-008"
aliases: ["BBAPLT-ARC-008"]
document_type: "GUIDE"
title: "BBA Platform Cross-Context Interaction Matrix"
summary: "Maps semantic publication, consumption, consultation, and authority relationships across BBA Contexts."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-ARCH-007"}, {type: "RELATES_TO", target: "BBAPLT-ARCH-003"}]
related_epics: ["EPIC-003"]
related_requirements: ["REQ-003-02-002"]
related_adrs: ["BBA-ADR-0004"]
related_cores: ["Mission", "Institutional Asset", "AI Workforce", "Human Governance", "Workflow", "Connector"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Cross-Context Interaction Matrix

## Purpose and Scope

This matrix provides a canonical view of how the six certified Bounded Contexts
collaborate semantically. It records what a Context publishes, consumes, or
consults, and which Context or human governance role retains Institutional
Authority over the meaning and outcome.

The matrix describes logical relationships only. It does not define an API,
protocol, transport, runtime, persistence model, deployment topology, or
technical authorization mechanism.

## Matrix Legend

- **Published**: information or responsibility made available by its owning
  Context through a logical Interface.
- **Consumed**: information required by a Context to perform its bounded
  responsibility.
- **Consulted**: information examined for context, evidence, or constraint
  without transferring ownership.
- **Institutional Authority**: the competent human authority for a decision,
  approval, exception, or publication outcome.

## Context Interaction Matrix

| Context | Published | Consumed | Consulted | Institutional Authority |
| --- | --- | --- | --- | --- |
| Mission Context | Mission identity, purpose, objectives, scope, context, success intent, and outcome meaning | Governance decisions and Workflow progress | Asset lineage, Workforce responsibility, and external context when authorized | Mission Steward and competent human governance authority |
| Institutional Asset Context | Asset identity, classification, lineage, evidence, version meaning, representations, and publication readiness | Mission intent, accepted Deliverables, and Governance decisions | Workforce evidence, Workflow progress, and Connector context | Asset Steward and competent Asset authority; final institutional approval remains human |
| AI Workforce Context | Agent identity, Capabilities, Assignments, Deliverables, evidence, uncertainty, and limitations | Mission intent, Workflow coordination, Governance constraints, and Asset evidence | Published Mission context, existing Assets, and applicable review outcomes | Human Governance retains final authority over institutional decisions and acceptance |
| Human Governance Context | Authority, approval, review, delegation, escalation, accountability decisions, and governance constraints | Mission outcomes, Asset evidence, Workforce responsibility, and Workflow progress | Connector representations and external context within Trust and Tenant boundaries | Human Governance roles, Stewards, Approvers, and applicable governance authority |
| Workflow Coordination Context | Stages, transitions, guards, Assignment bindings, decision points, exception paths, progress, and completion meaning | Mission intent, Workforce responsibilities, Governance constraints, and Asset readiness | Evidence, lineage, and Connector participation context | Governance authority determines gates; Workflow cannot create authority |
| Connector Boundary Context | Approved external representations, translated external context, publication meaning, and lineage references | Asset publication readiness, Governance decisions, Mission outcomes, and Workflow progress | External consumer context and receiving Context declarations | Human Governance authorizes exposure; Connector never creates institutional authority |

## Relationship Coverage

The following relationships are mandatory semantic collaborations:

| Provider Context | Consumer Contexts | Published responsibility | Authority retained by |
| --- | --- | --- | --- |
| Mission | Workflow, AI Workforce, Asset, Human Governance, Connector | Mission identity, objectives, scope, context, and outcomes | Mission Steward and competent human authority |
| Institutional Asset | Mission, AI Workforce, Workflow, Human Governance, Connector | Asset identity, lineage, evidence, representations, and readiness | Asset Steward and human governance authority |
| AI Workforce | Mission, Asset, Workflow, Human Governance | Bounded responsibility, Assignments, Deliverables, evidence, and limitations | Assignment authority and Human Governance |
| Human Governance | Mission, Asset, AI Workforce, Workflow, Connector | Decisions, approvals, constraints, delegation, escalation, and accountability | Authorized human governance role |
| Workflow | Mission, AI Workforce, Asset, Human Governance, Connector | Coordination meaning, progress, stages, exceptions, and completion evidence | Human Governance for gates and decisions |
| Connector | Mission, Asset, Workflow, Human Governance, external consumers | Translated context and approved representations | Human Governance for institutional exposure |

## Consultation Does Not Transfer Ownership

Consultation is intentionally weaker than consumption. A Context may consult
evidence, lineage, constraints, or progress to make a bounded judgment without
becoming the Information Owner. No consultation changes Ownership, Stewardship,
Accountability, Institutional Authority, Asset identity, or Mission identity.

## Cross-Context Invariants

Every matrix relationship must preserve:

1. canonical Domain meaning and Architecture Glossary usage;
2. Information Owner, Steward, and Institutional Authority;
3. Mission context and Assignment scope;
4. Asset identity, version meaning, evidence, and Lineage;
5. Tenant Boundary and Trust Boundary;
6. human accountability for material institutional decisions;
7. the directional dependency rules in the Architecture Foundation.

## Deferred Technical Concerns

This matrix does not define how information is transported, serialized,
authenticated, authorized, persisted, executed, monitored, or deployed. Those
concerns remain outside the Logical Interfaces Sprint.
