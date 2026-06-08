import type { ReplayScore, ReplaySummary, SalesCall } from "../types.js";

export function summarizeReplay(calls: readonly SalesCall[], scores: readonly ReplayScore[]): ReplaySummary {
	const totalCalls = calls.length;
	const totalDuration = calls.reduce((sum, call) => sum + call.durationMinutes, 0);
	const totalScore = scores.reduce((sum, score) => sum + score.overall, 0);

	return {
		totalCalls,
		averageDuration: totalCalls === 0 ? 0 : round(totalDuration / totalCalls),
		averageScore: scores.length === 0 ? 0 : round(totalScore / scores.length),
		wins: calls.filter((call) => call.outcome === "won").length,
		followUps: calls.filter((call) => call.outcome === "follow-up").length,
	};
}

function round(value: number): number {
	return Math.round(value * 10) / 10;
}
