import { describe, expect, it } from "vitest";

import {
	filterConversationCoverageByPriority,
	renderConversationCoverageSummary,
	summarizeConversationCoverage,
	type ConversationCoverageScenario,
} from "../src/replay/conversation-coverage.js";

const scenarios: readonly ConversationCoverageScenario[] = [
	{
		id: "conversation-coverage-test-001",
		account: "Northstar Health",
		owner: "Maya",
		stage: "security-review",
		theme: "conversation coverage",
		buyerSignal: "Buyer asked for proof before rollout.",
		repAction: "Rep sent the manager-ready artifact.",
		managerNote: "Review in weekly replay.",
		score: 78,
		priority: "high",
		followUpArtifact: "security packet",
	},
	{
		id: "conversation-coverage-test-002",
		account: "Harbor Ledger",
		owner: "Jon",
		stage: "pilot",
		theme: "conversation coverage",
		buyerSignal: "Buyer wanted the pilot summary.",
		repAction: "Rep scheduled a technical readout.",
		managerNote: "Compare against won-call behavior.",
		score: 84,
		priority: "medium",
		followUpArtifact: "pilot summary",
	},
];

describe("conversation coverage", () => {
	it("summarizes scenarios", () => {
		const summary = summarizeConversationCoverage(scenarios);

		expect(summary.scenarios).toBe(2);
		expect(summary.averageScore).toBe(81);
		expect(summary.recommendedAction).toContain("conversation coverage");
	});

	it("filters by priority", () => {
		expect(filterConversationCoverageByPriority(scenarios, "high")).toHaveLength(1);
	});

	it("renders manager-facing text", () => {
		expect(renderConversationCoverageSummary(summarizeConversationCoverage(scenarios))).toContain("Recommended action");
	});
});
