import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good news: the checkout bug is fixed. Bad news: I fixed it by deleting checkout. Nobody can crash it now, and technically the error rate is zero.";

if (LINE.length < 1 || LINE.length > 180 || LINE.includes("\n")) {
  throw new Error(`entry must be one line of 1-180 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
