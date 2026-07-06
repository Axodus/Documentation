# Supply and Emission

Status: Draft
Version: 0.2.0
Last Updated: 2026-06-05
Owner: Axodus Tokenomics

---

## Purpose

Supply and emission define how $Neurons can be created, limited, burned, and reported.

## Supply

| Metric | Value |
| --- | ---: |
| Supply policy | Pending approved public disclosure |
| Decimals | 18 |
| Initial emission | Defined at deploy or contract configuration |
| Future emission | Only through authorized minting |
| Unlimited inflation | No |
| Supply cap enforcement | Yes |

## Emission Model

$Neurons uses controlled minting. Emission depends on:

- valid cryptographic authorization;
- unused nonce;
- amount within the per-transaction limit;
- user within the daily limit;
- cooldown compliance;
- available supply within approved contract and policy limits.

## Mint Validity Formula

```txt
Valid mint =
valid signature
+ unused nonce
+ amount <= 100 $Neurons
+ user daily minted amount <= 1,000 $Neurons
+ cooldown respected
+ totalSupply + amount <= approved supply policy limit
```

## Economic Limits

| Parameter | Value | Economic effect |
| --- | ---: | --- |
| Supply policy limit | Pending approved public disclosure | Prevents unauthorized issuance beyond approved limits |
| Maximum per transaction | 100 | Prevents large single-operation mint events |
| Maximum per user per day | 1,000 | Limits individual daily distribution |
| Cooldown | 1 hour | Reduces spam and automation abuse |
| Nonce | Unique per authorization | Prevents proof reuse |
| PoK authorization | Required | Ties minting to verifiable eligibility |

## Distribution Status

The current documentation does not define a fixed distribution among team, investors, advisors, treasury, liquidity, or public sale participants.

| Distribution type | Status |
| --- | --- |
| PoK-authorized mint | Supported by draft model if implementation is verified |
| Campaign distribution | Supported by draft model through authorizations if implementation is verified |
| Controlled airdrop | Supported by draft model through authorized minting if implementation is verified |
| Participation rewards | Supported by draft model if implementation is verified |
| Team vesting | Not defined |
| Public sale | Not defined |
| Staking rewards | Future |
| DAO treasury | Future |
| DEX liquidity | Requires review |

## Burn

Burn support is part of the architecture. Burn mechanics must be described as supply reduction behavior only. They must not be framed as price support or token appreciation guarantees.

## Risk Considerations

Supply risk includes unauthorized mint attempts, replay attacks, excessive issuance, automation abuse, admin compromise, cross-chain accounting errors, and mismatch between documentation and deployed contracts.

## Draft Boundary

This page describes a draft/candidate emission model. It does not approve final allocations, public sale mechanics, DEX liquidity policy, staking rewards, treasury distribution, investment expectations, or production token launch status.

## Related Pages

- [$Neurons Token](neurons-token.md)
- [PoK Minting](pok-minting.md)
- [Contract Dependencies](contract-dependencies.md)
- [Risk and Compliance](risk-and-compliance.md)
