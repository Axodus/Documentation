---
schema_version: "1.0.0"
document_id: "BBAPLT-ARCH-006"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Architecture Glossary and Taxonomy"
summary: "Defines the canonical vocabulary and component taxonomy for the BBA logical Architecture Layer."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-ARCH-005"}, {type: "RELATES_TO", target: "BBAPLT-ARCH-001"}]
related_epics: ["EPIC-003"]
related_requirements: ["REQ-003-01-006"]
related_adrs: ["BBA-ADR-0004"]
related_cores: ["Mission", "Institutional Asset", "AI Workforce", "Human Governance", "Workflow", "Connector"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Architecture Glossary and Taxonomy

## Purpose

This Architecture Glossary establishes the canonical vocabulary used to
describe the BBA logical Architecture Layer. It supports consistent reasoning
about boundaries, responsibilities, relationships, and information flow before
implementation choices are made.

These are Architecture terms. They do not replace the certified Ubiquitous
Language or redefine Product and Domain concepts. When an Architecture term
refers to Mission, Institutional Asset, AI Workforce, Human Governance,
Workflow, or Connector, the certified Domain meaning remains authoritative.
The Architecture Glossary does not replace Domain language.

## Architecture Glossary

| Term | Canonical meaning | Boundary of meaning |
| --- | --- | --- |
| Component | A logical holder of an architectural responsibility aligned to one or more capabilities or domain responsibilities | A Component is not automatically a deployable unit, code package, team, or product |
| Context | A semantic and responsibility boundary in which a set of concepts is owned and interpreted consistently | A Context is not a process, database, application, or deployment boundary by implication |
| Boundary | A declared separation that protects ownership, meaning, authority, trust, or tenancy | A Boundary is logical until a later Architecture decision derives a technical realization |
| Interface | A logical point of interaction through which a Component or Context exposes an understood responsibility | An Interface describes meaning and responsibility, not a protocol or transport format |
| Dependency | A declared relationship in which one Component or Context relies on meaning, responsibility, or a contract owned elsewhere | A Dependency must be directional, explicit, and justified; it does not transfer ownership or authority |
| Contract | A shared semantic expectation about inputs, outputs, responsibility, invariants, and outcomes between architectural participants | A Contract is not an API specification, schema, protocol, or implementation artifact |
| Information Flow | The semantic movement and transformation of information, context, evidence, and accountability between responsibilities | Information Flow does not prescribe transport, persistence, or execution mechanisms |
| Capability Mapping | The traceable relationship between Product capabilities, Domain responsibilities, Contexts, Components, and later architectural decisions | A mapping does not authorize a Component to redefine the mapped capability |
| Responsibility | The architectural obligation assigned to a Component or Context | Responsibility is distinct from Domain Authority, Permission, Capability, Ownership, and Accountability |
| Coordination | The architectural arrangement of stages, assignments, transitions, decisions, and dependencies that enables bounded responsibilities to cooperate | Coordination does not own the meaning of coordinated concepts or grant institutional authority |
| Published Language | Canonical language intentionally exposed by an owning Context for downstream architectural participants | Published Language is semantic and must not be replaced by consumer-specific reinterpretation |
| Anti-Corruption Layer | A logical translation boundary that protects canonical domain meaning from an external or incompatible vocabulary | It preserves meaning and lineage; it is not an infrastructure adapter by definition |

## Interface Role Vocabulary

The following terms are canonical role qualifiers for logical interfaces:

| Term | Canonical meaning | Boundary of meaning |
| --- | --- | --- |
| Provider | The Context or Component that offers a defined semantic responsibility through an Interface | Provider status does not transfer ownership of every piece of information exchanged |
| Consumer | The Context or Component that uses a published responsibility within a declared scope | Consumer status does not grant authority to alter the Provider's canonical meaning |
| Information Owner | The role or Context accountable for the canonical meaning, lineage, and permitted alteration of information | Information Owner is distinct from technical custody or temporary representation |
| Institutional Authority | The human governance authority competent to decide, approve, or authorize an institutional outcome | Institutional Authority is never created by an Interface, Component, Agent, or Consumer |
| Steward | The human role responsible for continuous governance of a Mission, Asset, Context, or interface concern | Stewardship remains human and is distinct from execution, permission, or technical custody |

## Component Taxonomy

The taxonomy classifies logical responsibility holders. A Component may have a
primary classification and secondary relationships, but its primary ownership
must remain explicit.

| Taxonomy | Canonical purpose | Examples in the BBA logical model |
| --- | --- | --- |
| Core Components | Own durable business capabilities and central semantic responsibility | Mission Capability, Asset Capability, Workforce Capability |
| Supporting Components | Support a Core responsibility without owning its canonical meaning | Knowledge Support and supporting analytical concerns |
| Coordination Components | Coordinate bounded work, stages, assignments, decisions, and exceptions | Workflow Coordination |
| Integration Components | Protect and translate meaning at an external boundary | Connector Boundary and its logical Anti-Corruption Layer |
| Governance Components | Express authority, review, approval, delegation, escalation, and accountability obligations | Governance Capability |
| Knowledge Components | Organize evidence, references, provenance, lineage, and reusable knowledge relationships | Knowledge Support aligned with Institutional Assets |

## Taxonomy Rules

1. A Core Component owns a durable responsibility, not every concern that
   touches that responsibility.
2. A Supporting Component cannot silently become the canonical owner of a Core
   concept.
3. A Coordination Component binds responsibilities but does not redefine them.
4. An Integration Component protects the internal vocabulary from external
   vocabulary and cannot grant internal authority.
5. A Governance Component constrains and validates decisions but does not become
   the executor of operational work by implication.
6. A Knowledge Component preserves evidence and relationships without replacing
   Institutional Asset identity or lineage ownership.
7. One logical responsibility must have one explicit canonical owner unless a
   documented Partnership or shared responsibility is approved.
8. Taxonomy labels cannot be used to infer deployment topology, runtime
   ownership, infrastructure, or staffing structure.

## Forbidden Conflations

The following distinctions are normative for Architecture documentation:

- Component is not Context.
- Context is not a deployment unit.
- Interface is not an API.
- Contract is not a protocol or implementation schema.
- Dependency is not ownership and does not grant authority.
- Responsibility is not Authority, Permission, Capability, Ownership, or
  Accountability.
- Coordination is not execution ownership.
- Information Flow is not a transport mechanism.
- Integration Component is not an external system itself.
- Architecture taxonomy is not a replacement for the Domain taxonomy.

## Usage and Change Control

Future Architecture documents must use these terms consistently and identify
their owning Context, primary Component, dependency direction, and relevant
Product or Domain traceability. A proposed new term, changed definition, or
taxonomy change requires Architecture Change Control and must not silently
alter a certified Domain concept.

This Glossary does not define an API, runtime, deployment mechanism, storage
technology, framework, provider, protocol, or infrastructure design. Those
concerns remain outside the Architecture Foundation Sprint.
An Architecture Interface is not an API, not a runtime, and not a deployment mechanism.
