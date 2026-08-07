import { describe, expect, it } from "vitest";

import {
	findPricingConcessionsByStage,
	pricingConcessionScenarios,
	renderPricingConcessionSummary,
	summarizePricingConcessions,
} from "../src/replay/pricing-concession-tracker.js";

describe("pricing concession tracker", () => {
	it("summarizes concession pressure", () => {
		const summary = summarizePricingConcessions();

		expect(summary.scenarios).toBe(pricingConcessionScenarios.length);
		expect(summary.averageDiscount).toBeGreaterThan(0);
		expect(summary.competitorPressure).toBeGreaterThan(0);
	});

	it("filters finance review concessions", () => {
		const finance = findPricingConcessionsByStage("finance-review");
		expect(finance.every((scenario) => scenario.approvalStage === "finance-review")).toBe(true);
	});

	it("renders manager-facing text", () => {
		expect(renderPricingConcessionSummary(summarizePricingConcessions())).toContain("pricing concession tracker");
	});
});
