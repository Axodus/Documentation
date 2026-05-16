# AXODUS KNOWLEDGE PACK
# DOMAIN: GOVERNANCE
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_GOVERNANCE_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Governance knowledge pack into public documentation pages.

All public documentation must be written in English.

The pages should be clear, institutional, technically useful, and aligned with the current Axodus model.

Avoid shallow or generic DAO content. The Governance docs must reflect the specific Axodus architecture.

## 2. Required Public Pages

required_pages:
  - docs/governance/overview.md
  - docs/governance/constitutional-governance.md
  - docs/governance/executive-dao.md
  - docs/governance/boardroom-council.md
  - docs/governance/community-dao.md
  - docs/governance/dao-federation.md
  - docs/governance/proposal-lifecycle.md
  - docs/governance/plugin-requests.md
  - docs/governance/execution-receipts.md
  - docs/governance/governance-risk.md
  - docs/governance/accountability.md

optional_pages:
  - docs/governance/reason-codes.md
  - docs/governance/federation-registry.md
  - docs/governance/governance-status-model.md
  - docs/governance/governance-and-acs.md
  - docs/governance/governance-and-business.md

## 3. Standard Page Template

Every major Governance page should include:

- Title
- Status
- Version
- Last Updated
- Owner
- Purpose
- Scope
- Overview
- Responsibilities
- Workflow or Model
- Governance Touchpoints
- Risk Considerations
- Current Status
- Future Work

recommended_header:
  Status: Draft
  Version: 0.1.0
  Last Updated: YYYY-MM-DD
  Owner: Axodus Governance

## 4. Page: Governance Overview

target:
  docs/governance/overview.md

must_include:
  - Governance is the coordination heart of Axodus.
  - Axodus is a modular ecosystem, not a single product.
  - Governance coordinates DAOs, product nuclei, treasury, risk, and accountability.
  - Governance is layered: Executive DAO, Boardroom Council, Community DAO.
  - Governance supports DAO federation and constitutional alignment.
  - Governance works with Business and ACS.
  - Governance decisions require traceability.
  - Governance evolves as implementation matures.

must_not_include:
  - final voting thresholds unless verified
  - claims of fully deployed governance automation unless verified
  - marketing promises
  - guaranteed returns

## 5. Page: Constitutional Governance

target:
  docs/governance/constitutional-governance.md

must_include:
  - Definition of Constitution of Axodus.
  - Constitutional governance as shared principles and guardrails.
  - Local DAO autonomy under constraints.
  - Product access may require constitutional alignment.
  - Treasury, risk, transparency, and accountability guardrails.
  - ACS is advisory.
  - Alignment statuses can be Draft/Candidate/Aligned/Conditional/Suspended/Revoked as a proposed model.

must_mark_as_draft_if:
  - formal constitution file does not exist
  - alignment registry is not implemented
  - status system is not implemented

## 6. Page: Executive DAO

target:
  docs/governance/executive-dao.md

must_include:
  - Strategic coordination role.
  - Roadmap alignment.
  - Core development prioritization.
  - Proposal sponsorship.
  - Relationship with Boardroom and Community DAO.
  - Limitations: cannot bypass constitutional, treasury, security, or accountability requirements.

parameter_warning:
  - Do not claim final seat count or membership unless verified.
  - If referencing historical 5 representatives, mark it as a draft design reference.

## 7. Page: Boardroom Council

target:
  docs/governance/boardroom-council.md

must_include:
  - Supervisory layer.
  - Risk review.
  - Treasury oversight.
  - Constitutional validation.
  - Plugin and federation review.
  - Accountability expectations.

parameter_warning:
  - Do not claim 11 seats or 2.5 percent threshold as final unless verified.
  - If mentioned, mark as proposed historical planning.

## 8. Page: Community DAO

target:
  docs/governance/community-dao.md

must_include:
  - Public participation.
  - Community legitimacy.
  - Proposal discussion.
  - Voting and signaling.
  - Anti-capture considerations.
  - Possible quadratic voting if implemented or planned.

must_not_include:
  - claim quadratic voting is live unless verified.

## 9. Page: DAO Federation

target:
  docs/governance/dao-federation.md

must_include:
  - Federation thesis.
  - Hub-and-spoke model.
  - Constitutional root.
  - Local DAO autonomy.
  - Federation registry concept.
  - Product access logic.
  - DAO-specific plugins.
  - Business intake and governance review.

must_mark_as_planned_if:
  - registry is not implemented
  - product access gating is not implemented

## 10. Page: Proposal Lifecycle

target:
  docs/governance/proposal-lifecycle.md

must_include:
  - Proposals are structured decision objects.
  - Proposal types.
  - Required metadata.
  - Lifecycle from idea to archive.
  - Risk-based routing.
  - ACS analysis.
  - Execution receipt.
  - Accountability publication.

diagram_recommended:
  - Idea -> Intake -> Classification -> Review -> Vote -> Execution -> Receipt -> Accountability -> Archive

## 11. Page: Plugin Requests

target:
  docs/governance/plugin-requests.md

must_include:
  - Why plugins exist.
  - DAO-specific needs.
  - Custom voting plugin example.
  - Business as intake.
  - ACS as analysis.
  - Governance as approval.
  - Security review.
  - Plugin registry concept.
  - Local vs shared vs global scope.

must_not_include:
  - claim plugin exists in production unless verified.

## 12. Page: Execution Receipts

target:
  docs/governance/execution-receipts.md

must_include:
  - Governance does not end at vote.
  - Receipts link approval to execution.
  - On-chain and off-chain evidence.
  - Receipt metadata.
  - Statuses.
  - Relationship to accountability reports.

must_mark_as_design_requirement_if:
  - receipt system is not implemented.

## 13. Page: Governance Risk

target:
  docs/governance/governance-risk.md

must_include:
  - governance capture
  - treasury drain
  - malicious plugin
  - vague proposal
  - AI output abuse
  - registry spoofing
  - social engineering
  - risk-based review requirements
  - no guaranteed financial outcomes

## 14. Page: Governance Accountability

target:
  docs/governance/accountability.md

must_include:
  - governance records
  - proposal records
  - vote records
  - execution receipts
  - financial reporting relationship
  - release notes relationship
  - roadmap updates
  - public transparency

## 15. Cross-Linking Requirements

cross_links:
  governance_overview:
    link_to:
      - constitutional_governance
      - proposal_lifecycle
      - dao_federation
      - plugin_requests
      - governance_risk

  constitutional_governance:
    link_to:
      - dao_federation
      - governance_risk
      - accountability

  plugin_requests:
    link_to:
      - business_request_intake
      - ACS_overview
      - security_smart_contract_security

  proposal_lifecycle:
    link_to:
      - execution_receipts
      - accountability
      - treasury_policy

  governance_risk:
    link_to:
      - security
      - treasury
      - trading_risk
      - tokenomics

## 16. Language Guardrails

use_language:
  - "current design"
  - "planned"
  - "draft"
  - "requires review"
  - "may"
  - "should"
  - "must" only for principles and guardrails

avoid_language:
  - "guaranteed"
  - "risk-free"
  - "fully automated" unless verified
  - "legally compliant" unless legal review exists
  - "audited" unless audit exists
  - "deployed" unless deployment is verified

## 17. Definition of Done for Governance Docs

done_when:
  - all required pages exist
  - pages are written in English
  - pages reflect Axodus-specific governance model
  - pages distinguish planned vs active
  - governance layers are explained clearly
  - DAO federation is explained
  - proposal lifecycle is actionable
  - plugin request flow is documented
  - execution receipts and accountability are documented
  - risk language is present
  - no unrealistic financial or governance claims exist
  - navigation is updated
