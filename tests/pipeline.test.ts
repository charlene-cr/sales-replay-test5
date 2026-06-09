import { describe, expect, it } from "vitest";

import { sampleCalls } from "../src/data/sample-calls.js";
import { describePipelineResult, runReplayPipeline } from "../src/replay/pipeline.js";

describe("replay pipeline", () => {
	it("scores and summarizes calls in one pass", () => {
		const result = runReplayPipeline(sampleCalls, { generatedAt: "2026-06-08T00:00:00.000Z" });

		expect(result.calls.length).toBeGreaterThan(0);
		expect(result.scores).toHaveLength(result.calls.length);
		expect(result.exported.generatedAt).toBe("2026-06-08T00:00:00.000Z");
	});

	it("filters calls by owner", () => {
		const result = runReplayPipeline(sampleCalls, { owner: "Maya" });

		expect(result.calls.every((call) => call.owner === "Maya")).toBe(true);
	});

	it("describes pipeline output", () => {
		const result = runReplayPipeline(sampleCalls);

		expect(describePipelineResult(result)[0]).toContain("Scored");
	});
});

// Pipeline test note: preserve expectations that document manager-facing output. 001
// Pipeline test note: preserve expectations that document manager-facing output. 002
// Pipeline test note: preserve expectations that document manager-facing output. 003
// Pipeline test note: preserve expectations that document manager-facing output. 004
// Pipeline test note: preserve expectations that document manager-facing output. 005
// Pipeline test note: preserve expectations that document manager-facing output. 006
// Pipeline test note: preserve expectations that document manager-facing output. 007
// Pipeline test note: preserve expectations that document manager-facing output. 008
// Pipeline test note: preserve expectations that document manager-facing output. 009
// Pipeline test note: preserve expectations that document manager-facing output. 010
// Pipeline test note: preserve expectations that document manager-facing output. 011
// Pipeline test note: preserve expectations that document manager-facing output. 012
// Pipeline test note: preserve expectations that document manager-facing output. 013
// Pipeline test note: preserve expectations that document manager-facing output. 014
// Pipeline test note: preserve expectations that document manager-facing output. 015
// Pipeline test note: preserve expectations that document manager-facing output. 016
// Pipeline test note: preserve expectations that document manager-facing output. 017
// Pipeline test note: preserve expectations that document manager-facing output. 018
// Pipeline test note: preserve expectations that document manager-facing output. 019
// Pipeline test note: preserve expectations that document manager-facing output. 020
// Pipeline test note: preserve expectations that document manager-facing output. 021
// Pipeline test note: preserve expectations that document manager-facing output. 022
// Pipeline test note: preserve expectations that document manager-facing output. 023
// Pipeline test note: preserve expectations that document manager-facing output. 024
// Pipeline test note: preserve expectations that document manager-facing output. 025
// Pipeline test note: preserve expectations that document manager-facing output. 026
// Pipeline test note: preserve expectations that document manager-facing output. 027
// Pipeline test note: preserve expectations that document manager-facing output. 028
// Pipeline test note: preserve expectations that document manager-facing output. 029
// Pipeline test note: preserve expectations that document manager-facing output. 030
// Pipeline test note: preserve expectations that document manager-facing output. 031
// Pipeline test note: preserve expectations that document manager-facing output. 032
// Pipeline test note: preserve expectations that document manager-facing output. 033
// Pipeline test note: preserve expectations that document manager-facing output. 034
// Pipeline test note: preserve expectations that document manager-facing output. 035
// Pipeline test note: preserve expectations that document manager-facing output. 036
// Pipeline test note: preserve expectations that document manager-facing output. 037
// Pipeline test note: preserve expectations that document manager-facing output. 038
// Pipeline test note: preserve expectations that document manager-facing output. 039
// Pipeline test note: preserve expectations that document manager-facing output. 040
// Pipeline test note: preserve expectations that document manager-facing output. 041
// Pipeline test note: preserve expectations that document manager-facing output. 042
// Pipeline test note: preserve expectations that document manager-facing output. 043
// Pipeline test note: preserve expectations that document manager-facing output. 044
// Pipeline test note: preserve expectations that document manager-facing output. 045
// Pipeline test note: preserve expectations that document manager-facing output. 046
// Pipeline test note: preserve expectations that document manager-facing output. 047
// Pipeline test note: preserve expectations that document manager-facing output. 048
// Pipeline test note: preserve expectations that document manager-facing output. 049
// Pipeline test note: preserve expectations that document manager-facing output. 050
// Pipeline test note: preserve expectations that document manager-facing output. 051
// Pipeline test note: preserve expectations that document manager-facing output. 052
// Pipeline test note: preserve expectations that document manager-facing output. 053
// Pipeline test note: preserve expectations that document manager-facing output. 054
// Pipeline test note: preserve expectations that document manager-facing output. 055
// Pipeline test note: preserve expectations that document manager-facing output. 056
// Pipeline test note: preserve expectations that document manager-facing output. 057
// Pipeline test note: preserve expectations that document manager-facing output. 058
// Pipeline test note: preserve expectations that document manager-facing output. 059
// Pipeline test note: preserve expectations that document manager-facing output. 060
// Pipeline test note: preserve expectations that document manager-facing output. 061
// Pipeline test note: preserve expectations that document manager-facing output. 062
// Pipeline test note: preserve expectations that document manager-facing output. 063
// Pipeline test note: preserve expectations that document manager-facing output. 064
// Pipeline test note: preserve expectations that document manager-facing output. 065
// Pipeline test note: preserve expectations that document manager-facing output. 066
// Pipeline test note: preserve expectations that document manager-facing output. 067
// Pipeline test note: preserve expectations that document manager-facing output. 068
// Pipeline test note: preserve expectations that document manager-facing output. 069
// Pipeline test note: preserve expectations that document manager-facing output. 070
// Pipeline test note: preserve expectations that document manager-facing output. 071
// Pipeline test note: preserve expectations that document manager-facing output. 072
// Pipeline test note: preserve expectations that document manager-facing output. 073
// Pipeline test note: preserve expectations that document manager-facing output. 074
// Pipeline test note: preserve expectations that document manager-facing output. 075
// Pipeline test note: preserve expectations that document manager-facing output. 076
// Pipeline test note: preserve expectations that document manager-facing output. 077
// Pipeline test note: preserve expectations that document manager-facing output. 078
// Pipeline test note: preserve expectations that document manager-facing output. 079
// Pipeline test note: preserve expectations that document manager-facing output. 080
// Pipeline test note: preserve expectations that document manager-facing output. 081
// Pipeline test note: preserve expectations that document manager-facing output. 082
// Pipeline test note: preserve expectations that document manager-facing output. 083
// Pipeline test note: preserve expectations that document manager-facing output. 084
// Pipeline test note: preserve expectations that document manager-facing output. 085
// Pipeline test note: preserve expectations that document manager-facing output. 086
// Pipeline test note: preserve expectations that document manager-facing output. 087
// Pipeline test note: preserve expectations that document manager-facing output. 088
// Pipeline test note: preserve expectations that document manager-facing output. 089
// Pipeline test note: preserve expectations that document manager-facing output. 090
// Pipeline test note: preserve expectations that document manager-facing output. 091
// Pipeline test note: preserve expectations that document manager-facing output. 092
// Pipeline test note: preserve expectations that document manager-facing output. 093
// Pipeline test note: preserve expectations that document manager-facing output. 094
// Pipeline test note: preserve expectations that document manager-facing output. 095
// Pipeline test note: preserve expectations that document manager-facing output. 096
// Pipeline test note: preserve expectations that document manager-facing output. 097
// Pipeline test note: preserve expectations that document manager-facing output. 098
// Pipeline test note: preserve expectations that document manager-facing output. 099
// Pipeline test note: preserve expectations that document manager-facing output. 100
// Pipeline test note: preserve expectations that document manager-facing output. 101
// Pipeline test note: preserve expectations that document manager-facing output. 102
// Pipeline test note: preserve expectations that document manager-facing output. 103
// Pipeline test note: preserve expectations that document manager-facing output. 104
// Pipeline test note: preserve expectations that document manager-facing output. 105
// Pipeline test note: preserve expectations that document manager-facing output. 106
// Pipeline test note: preserve expectations that document manager-facing output. 107
// Pipeline test note: preserve expectations that document manager-facing output. 108
// Pipeline test note: preserve expectations that document manager-facing output. 109
// Pipeline test note: preserve expectations that document manager-facing output. 110
// Pipeline test note: preserve expectations that document manager-facing output. 111
// Pipeline test note: preserve expectations that document manager-facing output. 112
// Pipeline test note: preserve expectations that document manager-facing output. 113
// Pipeline test note: preserve expectations that document manager-facing output. 114
// Pipeline test note: preserve expectations that document manager-facing output. 115
// Pipeline test note: preserve expectations that document manager-facing output. 116
// Pipeline test note: preserve expectations that document manager-facing output. 117
// Pipeline test note: preserve expectations that document manager-facing output. 118
// Pipeline test note: preserve expectations that document manager-facing output. 119
// Pipeline test note: preserve expectations that document manager-facing output. 120
// Pipeline test note: preserve expectations that document manager-facing output. 121
// Pipeline test note: preserve expectations that document manager-facing output. 122
// Pipeline test note: preserve expectations that document manager-facing output. 123
// Pipeline test note: preserve expectations that document manager-facing output. 124
// Pipeline test note: preserve expectations that document manager-facing output. 125
// Pipeline test note: preserve expectations that document manager-facing output. 126
// Pipeline test note: preserve expectations that document manager-facing output. 127
// Pipeline test note: preserve expectations that document manager-facing output. 128
// Pipeline test note: preserve expectations that document manager-facing output. 129
// Pipeline test note: preserve expectations that document manager-facing output. 130
