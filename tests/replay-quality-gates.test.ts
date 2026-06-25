import { describe, expect, it } from "vitest";

import {
	filterReplayQualityGatesByPriority,
	renderReplayQualityGatesSummary,
	summarizeReplayQualityGates,
	type ReplayQualityGatesScenario,
} from "../src/replay/replay-quality-gates.js";

const scenarios: readonly ReplayQualityGatesScenario[] = [
	{
		id: "replay-quality-gates-test-001",
		account: "Northstar Health",
		owner: "Maya",
		stage: "security-review",
		theme: "replay quality gates",
		buyerSignal: "Buyer asked for proof before rollout.",
		repAction: "Rep sent the manager-ready artifact.",
		managerNote: "Review in weekly replay.",
		score: 78,
		priority: "high",
		followUpArtifact: "security packet",
	},
	{
		id: "replay-quality-gates-test-002",
		account: "Harbor Ledger",
		owner: "Jon",
		stage: "pilot",
		theme: "replay quality gates",
		buyerSignal: "Buyer wanted the pilot summary.",
		repAction: "Rep scheduled a technical readout.",
		managerNote: "Compare against won-call behavior.",
		score: 84,
		priority: "medium",
		followUpArtifact: "pilot summary",
	},
];

describe("replay quality gates", () => {
	it("summarizes scenarios", () => {
		const summary = summarizeReplayQualityGates(scenarios);

		expect(summary.scenarios).toBe(2);
		expect(summary.averageScore).toBe(81);
		expect(summary.recommendedAction).toContain("replay quality gates");
	});

	it("filters by priority", () => {
		expect(filterReplayQualityGatesByPriority(scenarios, "high")).toHaveLength(1);
	});

	it("renders manager-facing text", () => {
		expect(renderReplayQualityGatesSummary(summarizeReplayQualityGates(scenarios))).toContain("Recommended action");
	});
});
