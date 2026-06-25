import { describe, expect, it } from "vitest";

import {
	filterEnablementQueueByPriority,
	renderEnablementQueueSummary,
	summarizeEnablementQueue,
	type EnablementQueueScenario,
} from "../src/replay/enablement-queue.js";

const scenarios: readonly EnablementQueueScenario[] = [
	{
		id: "enablement-queue-test-001",
		account: "Northstar Health",
		owner: "Maya",
		stage: "security-review",
		theme: "enablement queue",
		buyerSignal: "Buyer asked for proof before rollout.",
		repAction: "Rep sent the manager-ready artifact.",
		managerNote: "Review in weekly replay.",
		score: 78,
		priority: "high",
		followUpArtifact: "security packet",
	},
	{
		id: "enablement-queue-test-002",
		account: "Harbor Ledger",
		owner: "Jon",
		stage: "pilot",
		theme: "enablement queue",
		buyerSignal: "Buyer wanted the pilot summary.",
		repAction: "Rep scheduled a technical readout.",
		managerNote: "Compare against won-call behavior.",
		score: 84,
		priority: "medium",
		followUpArtifact: "pilot summary",
	},
];

describe("enablement queue", () => {
	it("summarizes scenarios", () => {
		const summary = summarizeEnablementQueue(scenarios);

		expect(summary.scenarios).toBe(2);
		expect(summary.averageScore).toBe(81);
		expect(summary.recommendedAction).toContain("enablement queue");
	});

	it("filters by priority", () => {
		expect(filterEnablementQueueByPriority(scenarios, "high")).toHaveLength(1);
	});

	it("renders manager-facing text", () => {
		expect(renderEnablementQueueSummary(summarizeEnablementQueue(scenarios))).toContain("Recommended action");
	});
});
