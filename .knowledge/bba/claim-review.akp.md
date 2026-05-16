# AXODUS KNOWLEDGE PACK
# DOMAIN: BBA AGENCY
# TYPE: CLAIM REVIEW MODEL

[BBA_CLAIM_REVIEW]

## 1. Claim Review Thesis

Claim Review is the most important safety function of BBA.

A claim is any public statement that describes what a product does, who supports it, how it performs, what it earns, how secure it is, what legal status it has, or what users can expect.

BBA must ensure claims are supported, precise, contextualized, and approved before publication.

## 2. Claim Categories

claim_categories:
  product_claim:
    examples:
      - product_is_live
      - feature_available
      - integration_supported

  performance_claim:
    examples:
      - user_growth
      - revenue
      - conversion_rate
      - strategy_PnL
      - backtest_result

  financial_claim:
    examples:
      - yield
      - APY
      - revenue
      - treasury_performance
      - cost_savings

  token_claim:
    examples:
      - token_utility
      - token_supply
      - burn
      - treasury_fee
      - reward_unlock
      - governance_power

  trading_claim:
    examples:
      - strategy_performance
      - bot_results
      - scalper_futures_access
      - risk_control

  DeFi_claim:
    examples:
      - staking
      - liquidity
      - DaaS
      - ETF_DaaS
      - derivatives
      - debentures

  governance_claim:
    examples:
      - DAO_approval
      - official_adoption
      - proposal_passed
      - federation_status

  security_claim:
    examples:
      - audited
      - secure
      - battle_tested
      - non_custodial

  partnership_claim:
    examples:
      - official_partner
      - supported_by
      - integrated_with
      - adopted_by

  compliance_claim:
    examples:
      - legally_compliant
      - regulated
      - certified
      - licensed

## 3. Claim Review Statuses

statuses:
  Proposed:
    meaning:
      - claim_requested_but_not_reviewed

  Evidence_Required:
    meaning:
      - claim_needs_supporting_material

  Under_Review:
    meaning:
      - claim_being_reviewed

  Approved:
    meaning:
      - claim_can_be_used_as_written

  Approved_With_Revision:
    meaning:
      - claim_can_be_used_only_with_modified_language

  Rejected:
    meaning:
      - claim_must_not_be_used

  Escalated:
    meaning:
      - claim_requires_governance_legal_security_or_domain_review

  Expired:
    meaning:
      - claim_no_longer_current

  Needs_Revalidation:
    meaning:
      - claim_may_be_outdated_or_context_changed

## 4. Claim Review Record

claim_review_record_fields:
  - claim_id
  - campaign_id_or_material_reference
  - claim_text
  - claim_category
  - risk_level
  - evidence_required
  - evidence_provided
  - source_of_truth
  - reviewer
  - review_decision
  - approved_language
  - rejected_language
  - conditions
  - expiration_or_revalidation_date
  - governance_or_security_reference_if_any
  - notes

## 5. Required Evidence by Claim Type

evidence_requirements:
  product_claim:
    - product_demo
    - release_note
    - deployment_or_repository_reference
    - product_owner_confirmation

  performance_claim:
    - dataset
    - measurement_period
    - methodology
    - limitations
    - reviewer_confirmation

  financial_claim:
    - report
    - calculation_method
    - risk_context
    - no_guarantee_language
    - treasury_or_governance_review_if_material

  token_claim:
    - tokenomics_policy
    - contract_reference
    - governance_record_if_material
    - status_label

  trading_claim:
    - performance_report
    - backtest_or_live_status
    - limitations
    - risk_disclosure
    - Trinity_or_risk_review

  security_claim:
    - audit_report_if_claiming_audit
    - security_review_record_if_claiming_review
    - scope_of_review
    - date

  partnership_claim:
    - written_confirmation
    - public_reference
    - agreement_or_approval
    - scope_of_relationship

  compliance_claim:
    - qualified_review
    - jurisdiction_context
    - approved_language

## 6. Dangerous Claims

dangerous_claims:
  - guaranteed_profit
  - guaranteed_ROI
  - guaranteed_APY
  - guaranteed_token_appreciation
  - risk_free
  - audited_without_audit
  - official_partner_without_confirmation
  - legally_compliant_without_review
  - exchange_listed_without_confirmation
  - non_custodial_if_system_handles_user_funds_or_keys
  - fully_decentralized_if_admin_controls_exist
  - AI_guaranteed_results

## 7. Safer Rewrite Patterns

rewrite_patterns:
  guaranteed_ROI:
    safer:
      - "The campaign is designed to support measurable acquisition and activation goals, but outcomes are not guaranteed."

  guaranteed_trading_profit:
    safer:
      - "The strategy is subject to market, exchange, execution, and user configuration risks. No trading result is guaranteed."

  audited:
    safer:
      - "Security review status should be verified before publication."

  official_partner:
    safer:
      - "Integration or relationship claims require documented confirmation before publication."

  token_return:
    safer:
      - "`$Neurons` should be described through utility, access, rewards, and governance participation, not investment returns."

## 8. Public Documentation Guidance

The public Claim Review page should:

- define what a claim is;
- list claim categories;
- explain statuses and records;
- explain evidence requirements;
- list dangerous claims;
- provide safer rewrite patterns;
- state that claim review protects users, clients, governance, and Axodus credibility.
