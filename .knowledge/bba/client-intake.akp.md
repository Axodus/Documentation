# AXODUS KNOWLEDGE PACK
# DOMAIN: BBA AGENCY
# TYPE: CLIENT INTAKE MODEL

[BBA_CLIENT_INTAKE]

## 1. Intake Thesis

BBA intake must identify what the requester wants to communicate, why, to whom, with which claims, and under which risks.

Intake is not approval.

A request only becomes a scoped BBA project after Business runtime validates scope, deliverables, review needs, and acceptance criteria.

## 2. Request Sources

request_sources:
  Axodus_internal_product:
    examples:
      - Academy
      - Marketplace
      - Trading
      - Treasury
      - Governance
      - Tokenomics
      - ACS

  DAO_or_subDAO:
    examples:
      - governance_update
      - plugin_launch
      - proposal_explainer
      - community_campaign

  external_client:
    examples:
      - Web3_startup
      - DeFi_product
      - NFT_or_creator_project
      - traditional_business_entering_Web3

  Academy_creator_or_tutor:
    examples:
      - course_launch
      - tutor_positioning
      - marketplace_listing

  Business_request:
    examples:
      - client_campaign
      - product_positioning
      - service_proposal

## 3. Intake Fields

intake_fields:
  - requester_name_or_reference
  - requester_type
  - project_name
  - product_or_service
  - current_status
  - campaign_or_communication_objective
  - target_audience
  - target_geography_or_language_if_relevant
  - channels
  - timeline_or_event_reference
  - existing_assets
  - required_deliverables
  - claims_to_make
  - proof_for_claims
  - tokenomics_involved
  - trading_or_financial_claims_involved
  - governance_claims_involved
  - audit_or_security_claims_involved
  - partnership_claims_involved
  - legal_or_compliance_constraints
  - success_metrics
  - budget_or_resource_context_if_applicable
  - approval_stakeholders
  - risk_level
  - ACS_support_required

## 4. Claim Intake

claim_intake:
  required_questions:
    - Are_you_claiming_a_partnership?
    - Are_you_claiming_an_audit_or_security_status?
    - Are_you_claiming_user_growth_revenue_or_performance?
    - Are_you_claiming_token_utility_price_or_return?
    - Are_you_claiming_trading_profit_or_strategy_performance?
    - Are_you_claiming_governance_status_or_official_adoption?
    - Are_you_claiming_legal_or_compliance_status?
    - Can_each_claim_be_verified_with_evidence?

## 5. Intake Classification

classification:
  low_risk:
    examples:
      - basic_brand_copy
      - educational_content_without_financial_claims

  medium_risk:
    examples:
      - product_launch_copy
      - marketplace_listing
      - DAO_update

  high_risk:
    examples:
      - tokenomics_campaign
      - trading_strategy_campaign
      - DeFi_yield_or_treasury_claim
      - partnership_claim
      - audit_claim

  critical:
    examples:
      - fundraising_material
      - financial_performance_claim
      - legal_compliance_claim
      - exchange_listing_claim
      - major_governance_or_treasury_public_statement

## 6. Intake Output

intake_output:
  - structured_request_summary
  - missing_information_list
  - claim_risk_flags
  - required_reviews
  - recommended_service_group
  - scope_draft
  - governance_escalation_if_needed
  - Business_runtime_record_reference

## 7. Public Documentation Guidance

The public Client Intake page should:

- explain intake purpose;
- list requester types;
- define intake fields;
- explain claim intake;
- explain risk classification;
- state that intake is not approval or delivery commitment.
