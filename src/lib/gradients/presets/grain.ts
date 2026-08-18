import type { Gradient } from "../types"

export const GRAIN_PRESETS: Gradient[] = [
  {
      id: "grain-midnight-film",
      name: "Midnight Film",
      category: "grain",
      mood: "cool",
      desc: "Deep indigo with analog film grain",
      dark: true,
      text: "#c7d2fe",
      base: "#0f0a1e",
      grain: true,
      layers: [
        { background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 70%, #6366f1 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 60% 40%, rgba(129,140,248,0.3) 0%, transparent 50%)", blendMode: "screen", blur: 40 },
      ],
    },

  {
      id: "grain-warm-velvet",
      name: "Warm Velvet",
      category: "grain",
      mood: "warm",
      desc: "Rich burgundy with soft texture",
      dark: true,
      text: "#fecdd3",
      base: "#1a0505",
      grain: true,
      layers: [
        { background: "linear-gradient(145deg, #450a0a 0%, #7f1d1d 35%, #991b1b 60%, #b91c1c 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 40% 50%, rgba(252,165,165,0.2) 0%, transparent 50%)", blendMode: "screen", blur: 50 },
      ],
    },

  {
      id: "grain-forest-mist",
      name: "Forest Mist",
      category: "grain",
      mood: "cool",
      desc: "Emerald depth with organic noise",
      dark: true,
      text: "#d1fae5",
      base: "#022c22",
      grain: true,
      layers: [
        { background: "linear-gradient(140deg, #022c22 0%, #064e3b 35%, #065f46 60%, #047857 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 55% 45%, rgba(52,211,153,0.25) 0%, transparent 50%)", blendMode: "screen", blur: 45 },
      ],
    },

  {
      id: "grain-cosmic-ash",
      name: "Cosmic Ash",
      category: "grain",
      mood: "cool",
      desc: "Charcoal and indigo grain over a subtle violet undertone",
      dark: true,
      text: "#d6d0f0",
      base: "#0d0b16",
      grain: true,
      layers: [
        { background: "linear-gradient(140deg, #0d0b16 0%, #1e1b32 40%, #312e4d 70%, #433f68 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 55% 40%, rgba(129,140,248,0.25) 0%, transparent 50%)", blendMode: "screen", blur: 45 },
      ],
    },

  {
      id: "grain-obsidian",
      name: "Obsidian",
      category: "grain",
      mood: "cool",
      desc: "Black volcanic depth with subtle graphite texture",
      dark: true,
      text: "#d4d4d8",
      base: "#050505",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(135deg, #030303 0%, #111111 42%, #1c1c1c 72%, #090909 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 45% 55% at 68% 38%, rgba(161,161,170,0.16) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 5,
        },
      ],
    },

  {
      id: "grain-ocean-depth",
      name: "Ocean Depth",
      category: "grain",
      mood: "cool",
      desc: "Deep marine blue with soft underwater illumination",
      dark: true,
      text: "#c7f9ff",
      base: "#020b12",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(145deg, #020b12 0%, #073047 38%, #075985 68%, #0e7490 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 55% 40% at 58% 38%, rgba(34,211,238,0.24) 0%, rgba(14,116,144,0.10) 48%, transparent 75%)",
          blendMode: "screen",
          blur: 50,
        },
      ],
    },

  {
      id: "grain-moss",
      name: "Moss",
      category: "grain",
      mood: "cool",
      desc: "Muted moss green with earthy photographic texture",
      dark: true,
      text: "#d9f2c7",
      base: "#11150d",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(150deg, #11150d 0%, #283618 40%, #3f6212 68%, #4d7c0f 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 48% 42% at 42% 46%, rgba(163,230,53,0.18) 0%, rgba(101,163,13,0.08) 48%, transparent 75%)",
          blendMode: "screen",
          blur: 48,
        },
      ],
    },

  {
      id: "grain-smoked-lilac",
      name: "Smoked Lilac",
      category: "grain",
      mood: "cool",
      desc: "Dusty violet softened by a smoky analog texture",
      dark: true,
      text: "#e9d5ff",
      base: "#100c16",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(140deg, #100c16 0%, #24162e 38%, #4c1d62 68%, #6b3578 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 50% 45% at 62% 40%, rgba(216,180,254,0.20) 0%, rgba(168,85,247,0.08) 48%, transparent 75%)",
          blendMode: "screen",
          blur: 45,
        },
      ],
    },

  {
      id: "grain-olive-film",
      name: "Olive Film",
      category: "grain",
      mood: "warm",
      desc: "Muted olive tones inspired by vintage photography",
      dark: true,
      text: "#e7e5b5",
      base: "#15160b",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(145deg, #15160b 0%, #3f4220 40%, #686b2a 70%, #85852f 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 55% 45% at 48% 42%, rgba(217,219,121,0.16) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 48,
        },
      ],
    },

  {
      id: "grain-carbon-blue",
      name: "Carbon Blue",
      category: "grain",
      mood: "cool",
      desc: "Charcoal black transitioning into restrained cobalt blue",
      dark: true,
      text: "#bfdbfe",
      base: "#05070c",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(138deg, #05070c 0%, #0f172a 40%, #172554 70%, #1e3a8a 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 45% 50% at 72% 40%, rgba(96,165,250,0.20) 0%, transparent 68%)",
          blendMode: "screen",
          blur: 42,
        },
      ],
    },

  {
      id: "grain-rainforest",
      name: "Rainforest",
      category: "grain",
      mood: "cool",
      desc: "Dense tropical green with humid atmospheric texture",
      dark: true,
      text: "#ccfbf1",
      base: "#02100c",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(142deg, #02100c 0%, #064e3b 35%, #047857 62%, #059669 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 50% 55% at 65% 38%, rgba(45,212,191,0.20) 0%, rgba(16,185,129,0.08) 50%, transparent 78%)",
          blendMode: "screen",
          blur: 48,
        },
      ],
    },

  {
      id: "grain-burnt-paper",
      name: "Burnt Paper",
      category: "grain",
      mood: "warm",
      desc: "Aged parchment fading into warm charcoal",
      dark: true,
      text: "#fed7aa",
      base: "#17100b",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(140deg, #29150b 0%, #78350f 38%, #a16207 66%, #d97706 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 50% 45% at 45% 40%, rgba(254,215,170,0.16) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 45,
        },
      ],
    },

  {
      id: "grain-indigo-haze",
      name: "Indigo Haze",
      category: "grain",
      mood: "cool",
      desc: "Soft midnight indigo with a hazy luminous center",
      dark: true,
      text: "#c7d2fe",
      base: "#080914",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(145deg, #080914 0%, #171853 38%, #312e81 68%, #4338ca 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 55% 45% at 52% 45%, rgba(165,180,252,0.20) 0%, rgba(99,102,241,0.08) 50%, transparent 76%)",
          blendMode: "screen",
          blur: 50,
        },
      ],
    },

  {
      id: "grain-smoke",
      name: "Smoke",
      category: "grain",
      mood: "cool",
      desc: "Neutral graphite gradient with dense atmospheric grain",
      dark: true,
      text: "#e4e4e7",
      base: "#080808",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(145deg, #050505 0%, #18181b 42%, #27272a 68%, #3f3f46 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 58% 50% at 48% 44%, rgba(228,228,231,0.12) 0%, transparent 68%)",
          blendMode: "screen",
          blur: 52,
        },
      ],
    },

  {
      id: "grain-copper-patina",
      name: "Copper Patina",
      category: "grain",
      mood: "warm",
      desc: "Aged copper transitioning into muted turquoise patina",
      dark: true,
      text: "#d5f5ef",
      base: "#0c100e",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(135deg, #431407 0%, #9a3412 32%, #0f766e 68%, #115e59 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 50% 45% at 68% 42%, rgba(94,234,212,0.20) 0%, rgba(20,184,166,0.08) 50%, transparent 76%)",
          blendMode: "screen",
          blur: 48,
        },
      ],
    },

  {
      id: "grain-lunar-surface",
      name: "Lunar Surface",
      category: "grain",
      mood: "cool",
      desc: "Cold lunar gray with subtle mineral depth",
      dark: true,
      text: "#e5e7eb",
      base: "#0c0d0f",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(150deg, #090a0c 0%, #27272a 40%, #52525b 68%, #71717a 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 45% 50% at 60% 38%, rgba(212,212,216,0.18) 0%, transparent 68%)",
          blendMode: "screen",
          blur: 45,
        },
      ],
    },

  {
      id: "grain-desert-sand",
      name: "Desert Sand",
      category: "grain",
      mood: "warm",
      desc: "Warm beige with gritty film texture",
      dark: false,
      cardText: "#000000",
      text: "#78350f",
      base: "#fefce8",
      grain: true,
      layers: [
        { background: "linear-gradient(155deg, #fef9c3 0%, #fde68a 40%, #fcd34d 70%, #fbbf24 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 50% 40%, rgba(245,158,11,0.2) 0%, transparent 55%)", blendMode: "soft-light", blur: 30 },
      ],
    },

  {
      id: "grain-concrete",
      name: "Concrete Grain",
      category: "grain",
      mood: "cool",
      desc: "Cool concrete gray with fine analog texture",
      dark: false,
      cardText: "#000000",
      text: "#3f3f46",
      base: "#f4f4f5",
      grain: true,
      layers: [
        { background: "linear-gradient(150deg, #e4e4e7 0%, #d4d4d8 40%, #a1a1aa 70%, #71717a 100%)", blendMode: "normal", blur: 0 },
        { background: "radial-gradient(circle at 50% 40%, rgba(113,113,122,0.2) 0%, transparent 55%)", blendMode: "soft-light", blur: 30 },
      ],
    },

  {
      id: "grain-arctic-paper",
      name: "Arctic Paper",
      category: "grain",
      mood: "cool",
      desc: "Cold white surface with a delicate icy texture",
      dark: false,
      cardText: "#000000",
      text: "#334155",
      base: "#f8fafc",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(145deg, #f8fafc 0%, #e0f2fe 38%, #bae6fd 68%, #dbeafe 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 50% 40% at 35% 42%, rgba(125,211,252,0.22) 0%, transparent 60%)",
          blendMode: "soft-light",
          blur: 35,
        },
      ],
    },

  {
      id: "grain-terracotta",
      name: "Terracotta",
      category: "grain",
      mood: "warm",
      desc: "Burnt clay with warm tactile grain",
      dark: false,
      cardText: "#000000",
      text: "#7c2d12",
      base: "#fff7ed",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(145deg, #fed7aa 0%, #f97316 38%, #c2410c 68%, #9a3412 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 48% 42% at 40% 45%, rgba(255,237,213,0.22) 0%, transparent 60%)",
          blendMode: "soft-light",
          blur: 38,
        },
      ],
    },

  {
      id: "grain-champagne",
      name: "Champagne",
      category: "grain",
      mood: "warm",
      desc: "Soft champagne surface with understated luxury texture",
      dark: false,
      cardText: "#000000",
      text: "#713f12",
      base: "#fffbeb",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(145deg, #fffbeb 0%, #fef3c7 38%, #fde68a 68%, #fcd34d 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 55% 40% at 55% 38%, rgba(255,255,255,0.42) 0%, transparent 65%)",
          blendMode: "soft-light",
          blur: 32,
        },
      ],
    },

  {
      id: "grain-dusty-rose",
      name: "Dusty Rose",
      category: "grain",
      mood: "warm",
      desc: "Muted rose gradient with soft vintage film character",
      dark: false,
      cardText: "#ffffff",
      text: "#881337",
      base: "#fff1f2",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(145deg, #ffe4e6 0%, #fda4af 38%, #fb7185 68%, #e11d48 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 48% 45% at 40% 42%, rgba(255,255,255,0.25) 0%, transparent 62%)",
          blendMode: "soft-light",
          blur: 40,
        },
      ],
    },

  {
      id: "grain-frosted-slate",
      name: "Frosted Slate",
      category: "grain",
      mood: "cool",
      desc: "Desaturated blue-gray with soft frosted texture",
      dark: false,
      cardText: "#000000",
      text: "#334155",
      base: "#f1f5f9",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(145deg, #e2e8f0 0%, #cbd5e1 38%, #94a3b8 68%, #64748b 100%)",
          blendMode: "normal",
          blur: 0,
        },
        {
          background:
            "radial-gradient(ellipse 50% 42% at 58% 40%, rgba(226,232,240,0.30) 0%, transparent 62%)",
          blendMode: "soft-light",
          blur: 35,
        },
      ],
    },
]
