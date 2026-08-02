import { strict as assert } from "node:assert";

import {
  classifyImplementationRisk,
  implementationRiskSignals,
  scoreImplementationRisk,
} from "./implementation-risk-desk.js";
import {
  buildImplementationRiskDeskSummary,
  summarizeImplementationRiskDesk,
} from "./implementation-risk-desk-summary.js";

const stalled = implementationRiskSignals.find((signal) => signal.daysStalled > 20 && !signal.sponsorConfirmed);
assert.ok(stalled);
assert.equal(classifyImplementationRisk(stalled), "blocked");

const score = scoreImplementationRisk(stalled);
assert.ok(score > 0);

const summary = buildImplementationRiskDeskSummary();
assert.equal(summary.totalAccounts, implementationRiskSignals.length);
assert.ok(summary.blockedAccounts > 0);
assert.match(summarizeImplementationRiskDesk(summary), /implementation accounts/);
