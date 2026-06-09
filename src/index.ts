import { runCli } from "./cli/run.js";

process.stdout.write(`${runCli(process.argv.slice(2))}\n`);
