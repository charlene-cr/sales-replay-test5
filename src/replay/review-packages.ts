import {
	renderStakeholderGapSummary,
	summarizeStakeholderGaps,
} from "./stakeholder-gap-board.js";

export function buildStakeholderGapReviewPackage(): string {
	return renderStakeholderGapSummary(summarizeStakeholderGaps());
}
