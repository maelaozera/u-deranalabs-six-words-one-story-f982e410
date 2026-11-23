// Six Words, One Story — entry program.
//
// Writes one complete six-word story to /output/entry.txt.
// Deterministic: no network, no randomness, no file reads.
// The story is a whole life in six words: a man who kept
// every memory except the one name that mattered most.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const STORY = "He remembered everything except her name.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const text = STORY;
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length !== 6) {
    throw new Error(`expected exactly 6 words, got ${words.length}`);
  }
  if (text.length < 1 || text.length > 60) {
    throw new Error(`expected 1-60 characters, got ${text.length}`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
}

main();
