import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "HR says the office plants boost morale, so now the ficus has a promotion plan and I'm getting feedback from a fern.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
