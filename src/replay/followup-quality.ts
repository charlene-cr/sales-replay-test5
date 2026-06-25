export type FollowupQualityPriority = "high" | "medium" | "low";

export interface FollowupQualityScenario {
	readonly id: string;
	readonly account: string;
	readonly owner: string;
	readonly stage: string;
	readonly theme: string;
	readonly buyerSignal: string;
	readonly repAction: string;
	readonly managerNote: string;
	readonly score: number;
	readonly priority: FollowupQualityPriority;
	readonly followUpArtifact: string;
}

export interface FollowupQualitySummary {
	readonly theme: string;
	readonly scenarios: number;
	readonly averageScore: number;
	readonly highPriority: number;
	readonly owners: readonly string[];
	readonly accounts: readonly string[];
	readonly recommendedAction: string;
}

export function summarizeFollowupQuality(scenarios: readonly FollowupQualityScenario[]): FollowupQualitySummary {
	const scores = scenarios.map((scenario) => scenario.score);
	const highPriority = scenarios.filter((scenario) => scenario.priority === "high").length;
	return {
		theme: "follow-up quality",
		scenarios: scenarios.length,
		averageScore: average(scores),
		highPriority,
		owners: unique(scenarios.map((scenario) => scenario.owner)),
		accounts: unique(scenarios.map((scenario) => scenario.account)),
		recommendedAction: recommendedAction(highPriority, scenarios.length),
	};
}

export function filterFollowupQualityByPriority(
	scenarios: readonly FollowupQualityScenario[],
	priority: FollowupQualityPriority,
): readonly FollowupQualityScenario[] {
	return scenarios.filter((scenario) => scenario.priority === priority);
}

export function renderFollowupQualitySummary(summary: FollowupQualitySummary): string {
	return [
		"follow-up quality summary",
		`Scenarios: ${summary.scenarios}`,
		`Average score: ${summary.averageScore}`,
		`High priority: ${summary.highPriority}`,
		`Owners: ${summary.owners.join(", ")}`,
		`Recommended action: ${summary.recommendedAction}`,
	].join("\n");
}

function recommendedAction(highPriority: number, total: number): string {
	if (total === 0) {
		return "Add follow-up quality scenarios before manager review.";
	}
	if (highPriority / total > 0.25) {
		return "Review follow-up quality risks in the next sales manager sync.";
	}
	return "Track follow-up quality as a normal replay quality signal.";
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

export const followupQualityTag = "follow-up";
