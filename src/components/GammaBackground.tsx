"use client";

import { useMemo } from "react";
import { GradientStack } from "@/components/GradientLayerView";
import { useGradients } from "@/components/GradientProvider";
import { resolveDisplayContext, type Layer } from "@/lib/gradients";

interface Stack {
  layers: Layer[];
  grain: boolean;
}

export function GammaBackground() {
  const { active, effectiveLayers, effectiveGrain, fullscreen, isDark } = useGradients();
  const { light, base: baseColor } = resolveDisplayContext(isDark);

  const stack = useMemo<Stack>(
    () =>
      active
        ? { layers: active.layers, grain: active.grain ?? false }
        : { layers: effectiveLayers, grain: effectiveGrain },
    [active, effectiveLayers, effectiveGrain],
  );

  if (fullscreen || !active) return null;

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <GradientStack
        base={baseColor}
        layers={stack.layers}
        light={light}
        grain={stack.grain}
        mode="full"
        className="transition-[background-color] duration-300 ease-out"
      />
    </div>
  );
}
