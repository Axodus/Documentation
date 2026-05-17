# Vaults and Strategies

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DeFi

---

## Purpose

Vault-like products can simplify DeFi access by packaging deposits, allocation rules, strategies, and reporting. They are high-responsibility systems because users or Treasury may rely on them to manage assets.

## Definitions

A vault is a structured container that holds or accounts for assets and routes them to defined strategy or allocation logic if implemented.

A strategy is defined logic or policy for allocating assets to protocols, positions, or actions under risk limits.

Neither a vault nor a strategy is a guaranteed-yield box, risk-free savings account, regulated fund, or automatic profit system.

## Vault Types

Possible types include treasury vaults, user vaults, strategy vaults, index or basket vaults, and reward vaults if implemented.

## Required Fields

Vault records should define accepted assets, strategy, deposit rules, withdrawal rules, fees, lockups if any, accounting model, risk level, governance status, security review status, reporting frequency, and disclosures.

Strategy records should define objective, category, protocols, assets, allocation rules, rebalancing rules, risk limits, expected metrics, exit conditions, governance status, treasury impact, security review status, and status.

## Lifecycle

Strategies should move through concept, research, simulation or backtest where applicable, risk review, security review if contract-dependent, treasury or user impact review, governance approval if material, limited pilot, active monitoring, reporting, pause, or deprecation.

## Risk Considerations

Vault and strategy risks include custody risk, smart contract risk, strategy failure, delayed withdrawals, share accounting errors, fees, and governance changes.
