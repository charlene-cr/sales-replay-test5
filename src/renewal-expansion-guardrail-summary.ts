import {
  classifyRenewalGuardrail,
  daysUntilRenewal,
  renewalExpansionGuardrails,
  scoreRenewalGuardrail,
  type RenewalExpansionGuardrail,
} from "./renewal-expansion-guardrails.js";

export interface RenewalExpansionGuardrailSummary {
  totalAccounts: number;
  expansionReady: number;
  protectAccounts: number;
  interventionAccounts: number;
  renewalWindowAccounts: number;
  highestPressureAccount: string;
  nextSteps: string[];
  tierCounts: Record<string, number>;
}

export function buildRenewalExpansionGuardrailSummary(
  guardrails: RenewalExpansionGuardrail[] = renewalExpansionGuardrails,
): RenewalExpansionGuardrailSummary {
  let expansionReady = 0;
  let protectAccounts = 0;
  let interventionAccounts = 0;
  let renewalWindowAccounts = 0;
  const tierCounts: Record<string, number> = {};

  for (const guardrail of guardrails) {
    tierCounts[guardrail.tier] = (tierCounts[guardrail.tier] ?? 0) + 1;
    const state = classifyRenewalGuardrail(guardrail);
    if (state === "expand") {
      expansionReady += 1;
    } else if (state === "protect") {
      protectAccounts += 1;
    } else {
      interventionAccounts += 1;
    }

    const days = daysUntilRenewal(guardrail.renewalDate);
    if (days > 0 && days < 30) {
      renewalWindowAccounts += 1;
    }
  }

  const pressureOrdered = [...guardrails].sort(
    (left, right) => scoreRenewalGuardrail(right) - scoreRenewalGuardrail(left),
  );

  return {
    totalAccounts: guardrails.length,
    expansionReady,
    protectAccounts,
    interventionAccounts,
    renewalWindowAccounts,
    highestPressureAccount: pressureOrdered[0]?.accountName ?? "none",
    nextSteps: pressureOrdered.slice(0, 6).map((guardrail) => guardrail.committedNextStep),
    tierCounts,
  };
}

export function summarizeRenewalExpansionGuardrails(
  summary: RenewalExpansionGuardrailSummary = buildRenewalExpansionGuardrailSummary(),
): string {
  return [
    summary.totalAccounts + " renewal guardrails tracked",
    summary.expansionReady + " expansion-ready",
    summary.protectAccounts + " protect",
    summary.interventionAccounts + " intervention",
    summary.renewalWindowAccounts + " inside renewal window",
    "highest pressure: " + summary.highestPressureAccount,
  ].join("; ");
}
