---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-078"
aliases: []
document_type: "REFERENCE"
title: "BBA Platform Development Glossary and Taxonomy"
summary: "Defines canonical implementation vocabulary and taxonomies without redefining Domain or Architecture language."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DEVELOPMENT"
authority_level: "PROJECT"
author: "BBA Development Governance"
owner: "BBA Development Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Development Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-19"
last_updated: "2026-07-19"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-19"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-077"}, {type: "RELATES_TO", target: "BBAPLT-ARCH-006"}]
related_epics: ["EPIC-004"]
related_requirements: ["REQ-004-01-003"]
related_adrs: ["BBA-ADR-0004"]
related_cores: ["Module", "Component", "Contract", "Adapter", "Test", "Build", "Artifact"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Development Glossary and Taxonomy

## Boundary

This glossary defines implementation vocabulary. It must not redefine Mission,
Institutional Asset, Agent, Capability, Assignment, Steward, Authority,
Workflow, Connector, Tenant, Lineage, or other Domain terms. Architecture
terms remain governed by `BBAPLT-ARCH-006`.

## Canonical Terms

| Term | Definition | Not equivalent to |
| --- | --- | --- |
| Module | A cohesive implementation unit with an explicit responsibility and dependency boundary. | Bounded Context or Aggregate |
| Component | An implementation realization of an Architecture Component responsibility. | Domain entity or authority |
| Contract | An agreed technical shape and behavior for a declared interaction. | Domain Rule or Policy |
| Adapter | An implementation translation that protects a canonical contract from another representation. | Connector Domain meaning |
| Handler | An implementation entry point that validates and delegates a technical request. | Institutional decision-maker |
| Test | Executable evidence for an expected behavior, invariant, or quality property. | Approval or Review authority |
| Build | A reproducible transformation of source into a reviewable artifact. | Release or Publication |
| Artifact | A produced implementation output with provenance and intended use. | Institutional Asset by default |
| Runtime | The environment and behavior in which implementation executes. | Domain lifecycle state |
| Change Control | Governed evaluation of a proposed change to a certified or normative decision. | Unreviewed refactor |

## Implementation Taxonomy

- **Core realization:** directly implements a certified Domain responsibility.
- **Supporting realization:** supplies technical capabilities without owning
  Domain meaning.
- **Coordination realization:** implements Architecture Interaction or Workflow
  coordination while preserving authority boundaries.
- **Integration realization:** translates or transports a certified contract at
  an external boundary.
- **Governance realization:** enforces technical evidence, review, policy, or
  access obligations without becoming institutional Authority.
- **Evidence realization:** produces tests, traces, metrics, reports, or build
  results needed to establish quality and accountability.

## Naming and Usage Rules

1. Use the canonical Domain or Architecture term when referring to its
   meaning; add an implementation term only when the distinction matters.
2. Do not call a file, API response, module, or runtime object an
   Institutional Asset unless the Domain rules establish that identity.
3. Do not use `permission`, `role`, `handler`, or `service` as a synonym for
   Authority, Steward, Agent, or Context.
4. Every new implementation term requires a definition, owner, scope, and
   relationship to the relevant Architecture term.
