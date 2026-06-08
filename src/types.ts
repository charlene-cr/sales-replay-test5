export type CallOutcome = "won" | "lost" | "follow-up" | "unknown";

export interface SalesCall {
	readonly id: string;
	readonly account: string;
	readonly owner: string;
	readonly outcome: CallOutcome;
	readonly durationMinutes: number;
	readonly transcript: readonly string[];
	readonly tags: readonly string[];
}

export interface ReplayScore {
	readonly callId: string;
	readonly discovery: number;
	readonly objectionHandling: number;
	readonly nextSteps: number;
	readonly overall: number;
	readonly notes: readonly string[];
}

export interface ReplaySummary {
	readonly totalCalls: number;
	readonly averageDuration: number;
	readonly averageScore: number;
	readonly wins: number;
	readonly followUps: number;
}
