# AXODUS KNOWLEDGE PACK
# DOMAIN: ACS
# TYPE: PUBLIC DOCUMENTATION DIRECTIVES

[AXODUS_ACS_PAGE_DIRECTIVES]

## 1. Purpose

This file gives direct instructions to Agent Coder for transforming the ACS knowledge pack into public documentation pages.

All public documentation must be written in English.

The pages should be clear, institutional, technically useful, and aligned with the current Axodus ecosystem model.

Avoid shallow AI hype. ACS must be documented as a controlled, auditable, AI-assisted coordination layer with strict authority boundaries.

## 2. Required Public Pages

required_pages:
  - docs/acs/overview.md
  - docs/acs/architecture.md
  - docs/acs/runtime.md
  - docs/acs/agent-roles.md
  - docs/acs/morpheus.md
  - docs/acs/trinity.md
  - docs/acs/agent-smith.md
  - docs/acs/governance-alignment.md
  - docs/acs/business-integration.md
  - docs/acs/tooling-and-mcp.md
  - docs/acs/memory-and-knowledge.md
  - docs/acs/security-and-risk.md
  - docs/acs/human-oversight.md
  - docs/acs/accountability.md

optional_pages:
  - docs/acs/reason-codes.md
  - docs/acs/agent-collaboration.md
  - docs/acs/permission-model.md
  - docs/acs/dreaming-and-assimilation.md
  - docs/acs/operational-logs.md

## 3. Standard Page Template

Every major ACS page should include:

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
  Owner: Axodus ACS

## 4. Page: ACS Overview

target:
  docs/acs/overview.md

must_include:
  - ACS means AI Coordination System.
  - ACS is the AI-assisted operational intelligence layer.
  - ACS supports Governance, Business, Academy, Trading, Treasury, Marketplace, Tokenomics, and Accountability.
  - ACS does not replace governance or human accountability.
  - Core archetypes: Morpheus, Trinity, Agent Smith.
  - ACS uses semantic memory, tools/MCPs, runtime workflows, and review boundaries.
  - ACS must be auditable, permissioned, and risk-aware.

must_not_include:
  - unrestricted autonomy claims
  - AI can govern alone
  - AI can execute treasury actions alone
  - AI can deploy contracts alone
  - AI as legal/security/audit replacement

## 5. Page: ACS Architecture

target:
  docs/acs/architecture.md

must_include:
  - agent identity layer
  - orchestration layer
  - knowledge layer
  - tool/MCP layer
  - review layer
  - execution handoff layer
  - audit layer
  - permission model
  - integration surfaces

diagram_recommended:
  - Request -> Context -> Agent Review -> Human/Governance Review -> Handoff -> Receipt/Memory

## 6. Page: ACS Runtime

target:
  docs/acs/runtime.md

must_include:
  - entry points
  - runtime stages
  - risk-based routing
  - output types
  - task statuses
  - completion criteria
  - human review and governance escalation

must_not_include:
  - claim full runtime is implemented unless verified

## 7. Page: Agent Roles

target:
  docs/acs/agent-roles.md

must_include:
  - Morpheus role
  - Trinity role
  - Agent Smith role
  - collaboration pattern
  - authority levels
  - task assignment
  - conflict resolution
  - output requirements

## 8. Page: Morpheus

target:
  docs/acs/morpheus.md

must_include:
  - strategic alignment
  - governance narrative
  - constitutional reasoning
  - documentation clarity
  - Business and Academy support
  - limitations

must_not_include:
  - Morpheus as final governance authority

## 9. Page: Trinity

target:
  docs/acs/trinity.md

must_include:
  - trading and financial intelligence
  - operational feasibility
  - PnL and risk support
  - API key safety
  - treasury and trading support
  - no guaranteed profit language

must_not_include:
  - Trinity as autonomous trader of user or treasury funds

## 10. Page: Agent Smith

target:
  docs/acs/agent-smith.md

must_include:
  - adversarial review
  - stress testing
  - abuse resistance
  - unsafe access friction
  - failure modes
  - reason codes
  - collaboration with Morpheus and Trinity

must_not_include:
  - Agent Smith as malicious actor
  - Agent Smith as final veto authority unless governance defines such role

## 11. Page: Governance Alignment

target:
  docs/acs/governance-alignment.md

must_include:
  - ACS supports governance
  - proposal summaries
  - risk classification
  - reason codes
  - constitutional review support
  - execution receipt drafting
  - governance remains final authority

## 12. Page: Business Integration

target:
  docs/acs/business-integration.md

must_include:
  - Business is major ACS consumer
  - request intake support
  - scope drafting
  - change request analysis
  - risk flags
  - governance escalation
  - authority boundaries

## 13. Page: Tooling and MCP

target:
  docs/acs/tooling-and-mcp.md

must_include:
  - MCPs and tools as capability surfaces
  - permission levels
  - least privilege
  - logs
  - revocation
  - prompt injection defense
  - prohibited defaults

must_not_include:
  - secrets
  - private endpoints
  - unsafe operational details
  - instructions for bypassing controls

## 14. Page: Memory and Knowledge

target:
  docs/acs/memory-and-knowledge.md

must_include:
  - `.knowledge` as semantic memory
  - difference between `.knowledge`, `/docs`, and `/Documents`
  - knowledge pack lifecycle
  - validation rules
  - dreaming/assimilation concept
  - why readable semantic memory is better than binary compression

## 15. Page: Security and Risk

target:
  docs/acs/security-and-risk.md

must_include:
  - prompt injection
  - tool abuse
  - permission overreach
  - data leakage
  - autonomous execution risk
  - governance bypass
  - treasury risk
  - memory contamination
  - security controls
  - sensitive actions

## 16. Page: Human Oversight

target:
  docs/acs/human-oversight.md

must_include:
  - human review
  - governance accountability
  - approval scopes
  - audit trail
  - role responsibility
  - AI output is advisory by default

## 17. Page: Accountability

target:
  docs/acs/accountability.md

must_include:
  - ACS output records
  - tool call logs
  - review records
  - execution handoff records
  - knowledge update records
  - relationship to governance execution receipts
  - public accountability when material

## 18. Cross-Linking Requirements

cross_links:
  acs_overview:
    link_to:
      - architecture
      - runtime
      - agent_roles
      - governance_alignment
      - business_integration
      - security_and_risk

  runtime:
    link_to:
      - human_oversight
      - governance_alignment
      - tooling_and_mcp

  agent_roles:
    link_to:
      - morpheus
      - trinity
      - agent_smith

  tooling_and_mcp:
    link_to:
      - security_and_risk
      - human_oversight

  memory_and_knowledge:
    link_to:
      - overview
      - architecture
      - documentation_standards_if_available

  governance_alignment:
    link_to:
      - governance_overview
      - proposal_lifecycle
      - execution_receipts

  business_integration:
    link_to:
      - business_overview
      - business_runtime
      - request_intake

## 19. Language Guardrails

use_language:
  - AI-assisted
  - advisory
  - reviewable
  - permissioned
  - scoped
  - auditable
  - human-reviewed
  - governance-aligned
  - designed to support
  - planned
  - experimental

avoid_language:
  - fully autonomous
  - replaces governance
  - guaranteed correct
  - self-governing AI
  - unrestricted tools
  - autonomous treasury
  - automatic contract deployment
  - trustless AI authority
  - no human needed

## 20. Definition of Done for ACS Docs

done_when:
  - all required pages exist
  - pages are written in English
  - ACS is clearly defined
  - agent roles are documented
  - runtime is documented
  - governance and Business relationships are documented
  - tooling and MCP risks are documented
  - memory and knowledge layer is documented
  - security risks and guardrails are documented
  - human oversight is explicit
  - no unsafe autonomy claims exist
  - navigation is updated
