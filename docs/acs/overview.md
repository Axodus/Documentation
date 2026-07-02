---
schema_version: "1.0.0"
document_id: "ACS-GDE-001"
aliases: []
document_type: "GUIDE"
title: "ACS Overview"
summary: "Provides the governed overview for ACS within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "ACS"
authority_level: "CORE"
author: "ACS Nucleus"
owner: "ACS Nucleus"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["ACS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/acs/overview.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# ACS Overview

---

## Purpose

ACS means AI Coordination System. It is the AI-assisted operational intelligence, analysis, orchestration, and support layer for Axodus.

## Scope

ACS supports request analysis, technical validation, governance pre-screening, risk classification, documentation generation, market analysis, operational monitoring, technical scoping, treasury and trading review support, knowledge continuity, and structured handoff to human operators.

ACS is not a chatbot layer, unrestricted autonomous executor, governance replacement, treasury controller, smart contract deployer, security auditor, legal reviewer, or final decision oracle.

## Ecosystem Role

ACS is the intelligence and automation support layer for Axodus. It helps Business, Governance, Trading, Treasury, Academy, Marketplace, Security, and Accountability produce reviewable analysis, but final authority remains with humans, governance processes, security controls, and documented operating policies.

## Responsibilities

- Support Business request analysis.
- Support Governance review.
- Assist Trading and Treasury monitoring.
- Help with documentation and reporting.
- Identify risks and incomplete assumptions.
- Support Academy, Marketplace, Tokenomics, Security, and Accountability review.
- Preserve operational context through semantic memory.
- Prepare reviewable outputs for humans and governance.

## Core Architecture

ACS should be understood as a layered system:

- Agent identity layer
- Orchestration layer
- Knowledge layer
- Tool and MCP layer
- Review layer
- Execution handoff layer
- Audit layer

See [ACS Architecture](architecture.md).

## Core Agent Archetypes

- [Morpheus](morpheus.md): strategy, narrative, governance alignment, and ecosystem coherence.
- [Trinity](trinity.md): trading, operations, execution intelligence, P&L review, and risk monitoring.
- [Agent Smith](agent-smith.md): adversarial intelligence, stress testing, abuse resistance, and unsafe-access friction.

## Authority Limit

ACS supports but does not replace governance, human review, security review, treasury accountability, or product ownership.

## Documentation Map

- [Architecture](architecture.md)
- [Agent Roles](agent-roles.md)
- [Runtime](runtime.md)
- [Governance Alignment](governance-alignment.md)
- [Business Integration](business-integration.md)
- [Tooling and MCP](tooling-and-mcp.md)
- [Memory and Knowledge](memory-and-knowledge.md)
- [Security and Risk](security-and-risk.md)
- [Risk Review](risk-review.md)
- [Human Oversight](human-oversight.md)
- [Accountability](accountability.md)

## Risk Considerations

ACS outputs may be incomplete, incorrect, biased, stale, or based on insufficient context. ACS must not be used to bypass governance approvals, security review, treasury controls, user consent, or human accountability.

## Current Status

ACS is documented as a draft operating model. Any automated tool access, memory updates, governance support, trading analysis, treasury support, or execution handoff must be validated against actual implementation and permissions before being described as active.
