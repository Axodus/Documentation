---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-027"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Institutional Asset Policies"
summary: "Defines policy areas that govern Asset editing, review, approval, publication, archival, delegation, reuse, and Tenant boundaries."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-026"}, {type: "RELATES_TO", target: "BBAPLT-GDE-024"}, {type: "RELATES_TO", target: "BBAPLT-GDE-011"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-010"]
related_adrs: ["BBA-ADR-0003"]
related_cores: ["Institutional Asset", "Tenant", "Steward", "Review", "Publication"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Institutional Asset Policies

## Purpose

Define the policy domains that apply the Asset rules to real governance
decisions. Policies may be stricter for a Tenant, Asset class, risk level, or
publication context, but they cannot weaken Core invariants.

## Policy Areas

| Policy | Governs |
| --- | --- |
| Editing | Who may propose changes, create versions, and record reasons. |
| Review | Required reviewers, independence, evidence, and review scope. |
| Approval | Authority required for a version, class, risk, or Mission outcome. |
| Publication | Audience, rights, destination, timing, and authorized release. |
| Archival | Retention rationale, inactive meaning, revival, and historical access. |
| Delegation | Scope, duration, accountability, conflict, and revocation. |
| Reuse | Derivation, attribution, permissions, lineage, and cross-context use. |
| Tenant Boundary | Ownership, visibility, authority, and permitted cross-Tenant relations. |

## Policy Precedence

Policies are evaluated in this order:

1. Core domain rules and constraints;
2. legal, rights, and institutional obligations applicable to the Tenant;
3. Tenant governance policy;
4. Asset-class and risk policy;
5. Mission-specific policy;
6. temporary delegated instruction within the authorized scope.

A lower-level policy cannot override a higher-level rule. Conflicting policies
are escalated to the responsible governance authority rather than resolved by
the executing agent.

## Human Governance

Agents may propose, draft, classify, transform, or prepare an Asset only within
their capability and delegated policy scope. A human Steward or designated
authority remains accountable for review, approval, publication, archival, and
material policy exceptions.

## Policy Lifecycle

Every policy has an owner, scope, effective meaning, review interval, and
retirement or replacement condition. A policy change does not rewrite prior
Asset history; historical decisions remain evaluated under the policy context
that governed them.

## Tenant-Neutral Core

The Core defines the concepts and minimum invariants. A Tenant may define
stricter publication, review, retention, rights, or delegation policies. Axodus
is one consumer context and does not receive special semantics in the Core.

## Technical Boundary

This document does not prescribe policy engines, configuration formats, feature
flags, authorization middleware, UI controls, or deployment-specific policy
distribution.
