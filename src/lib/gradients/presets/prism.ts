import type { Gradient } from "../types"

export const PRISM_PRESETS: Gradient[] = [
  {
      id: "prism-glasswave",
      name: "Glasswave",
      category: "prism",
      mood: "cool",
      desc: "Thin spectral waves refracting through translucent glass",
      dark: true,
      text: "#d8f8ff",
      base: "#05080b",
      layers: [
        {
          background:
            "linear-gradient(118deg, transparent 18%, rgba(34,211,238,0.18) 30%, rgba(129,140,248,0.24) 39%, rgba(236,72,153,0.20) 47%, rgba(251,191,36,0.16) 56%, rgba(34,197,94,0.18) 66%, transparent 80%)",
          blendMode: "screen",
          blur: 38,
          opacity: 0.9,
        },
        {
          background:
            "linear-gradient(62deg, transparent 30%, rgba(255,255,255,0.10) 42%, rgba(103,232,249,0.14) 50%, transparent 64%)",
          blendMode: "overlay",
          blur: 18,
          opacity: 0.8,
        },
        {
          background:
            "radial-gradient(ellipse 65% 18% at 50% 50%, rgba(255,255,255,0.10) 0%, transparent 75%)",
          blendMode: "screen",
          blur: 35,
          opacity: 0.7,
        },
      ],
    },

  {
      id: "prism-spectral-edge",
      name: "Spectral Edge",
      category: "prism",
      mood: "vivid",
      desc: "A concentrated rainbow refraction emerging from one edge",
      dark: true,
      text: "#f0f9ff",
      base: "#050609",
      layers: [
        {
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.04) 32%, rgba(6,182,212,0.18) 45%, rgba(34,197,94,0.22) 51%, rgba(250,204,21,0.20) 57%, rgba(244,63,94,0.18) 64%, transparent 82%)",
          blendMode: "screen",
          blur: 30,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(102deg, transparent 38%, rgba(255,255,255,0.22) 46%, rgba(125,211,252,0.14) 51%, transparent 60%)",
          blendMode: "screen",
          blur: 16,
          opacity: 0.85,
        },
        {
          background:
            "radial-gradient(ellipse 25% 65% at 92% 50%, rgba(139,92,246,0.16) 0%, transparent 78%)",
          blendMode: "screen",
          blur: 35,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "prism-refract",
      name: "Refract",
      category: "prism",
      mood: "vivid",
      desc: "Diagonal spectral refraction split across a dark surface",
      dark: true,
      text: "#e0f2fe",
      base: "#050608",
      layers: [
        {
          background:
            "linear-gradient(135deg, transparent 25%, #22d3ee 34%, #3b82f6 40%, #8b5cf6 46%, #ec4899 52%, #f59e0b 58%, #22c55e 64%, transparent 74%)",
          blendMode: "screen",
          blur: 42,
          opacity: 0.68,
        },
        {
          background:
            "linear-gradient(135deg, transparent 34%, rgba(255,255,255,0.26) 47%, rgba(255,255,255,0.05) 53%, transparent 67%)",
          blendMode: "screen",
          blur: 14,
          opacity: 0.9,
        },
        {
          background:
            "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.10) 50%, transparent 70%)",
          blendMode: "overlay",
          blur: 55,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "prism-polaris",
      name: "Polaris",
      category: "prism",
      mood: "cool",
      desc: "Cold cyan and violet spectrum orbiting a dark center",
      dark: true,
      text: "#dffaff",
      base: "#04070b",
      layers: [
        {
          background:
            "conic-gradient(from 160deg at 50% 50%, #06b6d4, #2563eb, #7c3aed, #a855f7, #22d3ee, #06b6d4)",
          blendMode: "screen",
          blur: 62,
          opacity: 0.68,
        },
        {
          background:
            "radial-gradient(circle at 50% 50%, rgba(207,250,254,0.18) 0%, rgba(103,232,249,0.08) 22%, transparent 54%)",
          blendMode: "screen",
          blur: 25,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.42) 38%, transparent 62%)",
          blendMode: "multiply",
          blur: 18,
          opacity: 0.9,
        },
      ],
    },

  {
      id: "prism-splitlight",
      name: "Splitlight",
      category: "prism",
      mood: "vivid",
      desc: "A clean beam splitting into spectral colors",
      dark: true,
      text: "#f8fbff",
      base: "#040507",
      layers: [
        {
          background:
            "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.06) 35%, rgba(34,211,238,0.20) 42%, rgba(59,130,246,0.22) 47%, rgba(139,92,246,0.22) 52%, rgba(236,72,153,0.20) 57%, rgba(245,158,11,0.16) 63%, transparent 78%)",
          blendMode: "screen",
          blur: 32,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(102deg, transparent 38%, rgba(255,255,255,0.30) 48%, rgba(255,255,255,0.08) 52%, transparent 64%)",
          blendMode: "screen",
          blur: 12,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 30% 55% at 28% 50%, rgba(59,130,246,0.12) 0%, transparent 80%)",
          blendMode: "screen",
          blur: 45,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "prism-neon-ring",
      name: "Neon Ring",
      category: "prism",
      mood: "vivid",
      desc: "Thin spectral ring glowing around a deep central void",
      dark: true,
      text: "#f0f9ff",
      base: "#050509",
      layers: [
        {
          background:
            "radial-gradient(circle at 50% 50%, transparent 34%, rgba(34,211,238,0.22) 38%, rgba(59,130,246,0.22) 42%, rgba(139,92,246,0.20) 46%, rgba(236,72,153,0.18) 50%, rgba(245,158,11,0.14) 54%, transparent 61%)",
          blendMode: "screen",
          blur: 28,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(circle at 50% 50%, transparent 42%, rgba(255,255,255,0.16) 46%, transparent 51%)",
          blendMode: "screen",
          blur: 12,
          opacity: 0.85,
        },
        {
          background:
            "radial-gradient(circle at 50% 50%, #030306 0%, #030306 34%, transparent 35%)",
          blendMode: "multiply",
          blur: 8,
          opacity: 1,
        },
      ],
    },

  {
      id: "prism-aether",
      name: "Aether",
      category: "prism",
      mood: "cool",
      desc: "Weightless cyan-violet iridescence floating through darkness",
      dark: true,
      text: "#e4f7ff",
      base: "#05070a",
      layers: [
        {
          background:
            "radial-gradient(ellipse 48% 38% at 34% 48%, rgba(34,211,238,0.24) 0%, rgba(59,130,246,0.14) 45%, transparent 78%)",
          blendMode: "screen",
          blur: 55,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(ellipse 42% 40% at 70% 45%, rgba(167,139,250,0.22) 0%, rgba(217,70,239,0.10) 46%, transparent 80%)",
          blendMode: "screen",
          blur: 58,
          opacity: 0.9,
        },
        {
          background:
            "linear-gradient(145deg, transparent 30%, rgba(255,255,255,0.08) 48%, rgba(103,232,249,0.10) 55%, transparent 72%)",
          blendMode: "soft-light",
          blur: 35,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "prism-diamond",
      name: "Diamond",
      category: "prism",
      mood: "vivid",
      desc: "Sharp spectral light refracted through an invisible crystal",
      dark: true,
      text: "#f8fafc",
      base: "#06070a",
      layers: [
        {
          background:
            "linear-gradient(45deg, transparent 24%, rgba(34,211,238,0.20) 35%, rgba(255,255,255,0.22) 40%, rgba(129,140,248,0.24) 46%, rgba(236,72,153,0.18) 52%, rgba(245,158,11,0.14) 59%, transparent 72%)",
          blendMode: "screen",
          blur: 26,
          opacity: 0.9,
        },
        {
          background:
            "linear-gradient(135deg, transparent 34%, rgba(255,255,255,0.20) 46%, rgba(103,232,249,0.14) 52%, transparent 65%)",
          blendMode: "screen",
          blur: 14,
          opacity: 1,
        },
        {
          background:
            "conic-gradient(from 45deg at 50% 50%, transparent, rgba(99,102,241,0.08), transparent, rgba(34,211,238,0.08), transparent)",
          blendMode: "overlay",
          blur: 35,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "prism-aurora-glass",
      name: "Aurora Glass",
      category: "prism",
      mood: "cool",
      desc: "Boreal cyan, emerald and violet refracted through translucent glass",
      dark: true,
      text: "#e2fff8",
      base: "#040708",
      layers: [
        {
          background:
            "conic-gradient(from 210deg at 50% 50%, #10b981, #06b6d4, #67e8f9, #8b5cf6, #22c55e, #10b981)",
          blendMode: "screen",
          blur: 58,
          opacity: 0.55,
        },
        {
          background:
            "linear-gradient(142deg, transparent 28%, rgba(255,255,255,0.10) 42%, rgba(103,232,249,0.16) 50%, rgba(52,211,153,0.12) 58%, transparent 74%)",
          blendMode: "screen",
          blur: 24,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(circle at 50% 50%, rgba(220,255,250,0.12) 0%, transparent 48%)",
          blendMode: "screen",
          blur: 30,
          opacity: 0.9,
        },
      ],
    },

  {
      id: "prism-dark-spectrum",
      name: "Dark Spectrum",
      category: "prism",
      mood: "vivid",
      desc: "Neon prismatic halo on dark void",
      dark: true,
      text: "#e8d5ff",
      base: "#09090b",
      layers: [
        { background: "conic-gradient(from 220deg at 50% 55%, #6366f1, #06b6d4, #10b981, #f59e0b, #ef4444, #ec4899, #8b5cf6, #6366f1)", blendMode: "screen", blur: 70 },
        { background: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.6) 0%, transparent 50%)", blendMode: "multiply", blur: 20 },
      ],
    },

  {
      id: "prism-steel-spectrum",
      name: "Steel Spectrum",
      category: "prism",
      mood: "cool",
      desc: "Muted steel-blue conic burst, quiet and industrial",
      dark: true,
      text: "#c3ccd6",
      base: "#0b0c0e",
      layers: [
        { background: "conic-gradient(from 200deg at 50% 55%, #334155, #64748b, #94a3b8, #475569, #1e293b, #334155)", blendMode: "screen", blur: 70 },
        { background: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.5) 0%, transparent 50%)", blendMode: "multiply", blur: 20 },
      ],
    },

  {
      id: "prism-borealis-shard",
      name: "Borealis Shard",
      category: "prism",
      mood: "vivid",
      desc: "Conic fragment with aurora tones crossing deep space",
      dark: true,
      text: "#d5f5ff",
      base: "#07080f",
      layers: [
        { background: "conic-gradient(from 210deg at 50% 55%, #14b8a6, #6366f1, #ec4899, #22d3ee, #14b8a6)", blendMode: "screen", blur: 65 },
        { background: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.55) 0%, transparent 50%)", blendMode: "multiply", blur: 20 },
      ],
    },

  {
      id: "prism-iris-halo",
      name: "Iris Halo",
      category: "prism",
      mood: "vivid",
      desc: "Soft iridescent ring with a luminous spectral center",
      dark: true,
      text: "#f5eaff",
      base: "#07070b",
      layers: [
        {
          background:
            "conic-gradient(from 45deg at 50% 50%, #06b6d4, #6366f1, #d946ef, #f43f5e, #f59e0b, #22c55e, #06b6d4)",
          blendMode: "screen",
          blur: 55,
          opacity: 0.72,
        },
        {
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.05) 28%, transparent 58%)",
          blendMode: "screen",
          blur: 25,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(circle at 50% 50%, #050507 25%, transparent 27%, transparent 100%)",
          blendMode: "multiply",
          blur: 12,
          opacity: 0.9,
        },
      ],
    },

  {
      id: "prism-rainbow-flare",
      name: "Rainbow Flare",
      category: "prism",
      mood: "vivid",
      desc: "Full spectrum conic burst",
      dark: false,
      cardText: "#ffffff",
      text: "#3b1f6e",
      base: "#fafafa",
      layers: [
        { background: "conic-gradient(from 180deg at 50% 60%, #f43f5e, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ec4899, #f43f5e)", blendMode: "soft-light", blur: 80 },
        { background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 60%)", blendMode: "overlay", blur: 40 },
      ],
    },

  {
      id: "prism-crystal-edge",
      name: "Crystal Edge",
      category: "prism",
      mood: "cool",
      desc: "Angular prism refraction with blue-violet",
      dark: false,
      cardText: "#ffffff",
      text: "#1e1b4b",
      base: "#f5f3ff",
      layers: [
        { background: "conic-gradient(from 135deg at 30% 40%, #818cf8, #c084fc, #f0abfc, #93c5fd, #818cf8)", blendMode: "soft-light", blur: 60 },
        { background: "conic-gradient(from 315deg at 70% 60%, #a78bfa, #67e8f9, #86efac, #a78bfa)", blendMode: "soft-light", blur: 70 },
      ],
    },

  {
      id: "prism-solar-flare",
      name: "Solar Flare",
      category: "prism",
      mood: "warm",
      desc: "Warm conic burst from golden core",
      dark: false,
      cardText: "#ffffff",
      text: "#fef3c7",
      base: "#0c0502",
      layers: [
        { background: "conic-gradient(from 90deg at 50% 65%, #f59e0b, #ef4444, #f97316, #fbbf24, #f59e0b)", blendMode: "screen", blur: 80 },
        { background: "radial-gradient(circle at 50% 60%, rgba(251,191,36,0.4) 0%, transparent 45%)", blendMode: "screen", blur: 50 },
      ],
    },
]
