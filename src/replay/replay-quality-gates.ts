export type ReplayQualityGatesPriority = "high" | "medium" | "low";

export interface ReplayQualityGatesScenario {
	readonly id: string;
	readonly account: string;
	readonly owner: string;
	readonly stage: string;
	readonly theme: string;
	readonly buyerSignal: string;
	readonly repAction: string;
	readonly managerNote: string;
	readonly score: number;
	readonly priority: ReplayQualityGatesPriority;
	readonly followUpArtifact: string;
}

export interface ReplayQualityGatesSummary {
	readonly theme: string;
	readonly scenarios: number;
	readonly averageScore: number;
	readonly highPriority: number;
	readonly owners: readonly string[];
	readonly accounts: readonly string[];
	readonly recommendedAction: string;
}

export function summarizeReplayQualityGates(scenarios: readonly ReplayQualityGatesScenario[]): ReplayQualityGatesSummary {
	const scores = scenarios.map((scenario) => scenario.score);
	const highPriority = scenarios.filter((scenario) => scenario.priority === "high").length;
	return {
		theme: "replay quality gates",
		scenarios: scenarios.length,
		averageScore: average(scores),
		highPriority,
		owners: unique(scenarios.map((scenario) => scenario.owner)),
		accounts: unique(scenarios.map((scenario) => scenario.account)),
		recommendedAction: recommendedAction(highPriority, scenarios.length),
	};
}

export function filterReplayQualityGatesByPriority(
	scenarios: readonly ReplayQualityGatesScenario[],
	priority: ReplayQualityGatesPriority,
): readonly ReplayQualityGatesScenario[] {
	return scenarios.filter((scenario) => scenario.priority === priority);
}

export function renderReplayQualityGatesSummary(summary: ReplayQualityGatesSummary): string {
	return [
		"replay quality gates summary",
		`Scenarios: ${summary.scenarios}`,
		`Average score: ${summary.averageScore}`,
		`High priority: ${summary.highPriority}`,
		`Owners: ${summary.owners.join(", ")}`,
		`Recommended action: ${summary.recommendedAction}`,
	].join("\n");
}

function recommendedAction(highPriority: number, total: number): string {
	if (total === 0) {
		return "Add replay quality gates scenarios before manager review.";
	}
	if (highPriority / total > 0.25) {
		return "Review replay quality gates risks in the next sales manager sync.";
	}
	return "Track replay quality gates as a normal replay quality signal.";
}

function average(values: readonly number[]): number {
	if (values.length === 0) {
		return 0;
	}
	return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 10) / 10;
}

function unique(values: readonly string[]): readonly string[] {
	return [...new Set(values)].sort();
}

export const replayQualityGatesTag = "quality";
