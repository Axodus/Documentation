# AXODUS KNOWLEDGE PACK
# DOMAIN: RUNTIME
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_RUNTIME_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the Runtime knowledge pack into public documentation pages.

All public documentation must be written in English.

The pages should be operational, clear, cross-linked, and useful for humans and agents.

Avoid vague process language. Runtime must be documented as the cross-nucleus operational lifecycle that turns requests into accountable outcomes.

## 2. Required Public Pages

required_pages:
  - docs/runtime/overview.md
  - docs/runtime/architecture.md
  - docs/runtime/request-lifecycle.md
  - docs/runtime/status-model.md
  - docs/runtime/validation-and-confirmation.md
  - docs/runtime/communication-cadence.md
  - docs/runtime/milestones.md
  - docs/runtime/change-control.md
  - docs/runtime/governance-escalation.md
  - docs/runtime/execution-handoff.md
  - docs/runtime/delays-and-blockers.md
  - docs/runtime/accountability-records.md
  - docs/runtime/risk-controls.md
  - docs/runtime/acs-integration.md

optional_pages:
  - docs/runtime/templates.md
  - docs/runtime/reason-codes.md
  - docs/runtime/review-gates.md
  - docs/runtime/operational-playbooks.md

## 3. Standard Page Template

Every major Runtime page should include:

- Title
- Status
- Version
- Last Updated
- Owner
- Purpose
- Scope
- Overview
- Model or Responsibilities
- Workflow
- Governance Touchpoints
- Risk Considerations
- Current Status
- Future Work

recommended_header:
  Status: Draft
  Version: 0.1.0
  Last Updated: YYYY-MM-DD
  Owner: Axodus Runtime

## 4. Page: Runtime Overview

target:
  docs/runtime/overview.md

must_include:
  - Runtime is the cross-nucleus operational lifecycle.
  - Runtime gives requests a beginning, middle, and end.
  - Runtime applies to Business, Governance, ACS, Academy, Trading, Treasury, Marketplace, BBA, and documentation.
  - Runtime uses statuses, owners, validation gates, scopes, milestones, change control, handoffs, acceptance, and accountability records.
  - ACS supports Runtime but does not replace human or governance authority.

must_not_include:
  - Runtime as a single UI only
  - Runtime as bureaucracy without purpose
  - full automation claims unless implemented

## 5. Page: Runtime Architecture

target:
  docs/runtime/architecture.md

must_include:
  - intake layer
  - context layer
  - classification layer
  - analysis layer
  - validation layer
  - governance layer
  - scoping layer
  - execution layer
  - monitoring layer
  - change control layer
  - acceptance layer
  - accountability layer
  - runtime data objects
  - integration surfaces

## 6. Page: Request Lifecycle

target:
  docs/runtime/request-lifecycle.md

must_include:
  - request sources
  - lifecycle stages
  - lifecycle variants
  - exit conditions
  - invariants

diagram_recommended:
  - Created -> Intake -> Classification -> Analysis -> Validation -> Governance Check -> Scope -> Approval -> Handoff -> Execution -> Delivery -> Acceptance -> Accountability -> Archive

## 7. Page: Status Model

target:
  docs/runtime/status-model.md

must_include:
  - core statuses and meanings
  - status fields
  - transition rules
  - anti-patterns
  - next action requirement

## 8. Page: Validation and Confirmation

target:
  docs/runtime/validation-and-confirmation.md

must_include:
  - difference between validation and confirmation
  - validation types
  - confirmation gates
  - confirmation record fields
  - who validates what
  - ACS limitation

## 9. Page: Communication Cadence

target:
  docs/runtime/communication-cadence.md

must_include:
  - communication types
  - cadence by risk level
  - status update format
  - delay notice format
  - communication principles
  - channels

must_state:
  - delays must include reason, impact, owner, and next step when material

## 10. Page: Milestones

target:
  docs/runtime/milestones.md

must_include:
  - milestone definition
  - deliverable definition
  - milestone types
  - deliverable types
  - record fields
  - statuses
  - quality gates

## 11. Page: Change Control

target:
  docs/runtime/change-control.md

must_include:
  - change control definition
  - change types
  - flow
  - record fields
  - impact assessment
  - decisions
  - governance-sensitive triggers
  - anti-patterns

must_state:
  - changes may affect timeline, resources, cost, risk, or governance review

## 12. Page: Governance Escalation

target:
  docs/runtime/governance-escalation.md

must_include:
  - governance-sensitive categories
  - escalation levels
  - escalation flow
  - record fields
  - decisions
  - reason codes
  - anti-patterns

## 13. Page: Execution Handoff

target:
  docs/runtime/execution-handoff.md

must_include:
  - handoff definition
  - handoff types
  - handoff package fields
  - Coder handoff requirements
  - governance/security/treasury handoff requirements
  - handoff acceptance
  - anti-patterns

## 14. Page: Delays and Blockers

target:
  docs/runtime/delays-and-blockers.md

must_include:
  - definitions
  - blocker types
  - blocker record fields
  - delay notice requirements
  - severity
  - resolution flow
  - escalation triggers
  - blocker statuses

## 15. Page: Accountability Records

target:
  docs/runtime/accountability-records.md

must_include:
  - accountability record types
  - minimum record fields
  - materiality levels
  - evidence types
  - archive rules
  - outputs by nucleus
  - anti-patterns

## 16. Page: Risk Controls

target:
  docs/runtime/risk-controls.md

must_include:
  - Runtime as risk control system
  - risk categories
  - controls by category
  - risk levels
  - control gates
  - anti-patterns

## 17. Page: ACS Integration

target:
  docs/runtime/acs-integration.md

must_include:
  - ACS support functions
  - ACS output statuses
  - review requirements by risk
  - agent role mapping
  - what ACS cannot do
  - ACS runtime record fields

## 18. Cross-Linking Requirements

cross_links:
  runtime_overview:
    link_to:
      - architecture
      - request_lifecycle
      - status_model
      - validation_and_confirmation
      - governance_escalation
      - accountability_records

  request_lifecycle:
    link_to:
      - status_model
      - change_control
      - execution_handoff
      - accountability_records

  communication_cadence:
    link_to:
      - delays_and_blockers
      - status_model
      - accountability_records

  governance_escalation:
    link_to:
      - Governance_overview
      - Proposal_lifecycle
      - Business_governance_alignment

  ACS_integration:
    link_to:
      - ACS_overview
      - ACS_runtime
      - ACS_security

  execution_handoff:
    link_to:
      - Business_delivery_lifecycle
      - Coder_instructions_if_available
      - Security_review

## 19. Language Guardrails

use_language:
  - runtime
  - lifecycle
  - validation
  - confirmation
  - status
  - owner
  - next action
  - scope
  - handoff
  - review gate
  - escalation
  - accountability record
  - subject to review
  - subject to governance approval
  - planned
  - draft
  - active

avoid_language:
  - automatic approval
  - no review needed
  - guaranteed delivery
  - fully autonomous execution
  - AI approved as final
  - informal agreement as final scope
  - governance bypass
  - silent change

## 20. Definition of Done for Runtime Docs

done_when:
  - all required pages exist
  - pages are written in English
  - Runtime is clearly defined as cross-nucleus lifecycle
  - statuses are documented
  - validation and confirmation are documented
  - communication cadence and delay handling are documented
  - milestones and deliverables are documented
  - change control is documented
  - governance escalation is documented
  - execution handoff is documented
  - accountability records are documented
  - ACS integration is documented
  - risk controls are documented
  - navigation is updated
