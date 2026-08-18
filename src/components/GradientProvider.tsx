"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import {
  DEFAULT_GRADIENT_ID,
  GRADIENTS,
  getDefaultGradient,
  type Gradient,
  type Layer,
} from "@/lib/gradients";
import { resolveThemeIsDark } from "@/lib/theme";

/* ── Customization state ── */

interface CustomSnapshot {
  layers: Layer[];
  grain: boolean;
}

interface CustomState {
  layers: Layer[];
  grain: boolean;
  history: CustomSnapshot[];
  redo: CustomSnapshot[];
  previewBase: CustomSnapshot | null;
}

type CustomAction =
  | { type: "INIT"; layers: Layer[]; grain: boolean }
  | { type: "UPDATE_LAYER"; index: number; layer: Layer; preview?: boolean }
  | { type: "ADD_LAYER"; layer: Layer }
  | { type: "REMOVE_LAYER"; index: number }
  | { type: "REORDER"; from: number; to: number }
  | { type: "SET_GRAIN"; grain: boolean }
  | { type: "COMMIT_PREVIEW" }
  | { type: "UNDO" }
  | { type: "REDO" }
  | { type: "RESET"; layers: Layer[]; grain: boolean };

const MAX_HISTORY = 50;

function capHistory(history: CustomSnapshot[]): CustomSnapshot[] {
  if (history.length <= MAX_HISTORY) return history;
  return history.slice(history.length - MAX_HISTORY);
}

function takeSnapshot(state: CustomState): CustomSnapshot {
  return { layers: state.layers, grain: state.grain };
}

let layerIdCounter = 0;
function nextLayerId(): string {
  layerIdCounter += 1;
  return `layer-${layerIdCounter}`;
}

function customReducer(state: CustomState, action: CustomAction): CustomState {
  switch (action.type) {
    case "INIT":
      return {
        layers: action.layers.map((l) => ({ ...l, id: l.id ?? nextLayerId() })),
        grain: action.grain,
        history: [],
        redo: [],
        previewBase: null,
      };

    case "UPDATE_LAYER": {
      const layers = [...state.layers];
      layers[action.index] = action.layer;
      if (action.preview) {
        return {
          ...state,
          layers,
          previewBase: state.previewBase ?? takeSnapshot(state),
        };
      }
      const historyEntry = state.previewBase ?? takeSnapshot(state);
      return {
        ...state,
        layers,
        previewBase: null,
        history: capHistory([...state.history, historyEntry]),
        redo: [],
      };
    }
    case "ADD_LAYER":
      return {
        ...state,
        layers: [...state.layers, { ...action.layer, id: action.layer.id ?? nextLayerId() }],
        previewBase: null,
        history: capHistory([...state.history, takeSnapshot(state)]),
        redo: [],
      };
    case "REMOVE_LAYER": {
      const layers = state.layers.filter((_, i) => i !== action.index);
      return {
        ...state,
        layers,
        previewBase: null,
        history: capHistory([...state.history, takeSnapshot(state)]),
        redo: [],
      };
    }
    case "REORDER": {
      const layers = [...state.layers];
      const [moved] = layers.splice(action.from, 1);
      layers.splice(action.to, 0, moved);
      return {
        ...state,
        layers,
        previewBase: null,
        history: capHistory([...state.history, takeSnapshot(state)]),
        redo: [],
      };
    }
    case "SET_GRAIN":
      return {
        ...state,
        grain: action.grain,
        previewBase: null,
        history: capHistory([...state.history, takeSnapshot(state)]),
        redo: [],
      };
    case "COMMIT_PREVIEW": {
      if (!state.previewBase) return state;
      return {
        ...state,
        previewBase: null,
        history: capHistory([...state.history, state.previewBase]),
        redo: [],
      };
    }
    case "UNDO": {
      if (state.history.length === 0) return state;
      const history = [...state.history];
      const prev = history.pop()!;
      return {
        ...state,
        layers: prev.layers,
        grain: prev.grain,
        history,
        redo: [...state.redo, takeSnapshot(state)],
        previewBase: null,
      };
    }
    case "REDO": {
      if (state.redo.length === 0) return state;
      const redo = [...state.redo];
      const next = redo.pop()!;
      return {
        ...state,
        layers: next.layers,
        grain: next.grain,
        redo,
        history: capHistory([...state.history, takeSnapshot(state)]),
        previewBase: null,
      };
    }
    case "RESET":
      return {
        layers: action.layers.map((l) => ({ ...l, id: l.id ?? nextLayerId() })),
        grain: action.grain,
        history: [],
        redo: [],
        previewBase: null,
      };
  }
}

/* ── Context ── */

interface GradientContextValue {
  active: Gradient | null;
  isDark: boolean;
  fullscreen: boolean;
  toggleFullscreen: () => void;
  showToast: (msg: string, type?: "success" | "error") => void;
  themeOverride: "light" | "dark" | null;
  toggleTheme: () => void;
  apply: (id: string) => void;
  reset: () => void;
  goNext: () => void;
  goPrev: () => void;
  random: () => void;
  /* ── Preview scroll UX ── */
  preview: (id: string) => void;
  previewReturn: { y: number } | null;
  backToGallery: () => void;
  dismissPreviewReturn: () => void;
  /** Increments every time the user returns to the gallery, to flash the active card */
  flashTick: number;
  /* ── Favorites (persisted in localStorage) ── */
  favorites: string[];
  toggleFavorite: (id: string) => void;
  /* ── Customizer ── */
  custom: CustomState;
  dispatchCustom: React.Dispatch<CustomAction>;
  effectiveLayers: Layer[];
  effectiveGrain: boolean;
}

const GradientContext = createContext<GradientContextValue | null>(null);

export function GradientProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme, systemTheme, setTheme } = useTheme();
  const [activeId, setActiveId] = useState<string | null>(DEFAULT_GRADIENT_ID);
  const [fullscreen, setFullscreen] = useState(false);
  const [previewReturn, setPreviewReturn] = useState<{ y: number } | null>(null);
  const previewReturnRef = useRef<{ y: number } | null>(null);
  const [flashTick, setFlashTick] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  const FAVORITES_KEY = "gamma:favorites";
  const LEGACY_FAVORITE_KEY = "gamma:favorite";

  // Restore saved favorites on mount (migrating the legacy single-favorite key)
  useEffect(() => {
    let next: string[] | null = null;
    try {
      const raw = window.localStorage.getItem(FAVORITES_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          next = parsed.filter(
            (id): id is string =>
              typeof id === "string" && GRADIENTS.some((g) => g.id === id),
          );
        }
      }
      if (next === null) {
        const legacy = window.localStorage.getItem(LEGACY_FAVORITE_KEY);
        if (legacy && GRADIENTS.some((g) => g.id === legacy)) {
          next = [legacy];
        }
      }
    } catch {
      // localStorage unavailable — ignore
    }
    if (next === null) return;
    setFavorites(next);
  }, []);

  const active = useMemo(
    () => GRADIENTS.find((g) => g.id === activeId) ?? null,
    [activeId],
  );

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];
      try {
        window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  /* ── Customizer reducer ── */
  const [custom, dispatchCustom] = useReducer(customReducer, {
    layers: active?.layers ?? [],
    grain: active?.grain ?? false,
    history: [],
    redo: [],
    previewBase: null,
  });

  // Re-initialize custom state when active gradient changes
  useEffect(() => {
    if (active) {
      dispatchCustom({
        type: "INIT",
        layers: active.layers,
        grain: active.grain ?? false,
      });
    }
  }, [active]);

  const effectiveLayers = custom.layers;
  const effectiveGrain = custom.grain;
  const isDark = useMemo(
    () => resolveThemeIsDark(resolvedTheme, systemTheme),
    [resolvedTheme, systemTheme],
  );
  const themeOverride: "light" | "dark" | null = resolvedTheme === "dark" || resolvedTheme === "light"
    ? resolvedTheme
    : null;

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  const showToast = useCallback((msg: string, type: "success" | "error" = "success") => {
    if (type === "error") toast.error(msg)
    else toast.success(msg)
  }, []);

  /* Keep the query params in sync with the active gradient (deep-link).
     Uses the full `gradient` name and preserves any other params (e.g.
     `category`) already in the URL. Legacy `g` is read as an alias. */
  const syncURL = useCallback((id: string | null) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (id) {
      url.searchParams.set("gradient", id);
      url.searchParams.delete("g");
    } else {
      url.searchParams.delete("gradient");
      url.searchParams.delete("g");
    }
    window.history.replaceState(null, "", url);
  }, []);

  const goNext = useCallback(() => {
    if (!active) return;
    const idx = GRADIENTS.findIndex((g) => g.id === active.id);
    const next = GRADIENTS[(idx + 1) % GRADIENTS.length];
    setActiveId(next.id);
    syncURL(next.id);
  }, [active, syncURL]);

  const goPrev = useCallback(() => {
    if (!active) return;
    const idx = GRADIENTS.findIndex((g) => g.id === active.id);
    const prev = GRADIENTS[(idx - 1 + GRADIENTS.length) % GRADIENTS.length];
    setActiveId(prev.id);
    syncURL(prev.id);
  }, [active, syncURL]);

  /* ── Preview scroll UX ── */

  const scrollBehavior = () =>
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
      ? "auto"
      : "smooth";

  const preview = useCallback((id: string) => {
    const gradient = GRADIENTS.find((g) => g.id === id);
    if (!gradient) return;

    const y = typeof window !== "undefined" ? window.scrollY : 0;
    setActiveId(id);
    setPreviewReturn({ y });
    previewReturnRef.current = { y };
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("gradient", id);
      url.searchParams.delete("g");
      window.history.pushState(null, "", url);
    }
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  }, []);

  const backToGallery = useCallback(() => {
    if (previewReturn) {
      window.scrollTo({ top: previewReturn.y, behavior: scrollBehavior() });
    }
    setPreviewReturn(null);
    previewReturnRef.current = null;
    setFlashTick((t) => t + 1);
  }, [previewReturn]);

  const dismissPreviewReturn = useCallback(() => {
    setPreviewReturn(null);
    previewReturnRef.current = null;
  }, []);

  /* ── Random / shuffle ── */

  const random = useCallback(() => {
    const pool = GRADIENTS.filter((g) => g.id !== activeId);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (!pick) return;
    setActiveId(pick.id);
    syncURL(pick.id);
  }, [activeId, syncURL]);

  /* ── Deep-linking: keep the selected gradient in sync with the URL ── */

  const syncFromURL = useCallback(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("gradient") ?? params.get("g");
    if (id && GRADIENTS.some((g) => g.id === id)) {
      setActiveId(id);
    } else {
      setActiveId(DEFAULT_GRADIENT_ID);
    }
  }, []);

  useEffect(() => {
    // Sync the selected gradient from the URL once on mount
    syncFromURL();

    const onPopState = () => {
      const pending = previewReturnRef.current;
      syncFromURL();
      if (pending) {
        previewReturnRef.current = null;
        setPreviewReturn(null);
        window.scrollTo({ top: pending.y, behavior: scrollBehavior() });
        setFlashTick((t) => t + 1);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [syncFromURL]);

  const value = useMemo<GradientContextValue>(
    () => ({
      active,
      isDark,
      fullscreen,
      toggleFullscreen: () => setFullscreen((f) => !f),
      showToast,
      themeOverride,
      toggleTheme,
      apply: (id) => {
        setActiveId(id);
        // Keep the user's theme override so the customizer (and its exported
        // code/prompt) shows exactly what the user picks for the theme.
        syncURL(id);
      },
      reset: () => {
        const def = getDefaultGradient();
        setActiveId(def.id);
        setTheme("light");
        dispatchCustom({
          type: "RESET",
          layers: def.layers,
          grain: def.grain ?? false,
        });
        if (typeof window !== "undefined") {
          const url = new URL(window.location.href);
          url.searchParams.delete("gradient");
          url.searchParams.delete("g");
          window.history.replaceState(null, "", url);
        }
      },
      goNext,
      goPrev,
      random,
      preview,
      previewReturn,
      backToGallery,
      dismissPreviewReturn,
      flashTick,
      favorites,
      toggleFavorite,
      custom,
      dispatchCustom,
      effectiveLayers,
      effectiveGrain,
    }),
    [active, isDark, fullscreen, showToast, themeOverride, toggleTheme, goNext, goPrev, random, preview, previewReturn, backToGallery, dismissPreviewReturn, flashTick, favorites, toggleFavorite, custom, effectiveLayers, effectiveGrain, syncURL, setTheme],
  );

  return (
    <GradientContext.Provider value={value}>{children}</GradientContext.Provider>
  );
}

export function useGradients() {
  const ctx = useContext(GradientContext);
  if (!ctx) {
    throw new Error("useGradients must be used within a GradientProvider");
  }
  return ctx;
}
