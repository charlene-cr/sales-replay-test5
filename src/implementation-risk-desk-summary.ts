import {
  classifyImplementationRisk,
  implementationRiskSignals,
  scoreImplementationRisk,
  type ImplementationRiskSignal,
} from "./implementation-risk-desk.js";

export interface ImplementationRiskDeskSummary {
  totalAccounts: number;
  blockedAccounts: number;
  watchAccounts: number;
  healthyAccounts: number;
  revenueAtRisk: number;
  highestRiskAccount: string;
  ownerLoad: Record<string, number>;
  nextActions: string[];
}

export function buildImplementationRiskDeskSummary(
  signals: ImplementationRiskSignal[] = implementationRiskSignals,
): ImplementationRiskDeskSummary {
  const ownerLoad: Record<string, number> = {};
  let blockedAccounts = 0;
  let watchAccounts = 0;
  let healthyAccounts = 0;
  let revenueAtRisk = 0;

  for (const signal of signals) {
    ownerLoad[signal.owner] = (ownerLoad[signal.owner] ?? 0) + 1;
    const state = classifyImplementationRisk(signal);
    if (state === "blocked") {
      blockedAccounts += 1;
      revenueAtRisk += signal.revenueAtRisk;
    } else if (state === "watch") {
      watchAccounts += 1;
      revenueAtRisk += Math.round(signal.revenueAtRisk * 0.4);
    } else {
      healthyAccounts += 1;
    }
  }

  const prioritized = signals.sort(
    (left, right) => scoreImplementationRisk(left) - scoreImplementationRisk(right),
  );

  return {
    totalAccounts: signals.length,
    blockedAccounts,
    watchAccounts,
    healthyAccounts,
    revenueAtRisk,
    highestRiskAccount: prioritized[0]?.accountName ?? "none",
    ownerLoad,
    nextActions: prioritized.slice(0, 5).map((signal) => signal.nextStep),
  };
}

export function summarizeImplementationRiskDesk(
  summary: ImplementationRiskDeskSummary = buildImplementationRiskDeskSummary(),
): string {
  return [
    summary.totalAccounts + " implementation accounts tracked",
    summary.blockedAccounts + " blocked",
    summary.watchAccounts + " on watch",
    "$" + summary.revenueAtRisk.toLocaleString("en-US") + " weighted revenue at risk",
    "top risk: " + summary.highestRiskAccount,
  ].join("; ");
}
