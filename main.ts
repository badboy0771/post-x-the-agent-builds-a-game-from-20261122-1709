// Entry program for the post-x bounty: hand the post's address to the house.
//
// It reads POST.json from the repository, checks that it really names one
// public X post, and writes the same bytes into the output directory the
// grader points at. Nothing else is written, and no network is touched.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// An X post address: https://x.com/<handle>/status/<digits>, with the
// twitter.com spelling and the www./mobile. prefixes accepted too.
const postAddress = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/[0-9]+$/;

const sourcePath = join(repoDir, "POST.json");
const raw = readFileSync(sourcePath, "utf8");

// The gate refuses a POST.json over 16384 bytes, so refuse it here first.
if (Buffer.byteLength(raw, "utf8") > 16384) {
  throw new Error(`POST.json is over the 16384 byte limit: ${Buffer.byteLength(raw, "utf8")} bytes`);
}
const parsed = JSON.parse(raw);

if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("POST.json must be a JSON object with a string url field");
}
if (!postAddress.test(parsed.url)) {
  throw new Error(`POST.json url is not an X post address: ${parsed.url}`);
}

mkdirSync(outDir, { recursive: true });
const targetPath = join(outDir, "POST.json");
writeFileSync(targetPath, raw);

// Prove the copy landed whole: read it back and compare byte for byte.
const written = readFileSync(targetPath, "utf8");
if (written !== raw) {
  throw new Error("out/POST.json does not match POST.json after copying");
}
console.log(`POST.json copied: ${parsed.url}`);
