# ACS Security and Risk

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: ACS Nucleus

---

## Purpose

This document defines ACS security and risk controls.

## Scope

It covers prompt injection, tool abuse, permissions, data leakage, secret handling, autonomous execution, governance bypass, memory contamination, and incident response.

## Overview

ACS introduces powerful capabilities and new risks. An agent with tools can read, write, execute, communicate, summarize, and influence decisions. If improperly scoped, ACS can create governance, treasury, security, privacy, operational, and reputational risks.

## Main Risks

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
- Governance review
- Environment separation
- Audit logging
- Secret handling and redaction
- Prompt injection defense
- Memory validation
- Role boundaries

## Sensitive Actions

Sensitive actions are prohibited by default without explicit review and authority. They include vote casting, federation status changes, plugin activation, treasury transfers, capital allocation, DeFi protocol interaction, contract deployment, token minting or unlocking, exchange trading actions, production deployments, secret changes, and public financial, partnership, audit, legal, or compliance claims.

## Incident Response

ACS should ignore and flag prompt injection, redact secret exposure, block unauthorized tool attempts, mark contaminated memory as Needs Review, and correct public misinformation when detected.
