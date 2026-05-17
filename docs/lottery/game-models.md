# Game Models

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / CryptoDraw

---

## Purpose

A CryptoDraw game model defines how users select entries, how results are generated, how winners are classified, and how prizes are allocated.

## Scope

Game models must be deterministic, versioned, auditable, and reviewed before use. Rule changes must not alter closed draws.

## Game Model Object

Core fields include `game_model_id`, `name`, `version`, `status`, `selection_type`, number range, selection count, columns or positions if any, entry cost if any, maximum tickets if any, draw schedule, randomness method, prize tiers, payout formula, fee policy, claim window, rollover policy, refund policy, restriction policy, governance status, and security status.

## Model Types

- Combination match: users select a set of numbers and winners are determined by match count.
- Positional digit: users select digits or numbers by position and winners are determined by positional matches.
- Random pick: the system generates user selections if supported.
- Multi-ticket batch: multiple combinations can be entered in one purchase if supported.
- Promotional free entry: entry without direct payment if legal, governance, and abuse controls allow it.

## Rule Requirements

Selection rules, invalid selection handling, randomness derivation, prize tiers, fee rules, prize pool rules, claim windows, and version references must be defined before a draw opens.

## Lifecycle

Game models move through concept, draft rules, simulation, risk review, compliance review, security review if contract-dependent, governance approval, testnet or pilot, active under defined scope, and paused or deprecated.

## Related Pages

- [Lotofacil-Style Model](lotofacil-style-model.md)
- [SuperSete-Style Model](supersete-style-model.md)
- [Prize Pools and Payouts](prize-pools-and-payouts.md)
- [Risk and Compliance](risk-and-compliance.md)

