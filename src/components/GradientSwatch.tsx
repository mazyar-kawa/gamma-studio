"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { GradientStack } from "@/components/GradientLayerView"
import type { Layer } from "@/lib/gradients"
import {
  SWATCH_CAPTURE_DELAY_MS,
  SWATCH_CAPTURE_H,
  SWATCH_CAPTURE_W,
  captureSwatchNode,
  commitSwatchCapture,
  enqueueSwatchCapture,
  getCachedSwatch,
  shouldRasterizeSwatch,
  swatchCacheKey,
  swatchNeedsFullRes,
} from "@/lib/raster-swatch"

interface GradientSwatchProps {
  id: string
  base: string
  layers: Layer[]
  light: boolean
  grain?: boolean
}

export function GradientSwatch({
  id,
  base,
  layers,
  light,
  grain = false,
}: GradientSwatchProps) {
  const cacheKey = useMemo(
    () => swatchCacheKey({ id, base, layers, grain, light }),
    [id, base, layers, grain, light],
  )

  const containerRef = useRef<HTMLDivElement>(null)
  const captureRef = useRef<HTMLDivElement>(null)

  const [shouldRasterize, setShouldRasterize] = useState(false)
  const [isNearViewport, setIsNearViewport] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    const prefersRaster = shouldRasterizeSwatch()
    setShouldRasterize(prefersRaster)
    if (!prefersRaster) return

    const cached = getCachedSwatch(cacheKey)
    if (cached) setImageUrl(cached)

    const media = window.matchMedia("(pointer: coarse), (max-width: 767px)")
    const onChange = () => setShouldRasterize(media.matches)
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [cacheKey])

  useEffect(() => {
    if (!shouldRasterize || imageUrl) return

    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsNearViewport(true)
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldRasterize, imageUrl])

  useEffect(() => {
    if (!shouldRasterize || !isNearViewport || imageUrl) return

    let cancelled = false

    enqueueSwatchCapture(async () => {
      await new Promise((resolve) => window.setTimeout(resolve, SWATCH_CAPTURE_DELAY_MS))
      if (cancelled) return

      const cached = getCachedSwatch(cacheKey)
      if (cached) {
        if (!cancelled) setImageUrl(cached)
        return
      }

      const node = captureRef.current
      if (!node) return

      const dataUrl = await captureSwatchNode(node, swatchNeedsFullRes(layers))
      if (!dataUrl || cancelled) return

      commitSwatchCapture(cacheKey, dataUrl)
      setImageUrl(dataUrl)
    })

    return () => {
      cancelled = true
    }
  }, [shouldRasterize, isNearViewport, imageUrl, cacheKey, layers])

  const showRaster = shouldRasterize && !!imageUrl

  return (
    <div ref={containerRef} className="absolute top-0 left-0 h-full w-full">
      <div
        className={`absolute top-0 left-0 h-full w-full ${showRaster ? "invisible" : ""}`}
        aria-hidden={showRaster}
      >
        <GradientStack
          base={base}
          layers={layers}
          light={light}
          grain={grain}
          mode="card"
        />
      </div>

      {showRaster ? (
        // Data URLs from html-to-image — native img avoids Next.js image optimizer overhead
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt=""
          aria-hidden
          decoding="async"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      ) : null}

      {shouldRasterize && isNearViewport && !imageUrl ? (
        <div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 -z-50 opacity-0"
        >
          <div
            ref={captureRef}
            className="relative overflow-hidden"
            style={{ width: SWATCH_CAPTURE_W, height: SWATCH_CAPTURE_H }}
          >
            <GradientStack
              base={base}
              layers={layers}
              light={light}
              grain={grain}
              mode="card"
              variant="rich"
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}
