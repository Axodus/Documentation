# Supply and Emission

Status: Draft
Version: 0.2.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics

---

## Purpose

Supply and emission define how NEURONS can be created, limited, burned, and reported.

## Supply

| Metric | Value |
| --- | ---: |
| Maximum supply | 10,000,000 NEURONS |
| Decimals | 18 |
| Initial emission | Defined at deploy or contract configuration |
| Future emission | Only through authorized minting |
| Unlimited inflation | No |
| Supply cap enforcement | Yes |

## Emission Model

NEURONS uses controlled minting. Emission depends on:

- valid cryptographic authorization;
- unused nonce;
- amount within the per-transaction limit;
- user within the daily limit;
- cooldown compliance;
- available supply below the maximum cap.

## Mint Validity Formula

```txt
Valid mint =
valid signature
+ unused nonce
+ amount <= 100 NEURONS
+ user daily minted amount <= 1,000 NEURONS
+ cooldown respected
+ totalSupply + amount <= 10,000,000 NEURONS
```

## Economic Limits

| Parameter | Value | Economic effect |
| --- | ---: | --- |
| Maximum supply | 10,000,000 | Enforces hard scarcity |
| Maximum per transaction | 100 | Prevents large single-operation mint events |
| Maximum per user per day | 1,000 | Limits individual daily distribution |
| Cooldown | 1 hour | Reduces spam and automation abuse |
| Nonce | Unique per authorization | Prevents proof reuse |
| PoK authorization | Required | Ties minting to verifiable eligibility |

## Distribution Status

The current documentation does not define a fixed distribution among team, investors, advisors, treasury, liquidity, or public sale participants.

| Distribution type | Status |
| --- | --- |
| PoK-authorized mint | Supported |
| Campaign distribution | Supported through authorizations |
| Controlled airdrop | Supported through authorized minting |
| Participation rewards | Supported by emission logic |
| Team vesting | Not defined |
| Public sale | Not defined |
| Staking rewards | Future |
| DAO treasury | Future |
| DEX liquidity | To be defined |

## Burn

Burn support is part of the architecture. Burn mechanics must be described as supply reduction behavior only. They must not be framed as price support or token appreciation guarantees.

## Risk Considerations

Supply risk includes unauthorized mint attempts, replay attacks, excessive issuance, automation abuse, admin compromise, cross-chain accounting errors, and mismatch between documentation and deployed contracts.

## Related Pages

- [NEURONS Token](neurons-token.md)
- [PoK Minting](pok-minting.md)
- [Contract Dependencies](contract-dependencies.md)
- [Risk and Compliance](risk-and-compliance.md)
