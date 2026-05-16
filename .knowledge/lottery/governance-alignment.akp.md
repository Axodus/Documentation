# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: GOVERNANCE ALIGNMENT MODEL

[CRYPTODRAW_GOVERNANCE_ALIGNMENT]

## 1. Governance Thesis

Lottery parameters directly affect fairness, treasury, compliance, user safety, and trust.

Governance must control material game rules, fee policies, draw schedules, prize allocation, emergency pauses, product activation, and public launch decisions.

## 2. Governance-Sensitive Items

governance_sensitive_items:
  game_model:
    examples:
      - activate_new_game_mode
      - change_selection_rules
      - change_prize_tiers

  draw_parameters:
    examples:
      - ticket_price
      - draw_schedule
      - max_tickets
      - claim_window

  prize_policy:
    examples:
      - prize_pool_percentage
      - rollover_policy
      - reserve_policy
      - unclaimed_prize_policy

  fee_policy:
    examples:
      - treasury_fee
      - operating_fee
      - VRF_cost_allocation

  tokenomics:
    examples:
      - $Neurons_ticket_payment
      - discounts
      - locked_rewards
      - rewards

  compliance_gate:
    examples:
      - jurisdiction_access
      - age_restrictions
      - public_launch
      - KYC_or_restriction_policy_if required

  security:
    examples:
      - contract_deployment
      - VRF_configuration
      - emergency_pause
      - prize_vault_control

## 3. Governance Routing Levels

routing_levels:
  No_Governance:
    examples:
      - internal_concept_notes
      - non-public_simulation

  Governance_Visibility:
    examples:
      - draft_game_model
      - research_update

  Governance_Review:
    examples:
      - testnet_draw
      - public_docs_for_lottery
      - parameter_change_proposal

  Formal_Proposal:
    examples:
      - activate_real_draw
      - approve_game_model
      - approve_fee_or_prize_policy
      - approve_token_payment
      - approve_treasury_reserve_policy

  Emergency_Review:
    examples:
      - randomness_failure
      - contract_vulnerability
      - prize_accounting_error
      - compliance_pause

## 4. Reason Codes

reason_codes:
  LOTTERY_GOVERNANCE_REVIEW_REQUIRED:
    meaning:
      - lottery_parameter_or_product_requires_governance

  GAME_MODEL_APPROVAL_REQUIRED:
    meaning:
      - game_rules_or_mode_require_approval

  PRIZE_POLICY_REVIEW_REQUIRED:
    meaning:
      - prize_pool_or_payout_policy_change

  LOTTERY_COMPLIANCE_GATE_REQUIRED:
    meaning:
      - legal_or_jurisdiction_sensitive_feature

  RANDOMNESS_SECURITY_REVIEW_REQUIRED:
    meaning:
      - VRF_or_randomness_configuration_required

  TREASURY_PRIZE_REVIEW_REQUIRED:
    meaning:
      - prize_pool_fees_or_reserves_affected

  EMERGENCY_DRAW_ACTION:
    meaning:
      - urgent_action_needed_to_protect_integrity_or_users

## 5. Public Documentation Guidance

The public Governance Alignment page should:

- list governance-sensitive items;
- define routing levels and reason codes;
- explain why game and prize parameters require governance;
- link to Governance, Runtime, Treasury, Security, and Compliance.
