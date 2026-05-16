# AXODUS KNOWLEDGE PACK
# DOMAIN: MARKETPLACE
# TYPE: RISK AND COMPLIANCE MODEL

[AXODUS_MARKETPLACE_RISK_COMPLIANCE]

## 1. Risk Thesis

Marketplace risk includes commerce risk, seller risk, buyer protection risk, token payment risk, locked credit risk, regulated category risk, data privacy risk, and claim risk.

Marketplace documentation must be transparent and must not give legal conclusions.

## 2. Risk Categories

risk_categories:
  seller_claim_risk:
    description:
      - listing_overstates_seller_credentials_or_results

  buyer_expectation_risk:
    description:
      - buyer_misunderstands_deliverable_or_outcome

  payment_risk:
    description:
      - crypto_fiat_or_gateway_payment_fails_or_misprices

  token_volatility:
    description:
      - payment_asset_value_changes

  locked_credit_risk:
    description:
      - internal_credits_create_confusion_or_liabilities

  settlement_risk:
    description:
      - seller_payout_or_treasury_routing_fails

  refund_dispute_risk:
    description:
      - refund_policy_unclear_or_conflicted

  regulated_category_risk:
    description:
      - certain_products_or_services_may_be_restricted_or_require_review

  financial_claim_risk:
    description:
      - DeFi_Trading_Treasury_or_token_claims_mislead_users

  data_privacy_risk:
    description:
      - user_seller_or_dispute_data_exposed

  fraud_risk:
    description:
      - fake_listing_fake_seller_fake_review_or_payment_abuse

  security_risk:
    description:
      - wallet_contract_or_data_system_compromised

## 3. Prohibited Claims

prohibited_claims:
  - guaranteed_seller_revenue
  - guaranteed_buyer_results
  - guaranteed_ROI
  - guaranteed_trading_profit
  - guaranteed_DeFi_yield
  - risk_free_purchase
  - locked_rewards_are_withdrawable_unless_confirmed
  - locked_rewards_are_transferable_unless_confirmed
  - credits_have_cash_value_unless_policy_confirms
  - official_seller_without_verification
  - certified_without_basis
  - legally_compliant_without_review
  - audited_without_audit
  - DEX_checkout_available_without_implementation

## 4. Safe Language

safe_language:
  - marketplace listing
  - seller status
  - subject to listing terms
  - subject to refund policy
  - subject to review
  - subject to governance approval
  - subject to tokenomics policy
  - locked rewards may be restricted
  - internal credit if approved
  - results may vary
  - no guaranteed revenue
  - no guaranteed buyer outcome
  - active if verified
  - planned
  - draft

## 5. Sensitive Categories

sensitive_categories:
  - trading_strategy_access
  - DeFi_or_DaaS_services
  - lottery_related_products
  - token_sales_or_investment_like_products
  - professional_certifications
  - legal_tax_financial_advice
  - security_audit_claims
  - restricted_or_regulated_goods
  - identity_or_KYC_services
  - high_value_custom_services

## 6. Review Triggers

review_triggers:
  - new_sensitive_category
  - token_or_locked_reward_spending_claim
  - seller_official_or_verified_claim
  - financial_performance_claim
  - DeFi_or_Trading_listing
  - refund_policy_change
  - marketplace_fee_change
  - DEX_checkout_integration
  - public_marketplace_revenue_claim
  - dispute_or_fraud_incident

## 7. Public Documentation Guidance

The public Risk and Compliance page should:

- explain marketplace risks;
- list prohibited claims and safe language;
- list sensitive categories and review triggers;
- avoid legal conclusions or unsupported compliance claims.
