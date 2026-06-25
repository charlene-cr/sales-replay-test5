import { describe, expect, it } from "vitest";

import {
	filterFollowupQualityByPriority,
	renderFollowupQualitySummary,
	summarizeFollowupQuality,
	type FollowupQualityScenario,
} from "../src/replay/followup-quality.js";

const scenarios: readonly FollowupQualityScenario[] = [
	{
		id: "followup-quality-test-001",
		account: "Northstar Health",
		owner: "Maya",
		stage: "security-review",
		theme: "follow-up quality",
		buyerSignal: "Buyer asked for proof before rollout.",
		repAction: "Rep sent the manager-ready artifact.",
		managerNote: "Review in weekly replay.",
		score: 78,
		priority: "high",
		followUpArtifact: "security packet",
	},
	{
		id: "followup-quality-test-002",
		account: "Harbor Ledger",
		owner: "Jon",
		stage: "pilot",
		theme: "follow-up quality",
		buyerSignal: "Buyer wanted the pilot summary.",
		repAction: "Rep scheduled a technical readout.",
		managerNote: "Compare against won-call behavior.",
		score: 84,
		priority: "medium",
		followUpArtifact: "pilot summary",
	},
];

describe("follow-up quality", () => {
	it("summarizes scenarios", () => {
		const summary = summarizeFollowupQuality(scenarios);

		expect(summary.scenarios).toBe(2);
		expect(summary.averageScore).toBe(81);
		expect(summary.recommendedAction).toContain("follow-up quality");
	});

	it("filters by priority", () => {
		expect(filterFollowupQualityByPriority(scenarios, "high")).toHaveLength(1);
	});

	it("renders manager-facing text", () => {
		expect(renderFollowupQualitySummary(summarizeFollowupQuality(scenarios))).toContain("Recommended action");
	});
});
