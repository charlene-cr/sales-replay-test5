import { describe, expect, it } from "vitest";

import {
	filterCrmSyncPlanByPriority,
	renderCrmSyncPlanSummary,
	summarizeCrmSyncPlan,
	type CrmSyncPlanScenario,
} from "../src/replay/crm-sync-plan.js";

const scenarios: readonly CrmSyncPlanScenario[] = [
	{
		id: "crm-sync-plan-test-001",
		account: "Northstar Health",
		owner: "Maya",
		stage: "security-review",
		theme: "CRM sync planning",
		buyerSignal: "Buyer asked for proof before rollout.",
		repAction: "Rep sent the manager-ready artifact.",
		managerNote: "Review in weekly replay.",
		score: 78,
		priority: "high",
		followUpArtifact: "security packet",
	},
	{
		id: "crm-sync-plan-test-002",
		account: "Harbor Ledger",
		owner: "Jon",
		stage: "pilot",
		theme: "CRM sync planning",
		buyerSignal: "Buyer wanted the pilot summary.",
		repAction: "Rep scheduled a technical readout.",
		managerNote: "Compare against won-call behavior.",
		score: 84,
		priority: "medium",
		followUpArtifact: "pilot summary",
	},
];

describe("CRM sync planning", () => {
	it("summarizes scenarios", () => {
		const summary = summarizeCrmSyncPlan(scenarios);

		expect(summary.scenarios).toBe(2);
		expect(summary.averageScore).toBe(81);
		expect(summary.recommendedAction).toContain("CRM sync planning");
	});

	it("filters by priority", () => {
		expect(filterCrmSyncPlanByPriority(scenarios, "high")).toHaveLength(1);
	});

	it("renders manager-facing text", () => {
		expect(renderCrmSyncPlanSummary(summarizeCrmSyncPlan(scenarios))).toContain("Recommended action");
	});
});
