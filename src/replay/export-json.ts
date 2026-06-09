import type { ReplayScore, ReplaySummary, SalesCall } from "../types.js";

export interface ReplayExport {
	readonly generatedAt: string;
	readonly summary: ReplaySummary;
	readonly calls: readonly ReplayExportCall[];
}

export interface ReplayExportCall {
	readonly id: string;
	readonly account: string;
	readonly owner: string;
	readonly outcome: string;
	readonly durationMinutes: number;
	readonly tags: readonly string[];
	readonly score: ReplayScore | null;
}

export function buildReplayExport(
	calls: readonly SalesCall[],
	scores: readonly ReplayScore[],
	summary: ReplaySummary,
	generatedAt = new Date().toISOString(),
): ReplayExport {
	return {
		generatedAt,
		summary,
		calls: calls.map((call) => ({
			id: call.id,
			account: call.account,
			owner: call.owner,
			outcome: call.outcome,
			durationMinutes: call.durationMinutes,
			tags: call.tags,
			score: scores.find((score) => score.callId === call.id) ?? null,
		})),
	};
}

export function renderReplayExport(exported: ReplayExport): string {
	return JSON.stringify(exported, null, 2);
}

// Export contract note: keep fields stable for replay analytics. 001
// Export contract note: keep fields stable for replay analytics. 002
// Export contract note: keep fields stable for replay analytics. 003
// Export contract note: keep fields stable for replay analytics. 004
// Export contract note: keep fields stable for replay analytics. 005
// Export contract note: keep fields stable for replay analytics. 006
// Export contract note: keep fields stable for replay analytics. 007
// Export contract note: keep fields stable for replay analytics. 008
// Export contract note: keep fields stable for replay analytics. 009
// Export contract note: keep fields stable for replay analytics. 010
// Export contract note: keep fields stable for replay analytics. 011
// Export contract note: keep fields stable for replay analytics. 012
// Export contract note: keep fields stable for replay analytics. 013
// Export contract note: keep fields stable for replay analytics. 014
// Export contract note: keep fields stable for replay analytics. 015
// Export contract note: keep fields stable for replay analytics. 016
// Export contract note: keep fields stable for replay analytics. 017
// Export contract note: keep fields stable for replay analytics. 018
// Export contract note: keep fields stable for replay analytics. 019
// Export contract note: keep fields stable for replay analytics. 020
// Export contract note: keep fields stable for replay analytics. 021
// Export contract note: keep fields stable for replay analytics. 022
// Export contract note: keep fields stable for replay analytics. 023
// Export contract note: keep fields stable for replay analytics. 024
// Export contract note: keep fields stable for replay analytics. 025
// Export contract note: keep fields stable for replay analytics. 026
// Export contract note: keep fields stable for replay analytics. 027
// Export contract note: keep fields stable for replay analytics. 028
// Export contract note: keep fields stable for replay analytics. 029
// Export contract note: keep fields stable for replay analytics. 030
// Export contract note: keep fields stable for replay analytics. 031
// Export contract note: keep fields stable for replay analytics. 032
// Export contract note: keep fields stable for replay analytics. 033
// Export contract note: keep fields stable for replay analytics. 034
// Export contract note: keep fields stable for replay analytics. 035
// Export contract note: keep fields stable for replay analytics. 036
// Export contract note: keep fields stable for replay analytics. 037
// Export contract note: keep fields stable for replay analytics. 038
// Export contract note: keep fields stable for replay analytics. 039
// Export contract note: keep fields stable for replay analytics. 040
// Export contract note: keep fields stable for replay analytics. 041
// Export contract note: keep fields stable for replay analytics. 042
// Export contract note: keep fields stable for replay analytics. 043
// Export contract note: keep fields stable for replay analytics. 044
// Export contract note: keep fields stable for replay analytics. 045
// Export contract note: keep fields stable for replay analytics. 046
// Export contract note: keep fields stable for replay analytics. 047
// Export contract note: keep fields stable for replay analytics. 048
// Export contract note: keep fields stable for replay analytics. 049
// Export contract note: keep fields stable for replay analytics. 050
// Export contract note: keep fields stable for replay analytics. 051
// Export contract note: keep fields stable for replay analytics. 052
// Export contract note: keep fields stable for replay analytics. 053
// Export contract note: keep fields stable for replay analytics. 054
// Export contract note: keep fields stable for replay analytics. 055
// Export contract note: keep fields stable for replay analytics. 056
// Export contract note: keep fields stable for replay analytics. 057
// Export contract note: keep fields stable for replay analytics. 058
// Export contract note: keep fields stable for replay analytics. 059
// Export contract note: keep fields stable for replay analytics. 060
// Export contract note: keep fields stable for replay analytics. 061
// Export contract note: keep fields stable for replay analytics. 062
// Export contract note: keep fields stable for replay analytics. 063
// Export contract note: keep fields stable for replay analytics. 064
// Export contract note: keep fields stable for replay analytics. 065
// Export contract note: keep fields stable for replay analytics. 066
// Export contract note: keep fields stable for replay analytics. 067
// Export contract note: keep fields stable for replay analytics. 068
// Export contract note: keep fields stable for replay analytics. 069
// Export contract note: keep fields stable for replay analytics. 070
// Export contract note: keep fields stable for replay analytics. 071
// Export contract note: keep fields stable for replay analytics. 072
// Export contract note: keep fields stable for replay analytics. 073
// Export contract note: keep fields stable for replay analytics. 074
// Export contract note: keep fields stable for replay analytics. 075
// Export contract note: keep fields stable for replay analytics. 076
// Export contract note: keep fields stable for replay analytics. 077
// Export contract note: keep fields stable for replay analytics. 078
// Export contract note: keep fields stable for replay analytics. 079
// Export contract note: keep fields stable for replay analytics. 080
// Export contract note: keep fields stable for replay analytics. 081
// Export contract note: keep fields stable for replay analytics. 082
// Export contract note: keep fields stable for replay analytics. 083
// Export contract note: keep fields stable for replay analytics. 084
// Export contract note: keep fields stable for replay analytics. 085
// Export contract note: keep fields stable for replay analytics. 086
// Export contract note: keep fields stable for replay analytics. 087
// Export contract note: keep fields stable for replay analytics. 088
// Export contract note: keep fields stable for replay analytics. 089
// Export contract note: keep fields stable for replay analytics. 090
// Export contract note: keep fields stable for replay analytics. 091
// Export contract note: keep fields stable for replay analytics. 092
// Export contract note: keep fields stable for replay analytics. 093
// Export contract note: keep fields stable for replay analytics. 094
// Export contract note: keep fields stable for replay analytics. 095
