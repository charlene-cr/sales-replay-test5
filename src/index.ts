import { runCli } from "./cli/run.js";

process.stdout.write(`${runCli(process.argv.slice(2))}\n`);


import { summarizeImplementationRiskDesk } from "./implementation-risk-desk-summary.js";

export function summarizeImplementationRiskExport(): string {
  return "implementation risk: " + summarizeImplementationRiskDesk();
}


import { summarizeRenewalExpansionGuardrails } from "./renewal-expansion-guardrail-summary.js";

export function summarizeRenewalExpansionExport(): string {
  return "renewal expansion: " + summarizeRenewalExpansionGuardrails();
}
