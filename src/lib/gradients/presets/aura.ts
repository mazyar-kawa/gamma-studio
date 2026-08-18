import type { Gradient } from "../types"

export const AURA_PRESETS: Gradient[] = [
  {
      id: "sunrise-drift",
      name: "Sunrise Drift",
      category: "aura",
      mood: "vivid",
      desc: "Blue into orange, high key",
      dark: false,
      text: "#24406e",
      base: "#0a0a0a",
      layers: [
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,138,255,0.1) 30%, rgb(255,255,255) 20%, rgb(247,164,66) 70%, rgb(233,66,247) 100%)",
          blendMode: "hard-light",
          blur: 30,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,138,255,0.2) 35%, rgb(255,255,255) 70%, rgb(247,164,66) 80%, rgb(233,66,247) 100%)",
          blendMode: "soft-light",
          blur: 50,
          opacity: 1,
        },
      ],
    },

  {
      id: "ember-glow",
      name: "Ember Glow",
      category: "aura",
      mood: "warm",
      desc: "Coral into deep rose",
      dark: false,
      text: "#7a1f2e",
      base: "#faf8f2",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,106,61,0.12) 28%, rgb(255,255,255) 18%, rgb(255,201,77) 68%, rgb(255,61,119) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,106,61,0.22) 34%, rgb(255,255,255) 66%, rgb(255,201,77) 82%, rgb(255,61,119) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "glacier-mist",
      name: "Glacier Mist",
      category: "aura",
      mood: "cool",
      desc: "Cyan into indigo",
      dark: false,
      text: "#1f3b6e",
      base: "#faf8f2",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(77,210,255,0.12) 28%, rgb(255,255,255) 18%, rgb(53,230,192) 68%, rgb(91,110,245) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(77,210,255,0.22) 34%, rgb(255,255,255) 66%, rgb(53,230,192) 82%, rgb(91,110,245) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "orchid-bloom",
      name: "Orchid Bloom",
      category: "aura",
      mood: "vivid",
      desc: "Magenta into blue",
      dark: false,
      text: "#5b1f6e",
      base: "#faf8f2",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(242,61,224,0.12) 28%, rgb(255,255,255) 18%, rgb(139,92,246) 68%, rgb(61,139,255) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(242,61,224,0.22) 34%, rgb(255,255,255) 66%, rgb(139,92,246) 82%, rgb(61,139,255) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "warm-ash",
      name: "Warm Ash",
      category: "aura",
      mood: "warm",
      desc: "Warm greige tones, understated and airy",
      dark: false,
      text: "#4a4238",
      base: "#f7f5f0",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(214,204,190,0.12) 28%, rgb(255,255,255) 18%, rgb(196,181,160) 68%, rgb(168,148,122) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(214,204,190,0.22) 34%, rgb(255,255,255) 66%, rgb(196,181,160) 82%, rgb(168,148,122) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "golden-hour",
      name: "Golden Hour",
      category: "aura",
      mood: "warm",
      desc: "Amber melting into burnt sienna",
      dark: false,
      text: "#5c2e0a",
      base: "#faf8f2",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,183,77,0.12) 28%, rgb(255,255,255) 18%, rgb(255,138,61) 68%, rgb(183,77,0) 100%)", blendMode: "hard-light", blur: 50 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,183,77,0.22) 34%, rgb(255,255,255) 66%, rgb(255,138,61) 82%, rgb(183,77,0) 100%)", blendMode: "soft-light", blur: 40 },
      ],
    },

  {
      id: "rose-gold",
      name: "Rose Gold",
      category: "aura",
      mood: "warm",
      desc: "Blush pink dissolving into antique copper",
      dark: false,
      text: "#6e2e2a",
      base: "#faf2f2",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,183,178,0.12) 28%, rgb(255,255,255) 18%, rgb(255,145,140) 68%, rgb(200,120,115) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,183,178,0.22) 34%, rgb(255,255,255) 66%, rgb(255,145,140) 82%, rgb(200,120,115) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "sunset-boulevard",
      name: "Sunset Boulevard",
      category: "aura",
      mood: "warm",
      desc: "Coral haze fading into honeyed amber",
      dark: false,
      text: "#6e2a1a",
      base: "#faf6f2",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,107,107,0.12) 28%, rgb(255,255,255) 18%, rgb(255,170,100) 68%, rgb(255,200,80) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,107,107,0.22) 34%, rgb(255,255,255) 66%, rgb(255,170,100) 82%, rgb(255,200,80) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "champagne-fizz",
      name: "Champagne Fizz",
      category: "aura",
      mood: "warm",
      desc: "Pale gold bubbling into peach nectar",
      dark: false,
      text: "#5c3d1a",
      base: "#faf8f2",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,230,180,0.12) 28%, rgb(255,255,255) 18%, rgb(255,200,140) 68%, rgb(230,170,100) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,230,180,0.22) 34%, rgb(255,255,255) 66%, rgb(255,200,140) 82%, rgb(230,170,100) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "midnight-sapphire",
      name: "Midnight Sapphire",
      category: "aura",
      mood: "cool",
      desc: "Deep cobalt bleeding into violet ink",
      dark: false,
      text: "#c8d4ff",
      base: "#0a0c1a",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(61,90,255,0.12) 28%, rgb(255,255,255) 18%, rgb(45,55,135) 68%, rgb(20,25,60) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(61,90,255,0.22) 34%, rgb(255,255,255) 66%, rgb(45,55,135) 82%, rgb(20,25,60) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "ocean-pearl",
      name: "Ocean Pearl",
      category: "aura",
      mood: "cool",
      desc: "Seafoam drifting into abyssal blue",
      dark: false,
      text: "#1a3a4a",
      base: "#f0f7fa",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(178,235,242,0.12) 28%, rgb(255,255,255) 18%, rgb(77,182,200) 68%, rgb(45,100,130) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(178,235,242,0.22) 34%, rgb(255,255,255) 66%, rgb(77,182,200) 82%, rgb(45,100,130) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "arctic-frost",
      name: "Arctic Frost",
      category: "aura",
      mood: "cool",
      desc: "Ice crystal refracting into periwinkle",
      dark: false,
      text: "#1a2a4a",
      base: "#f2f6fa",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(200,230,255,0.12) 28%, rgb(255,255,255) 18%, rgb(150,200,255) 68%, rgb(100,130,200) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(200,230,255,0.22) 34%, rgb(255,255,255) 66%, rgb(150,200,255) 82%, rgb(100,130,200) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "silver-mist",
      name: "Silver Mist",
      category: "aura",
      mood: "cool",
      desc: "Mercury grey dissolving into pale lilac",
      dark: false,
      text: "#2a2a3a",
      base: "#f5f5f7",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(200,200,210,0.12) 28%, rgb(255,255,255) 18%, rgb(160,160,180) 68%, rgb(130,120,160) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(200,200,210,0.22) 34%, rgb(255,255,255) 66%, rgb(160,160,180) 82%, rgb(130,120,160) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "deep-lagoon",
      name: "Deep Lagoon",
      category: "aura",
      mood: "cool",
      desc: "Teal into violet",
      dark: true,
      text: "#d9f4ec",
      base: "#0c0a08",
      layers: [
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(47,209,166,0.12) 28%, rgb(255,255,255) 18%, rgb(61,124,255) 68%, rgb(122,92,255) 100%)", blendMode: "hard-light", blur: 36 },
        { background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(47,209,166,0.22) 34%, rgb(255,255,255) 66%, rgb(61,124,255) 82%, rgb(122,92,255) 100%)", blendMode: "soft-light", blur: 36 },
      ],
    },

  {
      id: "eclipse-flare",
      name: "Eclipse Flare",
      category: "aura",
      mood: "vivid",
      desc: "Dark void curving into blue, magenta, and ember",
      dark: true,
      text: "#ffe4f0",
      base: "#0c0a08",
      layers: [
        { background: "radial-gradient(ellipse 89% 99% at 50% -38%, rgba(0,0,0,0) 0%, rgb(30,32,35) 38%, rgb(45,70,115) 70%, rgb(142,123,227) 90%, rgb(248,104,196) 100%)", blendMode: "hard-light", blur: 50, opacity: 0.5 },
        { background: "radial-gradient(ellipse 95% 105% at 50% -34%, rgba(0,0,0,0.15) 0%, rgb(30,32,35) 42%, rgb(55,82,135) 74%, rgb(150,126,228) 92%, rgb(246,108,198) 100%)", blendMode: "soft-light", blur: 100 },
      ],
    },

  {
      id: "midnight-horizon",
      name: "Midnight Horizon",
      category: "aura",
      mood: "vivid",
      desc: "A vibrant transition from deep space blue to an electric sunrise horizon",
      dark: true,
      text: "#ffffff",
      base: "hsl(240, 100%, 6%)",
      layers: [
        {
          background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 138, 255, 0.9) 40%, rgb(255, 255, 255) 70%, rgb(247, 164, 66) 80%, rgb(233, 66, 247) 100%)",
          blendMode: "hard-light",
          blur: 20,
          opacity: 1,
        },
        {
          background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 138, 255, 0.9) 40%, rgb(255, 255, 255) 70%, rgb(247, 164, 66) 80%, rgb(233, 66, 247) 100%)",
          blendMode: "soft-light",
          blur: 16,
          opacity: 1,
        },
        {
          background: "linear-gradient(to top, rgb(0, 0, 31) 0%, rgba(0, 0, 31, 0.99) 8.1%, rgba(0, 0, 31, 0.953) 15.5%, rgba(0, 0, 31, 0.894) 22.5%, rgba(0, 0, 31, 0.824) 29%, rgba(0, 0, 31, 0.74) 35.3%, rgba(0, 0, 31, 0.647) 41.2%, rgba(0, 0, 31, 0.55) 47.1%, rgba(0, 0, 31, 0.45) 52.9%, rgba(0, 0, 31, 0.353) 58.8%, rgba(0, 0, 31, 0.26) 64.7%, rgba(0, 0, 31, 0.176) 71%, rgba(0, 0, 31, 0.106) 77.5%, rgba(0, 0, 31, 0.047) 84.5%, rgba(0, 0, 31, 0.01) 91.9%, rgba(0, 0, 31, 0) 100%)",
          blendMode: "normal",
          blur: 44,
          opacity: 1,
        }
      ],
    },

  {
      id: "aurora-nova",
      name: "Aurora Nova",
      category: "aura",
      mood: "vivid",
      desc: "A vibrant transition from deep cosmic violet to an electric neon sunrise",
      dark: true,
      text: "#ffffff",
      base: "hsl(240, 100%, 6%)",
      layers: [
        {
          background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 138, 255, 0.9) 40%, rgb(255, 255, 255) 70%, rgb(247, 164, 66) 80%, rgb(233, 66, 247) 100%)",
          blendMode: "hard-light",
          blur: 35,
          opacity: 1,
        },
        {
          background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 138, 255, 0.9) 40%, rgb(255, 255, 255) 70%, rgb(247, 164, 66) 80%, rgb(233, 66, 247) 100%)",
          blendMode: "soft-light",
          blur: 10,
          opacity: 1,
        },
        {
          background: "linear-gradient(to top, rgb(0, 0, 31) 0%, rgba(0, 0, 31, 0.85) 8.1%, rgba(0, 0, 31, 0.7) 15.5%, rgba(0, 0, 31, 0.55) 22.5%, rgba(0, 0, 31, 0.4) 29%, rgba(0, 0, 31, 0.25) 35.3%, rgba(0, 0, 31, 0.15) 41.2%, rgba(0, 0, 31, 0) 50%)",
          blendMode: "normal",
          blur: 100,
          opacity: 0.1,
        }
      ],
    },

  {
      id: "solstice-veil",
      name: "Solstice Veil",
      category: "aura",
      mood: "warm",
      desc: "Amber horizon dissolving into rose-violet dusk",
      dark: true,
      text: "#ffe9df",
      base: "hsl(345, 55%, 6%)",
      layers: [
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,94,58,0.9) 40%, rgb(255,255,255) 70%, rgb(255,159,67) 82%, rgb(236,64,122) 100%)",
          blendMode: "hard-light",
          blur: 40,
          opacity: 0.8,
        },
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(255,94,58,0.9) 40%, rgb(255,255,255) 70%, rgb(255,159,67) 82%, rgb(236,64,122) 100%)",
          blendMode: "soft-light",
          blur: 0,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(to top, rgb(31,4,10) 0%, rgba(31,4,10,0.9) 15%, rgba(31,4,10,0.6) 35%, rgba(31,4,10,0.25) 60%, rgba(31,4,10,0) 100%)",
          blendMode: "normal",
          blur: 0,
          opacity: 1,
        },
      ],
    },

  {
      id: "arctic-dawn",
      name: "Arctic Dawn",
      category: "aura",
      mood: "cool",
      desc: "Frozen cyan horizon melting into pale rose",
      dark: true,
      text: "#e8f4ff",
      base: "hsl(205, 60%, 6%)",
      layers: [
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(56,189,248,0.9) 40%, rgb(255,255,255) 70%, rgb(199,210,254) 82%, rgb(249,168,212) 100%)",
          blendMode: "hard-light",
          blur: 15,
          opacity: 0.55,
        },
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(56,189,248,0.9) 40%, rgb(255,255,255) 70%, rgb(199,210,254) 82%, rgb(249,168,212) 100%)",
          blendMode: "soft-light",
          blur: 66,
          opacity: 0.85,
        },
      ],
    },

  {
      id: "neon-skyline",
      name: "Neon Skyline",
      category: "aura",
      mood: "vivid",
      desc: "Electric cyan horizon bleeding into neon magenta",
      dark: true,
      text: "#f5e6ff",
      base: "hsl(265, 75%, 5%)",
      layers: [
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(34,211,238,0.9) 40%, rgb(255,255,255) 70%, rgb(232,121,249) 82%, rgb(139,92,246) 100%)",
          blendMode: "hard-light",
          blur: 20,
          opacity: 0.8,
        },
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(34,211,238,0.9) 40%, rgb(255,255,255) 70%, rgb(232,121,249) 82%, rgb(139,92,246) 100%)",
          blendMode: "soft-light",
          blur: 70,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(to top, rgb(8,4,20) 0%, rgba(8,4,20,0.85) 15%, rgba(8,4,20,0.5) 35%, rgba(8,4,20,0.15) 60%, rgba(8,4,20,0) 100%)",
          blendMode: "normal",
          blur: 15,
          opacity: 0.6,
        },
      ],
    },

  {
      id: "crimson-veil",
      name: "Crimson Veil",
      category: "aura",
      mood: "warm",
      desc: "Deep crimson horizon melting into amber gold",
      dark: true,
      text: "#ffe8d6",
      base: "hsl(10, 65%, 5%)",
      layers: [
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(220,38,38,0.9) 40%, rgb(255,255,255) 70%, rgb(251,146,60) 82%, rgb(250,204,21) 100%)",
          blendMode: "hard-light",
          blur: 25,
          opacity: 0.6,
        },
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(220,38,38,0.9) 40%, rgb(255,255,255) 70%, rgb(251,146,60) 82%, rgb(250,204,21) 100%)",
          blendMode: "soft-light",
          blur: 35,
          opacity: 0.9,
        },
      ],
    },

  {
      id: "violet-horizon",
      name: "Violet Horizon",
      category: "aura",
      mood: "vivid",
      desc: "Indigo horizon opening into lavender and rose",
      dark: true,
      text: "#ece5ff",
      base: "hsl(255, 65%, 6%)",
      layers: [
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(99,102,241,0.9) 40%, rgb(255,255,255) 70%, rgb(216,180,254) 82%, rgb(244,114,182) 100%)",
          blendMode: "hard-light",
          blur: 40,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(99,102,241,0.9) 40%, rgb(255,255,255) 70%, rgb(216,180,254) 82%, rgb(244,114,182) 100%)",
          blendMode: "soft-light",
          blur: 80,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(to top, rgb(10,8,26) 0%, rgba(10,8,26,0.9) 15%, rgba(10,8,26,0.55) 35%, rgba(10,8,26,0.2) 60%, rgba(10,8,26,0) 100%)",
          blendMode: "normal",
          blur: 0,
          opacity: 1,
        },
      ],
    },

  {
      id: "eclipse-bloom",
      name: "Eclipse Bloom",
      category: "aura",
      mood: "cool",
      desc: "A dim cyan bloom emerging from behind a dark eclipse",
      dark: true,
      text: "#c7e9e7",
      base: "#050707",
      grain: true,
      layers: [
        {
          background:
            "radial-gradient(34% 34% at 68% 38%, rgba(55,122,119,0.34) 0%, rgba(28,75,74,0.20) 42%, transparent 78%)",
          blendMode: "screen",
          blur: 38,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(22% 22% at 68% 38%, rgba(82,153,148,0.18) 0%, transparent 72%)",
          blendMode: "screen",
          blur: 20,
          opacity: 0.8,
        },
        {
          background:
            "radial-gradient(18% 18% at 52% 48%, #020303 0%, #020303 62%, transparent 64%)",
          blendMode: "multiply",
          blur: 4,
          opacity: 1,
        },
      ],
    },

  {
      id: "tideglass",
      name: "Tideglass",
      category: "aura",
      mood: "cool",
      desc: "A translucent cyan tide bending across deep black",
      dark: true,
      text: "#c8eceb",
      base: "#040808",
      grain: true,
      layers: [
        {
          background:
            "radial-gradient(90% 22% at 50% 56%, rgba(28,103,101,0.34) 0%, rgba(18,65,64,0.18) 38%, transparent 78%)",
          blendMode: "screen",
          blur: 46,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(172deg, transparent 35%, rgba(53,142,137,0.20) 46%, rgba(29,89,87,0.28) 53%, transparent 66%)",
          blendMode: "screen",
          blur: 42,
          opacity: 0.9,
        },
        {
          background:
            "linear-gradient(8deg, transparent 38%, rgba(67,153,147,0.10) 49%, transparent 60%)",
          blendMode: "soft-light",
          blur: 32,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "nightfall",
      name: "Nightfall",
      category: "aura",
      mood: "cool",
      desc: "Cold blue atmosphere descending from the upper edge",
      dark: true,
      text: "#c8d9e8",
      base: "#05070a",
      grain: true,
      layers: [
        {
          background:
            "radial-gradient(85% 55% at 52% 0%, rgba(35,70,105,0.34) 0%, rgba(24,49,74,0.18) 38%, transparent 76%)",
          blendMode: "screen",
          blur: 10,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(180deg, rgba(54,88,120,0.16) 0%, transparent 45%, rgba(0,0,0,0.18) 100%)",
          blendMode: "soft-light",
          blur: 10,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(42% 35% at 78% 16%, rgba(96,130,155,0.16) 0%, transparent 78%)",
          blendMode: "screen",
          blur: 10,
          opacity: 1,
        },
      ],
    },

  {
      id: "deep-current",
      name: "Deep Current",
      category: "aura",
      mood: "cool",
      desc: "A submerged current moving horizontally through darkness",
      dark: true,
      text: "#c4e7e5",
      base: "#030707",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(90deg, transparent 0%, rgba(16,58,58,0.12) 24%, rgba(24,105,103,0.34) 52%, rgba(18,74,73,0.18) 72%, transparent 100%)",
          blendMode: "screen",
          blur: 65,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(70% 28% at 54% 62%, rgba(34,124,120,0.28) 0%, rgba(20,68,67,0.13) 48%, transparent 82%)",
          blendMode: "screen",
          blur: 48,
          opacity: 0.9,
        },
        {
          background:
            "linear-gradient(90deg, transparent 30%, rgba(75,158,153,0.08) 52%, transparent 72%)",
          blendMode: "overlay",
          blur: 24,
          opacity: 0.7,
        },
      ],
    },

  {
      id: "smokeveil",
      name: "Smokeveil",
      category: "aura",
      mood: "cool",
      desc: "A translucent veil of blue-green smoke crossing the frame",
      dark: true,
      text: "#c8e2df",
      base: "#050706",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(155deg, transparent 8%, rgba(30,75,68,0.12) 28%, rgba(45,112,99,0.25) 43%, rgba(23,65,59,0.18) 59%, transparent 82%)",
          blendMode: "screen",
          blur: 70,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(70% 42% at 45% 50%, rgba(40,111,99,0.25) 0%, rgba(20,61,55,0.12) 48%, transparent 82%)",
          blendMode: "screen",
          blur: 65,
          opacity: 0.9,
        },
        {
          background:
            "linear-gradient(25deg, transparent 25%, rgba(90,151,135,0.07) 50%, transparent 75%)",
          blendMode: "soft-light",
          blur: 45,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "copper-shadow",
      name: "Copper Shadow",
      category: "aura",
      mood: "warm",
      desc: "Muted copper light slipping beneath a black veil",
      dark: true,
      text: "#ead8c8",
      base: "#0a0705",
      grain: true,
      layers: [
        {
          background:
            "radial-gradient(58% 62% at 72% 64%, rgba(127,72,39,0.32) 0%, rgba(74,43,26,0.16) 42%, transparent 80%)",
          blendMode: "screen",
          blur: 58,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(135deg, transparent 35%, rgba(160,91,45,0.20) 52%, transparent 70%)",
          blendMode: "screen",
          blur: 45,
          opacity: 0.8,
        },
        {
          background:
            "radial-gradient(28% 30% at 84% 22%, rgba(194,119,69,0.13) 0%, transparent 78%)",
          blendMode: "soft-light",
          blur: 35,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "greenflare",
      name: "Greenflare",
      category: "aura",
      mood: "vivid",
      desc: "A concentrated emerald flare dissolving into black",
      dark: true,
      text: "#d4edda",
      base: "#040704",
      grain: true,
      layers: [
        {
          background:
            "radial-gradient(24% 42% at 72% 48%, rgba(48,145,76,0.38) 0%, rgba(28,83,48,0.18) 42%, transparent 82%)",
          blendMode: "screen",
          blur: 42,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(112deg, transparent 38%, rgba(47,132,74,0.18) 50%, transparent 64%)",
          blendMode: "screen",
          blur: 38,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(45% 70% at 20% 52%, rgba(24,70,38,0.14) 0%, transparent 80%)",
          blendMode: "soft-light",
          blur: 55,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "sage-phantom",
      name: "Sage Phantom",
      category: "aura",
      mood: "dark",
      desc: "Asymmetrical soft sage glow emerging from the bottom right",
      dark: true,
      text: "#a4b5b0",
      base: "#050708", // Deep black with a faint greenish tint
      grain: true,
      layers: [
        {
          background: "radial-gradient(ellipse 80% 80% at 85% 85%, rgba(135, 165, 155, 0.35) 0%, rgba(80, 110, 105, 0.15) 40%, rgba(0, 0, 0, 0) 70%)",
          blendMode: "screen",
          blur: 50,
          opacity: 1,
        },
        {
          background: "radial-gradient(ellipse 70% 50% at 65% 75%, rgba(135, 165, 155, 0.12) 0%, rgba(0, 0, 0, 0) 60%)",
          blendMode: "screen",
          blur: 60,
          opacity: 1,
        }
      ],
    },

  {
      id: "abyssal-floor",
      name: "Abyssal Floor",
      category: "aura",
      mood: "dark",
      desc: "Deep cyan glow rising exclusively from the absolute black floor",
      dark: true,
      text: "#00e5ff",
      base: "#000000", // Pure black for contrast
      grain: true,
      layers: [
        {
          background: "radial-gradient(ellipse 120% 70% at 50% 110%, rgba(0, 90, 110, 0.8) 0%, rgba(0, 45, 60, 0.5) 40%, rgba(0, 0, 0, 0) 75%)",
          blendMode: "screen",
          blur: 50,
          opacity: 1,
        },
        {
          background: "linear-gradient(to top, rgba(0, 130, 150, 0.25) 0%, rgba(0, 0, 0, 0) 35%)",
          blendMode: "screen",
          blur: 20,
          opacity: 1,
        }
      ],
    },

  {
      id: "phantom-arc",
      name: "Phantom Arc",
      category: "aura",
      mood: "dark",
      desc: "Deep black void with an expansive electric blue neon arc and an ultra-thin sand rose bottom edge",
      dark: true,
      text: "#e0e8ff",
      base: "#000000",
      layers: [
        {
          background: "radial-gradient(ellipse 120% 145% at 50% -50%, rgba(0,0,0,0) 60%, rgb(12,24,210) 78%, rgba(0,0,0,0) 85%)",
          blendMode: "screen",
          blur: 20,
          opacity: 1,
        },
        {
          background: "radial-gradient(ellipse 120% 145% at 50% -50%, rgba(0,0,0,0) 55%, rgba(12,24,210,0.4) 80%, rgba(0,0,0,0) 100%)",
          blendMode: "screen",
          blur: 70,
          opacity: 0.9,
        },
        {
          background: "radial-gradient(ellipse 120% 145% at 50% -50%, rgba(0,0,0,0) 83.5%, #c8a8a6 84.5%, rgba(0,0,0,0) 85.5%)",
          blendMode: "lighten",
          blur: 20,
          opacity: 0.8,
        }
      ],
    },

  {
      id: "vercel-edge-glow",
      name: "Vercel Edge",
      category: "aura",
      mood: "dark",
      desc: "Deep tech aesthetic with a stark silver-white arc fading into a sharp cyberpunk violet edge",
      dark: true,
      text: "#ffffff",
      base: "#000000",
      layers: [
        {
          background: "radial-gradient(ellipse 120% 145% at 50% -50%, rgba(0,0,0,0) 58%, rgb(240,240,245) 76%, rgba(0,0,0,0) 84%)",
          blendMode: "screen",
          blur: 25,
          opacity: 0.9,
        },
        {
          background: "radial-gradient(ellipse 120% 145% at 50% -50%, rgba(0,0,0,0) 50%, rgba(121,42,242,0.35) 78%, rgba(0,0,0,0) 100%)",
          blendMode: "screen",
          blur: 80,
          opacity: 1,
        },
        {
          background: "radial-gradient(ellipse 120% 145% at 50% -50%, rgba(0,0,0,0) 82.5%, #ff007a 83.5%, rgba(0,0,0,0) 84.5%)",
          blendMode: "lighten",
          blur: 12,
          opacity: 0.75,
        }
      ],
    },
]
