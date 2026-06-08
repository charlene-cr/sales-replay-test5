import type { ReplayScore, SalesCall } from "../types.js";

const discoverySignals = ["prompted", "priority", "revisit", "business case", "planning"];
const objectionSignals = ["budget", "procurement", "legal", "security", "comfortable"];
const nextStepSignals = ["schedule", "send", "start", "reconnect", "next"];

export function scoreCall(call: SalesCall): ReplayScore {
	const transcript = call.transcript.join(" ").toLowerCase();
	const discovery = scoreSignals(transcript, discoverySignals);
	const objectionHandling = scoreSignals(transcript, objectionSignals);
	const nextSteps = scoreSignals(transcript, nextStepSignals);
	const overall = Math.round((discovery + objectionHandling + nextSteps) / 3);

	return {
		callId: call.id,
		discovery,
		objectionHandling,
		nextSteps,
		overall,
		notes: buildNotes(call, discovery, objectionHandling, nextSteps),
	};
}

function scoreSignals(transcript: string, signals: readonly string[]): number {
	const hits = signals.filter((signal) => transcript.includes(signal)).length;
	return Math.min(100, 40 + hits * 20);
}

function buildNotes(
	call: SalesCall,
	discovery: number,
	objectionHandling: number,
	nextSteps: number,
): readonly string[] {
	const notes: string[] = [];

	if (discovery >= 80) {
		notes.push("Strong discovery language captured buyer motivation.");
	}

	if (objectionHandling < 60) {
		notes.push("Add a clearer response to commercial or security objections.");
	}

	if (nextSteps >= 80) {
		notes.push("Next action was explicit enough for follow-through.");
	}

	if (call.outcome === "lost") {
		notes.push("Review the lost reason and build a reconnect plan.");
	}

	return notes;
}
