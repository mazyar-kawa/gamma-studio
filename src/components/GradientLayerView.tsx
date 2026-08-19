"use client"

import type { CSSProperties } from "react"
import { GrainOverlay } from "@/components/GrainOverlay"
import {
  isRepeatingLayer,
  resolveBlendMode,
  scaleBlurFull,
  type Layer,
} from "@/lib/gradients"

interface GradientLayerViewProps {
  layer: Layer
  light: boolean
  /** Card thumbnails cap blur; fullscreen uses scaled atmospheric blur */
  mode?: "card" | "full"
}

function layerBackgroundStyle(layer: Layer): CSSProperties {
  const repeating = isRepeatingLayer(layer)

  return {
    backgroundImage: layer.background,
    backgroundPosition: "center",
    ...(layer.backgroundSize
      ? { backgroundSize: layer.backgroundSize, backgroundRepeat: "repeat" }
      : repeating
        ? { backgroundRepeat: "repeat" }
        : { backgroundSize: "cover", backgroundRepeat: "no-repeat" }),
    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
  }
}

/**
 * Renders one gradient layer with blur and blend on separate elements.
 * Samsung Internet / Android WebView often drop layers when filter +
 * mix-blend-mode share the same node.
 */
export function GradientLayerView({
  layer,
  light,
  mode = "card",
}: GradientLayerViewProps) {
  const blendMode = resolveBlendMode(layer.blendMode, light) as CSSProperties["mixBlendMode"]
  const opacity = layer.opacity ?? 1
  const bgStyle = layerBackgroundStyle(layer)

  if (mode === "full") {
    const scaled = scaleBlurFull(layer.blur)
    const blurM = Math.min(scaled.mobile, 120)
    const blurActive = blurM > 0

    if (blurActive) {
      return (
        <div
          className="gradient-layer-blend absolute inset-0"
          style={{ mixBlendMode: blendMode, opacity }}
        >
          <div
            className="gamma-blur absolute inset-0"
            style={{
              ...bgStyle,
              ...({ "--blur-m": `${blurM}px`, "--blur-d": `${scaled.desktop}px` } as CSSProperties),
            }}
          />
        </div>
      )
    }

    return (
      <div
        className="gradient-layer-blend absolute inset-0"
        style={{ ...bgStyle, mixBlendMode: blendMode, opacity }}
      />
    )
  }

  const blur = layer.blur > 0 ? Math.min(layer.blur, 24) : 0

  if (blur > 0) {
    return (
      <div
        className="gradient-layer-blend absolute inset-0"
        style={{ mixBlendMode: blendMode, opacity }}
      >
        <div
          className="absolute inset-0"
          style={{ ...bgStyle, filter: `blur(${blur}px)` }}
        />
      </div>
    )
  }

  return (
    <div
      className="gradient-layer-blend absolute inset-0"
      style={{ ...bgStyle, mixBlendMode: blendMode, opacity }}
    />
  )
}

interface GradientStackProps {
  base: string
  layers: Layer[]
  light: boolean
  grain?: boolean
  mode?: "card" | "full"
  className?: string
}

export function GradientStack({
  base,
  layers,
  light,
  grain = false,
  mode = "card",
  className = "",
}: GradientStackProps) {
  return (
    <div
      className={`gradient-stack absolute inset-0 ${className}`}
      style={{ backgroundColor: base }}
    >
      {layers.map((layer, i) => (
        <GradientLayerView key={i} layer={layer} light={light} mode={mode} />
      ))}
      {grain ? <GrainOverlay className="absolute inset-0" /> : null}
    </div>
  )
}
