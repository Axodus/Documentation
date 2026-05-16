# ACS Risk Review

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: ACS Nucleus

---

## Purpose

This document defines risk review standards for ACS outputs.

## Principles

- AI outputs may be wrong.
- Critical decisions require review.
- Security-sensitive actions require explicit validation.
- Treasury-sensitive actions require governance and reporting controls.
- Governance and human operators remain accountable.

## Review Areas

ACS risk review may examine financial risk, technical risk, governance risk, abuse risk, operational risk, data quality, and incomplete assumptions.

## Risk Categories

- Prompt injection
- Tool abuse
- Permission overreach
- Data leakage
- Secret exposure
- Autonomous execution risk
- Governance bypass
- Treasury risk
- Smart contract risk
- Trading risk
- Memory contamination
- Hallucination risk
- Stale data risk
- Public communication risk

## Controls

- Least privilege
- Human review
- Governance review for policy, treasury, DAO, tokenomics, or product access actions
- Environment separation
- Audit logging
- Secret redaction
- Prompt injection defense
- Memory validation
- Role boundaries

## Sensitive Actions

Sensitive actions are prohibited by default without explicit review and authority. These include votes, federation status changes, treasury transfers, capital allocation, contract deployment, token minting or unlocking, exchange trading actions, production deployment, environment variable changes, secret changes, and public financial, partnership, audit, legal, or compliance claims.

## Incident Responses

ACS risk handling should support prompt injection detection, secret exposure redaction and escalation, unauthorized tool action blocking, memory contamination review, and public misinformation correction.
