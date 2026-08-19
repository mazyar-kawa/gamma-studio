"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useDeferredValue } from "react";
import { Icon } from "@iconify/react";
import { toPng, toSvg } from "html-to-image";
import { useGradients } from "@/components/GradientProvider";
import { GradientStack } from "@/components/GradientLayerView";
import { DraggableNode } from "@/components/customizer/DraggableNode";
import { LayerPanel } from "@/components/customizer/LayerPanel";
import { ExportPanel } from "@/components/customizer/ExportPanel";
import {
  extractPosition,
  replacePosition,
  extractDominantColor,
} from "@/hooks/useGradientParser";
import { exportGradient, type ExportFormat } from "@/lib/exportFormats";
import { generateAIPrompt } from "@/lib/generateAIPrompt";
import { copyToClipboard } from "@/lib/clipboard";
import type { Layer } from "@/lib/gradients";
import { resolveDisplayContext } from "@/lib/gradients";
import { Button } from "@/components/ui/button";
import {
  Check,
  FileDown,
  ImageDown,
  LoaderCircle,
  Moon,
  Redo2,
  RotateCcw,
  Shuffle,
  Sparkles,
  Sun,
  Undo2,
  X,
} from "lucide-react";

const EXPORT_W = 1600;
const EXPORT_H = 900;

/** True if the PNG data URL has actual painted pixels (not fully transparent) */
function hasVisiblePixels(dataUrl: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = EXPORT_W;
        c.height = EXPORT_H;
        const ctx = c.getContext("2d");
        if (!ctx) return resolve(false);
        ctx.drawImage(img, 0, 0);
        const data = ctx.getImageData(0, 0, EXPORT_W, EXPORT_H).data;
        let visible = 0;
        for (let i = 3; i < data.length; i += 4) {
          if (data[i] > 0) visible++;
          if (visible > 200) break;
        }
        resolve(visible > 200);
      } catch {
        resolve(false);
      }
    };
    img.onerror = () => resolve(false);
    img.src = dataUrl;
  });
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function Customizer() {
  const {
    active,
    fullscreen,
    toggleFullscreen,
    goNext,
    goPrev,
    random,
    effectiveLayers,
    effectiveGrain,
    isDark,
    toggleTheme,
    favorites,
    toggleFavorite,
    custom,
    dispatchCustom,
    showToast,
  } = useGradients();

  const { light: previewLight, base: previewBase } = resolveDisplayContext(isDark);

  const modalRef = useRef<HTMLDivElement>(null);
  const canUndo = custom.history.length > 0;
  const canRedo = custom.redo.length > 0;

  /* ── Keyboard shortcuts ── */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!fullscreen) return;
      if (e.key === "Escape") toggleFullscreen();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "r" || e.key === "R") random();
      if ((e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        dispatchCustom({ type: e.shiftKey ? "REDO" : "UNDO" });
      }
    },
    [fullscreen, toggleFullscreen, goNext, goPrev, random, dispatchCustom],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  /* ── Lock page scroll while customizer is open ── */
  useEffect(() => {
    if (!fullscreen) return;

    const scrollY = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [fullscreen]);

  /* ── Focus trap: keep Tab navigation inside the dialog, restore focus on close ── */
  useEffect(() => {
    if (!fullscreen) return;
    const modal = modalRef.current;
    if (!modal) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const focusables = () =>
      Array.from(modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (el) => el.offsetParent !== null,
      );

    (focusables()[0] ?? modal).focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const list = focusables();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      const current = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (current === first || !modal.contains(current)) {
          e.preventDefault();
          last.focus();
        }
      } else if (current === last || !modal.contains(current)) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", trap);
    return () => {
      window.removeEventListener("keydown", trap);
      previouslyFocused?.focus();
    };
  }, [fullscreen]);

  /* ── Node data (only for positioned gradients) ── */
  const nodes = useMemo(
    () =>
      effectiveLayers.map((layer, i) => ({
        index: i,
        position: extractPosition(layer.background),
        color: extractDominantColor(layer.background),
      })),
    [effectiveLayers],
  );

  /* ── Handlers ── */
  const handleNodeMove = useCallback(
    (layerIndex: number, x: number, y: number, preview = false) => {
      const layer = effectiveLayers[layerIndex];
      if (!layer) return;
      const newBg = replacePosition(layer.background, x, y);
      dispatchCustom({
        type: "UPDATE_LAYER",
        index: layerIndex,
        layer: { ...layer, background: newBg },
        preview,
      });
    },
    [effectiveLayers, dispatchCustom],
  );

  const handleNodeDragEnd = useCallback(() => {
    dispatchCustom({ type: "COMMIT_PREVIEW" });
  }, [dispatchCustom]);

  const handleUpdateLayer = useCallback(
    (index: number, layer: Layer, options?: { preview?: boolean }) => {
      dispatchCustom({
        type: "UPDATE_LAYER",
        index,
        layer,
        preview: options?.preview,
      });
    },
    [dispatchCustom],
  );

  const handleRemoveLayer = useCallback(
    (index: number) => {
      dispatchCustom({ type: "REMOVE_LAYER", index });
    },
    [dispatchCustom],
  );

  const handleAddLayer = useCallback(() => {
    const rx = Math.round(20 + Math.random() * 60);
    const ry = Math.round(20 + Math.random() * 60);
    const newLayer: Layer = {
      background: `radial-gradient(circle at ${rx}% ${ry}%, rgba(139,92,246,0.5) 0%, transparent 50%)`,
      blendMode: "screen",
      blur: 50,
      opacity: 1,
    };
    dispatchCustom({ type: "ADD_LAYER", layer: newLayer });
  }, [dispatchCustom]);

  const handleReorder = useCallback(
    (from: number, to: number) => {
      dispatchCustom({ type: "REORDER", from, to });
    },
    [dispatchCustom],
  );

  const handleReset = useCallback(() => {
    if (!active) return;
    dispatchCustom({
      type: "RESET",
      layers: active.layers,
      grain: active.grain ?? false,
    });
  }, [active, dispatchCustom]);

  const handleGrainToggle = useCallback(() => {
    dispatchCustom({ type: "SET_GRAIN", grain: !effectiveGrain });
  }, [effectiveGrain, dispatchCustom]);

  /* ── Export actions ── */
  const [format, setFormat] = useState<ExportFormat>("css");
  const [copied, setCopied] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  const code = useMemo(
    () => (active ? exportGradient(format, active, effectiveLayers, !isDark) : ""),
    [active, format, effectiveLayers, isDark],
  );
  const deferredCode = useDeferredValue(code);

  const aiPrompt = useMemo(
    () => (active ? generateAIPrompt(active, effectiveLayers, effectiveGrain, !isDark) : ""),
    [active, effectiveLayers, effectiveGrain, isDark],
  );
  const deferredAiPrompt = useDeferredValue(aiPrompt);

  const handleCopy = useCallback(
    async (text: string, label: string) => {
      // Trim so the copied text matches exactly what CodeBlock displays
      const ok = await copyToClipboard(text.trim());
      if (ok) {
        setCopied(label);
        showToast(`Copied ${label}`);
        setTimeout(() => setCopied(null), 2000);
      } else {
        showToast("Failed to copy", "error");
      }
    },
    [showToast],
  );

  /* Render the gradient (base + layers + grain) offscreen and download it.
     The snapshot node lives at 0,0 inside an off-screen wrapper — html-to-image
     clones the node with its computed styles, so a `left: -10000px` on the node
     itself would push the content off-canvas and produce a blank image. */
  const handleDownload = useCallback(
    async (dlFormat: "png" | "svg") => {
      const node = exportRef.current;
      if (!node || !active) return;
      setDownloading(true);
      try {
        const opts = {
          width: EXPORT_W,
          height: EXPORT_H,
          pixelRatio: 1,
          cacheBust: true,
          style: {
            position: "absolute" as const,
            left: "0",
            top: "0",
            right: "auto",
            bottom: "auto",
            margin: "0",
          },
        };
        const url =
          dlFormat === "png" ? await toPng(node, opts) : await toSvg(node, opts);
        if (dlFormat === "png" && !(await hasVisiblePixels(url))) {
          throw new Error("blank image");
        }
        const link = document.createElement("a");
        link.download = `${active.id}.${dlFormat}`;
        link.href = url;
        link.click();
        showToast(`Downloaded ${active.name} as ${dlFormat.toUpperCase()}`);
      } catch {
        showToast("Download failed", "error");
      } finally {
        setDownloading(false);
      }
    },
    [active, showToast],
  );

  if (!fullscreen || !active) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Gradient customizer"
      className="fixed inset-x-0 bottom-0 z-[100] flex min-h-0 flex-col overflow-hidden md:flex-row"
      style={{
        top: "var(--banner-height, 0px)",
        height: "calc(100dvh - var(--banner-height, 0px))",
        animation: "fullscreen-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both",
      }}
    >
      {/* ══ Left: Live Preview ══ */}
      <div
        className="relative h-[38dvh] min-h-0 shrink-0 overflow-hidden md:h-auto md:flex-1"
        data-customizer-preview
      >
        <GradientStack
          base={previewBase}
          layers={effectiveLayers}
          light={previewLight}
          grain={effectiveGrain}
          mode="full"
          className="transition-[background-color] duration-300 ease-out"
        />

        {/* Draggable nodes */}
        {nodes.map(
          (node) =>
            node.position && (
              <DraggableNode
                key={node.index}
                x={node.position.x}
                y={node.position.y}
                color={node.color}
                label={`Layer ${node.index + 1}`}
                onMove={(x, y) => handleNodeMove(node.index, x, y, true)}
                onDragEnd={handleNodeDragEnd}
              />
            ),
        )}

        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 backdrop-blur-sm border border-white/15 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all rounded-full"
        >
          <Icon icon="lucide:chevron-left" width={18} height={18} />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 backdrop-blur-sm border border-white/15 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all rounded-full"
        >
          <Icon icon="lucide:chevron-right" width={18} height={18} />
        </button>

        {/* Favorite toggle */}
        <button
          onClick={() => toggleFavorite(active.id)}
          title={favorites.includes(active.id) ? "Remove from favorites" : "Save as favorite"}
          aria-label={favorites.includes(active.id) ? "Remove from favorites" : "Save as favorite"}
          aria-pressed={favorites.includes(active.id)}
          className={`absolute top-4 right-4 z-30 bg-black/30 backdrop-blur-sm border w-10 h-10 flex items-center justify-center rounded-full transition-all ${
            favorites.includes(active.id)
              ? "text-rose-400 fill-current border-white/30"
              : "text-white/70 hover:text-white hover:border-white/30 border-white/15"
          }`}
        >
          <Icon icon="mdi:heart" width={18} height={18} />
        </button>

        {/* Gradient name overlay */}
        <div className="absolute bottom-4 left-4 z-20 md:bottom-6 md:left-6">
          <h2
            className="text-lg font-semibold md:text-xl"
            style={{ color: isDark ? "#ffffff" : "#14130f" }}
          >
            {active.name}
          </h2>
          <p
            className="text-xs mt-0.5"
            style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(20,19,15,0.55)" }}
          >
            {active.category} · {active.desc}
          </p>
        </div>
      </div>

      {/* ══ Right: Control Panel ══ */}
      {/* Aplicando los tonos oscuros de la imagen: #0a0a0a para el panel general y bordes sutiles white/5 */}
      <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden border-t border-white/5 bg-[#0a0a0a] md:h-full md:w-[420px] md:shrink-0 md:flex-none md:border-t-0 md:border-l">
        {/* Panel header - Fondo ligeramente contrastado */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/5 bg-[#0d0d0d] px-5 py-2">
          <div className="flex items-center gap-2">
            <Icon icon="lucide:sliders-horizontal" width={15} height={15} className="text-white/60" />
            <span className="text-[13px] font-medium text-white/90">Customize</span>
          </div>
          <div className="flex items-center gap-0.5">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={random}
              title="Random gradient (R)"
              aria-label="Random gradient"
              className="text-white/40 hover:bg-white/5 hover:text-white"
            >
              <Shuffle className="size-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={handleReset}
              title="Reset to original"
              className="text-white/40 hover:bg-white/5 hover:text-white"
            >
              <RotateCcw className="size-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => dispatchCustom({ type: "UNDO" })}
              disabled={!canUndo}
              title="Undo (Ctrl+Z)"
              aria-label="Undo"
              className="text-white/40 hover:bg-white/5 hover:text-white"
            >
              <Undo2 className="size-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => dispatchCustom({ type: "REDO" })}
              disabled={!canRedo}
              title="Redo (Ctrl+Shift+Z)"
              aria-label="Redo"
              className="text-white/40 hover:bg-white/5 hover:text-white"
            >
              <Redo2 className="size-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={toggleTheme}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle theme"
              className="text-white/40 hover:bg-white/5 hover:text-white"
            >
              <span key={isDark ? "moon" : "sun"} className="theme-icon-enter">
                {isDark ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={toggleFullscreen}
              title="Close"
              className="text-white/40 hover:bg-white/5 hover:text-white"
            >
              <X className="size-3.5" />
            </Button>
          </div>
        </div>

        {/* Scrollable controls */}
        <div className="ui-styled-scrollbar flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain px-5 pt-6 pb-4">
          {/* Scrollbar CSS sutil para igualar el aspecto técnico */}
          <style>{`
            .ui-styled-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .ui-styled-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .ui-styled-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.08);
              border-radius: 8px;
            }
            .ui-styled-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(255, 255, 255, 0.15);
            }
          `}</style>

          {/* Global controls */}
          <div className="flex flex-col gap-4">
            {/* Grain toggle */}
            <div className="flex items-center justify-between">
              <label className="text-[13px] text-white/60 font-medium">Grain Overlay</label>
              <button
                onClick={handleGrainToggle}
                role="switch"
                aria-checked={effectiveGrain}
                aria-label="Grain overlay"
                className={`relative w-9 h-5 rounded-full transition-colors border border-white/5 focus-visible:outline-2 focus-visible:outline-white/60 ${
                  effectiveGrain ? "bg-[#333333]" : "bg-[#141414]"
                }`}
              >
                <div
                  className={`absolute top-[1px] w-4 h-4 rounded-full shadow transition-transform ${
                    effectiveGrain ? "translate-x-4 bg-white" : "translate-x-0.5 bg-white/40"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="h-px bg-white/5" />

          {/* Layers (Tu componente original se mantiene aquí) */}
          <div className="flex flex-col gap-4">
            <LayerPanel
              layers={effectiveLayers}
              onUpdateLayer={handleUpdateLayer}
              onRemoveLayer={handleRemoveLayer}
              onAddLayer={handleAddLayer}
              onReorder={handleReorder}
            />
          </div>

          <div className="h-px bg-white/5" />

          {/* Export (Tu componente original se mantiene aquí) */}
          <div className="flex flex-col gap-4">
            <ExportPanel
              format={format}
              onFormatChange={setFormat}
              code={deferredCode}
              copied={copied}
              onCopy={handleCopy}
            />
          </div>
        </div>

        {/* Fixed export actions - Fondo contrastado abajo */}
        <div className="shrink-0 border-t border-white/5 bg-[#0d0d0d]">
          <div className="px-5 pt-3 pb-2 flex flex-col gap-2">
            <Button
              onClick={() => handleCopy(deferredAiPrompt, "AI Prompt")}
              className="w-full"
            >
              {copied === "AI Prompt" ? (
                <Check className="size-3" />
              ) : (
                <Sparkles className="size-3" />
              )}
              {copied === "AI Prompt" ? "Prompt Copied!" : "Copy AI Prompt"}
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => handleDownload("png")}
                disabled={downloading}
                className="flex-1 border-white/10 bg-white/10 text-white hover:border-primary hover:bg-white/15 hover:text-white"
              >
                {downloading ? (
                  <LoaderCircle className="size-3 animate-spin" />
                ) : (
                  <ImageDown className="size-3" />
                )}
                Download PNG
              </Button>
              <Button
                variant="outline"
                onClick={() => handleDownload("svg")}
                disabled={downloading}
                className="flex-1 border-white/10 bg-white/10 text-white hover:border-primary hover:bg-white/15 hover:text-white"
              >
                <FileDown className="size-3" />
                Download SVG
              </Button>
            </div>
          </div>

          {/* Keyboard hints - Fondo contrastado sutil abajo */}
          <div className="px-5 py-3 border-t border-white/5 bg-[#0d0d0d] flex items-center gap-4 text-white/40 text-[11px] font-medium tracking-wide">
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/5 rounded">←→</kbd> nav
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/5 rounded">R</kbd> random
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/5 rounded">⌘Z</kbd> undo
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/5 rounded">esc</kbd> close
            </span>
          </div>
        </div>

        {/* Hidden export stage — off-screen wrapper, snapshot node at 0,0 */}
        <div
          aria-hidden="true"
          style={{ position: "fixed", left: -9999, top: 0, pointerEvents: "none", zIndex: -1 }}
        >
          <div
            ref={exportRef}
            style={{
              width: EXPORT_W,
              height: EXPORT_H,
              position: "relative",
            }}
          >
            <GradientStack
              base={previewBase}
              layers={effectiveLayers}
              light={previewLight}
              grain={effectiveGrain}
              mode="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}