#!/usr/bin/env node

import {execFileSync} from "node:child_process";
import {existsSync} from "node:fs";
import path from "node:path";
import {fileURLToPath, pathToFileURL} from "node:url";

const ALLOWED_METHODS = [
  "getSchedule",
  "saveCustomSchedule",
  "deleteCustomSchedule",
  "getCalendar",
  "getCalendarYear",
  "getCalendarImageUrl",
];

const PACKAGE_SPEC = "@thu-info/lib@3.15.2";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const runtimeDir = path.join(__dirname, "..", "assets", "runtime");
const packageDir = path.join(runtimeDir, "node_modules", "@thu-info", "lib");
const distEntry = path.join(packageDir, "dist", "index.js");
process.env.OPENSSL_CONF = path.join(runtimeDir, "openssl.cnf");

function parseCli(argv) {
  const options = {user: "", password: "", json: false};
  const positionals = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--user") options.user = argv[++i] ?? "";
    else if (arg === "--password") options.password = argv[++i] ?? "";
    else if (arg === "--json") options.json = true;
    else positionals.push(arg);
  }
  return {options, positionals};
}

function usage() {
  console.log("Usage: node scripts/run.mjs <method> [json-array-args] [--user <id>] [--password <password>] [--json]");
  console.log(`Allowed methods: ${ALLOWED_METHODS.join(", ")}`);
}

function ensureRuntime() {
  if (!existsSync(distEntry)) {
    execFileSync(
      "npm",
      ["install", "--no-save", "--no-package-lock", "--omit=dev", "--fund=false", "--audit=false", PACKAGE_SPEC],
      {cwd: runtimeDir, stdio: "inherit"},
    );
  }
}

const {options, positionals} = parseCli(process.argv.slice(2));
const method = positionals[0];
if (!method || method === "help" || method === "--help") {
  usage();
  process.exit(0);
}
if (!ALLOWED_METHODS.includes(method)) {
  console.error(`Unsupported method: ${method}`);
  usage();
  process.exit(1);
}

const args = positionals[1] ? JSON.parse(positionals[1]) : [];
if (!Array.isArray(args)) {
  throw new Error("Second positional argument must be a JSON array.");
}

ensureRuntime();
const {InfoHelper} = await import(pathToFileURL(distEntry).href);
const helper = new InfoHelper();

if (options.user && options.password) {
  await helper.login({userId: options.user, password: options.password});
}

const result = await helper[method](...args);
if (result === undefined) console.log("ok");
else if (typeof result === "string" && !options.json) console.log(result);
else console.log(JSON.stringify(result, null, 2));
