import { writeFileSync } from "fs"
import { join } from "path"
import { CATEGORIES } from "../src/lib/gradients/categories"
import { GRADIENTS } from "../src/lib/gradients/index"

const categoryList = CATEGORIES.filter((c) => c.id !== "all")
  .map((c) => c.id)
  .join(", ")

const lines = [
  "# Gamma Studio catalog",
  "",
  `${GRADIENTS.length} layered CSS gradient patterns. Based on Aura by Cristian Olivera.`,
  "",
  `Categories: ${categoryList}`,
  "",
  ...GRADIENTS.map(
    (g) => `- ${g.name} (\`${g.id}\`) — ${g.category}${g.desc ? `: ${g.desc}` : ""}`,
  ),
  "",
]

const outPath = join(process.cwd(), "public/llms-full.txt")
writeFileSync(outPath, lines.join("\n"), "utf8")
console.log(`Generated ${outPath} (${GRADIENTS.length} patterns)`)
