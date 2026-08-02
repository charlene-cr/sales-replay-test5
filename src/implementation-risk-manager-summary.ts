import { buildImplementationRiskDeskSummary } from "./implementation-risk-desk-summary.js";

export function buildImplementationRiskManagerSummary(): string[] {
  const summary = buildImplementationRiskDeskSummary();
  return [
    "Implementation risk desk",
    summary.blockedAccounts + " accounts need leadership attention.",
    summary.watchAccounts + " accounts need owner follow-up this week.",
    "Highest risk account: " + summary.highestRiskAccount,
    "Weighted revenue at risk: $" + summary.revenueAtRisk.toLocaleString("en-US"),
  ];
}
