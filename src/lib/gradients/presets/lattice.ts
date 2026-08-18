import type { Gradient } from "../types"

export const LATTICE_PRESETS: Gradient[] = [
  {
      id: "aurora-beams",
      name: "Aurora Beams",
      category: "lattice",
      mood: "cool",
      desc: "Diagonal repeating light beams heavily blurred with a teal base glow",
      dark: true,
      text: "#ffffff",
      base: "#0a0a0a",
      grain: true,
      layers: [
        {
          background:
            "radial-gradient(55.8% 55.49% at 50% 100%, rgb(38, 77, 76) 0%, rgba(25, 48, 47, 0) 100%)",
          blendMode: "screen",
          blur: 0,
          opacity: 1,
        },
  
        {
          background: `
          repeating-linear-gradient(
            100deg,
            #262626 0%,
            #262626 3%,
            rgba(38, 38, 38, 0.7) 5%,
            rgba(38, 38, 38, 0.7) 7%,
            transparent 10%,
            transparent 12%,
            rgba(38, 38, 38, 0.7) 14%,
            #262626 16%
          ),
          repeating-linear-gradient(
            100deg,
            #9ca3af 0%,
            #9ca3af 1.5%,
            rgba(156, 163, 175, 0.8) 2%,
            #6b7280 3%,
            #6b7280 4%,
            rgba(156, 163, 175, 0.8) 4.5%,
            #9ca3af 5%
          )
        `,
          backgroundSize: "300% 200%",
          blendMode: "screen",
          blur: 30,
          opacity: 0.9,
        },
  
        {
          background:
            "radial-gradient(ellipse at 100% 100%, #ffffff 20%, #0a0a0a 80%)",
          blendMode: "multiply",
          blur: 0,
          opacity: 1,
        },
      ],
    },

  {
      id: "lattice-neon-grid",
      name: "Neon Grid",
      category: "lattice",
      mood: "vivid",
      desc: "Cyberpunk grid with neon purple glow lines",
      dark: true,
      text: "#d8b4fe",
      base: "#09090b",
      layers: [
        { background: "linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)", blendMode: "normal", blur: 0, opacity: 1, backgroundSize: "60px 60px" },
        { background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.5) 0%, transparent 50%)", blendMode: "screen", blur: 80 },
        { background: "radial-gradient(circle at 25% 75%, rgba(236,72,153,0.3) 0%, transparent 40%)", blendMode: "screen", blur: 60 },
      ],
    },

  {
      id: "chrome-inferno",
      name: "Chrome Inferno",
      category: "lattice",
      mood: "warm",
      desc: "Incandescent metallic beams cutting through total darkness",
      dark: true,
      text: "#ffffff",
      base: "#0a0000",
      grain: true,
      layers: [
        {
          background:
            "radial-gradient(55.8% 55.49% at 50% 100%, rgb(120,30,10) 0%, rgba(80,15,5,0) 100%)",
          blendMode: "screen",
          blur: 0,
          opacity: 1,
        },
        {
          background: `
            repeating-linear-gradient(
              100deg,
              #331100 0%,
              #331100 3%,
              rgba(80, 30, 10, 0.7) 5%,
              rgba(80, 30, 10, 0.7) 7%,
              transparent 10%,
              transparent 12%,
              rgba(80, 30, 10, 0.7) 14%,
              #331100 16%
            ),
            repeating-linear-gradient(
              100deg,
              #ff6b00 0%,
              #ff6b00 1.5%,
              rgba(255, 107, 0, 0.8) 2%,
              #b91c1c 3%,
              #b91c1c 4%,
              rgba(255, 107, 0, 0.8) 4.5%,
              #ff6b00 5%
            )
          `,
          backgroundSize: "300% 200%",
          blendMode: "screen",
          blur: 30,
          opacity: 0.9,
        },
        {
          background: "radial-gradient(ellipse at 100% 100%, #ffffff 20%, #0a0000 80%)",
          blendMode: "multiply",
          blur: 0,
          opacity: 1,
        },
      ],
    },

  {
      id: "diamond-storm",
      name: "Diamond Storm",
      category: "lattice",
      mood: "cool",
      desc: "Electric ice beams cutting through a glacial void",
      dark: true,
      text: "#ffffff",
      base: "#00030a",
      grain: true,
      layers: [
        {
          background:
            "radial-gradient(55.8% 55.49% at 50% 100%, rgb(20,60,120) 0%, rgba(10,30,80,0) 100%)",
          blendMode: "screen",
          blur: 0,
          opacity: 1,
        },
        {
          background: `
            repeating-linear-gradient(
              100deg,
              #041022 0%,
              #041022 3%,
              rgba(20, 60, 120, 0.7) 5%,
              rgba(20, 60, 120, 0.7) 7%,
              transparent 10%,
              transparent 12%,
              rgba(20, 60, 120, 0.7) 14%,
              #041022 16%
            ),
            repeating-linear-gradient(
              100deg,
              #b3e5ff 0%,
              #b3e5ff 1.5%,
              rgba(179, 229, 255, 0.8) 2%,
              #2563eb 3%,
              #2563eb 4%,
              rgba(179, 229, 255, 0.8) 4.5%,
              #b3e5ff 5%
            )
          `,
          backgroundSize: "300% 200%",
          blendMode: "screen",
          blur: 30,
          opacity: 0.9,
        },
        {
          background: "radial-gradient(ellipse at 100% 100%, #ffffff 20%, #00030a 80%)",
          blendMode: "multiply",
          blur: 0,
          opacity: 1,
        },
      ],
    },

  {
      id: "lattice-blueprint",
      name: "Blueprint",
      category: "lattice",
      mood: "cool",
      desc: "Technical blueprint grid with cyan highlights",
      dark: true,
      text: "#a5f3fc",
      base: "#0c1929",
      layers: [
        { background: "linear-gradient(rgba(14,165,233,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.12) 1px, transparent 1px)", blendMode: "normal", blur: 0, opacity: 1, backgroundSize: "50px 50px" },
        { background: "linear-gradient(rgba(14,165,233,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.06) 1px, transparent 1px)", blendMode: "normal", blur: 0, opacity: 1, backgroundSize: "10px 10px" },
        { background: "radial-gradient(circle at 60% 40%, rgba(6,182,212,0.35) 0%, transparent 45%)", blendMode: "screen", blur: 70 },
      ],
    },

  {
      id: "lattice-diamond-weave",
      name: "Diamond Weave",
      category: "lattice",
      mood: "warm",
      desc: "Diagonal crosshatch with golden glow",
      dark: true,
      text: "#fef3c7",
      base: "#0a0704",
      layers: [
        { background: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(245,158,11,0.08) 30px, rgba(245,158,11,0.08) 31px), repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(245,158,11,0.08) 30px, rgba(245,158,11,0.08) 31px)", blendMode: "normal", blur: 0, opacity: 1 },
        { background: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.5) 0%, transparent 45%)", blendMode: "screen", blur: 80 },
        { background: "radial-gradient(circle at 20% 80%, rgba(217,119,6,0.3) 0%, transparent 35%)", blendMode: "screen", blur: 50 },
      ],
    },

  {
      id: "lattice-dot-matrix",
      name: "Dot Matrix",
      category: "lattice",
      mood: "cool",
      desc: "Retro dot pattern with violet gradient wash",
      dark: true,
      text: "#ddd6fe",
      base: "#0f0520",
      layers: [
        { background: "radial-gradient(circle, rgba(139,92,246,0.2) 1px, transparent 1px)", blendMode: "normal", blur: 0, opacity: 1, backgroundSize: "20px 20px" },
        { background: "radial-gradient(circle at 40% 40%, rgba(124,58,237,0.6) 0%, transparent 50%)", blendMode: "screen", blur: 70 },
        { background: "radial-gradient(circle at 70% 65%, rgba(168,85,247,0.4) 0%, transparent 40%)", blendMode: "screen", blur: 55 },
      ],
    },

  {
      id: "lattice-mono-grid",
      name: "Mono Grid",
      category: "lattice",
      mood: "cool",
      desc: "Minimal grayscale grid with soft steel glow",
      dark: true,
      text: "#c7ccd1",
      base: "#0b0b0c",
      layers: [
        { background: "linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)", blendMode: "normal", blur: 0, opacity: 1, backgroundSize: "50px 50px" },
        { background: "radial-gradient(circle at 50% 50%, rgba(148,163,184,0.3) 0%, transparent 50%)", blendMode: "screen", blur: 80 },
        { background: "radial-gradient(circle at 25% 75%, rgba(203,213,225,0.2) 0%, transparent 40%)", blendMode: "screen", blur: 60 },
      ],
    },

  {
      id: "lattice-star-grid",
      name: "Star Grid",
      category: "lattice",
      mood: "cool",
      desc: "Fine grid over deep marine blue, speckled with bright dots",
      dark: true,
      text: "#dbe4ff",
      base: "#05060f",
      layers: [
        {
          background: "linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)",
          blendMode: "normal",
          blur: 0,
          opacity: 1,
          backgroundSize: "45px 45px",
        },
        { background: "radial-gradient(circle at 50% 45%, rgba(99,102,241,0.35) 0%, transparent 50%)", blendMode: "screen", blur: 80 },
        {
          background: `
            radial-gradient(circle at 15% 20%, rgba(255,255,255,0.9) 1.5px, transparent 4px),
            radial-gradient(circle at 78% 15%, rgba(199,210,254,0.9) 1.5px, transparent 4px),
            radial-gradient(circle at 88% 60%, rgba(255,255,255,0.8) 1.5px, transparent 4px),
            radial-gradient(circle at 30% 75%, rgba(255,255,255,0.8) 1.5px, transparent 4px),
            radial-gradient(circle at 55% 85%, rgba(199,210,254,0.9) 1.5px, transparent 4px)
          `,
          blendMode: "screen",
          blur: 0,
          opacity: 1,
        },
      ],
    },

  {
      id: "lattice-hex-flow",
      name: "Hex Flow",
      category: "lattice",
      mood: "cool",
      desc: "Soft hexagonal lattice dissolving into cyan atmospheric light",
      dark: true,
      text: "#cffafe",
      base: "#02080b",
      layers: [
        {
          background:
            "linear-gradient(30deg, transparent 48%, rgba(34,211,238,0.10) 49%, rgba(34,211,238,0.10) 51%, transparent 52%), linear-gradient(90deg, transparent 48%, rgba(34,211,238,0.07) 49%, rgba(34,211,238,0.07) 51%, transparent 52%)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.8,
          backgroundSize: "52px 30px",
        },
        {
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(34,211,238,0.32) 0%, rgba(14,116,144,0.10) 48%, transparent 78%)",
          blendMode: "screen",
          blur: 70,
        },
        {
          background:
            "radial-gradient(circle at 20% 75%, rgba(45,212,191,0.18) 0%, transparent 38%)",
          blendMode: "screen",
          blur: 50,
        },
      ],
    },

  {
      id: "lattice-topographic",
      name: "Topographic",
      category: "lattice",
      mood: "cool",
      desc: "Layered contour lines flowing like a luminous terrain map",
      dark: true,
      text: "#d1fae5",
      base: "#030908",
      layers: [
        {
          background:
            "repeating-radial-gradient(ellipse at 40% 50%, transparent 0px, transparent 18px, rgba(52,211,153,0.10) 19px, rgba(52,211,153,0.10) 20px, transparent 21px, transparent 38px)",
          blendMode: "normal",
          blur: 1,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 55% 45% at 40% 48%, rgba(16,185,129,0.28) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 60,
        },
        {
          background:
            "radial-gradient(ellipse 35% 30% at 75% 30%, rgba(34,211,238,0.18) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 50,
        },
      ],
    },

  {
      id: "lattice-circuit",
      name: "Circuit",
      category: "lattice",
      mood: "vivid",
      desc: "Minimal electronic traces illuminated by electric blue",
      dark: true,
      text: "#bfdbfe",
      base: "#04070d",
      layers: [
        {
          background:
            "linear-gradient(90deg, transparent 49%, rgba(59,130,246,0.14) 49%, rgba(59,130,246,0.14) 51%, transparent 51%), linear-gradient(0deg, transparent 49%, rgba(59,130,246,0.10) 49%, rgba(59,130,246,0.10) 51%, transparent 51%)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.7,
          backgroundSize: "80px 80px",
        },
        {
          background:
            "radial-gradient(circle at 25% 25%, rgba(96,165,250,0.65) 0%, rgba(59,130,246,0.12) 8%, transparent 22%), radial-gradient(circle at 75% 65%, rgba(34,211,238,0.55) 0%, transparent 22%)",
          blendMode: "screen",
          blur: 20,
        },
        {
          background:
            "linear-gradient(135deg, transparent 35%, rgba(59,130,246,0.12) 50%, transparent 65%)",
          blendMode: "screen",
          blur: 45,
        },
      ],
    },

  {
      id: "lattice-diamond-field",
      name: "Diamond Field",
      category: "lattice",
      mood: "vivid",
      desc: "Fine diamond lattice floating over a violet atmospheric field",
      dark: true,
      text: "#ede9fe",
      base: "#08050f",
      layers: [
        {
          background:
            "repeating-linear-gradient(45deg, transparent 0, transparent 24px, rgba(167,139,250,0.10) 25px, transparent 26px), repeating-linear-gradient(-45deg, transparent 0, transparent 24px, rgba(167,139,250,0.10) 25px, transparent 26px)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.85,
        },
        {
          background:
            "radial-gradient(ellipse 55% 55% at 48% 45%, rgba(139,92,246,0.34) 0%, rgba(91,33,182,0.10) 50%, transparent 78%)",
          blendMode: "screen",
          blur: 70,
        },
        {
          background:
            "radial-gradient(circle at 78% 22%, rgba(236,72,153,0.20) 0%, transparent 35%)",
          blendMode: "screen",
          blur: 50,
        },
      ],
    },

  {
      id: "lattice-radar",
      name: "Radar",
      category: "lattice",
      mood: "cool",
      desc: "Concentric scanning rings with a subtle electromagnetic glow",
      dark: true,
      text: "#a7f3d0",
      base: "#020807",
      layers: [
        {
          background:
            "repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 24px, rgba(52,211,153,0.11) 25px, transparent 26px)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.9,
        },
        {
          background:
            "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(52,211,153,0.16) 28deg, transparent 48deg, transparent 360deg)",
          blendMode: "screen",
          blur: 12,
          opacity: 0.8,
        },
        {
          background:
            "radial-gradient(circle at 50% 50%, rgba(52,211,153,0.28) 0%, transparent 48%)",
          blendMode: "screen",
          blur: 65,
        },
      ],
    },

  {
      id: "lattice-microdots",
      name: "Microdots",
      category: "lattice",
      mood: "cool",
      desc: "Ultra-fine dot matrix fading into a soft blue atmosphere",
      dark: true,
      text: "#dbeafe",
      base: "#05070c",
      layers: [
        {
          background:
            "radial-gradient(circle, rgba(147,197,253,0.16) 1px, transparent 1.5px)",
          blendMode: "normal",
          blur: 0,
          opacity: 1,
          backgroundSize: "14px 14px",
        },
        {
          background:
            "radial-gradient(ellipse 65% 50% at 50% 45%, rgba(59,130,246,0.26) 0%, transparent 75%)",
          blendMode: "screen",
          blur: 65,
        },
        {
          background:
            "radial-gradient(circle at 80% 25%, rgba(125,211,252,0.22) 0%, transparent 30%)",
          blendMode: "screen",
          blur: 45,
        },
      ],
    },

  {
      id: "lattice-wave-grid",
      name: "Wave Grid",
      category: "lattice",
      mood: "vivid",
      desc: "Curved interference lines creating a fluid geometric surface",
      dark: true,
      text: "#cffafe",
      base: "#030609",
      layers: [
        {
          background:
            "repeating-linear-gradient(100deg, transparent 0%, transparent 7%, rgba(34,211,238,0.08) 7.5%, transparent 8%, transparent 15%)",
          blendMode: "normal",
          blur: 3,
          opacity: 0.9,
          backgroundSize: "100% 42px",
        },
        {
          background:
            "repeating-linear-gradient(80deg, transparent 0%, transparent 9%, rgba(59,130,246,0.07) 9.5%, transparent 10%, transparent 18%)",
          blendMode: "screen",
          blur: 5,
          opacity: 0.8,
          backgroundSize: "100% 55px",
        },
        {
          background:
            "radial-gradient(ellipse 65% 35% at 50% 52%, rgba(6,182,212,0.28) 0%, transparent 75%)",
          blendMode: "screen",
          blur: 65,
        },
      ],
    },

  {
      id: "lattice-honeycomb",
      name: "Honeycomb",
      category: "lattice",
      mood: "warm",
      desc: "Hexagonal amber structure with a restrained golden glow",
      dark: true,
      text: "#fef3c7",
      base: "#0a0703",
      layers: [
        {
          background:
            "repeating-linear-gradient(30deg, transparent 0, transparent 25px, rgba(245,158,11,0.09) 26px, transparent 27px), repeating-linear-gradient(150deg, transparent 0, transparent 25px, rgba(245,158,11,0.09) 26px, transparent 27px)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 55% 48% at 50% 48%, rgba(245,158,11,0.30) 0%, rgba(180,83,9,0.08) 50%, transparent 76%)",
          blendMode: "screen",
          blur: 65,
        },
        {
          background:
            "radial-gradient(circle at 25% 75%, rgba(251,191,36,0.18) 0%, transparent 35%)",
          blendMode: "screen",
          blur: 45,
        },
      ],
    },

  {
      id: "lattice-constellation",
      name: "Constellation",
      category: "lattice",
      mood: "cool",
      desc: "Sparse geometric network connecting luminous points",
      dark: true,
      text: "#dbeafe",
      base: "#03050c",
      layers: [
        {
          background:
            "linear-gradient(28deg, transparent 48%, rgba(129,140,248,0.08) 49%, transparent 50%), linear-gradient(142deg, transparent 48%, rgba(96,165,250,0.08) 49%, transparent 50%)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.8,
          backgroundSize: "90px 90px",
        },
        {
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.85) 1px, transparent 3px), radial-gradient(circle at 65% 22%, rgba(191,219,254,0.8) 1.5px, transparent 4px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.75) 1px, transparent 3px), radial-gradient(circle at 35% 78%, rgba(165,180,252,0.8) 1.5px, transparent 4px)",
          blendMode: "screen",
          blur: 0,
          opacity: 1,
        },
        {
          background:
            "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(99,102,241,0.22) 0%, transparent 75%)",
          blendMode: "screen",
          blur: 70,
        },
      ],
    },

  {
      id: "lattice-prism-mesh",
      name: "Prism Mesh",
      category: "lattice",
      mood: "vivid",
      desc: "Angular mesh illuminated by cyan, violet and magenta refractions",
      dark: true,
      text: "#f0f9ff",
      base: "#07060c",
      layers: [
        {
          background:
            "repeating-linear-gradient(60deg, transparent 0, transparent 38px, rgba(34,211,238,0.08) 39px, transparent 40px), repeating-linear-gradient(120deg, transparent 0, transparent 38px, rgba(167,139,250,0.08) 39px, transparent 40px)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 50% 45% at 35% 45%, rgba(34,211,238,0.28) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 60,
        },
        {
          background:
            "radial-gradient(ellipse 45% 50% at 70% 55%, rgba(217,70,239,0.24) 0%, transparent 70%)",
          blendMode: "screen",
          blur: 65,
        },
      ],
    },

  {
      id: "lattice-scanlines",
      name: "Scanlines",
      category: "lattice",
      mood: "vivid",
      desc: "Fine horizontal scanlines over a subtle cybernetic glow",
      dark: true,
      text: "#bae6fd",
      base: "#03070a",
      layers: [
        {
          background:
            "repeating-linear-gradient(0deg, rgba(56,189,248,0.09) 0px, rgba(56,189,248,0.09) 1px, transparent 1px, transparent 6px)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.8,
        },
        {
          background:
            "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.14) 45%, rgba(59,130,246,0.18) 55%, transparent 100%)",
          blendMode: "screen",
          blur: 35,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.24) 0%, transparent 52%)",
          blendMode: "screen",
          blur: 65,
        },
      ],
    },

  {
      id: "lattice-moire",
      name: "Moiré",
      category: "lattice",
      mood: "vivid",
      desc: "Overlapping fine waves producing a hypnotic moiré surface",
      dark: true,
      text: "#e0e7ff",
      base: "#06070c",
      layers: [
        {
          background:
            "repeating-linear-gradient(15deg, transparent 0, transparent 9px, rgba(129,140,248,0.09) 10px, transparent 11px)",
          blendMode: "normal",
          blur: 1,
          opacity: 0.9,
        },
        {
          background:
            "repeating-linear-gradient(165deg, transparent 0, transparent 11px, rgba(34,211,238,0.07) 12px, transparent 13px)",
          blendMode: "screen",
          blur: 1,
          opacity: 0.8,
        },
        {
          background:
            "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(99,102,241,0.22) 0%, transparent 75%)",
          blendMode: "screen",
          blur: 70,
        },
      ],
    },

  {
      id: "lattice-celestial",
      name: "Celestial Lattice",
      category: "lattice",
      mood: "cool",
      desc: "Fine celestial geometry fading into a deep cosmic blue",
      dark: true,
      text: "#e0e7ff",
      base: "#030510",
      layers: [
        {
          background:
            "linear-gradient(rgba(129,140,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.07) 1px, transparent 1px)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.8,
          backgroundSize: "36px 36px",
        },
        {
          background:
            "radial-gradient(circle at 50% 45%, rgba(79,70,229,0.28) 0%, transparent 65%)",
          blendMode: "screen",
          blur: 75,
        },
        {
          background:
            "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.9) 1px, transparent 3px), radial-gradient(circle at 78% 32%, rgba(191,219,254,0.8) 1px, transparent 3px), radial-gradient(circle at 62% 78%, rgba(255,255,255,0.75) 1px, transparent 3px)",
          blendMode: "screen",
          blur: 0,
          opacity: 0.9,
        },
      ],
    },

  {
      id: "lattice-aurora-grid",
      name: "Aurora Grid",
      category: "lattice",
      mood: "cool",
      desc: "Fine geometric grid submerged beneath an emerald and cyan aurora",
      dark: true,
      text: "#dcfff6",
      base: "#020706",
      layers: [
        {
          background:
            "linear-gradient(rgba(52,211,153,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.7,
          backgroundSize: "55px 55px",
        },
        {
          background:
            "linear-gradient(145deg, transparent 25%, rgba(16,185,129,0.18) 40%, rgba(34,211,238,0.24) 50%, rgba(52,211,153,0.12) 60%, transparent 76%)",
          blendMode: "screen",
          blur: 42,
          opacity: 0.9,
        },
        {
          background:
            "radial-gradient(ellipse 70% 25% at 50% 52%, rgba(94,234,212,0.22) 0%, transparent 78%)",
          blendMode: "screen",
          blur: 45,
        },
        {
          background:
            "radial-gradient(ellipse 35% 22% at 72% 25%, rgba(129,140,248,0.10) 0%, transparent 75%)",
          blendMode: "screen",
          blur: 50,
        },
      ],
    },

  {
      id: "lattice-light-weave",
      name: "Light Weave",
      category: "lattice",
      mood: "cool",
      desc: "Delicate grid on soft blue with subtle glow",
      dark: false,
      cardText: "#000000",
      text: "#1e3a5f",
      base: "#f0f9ff",
      layers: [
        { background: "linear-gradient(rgba(14,165,233,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.08) 1px, transparent 1px)", blendMode: "normal", blur: 0, opacity: 1, backgroundSize: "40px 40px" },
        { background: "radial-gradient(circle at 50% 50%, rgba(56,189,248,0.25) 0%, transparent 50%)", blendMode: "normal", blur: 60 },
        { background: "radial-gradient(circle at 30% 70%, rgba(99,102,241,0.15) 0%, transparent 40%)", blendMode: "normal", blur: 50 },
      ],
    },

  {
      id: "lattice-soft-mesh",
      name: "Soft Mesh",
      category: "lattice",
      mood: "cool",
      desc: "Minimal pale mesh dissolving into an airy cyan atmosphere",
      dark: false,
      cardText: "#000000",
      text: "#164e63",
      base: "#f0fdfa",
      layers: [
        {
          background:
            "linear-gradient(rgba(20,184,166,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.08) 1px, transparent 1px)",
          blendMode: "normal",
          blur: 0,
          opacity: 0.8,
          backgroundSize: "48px 48px",
        },
        {
          background:
            "radial-gradient(ellipse 60% 45% at 48% 45%, rgba(45,212,191,0.22) 0%, transparent 75%)",
          blendMode: "normal",
          blur: 65,
        },
        {
          background:
            "radial-gradient(circle at 75% 25%, rgba(125,211,252,0.18) 0%, transparent 35%)",
          blendMode: "normal",
          blur: 50,
        },
      ],
    },
]
