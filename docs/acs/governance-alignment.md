# ACS Governance Alignment

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: ACS Nucleus

---

## Purpose

This document explains how ACS supports governance without replacing it.

## Scope

It covers governance use cases, authority boundaries, review flow, risk flags, reason code support, and anti-patterns.

## Support Areas

- Proposal analysis
- Constitutional consistency checks
- Risk classification
- Technical assumption review
- Summary generation
- Monitoring and follow-up prompts
- Federation review support
- Plugin request review
- Execution receipt drafting
- Accountability report drafting

## Governance Authority

ACS outputs are advisory. Governance bodies remain responsible for decision-making, approval, execution, and accountability.

## ACS Can

- Summarize proposals.
- Classify risk.
- Draft governance documents.
- Recommend review layers.
- Flag constitutional issues.
- Propose reason codes.
- Prepare execution checklists.
- Draft accountability records.
- Detect governance inconsistencies.

## ACS Cannot by Default

- Cast votes.
- Decide proposals.
- Execute treasury actions.
- Activate governance plugins.
- Admit DAOs to federation.
- Override Boardroom or Community DAO.
- Change constitutional rules.
- Mint or unlock tokens.
- Treat its output as final governance result.

## Review Flow

1. Proposal or request is created.
2. ACS loads governance context and knowledge.
3. ACS classifies proposal type and risk level.
4. ACS checks metadata completeness.
5. ACS generates summary and flags missing information.
6. ACS suggests required governance layer and reason codes.
7. Human reviewer validates or corrects output.
8. Proposal moves to governance process.
9. After decision, ACS may help draft receipt or report.

## Risk Flags

Common flags include `CONSTITUTIONAL_ALIGNMENT_UNCLEAR`, `TREASURY_IMPACT`, `TOKENOMICS_IMPACT`, `PLUGIN_SECURITY_RISK`, `FEDERATION_STATUS_IMPACT`, `COMMUNITY_IMPACT`, `ACCOUNTABILITY_REQUIRED`, and `ACS_AUTHORITY_RISK`.

## Anti-Patterns

- ACS acting as shadow governance.
- ACS voting or executing votes without approved role.
- Biased summaries that omit risks.
- Treating reason codes as final decisions.
- Automated plugin approval.
- No receipt for ACS-supported material action.

## Canonical Traceability

- Integration: `INTG-EP8-0006`
- Interfaces: `INT-EP7-007`, `INT-EP7-004`
- Authorities: `AUTH-EP8-0012`, `AUTH-EP8-0013`
- Evidence: `EVID-EP7-0008`, `EVID-EP7-0009`
- Status: signal and local hold are prototype-level; production suspension
  authority is unresolved.

An advisory signal, a local default-deny hold, a governed suspension, and
production enforcement are distinct authority and implementation states.
