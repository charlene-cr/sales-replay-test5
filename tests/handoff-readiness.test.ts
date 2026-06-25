import { describe, expect, it } from "vitest";

import {
	filterHandoffReadinessByPriority,
	renderHandoffReadinessSummary,
	summarizeHandoffReadiness,
	type HandoffReadinessScenario,
} from "../src/replay/handoff-readiness.js";

const scenarios: readonly HandoffReadinessScenario[] = [
	{
		id: "handoff-readiness-test-001",
		account: "Northstar Health",
		owner: "Maya",
		stage: "security-review",
		theme: "handoff readiness",
		buyerSignal: "Buyer asked for proof before rollout.",
		repAction: "Rep sent the manager-ready artifact.",
		managerNote: "Review in weekly replay.",
		score: 78,
		priority: "high",
		followUpArtifact: "security packet",
	},
	{
		id: "handoff-readiness-test-002",
		account: "Harbor Ledger",
		owner: "Jon",
		stage: "pilot",
		theme: "handoff readiness",
		buyerSignal: "Buyer wanted the pilot summary.",
		repAction: "Rep scheduled a technical readout.",
		managerNote: "Compare against won-call behavior.",
		score: 84,
		priority: "medium",
		followUpArtifact: "pilot summary",
	},
];

describe("handoff readiness", () => {
	it("summarizes scenarios", () => {
		const summary = summarizeHandoffReadiness(scenarios);

		expect(summary.scenarios).toBe(2);
		expect(summary.averageScore).toBe(81);
		expect(summary.recommendedAction).toContain("handoff readiness");
	});

	it("filters by priority", () => {
		expect(filterHandoffReadinessByPriority(scenarios, "high")).toHaveLength(1);
	});

	it("renders manager-facing text", () => {
		expect(renderHandoffReadinessSummary(summarizeHandoffReadiness(scenarios))).toContain("Recommended action");
	});
});
