import type { SalesCall } from "../types.js";

export const sampleCalls: readonly SalesCall[] = [
	{
		id: "call-001",
		account: "Northstar Health",
		owner: "Maya",
		outcome: "follow-up",
		durationMinutes: 34,
		tags: ["healthcare", "discovery", "security"],
		transcript: [
			"Rep: What prompted the team to revisit review automation this quarter?",
			"Buyer: The engineering leads are spending too much time on repeated review patterns.",
			"Rep: If we reduce that review load, where would you want the time reinvested?",
			"Buyer: Faster onboarding and fewer late-cycle security surprises.",
			"Rep: Let's schedule a technical review with the platform team next Tuesday.",
		],
	},
	{
		id: "call-002",
		account: "Harbor Ledger",
		owner: "Jon",
		outcome: "won",
		durationMinutes: 46,
		tags: ["fintech", "pilot", "procurement"],
		transcript: [
			"Rep: The pilot results show a 22 percent reduction in manual review comments.",
			"Buyer: That helps, but procurement still needs the security packet.",
			"Rep: I can send that today and include the implementation checklist.",
			"Buyer: Great. If legal is comfortable, we can start with the platform team.",
		],
	},
	{
		id: "call-003",
		account: "BrightCart",
		owner: "Sam",
		outcome: "lost",
		durationMinutes: 28,
		tags: ["retail", "budget"],
		transcript: [
			"Rep: What would make this a priority before the next planning cycle?",
			"Buyer: We like the workflow, but budget is locked until October.",
			"Rep: Would a narrower pilot help you build the business case?",
			"Buyer: Not right now. Let's reconnect after planning.",
		],
	},
];
