# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: RISK AND COMPLIANCE MODEL

[CRYPTODRAW_RISK_COMPLIANCE]

## 1. Compliance Thesis

Lottery products are legally sensitive and may be regulated differently across jurisdictions.

CryptoDraw must not be described as legally available, licensed, regulated, compliant, or open to users unless qualified review and project records support that claim.

This file is not legal advice. It defines documentation guardrails and review triggers.

## 2. Risk Categories

risk_categories:
  gambling_or_lottery_regulation:
    description:
      - lottery_products_may_require_licenses_or_restrictions

  jurisdiction_risk:
    description:
      - rules_vary_by_country_state_or_region

  age_restriction_risk:
    description:
      - participation_may_be_limited_by_age

  consumer_protection:
    description:
      - users_must_understand_odds_costs_claims_and risks

  AML_KYC_risk:
    description:
      - token_or_prize_flows_may_trigger_identity_or_monitoring_requirements_if applicable

  financial_promotion_risk:
    description:
      - lottery_or_token_language_can_be_misread_as_investment_or_return product

  randomness_integrity:
    description:
      - unfair_or_unverifiable_randomness_can_break trust

  prize_settlement_risk:
    description:
      - winners_not_paid_due_to_contract_treasury_or_claim issue

  security_risk:
    description:
      - contract_or_wallet_vulnerability_affects funds_or tickets

  operational_risk:
    description:
      - draw_claim_or_report_process fails

  data_privacy:
    description:
      - user_data_ticket_data_or_location_data mishandled

## 3. Prohibited Claims

prohibited_claims:
  - guaranteed_winnings
  - guaranteed_profit
  - risk_free
  - legally_available_everywhere
  - licensed_without_verified_license
  - regulated_without_verified_basis
  - compliant_without_qualified_review
  - official_public_lottery_affiliation_without_confirmation
  - VRF_secures_everything_without explaining scope
  - audited_without_audit
  - prize_guaranteed_without funded_pool_and_policy
  - token_price_or_investment_return_from_lottery

## 4. Safe Language

safe_language:
  - lottery_product_concept
  - planned
  - draft
  - testnet_only
  - subject_to_governance_approval
  - subject_to_security_review
  - subject_to_compliance_review
  - subject_to_jurisdiction_restrictions
  - no_guaranteed_winnings
  - verifiable_randomness_if implemented
  - prize_rules_defined_by_draw
  - claim_window_applies
  - availability_may_be_restricted

## 5. Review Triggers

review_triggers:
  - public_lottery_launch
  - real_money_or_token_paid_ticket_sales
  - prize_pool_funding
  - use_of_$Neurons_for_tickets
  - free_promotional_entries
  - jurisdiction_or_age_access
  - claim_that_product_is_legal_licensed_or_compliant
  - VRF_or_audit_claim
  - partnership_or_public_lottery_reference
  - marketing_campaign
  - treasury_fee_or_revenue_claim
  - prize_guarantee_claim

## 6. Required Reviews

required_reviews:
  compliance_or_legal:
    triggers:
      - public_availability
      - paid_entries
      - prizes
      - jurisdiction_claims
      - licensing_claims

  security:
    triggers:
      - contracts_holding_funds_or_tickets
      - VRF_configuration
      - prize_vault
      - claim_logic

  treasury:
    triggers:
      - prize_pool
      - fees
      - reserves
      - refunds
      - unpaid_prizes

  governance:
    triggers:
      - game_mode_activation
      - parameters
      - fees
      - emergency_actions

  BBA_claim_review:
    triggers:
      - public_marketing
      - launch_campaign
      - token_or_winning_claims

## 7. Public Documentation Guidance

The public Risk and Compliance page should:

- explain legal sensitivity without giving legal advice;
- list risks, prohibited claims, safe language, review triggers, and required reviews;
- state that availability may be restricted and winnings are not guaranteed.
