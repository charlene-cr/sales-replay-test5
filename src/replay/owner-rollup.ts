import type { ReplayScore, SalesCall } from "../types.js";

export interface OwnerRollup {
	readonly owner: string;
	readonly calls: number;
	readonly wins: number;
	readonly followUps: number;
	readonly averageScore: number;
	readonly averageDuration: number;
}

export function buildOwnerRollups(
	calls: readonly SalesCall[],
	scores: readonly ReplayScore[],
): readonly OwnerRollup[] {
	const owners = new Map<string, SalesCall[]>();
	for (const call of calls) {
		owners.set(call.owner, [...(owners.get(call.owner) ?? []), call]);
	}

	return [...owners.entries()]
		.map(([owner, ownerCalls]) => summarizeOwner(owner, ownerCalls, scores))
		.sort((left, right) => right.averageScore - left.averageScore);
}

function summarizeOwner(
	owner: string,
	calls: readonly SalesCall[],
	scores: readonly ReplayScore[],
): OwnerRollup {
	const ownerScores = scores.filter((score) => calls.some((call) => call.id === score.callId));
	return {
		owner,
		calls: calls.length,
		wins: calls.filter((call) => call.outcome === "won").length,
		followUps: calls.filter((call) => call.outcome === "follow-up").length,
		averageScore: average(ownerScores.map((score) => score.overall)),
		averageDuration: average(calls.map((call) => call.durationMinutes)),
	};
}

function average(values: readonly number[]): number {
	if (values.length === 0) {
		return 0;
	}
	return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 10) / 10;
}
