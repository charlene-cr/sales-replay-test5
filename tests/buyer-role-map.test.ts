import { describe, expect, it } from "vitest";

import {
	filterBuyerRoleMapByPriority,
	renderBuyerRoleMapSummary,
	summarizeBuyerRoleMap,
	type BuyerRoleMapScenario,
} from "../src/replay/buyer-role-map.js";

const scenarios: readonly BuyerRoleMapScenario[] = [
	{
		id: "buyer-role-map-test-001",
		account: "Northstar Health",
		owner: "Maya",
		stage: "security-review",
		theme: "buyer role mapping",
		buyerSignal: "Buyer asked for proof before rollout.",
		repAction: "Rep sent the manager-ready artifact.",
		managerNote: "Review in weekly replay.",
		score: 78,
		priority: "high",
		followUpArtifact: "security packet",
	},
	{
		id: "buyer-role-map-test-002",
		account: "Harbor Ledger",
		owner: "Jon",
		stage: "pilot",
		theme: "buyer role mapping",
		buyerSignal: "Buyer wanted the pilot summary.",
		repAction: "Rep scheduled a technical readout.",
		managerNote: "Compare against won-call behavior.",
		score: 84,
		priority: "medium",
		followUpArtifact: "pilot summary",
	},
];

describe("buyer role mapping", () => {
	it("summarizes scenarios", () => {
		const summary = summarizeBuyerRoleMap(scenarios);

		expect(summary.scenarios).toBe(2);
		expect(summary.averageScore).toBe(81);
		expect(summary.recommendedAction).toContain("buyer role mapping");
	});

	it("filters by priority", () => {
		expect(filterBuyerRoleMapByPriority(scenarios, "high")).toHaveLength(1);
	});

	it("renders manager-facing text", () => {
		expect(renderBuyerRoleMapSummary(summarizeBuyerRoleMap(scenarios))).toContain("Recommended action");
	});
});
