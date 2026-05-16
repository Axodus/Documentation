# AXODUS KNOWLEDGE PACK
# DOMAIN: DEX
# TYPE: LISTING POLICY MODEL

[AXODUS_DEX_LISTING_POLICY]

## 1. Listing Thesis

Token availability on a DEX must not automatically imply endorsement.

Listing policy defines how tokens are categorized, verified, warned, restricted, or removed.

This protects users from scam tokens, impersonation tokens, unsupported assets, misleading metadata, and unsafe pools.

## 2. Listing Statuses

listing_statuses:
  Official:
    meaning:
      - token_is_officially_recognized_by_Axodus_or_verified_project_source

  Verified:
    meaning:
      - metadata_contract_and_basic_checks_confirmed

  Community:
    meaning:
      - token_available_or_requested_but_not_officially_endorsed

  Unverified:
    meaning:
      - token_has_not_passed_review

  Warning:
    meaning:
      - token_has_risk_flags

  Restricted:
    meaning:
      - token_visibility_or_actions_limited

  Deprecated:
    meaning:
      - token_no_longer_recommended_or_current

  Blocked:
    meaning:
      - token_blocked_due_to_scam_security_or_policy_risk

## 3. Listing Review Fields

listing_review_fields:
  - token_symbol
  - token_name
  - chain
  - contract_address
  - requester
  - official_source
  - metadata_verified
  - contract_verified
  - ownership_or_admin_risk
  - liquidity_context
  - holder_distribution_if relevant
  - security_flags
  - scam_or_impersonation_risk
  - governance_status
  - listing_status
  - warnings
  - reviewer
  - review_date

## 4. Listing Review Flow

flow:
  - listing_request_or_token_detected
  - contract_address_verified
  - metadata_checked
  - official_source_checked_if official_claim
  - risk_flags_generated
  - governance_review_if_official_or_incentivized
  - listing_status_assigned
  - UI_warning_configured_if needed
  - record_archived

## 5. Official Asset Requirements

official_asset_requirements:
  - project_or_governance_confirmation
  - verified_contract_address
  - correct_chain
  - metadata_accuracy
  - security_review_or_known_risk_notes
  - official_docs_or_source_reference
  - governance_approval_if_Axodus_official_asset

## 6. Listing Risks

risks:
  impersonation_token:
    description:
      - fake_token_uses_similar_name_or_symbol

  honeypot_or_scam:
    description:
      - token_contract_restricts_selling_or_behaves_maliciously

  low_liquidity:
    description:
      - users_cannot_trade_without_large_price_impact

  admin_control:
    description:
      - token_owner_can_mint_pause_blacklist_or_change_rules

  misleading_metadata:
    description:
      - token_name_symbol_or_logo_confuses_users

  endorsement_confusion:
    description:
      - users_assume_listed_means_safe_or_recommended

## 7. Public Documentation Guidance

The public Listing Policy page should:

- state that listing is not endorsement;
- define statuses;
- describe review fields and flow;
- explain official asset requirements and risks.
