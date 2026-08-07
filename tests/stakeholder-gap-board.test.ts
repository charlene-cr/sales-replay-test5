import { describe, expect, it } from "vitest";

import {
	filterStakeholderGapsByOwner,
	renderStakeholderGapSummary,
	stakeholderGapScenarios,
	summarizeStakeholderGaps,
} from "../src/replay/stakeholder-gap-board.js";

describe("stakeholder gap board", () => {
	it("summarizes high-risk and stale stakeholder gaps", () => {
		const summary = summarizeStakeholderGaps();

		expect(summary.scenarios).toBe(stakeholderGapScenarios.length);
		expect(summary.highRisk).toBeGreaterThan(0);
		expect(summary.staleGaps).toBeGreaterThan(0);
	});

	it("filters by owner", () => {
		const maya = filterStakeholderGapsByOwner("Maya");
		expect(maya.every((scenario) => scenario.owner === "Maya")).toBe(true);
	});

	it("renders a manager-facing board", () => {
		expect(renderStakeholderGapSummary(summarizeStakeholderGaps())).toContain("stakeholder gap board");
	});
});
