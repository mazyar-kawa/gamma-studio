import type { Category, Gradient, GradientMood, Layer } from "../types"
import { DARK_BG, LIGHT_BG } from "../helpers"

export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "")
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ]
}

export function rgb(hex: string): string {
  const [r, g, b] = hexToRgb(hex)
  return `rgb(${r},${g},${b})`
}

export function rgba(hex: string, a: number): string {
  const [r, g, b] = hexToRgb(hex)
  return `rgba(${r},${g},${b},${a})`
}

export function hashString(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

export function createRng(seed: number) {
  let s = seed >>> 0
  return function next() {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 4294967296
  }
}

export interface NamedPreset {
  id: string
  name: string
  desc: string
  mood: GradientMood
  colors: string[]
  dark?: boolean
  text?: string
  grain?: boolean
}

function meta(
  input: NamedPreset,
  category: Category,
  layers: Layer[],
  extras: Partial<Gradient> = {},
): Gradient {
  const dark = input.dark ?? input.mood === "dark"
  return {
    id: input.id,
    name: input.name,
    category,
    mood: input.mood,
    desc: input.desc,
    dark,
    text: input.text ?? (dark ? "#f5f1e6" : "#2a241c"),
    cardText: dark ? "#ffffff" : "#000000",
    base: dark ? DARK_BG : LIGHT_BG,
    layers,
    grain: input.grain,
    ...extras,
  }
}

export function createAuraGradient(input: NamedPreset): Gradient {
  const [c1, c2, c3] = input.colors
  return meta(input, "aura", [
    {
      background: `linear-gradient(rgba(0,0,0,0) 0%, ${rgba(c1, 0.12)} 28%, rgb(255,255,255) 18%, ${rgb(c2)} 68%, ${rgb(c3)} 100%)`,
      blendMode: "hard-light",
      blur: 36,
    },
    {
      background: `linear-gradient(rgba(0,0,0,0) 0%, ${rgba(c1, 0.22)} 34%, rgb(255,255,255) 66%, ${rgb(c2)} 82%, ${rgb(c3)} 100%)`,
      blendMode: "soft-light",
      blur: 36,
    },
  ])
}

export function createMeshGradient(input: NamedPreset): Gradient {
  const positions = [
    [18, 22],
    [78, 18],
    [52, 62],
    [28, 78],
    [86, 72],
  ]
  const layers: Layer[] = input.colors.slice(0, 5).map((color, i) => {
    const [x, y] = positions[i]
    return {
      background: `radial-gradient(circle at ${x}% ${y}%, ${rgba(color, 0.72)} 0%, transparent 48%)`,
      blendMode: i % 2 === 0 ? "screen" : "overlay",
      blur: 42 + i * 6,
    }
  })
  return meta(input, "mesh", layers)
}

export function createNebulaGradient(input: NamedPreset): Gradient {
  const [c1, c2, c3, c4] = input.colors
  return meta(input, "nebula", [
    {
      background: `radial-gradient(ellipse 80% 60% at 30% 40%, ${rgba(c1, 0.55)} 0%, transparent 70%)`,
      blendMode: "screen",
      blur: 70,
    },
    {
      background: `radial-gradient(ellipse 70% 55% at 72% 58%, ${rgba(c2, 0.5)} 0%, transparent 72%)`,
      blendMode: "screen",
      blur: 64,
    },
    {
      background: `conic-gradient(from 210deg at 50% 45%, ${rgba(c3, 0.28)}, transparent 40%, ${rgba(c4 ?? c1, 0.22)}, transparent 80%)`,
      blendMode: "overlay",
      blur: 50,
    },
  ], { dark: input.dark ?? true, text: input.text ?? "#e8f0ff" })
}

export function createPrismGradient(input: NamedPreset): Gradient {
  const stops = input.colors
    .map((c, i) => `${rgb(c)} ${Math.round((i / Math.max(input.colors.length - 1, 1)) * 100)}%`)
    .join(", ")
  const angle = 18 + (hashString(input.id) % 50)
  return meta(input, "prism", [
    {
      background: `linear-gradient(${angle}deg, ${stops})`,
      blendMode: "screen",
      blur: 28,
      opacity: 0.9,
    },
    {
      background: `linear-gradient(${angle + 42}deg, transparent 20%, ${rgba(input.colors[0], 0.35)} 50%, transparent 80%)`,
      blendMode: "overlay",
      blur: 18,
    },
  ])
}

export function createLatticeGradient(input: NamedPreset): Gradient {
  const size = 36 + (hashString(input.id) % 24)
  const line = input.colors[0]
  const glow = input.colors[1] ?? input.colors[0]
  const accent = input.colors[2] ?? glow
  return meta(input, "lattice", [
    {
      background: `linear-gradient(${rgba(line, 0.1)} 1px, transparent 1px), linear-gradient(90deg, ${rgba(line, 0.1)} 1px, transparent 1px)`,
      blendMode: "normal",
      blur: 0,
      opacity: 0.85,
      backgroundSize: `${size}px ${size}px`,
    },
    {
      background: `radial-gradient(circle at 50% 50%, ${rgba(glow, 0.28)} 0%, transparent 52%)`,
      blendMode: "normal",
      blur: 60,
    },
    {
      background: `radial-gradient(circle at 30% 70%, ${rgba(accent, 0.16)} 0%, transparent 40%)`,
      blendMode: "normal",
      blur: 50,
    },
  ])
}

export function createGrainGradient(input: NamedPreset): Gradient {
  const [c1, c2, c3] = input.colors
  return meta(input, "grain", [
    {
      background: `linear-gradient(180deg, ${rgb(c1)} 0%, ${rgb(c2)} 100%)`,
      blendMode: "normal",
      blur: 0,
    },
    {
      background: `radial-gradient(circle at 40% 30%, ${rgba(c3, 0.45)} 0%, transparent 55%)`,
      blendMode: "overlay",
      blur: 40,
    },
  ], { grain: true })
}

export function createGlassGradient(input: NamedPreset): Gradient {
  const [c1, c2, c3] = input.colors
  return meta(input, "glass", [
    {
      background: `linear-gradient(160deg, ${rgba(c1, 0.45)} 0%, ${rgba(c2, 0.28)} 55%, ${rgba(c3, 0.2)} 100%)`,
      blendMode: "normal",
      blur: 8,
    },
    {
      background: `radial-gradient(ellipse 70% 40% at 20% 10%, ${rgba("#ffffff", 0.55)} 0%, transparent 60%)`,
      blendMode: "soft-light",
      blur: 24,
    },
    {
      background: `linear-gradient(115deg, transparent 30%, ${rgba("#ffffff", 0.35)} 48%, transparent 62%)`,
      blendMode: "soft-light",
      blur: 6,
    },
  ])
}

export function createFluxGradient(input: NamedPreset): Gradient {
  const [c1, c2, c3] = input.colors
  return meta(input, "flux", [
    {
      background: `radial-gradient(ellipse 70% 50% at 28% 42%, ${rgba(c1, 0.7)} 0%, transparent 62%)`,
      blendMode: "screen",
      blur: 48,
    },
    {
      background: `radial-gradient(ellipse 55% 70% at 74% 58%, ${rgba(c2, 0.62)} 0%, transparent 64%)`,
      blendMode: "screen",
      blur: 52,
    },
    {
      background: `radial-gradient(ellipse 40% 35% at 52% 22%, ${rgba(c3, 0.4)} 0%, transparent 70%)`,
      blendMode: "overlay",
      blur: 36,
    },
  ])
}

export function createAuroraGradient(input: NamedPreset): Gradient {
  const [c1, c2, c3, c4] = input.colors
  return meta(input, "aurora", [
    {
      background: `radial-gradient(ellipse 28% 90% at 22% 50%, ${rgba(c1, 0.55)} 0%, transparent 70%)`,
      blendMode: "screen",
      blur: 55,
    },
    {
      background: `radial-gradient(ellipse 24% 95% at 48% 40%, ${rgba(c2, 0.5)} 0%, transparent 72%)`,
      blendMode: "screen",
      blur: 48,
    },
    {
      background: `radial-gradient(ellipse 30% 85% at 74% 55%, ${rgba(c3, 0.45)} 0%, transparent 68%)`,
      blendMode: "screen",
      blur: 52,
    },
    {
      background: `linear-gradient(180deg, transparent 0%, ${rgba(c4 ?? c1, 0.18)} 100%)`,
      blendMode: "overlay",
      blur: 20,
    },
  ], { dark: true, text: input.text ?? "#d7fff4" })
}

export function createNoiseGradient(input: NamedPreset): Gradient {
  const [c1, c2, c3] = input.colors
  return meta(input, "noise", [
    {
      background: `linear-gradient(135deg, ${rgb(c1)} 0%, ${rgb(c2)} 100%)`,
      blendMode: "normal",
      blur: 0,
    },
    {
      background: `radial-gradient(circle at 30% 40%, ${rgba(c3, 0.4)} 0%, transparent 55%)`,
      blendMode: "soft-light",
      blur: 50,
    },
    {
      background: `radial-gradient(circle at 75% 70%, ${rgba(c1, 0.28)} 0%, transparent 50%)`,
      blendMode: "overlay",
      blur: 44,
    },
  ], { grain: true })
}

export function createHaloGradient(input: NamedPreset): Gradient {
  const [c1, c2, c3] = input.colors
  return meta(input, "halo", [
    {
      background: `radial-gradient(circle at 50% 50%, ${rgba(c1, 0.0)} 18%, ${rgba(c1, 0.55)} 28%, ${rgba(c2, 0.2)} 42%, transparent 62%)`,
      blendMode: "screen",
      blur: 18,
    },
    {
      background: `radial-gradient(circle at 50% 50%, ${rgba(c3, 0.35)} 0%, transparent 28%)`,
      blendMode: "overlay",
      blur: 30,
    },
    {
      background: `radial-gradient(circle at 50% 50%, transparent 40%, ${rgba("#050308", 0.55)} 100%)`,
      blendMode: "multiply",
      blur: 20,
    },
  ], { dark: input.dark ?? true, text: input.text ?? "#fff4d6" })
}

export function createDuskGradient(input: NamedPreset): Gradient {
  const [c1, c2, c3] = input.colors
  return meta(input, "dusk", [
    {
      background: `linear-gradient(180deg, ${rgb(c1)} 0%, ${rgb(c2)} 48%, ${rgb(c3)} 100%)`,
      blendMode: "normal",
      blur: 0,
    },
    {
      background: `radial-gradient(ellipse 80% 35% at 50% 42%, ${rgba("#ffffff", 0.22)} 0%, transparent 70%)`,
      blendMode: "soft-light",
      blur: 28,
    },
    {
      background: `linear-gradient(180deg, transparent 55%, ${rgba(c3, 0.4)} 100%)`,
      blendMode: "multiply",
      blur: 12,
    },
  ])
}

export const FACTORY_MAP = {
  aura: createAuraGradient,
  mesh: createMeshGradient,
  nebula: createNebulaGradient,
  prism: createPrismGradient,
  lattice: createLatticeGradient,
  grain: createGrainGradient,
  glass: createGlassGradient,
  flux: createFluxGradient,
  aurora: createAuroraGradient,
  noise: createNoiseGradient,
  halo: createHaloGradient,
  dusk: createDuskGradient,
} as const
