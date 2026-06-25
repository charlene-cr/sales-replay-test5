import { describe, expect, it } from "vitest";

import {
	filterObjectionPlaybookByPriority,
	renderObjectionPlaybookSummary,
	summarizeObjectionPlaybook,
	type ObjectionPlaybookScenario,
} from "../src/replay/objection-playbook.js";

const scenarios: readonly ObjectionPlaybookScenario[] = [
	{
		id: "objection-playbook-test-001",
		account: "Northstar Health",
		owner: "Maya",
		stage: "security-review",
		theme: "objection playbook",
		buyerSignal: "Buyer asked for proof before rollout.",
		repAction: "Rep sent the manager-ready artifact.",
		managerNote: "Review in weekly replay.",
		score: 78,
		priority: "high",
		followUpArtifact: "security packet",
	},
	{
		id: "objection-playbook-test-002",
		account: "Harbor Ledger",
		owner: "Jon",
		stage: "pilot",
		theme: "objection playbook",
		buyerSignal: "Buyer wanted the pilot summary.",
		repAction: "Rep scheduled a technical readout.",
		managerNote: "Compare against won-call behavior.",
		score: 84,
		priority: "medium",
		followUpArtifact: "pilot summary",
	},
];

describe("objection playbook", () => {
	it("summarizes scenarios", () => {
		const summary = summarizeObjectionPlaybook(scenarios);

		expect(summary.scenarios).toBe(2);
		expect(summary.averageScore).toBe(81);
		expect(summary.recommendedAction).toContain("objection playbook");
	});

	it("filters by priority", () => {
		expect(filterObjectionPlaybookByPriority(scenarios, "high")).toHaveLength(1);
	});

	it("renders manager-facing text", () => {
		expect(renderObjectionPlaybookSummary(summarizeObjectionPlaybook(scenarios))).toContain("Recommended action");
	});
});
