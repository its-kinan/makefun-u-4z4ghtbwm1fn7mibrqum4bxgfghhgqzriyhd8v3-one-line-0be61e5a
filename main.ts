// One Line, One Laugh — program/v1 entry.
// Writes a single funny line to /output/entry.txt. Deterministic:
// fixed text, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smoke alarm and I have an understanding: it screams, I wave a towel, and we both pretend I'm a chef.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
