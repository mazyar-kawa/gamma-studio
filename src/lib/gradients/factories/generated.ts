import type { Gradient, GradientMood } from "../types"
import {
  createAuraGradient,
  createAuroraGradient,
  createFluxGradient,
  createGlassGradient,
  createLatticeGradient,
  createMeshGradient,
  createNebulaGradient,
  createPrismGradient,
  type NamedPreset,
} from "./index"

interface Palette {
  name: string
  mood: GradientMood
  colors: string[]
  dark?: boolean
}

const PALETTES: Palette[] = [
  { name: "citrus", mood: "warm", colors: ["#fde047", "#fb923c", "#ef4444", "#facc15"] },
  { name: "glacier", mood: "cool", colors: ["#7dd3fc", "#38bdf8", "#818cf8", "#67e8f9"] },
  { name: "neon", mood: "vivid", colors: ["#22d3ee", "#a3e635", "#f472b6", "#facc15"], dark: true },
  { name: "umber", mood: "warm", colors: ["#d4a373", "#a16207", "#7c2d12", "#fbbf24"] },
  { name: "lilac", mood: "cool", colors: ["#c4b5fd", "#a78bfa", "#818cf8", "#e9d5ff"] },
  { name: "tropic", mood: "vivid", colors: ["#2dd4bf", "#34d399", "#22d3ee", "#a3e635"] },
  { name: "ink", mood: "dark", colors: ["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"], dark: true },
  { name: "amber", mood: "warm", colors: ["#fbbf24", "#f59e0b", "#fb923c", "#ea580c"] },
  { name: "mint", mood: "cool", colors: ["#6ee7b7", "#14b8a6", "#22d3ee", "#a7f3d0"] },
  { name: "rose", mood: "warm", colors: ["#fda4af", "#fb7185", "#f9a8d4", "#f472b6"] },
  { name: "voltage", mood: "vivid", colors: ["#22d3ee", "#818cf8", "#c084fc", "#e879f9"], dark: true },
  { name: "olive", mood: "warm", colors: ["#a3e635", "#84cc16", "#ca8a04", "#65a30d"] },
  { name: "arctic", mood: "cool", colors: ["#bae6fd", "#7dd3fc", "#a5f3fc", "#93c5fd"] },
  { name: "berry", mood: "vivid", colors: ["#f472b6", "#e879f9", "#fb7185", "#c026d3"] },
  { name: "steel", mood: "cool", colors: ["#94a3b8", "#64748b", "#38bdf8", "#cbd5e1"] },
  { name: "wine", mood: "dark", colors: ["#9f1239", "#be123c", "#7c2d12", "#fb7185"], dark: true },
  { name: "gold", mood: "warm", colors: ["#fde68a", "#d97706", "#f59e0b", "#92400e"] },
  { name: "jade", mood: "cool", colors: ["#34d399", "#10b981", "#22d3ee", "#6ee7b7"] },
  { name: "orchid", mood: "vivid", colors: ["#e879f9", "#a78bfa", "#22d3ee", "#f0abfc"] },
  { name: "chrome", mood: "cool", colors: ["#f8fafc", "#94a3b8", "#38bdf8", "#0ea5e9"] },
  { name: "saffron", mood: "warm", colors: ["#fef3c7", "#eab308", "#ea580c", "#facc15"] },
  { name: "plum", mood: "dark", colors: ["#6b21a8", "#c084fc", "#22d3ee", "#7e22ce"], dark: true },
  { name: "peach", mood: "warm", colors: ["#ffedd5", "#fdba74", "#fb7185", "#ea580c"] },
  { name: "cobalt", mood: "cool", colors: ["#60a5fa", "#3b82f6", "#22d3ee", "#1d4ed8"], dark: true },
]

function titleCase(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function seed(id: string, name: string, desc: string, palette: Palette): NamedPreset {
  return {
    id,
    name,
    desc,
    mood: palette.mood,
    colors: palette.colors,
    dark: palette.dark,
  }
}

function generateMeshVariants(): Gradient[] {
  return PALETTES.map((palette) =>
    createMeshGradient(
      seed(
        `gen-mesh-${palette.name}`,
        `${titleCase(palette.name)} Mesh`,
        `Seeded ${palette.name} mesh nodes`,
        palette,
      ),
    ),
  )
}

function generateAuraVariants(): Gradient[] {
  return PALETTES.map((palette) =>
    createAuraGradient(
      seed(
        `gen-aura-${palette.name}`,
        `${titleCase(palette.name)} Aura`,
        `Seeded ${palette.name} aura wash`,
        palette,
      ),
    ),
  )
}

function generateLatticeVariants(): Gradient[] {
  return PALETTES.slice(0, 20).map((palette) =>
    createLatticeGradient(
      seed(
        `gen-lattice-${palette.name}`,
        `${titleCase(palette.name)} Lattice`,
        `Seeded ${palette.name} grid overlay`,
        palette,
      ),
    ),
  )
}

function generateFluxVariants(): Gradient[] {
  return PALETTES.slice(0, 20).map((palette) =>
    createFluxGradient(
      seed(
        `gen-flux-${palette.name}`,
        `${titleCase(palette.name)} Flux`,
        `Seeded ${palette.name} organic blobs`,
        palette,
      ),
    ),
  )
}

function generatePrismVariants(): Gradient[] {
  return PALETTES.slice(0, 16).map((palette) =>
    createPrismGradient(
      seed(
        `gen-prism-${palette.name}`,
        `${titleCase(palette.name)} Prism`,
        `Seeded ${palette.name} spectral slash`,
        palette,
      ),
    ),
  )
}

function generateAuroraVariants(): Gradient[] {
  return PALETTES.slice(0, 20).map((palette) =>
    createAuroraGradient(
      seed(
        `gen-aurora-${palette.name}`,
        `${titleCase(palette.name)} Aurora`,
        `Seeded ${palette.name} polar curtains`,
        { ...palette, dark: true },
      ),
    ),
  )
}

function generateNebulaVariants(): Gradient[] {
  return PALETTES.slice(0, 16).map((palette) =>
    createNebulaGradient(
      seed(
        `gen-nebula-${palette.name}`,
        `${titleCase(palette.name)} Nebula`,
        `Seeded ${palette.name} gas clouds`,
        { ...palette, dark: true },
      ),
    ),
  )
}

function generateGlassVariants(): Gradient[] {
  return PALETTES.slice(0, 16).map((palette) =>
    createGlassGradient(
      seed(
        `gen-glass-${palette.name}`,
        `${titleCase(palette.name)} Glass`,
        `Seeded ${palette.name} studio gel`,
        palette,
      ),
    ),
  )
}

export const GENERATED_PRESETS: Gradient[] = [
  ...generateMeshVariants(),
  ...generateAuraVariants(),
  ...generateLatticeVariants(),
  ...generateFluxVariants(),
  ...generatePrismVariants(),
  ...generateAuroraVariants(),
  ...generateNebulaVariants(),
  ...generateGlassVariants(),
]
