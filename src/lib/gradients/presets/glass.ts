import type { Gradient } from "../types"

export const GLASS_PRESETS: Gradient[] = [
  {
      id: "glass-arctic-frost",
      name: "Arctic Frost",
      category: "glass",
      mood: "cool",
      desc: "Frosted glass with blue-cyan refraction",
      dark: false,
      cardText: "#000000",
      text: "#164e63",
      base: "#ecfeff",
      layers: [
        { background: "linear-gradient(135deg, rgba(207,250,254,0.9) 0%, rgba(165,243,252,0.4) 50%, rgba(34,211,238,0.3) 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 30% 30%, rgba(6,182,212,0.5) 0%, transparent 40%)", blendMode: "overlay", blur: 50 },
        { background: "radial-gradient(circle at 70% 70%, rgba(14,165,233,0.4) 0%, transparent 35%)", blendMode: "overlay", blur: 60 },
        { background: "linear-gradient(45deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.4) 100%)", blendMode: "soft-light", blur: 20 },
      ],
    },

  {
      id: "glass-rose-window",
      name: "Rose Window",
      category: "glass",
      mood: "warm",
      desc: "Stained glass with rose and amber refractions",
      dark: false,
      cardText: "#000000",
      text: "#881337",
      base: "#fff1f2",
      layers: [
        { background: "linear-gradient(135deg, rgba(255,228,230,0.9) 0%, rgba(254,205,211,0.5) 50%, rgba(252,165,165,0.3) 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 35% 40%, rgba(244,63,94,0.4) 0%, transparent 35%)", blendMode: "overlay", blur: 55 },
        { background: "radial-gradient(circle at 65% 55%, rgba(251,146,60,0.35) 0%, transparent 30%)", blendMode: "overlay", blur: 50 },
        { background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.3) 100%)", blendMode: "soft-light", blur: 15 },
      ],
    },

  {
      id: "glass-ice-sheet",
      name: "Ice Sheet",
      category: "glass",
      mood: "cool",
      desc: "Layered translucent ice with frozen cyan fractures",
      dark: false,
      cardText: "#000000",
      text: "#164e63",
      base: "#f0f9ff",
      layers: [
        {
          background:
            "linear-gradient(135deg, rgba(224,242,254,0.95) 0%, rgba(186,230,253,0.62) 50%, rgba(125,211,252,0.38) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "linear-gradient(115deg, transparent 20%, rgba(6,182,212,0.18) 38%, transparent 42%, rgba(56,189,248,0.22) 62%, transparent 76%)",
          blendMode: "overlay",
          blur: 18,
        },
        {
          background:
            "radial-gradient(ellipse 45% 55% at 25% 35%, rgba(255,255,255,0.60) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 35,
        },
        {
          background:
            "linear-gradient(35deg, rgba(255,255,255,0.55), transparent 35%, rgba(255,255,255,0.25) 65%, transparent)",
          blendMode: "soft-light",
          blur: 15,
        },
      ],
    },

  {
      id: "glass-aqua-bubble",
      name: "Aqua Bubble",
      category: "glass",
      mood: "cool",
      desc: "Soft translucent bubbles suspended in an aquatic glass surface",
      dark: false,
      cardText: "#000000",
      text: "#155e75",
      base: "#ecfeff",
      layers: [
        {
          background:
            "radial-gradient(circle at 25% 40%, rgba(34,211,238,0.34) 0%, rgba(103,232,249,0.12) 32%, transparent 55%), radial-gradient(circle at 72% 58%, rgba(14,165,233,0.28) 0%, rgba(125,211,252,0.10) 34%, transparent 58%)",
          blendMode: "normal",
          blur: 25,
        },
        {
          background:
            "radial-gradient(circle at 25% 40%, rgba(255,255,255,0.65) 0%, transparent 12%)",
          blendMode: "screen",
          blur: 12,
        },
        {
          background:
            "radial-gradient(circle at 72% 58%, rgba(255,255,255,0.55) 0%, transparent 13%)",
          blendMode: "screen",
          blur: 14,
        },
        {
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.42) 0%, transparent 45%, rgba(6,182,212,0.12) 100%)",
          blendMode: "soft-light",
          blur: 20,
        },
      ],
    },

  {
      id: "glass-champagne",
      name: "Champagne Glass",
      category: "glass",
      mood: "warm",
      desc: "Soft golden translucent glass with luxurious highlights",
      dark: false,
      cardText: "#000000",
      text: "#713f12",
      base: "#fffbeb",
      layers: [
        {
          background:
            "linear-gradient(135deg, rgba(255,251,235,0.95) 0%, rgba(254,243,199,0.62) 50%, rgba(253,230,138,0.34) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 50% 45% at 32% 42%, rgba(251,191,36,0.26) 0%, transparent 68%)",
          blendMode: "overlay",
          blur: 50,
        },
        {
          background:
            "radial-gradient(ellipse 42% 50% at 72% 60%, rgba(245,158,11,0.20) 0%, transparent 70%)",
          blendMode: "overlay",
          blur: 55,
        },
        {
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.65), transparent 42%, rgba(255,255,255,0.30) 72%)",
          blendMode: "soft-light",
          blur: 18,
        },
      ],
    },

  {
      id: "glass-frosted-mint",
      name: "Frosted Mint",
      category: "glass",
      mood: "cool",
      desc: "Pale mint glass with a soft frozen atmospheric glow",
      dark: false,
      cardText: "#000000",
      text: "#065f46",
      base: "#f0fdf4",
      layers: [
        {
          background:
            "linear-gradient(135deg, rgba(236,253,245,0.96) 0%, rgba(167,243,208,0.58) 50%, rgba(110,231,183,0.30) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 50% 45% at 30% 40%, rgba(52,211,153,0.26) 0%, transparent 68%)",
          blendMode: "overlay",
          blur: 52,
        },
        {
          background:
            "radial-gradient(ellipse 45% 50% at 72% 60%, rgba(45,212,191,0.20) 0%, transparent 70%)",
          blendMode: "overlay",
          blur: 55,
        },
        {
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.62) 0%, transparent 45%, rgba(255,255,255,0.32) 100%)",
          blendMode: "soft-light",
          blur: 18,
        },
      ],
    },

  {
      id: "glass-obsidian",
      name: "Obsidian Glass",
      category: "glass",
      mood: "cool",
      desc: "Dark frosted glass with violet refractions",
      dark: true,
      text: "#ddd6fe",
      base: "#0c0a12",
      layers: [
        { background: "linear-gradient(135deg, rgba(15,10,25,0.95) 0%, rgba(30,20,50,0.8) 50%, rgba(50,30,80,0.6) 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 25% 35%, rgba(139,92,246,0.4) 0%, transparent 40%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(circle at 75% 65%, rgba(99,102,241,0.3) 0%, transparent 35%)", blendMode: "screen", blur: 60 },
        { background: "linear-gradient(45deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.03) 100%)", blendMode: "overlay", blur: 10 },
      ],
    },

  {
      id: "glass-emerald-lens",
      name: "Emerald Lens",
      category: "glass",
      mood: "cool",
      desc: "Green frosted glass with teal light beams",
      dark: true,
      text: "#a7f3d0",
      base: "#022c22",
      layers: [
        { background: "linear-gradient(135deg, rgba(2,44,34,0.95) 0%, rgba(6,78,59,0.7) 50%, rgba(4,120,87,0.5) 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 40% 30%, rgba(16,185,129,0.5) 0%, transparent 40%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(circle at 60% 70%, rgba(52,211,153,0.35) 0%, transparent 35%)", blendMode: "screen", blur: 50 },
        { background: "linear-gradient(45deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.02) 100%)", blendMode: "overlay", blur: 10 },
      ],
    },

  {
      id: "glass-smoked",
      name: "Smoked Glass",
      category: "glass",
      mood: "cool",
      desc: "Dark smoked glass with graphite refractions",
      dark: true,
      text: "#d4d4d8",
      base: "#0c0c0d",
      layers: [
        { background: "linear-gradient(135deg, rgba(15,15,17,0.95) 0%, rgba(39,39,42,0.8) 50%, rgba(63,63,70,0.55) 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 30% 35%, rgba(113,113,122,0.35) 0%, transparent 40%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(circle at 72% 65%, rgba(161,161,170,0.25) 0%, transparent 35%)", blendMode: "screen", blur: 60 },
        { background: "linear-gradient(45deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.03) 100%)", blendMode: "overlay", blur: 10 },
      ],
    },

  {
      id: "glass-starlight",
      name: "Starlight Glass",
      category: "glass",
      mood: "cool",
      desc: "Dark frosted blue-violet glass with embedded starlight",
      dark: true,
      text: "#dcd6ff",
      base: "#0a0918",
      layers: [
        { background: "linear-gradient(135deg, rgba(10,9,24,0.95) 0%, rgba(30,27,75,0.75) 50%, rgba(49,46,129,0.5) 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.4) 0%, transparent 40%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(circle at 70% 70%, rgba(129,140,248,0.3) 0%, transparent 35%)", blendMode: "screen", blur: 60 },
        {
          background: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 1px, transparent 3px),
            radial-gradient(circle at 78% 25%, rgba(255,255,255,0.5) 1px, transparent 3px),
            radial-gradient(circle at 55% 80%, rgba(255,255,255,0.5) 1px, transparent 3px)
          `,
          blendMode: "screen",
          blur: 0,
          opacity: 0.7,
        },
      ],
    },

  {
      id: "glass-liquid-cyan",
      name: "Liquid Cyan",
      category: "glass",
      mood: "cool",
      desc: "Translucent cyan glass flowing like liquid crystal",
      dark: true,
      text: "#cffafe",
      base: "#02080b",
      layers: [
        {
          background:
            "linear-gradient(135deg, rgba(8,47,73,0.82) 0%, rgba(14,116,144,0.48) 48%, rgba(34,211,238,0.30) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 55% 42% at 28% 42%, rgba(34,211,238,0.42) 0%, transparent 68%)",
          blendMode: "screen",
          blur: 48,
        },
        {
          background:
            "radial-gradient(ellipse 45% 55% at 72% 58%, rgba(103,232,249,0.30) 0%, transparent 68%)",
          blendMode: "screen",
          blur: 55,
        },
        {
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 48%, rgba(255,255,255,0.04) 58%, transparent 72%)",
          blendMode: "screen",
          blur: 18,
        },
      ],
    },

  {
      id: "glass-boreal",
      name: "Boreal Glass",
      category: "glass",
      mood: "cool",
      desc: "Frosted glass infused with emerald and cyan northern light",
      dark: true,
      text: "#dcfff6",
      base: "#020807",
      layers: [
        {
          background:
            "linear-gradient(145deg, rgba(2,44,34,0.92) 0%, rgba(6,78,59,0.62) 48%, rgba(8,145,178,0.34) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "linear-gradient(145deg, transparent 24%, rgba(52,211,153,0.24) 40%, rgba(103,232,249,0.28) 51%, rgba(16,185,129,0.16) 62%, transparent 78%)",
          blendMode: "screen",
          blur: 35,
        },
        {
          background:
            "radial-gradient(ellipse 65% 22% at 50% 52%, rgba(167,243,208,0.18) 0%, transparent 78%)",
          blendMode: "screen",
          blur: 35,
        },
        {
          background:
            "linear-gradient(45deg, rgba(255,255,255,0.10) 0%, transparent 42%, rgba(207,250,254,0.08) 65%, transparent 100%)",
          blendMode: "overlay",
          blur: 14,
        },
      ],
    },

  {
      id: "glass-prism-window",
      name: "Prism Window",
      category: "glass",
      mood: "vivid",
      desc: "Transparent glass scattering subtle rainbow refractions",
      dark: true,
      text: "#f5f3ff",
      base: "#06070b",
      layers: [
        {
          background:
            "linear-gradient(135deg, rgba(30,41,59,0.85) 0%, rgba(51,65,85,0.55) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "linear-gradient(115deg, transparent 24%, rgba(34,211,238,0.18) 34%, rgba(59,130,246,0.18) 42%, rgba(139,92,246,0.20) 50%, rgba(236,72,153,0.15) 58%, rgba(245,158,11,0.12) 66%, transparent 78%)",
          blendMode: "screen",
          blur: 32,
        },
        {
          background:
            "linear-gradient(125deg, transparent 40%, rgba(255,255,255,0.22) 49%, transparent 58%)",
          blendMode: "screen",
          blur: 12,
        },
        {
          background:
            "radial-gradient(circle at 68% 32%, rgba(255,255,255,0.12) 0%, transparent 35%)",
          blendMode: "screen",
          blur: 30,
        },
      ],
    },

  {
      id: "glass-violet-smoke",
      name: "Violet Smoke",
      category: "glass",
      mood: "vivid",
      desc: "Dark translucent violet glass surrounded by soft atmospheric haze",
      dark: true,
      text: "#ede9fe",
      base: "#08050f",
      layers: [
        {
          background:
            "linear-gradient(140deg, rgba(15,10,25,0.94) 0%, rgba(49,27,84,0.68) 52%, rgba(91,33,182,0.32) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 52% 48% at 30% 40%, rgba(139,92,246,0.42) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 48,
        },
        {
          background:
            "radial-gradient(ellipse 42% 55% at 70% 62%, rgba(217,70,239,0.28) 0%, transparent 68%)",
          blendMode: "screen",
          blur: 55,
        },
        {
          background:
            "linear-gradient(125deg, transparent 25%, rgba(255,255,255,0.08) 48%, transparent 68%)",
          blendMode: "overlay",
          blur: 16,
        },
      ],
    },

  {
      id: "glass-amber-crystal",
      name: "Amber Crystal",
      category: "glass",
      mood: "warm",
      desc: "Warm translucent crystal with golden internal reflections",
      dark: true,
      text: "#fef3c7",
      base: "#0b0602",
      layers: [
        {
          background:
            "linear-gradient(135deg, rgba(69,26,3,0.92) 0%, rgba(146,64,14,0.62) 48%, rgba(245,158,11,0.32) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 50% 45% at 30% 42%, rgba(251,191,36,0.38) 0%, transparent 68%)",
          blendMode: "screen",
          blur: 50,
        },
        {
          background:
            "radial-gradient(ellipse 40% 55% at 70% 60%, rgba(249,115,22,0.30) 0%, transparent 68%)",
          blendMode: "screen",
          blur: 52,
        },
        {
          background:
            "linear-gradient(115deg, transparent 28%, rgba(255,255,255,0.16) 48%, transparent 60%)",
          blendMode: "screen",
          blur: 16,
        },
      ],
    },

  {
      id: "glass-carbon",
      name: "Carbon Glass",
      category: "glass",
      mood: "cool",
      desc: "Nearly black glass with restrained graphite reflections",
      dark: true,
      text: "#e4e4e7",
      base: "#050506",
      layers: [
        {
          background:
            "linear-gradient(145deg, rgba(9,9,11,0.98) 0%, rgba(39,39,42,0.72) 48%, rgba(24,24,27,0.88) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.07) 43%, rgba(161,161,170,0.12) 50%, transparent 67%)",
          blendMode: "screen",
          blur: 22,
        },
        {
          background:
            "radial-gradient(ellipse 42% 35% at 70% 30%, rgba(212,212,216,0.14) 0%, transparent 68%)",
          blendMode: "screen",
          blur: 45,
        },
      ],
    },

  {
      id: "glass-deep-sea",
      name: "Deep Sea Glass",
      category: "glass",
      mood: "cool",
      desc: "Dense blue-green glass with submerged light refractions",
      dark: true,
      text: "#ccfbf1",
      base: "#02100f",
      layers: [
        {
          background:
            "linear-gradient(145deg, rgba(2,44,34,0.96) 0%, rgba(8,47,73,0.74) 48%, rgba(14,116,144,0.42) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 52% 48% at 28% 52%, rgba(20,184,166,0.34) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 48,
        },
        {
          background:
            "radial-gradient(ellipse 45% 55% at 72% 35%, rgba(34,211,238,0.28) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 55,
        },
        {
          background:
            "linear-gradient(150deg, transparent 30%, rgba(167,243,208,0.10) 48%, rgba(103,232,249,0.12) 56%, transparent 72%)",
          blendMode: "screen",
          blur: 24,
        },
      ],
    },

  {
      id: "glass-neon-refraction",
      name: "Neon Refraction",
      category: "glass",
      mood: "vivid",
      desc: "Dark frosted glass splitting cyan, violet and pink neon light",
      dark: true,
      text: "#f0f9ff",
      base: "#05050a",
      layers: [
        {
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.96) 0%, rgba(30,27,75,0.72) 50%, rgba(76,29,149,0.36) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "linear-gradient(112deg, transparent 20%, rgba(34,211,238,0.20) 34%, rgba(59,130,246,0.18) 43%, rgba(139,92,246,0.24) 52%, rgba(236,72,153,0.18) 62%, transparent 78%)",
          blendMode: "screen",
          blur: 32,
        },
        {
          background:
            "radial-gradient(ellipse 40% 55% at 72% 38%, rgba(217,70,239,0.22) 0%, transparent 72%)",
          blendMode: "screen",
          blur: 52,
        },
        {
          background:
            "linear-gradient(45deg, transparent 32%, rgba(255,255,255,0.12) 48%, transparent 62%)",
          blendMode: "screen",
          blur: 13,
        },
      ],
    },

  {
      id: "glass-moonstone",
      name: "Moonstone",
      category: "glass",
      mood: "cool",
      desc: "Smoky blue glass with a faint lunar iridescence",
      dark: true,
      text: "#dbeafe",
      base: "#070b12",
      layers: [
        {
          background:
            "linear-gradient(140deg, rgba(15,23,42,0.96) 0%, rgba(30,41,59,0.72) 50%, rgba(51,65,85,0.48) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 48% 42% at 30% 40%, rgba(125,211,252,0.25) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 52,
        },
        {
          background:
            "radial-gradient(ellipse 42% 48% at 70% 62%, rgba(129,140,248,0.20) 0%, transparent 72%)",
          blendMode: "screen",
          blur: 58,
        },
        {
          background:
            "linear-gradient(120deg, transparent 28%, rgba(255,255,255,0.10) 48%, transparent 65%)",
          blendMode: "overlay",
          blur: 15,
        },
      ],
    },

  {
      id: "glass-rain-window",
      name: "Rain Window",
      category: "glass",
      mood: "cool",
      desc: "Condensed blue glass with soft distorted light behind it",
      dark: true,
      text: "#dbeafe",
      base: "#030712",
      layers: [
        {
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.94) 0%, rgba(30,58,95,0.72) 50%, rgba(14,116,144,0.34) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 35% 60% at 25% 45%, rgba(56,189,248,0.30) 0%, transparent 72%)",
          blendMode: "screen",
          blur: 45,
        },
        {
          background:
            "radial-gradient(ellipse 42% 45% at 72% 35%, rgba(129,140,248,0.22) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 55,
        },
        {
          background:
            "linear-gradient(80deg, transparent 20%, rgba(255,255,255,0.06) 22%, transparent 24%, transparent 45%, rgba(255,255,255,0.05) 47%, transparent 49%, transparent 72%, rgba(255,255,255,0.06) 74%, transparent 76%)",
          blendMode: "overlay",
          blur: 10,
          opacity: 0.7,
        },
      ],
    },

  {
      id: "glass-solar",
      name: "Solar Glass",
      category: "glass",
      mood: "warm",
      desc: "Warm transparent glass glowing from an internal amber core",
      dark: true,
      text: "#fef3c7",
      base: "#0c0502",
      layers: [
        {
          background:
            "linear-gradient(145deg, rgba(67,20,7,0.94) 0%, rgba(120,53,15,0.68) 50%, rgba(217,119,6,0.32) 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(circle at 50% 52%, rgba(251,191,36,0.42) 0%, rgba(245,158,11,0.14) 38%, transparent 70%)",
          blendMode: "screen",
          blur: 45,
        },
        {
          background:
            "linear-gradient(115deg, transparent 25%, rgba(255,255,255,0.18) 48%, rgba(255,255,255,0.04) 57%, transparent 72%)",
          blendMode: "screen",
          blur: 16,
        },
      ],
    },
]
