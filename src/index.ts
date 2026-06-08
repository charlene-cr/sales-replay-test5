import { sampleCalls } from "./data/sample-calls.js";
import { renderReport } from "./replay/report.js";
import { scoreCall } from "./replay/scoring.js";
import { summarizeReplay } from "./replay/summary.js";

const scores = sampleCalls.map(scoreCall);
const summary = summarizeReplay(sampleCalls, scores);

process.stdout.write(`${renderReport(sampleCalls, scores, summary)}\n`);
