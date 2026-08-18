"use client";

import { useMemo } from "react";
import { useGradients } from "@/components/GradientProvider";
import { GrainOverlay } from "@/components/GrainOverlay";
import {
  resolveBlendMode,
  resolveDisplayContext,
  scaleBlurFull,
  type Layer,
} from "@/lib/gradients";

interface Stack {
  layers: Layer[];
  grain: boolean;
}

function renderStack(stack: Stack, light: boolean, baseColor: string) {
  return (
    <div
      className="absolute inset-0 transition-[background-color] duration-300 ease-out"
      style={{
        backgroundColor: baseColor,
        transform: "translateZ(0)",
      }}
    >
      {stack.layers.map((layer, i) => {
        const b = scaleBlurFull(layer.blur);
        const blurM = Math.min(b.mobile, 120);
        const blurActive = blurM > 0;
        return (
          <div
            key={i}
            className={`absolute inset-0 ${blurActive ? "gamma-blur" : ""}`}
            style={{
              ...(blurActive
                ? ({ "--blur-m": `${blurM}px`, "--blur-d": `${b.desktop}px` } as React.CSSProperties)
                : {}),
              backgroundImage: layer.background,
              backgroundSize: layer.backgroundSize ?? "cover",
              mixBlendMode: resolveBlendMode(
                layer.blendMode,
                light,
              ) as React.CSSProperties["mixBlendMode"],
              opacity: layer.opacity ?? 1,
            }}
          />
        );
      })}
      {stack.grain && <GrainOverlay className="absolute inset-0" />}
    </div>
  );
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
      {renderStack(stack, light, baseColor)}
    </div>
  );
}
