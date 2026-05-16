# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: SERVICE CATALOG MODEL

[AXODUS_MARKETPLACE_SERVICE_CATALOG]

## 1. Service Catalog Thesis

The Marketplace service catalog is the structured surface where Axodus, Business, BBA, Academy, DAOs, creators, and providers can offer services.

A catalog service must be scoped, priced, deliverable, reviewable, and accountable.

## 2. Service Groups

service_groups:
  Business_Services:
    examples:
      - technical_consulting
      - DAO_setup
      - governance_plugin_development
      - Web3_product_scoping
      - integration_support
      - documentation_package
      - smart_contract_review_support

  BBA_Services:
    examples:
      - brand_positioning
      - campaign_strategy
      - claim_review
      - launch_support
      - landing_copy
      - growth_operations
      - DAO_communication

  Academy_Services:
    examples:
      - course_creation_support
      - tutor_onboarding
      - curriculum_design
      - certification_path_design
      - educational_content_review

  DAO_Services:
    examples:
      - proposal_drafting
      - governance_update_package
      - voting_communication
      - plugin_request_scope
      - treasury_report_template

  DeFi_DaaS_Services:
    examples:
      - DeFi_strategy_scope
      - vault_concept_review
      - protocol_risk_summary
      - DaaS_documentation_package
    warning:
      - requires_DeFi_risk_review

  Trading_Services:
    examples:
      - strategy_documentation
      - API_safety_onboarding
      - performance_report_template
      - trading_risk_review
    warning:
      - no_profit_guarantee_required

  MCP_Agent_Services:
    examples:
      - MCP_server_scope
      - ACS_agent_configuration
      - automation_workflow_design
      - agent_knowledge_pack_setup

  Creative_Digital_Assets:
    examples:
      - design_templates
      - brand_guides
      - UI_kits
      - documentation_templates

## 3. Service Listing Fields

service_listing_fields:
  - service_id
  - service_group
  - title
  - objective
  - deliverables
  - not_included
  - prerequisites
  - estimated_delivery_model
  - revision_policy
  - acceptance_criteria
  - price_or_quote_model
  - accepted_assets
  - required_reviews
  - risk_disclosures
  - provider_status
  - support_policy

## 4. Service Delivery Models

delivery_models:
  fixed_scope:
    description:
      - predefined_deliverables_and_acceptance_criteria

  milestone_based:
    description:
      - delivery_split_into_phases_or_approvals

  subscription:
    description:
      - recurring_service_or_support

  consultation:
    description:
      - advisory_session_or_diagnostic

  managed_service:
    description:
      - ongoing_operation_or_campaign_management

  DAO_request:
    description:
      - governance_or_DAO_scoped_service

  custom_quote:
    description:
      - requires_Business_intake_before_pricing

## 5. Catalog Rules

catalog_rules:
  - service_must_have_clear_deliverables
  - service_must_not_promise_guaranteed_business_results
  - sensitive_services_require_review
  - custom_work_should_route_through_Business_runtime
  - BBA_services_require_claim_safe_language
  - Trading_DeFi_Treasury_services_require_risk_disclosures
  - DAO_services_may_require_governance_context

## 6. Public Documentation Guidance

The public Service Catalog page should:

- define service groups;
- list service fields and delivery models;
- explain catalog rules;
- link to Business, BBA, Academy, DeFi, Trading, ACS, and Governance.
