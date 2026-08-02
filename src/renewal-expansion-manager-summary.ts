import { buildRenewalExpansionGuardrailSummary } from "./renewal-expansion-guardrail-summary.js";

export function buildRenewalExpansionManagerSummary(): string[] {
  const summary = buildRenewalExpansionGuardrailSummary();
  return [
    "Renewal expansion guardrails",
    summary.expansionReady + " accounts are expansion-ready.",
    summary.protectAccounts + " accounts need value proof before renewal.",
    summary.interventionAccounts + " accounts need manager intervention.",
    "Highest pressure account: " + summary.highestPressureAccount,
  ];
}
