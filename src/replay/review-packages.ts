import {
	renderPricingConcessionSummary,
	summarizePricingConcessions,
} from "./pricing-concession-tracker.js";
import {
	renderStakeholderGapSummary,
	summarizeStakeholderGaps,
} from "./stakeholder-gap-board.js";

export function buildStakeholderGapReviewPackage(): string {
	return renderStakeholderGapSummary(summarizeStakeholderGaps());
}

export function buildPricingConcessionReviewPackage(): string {
	return renderPricingConcessionSummary(summarizePricingConcessions());
}

export function buildReplayReviewPackages(): readonly string[] {
	return [buildStakeholderGapReviewPackage(), buildPricingConcessionReviewPackage()];
}
