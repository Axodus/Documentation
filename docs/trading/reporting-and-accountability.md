# Reporting and Accountability

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Trading / Accountability

---

## Purpose

Trading must be reportable. Internal, treasury-facing, and user-facing strategies should document status, performance, risks, incidents, and changes.

Reports must contextualize performance and avoid implying future results.

## Report Types

Report types may include strategy status reports, performance reports, risk reports, treasury trading reports, user strategy reports if supported, incident reports, strategy change logs, and governance reports.

## Performance Report Fields

Performance reports should include strategy ID, version, reporting period, market, exchange or connector, status, realized PnL, unrealized PnL if available, net PnL after fees, fees, funding if applicable, slippage, trade count, win rate if relevant, max drawdown, exposure, leverage if any, incidents, limitations, and no-future-guarantee note.

## Risk Report Fields

Risk reports should include risk level, exposure, max drawdown, loss limit status, leverage status, exchange risk notes, API errors, kill switch events, user or treasury impact, mitigation actions, and review requirements.

## Incident Report Fields

Incident reports should include incident ID, strategy ID, date, type, severity, affected scope, user or treasury impact, root cause if known, immediate response, resolution status, follow-up actions, governance or security escalation, public notice requirement, and archived evidence.

## Cadence

Internal research may report on phase completion. Paper trading may report periodically or on phase completion. Limited pilots need frequent status and incident reporting. Active user-facing strategies should provide visible status and material incident notices. Treasury trading follows governance or treasury cadence and event-based reports for material losses or changes.

## Accountability Records

Records may include strategy registry records, access policy records, disclosure records, API security records, treasury approval records, governance records, incident records, and deprecation records.

## Anti-Patterns

Avoid cherry-picked performance, backtests presented as promises, hidden drawdown, gross results without fee context, missing incident records, and performance without strategy version.

## Related Pages

- [Treasury Alignment](treasury-alignment.md)
- [Governance Alignment](governance-alignment.md)
- [Risk Management](risk-management.md)
- [ACS and Trinity Integration](acs-trinity-integration.md)
