import { strict as assert } from "node:assert";

import {
  classifyRenewalGuardrail,
  renewalExpansionGuardrails,
  scoreRenewalGuardrail,
} from "./renewal-expansion-guardrails.js";
import {
  buildRenewalExpansionGuardrailSummary,
  summarizeRenewalExpansionGuardrails,
} from "./renewal-expansion-guardrail-summary.js";

const inactiveChampion = renewalExpansionGuardrails.find((guardrail) => !guardrail.championActive);
assert.ok(inactiveChampion);
assert.notEqual(classifyRenewalGuardrail(inactiveChampion), "expand");

const pressureScore = scoreRenewalGuardrail(inactiveChampion);
assert.ok(Number.isFinite(pressureScore));

const summary = buildRenewalExpansionGuardrailSummary();
assert.equal(summary.totalAccounts, renewalExpansionGuardrails.length);
assert.ok(summary.interventionAccounts > 0);
assert.match(summarizeRenewalExpansionGuardrails(summary), /renewal guardrails/);
