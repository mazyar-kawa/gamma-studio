import type { Gradient } from "../types"

export const NEBULA_PRESETS: Gradient[] = [
  {
      id: "nebula-cosmic-dust",
      name: "Cosmic Dust",
      category: "nebula",
      mood: "vivid",
      desc: "Floating violet and cyan orbs in deep space",
      dark: true,
      text: "#e0d4ff",
      base: "#09090b",
      layers: [
        { background: "radial-gradient(ellipse 40% 50% at 25% 35%, rgba(139,92,246,0.9) 0%, transparent 70%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 35% 45% at 70% 60%, rgba(6,182,212,0.8) 0%, transparent 70%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 25% 30% at 50% 20%, rgba(244,114,182,0.5) 0%, transparent 70%)", blendMode: "screen", blur: 40 },
        { background: "radial-gradient(ellipse 20% 25% at 80% 30%, rgba(232,121,249,0.4) 0%, transparent 70%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "blood-aurora",
      name: "Blood Aurora",
      category: "nebula",
      mood: "dark",
      desc: "Crimson and gold aurora curtains burning across an absolute night sky",
      dark: true,
      text: "#ffe0d0",
      base: "#050101",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(154deg, transparent 18%, rgba(60,10,10,0.06) 29%, rgba(255,40,0,0.40) 36%, rgb(255,255,255) 42%, rgba(207,60,20,0.32) 48%, rgba(158,20,10,0.22) 55%, rgba(255,90,0,0.30) 62%, rgba(60,15,10,0.08) 68%, transparent 82%)",
          blendMode: "screen",
          blur: 34,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(128deg, transparent 28%, rgba(80,10,20,0.06) 38%, rgba(255,80,0,0.35) 43%, rgb(255,255,255) 48%, rgba(200,60,30,0.22) 52%, rgba(255,40,0,0.25) 57%, rgba(90,20,10,0.10) 62%, transparent 76%)",
          blendMode: "screen",
          blur: 30,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 78% 20% at 51% 53%, rgba(200,50,20,0.24) 0%, rgba(100,20,10,0.10) 45%, transparent 82%)",
          blendMode: "screen",
          blur: 28,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 48% 9% at 52% 50%, rgba(255,220,190,0.14) 0%, rgba(200,80,50,0.06) 45%, transparent 80%)",
          blendMode: "screen",
          blur: 70,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(to top, rgba(5,1,1,0.90) 0%, rgba(5,1,1,0.58) 28%, rgba(5,1,1,0.20) 55%, transparent 78%)",
          blendMode: "multiply",
          blur: 32,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 50% 28% at 72% 18%, rgba(150,90,20,0.10) 0%, rgba(100,60,10,0.04) 45%, transparent 82%)",
          blendMode: "screen",
          blur: 55,
          opacity: 0.7,
        },
      ],
    },

  {
      id: "void-serpent",
      name: "Void Serpent",
      category: "nebula",
      mood: "dark",
      desc: "Poisonous green and violet curtains coiling through an absolute void",
      dark: true,
      text: "#d8ffe0",
      base: "#020502",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(154deg, transparent 18%, rgba(10,60,20,0.06) 29%, rgba(140,255,20,0.40) 36%, rgb(255,255,255) 42%, rgba(110,60,200,0.32) 48%, rgba(60,150,40,0.22) 55%, rgba(160,0,255,0.30) 62%, rgba(10,50,20,0.08) 68%, transparent 82%)",
          blendMode: "screen",
          blur: 34,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(128deg, transparent 28%, rgba(15,80,30,0.06) 38%, rgba(120,0,255,0.35) 43%, rgb(255,255,255) 48%, rgba(70,200,90,0.22) 52%, rgba(150,255,20,0.25) 57%, rgba(20,90,40,0.10) 62%, transparent 76%)",
          blendMode: "screen",
          blur: 30,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 78% 20% at 51% 53%, rgba(90,200,60,0.24) 0%, rgba(40,100,30,0.10) 45%, transparent 82%)",
          blendMode: "screen",
          blur: 28,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 48% 9% at 52% 50%, rgba(220,255,220,0.14) 0%, rgba(120,80,180,0.06) 45%, transparent 80%)",
          blendMode: "screen",
          blur: 70,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(to top, rgba(2,5,2,0.90) 0%, rgba(2,5,2,0.58) 28%, rgba(2,5,2,0.20) 55%, transparent 78%)",
          blendMode: "multiply",
          blur: 32,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 50% 28% at 72% 18%, rgba(100,30,180,0.10) 0%, rgba(60,20,120,0.04) 45%, transparent 82%)",
          blendMode: "screen",
          blur: 55,
          opacity: 0.7,
        },
      ],
    },

  {
      id: "nebula-plasma",
      name: "Plasma Storm",
      category: "nebula",
      mood: "vivid",
      desc: "Electric purple and blue plasma blobs",
      dark: true,
      text: "#e8d5ff",
      base: "#09090b",
      layers: [
        { background: "radial-gradient(ellipse 50% 40% at 35% 50%, rgba(124,58,237,0.9) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 40% 50% at 65% 40%, rgba(59,130,246,0.8) 0%, transparent 60%)", blendMode: "screen", blur: 60 },
        { background: "radial-gradient(ellipse 30% 35% at 50% 75%, rgba(168,85,247,0.6) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 20% 20% at 20% 25%, rgba(96,165,250,0.4) 0%, transparent 50%)", blendMode: "screen", blur: 35 },
        { background: "radial-gradient(ellipse 15% 18% at 80% 70%, rgba(147,51,234,0.5) 0%, transparent 60%)", blendMode: "screen", blur: 30 },
      ],
    },

  {
      id: "nebula-ashen",
      name: "Ashen Nebula",
      category: "nebula",
      mood: "cool",
      desc: "Dim charcoal orbs drifting through a gray void",
      dark: true,
      text: "#c9cdd3",
      base: "#0a0a0b",
      layers: [
        { background: "radial-gradient(ellipse 42% 48% at 30% 40%, rgba(148,163,184,0.5) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 35% 40% at 68% 55%, rgba(100,116,139,0.45) 0%, transparent 60%)", blendMode: "screen", blur: 60 },
        { background: "radial-gradient(ellipse 25% 30% at 50% 80%, rgba(71,85,105,0.4) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
      ],
    },

  {
      id: "nebula-quiet-glow",
      name: "Quiet Glow",
      category: "nebula",
      mood: "cool",
      desc: "A single soft cyan presence floating in darkness",
      dark: true,
      text: "#c8e7e6",
      base: "#050707",
      grain: true,
      layers: [
        {
          background: "radial-gradient(ellipse 42% 48% at 68% 48%, rgba(45,140,137,0.34) 0%, rgba(25,76,75,0.16) 42%, transparent 78%)",
          blendMode: "screen",
          blur: 55,
          opacity: 1,
        },
        {
          background: "radial-gradient(ellipse 20% 24% at 66% 48%, rgba(78,166,161,0.12) 0%, transparent 72%)",
          blendMode: "screen",
          blur: 28,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "nebula-moonlit",
      name: "Moonlit",
      category: "nebula",
      mood: "cool",
      desc: "A pale blue glow fading into a midnight void",
      dark: true,
      text: "#d6e1ef",
      base: "#05070a",
      grain: true,
      layers: [
        {
          background: "radial-gradient(ellipse 38% 42% at 76% 30%, rgba(105,135,165,0.26) 0%, rgba(57,79,103,0.12) 45%, transparent 78%)",
          blendMode: "screen",
          blur: 10,
          opacity: 1,
        },
        {
          background: "radial-gradient(ellipse 18% 20% at 76% 30%, rgba(180,198,214,0.10) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 15,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "nebula-emberveil",
      name: "Emberveil",
      category: "nebula",
      mood: "warm",
      desc: "A muted ember drifting behind a dark veil",
      dark: true,
      text: "#ead4c2",
      base: "#090604",
      grain: true,
      layers: [
        {
          background: "radial-gradient(ellipse 45% 50% at 28% 62%, rgba(143,77,39,0.28) 0%, rgba(79,45,27,0.13) 45%, transparent 80%)",
          blendMode: "screen",
          blur: 60,
          opacity: 1,
        },
        {
          background: "radial-gradient(ellipse 18% 22% at 31% 60%, rgba(211,119,58,0.13) 0%, transparent 72%)",
          blendMode: "screen",
          blur: 30,
          opacity: 0.75,
        },
      ],
    },

  {
      id: "nebula-dew",
      name: "Dew",
      category: "nebula",
      mood: "cool",
      desc: "Tiny turquoise atmosphere suspended in deep black",
      dark: true,
      text: "#c8ebe8",
      base: "#040707",
      grain: true,
      layers: [
        {
          background: "radial-gradient(ellipse 28% 32% at 32% 34%, rgba(36,125,119,0.30) 0%, rgba(22,66,64,0.13) 45%, transparent 78%)",
          blendMode: "screen",
          blur: 40,
          opacity: 1,
        },
        {
          background: "radial-gradient(ellipse 16% 18% at 32% 34%, rgba(82,169,160,0.14) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 22,
          opacity: 0.8,
        },
        {
          background: "radial-gradient(ellipse 24% 28% at 78% 72%, rgba(25,91,89,0.16) 0%, transparent 78%)",
          blendMode: "screen",
          blur: 40,
          opacity: 0.7,
        },
      ],
    },

  {
      id: "nebula-boreal",
      name: "Boreal",
      category: "nebula",
      mood: "cool",
      desc: "A restrained northern green haze in a black void",
      dark: true,
      text: "#d0ebe0",
      base: "#040706",
      grain: true,
      layers: [
        {
          background: "radial-gradient(ellipse 46% 52% at 62% 42%, rgba(35,112,78,0.27) 0%, rgba(22,65,49,0.13) 45%, transparent 80%)",
          blendMode: "screen",
          blur: 10,
          opacity: 1,
        },
        {
          background: "linear-gradient(125deg, transparent 35%, rgba(55,137,99,0.10) 52%, transparent 68%)",
          blendMode: "soft-light",
          blur: 30,
          opacity: 0.8,
        },
      ],
    },

  {
      id: "vercel-core",
      name: "Vercel Core",
      category: "nebula",
      mood: "dark",
      desc: "A stark monochromatic Vercel beam fracturing into a deep cloud indigo ambient glow",
      dark: true,
      text: "#ffffff",
      base: "#000000",
      grain: true,
      layers: [
        {
          background: "linear-gradient(145deg, transparent 25%, rgba(255,255,255,0.04) 35%, rgba(240,240,245,0.18) 45%, rgba(121,42,242,0.1) 55%, transparent 65%)",
          blendMode: "screen",
          blur: 20,
          opacity: 1,
        },
        {
          background: "radial-gradient(ellipse 85% 25% at 50% 48%, rgba(121,42,242,0.22) 0%, rgba(26,19,92,0.08) 50%, transparent 85%)",
          blendMode: "screen",
          blur: 35,
          opacity: 0.9,
        },
        {
          background: "linear-gradient(145deg, transparent 44.5%, rgba(255,255,255,0.4) 45%, transparent 45.5%)",
          blendMode: "lighten",
          blur: 8,
          opacity: 0.7,
        }
      ],
    },

  {
      id: "nebula-silk",
      name: "Silk",
      category: "nebula",
      mood: "cool",
      desc: "A thin atmospheric ribbon softly crossing the void",
      dark: true,
      text: "#cbe6e4",
      base: "#040707",
      grain: true,
      layers: [
        {
          background: "linear-gradient(154deg, transparent 28%, rgba(31,103,99,0.08) 38%, rgba(48,137,130,0.22) 48%, rgba(25,78,75,0.12) 56%, transparent 68%)",
          blendMode: "screen",
          blur: 30,
          opacity: 1,
        },
        {
          background: "radial-gradient(ellipse 70% 18% at 50% 52%, rgba(38,116,111,0.20) 0%, rgba(20,61,59,0.08) 48%, transparent 82%)",
          blendMode: "screen",
          blur: 25,
          opacity: 0.85,
        },
      ],
    },

  {
      id: "aurora-borealis",
      name: "Aurora Borealis",
      category: "nebula",
      mood: "vivid",
      desc: "Layered emerald and cyan aurora curtains drifting across a midnight sky",
      dark: true,
      text: "#e1fff6",
      base: "#020509",
      grain: true,
      layers: [
        {
          background:
            "linear-gradient(154deg, transparent 18%, rgba(12,72,61,0.06) 29%, rgba(0,229,255,0.40) 36%, rgb(255,255,255) 42%, rgba(73,207,158,0.32) 48%, rgba(38,158,119,0.22) 55%, rgba(0,183,255,0.30) 62%, rgba(15,76,65,0.08) 68%, transparent 82%)",
          blendMode: "screen",
          blur: 34,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(128deg, transparent 28%, rgba(15,82,96,0.06) 38%, rgba(0,183,255,0.35) 43%, rgb(255,255,255) 48%, rgba(68,197,185,0.22) 52%, rgba(0,229,255,0.25) 57%, rgba(25,105,112,0.10) 62%, transparent 76%)",
          blendMode: "screen",
          blur: 30,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 78% 20% at 51% 53%, rgba(65,183,155,0.24) 0%, rgba(30,102,91,0.10) 45%, transparent 82%)",
          blendMode: "screen",
          blur: 28,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 48% 9% at 52% 50%, rgba(190,255,226,0.14) 0%, rgba(91,195,163,0.06) 45%, transparent 80%)",
          blendMode: "screen",
          blur: 70,
          opacity: 1,
        },
        {
          background:
            "linear-gradient(to top, rgba(1,5,13,0.90) 0%, rgba(2,7,16,0.58) 28%, rgba(3,9,20,0.20) 55%, transparent 78%)",
          blendMode: "multiply",
          blur: 32,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 50% 28% at 72% 18%, rgba(89,62,151,0.10) 0%, rgba(57,44,100,0.04) 45%, transparent 82%)",
          blendMode: "screen",
          blur: 55,
          opacity: 0.7,
        },
      ],
    },

  {
      id: "deep-cosmos",
      name: "Deep Cosmos",
      category: "nebula",
      mood: "cool",
      desc: "Deep purple abyss with stellar glows and distant twinkling stars",
      dark: true,
      text: "#ffffff",
      base: "#0F0F12",
      layers: [
        {
          background: "linear-gradient(180deg, #0F0F12 0%, rgba(76, 29, 149, 0.5) 50%, rgba(109, 40, 217, 0.7) 100%)",
          blendMode: "normal",
          blur: 0,
          opacity: 1,
        },
        {
          background: "radial-gradient(ellipse at 50% 115%, rgba(147, 51, 234, 0.55) 0%, rgba(109, 40, 217, 0.2) 60%, transparent 80%)",
          blendMode: "screen",
          blur: 120,
          opacity: 1,
        },
        {
          background: "radial-gradient(circle at 100% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 40%)",
          blendMode: "screen",
          blur: 100,
          opacity: 1,
        },
        {
          background: `
            radial-gradient(circle at 12% 18%, rgba(255,255,255,0.8) 1px, transparent 3px),
            radial-gradient(circle at 78% 14%, rgba(250,232,255,0.9) 1.5px, transparent 4px),
            radial-gradient(circle at 88% 44%, rgba(255,255,255,0.7) 1px, transparent 3px),
            radial-gradient(circle at 18% 58%, rgba(233,213,255,1) 1.5px, transparent 4px),
            radial-gradient(circle at 6% 40%, rgba(255,255,255,0.6) 1px, transparent 3px),
            radial-gradient(circle at 68% 6%, rgba(250,232,255,0.8) 1px, transparent 3px)
          `,
          blendMode: "screen",
          blur: 0,
          opacity: 1,
        }
      ],
    },

  {
      id: "starlit-abyss",
      name: "Starlit Abyss",
      category: "nebula",
      mood: "cool",
      desc: "Indigo void with a distant glow and scattered stars",
      dark: true,
      text: "#e0e4ff",
      base: "#06060c",
      layers: [
        {
          background:
            "linear-gradient(180deg, #06060c 0%, rgba(30,27,75,0.5) 50%, rgba(49,46,129,0.6) 100%)",
          blendMode: "normal",
          blur: 0,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(ellipse at 50% 115%, rgba(79,70,229,0.55) 0%, rgba(49,46,129,0.15) 60%, transparent 80%)",
          blendMode: "screen",
          blur: 120,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(circle at 15% 20%, rgba(56,189,248,0.15) 0%, transparent 40%)",
          blendMode: "screen",
          blur: 100,
          opacity: 1,
        },
        {
          background: `
            radial-gradient(circle at 10% 15%, rgba(255,255,255,0.8) 1px, transparent 3px),
            radial-gradient(circle at 82% 10%, rgba(199,210,254,0.9) 1.5px, transparent 4px),
            radial-gradient(circle at 90% 48%, rgba(255,255,255,0.7) 1px, transparent 3px),
            radial-gradient(circle at 22% 62%, rgba(224,231,255,1) 1.5px, transparent 4px),
            radial-gradient(circle at 5% 45%, rgba(255,255,255,0.6) 1px, transparent 3px),
            radial-gradient(circle at 65% 8%, rgba(199,210,254,0.8) 1px, transparent 3px)
          `,
          blendMode: "screen",
          blur: 0,
          opacity: 1,
        },
      ],
    },

  {
      id: "stardust-halo",
      name: "Stardust Halo",
      category: "nebula",
      mood: "vivid",
      desc: "Magenta halo glowing through a field of distant stars",
      dark: true,
      text: "#ffe4f5",
      base: "#0a0612",
      layers: [
        {
          background:
            "linear-gradient(180deg, #0a0612 0%, rgba(76,29,90,0.5) 50%, rgba(157,23,138,0.5) 100%)",
          blendMode: "normal",
          blur: 0,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(ellipse at 50% 110%, rgba(232,121,249,0.55) 0%, rgba(157,23,138,0.15) 60%, transparent 80%)",
          blendMode: "screen",
          blur: 120,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(circle at 80% 20%, rgba(244,114,182,0.2) 0%, transparent 40%)",
          blendMode: "screen",
          blur: 100,
          opacity: 1,
        },
        {
          background: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 1px, transparent 3px),
            radial-gradient(circle at 70% 12%, rgba(250,232,255,0.9) 1.5px, transparent 4px),
            radial-gradient(circle at 88% 55%, rgba(255,255,255,0.7) 1px, transparent 3px),
            radial-gradient(circle at 12% 60%, rgba(233,213,255,1) 1.5px, transparent 4px),
            radial-gradient(circle at 40% 8%, rgba(255,255,255,0.6) 1px, transparent 3px)
          `,
          blendMode: "screen",
          blur: 0,
          opacity: 1,
        },
      ],
    },

  {
      id: "galactic-bloom",
      name: "Galactic Bloom",
      category: "nebula",
      mood: "vivid",
      desc: "Teal and magenta nebula clouds drifting through stellar dust",
      dark: true,
      text: "#d4fff2",
      base: "#050810",
      layers: [
        { background: "radial-gradient(ellipse 50% 45% at 30% 40%, rgba(20,184,166,0.7) 0%, transparent 65%)", blendMode: "screen", blur: 60 },
        { background: "radial-gradient(ellipse 45% 50% at 68% 55%, rgba(232,121,249,0.6) 0%, transparent 60%)", blendMode: "screen", blur: 65 },
        { background: "radial-gradient(ellipse 30% 35% at 50% 20%, rgba(99,102,241,0.4) 0%, transparent 55%)", blendMode: "screen", blur: 50 },
        {
          background: `
            radial-gradient(circle at 14% 22%, rgba(255,255,255,0.8) 1px, transparent 3px),
            radial-gradient(circle at 76% 30%, rgba(209,250,229,0.9) 1.5px, transparent 4px),
            radial-gradient(circle at 85% 75%, rgba(255,255,255,0.7) 1px, transparent 3px),
            radial-gradient(circle at 25% 78%, rgba(250,232,255,1) 1.5px, transparent 4px)
          `,
          blendMode: "screen",
          blur: 0,
          opacity: 1,
        },
      ],
    },

  {
      id: "orion-drift",
      name: "Orion Drift",
      category: "nebula",
      mood: "cool",
      desc: "Cold blue-white glow beneath a dense star field",
      dark: true,
      text: "#dbeeff",
      base: "#04070f",
      layers: [
        { background: "radial-gradient(ellipse 55% 50% at 40% 45%, rgba(56,189,248,0.6) 0%, transparent 65%)", blendMode: "screen", blur: 65 },
        { background: "radial-gradient(ellipse 40% 45% at 65% 60%, rgba(255,255,255,0.35) 0%, transparent 60%)", blendMode: "soft-light", blur: 55 },
        {
          background: `
            radial-gradient(circle at 8% 12%, rgba(255,255,255,0.9) 1px, transparent 3px),
            radial-gradient(circle at 30% 8%, rgba(255,255,255,0.7) 1px, transparent 3px),
            radial-gradient(circle at 60% 15%, rgba(199,210,254,0.9) 1.5px, transparent 4px),
            radial-gradient(circle at 85% 22%, rgba(255,255,255,0.7) 1px, transparent 3px),
            radial-gradient(circle at 92% 60%, rgba(255,255,255,0.8) 1.5px, transparent 4px),
            radial-gradient(circle at 45% 75%, rgba(199,210,254,1) 1.5px, transparent 4px),
            radial-gradient(circle at 15% 68%, rgba(255,255,255,0.6) 1px, transparent 3px)
          `,
          blendMode: "screen",
          blur: 0,
          opacity: 1,
        },
      ],
    },

  {
      id: "nebula-golden-dawn",
      name: "Golden Dawn",
      category: "nebula",
      mood: "warm",
      desc: "Solar flares condensing into molten gold spheres",
      dark: true,
      text: "#fff3cd",
      base: "#0f0800",
      layers: [
        { background: "radial-gradient(ellipse 45% 50% at 30% 40%, rgba(251,191,36,0.85) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 35% 40% at 70% 35%, rgba(234,179,8,0.7) 0%, transparent 60%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 30% 35% at 50% 75%, rgba(217,119,6,0.5) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 20% 25% at 80% 70%, rgba(180,83,9,0.35) 0%, transparent 60%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "nebula-arctic-ice",
      name: "Arctic Ice",
      category: "nebula",
      mood: "cool",
      desc: "Frozen nitrogen crystals orbiting a distant white dwarf",
      dark: true,
      text: "#cffafe",
      base: "#020a0f",
      layers: [
        { background: "radial-gradient(ellipse 40% 45% at 25% 35%, rgba(34,211,238,0.8) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 35% 40% at 65% 55%, rgba(6,182,212,0.6) 0%, transparent 60%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 25% 30% at 75% 25%, rgba(165,243,252,0.4) 0%, transparent 55%)", blendMode: "screen", blur: 40 },
        { background: "radial-gradient(ellipse 20% 22% at 45% 80%, rgba(103,232,249,0.3) 0%, transparent 50%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "nebula-witch-brew",
      name: "Witch's Brew",
      category: "nebula",
      mood: "vivid",
      desc: "Toxic green bubbles rising from a cauldron of stars",
      dark: true,
      text: "#bef264",
      base: "#050a00",
      layers: [
        { background: "radial-gradient(ellipse 42% 48% at 35% 40%, rgba(132,204,22,0.85) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 38% 42% at 70% 50%, rgba(101,163,13,0.7) 0%, transparent 60%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 28% 32% at 55% 75%, rgba(163,230,53,0.5) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 18% 20% at 20% 25%, rgba(190,242,100,0.35) 0%, transparent 50%)", blendMode: "screen", blur: 30 },
      ],
    },

  {
      id: "nebula-blood-moon",
      name: "Blood Moon",
      category: "nebula",
      mood: "dark",
      desc: "Crimson lunar eclipses casting long shadows through dust",
      dark: true,
      text: "#fecaca",
      base: "#0a0000",
      layers: [
        { background: "radial-gradient(ellipse 48% 52% at 40% 45%, rgba(220,38,38,0.9) 0%, transparent 60%)", blendMode: "screen", blur: 60 },
        { background: "radial-gradient(ellipse 35% 40% at 70% 35%, rgba(153,27,27,0.7) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 30% 35% at 25% 70%, rgba(239,68,68,0.5) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 22% 25% at 60% 80%, rgba(185,28,28,0.4) 0%, transparent 60%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "nebula-cobalt-dream",
      name: "Cobalt Dream",
      category: "nebula",
      mood: "cool",
      desc: "Deep blue orbs suspended in midnight ink",
      dark: true,
      text: "#bfdbfe",
      base: "#020617",
      layers: [
        { background: "radial-gradient(ellipse 42% 48% at 30% 40%, rgba(37,99,235,0.85) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 38% 42% at 70% 50%, rgba(29,78,216,0.7) 0%, transparent 60%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 28% 32% at 55% 75%, rgba(59,130,246,0.5) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 18% 20% at 20% 25%, rgba(96,165,250,0.3) 0%, transparent 50%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "nebula-sunset-orchid",
      name: "Sunset Orchid",
      category: "nebula",
      mood: "vivid",
      desc: "Purple and tangerine orbs colliding at the horizon",
      dark: true,
      text: "#fce7f3",
      base: "#0a0210",
      layers: [
        { background: "radial-gradient(ellipse 45% 50% at 35% 40%, rgba(168,85,247,0.85) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 35% 40% at 70% 35%, rgba(251,146,60,0.7) 0%, transparent 60%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 30% 35% at 50% 75%, rgba(192,132,252,0.5) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 20% 25% at 80% 70%, rgba(234,179,8,0.35) 0%, transparent 60%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "nebula-smoke-signal",
      name: "Smoke Signal",
      category: "nebula",
      mood: "dark",
      desc: "Gray smoke rings drifting from an extinguished star",
      dark: true,
      text: "#e5e7eb",
      base: "#0a0a0a",
      layers: [
        { background: "radial-gradient(ellipse 45% 50% at 35% 40%, rgba(75,85,99,0.6) 0%, transparent 65%)", blendMode: "screen", blur: 40 },
        { background: "radial-gradient(ellipse 38% 42% at 70% 50%, rgba(55,65,81,0.5) 0%, transparent 60%)", blendMode: "screen", blur: 30 },
        { background: "radial-gradient(ellipse 28% 32% at 55% 75%, rgba(107,114,128,0.35) 0%, transparent 55%)", blendMode: "screen", blur: 25 },
        { background: "radial-gradient(ellipse 20% 22% at 20% 25%, rgba(156,163,175,0.25) 0%, transparent 50%)", blendMode: "screen", blur: 15 },
      ],
    },

  {
      id: "nebula-coral-reef",
      name: "Coral Reef",
      category: "nebula",
      mood: "vivid",
      desc: "Living coral polyps glowing in abyssal currents",
      dark: true,
      text: "#fed7aa",
      base: "#0a0400",
      layers: [
        { background: "radial-gradient(ellipse 42% 48% at 30% 40%, rgba(249,115,22,0.8) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 36% 40% at 70% 50%, rgba(244,63,94,0.65) 0%, transparent 60%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 28% 32% at 50% 75%, rgba(251,146,60,0.45) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 18% 20% at 80% 30%, rgba(255,107,107,0.3) 0%, transparent 50%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "nebula-thunder-storm",
      name: "Thunder Storm",
      category: "nebula",
      mood: "dark",
      desc: "Electric violet thunderheads rolling through void",
      dark: true,
      text: "#ddd6fe",
      base: "#050510",
      layers: [
        { background: "radial-gradient(ellipse 48% 52% at 40% 45%, rgba(91,33,182,0.85) 0%, transparent 60%)", blendMode: "screen", blur: 60 },
        { background: "radial-gradient(ellipse 35% 40% at 70% 35%, rgba(76,29,149,0.7) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 30% 35% at 25% 70%, rgba(124,58,237,0.5) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 22% 25% at 60% 80%, rgba(139,92,246,0.35) 0%, transparent 60%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "nebula-midnight-rose",
      name: "Midnight Rose",
      category: "nebula",
      mood: "dark",
      desc: "Deep burgundy petals unfurling in eternal darkness",
      dark: true,
      text: "#fbcfe8",
      base: "#0a0005",
      layers: [
        { background: "radial-gradient(ellipse 42% 48% at 35% 40%, rgba(159,18,57,0.85) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 38% 42% at 70% 50%, rgba(190,18,60,0.7) 0%, transparent 60%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 28% 32% at 55% 75%, rgba(219,39,119,0.5) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 18% 20% at 20% 25%, rgba(244,114,182,0.3) 0%, transparent 50%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "nebula-neon-sludge",
      name: "Neon Sludge",
      category: "nebula",
      mood: "vivid",
      desc: "Toxic waste orbs glowing with unnatural intensity",
      dark: true,
      text: "#86efac",
      base: "#001a00",
      layers: [
        { background: "radial-gradient(ellipse 42% 48% at 30% 40%, rgba(34,197,94,0.9) 0%, transparent 65%)", blendMode: "screen", blur: 55 },
        { background: "radial-gradient(ellipse 36% 40% at 70% 50%, rgba(22,163,74,0.75) 0%, transparent 60%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 28% 32% at 50% 75%, rgba(74,222,128,0.55) 0%, transparent 55%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 18% 20% at 80% 30%, rgba(134,239,172,0.35) 0%, transparent 50%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "nebula-supernova",
      name: "Supernova",
      category: "nebula",
      mood: "warm",
      desc: "Explosive amber and crimson orbs",
      dark: false,
      cardText: "#000000",
      text: "#ffecd2",
      base: "#0a0502",
      layers: [
        { background: "radial-gradient(ellipse 45% 55% at 40% 45%, rgba(245,158,11,0.9) 0%, transparent 65%)", blendMode: "screen", blur: 60 },
        { background: "radial-gradient(ellipse 30% 40% at 70% 35%, rgba(239,68,68,0.7) 0%, transparent 70%)", blendMode: "screen", blur: 50 },
        { background: "radial-gradient(ellipse 35% 35% at 25% 70%, rgba(251,146,60,0.6) 0%, transparent 65%)", blendMode: "screen", blur: 45 },
        { background: "radial-gradient(ellipse 20% 20% at 60% 75%, rgba(220,38,38,0.4) 0%, transparent 70%)", blendMode: "screen", blur: 35 },
      ],
    },

  {
      id: "nebula-mint-cloud",
      name: "Mint Cloud",
      category: "nebula",
      mood: "cool",
      desc: "Ethereal teal and emerald floating spheres",
      dark: false,
      cardText: "#000000",
      text: "#064e3b",
      base: "#ecfdf5",
      layers: [
        { background: "radial-gradient(ellipse 40% 45% at 30% 40%, rgba(52,211,153,0.7) 0%, transparent 65%)", blendMode: "normal", blur: 60 },
        { background: "radial-gradient(ellipse 35% 40% at 65% 55%, rgba(20,184,166,0.5) 0%, transparent 60%)", blendMode: "normal", blur: 55 },
        { background: "radial-gradient(ellipse 25% 30% at 75% 25%, rgba(110,231,183,0.4) 0%, transparent 55%)", blendMode: "normal", blur: 50 },
      ],
    },

  {
      id: "nebula-rose-quartz",
      name: "Rose Quartz",
      category: "nebula",
      mood: "warm",
      desc: "Delicate pink and blush floating orbs",
      dark: false,
      cardText: "#000000",
      text: "#831843",
      base: "#fff1f2",
      layers: [
        { background: "radial-gradient(ellipse 45% 50% at 35% 45%, rgba(251,113,133,0.6) 0%, transparent 60%)", blendMode: "normal", blur: 65 },
        { background: "radial-gradient(ellipse 30% 35% at 70% 35%, rgba(244,114,182,0.5) 0%, transparent 55%)", blendMode: "normal", blur: 55 },
        { background: "radial-gradient(ellipse 35% 40% at 55% 75%, rgba(253,164,175,0.4) 0%, transparent 50%)", blendMode: "normal", blur: 60 },
      ],
    },

  {
      id: "nebula-peach-velvet",
      name: "Peach Velvet",
      category: "nebula",
      mood: "warm",
      desc: "Soft peach fuzz orbs floating in cream",
      dark: false,
      cardText: "#000000",
      text: "#9a3412",
      base: "#fff7ed",
      layers: [
        { background: "radial-gradient(ellipse 45% 50% at 30% 40%, rgba(251,146,60,0.6) 0%, transparent 60%)", blendMode: "normal", blur: 65 },
        { background: "radial-gradient(ellipse 35% 40% at 70% 35%, rgba(253,186,116,0.5) 0%, transparent 55%)", blendMode: "normal", blur: 55 },
        { background: "radial-gradient(ellipse 30% 35% at 50% 75%, rgba(249,115,22,0.35) 0%, transparent 50%)", blendMode: "normal", blur: 50 },
        { background: "radial-gradient(ellipse 20% 22% at 80% 65%, rgba(255,237,213,0.5) 0%, transparent 45%)", blendMode: "normal", blur: 40 },
      ],
    },

  {
      id: "nebula-lavender-fields",
      name: "Lavender Fields",
      category: "nebula",
      mood: "cool",
      desc: "Soft violet spheres blooming in twilight",
      dark: false,
      cardText: "#000000",
      text: "#581c87",
      base: "#faf5ff",
      layers: [
        { background: "radial-gradient(ellipse 45% 50% at 30% 40%, rgba(192,132,252,0.55) 0%, transparent 60%)", blendMode: "normal", blur: 65 },
        { background: "radial-gradient(ellipse 35% 40% at 70% 35%, rgba(168,85,247,0.45) 0%, transparent 55%)", blendMode: "normal", blur: 55 },
        { background: "radial-gradient(ellipse 30% 35% at 50% 75%, rgba(216,180,254,0.35) 0%, transparent 50%)", blendMode: "normal", blur: 50 },
        { background: "radial-gradient(ellipse 20% 22% at 80% 65%, rgba(233,213,255,0.4) 0%, transparent 45%)", blendMode: "normal", blur: 40 },
      ],
    },

  {
      id: "nebula-sand-dunes",
      name: "Sand Dunes",
      category: "nebula",
      mood: "warm",
      desc: "Desert mirages of heated air bending starlight",
      dark: false,
      cardText: "#000000",
      text: "#713f12",
      base: "#fefce8",
      layers: [
        { background: "radial-gradient(ellipse 45% 50% at 30% 40%, rgba(234,179,8,0.5) 0%, transparent 60%)", blendMode: "normal", blur: 65 },
        { background: "radial-gradient(ellipse 35% 40% at 70% 35%, rgba(202,138,4,0.4) 0%, transparent 55%)", blendMode: "normal", blur: 55 },
        { background: "radial-gradient(ellipse 30% 35% at 50% 75%, rgba(217,119,6,0.3) 0%, transparent 50%)", blendMode: "normal", blur: 50 },
        { background: "radial-gradient(ellipse 20% 22% at 80% 65%, rgba(251,191,36,0.25) 0%, transparent 45%)", blendMode: "normal", blur: 40 },
      ],
    },

  {
      id: "nebula-champagne-bubbles",
      name: "Champagne Bubbles",
      category: "nebula",
      mood: "warm",
      desc: "Effervescent gold spheres rising through crystal",
      dark: false,
      cardText: "#000000",
      text: "#78350f",
      base: "#fffbeb",
      layers: [
        { background: "radial-gradient(ellipse 40% 45% at 30% 40%, rgba(251,191,36,0.5) 0%, transparent 60%)", blendMode: "normal", blur: 65 },
        { background: "radial-gradient(ellipse 35% 38% at 65% 55%, rgba(253,224,71,0.4) 0%, transparent 55%)", blendMode: "normal", blur: 60 },
        { background: "radial-gradient(ellipse 25% 28% at 75% 25%, rgba(234,179,8,0.35) 0%, transparent 50%)", blendMode: "normal", blur: 50 },
        { background: "radial-gradient(ellipse 20% 22% at 45% 80%, rgba(254,240,138,0.4) 0%, transparent 45%)", blendMode: "normal", blur: 40 },
      ],
    },
]
