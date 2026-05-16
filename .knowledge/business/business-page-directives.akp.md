# AXODUS KNOWLEDGE PACK
# DOMAIN: BUSINESS
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_BUSINESS_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Business knowledge pack into public documentation pages.

All public documentation must be written in English.

The pages should be clear, institutional, operational, technically useful, and aligned with the current Axodus ecosystem model.

Avoid generic agency language. Business must be documented as a structured runtime that coordinates requests, services, DAOs, delivery, ACS, governance, BBA, and accountability.

## 2. Required Public Pages

required_pages:
  - docs/business/overview.md
  - docs/business/request-intake.md
  - docs/business/runtime.md
  - docs/business/service-catalog.md
  - docs/business/client-lifecycle.md
  - docs/business/delivery-lifecycle.md
  - docs/business/change-requests.md
  - docs/business/dao-service-requests.md
  - docs/business/plugin-requests.md
  - docs/business/bba.md
  - docs/business/acs-integration.md
  - docs/business/governance-alignment.md
  - docs/business/risk-and-compliance.md
  - docs/business/accountability.md

optional_pages:
  - docs/business/pricing-and-funding.md
  - docs/business/partner-programs.md
  - docs/business/templates.md
  - docs/business/status-model.md
  - docs/business/reason-codes.md

## 3. Standard Page Template

Every major Business page should include:

- Title
- Status
- Version
- Last Updated
- Owner
- Purpose
- Scope
- Overview
- Responsibilities or Model
- Workflow
- Governance Touchpoints
- Risk Considerations
- Current Status
- Future Work

recommended_header:
  Status: Draft
  Version: 0.1.0
  Last Updated: YYYY-MM-DD
  Owner: Axodus Business

## 4. Page: Business Overview

target:
  docs/business/overview.md

must_include:
  - Business is structured intake and delivery runtime.
  - Business receives client, DAO, partner, internal, product, BBA, ACS, Academy, Marketplace, and Trading requests.
  - Business transforms requests into scoped work.
  - Business coordinates with ACS.
  - Business routes governance-sensitive requests to Governance.
  - Business manages change requests and acceptance.
  - Business supports accountability.

must_not_include:
  - Business as generic sales department only
  - automatic acceptance of all requests
  - financial or token promises

## 5. Page: Request Intake

target:
  docs/business/request-intake.md

must_include:
  - intake purpose
  - requester types
  - required fields
  - classification dimensions
  - missing information patterns
  - risk flags
  - ACS support
  - intake outputs

must_state:
  - intake is not approval or delivery commitment

## 6. Page: Runtime

target:
  docs/business/runtime.md

must_include:
  - full lifecycle from intake to archive
  - runtime stages
  - statuses
  - decision gates
  - governance escalation triggers
  - ACS support
  - anti-patterns

## 7. Page: Service Catalog

target:
  docs/business/service-catalog.md

must_include:
  - governance services
  - development services
  - DAO services
  - Academy services
  - Marketplace services
  - Trading services
  - Treasury/Risk services
  - Tokenomics services
  - ACS services
  - BBA services
  - documentation services
  - guardrails

must_not_include:
  - final pricing unless defined
  - guaranteed outcomes

## 8. Page: Client Lifecycle

target:
  docs/business/client-lifecycle.md

must_include:
  - lifecycle from lead to closure
  - client types
  - qualification criteria
  - communication principles
  - red flags
  - acceptance criteria

## 9. Page: Delivery Lifecycle

target:
  docs/business/delivery-lifecycle.md

must_include:
  - delivery begins after approved scope
  - handoff
  - planning
  - implementation
  - review
  - milestone delivery
  - change request handling
  - final delivery
  - acceptance
  - archive
  - quality gates

## 10. Page: Change Requests

target:
  docs/business/change-requests.md

must_include:
  - change request definition
  - triggers
  - classification
  - fields
  - flow
  - impact assessment
  - decisions
  - governance triggers
  - anti-patterns

must_state:
  - new ideas after approval may require additional time, cost, resources, or governance review

## 11. Page: DAO Service Requests

target:
  docs/business/dao-service-requests.md

must_include:
  - DAOs and sub-DAOs can request services through Business
  - request types
  - DAO intake fields
  - DAO request flow
  - federation relationship
  - outputs
  - risk flags

## 12. Page: Plugin Requests

target:
  docs/business/plugin-requests.md

must_include:
  - plugin request types
  - intake fields
  - request flow
  - local/shared/global scope
  - review criteria
  - risk flags
  - Business boundaries
  - relationship with Governance and Security

## 13. Page: BBA

target:
  docs/business/bba.md

must_include:
  - BBA means Blockchain Business & Advertising
  - BBA is specialized blockchain-native business communication and advertising
  - positioning, campaign strategy, growth operations, AI-assisted advertising
  - claim review
  - metrics
  - ACS support
  - governance touchpoints
  - risks

must_not_include:
  - hype
  - token pump language
  - ROI guarantee
  - fake partnership/audit claims

## 14. Page: ACS Integration

target:
  docs/business/acs-integration.md

must_include:
  - Business as major ACS consumer
  - ACS support areas
  - flow
  - output types
  - agent roles
  - review requirements
  - boundaries

must_state:
  - ACS output is not a client commitment until reviewed

## 15. Page: Governance Alignment

target:
  docs/business/governance-alignment.md

must_include:
  - why Business must align with Governance
  - governance-sensitive request types
  - routing levels
  - constitutional alignment
  - governance outputs
  - reason codes
  - Business boundaries

## 16. Page: Risk and Compliance

target:
  docs/business/risk-and-compliance.md

must_include:
  - risk categories
  - compliance-oriented guardrails
  - risk review flow
  - risk severity
  - accountability records
  - required records by request type
  - incident types
  - anti-patterns

must_not_include:
  - legal advice
  - guaranteed compliance claims

## 17. Page: Accountability

target:
  docs/business/accountability.md

must_include:
  - intake records
  - scope records
  - governance review records
  - change request records
  - delivery records
  - acceptance records
  - reporting
  - archive
  - relationship to Governance Accountability

## 18. Cross-Linking Requirements

cross_links:
  business_overview:
    link_to:
      - request_intake
      - runtime
      - service_catalog
      - governance_alignment
      - acs_integration

  runtime:
    link_to:
      - request_intake
      - delivery_lifecycle
      - change_requests
      - accountability

  dao_service_requests:
    link_to:
      - plugin_requests
      - governance_alignment
      - governance_dao_federation

  plugin_requests:
    link_to:
      - governance_plugin_requests
      - security_smart_contract_security
      - ACS_security

  BBA:
    link_to:
      - ACS_integration
      - risk_and_compliance
      - Marketplace
      - Academy

  ACS_integration:
    link_to:
      - ACS_overview
      - ACS_runtime
      - ACS_security

  governance_alignment:
    link_to:
      - Governance_overview
      - DAO_federation
      - Proposal_lifecycle

## 19. Language Guardrails

use_language:
  - structured intake
  - scoped delivery
  - governance-sensitive
  - review required
  - planned
  - draft
  - subject to governance approval
  - subject to implementation validation
  - risk-aware
  - accountable delivery

avoid_language:
  - guaranteed
  - risk-free
  - profit
  - passive income
  - automatic approval
  - all requests accepted
  - legally compliant unless reviewed
  - audited unless verified
  - partnership unless confirmed
  - AI-approved as final

## 20. Definition of Done for Business Docs

done_when:
  - all required pages exist
  - pages are written in English
  - Business is clearly defined as structured runtime
  - intake and runtime are documented
  - service catalog is documented
  - client and delivery lifecycles are documented
  - change request system is documented
  - DAO and plugin request flows are documented
  - BBA is documented
  - ACS and governance relationships are documented
  - risk and accountability are documented
  - no unsafe financial token or legal claims exist
  - navigation is updated
