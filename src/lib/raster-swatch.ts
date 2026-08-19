import { toPng } from "html-to-image"
import { hasVisiblePixels } from "@/lib/image-utils"
import type { Layer } from "@/lib/gradients"

export const SWATCH_CAPTURE_W = 360
export const SWATCH_CAPTURE_H = 414
export const SWATCH_CAPTURE_DELAY_MS = 90
export const SWATCH_RASTER_SCALE = 0.5
export const SWATCH_CACHE_MAX = 80

const cache = new Map<string, string>()

let captureChain = Promise.resolve()

export function shouldRasterizeSwatch(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(pointer: coarse), (max-width: 767px)").matches
}

export function swatchCacheKey(input: {
  id: string
  base: string
  layers: Layer[]
  grain: boolean
  light: boolean
}): string {
  return `${input.id}|${input.light}|${input.grain}|${input.base}|${JSON.stringify(
    input.layers.map((layer) => [
      layer.background,
      layer.backgroundSize ?? "",
      layer.blendMode,
      layer.blur,
      layer.opacity ?? 1,
    ]),
  )}`
}

export function getCachedSwatch(key: string): string | undefined {
  return cache.get(key)
}

function setCachedSwatch(key: string, dataUrl: string) {
  cache.set(key, dataUrl)
  if (cache.size <= SWATCH_CACHE_MAX) return
  const oldest = cache.keys().next().value
  if (oldest !== undefined) cache.delete(oldest)
}

export function swatchNeedsFullRes(layers: Layer[]): boolean {
  return layers.some(
    (layer) =>
      !!layer.backgroundSize ||
      /repeating-(linear|radial|conic)-gradient/.test(layer.background),
  )
}

export function enqueueSwatchCapture(task: () => Promise<void>) {
  captureChain = captureChain.then(task).catch(() => {})
  return captureChain
}

export async function captureGradientNode(
  node: HTMLElement,
  width: number,
  height: number,
  fullRes: boolean,
): Promise<string | null> {
  try {
    const pixelRatio = fullRes ? 1 : SWATCH_RASTER_SCALE
    const dataUrl = await toPng(node, {
      width,
      height,
      pixelRatio,
      cacheBust: true,
      style: {
        position: "absolute",
        left: "0",
        top: "0",
        right: "auto",
        bottom: "auto",
        margin: "0",
      },
    })

    const sampleW = Math.round(width * pixelRatio)
    const sampleH = Math.round(height * pixelRatio)
    const visible = await hasVisiblePixels(dataUrl, sampleW, sampleH)
    if (!visible) return null

    return dataUrl
  } catch {
    return null
  }
}

export async function captureSwatchNode(
  node: HTMLElement,
  fullRes: boolean,
): Promise<string | null> {
  return captureGradientNode(node, SWATCH_CAPTURE_W, SWATCH_CAPTURE_H, fullRes)
}

export function backgroundCacheKey(
  stackKey: string,
  width: number,
  height: number,
): string {
  return `bg|${stackKey}|${width}x${height}`
}

export function commitSwatchCapture(key: string, dataUrl: string) {
  setCachedSwatch(key, dataUrl)
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("gamma-swatch-captured", { detail: { key } }),
    )
  }
}
