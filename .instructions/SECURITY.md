# Documentation Security

Status: Active Recovery
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

## Secrets Policy

No secrets may be stored in documentation:

- private keys;
- mnemonics;
- wallet credentials;
- API keys;
- treasury credentials;
- production RPC credentials;
- production database credentials;
- exchange keys;
- deployment secrets.

## Execution Instruction Boundary

Documentation must not include on-chain execution instructions that imply approval. Any operational procedure involving transactions, wallets, treasury, trading, swaps, settlement, payouts, or production systems must be marked as blocked, draft, or requiring explicit approval unless verified otherwise.

## Financial Promise Boundary

Documentation must not publish unaudited or unapproved financial promises, APY/yield claims, treasury performance claims, or guaranteed-return language.

## Operational Leakage

Do not publish:

- internal credential paths;
- private infrastructure details;
- unapproved runbooks for production systems;
- private endpoints;
- sensitive logs;
- deployment secrets;
- security bypasses.

## Security-Sensitive Review

Security review is required for documentation involving:

- wallets;
- credentials;
- treasury;
- DeFi;
- DEX;
- trading;
- mining payouts;
- lottery payouts/randomness;
- marketplace settlement;
- governance execution;
- smart contracts;
- production deployment.

## REQ-02 Boundary

REQ-02 does not approve runtime execution, publication, production configuration, wallet signing, treasury movement, trading, swaps, payouts, settlement, or on-chain writes.
