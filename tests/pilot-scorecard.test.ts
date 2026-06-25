import { describe, expect, it } from "vitest";

import {
	filterPilotScorecardByPriority,
	renderPilotScorecardSummary,
	summarizePilotScorecard,
	type PilotScorecardScenario,
} from "../src/replay/pilot-scorecard.js";

const scenarios: readonly PilotScorecardScenario[] = [
	{
		id: "pilot-scorecard-test-001",
		account: "Northstar Health",
		owner: "Maya",
		stage: "security-review",
		theme: "pilot scorecard",
		buyerSignal: "Buyer asked for proof before rollout.",
		repAction: "Rep sent the manager-ready artifact.",
		managerNote: "Review in weekly replay.",
		score: 78,
		priority: "high",
		followUpArtifact: "security packet",
	},
	{
		id: "pilot-scorecard-test-002",
		account: "Harbor Ledger",
		owner: "Jon",
		stage: "pilot",
		theme: "pilot scorecard",
		buyerSignal: "Buyer wanted the pilot summary.",
		repAction: "Rep scheduled a technical readout.",
		managerNote: "Compare against won-call behavior.",
		score: 84,
		priority: "medium",
		followUpArtifact: "pilot summary",
	},
];

describe("pilot scorecard", () => {
	it("summarizes scenarios", () => {
		const summary = summarizePilotScorecard(scenarios);

		expect(summary.scenarios).toBe(2);
		expect(summary.averageScore).toBe(81);
		expect(summary.recommendedAction).toContain("pilot scorecard");
	});

	it("filters by priority", () => {
		expect(filterPilotScorecardByPriority(scenarios, "high")).toHaveLength(1);
	});

	it("renders manager-facing text", () => {
		expect(renderPilotScorecardSummary(summarizePilotScorecard(scenarios))).toContain("Recommended action");
	});
});
