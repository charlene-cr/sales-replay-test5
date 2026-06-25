import { describe, expect, it } from "vitest";

import {
	filterRenewalRiskByPriority,
	renderRenewalRiskSummary,
	summarizeRenewalRisk,
	type RenewalRiskScenario,
} from "../src/replay/renewal-risk.js";

const scenarios: readonly RenewalRiskScenario[] = [
	{
		id: "renewal-risk-test-001",
		account: "Northstar Health",
		owner: "Maya",
		stage: "security-review",
		theme: "renewal risk",
		buyerSignal: "Buyer asked for proof before rollout.",
		repAction: "Rep sent the manager-ready artifact.",
		managerNote: "Review in weekly replay.",
		score: 78,
		priority: "high",
		followUpArtifact: "security packet",
	},
	{
		id: "renewal-risk-test-002",
		account: "Harbor Ledger",
		owner: "Jon",
		stage: "pilot",
		theme: "renewal risk",
		buyerSignal: "Buyer wanted the pilot summary.",
		repAction: "Rep scheduled a technical readout.",
		managerNote: "Compare against won-call behavior.",
		score: 84,
		priority: "medium",
		followUpArtifact: "pilot summary",
	},
];

describe("renewal risk", () => {
	it("summarizes scenarios", () => {
		const summary = summarizeRenewalRisk(scenarios);

		expect(summary.scenarios).toBe(2);
		expect(summary.averageScore).toBe(81);
		expect(summary.recommendedAction).toContain("renewal risk");
	});

	it("filters by priority", () => {
		expect(filterRenewalRiskByPriority(scenarios, "high")).toHaveLength(1);
	});

	it("renders manager-facing text", () => {
		expect(renderRenewalRiskSummary(summarizeRenewalRisk(scenarios))).toContain("Recommended action");
	});
});
