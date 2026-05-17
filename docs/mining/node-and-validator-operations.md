# Node and Validator Operations

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-17
Owner: Axodus Mining

---

## Purpose

Some networks do not use Proof-of-Work mining. Axodus Mining may include node or validator operations as a mining-adjacent infrastructure model.

## Scope

Validator rewards are not PoW mining rewards and must be documented separately. Slashing, uptime, delegation, key custody, and network upgrades require explicit risk context.

## Concepts

A full node stores and validates network data without necessarily earning rewards. A validator participates in consensus and may earn rewards. Delegation allows token holders to delegate stake where supported. Slashing is a penalty for misbehavior or downtime if the network applies it.

## Validator Fields

Fields may include validator ID, network, provider or hosting, operator, stake or delegation, commission, uptime, rewards, slashing status, governance status, security status, monitoring status, and status.

## Lifecycle

The lifecycle includes network selection, requirements review, infrastructure setup, key management, monitoring, testnet or dry run, treasury or governance review if stake is involved, activation, monitoring, rewards reporting, maintenance, pause, or decommission.

## Risk Considerations

Risks include slashing, downtime, key compromise, protocol upgrades, delegation risk, and commission misunderstanding.

