"use client"

import type { CSSProperties } from "react"
import { GrainOverlay } from "@/components/GrainOverlay"
import {
  isRepeatingLayer,
  resolveBlendMode,
  scaleBlurFull,
  type Layer,
} from "@/lib/gradients"

/** Absolute fill without `inset` — unsupported on some Samsung Internet builds */
const FILL = "absolute top-0 left-0 h-full w-full"

interface GradientLayerViewProps {
  layer: Layer
  light: boolean
  mode?: "card" | "full"
}

function safeLayerStyle(layer: Layer): CSSProperties {
  const repeating = isRepeatingLayer(layer)

  return {
    background: layer.background,
    backgroundPosition: "center",
    ...(layer.backgroundSize
      ? { backgroundSize: layer.backgroundSize, backgroundRepeat: "repeat" }
      : repeating
        ? { backgroundRepeat: "repeat" }
        : { backgroundSize: "cover", backgroundRepeat: "no-repeat" }),
    opacity: layer.opacity ?? 1,
  }
}

function richLayerStyle(layer: Layer): CSSProperties {
  const repeating = isRepeatingLayer(layer)

  return {
    background: layer.background,
    backgroundPosition: "center",
    ...(layer.backgroundSize
      ? { backgroundSize: layer.backgroundSize, backgroundRepeat: "repeat" }
      : repeating
        ? { backgroundRepeat: "repeat" }
        : { backgroundSize: "cover", backgroundRepeat: "no-repeat" }),
  }
}

function RichGradientLayer({
  layer,
  light,
  mode = "card",
}: GradientLayerViewProps) {
  const blendMode = resolveBlendMode(layer.blendMode, light) as CSSProperties["mixBlendMode"]
  const opacity = layer.opacity ?? 1
  const bgStyle = richLayerStyle(layer)

  if (mode === "full") {
    const scaled = scaleBlurFull(layer.blur)
    const blurM = Math.min(scaled.mobile, 120)
    const blurActive = blurM > 0

    if (blurActive) {
      return (
        <div className={`gradient-layer-blend ${FILL}`} style={{ mixBlendMode: blendMode, opacity }}>
          <div
            className={`gamma-blur ${FILL}`}
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
        className={`gradient-layer-blend ${FILL}`}
        style={{ ...bgStyle, mixBlendMode: blendMode, opacity }}
      />
    )
  }

  const blur = layer.blur > 0 ? Math.min(layer.blur, 24) : 0

  if (blur > 0) {
    return (
      <div className={`gradient-layer-blend ${FILL}`} style={{ mixBlendMode: blendMode, opacity }}>
        <div className={FILL} style={{ ...bgStyle, filter: `blur(${blur}px)` }} />
      </div>
    )
  }

  return (
    <div
      className={`gradient-layer-blend ${FILL}`}
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
      className={`gradient-stack ${FILL} ${className}`}
      style={{ backgroundColor: base }}
    >
      {/* Touch / mobile: plain stacked gradients — no blend, no blur, no JS */}
      <div className={`gradient-render-safe ${FILL}`} aria-hidden="true">
        {layers.map((layer, i) => (
          <div key={`safe-${i}`} className={FILL} style={safeLayerStyle(layer)} />
        ))}
      </div>

      {/* Desktop: authored blend modes + blur */}
      <div className={`gradient-render-rich ${FILL}`} aria-hidden="true">
        {layers.map((layer, i) => (
          <RichGradientLayer key={`rich-${i}`} layer={layer} light={light} mode={mode} />
        ))}
        {grain ? <GrainOverlay className={FILL} /> : null}
      </div>
    </div>
  )
}
