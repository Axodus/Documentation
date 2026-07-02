---
schema_version: "1.0.0"
document_id: "DOC-RPT-017"
aliases: []
document_type: "REPORT"
title: "Documentation Migration Batch 02 Evidence"
summary: "Records governed Batch 02 migration evidence for DOCUMENTATION-EPIC-02."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.MIGRATION.BATCH_02"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "VALIDATES", target: "DOC-RPT-016"}, {type: "DEPENDS_ON", target: "DOC-RPT-018"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Migration Batch 02 Evidence

## Evidence

Primary ordered path hash: `3ef76c8fc69b6d052bd929a6438556f0f4b72d4d699a0ce638a6fdd926735efb`. Approved 20; rejected 0; substitutions 0.

| Path | Final ID | Pre SHA-256 | Post SHA-256 | Decision |
|---|---|---|---|---|
| `docs/governance/accountability.md` | `GOV-GDE-002` | `fc2804b4fa8e38209191dee07785e4a29d44565714a863317c8c4208997d8ff4` | `c0257441a1a108d67fd9c54992568fae2cb67a65b2dadae87aeb1997c4814a88` | PASS |
| `docs/governance/constitutional-governance.md` | `GOV-GDE-003` | `1c25d82512443bf2ba67fa4d858b8d1cee16174405f69238c3e0be022b87e788` | `98767028d71232a892bd028f7f90a305928a77db4b48f92301d7edb932f2a4ff` | PASS |
| `docs/governance/execution-receipts.md` | `GOV-GDE-004` | `4387dc0be7faef7fa0bc3c89bcbdd5de6a5b5b188e748a5f29ab6147c3258e0f` | `67ba34c7e95b31f6f9e4b832deeabb050d53863799922876ca79fc753329be73` | PASS |
| `docs/governance/governance-risk.md` | `GOV-GDE-005` | `70a8d6a2de24b064b03f52322b4b7a1cd3cbf3f9792bc3bf28aae0cb5a2a79b3` | `24e2699661c813409aead4abd4ecb52c348c245db404a5fa05ffb3eeda6d0275` | PASS |
| `docs/governance/proposal-lifecycle.md` | `GOV-GDE-006` | `1f9bd14bdd0622b37580980ac87d724cc3f67fd66688a2074524661795e904f7` | `6050544f1ad0db943996f91513696c92ce029d8d8cbf690ea2fc3ae1bc9c2891` | PASS |
| `docs/security/api-security.md` | `SEC-GDE-002` | `96940b094e0ef78711635647c4f39fff1b00aa85ab628ea79d20ac0f1d0b055a` | `d70e54b2847894848106132c80be7dcf5311196026e189bb0cadd90a0523c01f` | PASS |
| `docs/security/disclosure-policy.md` | `SEC-GDE-003` | `d1430ee2928b14f89ae83011698db31af9b82b86e2fa16c3d48c83f86e9b3a1b` | `7741633cefc3424e7284454ff05df8daa5b31a214ecc542e0d0b124fd867aefb` | PASS |
| `docs/security/frontend-security.md` | `SEC-GDE-004` | `8244478e7b90ec1e49b82926ca1ba6c424236c20251e0ff36a135cb1a33b1985` | `3808d7636c238ab347041bb34c0c8e9c90cadab2b1d07fc678608c836afec874` | PASS |
| `docs/security/smart-contract-security.md` | `SEC-GDE-005` | `3aa2df2510c5eb9f761c28bdd999fc61e2346739cef8e288c45f2c600220a070` | `44c656b10ceb07fb45b3e8cff3920a4538b9aa864e938e406947a8cfc6e91276` | PASS |
| `docs/security/wallet-security.md` | `SEC-GDE-006` | `91a47daf1855beffdbe07db37965a61dd0ee3e501bc6cd2f35b95188b62f18df` | `e17c7a0edd3ca14f3121125a56ea357a99865fba3e8aab37d5f8b9bd0164e075` | PASS |
| `docs/accountability/financial-reports.md` | `ACCOUNT-GDE-002` | `4f8d774b7f0f46390997946d13ae829d90ad8545797019cd7be94c9864178b35` | `27894880afdb83d8b3525a01241e32b728d2c11e1567124c21e7ff182e8f5a0a` | PASS |
| `docs/accountability/governance-records.md` | `ACCOUNT-GDE-003` | `1cd0ad91bf34c4e9bc6161de94d2573216c4cc1a113a7244f723b8dd9a878ecf` | `3d365dfb8f23f4bce1243dc3f5a50c870af4afb2777a55ad465a44512d378861` | PASS |
| `docs/accountability/release-notes.md` | `ACCOUNT-GDE-004` | `86b3c6f30a7ec03ba5a214725ec899f6f3cb8921c234844564e7150f490ee24a` | `4af4f2434563bc1d4725a2afb6c86991b9b33b7247a23dc4b6a109d84ad1b247` | PASS |
| `docs/accountability/roadmap-updates.md` | `ACCOUNT-GDE-005` | `8db1fce00e00054ba0f738c1c16ccf6adeff77b1869be1e5faeb408f20375388` | `4b15a117911918c065851fe36b22001f0b818fa0a45ec11b43db8721821fc97b` | PASS |
| `docs/runtime/change-control.md` | `RUNTIME-GDE-002` | `6a7f531d7e8d196499f2b6ff4a7c13d279aacc5762ff6c004fdcb4bfd36e7752` | `7bbbc9f6388b59624b40a1218250f255958ba120e2a10231739fd31bb7938317` | PASS |
| `docs/runtime/governance-escalation.md` | `RUNTIME-GDE-003` | `9891e699d30ae6615332b2ca3cb7aca33db24f40d17e1369ea68812c9646176e` | `efa3b676416854364517507513e3b9d63a1bf780e1173127e12b67c272688b16` | PASS |
| `docs/runtime/risk-controls.md` | `RUNTIME-GDE-004` | `6f74c6b7658aec9030eb0f1afeef8853d1b715f401da16831a0f47de5c8fa492` | `57f7f1fddf6b447e1139b368a908644110ffb5f194ce13d53cd3e46d4006a902` | PASS |
| `docs/treasury/compliance-and-disclosures.md` | `TREASURY-GDE-002` | `5b5bf24f2f18a33fe089ab4412c7ea5161864c13d62f37969dc0b26302576fe2` | `86f5efdf2a25c56d04b4504bbaf5a115f20919fe48246168e76e564b75116842` | PASS |
| `docs/treasury/custody-and-security.md` | `TREASURY-GDE-003` | `835c861142e78b813105e2db25a8531185d479ad43837bcbb351bccaa704ac4b` | `4b0211d38a75ec7d2460d48a4a3527ebeab0dac6b0eb392324ba84c496fb75bb` | PASS |
| `docs/treasury/risk-management.md` | `TREASURY-GDE-004` | `f160be00dd87db7c4fd66f546eea7febe1ffe21ebc18b0a9334adccfe46008ac` | `2982ac672d9dd555bbd5c5359b8b021543986c78caa529ad4ae5976dbb7f9f43` | PASS |

Exact paths were removed from both registries. Authority, security and semantic reviews passed without copied sensitive values.
