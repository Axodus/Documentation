# AXODUS KNOWLEDGE PACK
# DOMAIN: LOTTERY / CRYPTODRAW
# TYPE: MERKLE AND INDEXING MODEL

[CRYPTODRAW_MERKLE_INDEXING]

## 1. Indexing Thesis

Large lottery systems may have many tickets.

Storing or processing every ticket fully on-chain may be expensive.

CryptoDraw can use off-chain indexing and Merkle root consolidation to preserve auditability while reducing on-chain cost, if implemented correctly.

## 2. Indexing Concepts

concepts:
  ticket_index:
    definition:
      - structured_record_of_tickets_for_draw

  Merkle_tree:
    definition:
      - cryptographic_tree_committing_to_set_of_records

  Merkle_root:
    definition:
      - single_hash_representing_all_records_in_tree

  Merkle_leaf:
    definition:
      - hash_of_ticket_or_winner_record

  Merkle_proof:
    definition:
      - proof_that_leaf_belongs_to_root

  commitment:
    definition:
      - cryptographic_hash_that_commits_to_ticket_or_result_data

## 3. Possible Uses

uses:
  ticket_set_commitment:
    description:
      - commit_to_all_valid_tickets_after_close

  winner_set_commitment:
    description:
      - commit_to_winner_records_for_claim_verification

  claim_verification:
    description:
      - user_or_contract_verifies_ticket_or_prize_with_proof

  auditability:
    description:
      - external_reviewers_can_recompute_root_from_public_dataset_if available

  batch_processing:
    description:
      - process_large_winner_sets_more_efficiently

## 4. Merkle Record Fields

ticket_leaf_fields:
  - draw_id
  - ticket_id
  - owner_reference
  - ticket_hash
  - game_model_version
  - selection_commitment
  - status

winner_leaf_fields:
  - draw_id
  - ticket_id
  - owner_reference
  - prize_tier
  - prize_amount
  - claim_deadline

## 5. Merkle Flow

flow:
  - ticket_window_closes
  - valid_tickets_finalized
  - ticket_dataset_created
  - ticket_leaves_hashed
  - Merkle_tree_built
  - Merkle_root_published_onchain_or_in_report
  - randomness_draw_executed
  - winners_calculated
  - winner_dataset_created_if needed
  - winner_root_published
  - claims_verified_with_proofs_if implemented

## 6. Risks

risks:
  indexer_error:
    description:
      - offchain_ticket_dataset_incorrect

  data_availability:
    description:
      - users_cannot_verify_root_without_dataset

  privacy:
    description:
      - ticket_or_user_data_exposed

  proof_generation_error:
    description:
      - valid_winner_cannot_claim_due_to_proof_issue

  root_mismatch:
    description:
      - published_root_does_not_match_expected_dataset

## 7. Public Documentation Guidance

The public Merkle and Indexing page should:

- explain why Merkle roots may be used;
- define concepts and fields;
- describe flow;
- list risks and data availability requirements;
- avoid claiming full on-chain processing if off-chain indexing is used.
