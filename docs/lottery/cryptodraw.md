# CryptoDraw

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / CryptoDraw

---

## Purpose

CryptoDraw is the Axodus blockchain lottery and draw product concept. It is designed for transparent number-combination games with verifiable randomness, auditable ticket records, deterministic prize rules, and accountable settlement.

## Scope

CryptoDraw includes game mode registry, draw management, ticket management, randomness, indexing, prize management, treasury routing, governance controls, and reporting. It does not imply public availability, legal approval, or guaranteed winnings.

## Product Modules

- Game mode registry: rule versions, active modes, deprecated modes, and parameter references.
- Draw manager: round creation, ticket windows, randomness requests, result publication, and status control.
- Ticket manager: ticket creation, selection validation, ticket status, and soulbound behavior if implemented.
- Randomness module: VRF or equivalent randomness integration and failure handling.
- Indexing module: ticket indexing and Merkle root generation if needed.
- Prize manager: tier calculation, prize allocation, claims, and unclaimed prize policy.
- Treasury module: ticket payments, fees, prize pools, reserves, and reports if paid entries exist.
- Governance module: approval of game modes, parameters, public activation, and emergency actions.
- Reporting module: draw, ticket, prize, randomness, treasury, and incident records.

## User Flow

1. User reads game rules, availability limits, and risk disclosures.
2. User selects a game mode and chooses numbers or uses a random pick if supported.
3. The system validates the ticket selection and entry conditions.
4. User reviews cost, prize rules, deadlines, and claim window.
5. A ticket record is created after confirmation.
6. The ticket waits for the draw result.
7. The result is published with randomness and reporting references.
8. Eligible winners follow the claim process within the defined window.

## Product Statuses

Possible statuses include Concept, Specification, Prototype, Testnet, Compliance Review, Governance Review, Paused, Active, and Deprecated. `Active` must only be used for a live scope supported by implementation, governance, security, compliance, and operational records.

## Risk Considerations

Risks include legal availability, randomness failure, smart contract defects, prize accounting errors, user misunderstanding, operational delay, claim disputes, and jurisdiction restrictions.

## Related Pages

- [Game Models](game-models.md)
- [Draw Lifecycle](draw-lifecycle.md)
- [Risk and Compliance](risk-and-compliance.md)

