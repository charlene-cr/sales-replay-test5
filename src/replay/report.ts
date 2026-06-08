import type { ReplayScore, ReplaySummary, SalesCall } from "../types.js";

export function renderReport(
	calls: readonly SalesCall[],
	scores: readonly ReplayScore[],
	summary: ReplaySummary,
): string {
	const lines = [
		"Sales Replay Summary",
		"====================",
		`Calls: ${summary.totalCalls}`,
		`Average duration: ${summary.averageDuration} minutes`,
		`Average score: ${summary.averageScore}`,
		`Wins: ${summary.wins}`,
		`Follow-ups: ${summary.followUps}`,
		"",
		"Calls",
		"-----",
	];

	for (const call of calls) {
		const score = scores.find((item) => item.callId === call.id);
		lines.push(`${call.account} (${call.owner}) - ${call.outcome} - ${score?.overall ?? "n/a"}`);
		for (const note of score?.notes ?? []) {
			lines.push(`  - ${note}`);
		}
	}

	return lines.join("\n");
}
