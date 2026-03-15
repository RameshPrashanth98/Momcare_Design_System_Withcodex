import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "src/tokens/types.ts",
  "src/tokens/metadata.ts",
  "src/tokens/index.ts"
];

const bannedPlaceholders = ["TODO_TOKEN", "REPLACE_ME", "hardcoded later"];

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      return walk(fullPath);
    }
    return fullPath;
  });
}

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing required token file: ${file}`);
    process.exit(1);
  }
}

const tokenFiles = walk("src/tokens").filter((file) => file.endsWith(".ts"));

for (const file of tokenFiles) {
  const content = readFileSync(file, "utf8");
  for (const placeholder of bannedPlaceholders) {
    if (content.includes(placeholder)) {
      console.error(`Placeholder "${placeholder}" found in ${file}`);
      process.exit(1);
    }
  }
}

const metadataContent = readFileSync("src/tokens/types.ts", "utf8");
if (!metadataContent.includes("provisional")) {
  console.error("Token source metadata must include provisional markers.");
  process.exit(1);
}

console.log("Token checks passed for src/tokens.");
