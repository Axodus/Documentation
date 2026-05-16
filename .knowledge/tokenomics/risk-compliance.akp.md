# AXODUS KNOWLEDGE PACK
# DOMAIN: TOKENOMICS
# TYPE: RISK AND COMPLIANCE MODEL

[AXODUS_TOKENOMICS_RISK_COMPLIANCE]

## 1. Risk Thesis

Tokenomics is one of the most sensitive documentation areas in Axodus.

Poor tokenomics language can create financial, legal, governance, treasury, security, and reputational risk.

The goal is not to make Tokenomics vague. The goal is to make it precise, useful, truthful, and reviewable.

## 2. Main Risk Categories

risk_categories:
  investment_language_risk:
    description:
      - docs_or_campaigns_describe_$Neurons_as_investment_or_return_product

  reward_farming:
    description:
      - users_extract_rewards_without_meaningful_participation

  sybil_attack:
    description:
      - one_actor_uses_multiple_accounts_to_claim_rewards_or_gain_governance_power

  contract_mismatch:
    description:
      - public_docs_or_policies_do_not_match_actual_contract_behavior

  governance_capture:
    description:
      - token_or_reward_distribution_enables_unfair_control_of_governance

  treasury_sustainability_risk:
    description:
      - rewards_fees_or_credits_create_unreported_or_unsustainable_liability

  marketplace_abuse:
    description:
      - locked_rewards_or_credits_used_for_self_dealing_refunds_or_value_extraction

  token_claim_risk:
    description:
      - public_material_makes_unverified_supply_fee_audit_or_utility_claims

  regulatory_uncertainty:
    description:
      - token_or_reward_system_may_touch_sensitive_financial_or_consumer_protection_topics

  security_risk:
    description:
      - token_contract_reward_controller_or_marketplace_settlement_exploited

  user_confusion:
    description:
      - users_do_not_understand_locked_unlocked_internal_use_or_claimable_status

## 3. Prohibited Public Claims

prohibited_claims:
  - guaranteed_profit
  - guaranteed_APY
  - guaranteed_yield
  - passive_income
  - risk_free_reward
  - guaranteed_price_appreciation
  - guaranteed_liquidity
  - audited_without_real_audit
  - partnership_without_confirmation
  - legal_compliance_without_qualified_review
  - transferable_locked_rewards_without_contract_support
  - governance_power_for_locked_rewards_without_policy
  - final_supply_or_fees_without_contract_validation

## 4. Safe Language

safe_language:
  - ecosystem_utility
  - reward_eligibility
  - access_mechanism
  - governance_participation_if_policy_supports
  - internal_use_if_supported
  - locked_rewards_subject_to_contract_rules
  - planned
  - draft
  - active_if_verified
  - subject_to_governance_approval
  - subject_to_contract_validation
  - risk_disclosure_required

## 5. Risk Controls

risk_controls:
  investment_language:
    controls:
      - claim_review
      - safe_language_standard
      - no_return_promises

  reward_farming:
    controls:
      - Proof_of_Knowledge
      - per_user_limits
      - locked_rewards
      - ACS_abuse_detection
      - manual_review_for_high_rewards

  sybil:
    controls:
      - cooldowns
      - wallet_pattern_review_if_policy_allows
      - progressive_rewards
      - governance_caps

  contract_mismatch:
    controls:
      - contract_validation
      - status_labels
      - testnet_vs_production_distinction

  treasury_sustainability:
    controls:
      - reward_budget
      - reporting
      - treasury_review
      - governance_thresholds

  marketplace_abuse:
    controls:
      - settlement_policy
      - refund_policy
      - self_dealing_detection
      - locked_reward_spend_limits

  governance_capture:
    controls:
      - locked_reward_vote_limits_if_used
      - Proof_of_Knowledge
      - quadratic_or_reputation_models_if approved
      - governance_review

## 6. Compliance-Oriented Review Triggers

review_triggers:
  - public_tokenomics_page_update
  - BBA_campaign_about_$Neurons
  - reward_program_launch
  - partner_sponsored_rewards
  - marketplace_token_payment_launch
  - locked_reward_marketplace_spend
  - governance_participation_change
  - fee_parameter_change
  - supply_or_minting_claim
  - audit_or_security_claim
  - treasury_fee_or_revenue_claim

## 7. Incident Scenarios

incident_scenarios:
  false_supply_claim:
    response:
      - correct_docs
      - verify_contract
      - publish_update_if_material

  reward_abuse_detected:
    response:
      - pause_program_if_control_exists
      - investigate
      - revoke_or_adjust_if_policy_supports
      - report_if_material

  marketplace_credit_exploit:
    response:
      - pause_locked_reward_spend
      - investigate_settlement
      - update_policy

  governance_capture_attempt:
    response:
      - review_voting_eligibility
      - escalate_to_governance
      - apply_controls_if approved

  contract_mismatch_detected:
    response:
      - mark_docs_Needs_Review
      - validate_contract
      - update_public_docs

## 8. Public Documentation Guidance

The public Risk and Compliance page should:

- state that Tokenomics is utility-focused and not investment advice;
- list main risks plainly;
- define prohibited claims and safe language;
- explain review triggers;
- include risk controls;
- avoid giving legal advice or claiming legal compliance.
