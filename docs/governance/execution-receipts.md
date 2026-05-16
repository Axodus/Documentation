# Execution Receipts

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Governance Nucleus

---

## Purpose

Execution receipts connect governance approval to completed action.

## Scope

This document defines execution receipt purpose, types, metadata, statuses, reason codes, and the relationship with accountability records.

## Overview

Governance does not end when a vote passes. A decision becomes trustworthy only when the ecosystem can verify what was executed, when it was executed, who executed it, which systems were affected, and whether execution matched the approved proposal.

An execution receipt is not a marketing update, informal chat message, vague announcement, or unverified claim.

## Receipt Types

- On-chain execution: treasury transaction, contract call, DAO registry update, plugin activation, or parameter update.
- Off-chain execution: documentation update, repository merge, deployment configuration, service activation, or governance status update.
- Hybrid execution: contract deployment plus frontend update, treasury action plus public report, or plugin deployment plus registry update.
- Failed execution: failed transaction, reverted deployment, unmet approval conditions, or payload mismatch.
- Partial execution: some steps completed with follow-up required.

## Required Metadata

Receipts should include receipt ID, linked proposal ID, proposal title, execution status, execution type, execution timestamp, responsible executor, authorizing governance layer, approved action summary, actual action summary, affected nucleus, affected DAO if any, affected chain if any, risk level, reason codes, evidence links, and accountability status.

On-chain receipts should include chain ID, network, transaction hashes, contract addresses, function signatures if available, decoded calldata if available, block number, and execution result.

Off-chain receipts should include repository, PR or commit links, deployment environment, service or route changed, documentation links, and operator notes.

Financial receipts should include treasury amount, asset, source wallet, destination wallet, exchange or protocol if any, risk notes, and reporting requirement.

## Receipt Statuses

- Pending
- Completed
- Completed With Notes
- Partial
- Failed
- Reverted
- Superseded
- Needs Review

## Reason Codes

Common receipt reason codes may include `EXECUTION_MATCHES_APPROVAL`, `EXECUTION_DIFFERS_FROM_APPROVAL`, `TRANSACTION_CONFIRMED`, `TRANSACTION_FAILED`, `OFFCHAIN_ACTION_COMPLETED`, `ACCOUNTABILITY_PUBLICATION_REQUIRED`, `SECURITY_FOLLOWUP_REQUIRED`, `TREASURY_REPORT_REQUIRED`, `REGISTRY_UPDATE_REQUIRED`, and `PARTIAL_EXECUTION`.

## Receipt Flow

1. Proposal approved
2. Execution payload prepared
3. Final pre-execution check
4. Action executed
5. Evidence collected
6. Receipt drafted
7. Reviewer validates match between approval and execution
8. Receipt published or archived
9. Accountability report updated if required
10. Registry updated if relevant

## Accountability Relationship

Receipts feed financial reports, governance records, release notes, treasury reporting, federation registries, and plugin registries.

## Current Status

Execution receipts are a governance design requirement. Tooling, schema, publication location, and automation remain to be implemented.
