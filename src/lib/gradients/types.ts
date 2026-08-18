export type GradientMood = "warm" | "cool" | "vivid" | "dark"

export type Category =
  | "aura"
  | "mesh"
  | "nebula"
  | "prism"
  | "lattice"
  | "grain"
  | "glass"
  | "flux"
  | "aurora"
  | "noise"
  | "halo"
  | "dusk"

export interface Layer {
  background: string
  blendMode: string
  blur: number
  opacity?: number
  /** For repeating patterns (grids, dots, stripes) */
  backgroundSize?: string
  /** Stable identity assigned by the customizer reducer (used as React key) */
  id?: string
}

export interface Gradient {
  id: string
  name: string
  category: Category
  mood: GradientMood
  desc: string
  dark: boolean
  text: string
  /** Text color for the name/description block on the gallery card.
      Falls back to white when unset. */
  cardText?: string
  base: string
  layers: Layer[]
  grain?: boolean
}

export interface CategoryMeta {
  id: Category | "all"
  label: string
  icon: string
}
