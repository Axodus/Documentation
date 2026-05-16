# ACS Integration

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Runtime / ACS

---

## Purpose

ACS strengthens Runtime by helping collect context, classify requests, identify missing information, summarize risk, generate handoffs, draft reports, and preserve knowledge.

ACS must operate inside Runtime, not above it.

## Scope

Runtime defines when ACS is used, how ACS output is validated, and when human, governance, security, treasury, or domain review is required.

## ACS Runtime Functions

ACS may support context loading, intake support, classification, risk analysis, scoping support, communication support, handoff support, and accountability support.

Examples include retrieving knowledge packs, summarizing docs, extracting request fields, identifying missing information, assigning draft domain and risk, flagging financial or security risks, drafting deliverables, preparing delay notices, generating Coder tasks, drafting governance briefs, and preparing final summaries.

## ACS Output Statuses

ACS output statuses may include:

- `Draft`: unreviewed agent output.
- `Needs Human Review`: output must be validated before use.
- `Validated`: human or owner confirmed accuracy.
- `Validated With Notes`: usable with limitations.
- `Rejected`: output not accepted.
- `Superseded`: replaced by newer output.

## Review Requirements by Risk

Low-risk outputs may use optional but recommended human review, especially for public docs. Medium-risk outputs need domain or Business owner review. High-risk outputs require mandatory human review and may need adversarial, governance, or security review. Critical outputs are analysis only and require authorized human, governance, security, treasury, or legal review as applicable.

## Agent Role Mapping

- Morpheus: strategy alignment, governance context, documentation structure, narrative consistency, and scope clarity.
- Trinity: trading risk, treasury context, operational feasibility, metrics, monitoring, and financial reporting support.
- Agent Smith: adversarial review, abuse detection, scope creep detection, governance bypass detection, and unsafe permission detection.

## ACS Cannot Do

ACS cannot approve scope as a client commitment, approve governance-sensitive items, approve treasury actions, approve tokenomics or reward policy, execute contract changes without authority, deploy production systems without review, publish public claims without validation, or update knowledge as source of truth without review.

## ACS Runtime Record Fields

ACS records should include ACS output identifier, runtime identifier, agent or agents, task type, input context summary, output summary, assumptions, risk flags, missing information, recommendations, review required, validation status, related handoff or record, and timestamp.

## Anti-Patterns

Avoid ACS outside Runtime, ACS as final approval, unlogged agent output, stale knowledge use, and memory updates without validation.

## Related Pages

- [ACS Overview](../acs/overview.md)
- [ACS Runtime](../acs/runtime.md)
- [ACS Security and Risk](../acs/security-and-risk.md)
- [Runtime Validation](validation-and-confirmation.md)
- [Governance Escalation](governance-escalation.md)
