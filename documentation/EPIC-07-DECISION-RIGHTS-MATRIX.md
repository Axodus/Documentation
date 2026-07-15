---
schema_version: "1.0.0"
document_id: "DOC-RPT-173"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Decision Rights Matrix"
summary: "Freezes proposal, review, approval, execution, observation, suspension, reversal, and receipt responsibilities for material Axodus decisions."
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
related_cores: ["GOVERNANCE", "BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-07-DECISION-RIGHTS-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Decision Rights Matrix

| Decision Class | Proposes | Reviews | Approves | Executes | Observes | May Block / Suspend | May Reverse | Required Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ordinary request intake | Participant or internal team | Business owner; Trinity/ACS may assist | Business process owner | Business runtime or assigned team when enabled | Requester, Runtime | Business owner for incompleteness or scope | Business process owner | Intake and classification record |
| Technical design or delivery | Business or product owner | Human technical, security, and domain reviewers | Accountable delivery owner; Governance if triggered | Authorized implementation team | Business, requester, Runtime | Security, Governance, or owner within scope | Authorized delivery owner | Scope, review, validation, and delivery receipt |
| Public documentation publication | Documentation owner | Technical, business, security, boundary reviewers | Documentation approver | Documentation maintainer | Public readers and Accountability | Security, legal, disclosure, or Documentation authority | Documentation authority | Publication decision and revision history |
| Product publication or listing | Business, product owner, or authorized tenant | Marketplace, ownership, quality, security, legal, and boundary reviewers as applicable | Product/listing authority defined for asset class | Marketplace operator only when enabled | Business, owner, Accountability | Marketplace, legal, security, Governance | Listing authority | Asset, ownership, release, listing, and removal records |
| Governance proposal | Participant, DAO, Business, or authorized nucleus | Governance roles, ACS advisory review, technical/domain reviewers | Authority defined by proposal scope | Authorized executor, not the voting mechanism itself | Community, Accountability | Constitutional, security, legal, or emergency authority | Authorized governance authority under policy | Proposal, decision, execution receipt |
| Treasury custody or movement | Authorized product or Treasury proposer | Treasury, Governance, security, risk, compliance | Explicit Treasury and governance authority | Authorized signer or executor only if enabled | Accountability and authorized oversight | Treasury risk, Security, Governance, emergency authority | Authorized Treasury/governance authority | Decision, signer, transaction, reconciliation, and report evidence |
| Token issuance or distribution | Academy, Tokenomics, Treasury, or Governance within scope | Tokenomics, Treasury, Governance, legal, security | Explicit economic and contract authority | Authorized contract/executor only if enabled | Accountability | Governance, Treasury, Security, legal | Authorized economic authority | Rule version, eligibility, authorization, execution, and supply record |
| Trading, Mining, DeFi, or DEX activation | Product owner | Risk, Security, Treasury, Governance, legal/compliance as applicable | Explicit product and financial authority | Authorized operator/provider only after gates open | ACS, Accountability, owners | Risk, Security, Treasury, Governance | Activating authority | Readiness, approval, configuration, execution, incident, and performance records |
| Lottery release or operation | Lottery owner | Legal, consumer protection, Security, Governance, Treasury, boundary reviewers | Explicit legal-safe and public-release authority | Authorized operator only after release | Accountability, Governance | Legal, Security, Governance, emergency authority | Release authority | Legal decision, game version, funding, draw, claim, incident, and suspension records |
| Runtime activation or provider enablement | Owning nucleus | Technical, Security, data, Governance, and provider reviewers | Explicit runtime/provider authority | Authorized operator | Runtime, ACS, Accountability | Security, owner, emergency authority | Activating authority | Readiness, config, approval, health, incident, rollback records |
| Security incident response | Reporter, monitor, ACS, operator | Security and affected owners | Incident authority for containment; Governance for broader decisions | Authorized responder | Accountability and affected authorities | Security or emergency authority within approved controls | Incident authority after recovery evidence | Incident, containment, evidence, decision, recovery, postmortem |

## Authority State

This matrix defines the required operating model. It does not assert that every
named authority, signer, executor, provider, or reversal mechanism is currently
activated.
