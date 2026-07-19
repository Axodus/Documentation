---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-065"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Connector Identity and Classification"
summary: "Defines canonical Connector identity and semantic classifications independent of technology, protocol, or external implementation."
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
created_date: "2026-07-19"
last_updated: "2026-07-19"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-19"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-064"}, {type: "RELATES_TO", target: "BBAPLT-GDE-013"}, {type: "RELATES_TO", target: "BBAPLT-GDE-065"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-06-002"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Connector", "Boundary Concept", "Inbound", "Outbound", "Bidirectional", "Human-mediated", "Automated", "Institutional", "Tenant", "Authority"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Connector Identity and Classification

## Canonical Identity

A Connector is a stable semantic relationship and boundary role between the
BBA Platform domain and an external context. Its identity is defined by the
institutional relationship, purpose, scope, Tenant context, and accountable
Stewardship that govern the exchange.

Connector identity does not depend on an external vendor, system name, URL,
endpoint, protocol, credential, API, process, container, model, or temporary
execution instance. Replacing an external representation or technical executor
does not by itself create a new Connector.

## Semantic Classifications

| Classification | Meaning |
| --- | --- |
| Inbound | Primarily receives external context, requests, evidence, or representations into a governed BBA context. |
| Outbound | Primarily provides BBA context, outcomes, or representations to an external context. |
| Bidirectional | Exchanges context in both directions while each direction remains bounded and governed. |
| Human-mediated | Requires a human role to interpret, authorize, translate, or complete a consequential exchange. |
| Automated | May perform a bounded exchange under an explicit Policy without acquiring institutional authority. |
| Institutional | Represents an enduring relationship with an external institution or ecosystem under explicit accountability. |

Classifications describe semantic roles and may coexist. They are not
protocols, deployment modes, trust scores, authentication types, or runtime
categories.

## Connector Identity Invariants

1. A Connector retains its canonical identity across representations, channels,
   executors, and external implementation changes when its institutional
   purpose and governed boundary remain the same.
2. A change in Tenant, purpose, accountable Stewardship, authority scope, or
   external relationship requires explicit reassessment and may constitute a
   different Connector.
3. Classification cannot enlarge the Connector's responsibility, authority,
   access to Assets, or Mission scope.
4. Connector identity does not become the identity of an external system,
   person, Agent, Asset, Mission, Workflow, or technical instance.
5. Historical exchanges, decisions, accountability, and Asset lineage remain
   attributable to the Connector identity that governed them.

## Human and Institutional Meaning

Human-mediated and Automated classifications describe how responsibility is
exercised, not whether human Authority exists. Institutional classification
requires explicit human Accountability and does not permit the Connector to
become an institution, Steward, Approver, or owner.

## Technical Boundary

This document does not define identifiers, schemas, endpoints, API contracts,
protocols, authentication, authorization, SDKs, integration adapters, runtime
instances, or provider selection. It defines canonical identity and semantic
classification only.
