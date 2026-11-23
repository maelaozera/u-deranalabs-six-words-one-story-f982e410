// Six Words, One Story — entry for the make.fun bounty
// u-deranalabs-six-words-one-story-f982e410
//
// The entry is one complete story in exactly six words. This
// program writes that story, byte for byte, to /output/entry.txt.
// Nothing here is random and nothing depends on the clock, the
// network, or the environment, so every run writes the identical
// file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A marriage ends in fire; her smile is the twist. The reader
// fills in the years behind it.
const STORY = "The wedding photo burned. She smiled.";

// Guard the gate before writing: exactly six words, 1-60 chars.
const WORDS = STORY.trim().split(/\s+/);
if (WORDS.length !== 6) {
  throw new Error(`expected exactly six words, got ${WORDS.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`story must be 1-60 characters, got ${STORY.length}`);
}

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, STORY, "utf8");
