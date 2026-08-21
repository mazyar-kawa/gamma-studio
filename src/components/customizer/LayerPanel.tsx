"use client";

import { useCallback } from "react";
import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import type { Layer } from "@/lib/gradients";
import { extractDominantColor, toHex, replaceDominantColor } from "@/hooks/useGradientParser";
import { CustomSelect } from "@/components/customizer/CustomSelect"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const BLEND_MODES = [
  "normal",
  "screen",
  "overlay",
  "hard-light",
  "soft-light",
  "multiply",
  "color-dodge",
  "color-burn",
  "difference",
] as const;

interface Props {
  layers: Layer[];
  onUpdateLayer: (index: number, layer: Layer, options?: { preview?: boolean }) => void;
  onRemoveLayer: (index: number) => void;
  onAddLayer: () => void;
  onReorder: (from: number, to: number) => void;
}

const BLEND_OPTIONS = BLEND_MODES.map((mode) => ({ value: mode, label: mode }));

export function LayerPanel({
  layers,
  onUpdateLayer,
  onRemoveLayer,
  onAddLayer,
  onReorder,
}: Props) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] uppercase tracking-wider text-white/50 font-medium">
          Layers ({layers.length})
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={onAddLayer}
          className="h-7 px-2 text-white/60 hover:bg-white/10 hover:text-white"
        >
          <Plus className="size-2.5" />
          Add
        </Button>
      </div>

      {layers.map((layer, i) => (
        <LayerRow
          key={layer.id ?? i}
          index={i}
          layer={layer}
          total={layers.length}
          onUpdate={(updated, options) => onUpdateLayer(i, updated, options)}
          onRemove={() => onRemoveLayer(i)}
          onMoveUp={i > 0 ? () => onReorder(i, i - 1) : undefined}
          onMoveDown={i < layers.length - 1 ? () => onReorder(i, i + 1) : undefined}
        />
      ))}
    </div>
  );
}

/* ── Single layer row ── */

function LayerRow({
  index,
  layer,
  total,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
}: {
  index: number;
  layer: Layer;
  total: number;
  onUpdate: (layer: Layer, options?: { preview?: boolean }) => void;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
}) {
  const dominantColor = extractDominantColor(layer.background);
  const colorHex = toHex(dominantColor);

  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newBg = replaceDominantColor(layer.background, dominantColor, e.target.value);
      onUpdate({ ...layer, background: newBg });
    },
    [layer, dominantColor, onUpdate],
  );

  const handleBlendChange = useCallback(
    (value: string) => {
      onUpdate({ ...layer, blendMode: value })
    },
    [layer, onUpdate],
  )

  const handleBlurChange = useCallback(
    (values: number[]) => {
      const blur = values[0]
      if (blur == null) return
      onUpdate({ ...layer, blur }, { preview: true })
    },
    [layer, onUpdate],
  )

  const handleBlurCommit = useCallback(
    (values: number[]) => {
      const blur = values[0]
      if (blur == null) return
      onUpdate({ ...layer, blur })
    },
    [layer, onUpdate],
  )

  const handleOpacityChange = useCallback(
    (values: number[]) => {
      const opacity = values[0]
      if (opacity == null) return
      onUpdate({ ...layer, opacity: opacity / 100 }, { preview: true })
    },
    [layer, onUpdate],
  )

  const handleOpacityCommit = useCallback(
    (values: number[]) => {
      const opacity = values[0]
      if (opacity == null) return
      onUpdate({ ...layer, opacity: opacity / 100 })
    },
    [layer, onUpdate],
  )

  return (
    <div className="min-w-0 space-y-2.5 border border-white/10 bg-white/5 p-3 squircle-element transition-all hover:border-white/20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <label
            className="relative w-4 h-4 rounded-full border border-white/30 overflow-hidden shrink-0 cursor-pointer"
            title="Edit dominant color"
          >
            <input
              type="color"
              value={colorHex}
              onChange={handleColorChange}
              aria-label={`Layer ${index + 1} dominant color`}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <span className="absolute inset-0" style={{ backgroundColor: dominantColor }} />
          </label>
          <span className="text-xs text-white/80 font-medium">Layer {index + 1}</span>
        </div>
        <div className="flex items-center gap-1">
          {onMoveUp && (
            <Button variant="ghost" size="icon-sm" onClick={onMoveUp} title="Move up" className="size-6 text-white/30 hover:bg-white/10 hover:text-white/70">
              <ChevronUp className="size-3" />
            </Button>
          )}
          {onMoveDown && (
            <Button variant="ghost" size="icon-sm" onClick={onMoveDown} title="Move down" className="size-6 text-white/30 hover:bg-white/10 hover:text-white/70">
              <ChevronDown className="size-3" />
            </Button>
          )}
          {total > 1 && (
            <Button variant="ghost" size="icon-sm" onClick={onRemove} title="Remove layer" className="size-6 ml-1 text-white/30 hover:bg-white/10 hover:text-red-400">
              <Trash2 className="size-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Blend mode */}
      <div className="flex min-w-0 items-center gap-2">
        <label className="w-14 shrink-0 text-[12px] text-white/40">Blend</label>
        <CustomSelect
          value={layer.blendMode}
          onChange={handleBlendChange}
          options={BLEND_OPTIONS}
          className="min-w-0 flex-1"
        />
      </div>

      {/* Blur slider */}
      <div className="flex min-w-0 items-center gap-2">
        <label className="w-14 shrink-0 text-[12px] text-white/40">Blur</label>
        <Slider
          min={0}
          max={100}
          value={[layer.blur]}
          onValueChange={handleBlurChange}
          onValueCommit={handleBlurCommit}
          className="min-w-0 flex-1"
        />
        <span className="w-8 shrink-0 text-right font-mono text-[12px] text-white/50">{layer.blur}px</span>
      </div>

      {/* Opacity slider */}
      <div className="flex min-w-0 items-center gap-2">
        <label className="w-14 shrink-0 text-[12px] text-white/40">Opacity</label>
        <Slider
          min={0}
          max={100}
          value={[Math.round((layer.opacity ?? 1) * 100)]}
          onValueChange={handleOpacityChange}
          onValueCommit={handleOpacityCommit}
          className="min-w-0 flex-1"
        />
        <span className="w-8 shrink-0 text-right font-mono text-[12px] text-white/50">{Math.round((layer.opacity ?? 1) * 100)}%</span>
      </div>
    </div>
  );
}
