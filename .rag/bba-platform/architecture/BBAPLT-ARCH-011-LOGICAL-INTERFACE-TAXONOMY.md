---
schema_version: "1.0.0"
document_id: "BBAPLT-ARCH-011"
aliases: ["BBAPLT-ARC-011"]
document_type: "GUIDE"
title: "BBA Platform Logical Interface Taxonomy"
summary: "Classifies logical Interfaces by semantic purpose, responsibility, limitations, and Context usage."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-ARCH-010"}, {type: "RELATES_TO", target: "BBAPLT-ARCH-006"}]
related_epics: ["EPIC-003"]
related_requirements: ["REQ-003-02-005"]
related_adrs: ["BBA-ADR-0004"]
related_cores: ["Mission", "Institutional Asset", "AI Workforce", "Human Governance", "Workflow", "Connector"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Logical Interface Taxonomy

## Purpose and Classification Rule

This taxonomy classifies Interfaces by semantic purpose. The categories are
conceptual categories, not technical patterns. A single Interface may have one
primary category and a secondary relationship, but it must retain one explicit
responsibility, Provider, Consumer, Information Owner, Institutional Authority,
Steward, and scope.

The taxonomy does not replace the Domain vocabulary. It describes how
Architecture participants collaborate around Domain meaning.

## Interface Categories

| Type | Purpose | Responsibilities | Limitations | Context Usage |
| --- | --- | --- | --- | --- |
| Command Interface | Express an intention for a bounded responsibility or decision to be considered | Carries semantic intent, declared scope, Mission context, constraints, and expected outcome | Does not execute by implication, grant authority, bypass a gate, or redefine a Rule or Policy | Mission to Workflow; Governance to Mission, Asset, Workforce, Workflow, and Connector |
| Query Interface | Make canonical information available for contextual understanding or evaluation | Provides identity, status meaning, evidence, lineage, constraints, or progress within scope | Does not alter information, transfer Ownership, or imply approval or authority | Asset to Workforce; Workflow to Mission; Governance consultation across Contexts |
| Publication Interface | Make an approved representation available to an intended consumer | Preserves Asset identity, approval context, publication scope, lineage, and accountability | Does not create approval, alter canonical meaning, or make an unapproved representation institutional | Asset and Human Governance to Connector; Connector to external consumers |
| Coordination Interface | Bind bounded responsibilities so a Mission can progress through semantic stages | Communicates Assignment binding, stages, transitions, guards, exceptions, and completion criteria | Does not own Mission, Asset, Authority, Accountability, or the meaning of coordinated Domain concepts | Workflow with Mission, AI Workforce, Asset, Human Governance, and Connector |
| Governance Interface | Express authority, review, approval, delegation, escalation, policy, and accountability | Makes human governance decisions and constraints explicit, attributable, scoped, and reviewable | Cannot be performed with final authority by an Agent, Component, Workflow, or Connector | Human Governance with every Context where institutional judgment is required |
| Knowledge Interface | Share evidence, provenance, references, uncertainty, assumptions, and reusable knowledge relationships | Preserves evidence quality, lineage, limitations, and semantic context | Does not replace Asset identity, create authority, or turn unverified information into approved institutional knowledge | Institutional Asset and Knowledge concerns with Workforce, Workflow, Governance, and Connector |

## Category Detail

### Command Interface

**Purpose:** communicate an intention to initiate, change, review, or consider a
bounded responsibility.

**Responsibilities:** identify the intended Domain subject, Mission context,
scope, expected outcome, relevant constraints, and required authority.

**Limitations:** an intention is not an accepted decision. The receiving Context
must apply its own Rules, Policies, Constraints, and governance gates.

**Context usage:** Mission intent, Workflow coordination, human governance
decisions, and Connector intake after semantic translation.

### Query Interface

**Purpose:** provide canonical information needed to understand a situation,
evaluate evidence, or coordinate a responsibility.

**Responsibilities:** preserve Information Owner, lineage, evidence,
uncertainty, and scope while making meaning available.

**Limitations:** consultation or consumption cannot alter the canonical source
or imply that the Consumer has authority to approve, publish, or archive.

**Context usage:** Asset evidence, Mission context, Workforce responsibility,
Workflow progress, and governance review.

### Publication Interface

**Purpose:** expose an approved representation to its declared consumers.

**Responsibilities:** preserve approval, publication scope, Asset identity,
representation meaning, lineage, and accountability.

**Limitations:** publication is not approval. A representation cannot become
institutional merely because a Consumer can see it.

**Context usage:** Institutional Asset and Human Governance collaboration with
Connector Boundary and external consumers.

### Coordination Interface

**Purpose:** coordinate work owned by multiple Contexts without merging their
semantic ownership.

**Responsibilities:** preserve stage meaning, Assignment binding, guards,
exceptions, dependencies, decision points, and completion criteria.

**Limitations:** coordination cannot change Domain Rules, remove governance
gates, or close a Mission or Asset without applicable authority.

**Context usage:** Workflow Coordination with Mission, AI Workforce,
Institutional Asset, Human Governance, and Connector Boundary.

### Governance Interface

**Purpose:** express a human decision or constraint that directs, approves,
restricts, escalates, or accounts for institutional work.

**Responsibilities:** identify the competent human authority, scope, delegation,
duration, evidence, rationale, and residual accountability.

**Limitations:** governance meaning cannot be generated by an Agent, inferred
from a Component, or expanded by a Consumer.

**Context usage:** Human Governance with all Contexts and any material Mission,
Asset, Workforce, Workflow, or Connector decision.

### Knowledge Interface

**Purpose:** share knowledge relationships and evidence that support a bounded
decision, transformation, review, or learning outcome.

**Responsibilities:** preserve provenance, uncertainty, assumptions, known
limitations, references, and relationship meaning.

**Limitations:** knowledge availability does not make a result authoritative,
approved, published, or owned by the Consumer.

**Context usage:** Institutional Asset, AI Workforce, Workflow, Human
Governance, and Connector collaboration.

## Cross-Category Rules

1. A category describes semantic purpose and cannot be used to infer a
   technical mechanism.
2. Every category preserves the Interface Invariants in `BBAPLT-ARCH-010`.
3. Governance Interface authority remains human and cannot be delegated to an
   Agent by category assignment.
4. Publication Interface responsibility requires an approved representation and
   does not alter canonical Asset identity.
5. Query and Knowledge Interfaces do not mutate ownership, lineage, or
   authority through consultation.
6. Command and Coordination Interfaces cannot remove required review or
   governance Constraints.
7. A new category requires Architecture Change Control and must explain why the
   existing taxonomy cannot represent the semantic need.

## Deferred Technical Concerns

This taxonomy does not define API styles, protocols, transport, message formats,
runtime behavior, persistence, deployment, infrastructure, authentication, or
technical authorization. It defines only logical Interface purpose and limits.
