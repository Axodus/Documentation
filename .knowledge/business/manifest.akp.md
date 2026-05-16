# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: BUSINESS
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Business
  role: structured_intake_scoping_delivery_and_service_coordination_layer
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - business-core.akp.md
  - business-architecture.akp.md
  - request-intake.akp.md
  - business-runtime.akp.md
  - service-catalog.akp.md
  - client-lifecycle.akp.md
  - delivery-lifecycle.akp.md
  - change-request-system.akp.md
  - dao-service-requests.akp.md
  - plugin-request-flow.akp.md
  - bba.akp.md
  - acs-integration.akp.md
  - governance-alignment.akp.md
  - risk-compliance-accountability.akp.md
  - business-page-directives.akp.md

semantic_domains:
  business_identity:
    source_file: business-core.akp.md
    concepts:
      - Business_as_intake_runtime
      - Business_as_delivery_coordination_layer
      - Business_as_client_DAO_gateway
      - Business_as_scope_control_system
      - Business_as_ACS_consumer

  architecture:
    source_file: business-architecture.akp.md
    concepts:
      - intake_layer
      - classification_layer
      - scoping_layer
      - governance_layer
      - delivery_layer
      - acceptance_layer
      - accountability_layer

  request_intake:
    source_file: request-intake.akp.md
    concepts:
      - requester_identity
      - request_type
      - objective
      - scope
      - risk
      - governance_touchpoints
      - deliverables

  runtime:
    source_file: business-runtime.akp.md
    concepts:
      - intake
      - classification
      - ACS_analysis
      - human_review
      - governance_check
      - scope_definition
      - approval
      - execution
      - acceptance
      - archive

  service_catalog:
    source_file: service-catalog.akp.md
    concepts:
      - DAO_services
      - development_services
      - governance_services
      - Academy_services
      - BBA_services
      - ACS_services
      - Trading_services
      - Marketplace_services

  client_lifecycle:
    source_file: client-lifecycle.akp.md
    concepts:
      - lead
      - intake
      - qualification
      - proposal
      - onboarding
      - delivery
      - acceptance
      - support
      - renewal

  delivery_lifecycle:
    source_file: delivery-lifecycle.akp.md
    concepts:
      - scope
      - milestones
      - implementation
      - validation
      - acceptance
      - handoff

  change_requests:
    source_file: change-request-system.akp.md
    concepts:
      - in_scope
      - minor_adjustment
      - scope_expansion
      - governance_impact
      - new_project
      - cost_time_impact

  DAO_services:
    source_file: dao-service-requests.akp.md
    concepts:
      - custom_DAO_tools
      - dashboards
      - governance_plugins
      - reporting
      - product_access
      - federation

  plugin_requests:
    source_file: plugin-request-flow.akp.md
    concepts:
      - Business_intake
      - ACS_analysis
      - governance_review
      - technical_scope
      - security_review
      - deployment

  BBA:
    source_file: bba.akp.md
    concepts:
      - Blockchain_Business_and_Advertising
      - growth_operations
      - positioning
      - campaign_strategy
      - AI_assisted_advertising
      - ROI_aware_communication

  ACS_integration:
    source_file: acs-integration.akp.md
    concepts:
      - request_analysis
      - classification
      - scoping
      - change_request_analysis
      - risk_flags
      - coder_handoff

  governance_alignment:
    source_file: governance-alignment.akp.md
    concepts:
      - governance_sensitive_requests
      - DAO_plugin_approval
      - treasury_tokenomics_policy
      - constitutional_alignment

  risk_accountability:
    source_file: risk-compliance-accountability.akp.md
    concepts:
      - scope_risk
      - financial_claims
      - token_claims
      - client_expectations
      - audit_trail
      - acceptance_records

public_documentation_targets:
  overview:
    target: docs/business/overview.md
    source_files:
      - business-core.akp.md
      - business-architecture.akp.md

  request_intake:
    target: docs/business/request-intake.md
    source_files:
      - request-intake.akp.md
      - acs-integration.akp.md

  runtime:
    target: docs/business/runtime.md
    source_files:
      - business-runtime.akp.md
      - change-request-system.akp.md

  service_catalog:
    target: docs/business/service-catalog.md
    source_files:
      - service-catalog.akp.md

  client_lifecycle:
    target: docs/business/client-lifecycle.md
    source_files:
      - client-lifecycle.akp.md

  delivery_lifecycle:
    target: docs/business/delivery-lifecycle.md
    source_files:
      - delivery-lifecycle.akp.md

  change_requests:
    target: docs/business/change-requests.md
    source_files:
      - change-request-system.akp.md

  dao_service_requests:
    target: docs/business/dao-service-requests.md
    source_files:
      - dao-service-requests.akp.md
      - plugin-request-flow.akp.md

  plugin_requests:
    target: docs/business/plugin-requests.md
    source_files:
      - plugin-request-flow.akp.md
      - governance-alignment.akp.md

  bba:
    target: docs/business/bba.md
    source_files:
      - bba.akp.md

  acs_integration:
    target: docs/business/acs-integration.md
    source_files:
      - acs-integration.akp.md
      - business-runtime.akp.md

  governance_alignment:
    target: docs/business/governance-alignment.md
    source_files:
      - governance-alignment.akp.md

  risk_and_compliance:
    target: docs/business/risk-and-compliance.md
    source_files:
      - risk-compliance-accountability.akp.md

global_invariants:
  - Business_is_structured_intake_and_delivery_runtime
  - vague_requests_are_not_executable
  - scope_must_be_documented
  - change_requests_must_be_logged
  - governance_sensitive_requests_require_governance_review
  - ACS_supports_but_does_not_commit
  - BBA_is_blockchain_business_advertising_not_hype
  - no_unverified_financial_token_or_legal_claims
  - all_public_docs_must_be_English
