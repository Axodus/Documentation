# Frontend Security

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-06-05
Owner: Security

---

## Purpose

Frontend security protects users from unsafe wallet flows, incorrect network assumptions, and data exposure.

## Requirements

- Keep wallet logic isolated.
- Validate chain and contract information.
- Avoid exposing secrets.
- Protect restricted routes.
- Show clear transaction intent before signing.

## Draft Controls

Frontend documentation should identify whether a page is informational, read-only, mock/local, testnet, or production-gated. User-facing flows must not hide execution state, unsupported integrations, network assumptions, or approval requirements.

Frontend security review should check:

- wallet and transaction prompts;
- network and contract display;
- restricted route behavior;
- error and fallback states;
- client-side secret exposure;
- dependency and third-party script risk;
- misleading production or financial claims.

## Publication Boundary

This page is draft guidance. It does not certify a frontend as audited, production-ready, or safe for live transactions.
