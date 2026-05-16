# AXODUS KNOWLEDGE PACK
# DOMAIN: TRADING
# TYPE: CEX API SECURITY MODEL

[AXODUS_CEX_API_SECURITY]

## 1. API Security Thesis

CEX API security is one of the most important safety controls for user-facing trading strategies.

If users connect exchange accounts, API keys must be configured with least privilege, protected from exposure, and revocable.

The default public guidance must strongly recommend disabling withdrawals.

## 2. API Key Definition

API_key:
  definition:
    - exchange_or_service_credential_used_to_allow_trading_tool_access_to_specific_account_functions

API_key_is_not:
  - wallet_private_key
  - permission_to_withdraw_by_default
  - risk_free_connection
  - proof_that_user_cannot_lose_funds

## 3. API Permission Model

permission_model:
  required_or_possible:
    read:
      purpose:
        - balances_positions_order_status_market_data

    trade:
      purpose:
        - create_cancel_or_manage_orders_if_strategy_needs

  should_be_disabled:
    withdrawal:
      reason:
        - prevents_strategy_or_leaked_key_from_withdrawing_funds

  optional_or_dangerous:
    transfer:
      warning:
        - may_move_funds_between_subaccounts_or_wallets
        - should_be_disabled_unless_absolutely_required_and_reviewed

  exchange_specific:
    warning:
      - permission_names_vary_by_exchange
      - user_must_check_exchange_UI_and_terms

## 4. API Key Setup Guidance

setup_guidance:
  - create_dedicated_API_key_for_Axodus_strategy
  - enable_only_required_permissions
  - disable_withdrawals
  - restrict_IP_if_platform_supports_and_architecture_allows
  - set_exchange_level_risk_limits_if_available
  - never_share_API_secret_in_chat_or_public_channels
  - rotate_key_if_exposed
  - revoke_key_when_no_longer_using_strategy
  - use_paper_or_testnet_mode_when_available_for_learning
  - review_exchange_terms

## 5. Storage Models

storage_models:
  user_local_storage:
    description:
      - key_stays_in_user_environment
    risk:
      - local_device_or_browser_security

  encrypted_server_storage:
    description:
      - key_stored_encrypted_by_platform_if implemented
    risk:
      - platform_breach_or_key_management

  delegated_connector:
    description:
      - third_party_connector_or_oauth_like_flow_if exchange_supports
    risk:
      - third_party_dependency

  no_storage_signal_only:
    description:
      - platform_never_stores_API_key_because_user_executes_manually
    risk:
      - no_automation

documentation_rule:
  - Do_not_claim_API_storage_model_until architecture_is_defined.
  - If keys are stored by Axodus, public docs must explain security boundaries without exposing sensitive details.

## 6. API Key Record Fields

API_key_record_fields:
  - user_reference
  - exchange
  - permissions
  - withdrawal_enabled
  - trade_enabled
  - read_enabled
  - IP_restriction_status
  - storage_model
  - encryption_status_if_applicable
  - created_at
  - last_validated_at
  - revoked_at
  - status

## 7. API Safety Checks

safety_checks:
  - withdrawal_permission_check
  - required_permissions_present
  - excessive_permissions_warning
  - exchange_account_mode_check_if_available
  - futures_enabled_warning_if_strategy_requires
  - leverage_setting_warning
  - API_connection_test
  - order_test_or_paper_mode_if_available
  - revocation_guidance_visible

## 8. API Incident Response

incident_types:
  key_exposed:
    response:
      - instruct_user_to_revoke_immediately
      - pause_strategy_instance
      - create_incident_record
      - rotate_or_reconnect_if_needed

  withdrawal_permission_enabled:
    response:
      - warn_user
      - block_or_limit_strategy_if_policy_defines
      - require_new_key_or_permission_update

  exchange_API_error:
    response:
      - pause_or_retry_under_rules
      - notify_user_if_material
      - record_incident

  unauthorized_order_detected:
    response:
      - pause_strategy
      - notify_user
      - investigate_logs
      - require_key_rotation_if needed

## 9. Security Risks

risks:
  key_leak:
    description:
      - exposed_API_key_can_control_account_permissions

  withdrawal_enabled:
    description:
      - leaked_or_misused_key_can_withdraw_funds_if_exchange_allows

  excessive_permissions:
    description:
      - key_can_do_more_than_strategy_needs

  exchange_policy_change:
    description:
      - exchange_changes_API_terms_or_permissions

  storage_breach:
    description:
      - platform_or_user_device_compromised

  phishing:
    description:
      - fake_Axodus_or_exchange_site_collects_keys

## 10. Public Documentation Guidance

The public CEX API Security page should:

- define API keys;
- explain least privilege;
- strongly recommend disabling withdrawals;
- provide setup guidance;
- explain storage models cautiously;
- list safety checks and incident response;
- include clear user responsibility language.
