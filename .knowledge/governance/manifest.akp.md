# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: GOVERNANCE
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Governance
  role: ecosystem coordination heart
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - core-governance.akp.md
  - governance-layers.akp.md
  - constitutional-governance.akp.md
  - dao-federation.akp.md
  - proposal-lifecycle.akp.md
  - plugin-request-system.akp.md
  - execution-receipts.akp.md
  - governance-business-acs-relations.akp.md
  - treasury-risk-accountability.akp.md
  - governance-page-directives.akp.md

semantic_domains:
  governance_identity:
    source_file: core-governance.akp.md
    concepts:
      - governance_as_coordination_core
      - governance_as_operating_system
      - governance_as_constitutional_layer
      - governance_as_federation_authority

  governance_layers:
    source_file: governance-layers.akp.md
    concepts:
      - Executive_DAO
      - Boardroom_Council
      - Community_DAO
      - layered_validation
      - strategic_supervision
      - public_legitimacy

  constitutional_model:
    source_file: constitutional-governance.akp.md
    concepts:
      - Constitution_of_Axodus
      - constitutional_guardrails
      - local_autonomy_under_constraints
      - ecosystem_values
      - restricted_actions
      - escalation

  federation_model:
    source_file: dao-federation.akp.md
    concepts:
      - hub_and_spoke
      - local_DAO
      - federated_DAO
      - canonical_governance_state
      - product_access_state
      - registry_based_coordination

  proposal_runtime:
    source_file: proposal-lifecycle.akp.md
    concepts:
      - intake
      - classification
      - validation
      - voting
      - execution
      - receipt
      - reporting

  plugin_system:
    source_file: plugin-request-system.akp.md
    concepts:
      - custom_voting_plugins
      - DAO_specific_extensions
      - Harmony_RP_voting_example
      - Business_intake
      - ACS_analysis
      - governance_approval

  execution_accountability:
    source_file: execution-receipts.akp.md
    concepts:
      - execution_receipt
      - on_chain_trace
      - off_chain_context
      - reason_code
      - accountability_record

  relationships:
    source_file: governance-business-acs-relations.akp.md
    concepts:
      - Business_as_request_gateway
      - ACS_as_analysis_support
      - agents_not_authority
      - human_governance_finality

  risk_and_accountability:
    source_file: treasury-risk-accountability.akp.md
    concepts:
      - treasury_visibility
      - risk_classification
      - governance_attack_vectors
      - public_reporting
      - no_guaranteed_returns

public_documentation_targets:
  overview:
    target: docs/governance/overview.md
    source_files:
      - core-governance.akp.md
      - governance-layers.akp.md

  constitutional_governance:
    target: docs/governance/constitutional-governance.md
    source_files:
      - constitutional-governance.akp.md
      - dao-federation.akp.md

  dao_federation:
    target: docs/governance/dao-federation.md
    source_files:
      - dao-federation.akp.md
      - execution-receipts.akp.md

  proposal_lifecycle:
    target: docs/governance/proposal-lifecycle.md
    source_files:
      - proposal-lifecycle.akp.md
      - execution-receipts.akp.md

  plugin_requests:
    target: docs/governance/plugin-requests.md
    source_files:
      - plugin-request-system.akp.md
      - governance-business-acs-relations.akp.md

  risk_and_accountability:
    target: docs/governance/governance-risk.md
    source_files:
      - treasury-risk-accountability.akp.md
      - execution-receipts.akp.md

global_invariants:
  - governance_is_the_coordination_heart
  - constitutional_alignment_required
  - federation_requires_traceability
  - local_DAO_autonomy_is_not_unrestricted
  - treasury_actions_require_visibility
  - ACS_supports_but_does_not_govern
  - Business_routes_requests_but_does_not_override_governance
  - no_unverified_claims
  - no_guaranteed_returns
  - all_public_docs_in_English
