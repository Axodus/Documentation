# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: ACS
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: ACS
  expanded_name: AI Coordination System
  role: AI_assisted_operational_intelligence_and_coordination_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - acs-core.akp.md
  - acs-architecture.akp.md
  - acs-runtime.akp.md
  - agent-roles.akp.md
  - morpheus.akp.md
  - trinity.akp.md
  - agent-smith.akp.md
  - governance-alignment.akp.md
  - business-integration.akp.md
  - tooling-and-mcp.akp.md
  - memory-and-knowledge.akp.md
  - security-and-risk.akp.md
  - human-oversight-and-accountability.akp.md
  - acs-page-directives.akp.md

semantic_domains:
  acs_identity:
    source_file: acs-core.akp.md
    concepts:
      - AI_coordination_system
      - advisory_intelligence
      - operational_support
      - agentic_runtime
      - human_governance_boundaries

  acs_architecture:
    source_file: acs-architecture.akp.md
    concepts:
      - agent_layer
      - runtime_layer
      - tool_layer
      - knowledge_layer
      - governance_layer
      - audit_layer

  runtime:
    source_file: acs-runtime.akp.md
    concepts:
      - intake
      - classification
      - analysis
      - risk_review
      - human_validation
      - governance_escalation
      - execution_handoff
      - receipt_and_archive

  agent_roles:
    source_file: agent-roles.akp.md
    concepts:
      - Morpheus
      - Trinity
      - Agent_Smith
      - role_boundaries
      - collaboration
      - conflict_resolution

  morpheus:
    source_file: morpheus.akp.md
    concepts:
      - strategy
      - narrative
      - governance_alignment
      - ecosystem_coherence

  trinity:
    source_file: trinity.akp.md
    concepts:
      - trading_operations
      - financial_review
      - PnL
      - execution_intelligence
      - risk_monitoring

  smith:
    source_file: agent-smith.akp.md
    concepts:
      - adversarial_review
      - stress_testing
      - abuse_resistance
      - unsafe_access_friction

  governance_alignment:
    source_file: governance-alignment.akp.md
    concepts:
      - constitutional_guardrails
      - proposal_review
      - governance_not_replaced
      - auditability

  business_integration:
    source_file: business-integration.akp.md
    concepts:
      - request_intake
      - scoping
      - classification
      - client_DAO_requests
      - change_requests

  tools_mcp:
    source_file: tooling-and-mcp.akp.md
    concepts:
      - MCP
      - tool_permission
      - connectors
      - scoped_execution
      - logs
      - revocation

  memory:
    source_file: memory-and-knowledge.akp.md
    concepts:
      - semantic_memory
      - knowledge_packs
      - dreaming
      - retrieval
      - documentation_alignment

  security:
    source_file: security-and-risk.akp.md
    concepts:
      - prompt_injection
      - tool_abuse
      - data_leakage
      - model_error
      - autonomous_execution_risk

  accountability:
    source_file: human-oversight-and-accountability.akp.md
    concepts:
      - human_validation
      - governance_accountability
      - execution_receipts
      - audit_trail
      - responsibility_boundaries

public_documentation_targets:
  overview:
    target: docs/acs/overview.md
    source_files:
      - acs-core.akp.md
      - acs-architecture.akp.md

  architecture:
    target: docs/acs/architecture.md
    source_files:
      - acs-architecture.akp.md
      - tooling-and-mcp.akp.md

  runtime:
    target: docs/acs/runtime.md
    source_files:
      - acs-runtime.akp.md
      - human-oversight-and-accountability.akp.md

  agent_roles:
    target: docs/acs/agent-roles.md
    source_files:
      - agent-roles.akp.md
      - morpheus.akp.md
      - trinity.akp.md
      - agent-smith.akp.md

  governance_alignment:
    target: docs/acs/governance-alignment.md
    source_files:
      - governance-alignment.akp.md
      - human-oversight-and-accountability.akp.md

  business_integration:
    target: docs/acs/business-integration.md
    source_files:
      - business-integration.akp.md
      - acs-runtime.akp.md

  tooling_and_mcp:
    target: docs/acs/tooling-and-mcp.md
    source_files:
      - tooling-and-mcp.akp.md
      - security-and-risk.akp.md

  memory_and_knowledge:
    target: docs/acs/memory-and-knowledge.md
    source_files:
      - memory-and-knowledge.akp.md

  security_and_risk:
    target: docs/acs/security-and-risk.md
    source_files:
      - security-and-risk.akp.md

global_invariants:
  - ACS_supports_but_does_not_replace_governance
  - agents_are_advisory_by_default
  - high_risk_actions_require_human_review
  - treasury_execution_requires_governance_controls
  - smart_contract_actions_require_security_review
  - tool_access_must_be_scoped_and_logged
  - knowledge_packs_are_semantic_memory_not_public_docs
  - ACS_outputs_require_traceability_when_used_for_material_decisions
  - all_public_docs_must_be_English
