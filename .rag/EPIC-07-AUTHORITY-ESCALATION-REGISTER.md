---
schema_version: "1.0.0"
document_id: "DOC-RPT-174"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Authority and Escalation Register"
summary: "Freezes authority states, escalation triggers, fail-closed behavior, and evidence requirements for cross-core decisions."
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
related_cores: ["GOVERNANCE", "BUSINESS", "ACS", "TREASURY", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-07-AUTHORITY-ESCALATION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Authority and Escalation Register

## Authority States

| State | Meaning |
| --- | --- |
| `DEFINED_CONCEPTUAL` | Responsibility is modeled but active authority is not evidenced. |
| `REPRESENTED_IN_PROTOTYPE` | A local guard, role, signal, or contract represents the authority boundary. |
| `ACTIVE_IF_VERIFIED` | Public interpretation may become active only with independent current evidence. |
| `ACTIVE_AUTHORIZED` | A formal decision and enabled executor establish authority for a defined scope. |
| `SUSPENDED` | Previously authorized behavior is disabled pending review. |
| `BLOCKED` | Required authority or implementation is absent. |

## Escalation Paths

| Trigger | Initial Owner | Required Escalation | Fail-Closed State | Evidence Needed to Resume |
| --- | --- | --- | --- | --- |
| Incomplete or ambiguous demand | Business | Requester and accountable Business owner | `NEEDS_INFORMATION` | Corrected intake and confirmation |
| Agent uncertainty or unsupported claim | Requesting nucleus | Human domain reviewer | `HUMAN_REVIEW_REQUIRED` | Reviewed output and assumptions |
| Constitutional or cross-tenant impact | Owning nucleus | Governance authority | `GOVERNANCE_REVIEW_REQUIRED` | Scoped governance decision |
| Financial, custody, pricing, issuance, or distribution impact | Product owner | Treasury, Governance, risk, legal as applicable | `FINANCIAL_GATE_CLOSED` | Authority, policy, execution, and reconciliation evidence |
| Security-sensitive change or incident | Reporter or owner | Security and incident authority | `PAUSED_OR_CONTAINED` | Security decision and recovery validation |
| Personal or confidential data exposure | Data owner | Privacy/security/legal review | `ACCESS_RESTRICTED` | Containment, impact assessment, approval |
| Lottery or regulated-product implication | Product owner | Legal, consumer-protection, Governance, boundary review | `PUBLIC_RELEASE_BLOCKED` | Explicit legal-safe and publication decision |
| Provider, wallet, exchange, chain, or contract dependency | Runtime owner | Security, provider owner, Governance/Treasury when sensitive | `PROVIDER_GATE_CLOSED` | Readiness, credentials policy, approval, health evidence |
| Conflicting same-level authorities | Process owner | Higher or explicitly designated authority | `AUTHORITY_CONFLICT` | Recorded conflict resolution |
| Runtime failure or inconsistent state | Runtime owner | Technical owner, Security, affected authority | `PAUSED` | Incident evidence, state reconciliation, restart approval |
| ACS risk or local block signal | Owning operator | Human owner, Security, Governance or Treasury by scope | `LOCAL_HOLD` | Disposition record; production enforcement remains separate |

## DAO Layer Interpretation

- Community participation may propose, deliberate, and signal.
- Boardroom or council structures may coordinate and review within formally
  assigned scope.
- Executive or portfolio governance may approve portfolio-level actions only
  when its activation and scope are verified.
- No DAO name by itself proves current authority, quorum, execution, or legal
  effect.
