# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Lottery
  product: CryptoDraw
  role: blockchain_lottery_draw_ticket_randomness_prize_and_accountability_layer
  maturity: advanced_concept
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - lottery-core.akp.md
  - cryptodraw-product.akp.md
  - game-models.akp.md
  - lotofacil-style-model.akp.md
  - supersete-style-model.akp.md
  - ticket-model.akp.md
  - draw-lifecycle.akp.md
  - randomness-vrf.akp.md
  - merkle-indexing.akp.md
  - prize-pools-payouts.akp.md
  - claims-settlement.akp.md
  - treasury-fees.akp.md
  - tokenomics-alignment.akp.md
  - governance-alignment.akp.md
  - security-smart-contracts.akp.md
  - operations-runtime.akp.md
  - acs-integration.akp.md
  - reporting-accountability.akp.md
  - responsible-participation.akp.md
  - risk-compliance.akp.md
  - lottery-page-directives.akp.md

semantic_domains:
  identity:
    source_file: lottery-core.akp.md
    concepts:
      - lottery_nucleus
      - CryptoDraw
      - no_guaranteed_winnings
      - blockchain_draws
      - responsible_participation

  product:
    source_file: cryptodraw-product.akp.md
    concepts:
      - product_scope
      - game_modes
      - transparent_draws
      - verifiable_randomness
      - accountable_prizes

  game_models:
    source_file: game-models.akp.md
    concepts:
      - number_combination_games
      - draw_rules
      - ticket_selection
      - prize_tiers
      - validation

  lotofacil_style:
    source_file: lotofacil-style-model.akp.md
    concepts:
      - Lotofacil_inspired
      - choose_numbers
      - matching_tiers
      - combinatorial_ticket

  supersete_style:
    source_file: supersete-style-model.akp.md
    concepts:
      - SuperSete_inspired
      - columns
      - digits
      - positional_matching

  tickets:
    source_file: ticket-model.akp.md
    concepts:
      - ticket
      - soulbound_ticket
      - non_transferable_ticket
      - ticket_hash
      - metadata
      - ticket_status

  lifecycle:
    source_file: draw-lifecycle.akp.md
    concepts:
      - round
      - open
      - close
      - randomness_request
      - draw_execution
      - result_publication
      - claim_window

  randomness:
    source_file: randomness-vrf.akp.md
    concepts:
      - Chainlink_VRF
      - verifiable_randomness
      - seed
      - callback
      - randomness_failure

  merkle:
    source_file: merkle-indexing.akp.md
    concepts:
      - Merkle_root
      - offchain_indexing
      - ticket_commitment
      - winner_proof
      - batch_settlement

  prizes:
    source_file: prize-pools-payouts.akp.md
    concepts:
      - prize_pool
      - payout_formula
      - prize_tier
      - fees
      - rollover
      - reserve

  claims:
    source_file: claims-settlement.akp.md
    concepts:
      - claim_window
      - payout_claim
      - settlement
      - expired_prize
      - refund
      - unclaimed_prize

  treasury:
    source_file: treasury-fees.akp.md
    concepts:
      - prize_reserve
      - operating_fee
      - treasury_fee
      - unpaid_prizes
      - reporting

  tokenomics:
    source_file: tokenomics-alignment.akp.md
    concepts:
      - $Neurons_utility
      - ticket_payments
      - rewards
      - locked_rewards
      - access
      - token_risk

  governance:
    source_file: governance-alignment.akp.md
    concepts:
      - draw_parameters
      - fee_policy
      - game_model_approval
      - emergency_pause
      - compliance_gate

  security:
    source_file: security-smart-contracts.akp.md
    concepts:
      - ticket_contract
      - draw_manager
      - VRF_consumer
      - prize_vault
      - access_control
      - audit

  operations:
    source_file: operations-runtime.akp.md
    concepts:
      - operational_runtime
      - draw_operator
      - incident_response
      - monitoring
      - support

  ACS:
    source_file: acs-integration.akp.md
    concepts:
      - Morpheus
      - Agent_Smith
      - Trinity
      - draw_report
      - risk_review
      - claim_review

  reporting:
    source_file: reporting-accountability.akp.md
    concepts:
      - draw_report
      - prize_report
      - ticket_report
      - VRF_receipt
      - accountability

  responsibility:
    source_file: responsible-participation.akp.md
    concepts:
      - age_restrictions
      - jurisdiction
      - spending_limits
      - no_guaranteed_winnings
      - user_safety

  compliance:
    source_file: risk-compliance.akp.md
    concepts:
      - gambling_regulation
      - legal_review
      - licensing
      - consumer_protection
      - AML_KYC_if required
      - risk_disclosures

public_documentation_targets:
  overview:
    target: docs/lottery/overview.md
    source_files:
      - lottery-core.akp.md
      - cryptodraw-product.akp.md

  cryptodraw:
    target: docs/lottery/cryptodraw.md
    source_files:
      - cryptodraw-product.akp.md

  game_models:
    target: docs/lottery/game-models.md
    source_files:
      - game-models.akp.md

  lotofacil:
    target: docs/lottery/lotofacil-style-model.md
    source_files:
      - lotofacil-style-model.akp.md

  supersete:
    target: docs/lottery/supersete-style-model.md
    source_files:
      - supersete-style-model.akp.md

  tickets:
    target: docs/lottery/ticket-model.md
    source_files:
      - ticket-model.akp.md

  draw_lifecycle:
    target: docs/lottery/draw-lifecycle.md
    source_files:
      - draw-lifecycle.akp.md

  randomness:
    target: docs/lottery/randomness-and-vrf.md
    source_files:
      - randomness-vrf.akp.md

  merkle:
    target: docs/lottery/merkle-and-indexing.md
    source_files:
      - merkle-indexing.akp.md

  prizes:
    target: docs/lottery/prize-pools-and-payouts.md
    source_files:
      - prize-pools-payouts.akp.md

  claims:
    target: docs/lottery/claims-and-settlement.md
    source_files:
      - claims-settlement.akp.md

  treasury:
    target: docs/lottery/treasury-and-fees.md
    source_files:
      - treasury-fees.akp.md

  tokenomics:
    target: docs/lottery/tokenomics-alignment.md
    source_files:
      - tokenomics-alignment.akp.md

  governance:
    target: docs/lottery/governance-alignment.md
    source_files:
      - governance-alignment.akp.md

  security:
    target: docs/lottery/security-and-smart-contracts.md
    source_files:
      - security-smart-contracts.akp.md

  operations:
    target: docs/lottery/operations-and-runtime.md
    source_files:
      - operations-runtime.akp.md

  ACS:
    target: docs/lottery/acs-integration.md
    source_files:
      - acs-integration.akp.md

  reporting:
    target: docs/lottery/reporting-and-accountability.md
    source_files:
      - reporting-accountability.akp.md

  responsible_participation:
    target: docs/lottery/responsible-participation.md
    source_files:
      - responsible-participation.akp.md

  risk:
    target: docs/lottery/risk-and-compliance.md
    source_files:
      - risk-compliance.akp.md

global_invariants:
  - no_guaranteed_winnings
  - no_guaranteed_profit
  - no_live_or_licensed_claim_without_verification
  - lottery_is_jurisdiction_sensitive
  - randomness_must_be_verifiable_or_marked_planned
  - ticket_rules_must_be_deterministic_and_versioned
  - prize_pool_and_fee_logic_must_be_transparent
  - claims_and_expiration_policy_must_be_clear
  - governance_controls_material_parameters
  - treasury_reports_prize_fees_reserves_and_liabilities
  - smart_contracts_require_security_review
  - ACS_is_advisory_not_authority
  - all_public_docs_must_be_English
