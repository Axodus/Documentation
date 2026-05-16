# AXODUS LOTTERY / CRYPTODRAW KNOWLEDGE PACK

Domain: Lottery  
Product Name: CryptoDraw  
Layer: Semantic Memory  
Audience: Agent Coder, ACS agents, documentation agents, smart contract reviewers, governance reviewers, treasury reviewers, product planners, security reviewers, compliance reviewers  
Status: Draft / Advanced Concept  
Version: 0.1.0  

## Purpose

This folder contains the deep semantic knowledge base for the Lottery nucleus of Axodus, represented by the CryptoDraw product.

These files are not public-facing documentation pages. They are agent-oriented knowledge packs designed to help coding agents, documentation agents, ACS agents, governance reviewers, smart contract reviewers, treasury reviewers, security reviewers, compliance reviewers, and future MCP systems generate accurate and consistent public documentation and implementation plans.

CryptoDraw is the Axodus lottery product concept.

It is designed as a transparent, blockchain-integrated lottery and draw system inspired by number-combination games such as Lotofácil and SuperSete, adapted to Web3 architecture with verifiable randomness, ticket records, draw lifecycle management, prize accounting, governance controls, and accountability reports.

## Product Thesis

CryptoDraw is not a guaranteed profit product.

CryptoDraw is a blockchain-based lottery and draw infrastructure concept designed around fairness, transparency, verifiable randomness, clear rules, accountable prize accounting, and responsible participation.

The strategic objective is to create a lottery product that can eventually integrate:

- user ticket selection;
- soulbound or non-transferable ticket records;
- deterministic draw lifecycle;
- Chainlink VRF or equivalent verifiable randomness;
- off-chain ticket indexing where needed;
- Merkle root consolidation for large ticket sets;
- on-chain prize settlement where feasible;
- claim windows and prize expiration policy;
- treasury and fee routing;
- governance-controlled parameters;
- responsible public disclosures.

## Important Product Status

CryptoDraw is more advanced as a concept/specification than some other future Axodus products, but it must still be documented as Draft, Planned, Experimental, or Needs Review unless the implementation is actually deployed, legally reviewed, and governance-approved.

Lottery products are legally and operationally sensitive.

Public documentation must not imply that CryptoDraw is live, legally available, licensed, regulated, or open to users unless that is verified.

## Required Public Lottery / CryptoDraw Pages

The public documentation generated from this knowledge pack should include at least:

- `docs/lottery/overview.md`
- `docs/lottery/cryptodraw.md`
- `docs/lottery/game-models.md`
- `docs/lottery/lotofacil-style-model.md`
- `docs/lottery/supersete-style-model.md`
- `docs/lottery/ticket-model.md`
- `docs/lottery/draw-lifecycle.md`
- `docs/lottery/randomness-and-vrf.md`
- `docs/lottery/merkle-and-indexing.md`
- `docs/lottery/prize-pools-and-payouts.md`
- `docs/lottery/claims-and-settlement.md`
- `docs/lottery/treasury-and-fees.md`
- `docs/lottery/tokenomics-alignment.md`
- `docs/lottery/governance-alignment.md`
- `docs/lottery/security-and-smart-contracts.md`
- `docs/lottery/operations-and-runtime.md`
- `docs/lottery/acs-integration.md`
- `docs/lottery/reporting-and-accountability.md`
- `docs/lottery/responsible-participation.md`
- `docs/lottery/risk-and-compliance.md`

## Non-Negotiable Lottery Invariants

- Public Lottery documentation must be written in English.
- CryptoDraw must not be described as live unless deployment, governance, operations, and legal/compliance review confirm it.
- CryptoDraw must not promise profit, guaranteed winnings, guaranteed ROI, or risk-free participation.
- Lottery participation may be subject to jurisdiction, age, licensing, and compliance restrictions.
- Public docs must not provide legal conclusions or claim licensing without verified basis.
- Randomness must be verifiable or clearly described as planned/subject to implementation.
- Draw rules must be deterministic, auditable, and versioned.
- Ticket behavior must be explicit: transferable, non-transferable, soulbound, claimable, expired, cancelled, refunded, or invalid.
- Prize pools, fees, treasury routing, and payout formulas must be transparent.
- Off-chain indexing and Merkle roots must be clearly documented if used.
- Governance must control material parameters.
- Treasury must report prize pools, fees, unpaid prizes, reserves, and liabilities.
- Security review is required before any production smart contract handling funds, tickets, randomness, or payouts.
- ACS supports analysis and reporting but does not approve draws, manipulate randomness, authorize payouts, or replace governance.
