"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { GradientStack } from "@/components/GradientLayerView"
import { useGradients } from "@/components/GradientProvider"
import { isLightBase, type Layer } from "@/lib/gradients"
import {
  SWATCH_CAPTURE_DELAY_MS,
  backgroundCacheKey,
  captureGradientNode,
  commitSwatchCapture,
  enqueueSwatchCapture,
  getCachedSwatch,
  shouldRasterizeSwatch,
  swatchCacheKey,
  swatchNeedsFullRes,
} from "@/lib/raster-swatch"

const FADE_MS = 400

interface BackgroundStackProps {
  id: string
  base: string
  layers: Layer[]
  light: boolean
  grain: boolean
}

export function GammaBackground() {
  const { active, fullscreen } = useGradients()

  if (fullscreen || !active) return null

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <GammaBackgroundStack
        id={active.id}
        base={active.base}
        layers={active.layers}
        light={isLightBase(active.base)}
        grain={active.grain ?? false}
      />
    </div>
  )
}

function GammaBackgroundStack({
  id,
  base,
  layers,
  light,
  grain,
}: BackgroundStackProps) {
  const stackKey = useMemo(
    () => swatchCacheKey({ id, base, layers, grain, light }),
    [id, base, layers, grain, light],
  )

  const [shouldRasterize, setShouldRasterize] = useState(false)
  const [viewport, setViewport] = useState({ w: 0, h: 0 })
  const [current, setCurrent] = useState<string | null>(null)
  const [previous, setPrevious] = useState<string | null>(null)
  const [fadeOpacity, setFadeOpacity] = useState(1)

  const captureRef = useRef<HTMLDivElement>(null)
  const curImgRef = useRef<string | null>(null)
  const timerRef = useRef<number | null>(null)
  const fadeTimerRef = useRef<number | null>(null)

  useEffect(() => {
    const prefersRaster = shouldRasterizeSwatch()
    setShouldRasterize(prefersRaster)

    const media = window.matchMedia("(pointer: coarse), (max-width: 767px)")
    const onChange = () => setShouldRasterize(media.matches)
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    const syncViewport = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight })

    const id = requestAnimationFrame(syncViewport)
    window.addEventListener("resize", syncViewport)
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener("resize", syncViewport)
    }
  }, [])

  const commitImage = useCallback((dataUrl: string) => {
    const old = curImgRef.current
    curImgRef.current = dataUrl
    setCurrent(dataUrl)

    if (old && old !== dataUrl) {
      setPrevious(old)
      setFadeOpacity(0)
      requestAnimationFrame(() => setFadeOpacity(1))
      if (fadeTimerRef.current !== null) window.clearTimeout(fadeTimerRef.current)
      fadeTimerRef.current = window.setTimeout(() => setPrevious(null), FADE_MS)
    }
  }, [])

  useEffect(() => {
    setCurrent(null)
    setPrevious(null)
    curImgRef.current = null
  }, [stackKey])

  useEffect(() => {
    if (!shouldRasterize) return

    function applyCardCache() {
      const cardCached = getCachedSwatch(stackKey)
      if (cardCached) commitImage(cardCached)
    }

    applyCardCache()

    const onCaptured = (event: Event) => {
      const detail = (event as CustomEvent<{ key: string }>).detail
      if (detail.key === stackKey) applyCardCache()
    }

    window.addEventListener("gamma-swatch-captured", onCaptured)
    return () => window.removeEventListener("gamma-swatch-captured", onCaptured)
  }, [shouldRasterize, stackKey, commitImage])

  useEffect(() => {
    if (!shouldRasterize) return

    const cardCached = getCachedSwatch(stackKey)
    if (cardCached) return

    if (viewport.w <= 0 || viewport.h <= 0) return

    const bgKey = backgroundCacheKey(stackKey, viewport.w, viewport.h)
    const bgCached = getCachedSwatch(bgKey)
    if (bgCached) {
      commitImage(bgCached)
      return
    }

    if (timerRef.current !== null) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      enqueueSwatchCapture(async () => {
        const cardHit = getCachedSwatch(stackKey)
        if (cardHit) {
          commitImage(cardHit)
          return
        }

        const node = captureRef.current
        if (!node) return

        const dataUrl = await captureGradientNode(
          node,
          viewport.w,
          viewport.h,
          swatchNeedsFullRes(layers),
        )
        if (!dataUrl) return

        commitSwatchCapture(bgKey, dataUrl)
        commitImage(dataUrl)
      })
    }, SWATCH_CAPTURE_DELAY_MS)

    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
    }
  }, [shouldRasterize, stackKey, viewport.w, viewport.h, layers, commitImage])

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
      if (fadeTimerRef.current !== null) window.clearTimeout(fadeTimerRef.current)
    },
    [],
  )

  if (!shouldRasterize) {
    return (
      <GradientStack
        base={base}
        layers={layers}
        light={light}
        grain={grain}
        mode="full"
        className="transition-[background-color] duration-300 ease-out"
      />
    )
  }

  const showRaster = !!current

  return (
    <>
      {!showRaster ? (
        <GradientStack
          base={base}
          layers={layers}
          light={light}
          grain={grain}
          mode="card"
          className="transition-[background-color] duration-300 ease-out"
        />
      ) : null}

      {showRaster ? (
        <>
          {previous ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={previous}
              alt=""
              aria-hidden
              className="absolute top-0 left-0 h-full w-full object-cover"
              style={{ opacity: 1 - fadeOpacity, transition: `opacity ${FADE_MS}ms ease-out` }}
            />
          ) : null}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current}
            alt=""
            aria-hidden
            className="absolute top-0 left-0 h-full w-full object-cover transition-[background-color] duration-300 ease-out"
            style={{ opacity: fadeOpacity, transition: `opacity ${FADE_MS}ms ease-out` }}
          />
        </>
      ) : null}

      {shouldRasterize && viewport.w > 0 && viewport.h > 0 && !current ? (
        <div aria-hidden className="pointer-events-none fixed left-0 top-0 -z-50 opacity-0">
          <div
            ref={captureRef}
            className="relative overflow-hidden"
            style={{ width: viewport.w, height: viewport.h }}
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
    </>
  )
}
