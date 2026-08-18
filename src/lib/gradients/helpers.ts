import type { CSSProperties } from "react"
import type { Gradient, Layer } from "./types"

/** Generate copyable CSS for a gradient (fullscreen blur scale). */
export function gradientToCSS(g: Gradient): string {
  const layersCSS = g.layers
    .map((l, i) => {
      const blurLine =
        l.blur > 0
          ? `\nfilter: blur(90px); /* use 130px on desktop */`
          : ""
      return `/* Layer ${i + 1} - ${l.blendMode} */\nbackground: ${l.background};\nmix-blend-mode: ${l.blendMode};${blurLine}`
    })
    .join("\n\n")

  return `/* ${g.name} - Gamma (${g.category}) */\n/* Base - set on body/page for blend modes */\nbackground-color: ${g.base};\n\n${layersCSS}${g.grain ? "\n\n/* Grain: apply SVG feTurbulence noise overlay */" : ""}`
}

/**
 * Catalog blend modes are authored against their natural backdrop (mostly
 * dark). Over a light theme background, `hard-light`, `soft-light`, `screen`
 * and `overlay` wash the gradient out to white. Map them to `multiply` so the
 * original hues render as tints on a light base.
 */
export function resolveBlendMode(mode: string, light: boolean): string {
  if (!light) return mode
  switch (mode) {
    case "hard-light":
    case "soft-light":
    case "screen":
    case "overlay":
      return "multiply"
    default:
      return mode
  }
}

/**
 * Catalog blur values are tuned for card thumbnails (raw px). Fullscreen
 * backgrounds need much more blur for the atmospheric effect.
 */
export function scaleBlurFull(blur: number): { mobile: number; desktop: number } {
  if (blur <= 0) return { mobile: 0, desktop: 0 }
  return {
    mobile: Math.min(200, Math.round(blur * 2.5)),
    desktop: Math.min(260, Math.round(blur * 3.6)),
  }
}

const REPEATING_GRADIENT = /repeating-(linear|radial|conic)-gradient/

export function isLightBase(base: string): boolean {
  const value = base.trim()
  if (value.startsWith("#")) {
    const hex = value.slice(1)
    const full =
      hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex
    if (full.length !== 6) return false
    const r = parseInt(full.slice(0, 2), 16) / 255
    const g = parseInt(full.slice(2, 4), 16) / 255
    const b = parseInt(full.slice(4, 6), 16) / 255
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return lum > 0.45
  }

  const hslMatch = value.match(
    /hsl\(\s*[\d.]+\s*,\s*[\d.]+%?\s*,\s*([\d.]+)%?\s*\)/,
  )
  if (hslMatch) return parseFloat(hslMatch[1]) > 45

  return false
}

export function isRepeatingLayer(layer: Layer): boolean {
  return REPEATING_GRADIENT.test(layer.background)
}

/** Inline styles for one gradient layer (cards, thumbnails). */
export function gradientLayerStyle(
  layer: Layer,
  light: boolean,
  options?: { maxBlur?: number },
): CSSProperties {
  const maxBlur = options?.maxBlur ?? 24
  const blur = layer.blur > 0 ? Math.min(layer.blur, maxBlur) : 0
  const repeating = isRepeatingLayer(layer)

  return {
    background: layer.background,
    ...(layer.backgroundSize
      ? { backgroundSize: layer.backgroundSize, backgroundRepeat: "repeat" }
      : repeating
        ? { backgroundRepeat: "repeat" }
        : { backgroundSize: "cover", backgroundRepeat: "no-repeat" }),
    backgroundPosition: "center",
    mixBlendMode: resolveBlendMode(layer.blendMode, light) as CSSProperties["mixBlendMode"],
    filter: blur > 0 ? `blur(${blur}px)` : undefined,
    opacity: layer.opacity ?? 1,
  }
}

export const LIGHT_BG = "#f8f6f0"
export const DARK_BG = "#0d0b09"

export interface DisplayContext {
  light: boolean
  base: string
}

/** Backdrop + blend resolution for the active site theme (light/dark toggle). */
export function resolveDisplayContext(isDark: boolean): DisplayContext {
  return {
    light: !isDark,
    base: isDark ? DARK_BG : LIGHT_BG,
  }
}

/** Label color for gradient swatches — readable on the theme-adjusted preview. */
export function resolveCardLabelColor(
  gradient: Gradient,
  isDark: boolean,
): string {
  if (!isDark && !gradient.dark) return gradient.text || "#14130f"
  return gradient.cardText ?? gradient.text ?? "#ffffff"
}
