# Merkle and Indexing

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / CryptoDraw

---

## Purpose

Merkle indexing may allow CryptoDraw to handle large ticket sets while preserving auditability and reducing on-chain cost.

## Scope

This model is optional and must be implemented carefully. If off-chain indexing is used, data availability and reproducibility are mandatory review concerns.

## Concepts

A ticket index is a structured record of tickets for a draw. A Merkle tree commits to a set of records. A Merkle root represents the dataset. A Merkle leaf is a ticket or winner hash. A Merkle proof verifies that a leaf belongs to a root.

## Uses

Merkle roots may be used for ticket set commitment, winner set commitment, claim verification, auditability, and batch settlement.

## Record Fields

Ticket leaves may include draw ID, ticket ID, owner reference, ticket hash, game model version, selection commitment, and status. Winner leaves may include draw ID, ticket ID, owner reference, prize tier, prize amount, and claim deadline.

## Flow

The ticket window closes, valid tickets are finalized, a dataset is created, leaves are hashed, the Merkle tree is built, the root is published, the draw executes, winners are calculated, and a winner root is published if needed.

## Risk Considerations

Risks include indexer error, data unavailability, privacy leakage, proof generation errors, and root mismatch.

## Related Pages

- [Ticket Model](ticket-model.md)
- [Claims and Settlement](claims-and-settlement.md)
- [Reporting and Accountability](reporting-and-accountability.md)

