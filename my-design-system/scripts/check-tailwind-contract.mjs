import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const fileRules = {
  "tailwind.config.ts": {
    required: ["morphTailwindTheme", "theme", "extend", "content"],
    forbidden: ["TODO_TAILWIND", "REPLACE_TAILWIND", "wire later"]
  },
  "src/tokens/tailwind-theme.ts": {
    required: ["morphTailwindTheme", "surface", "text", "border", "interactive", "feedback", "brand"],
    forbidden: ["TODO_TAILWIND", "REPLACE_TAILWIND", "wire later"]
  },
  "src/tokens/index.ts": {
    required: ["morphTailwindTheme"],
    forbidden: ["TODO_TAILWIND", "REPLACE_TAILWIND", "wire later"]
  }
};

let hasFailure = false;

for (const [relativePath, rules] of Object.entries(fileRules)) {
  const fullPath = resolve(root, relativePath);
  if (!existsSync(fullPath)) {
    console.error(`Missing required Tailwind contract file: ${relativePath}`);
    hasFailure = true;
    continue;
  }

  const contents = readFileSync(fullPath, "utf8");
  for (const pattern of rules.required) {
    if (!contents.includes(pattern)) {
      console.error(`Missing pattern "${pattern}" in ${relativePath}`);
      hasFailure = true;
    }
  }

  for (const pattern of rules.forbidden) {
    if (contents.includes(pattern)) {
      console.error(`Forbidden placeholder "${pattern}" found in ${relativePath}`);
      hasFailure = true;
    }
  }
}

if (hasFailure) {
  process.exit(1);
}

console.log("Tailwind contract check passed.");
