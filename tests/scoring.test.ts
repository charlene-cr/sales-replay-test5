import { describe, expect, it } from "vitest";

import { sampleCalls } from "../src/data/sample-calls.js";
import { scoreCall } from "../src/replay/scoring.js";
import { summarizeReplay } from "../src/replay/summary.js";

describe("sales replay scoring", () => {
	it("scores sample calls", () => {
		const scores = sampleCalls.map(scoreCall);

		expect(scores).toHaveLength(3);
		expect(scores[0]?.overall).toBeGreaterThan(50);
	});

	it("summarizes outcomes", () => {
		const scores = sampleCalls.map(scoreCall);
		const summary = summarizeReplay(sampleCalls, scores);

		expect(summary.totalCalls).toBe(3);
		expect(summary.wins).toBe(1);
		expect(summary.followUps).toBe(1);
	});
});
