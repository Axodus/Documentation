# Business Request Intake

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Business

---

## Purpose

Request intake is the first control point of Axodus Business. It converts informal demand into structured information that can be classified, scoped, reviewed, governed, delivered, and accepted.

Intake is not approval, pricing, delivery authorization, or a client commitment.

## Scope

This page applies to external clients, DAOs, sub-DAOs, partners, internal nuclei, community members, tutors, content creators, and users requesting Business-coordinated services.

## Required Intake Data

Every material request should capture:

- requester name or identifier;
- requester type;
- organization, DAO, partner, or internal nucleus;
- contact or reference channel;
- authority to request when acting for a DAO, organization, or partner;
- request title and short description;
- business objective and problem being solved;
- expected outcome;
- request type and affected nuclei;
- urgency and timeline expectations;
- desired deliverables;
- known requirements, dependencies, constraints, and out-of-scope items;
- affected systems, repositories, products, chains, contracts, APIs, or integrations;
- data, access, or permission requirements;
- DAO, product access, plugin, proposal, or constitutional alignment context;
- budget, funding, payment, revenue, treasury, tokenomics, or reward-policy impact;
- security, user, trading, DeFi, legal, compliance, or privacy risk context;
- required reviews, decision owner, approvals, and acceptance criteria.

## Classification Dimensions

Business should classify requests by:

- domain: Governance, Business, Academy, Trading, Treasury, Marketplace, Tokenomics, ACS, DaaS / DeFi, Security, Documentation, BBA, or another responsible nucleus;
- request type: service, development, plugin, consulting, campaign, integration, training, automation, governance, reporting, support, or research;
- risk level: low, medium, high, or critical;
- governance requirement: none, visibility, review, formal proposal, or high-level review;
- delivery complexity: simple, moderate, complex, multi-nucleus, or ecosystem-level.

## Intake Flow

1. Receive the raw request and identify the requester.
2. Convert the raw message into a structured summary.
3. Check required fields and ask for missing information.
4. Classify domain, type, risk, owner, and governance requirement.
5. Use ACS to summarize context, flag gaps, identify risks, and suggest questions.
6. Run human Business review to validate the interpretation.
7. Assign an intake status such as `New`, `Intake Incomplete`, `Classified`, `Rejected`, `Ready for Scoping`, or `Governance Required`.

## Missing Information Patterns

Common gaps include unclear requester authority, vague deliverables, unclear governance impact, unverified token behavior, undefined payment or budget model, missing acceptance criteria, and security-sensitive access without an explicit security model.

Requests with unresolved material gaps should not move directly into delivery.

## ACS Support

ACS may help summarize requests, extract required fields, detect missing information, classify risk, identify governance touchpoints, and draft clarifying questions. ACS output must be reviewed by a Business owner before it becomes a scope, proposal, governance brief, or delivery task.

## Intake Outputs

A completed intake should produce:

- a structured request record;
- classification and responsible nucleus;
- known risks and missing information;
- governance, security, treasury, tokenomics, or domain-review requirements;
- next step: clarification, scoping, rejection, governance review, or archive.

## Risk Considerations

Poor intake creates expectation risk, delivery risk, governance bypass risk, and accountability gaps. Business must not accept vague requests as executable work.

## Future Work

- Publish a canonical intake form template.
- Define request identifiers and status metadata.
- Connect intake records to ACS handoff and governance review records.
