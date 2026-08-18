import type { Gradient } from "../types"

export const FLUX_PRESETS: Gradient[] = [
  {
      id: "flux-lava-lamp",
      name: "Lava Lamp",
      category: "flux",
      mood: "warm",
      desc: "Organic red and orange blobs floating in dark space",
      dark: true,
      text: "#fecaca",
      base: "#0a0202",
      layers: [
        { background: "radial-gradient(ellipse 55% 40% at 30% 55%, rgba(239,68,68,0.9) 0%, transparent 70%)", blendMode: "screen", blur: 40 },
        { background: "radial-gradient(ellipse 40% 55% at 65% 35%, rgba(249,115,22,0.85) 0%, transparent 70%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 30% 35% at 50% 75%, rgba(234,179,8,0.6) 0%, transparent 65%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 25% 20% at 80% 70%, rgba(239,68,68,0.5) 0%, transparent 60%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "flux-jellyfish",
      name: "Jellyfish",
      category: "flux",
      mood: "cool",
      desc: "Translucent cyan and violet organic shapes",
      dark: true,
      text: "#ccfbf1",
      base: "#020617",
      layers: [
        { background: "radial-gradient(ellipse 50% 65% at 35% 45%, rgba(6,182,212,0.8) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)", blendMode: "screen", blur: 30 },
        { background: "radial-gradient(ellipse 45% 35% at 60% 30%, rgba(139,92,246,0.7) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)", blendMode: "screen", blur: 35 },
        { background: "radial-gradient(ellipse 35% 50% at 70% 65%, rgba(34,211,238,0.6) 0%, rgba(34,211,238,0.05) 50%, transparent 70%)", blendMode: "screen", blur: 25 },
        { background: "radial-gradient(ellipse 20% 25% at 25% 70%, rgba(168,85,247,0.5) 0%, transparent 65%)", blendMode: "screen", blur: 20 },
      ],
    },

  {
      id: "flux-oil-spill",
      name: "Oil Spill",
      category: "flux",
      mood: "vivid",
      desc: "Iridescent dark blobs with rainbow reflections",
      dark: true,
      text: "#e0e7ff",
      base: "#030712",
      layers: [
        { background: "radial-gradient(ellipse 60% 50% at 40% 50%, rgba(99,102,241,0.7) 0%, transparent 60%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 45% 55% at 65% 40%, rgba(16,185,129,0.6) 0%, transparent 55%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 35% 40% at 30% 70%, rgba(236,72,153,0.5) 0%, transparent 50%)", blendMode: "screen", blur: 40 },
        { background: "radial-gradient(ellipse 25% 30% at 75% 75%, rgba(245,158,11,0.4) 0%, transparent 45%)", blendMode: "screen", blur: 35 },
        { background: "radial-gradient(ellipse 20% 25% at 55% 20%, rgba(6,182,212,0.35) 0%, transparent 40%)", blendMode: "screen", blur: 30 },
      ],
    },

  {
      id: "flux-graphite",
      name: "Graphite Flow",
      category: "flux",
      mood: "cool",
      desc: "Slow graphite and slate blobs in dark space",
      dark: true,
      text: "#d0d4d9",
      base: "#0a0a0b",
      layers: [
        { background: "radial-gradient(ellipse 55% 45% at 35% 50%, rgba(100,116,139,0.6) 0%, transparent 60%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 40% 50% at 68% 38%, rgba(148,163,184,0.5) 0%, transparent 55%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 30% 35% at 30% 72%, rgba(71,85,105,0.45) 0%, transparent 50%)", blendMode: "screen", blur: 40 },
        { background: "radial-gradient(ellipse 22% 25% at 78% 75%, rgba(203,213,225,0.3) 0%, transparent 45%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "flux-nebula-flow",
      name: "Nebula Flow",
      category: "flux",
      mood: "vivid",
      desc: "Organic magenta, teal and violet blobs drifting like nebula clouds",
      dark: true,
      text: "#eae0ff",
      base: "#08050f",
      layers: [
        { background: "radial-gradient(ellipse 55% 45% at 35% 45%, rgba(236,72,153,0.75) 0%, transparent 60%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 45% 50% at 68% 40%, rgba(20,184,166,0.65) 0%, transparent 55%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 35% 40% at 50% 75%, rgba(139,92,246,0.55) 0%, transparent 50%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 22% 25% at 80% 75%, rgba(232,121,249,0.4) 0%, transparent 45%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "flux-liquid-metal",
      name: "Liquid Metal",
      category: "flux",
      mood: "cool",
      desc: "Molten silver forms flowing through a dark metallic void",
      dark: true,
      text: "#e2e8f0",
      base: "#050608",
      layers: [
        {
          background:
            "radial-gradient(ellipse 55% 42% at 30% 52%, rgba(203,213,225,0.62) 0%, rgba(100,116,139,0.28) 42%, transparent 70%)",
          blendMode: "screen",
          blur: 38,
        },
        {
          background:
            "radial-gradient(ellipse 42% 58% at 68% 38%, rgba(148,163,184,0.58) 0%, rgba(71,85,105,0.22) 45%, transparent 72%)",
          blendMode: "screen",
          blur: 46,
        },
        {
          background:
            "radial-gradient(ellipse 30% 28% at 52% 70%, rgba(241,245,249,0.30) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 30,
        },
      ],
    },

  {
      id: "flux-toxic-mist",
      name: "Toxic Mist",
      category: "flux",
      mood: "vivid",
      desc: "Acid green and electric cyan vapor twisting through darkness",
      dark: true,
      text: "#d9f99d",
      base: "#020806",
      layers: [
        {
          background:
            "radial-gradient(ellipse 50% 58% at 32% 48%, rgba(132,204,22,0.72) 0%, rgba(77,124,15,0.18) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 34,
        },
        {
          background:
            "radial-gradient(ellipse 42% 48% at 68% 40%, rgba(34,211,238,0.62) 0%, rgba(8,145,178,0.14) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 42,
        },
        {
          background:
            "radial-gradient(ellipse 28% 35% at 52% 72%, rgba(163,230,53,0.42) 0%, transparent 62%)",
          blendMode: "screen",
          blur: 32,
        },
      ],
    },

  {
      id: "flux-velvet-liquid",
      name: "Velvet Liquid",
      category: "flux",
      mood: "warm",
      desc: "Deep burgundy and plum shapes melting into one another",
      dark: true,
      text: "#f5d0fe",
      base: "#0b040a",
      layers: [
        {
          background:
            "radial-gradient(ellipse 55% 48% at 30% 52%, rgba(190,24,93,0.68) 0%, rgba(136,19,55,0.20) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 42,
        },
        {
          background:
            "radial-gradient(ellipse 45% 55% at 68% 38%, rgba(126,34,206,0.62) 0%, rgba(88,28,135,0.16) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 50,
        },
        {
          background:
            "radial-gradient(ellipse 28% 32% at 52% 72%, rgba(244,114,182,0.38) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 34,
        },
      ],
    },

  {
      id: "flux-aurora-fluid",
      name: "Aurora Fluid",
      category: "flux",
      mood: "cool",
      desc: "Liquid emerald and cyan forms inspired by northern lights",
      dark: true,
      text: "#d9fff5",
      base: "#020706",
      layers: [
        {
          background:
            "radial-gradient(ellipse 58% 32% at 32% 48%, rgba(16,185,129,0.72) 0%, rgba(5,120,87,0.20) 48%, transparent 74%)",
          blendMode: "screen",
          blur: 38,
        },
        {
          background:
            "radial-gradient(ellipse 52% 36% at 67% 42%, rgba(34,211,238,0.62) 0%, rgba(8,145,178,0.16) 48%, transparent 74%)",
          blendMode: "screen",
          blur: 44,
        },
        {
          background:
            "linear-gradient(145deg, transparent 30%, rgba(167,243,208,0.14) 46%, rgba(103,232,249,0.18) 53%, transparent 70%)",
          blendMode: "screen",
          blur: 30,
        },
        {
          background:
            "radial-gradient(ellipse 30% 20% at 52% 62%, rgba(236,253,245,0.12) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 24,
        },
      ],
    },

  {
      id: "flux-ink-bloom",
      name: "Ink Bloom",
      category: "flux",
      mood: "vivid",
      desc: "Pigment-like blue and violet ink blooming through water",
      dark: true,
      text: "#dbeafe",
      base: "#030712",
      layers: [
        {
          background:
            "radial-gradient(ellipse 48% 58% at 30% 42%, rgba(37,99,235,0.70) 0%, rgba(30,64,175,0.16) 50%, transparent 74%)",
          blendMode: "screen",
          blur: 32,
        },
        {
          background:
            "radial-gradient(ellipse 42% 50% at 65% 55%, rgba(124,58,237,0.68) 0%, rgba(91,33,182,0.14) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 40,
        },
        {
          background:
            "radial-gradient(ellipse 24% 40% at 50% 30%, rgba(96,165,250,0.38) 0%, transparent 68%)",
          blendMode: "screen",
          blur: 28,
        },
      ],
    },

  {
      id: "flux-cosmic-jelly",
      name: "Cosmic Jelly",
      category: "flux",
      mood: "vivid",
      desc: "Translucent magenta and cyan masses floating like alien jelly",
      dark: true,
      text: "#f5d0fe",
      base: "#05020a",
      layers: [
        {
          background:
            "radial-gradient(ellipse 48% 58% at 28% 48%, rgba(217,70,239,0.72) 0%, rgba(134,25,143,0.16) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 35,
        },
        {
          background:
            "radial-gradient(ellipse 42% 55% at 68% 38%, rgba(34,211,238,0.68) 0%, rgba(8,145,178,0.15) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 40,
        },
        {
          background:
            "radial-gradient(ellipse 25% 32% at 50% 72%, rgba(244,114,182,0.42) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 30,
        },
      ],
    },

  {
      id: "flux-volcanic-glass",
      name: "Volcanic Glass",
      category: "flux",
      mood: "warm",
      desc: "Molten amber shapes trapped inside black volcanic glass",
      dark: true,
      text: "#fed7aa",
      base: "#080403",
      layers: [
        {
          background:
            "radial-gradient(ellipse 50% 42% at 32% 55%, rgba(234,88,12,0.72) 0%, rgba(124,45,18,0.18) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 38,
        },
        {
          background:
            "radial-gradient(ellipse 42% 55% at 68% 38%, rgba(245,158,11,0.64) 0%, rgba(180,83,9,0.14) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 48,
        },
        {
          background:
            "radial-gradient(ellipse 24% 28% at 52% 70%, rgba(254,240,138,0.40) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 30,
        },
      ],
    },

  {
      id: "flux-deep-tide",
      name: "Deep Tide",
      category: "flux",
      mood: "cool",
      desc: "Slow-moving blue and teal masses inspired by deep ocean currents",
      dark: true,
      text: "#cffafe",
      base: "#02070a",
      layers: [
        {
          background:
            "radial-gradient(ellipse 62% 35% at 30% 58%, rgba(14,116,144,0.70) 0%, rgba(8,47,73,0.18) 48%, transparent 75%)",
          blendMode: "screen",
          blur: 44,
        },
        {
          background:
            "radial-gradient(ellipse 48% 50% at 70% 36%, rgba(20,184,166,0.58) 0%, rgba(15,118,110,0.14) 48%, transparent 74%)",
          blendMode: "screen",
          blur: 50,
        },
        {
          background:
            "linear-gradient(150deg, transparent 32%, rgba(103,232,249,0.12) 48%, rgba(45,212,191,0.16) 55%, transparent 72%)",
          blendMode: "screen",
          blur: 36,
        },
      ],
    },

  {
      id: "flux-electric-pulp",
      name: "Electric Pulp",
      category: "flux",
      mood: "vivid",
      desc: "High-energy lime, violet and cyan organic masses",
      dark: true,
      text: "#ecfccb",
      base: "#050608",
      layers: [
        {
          background:
            "radial-gradient(ellipse 48% 48% at 30% 45%, rgba(163,230,53,0.72) 0%, rgba(101,163,13,0.15) 50%, transparent 72%)",
          blendMode: "screen",
          blur: 34,
        },
        {
          background:
            "radial-gradient(ellipse 42% 52% at 68% 42%, rgba(168,85,247,0.70) 0%, rgba(109,40,217,0.14) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 42,
        },
        {
          background:
            "radial-gradient(ellipse 30% 28% at 52% 70%, rgba(34,211,238,0.48) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 30,
        },
      ],
    },

  {
      id: "flux-neon-plasma",
      name: "Neon Plasma",
      category: "flux",
      mood: "vivid",
      desc: "Electric blue and hot pink plasma colliding in organic forms",
      dark: true,
      text: "#f0f9ff",
      base: "#05020a",
      layers: [
        {
          background:
            "radial-gradient(ellipse 55% 45% at 28% 48%, rgba(37,99,235,0.78) 0%, rgba(30,64,175,0.16) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 32,
        },
        {
          background:
            "radial-gradient(ellipse 48% 55% at 70% 40%, rgba(236,72,153,0.72) 0%, rgba(190,24,93,0.14) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 38,
        },
        {
          background:
            "radial-gradient(ellipse 24% 30% at 52% 65%, rgba(34,211,238,0.55) 0%, transparent 64%)",
          blendMode: "screen",
          blur: 25,
        },
        {
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.10) 0%, transparent 45%)",
          blendMode: "screen",
          blur: 18,
        },
      ],
    },

  {
      id: "flux-solar-liquid",
      name: "Solar Liquid",
      category: "flux",
      mood: "warm",
      desc: "Golden and coral liquid forms glowing like a molten sun",
      dark: true,
      text: "#fef3c7",
      base: "#0b0502",
      layers: [
        {
          background:
            "radial-gradient(ellipse 52% 48% at 30% 50%, rgba(251,146,60,0.78) 0%, rgba(194,65,12,0.16) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 38,
        },
        {
          background:
            "radial-gradient(ellipse 45% 55% at 68% 38%, rgba(250,204,21,0.72) 0%, rgba(217,119,6,0.14) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 45,
        },
        {
          background:
            "radial-gradient(ellipse 24% 28% at 52% 68%, rgba(255,247,237,0.42) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 26,
        },
      ],
    },

  {
      id: "flux-boreal-pulse",
      name: "Boreal Pulse",
      category: "flux",
      mood: "cool",
      desc: "Emerald, cyan and violet organic masses with a northern glow",
      dark: true,
      text: "#e0fff7",
      base: "#020607",
      layers: [
        {
          background:
            "radial-gradient(ellipse 52% 45% at 28% 52%, rgba(16,185,129,0.72) 0%, rgba(5,120,87,0.16) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 36,
        },
        {
          background:
            "radial-gradient(ellipse 45% 52% at 68% 38%, rgba(34,211,238,0.68) 0%, rgba(8,145,178,0.14) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 42,
        },
        {
          background:
            "radial-gradient(ellipse 28% 35% at 50% 72%, rgba(139,92,246,0.38) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 34,
        },
        {
          background:
            "linear-gradient(145deg, transparent 30%, rgba(167,243,208,0.10) 46%, rgba(103,232,249,0.14) 53%, transparent 72%)",
          blendMode: "screen",
          blur: 30,
        },
      ],
    },

  {
      id: "flux-black-cherry",
      name: "Black Cherry",
      category: "flux",
      mood: "warm",
      desc: "Dark cherry and crimson organic masses with a glossy depth",
      dark: true,
      text: "#fecdd3",
      base: "#090204",
      layers: [
        {
          background:
            "radial-gradient(ellipse 55% 48% at 32% 50%, rgba(190,24,93,0.72) 0%, rgba(127,29,29,0.16) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 40,
        },
        {
          background:
            "radial-gradient(ellipse 42% 55% at 68% 38%, rgba(220,38,38,0.62) 0%, rgba(153,27,27,0.14) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 48,
        },
        {
          background:
            "radial-gradient(ellipse 25% 28% at 52% 70%, rgba(251,113,133,0.30) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 30,
        },
      ],
    },

  {
      id: "flux-frozen-plasma",
      name: "Frozen Plasma",
      category: "flux",
      mood: "cool",
      desc: "Icy blue organic masses glowing inside a frozen void",
      dark: true,
      text: "#e0f2fe",
      base: "#02060b",
      layers: [
        {
          background:
            "radial-gradient(ellipse 55% 48% at 30% 50%, rgba(56,189,248,0.68) 0%, rgba(14,116,144,0.16) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 38,
        },
        {
          background:
            "radial-gradient(ellipse 45% 55% at 68% 38%, rgba(129,140,248,0.62) 0%, rgba(67,56,202,0.14) 48%, transparent 72%)",
          blendMode: "screen",
          blur: 46,
        },
        {
          background:
            "radial-gradient(ellipse 22% 26% at 52% 68%, rgba(186,230,253,0.34) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 28,
        },
      ],
    },

  {
      id: "flux-bubblegum",
      name: "Bubblegum",
      category: "flux",
      mood: "vivid",
      desc: "Playful pink, purple and mint blob composition",
      dark: false,
      cardText: "#000000",
      text: "#701a75",
      base: "#fdf4ff",
      layers: [
        { background: "radial-gradient(ellipse 50% 45% at 25% 40%, rgba(236,72,153,0.65) 0%, transparent 65%)", blendMode: "normal", blur: 50 },
        { background: "radial-gradient(ellipse 40% 50% at 70% 55%, rgba(168,85,247,0.55) 0%, transparent 60%)", blendMode: "normal", blur: 55 },
        { background: "radial-gradient(ellipse 35% 40% at 50% 25%, rgba(52,211,153,0.45) 0%, transparent 55%)", blendMode: "normal", blur: 45 },
        { background: "radial-gradient(ellipse 30% 30% at 80% 30%, rgba(244,114,182,0.4) 0%, transparent 50%)", blendMode: "normal", blur: 40 },
      ],
    },

  {
      id: "flux-cloud-nine",
      name: "Cloud Nine",
      category: "flux",
      mood: "warm",
      desc: "Soft peach and cream organic cloudscape",
      dark: false,
      cardText: "#000000",
      text: "#9a3412",
      base: "#fff7ed",
      layers: [
        { background: "radial-gradient(ellipse 55% 45% at 30% 50%, rgba(253,186,116,0.6) 0%, transparent 60%)", blendMode: "normal", blur: 60 },
        { background: "radial-gradient(ellipse 45% 55% at 65% 40%, rgba(251,146,60,0.45) 0%, transparent 55%)", blendMode: "normal", blur: 65 },
        { background: "radial-gradient(ellipse 40% 35% at 50% 70%, rgba(254,215,170,0.5) 0%, transparent 50%)", blendMode: "normal", blur: 55 },
      ],
    },

  {
      id: "flux-milk-tea",
      name: "Milk Tea",
      category: "flux",
      mood: "warm",
      desc: "Creamy caramel and beige organic forms with a soft tactile feel",
      dark: false,
      cardText: "#000000",
      text: "#78350f",
      base: "#fffbeb",
      layers: [
        {
          background:
            "radial-gradient(ellipse 55% 45% at 30% 50%, rgba(217,119,6,0.38) 0%, rgba(245,158,11,0.12) 48%, transparent 72%)",
          blendMode: "normal",
          blur: 58,
        },
        {
          background:
            "radial-gradient(ellipse 45% 52% at 68% 40%, rgba(180,83,9,0.28) 0%, rgba(217,119,6,0.08) 50%, transparent 74%)",
          blendMode: "normal",
          blur: 62,
        },
        {
          background:
            "radial-gradient(ellipse 30% 28% at 50% 72%, rgba(255,255,255,0.62) 0%, transparent 68%)",
          blendMode: "soft-light",
          blur: 38,
        },
      ],
    },

  {
      id: "flux-sage-smoke",
      name: "Sage Smoke",
      category: "flux",
      mood: "cool",
      desc: "Muted sage and eucalyptus shapes drifting through pale air",
      dark: false,
      cardText: "#000000",
      text: "#365314",
      base: "#f5f7f0",
      layers: [
        {
          background:
            "radial-gradient(ellipse 55% 48% at 30% 48%, rgba(132,204,22,0.34) 0%, rgba(101,163,13,0.08) 48%, transparent 72%)",
          blendMode: "normal",
          blur: 40,
        },
        {
          background:
            "radial-gradient(ellipse 46% 52% at 68% 42%, rgba(45,212,191,0.28) 0%, rgba(20,184,166,0.06) 50%, transparent 74%)",
          blendMode: "normal",
          blur: 30,
        },
        {
          background:
            "radial-gradient(ellipse 32% 30% at 52% 70%, rgba(255,255,255,0.50) 0%, transparent 68%)",
          blendMode: "soft-light",
          blur: 30,
        },
      ],
    },
]
