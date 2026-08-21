import { AURA_PRESETS } from "./presets/aura"
import { MESH_PRESETS } from "./presets/mesh"
import { NEBULA_PRESETS } from "./presets/nebula"
import { PRISM_PRESETS } from "./presets/prism"
import { LATTICE_PRESETS } from "./presets/lattice"
import { GRAIN_PRESETS } from "./presets/grain"
import { GLASS_PRESETS } from "./presets/glass"
import { FLUX_PRESETS } from "./presets/flux"
import { EXTRA_EXISTING } from "./presets/extra-existing"
import { NEW_CATEGORY_PRESETS } from "./presets/new-categories"
import { GENERATED_PRESETS } from "./factories/generated"
import type { Gradient } from "./types"

export type { Category, CategoryMeta, Gradient, GradientMood, Layer } from "./types"
export { CATEGORIES, FEATURED_IDS } from "./categories"
export { DARK_BG, LIGHT_BG, gradientToCSS, gradientLayerStyle, isLightBase, isRepeatingLayer, layerBackgroundStyle, resolveBlendMode, resolveCardLabelColor, resolveDisplayContext, scaleBlurFull } from "./helpers"
export type { DisplayContext } from "./helpers"

const COMBINED: Gradient[] = [
  ...AURA_PRESETS,
  ...MESH_PRESETS,
  ...NEBULA_PRESETS,
  ...PRISM_PRESETS,
  ...LATTICE_PRESETS,
  ...GRAIN_PRESETS,
  ...GLASS_PRESETS,
  ...FLUX_PRESETS,
  ...EXTRA_EXISTING,
  ...NEW_CATEGORY_PRESETS,
  ...GENERATED_PRESETS,
]

const seen = new Set<string>()
export const GRADIENTS: Gradient[] = COMBINED.filter((g) => {
  if (seen.has(g.id)) return false
  seen.add(g.id)
  return true
})

export const GRADIENT_COUNT = GRADIENTS.length

export const DEFAULT_GRADIENT_ID = "sky-aurora"

export function getDefaultGradient(): Gradient {
  return GRADIENTS.find((g) => g.id === DEFAULT_GRADIENT_ID) ?? GRADIENTS[0]
}
