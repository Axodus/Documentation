# AXODUS KNOWLEDGE PACK
# DOMAIN: TREASURY
# TYPE: CUSTODY AND SECURITY MODEL

[AXODUS_TREASURY_CUSTODY_SECURITY]

## 1. Custody and Security Thesis

Treasury assets require strong custody and security controls.

Transparency must not expose secrets.

Public documentation should explain security principles, custody models, permission boundaries, and accountability without revealing private keys, sensitive wallet controls, signer operational details, or exploitable infrastructure information.

## 2. Custody Models

custody_models:
  multisig:
    description:
      - multiple_authorized_signers_required_for_action
    use:
      - preferred_for_material_treasury_wallets

  hardware_wallet:
    description:
      - private_keys_secured_in_hardware_device

  smart_contract_wallet:
    description:
      - contract_based_wallet_with_rules_permissions_or_modules

  exchange_account:
    description:
      - assets_held_on_CEX_for_trading_or_liquidity_purpose
    warning:
      - counterparty_and_account_risk

  protocol_position:
    description:
      - assets_deployed_in_DeFi_protocol_or_strategy
    warning:
      - smart_contract_and_liquidity_risk

  operational_hot_wallet:
    description:
      - limited_balance_wallet_for_routine_operations
    warning:
      - should_have_low_limits_and_monitoring

## 3. Security Principles

security_principles:
  least_privilege:
    - permissions_should_be_minimum_required

  separation_of_duties:
    - no_single_actor_should_control_material_treasury_actions_without_policy

  defense_in_depth:
    - combine_multisig_limits_monitoring_and_review

  no_secret_exposure:
    - never_publish_private_keys_seed_phrases_API_secrets_or_sensitive_signer_ops

  limited_hot_wallets:
    - hot_wallets_should_have_limited_balances_and_purpose

  review_before_change:
    - signer_wallet_or_permission_changes_require_review

  incident_readiness:
    - emergency_response_and_recovery_process_defined

## 4. Wallet Registry Fields

wallet_registry_fields:
  - wallet_id
  - public_address_if_safe
  - chain_or_platform
  - purpose
  - custody_model
  - asset_types
  - risk_level
  - status
  - reporting_category
  - governance_reference_if any
  - security_review_status

do_not_publish:
  - private_keys
  - seed_phrases
  - full_signer_operational_procedure
  - internal_API_credentials
  - security_bypass_details
  - unprotected_admin_paths

## 5. Permission Controls

permission_controls:
  - signer_roles
  - spending_limits
  - time_locks_if_supported
  - allowlisted_destinations_if supported
  - transaction_simulation_if supported
  - multisig_thresholds
  - emergency_pause
  - key_rotation
  - access_revocation
  - monitoring_alerts

documentation_rule:
  - Describe permission controls conceptually unless safe to publish specific configuration.

## 6. Treasury Execution Security

execution_security_checklist:
  - action_matches_approved_scope
  - source_and_destination_verified
  - amount_verified
  - chain_or_network_verified
  - token_contract_verified
  - transaction_simulated_if_possible
  - signer_authority_confirmed
  - phishing_or_address_poisoning_check
  - execution_receipt_required_if_material
  - post_execution_balance_check

## 7. Incident Types

incident_types:
  key_compromise:
    response:
      - revoke_rotate_migrate_and_report_according_to_policy

  unauthorized_transaction:
    response:
      - investigate_pause_related_actions_escalate_to_governance_or_security

  exchange_account_issue:
    response:
      - freeze_strategy_withdraw_assets_if_possible_report_exposure

  smart_contract_exploit:
    response:
      - pause_interactions_exit_if_safe_report_and_review

  address_error:
    response:
      - investigate_transaction_recovery_options_and_update_controls

  phishing_or_impersonation:
    response:
      - alert_operators_and_public_if_needed_update_security_guidance

## 8. Custody Risks

risks:
  single_point_of_failure:
    description:
      - one_actor_or_key_controls_treasury

  hot_wallet_loss:
    description:
      - operational_wallet_compromised

  exchange_counterparty:
    description:
      - CEX_controls_assets_or_restricts_access

  smart_contract_bug:
    description:
      - contract_or_protocol_exploit

  signer_coordination_failure:
    description:
      - multisig_cannot_act_when_needed

  over_disclosure:
    description:
      - public_docs_reveal_sensitive_security_details

## 9. Public Documentation Guidance

The public Custody and Security page should:

- explain custody models and principles;
- define wallet registry fields at safe level;
- describe permission controls conceptually;
- include execution security checklist;
- describe incident types and risks;
- never expose secrets or exploitable operational details.
