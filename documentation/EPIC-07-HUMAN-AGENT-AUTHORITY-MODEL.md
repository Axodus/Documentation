---
schema_version: "1.0.0"
document_id: "DOC-RPT-175"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Human and Agent Authority Model"
summary: "Freezes the division of responsibility among humans, Governance, Business, Runtime, Trinity, ACS, and automated executors."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_07"
authority_level: "PORTFOLIO"
author: "Axodus Documentation Core"
owner: "Axodus Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-15"
last_updated: "2026-07-15"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-07"]
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-04"]
related_adrs: []
related_cores: ["GOVERNANCE", "BUSINESS", "ACS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-07-HUMAN-AGENT-AUTHORITY-MODEL.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Human and Agent Authority Model

| Actor | May Do | Must Not Be Interpreted As |
| --- | --- | --- |
| Requester or participant | Provide goals, context, evidence, feedback, and acceptance within their scope. | Governance, technical, legal, or financial authority. |
| Business | Qualify, structure, plan, coordinate, track, validate, and prepare decision packages. | Autonomous Governance, Treasury, ACS provisioner, or unrestricted executor. |
| Trinity | Decompose goals, draft plans and estimates, identify dependencies, and assist operational reasoning. | Final approver, institutional decision-maker, autonomous project executor, or financial authority. |
| ACS | Analyze policy and risk, inspect state, produce alerts and receipts, recommend action, and represent local holds. | Unrestricted monitor, final veto authority, production enforcement, legal decision, or autonomous security actor. |
| Runtime | Record state, route handoffs, enforce represented local guards, and preserve receipts. | Source of institutional authority or proof of production activation. |
| Human domain reviewer | Validate evidence, assumptions, outputs, and domain-specific risk. | Authority beyond the assigned role. |
| Governance authority | Approve, reject, constrain, suspend, or reverse within formally activated scope. | Automatic technical execution or universal authority. |
| Treasury or financial authority | Decide and execute authorized financial actions through approved controls. | Business, agent, or product authority; current activation remains evidence-gated. |
| Security or incident authority | Contain, pause, investigate, and approve recovery within policy. | Legal, financial, or governance authority outside incident scope. |
| Automated executor | Perform a specifically authorized technical action and produce a receipt. | Independent intent, approval, or expansion of scope. |

## Agent Decision Contract

Every material agent output must include input scope, assumptions, evidence,
confidence or uncertainty, risks, recommended next step, review requirement,
prohibited interpretation, and provenance.

Agents cannot approve their own output, convert a recommendation into
authorization, access secrets by implication, or bypass a closed gate.

## ACS Block Semantics

`signal` means report a condition. `local hold` means a represented
workflow stops pending human disposition. `governed suspension` means an
authorized decision disables an action. `production enforcement` requires an
enabled control and explicit authority. These states are not interchangeable.
