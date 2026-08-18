import type { Category } from "../types"
import type { NamedPreset } from "../factories"
import { FACTORY_MAP } from "../factories"
import type { Gradient } from "../types"

function g(category: Category, seeds: NamedPreset[]): Gradient[] {
  return seeds.map((seed) => FACTORY_MAP[category](seed))
}

const auraSeeds: NamedPreset[] = [
  { id: "citrus-veil", name: "Citrus Veil", desc: "Lemon haze into tangerine silk", mood: "warm", colors: ["#ffe066", "#ff9f43", "#ee5a24"] },
  { id: "lilac-steam", name: "Lilac Steam", desc: "Powder lilac dissolving into iris", mood: "cool", colors: ["#c9b6ff", "#9b7dff", "#5b4db0"] },
  { id: "seafoam-drift", name: "Seafoam Drift", desc: "Mint foam over pale aqua", mood: "cool", colors: ["#9ef7e2", "#4fd1c5", "#0ea5a4"] },
  { id: "peach-nectar", name: "Peach Nectar", desc: "Soft peach melting into apricot", mood: "warm", colors: ["#ffd3b6", "#ffb38a", "#ff7b54"] },
  { id: "ink-blossom", name: "Ink Blossom", desc: "Indigo wash with magenta bloom", mood: "vivid", colors: ["#7c5cff", "#c084fc", "#f472b6"] },
  { id: "honey-linen", name: "Honey Linen", desc: "Warm linen stained with honey", mood: "warm", colors: ["#f3e5ab", "#e0c068", "#c9a227"] },
  { id: "frosted-sage", name: "Frosted Sage", desc: "Cool sage dissolving into mist", mood: "cool", colors: ["#d4e6d4", "#8fb996", "#4a7c59"] },
  { id: "coral-tide", name: "Coral Tide", desc: "Living coral into rose quartz", mood: "warm", colors: ["#ff6f61", "#ff8b7a", "#f4a6b0"] },
  { id: "electric-dawn", name: "Electric Dawn", desc: "Cyan spark into hot magenta", mood: "vivid", colors: ["#22d3ee", "#818cf8", "#f472b6"] },
  { id: "umber-haze", name: "Umber Haze", desc: "Quiet umber into toasted clay", mood: "warm", colors: ["#c4a484", "#a67c52", "#6b4423"] },
  { id: "violet-ash", name: "Violet Ash", desc: "Muted violet on cool grey", mood: "cool", colors: ["#c4b5fd", "#8b7aa8", "#5b5370"] },
  { id: "mango-mist", name: "Mango Mist", desc: "Ripe mango fading into cream", mood: "warm", colors: ["#ffcc66", "#ffaa33", "#ff7a18"] },
  { id: "polar-silk", name: "Polar Silk", desc: "Ice blue silk over white", mood: "cool", colors: ["#dbeafe", "#7dd3fc", "#38bdf8"] },
  { id: "ruby-steam", name: "Ruby Steam", desc: "Ruby vapor into pale blush", mood: "vivid", colors: ["#fb7185", "#f43f5e", "#be123c"] },
  { id: "pistachio-glow", name: "Pistachio Glow", desc: "Soft pistachio into chartreuse", mood: "cool", colors: ["#d9f99d", "#a3e635", "#65a30d"] },
  { id: "cobalt-veil", name: "Cobalt Veil", desc: "Cobalt wash into porcelain", mood: "cool", colors: ["#60a5fa", "#3b82f6", "#1d4ed8"] },
  { id: "saffron-dust", name: "Saffron Dust", desc: "Saffron powder over cream paper", mood: "warm", colors: ["#fde68a", "#f59e0b", "#d97706"] },
  { id: "orchid-ice", name: "Orchid Ice", desc: "Frozen orchid into pale blue", mood: "vivid", colors: ["#e879f9", "#c084fc", "#67e8f9"] },
]

const meshSeeds: NamedPreset[] = [
  { id: "mesh-ember-nodes", name: "Ember Nodes", desc: "Warm nodes hovering over ash", mood: "warm", colors: ["#fb7185", "#fb923c", "#facc15", "#f97316", "#ef4444"] },
  { id: "mesh-glacier-nodes", name: "Glacier Nodes", desc: "Icy orbs drifting on pale ice", mood: "cool", colors: ["#67e8f9", "#38bdf8", "#818cf8", "#22d3ee", "#a5b4fc"] },
  { id: "mesh-neon-market", name: "Neon Market", desc: "Night-market neons overlapping", mood: "vivid", colors: ["#22d3ee", "#a3e635", "#f472b6", "#facc15", "#818cf8"], dark: true },
  { id: "mesh-dust-orbs", name: "Dust Orbs", desc: "Muted clay orbs in warm light", mood: "warm", colors: ["#e7c9a9", "#d4a373", "#c08457", "#b08968", "#a16207"] },
  { id: "mesh-lilac-field", name: "Lilac Field", desc: "Soft lilac blobs in fog", mood: "cool", colors: ["#ddd6fe", "#c4b5fd", "#a78bfa", "#818cf8", "#e9d5ff"] },
  { id: "mesh-tropic-pool", name: "Tropic Pool", desc: "Lagoon greens and aqua beads", mood: "vivid", colors: ["#2dd4bf", "#34d399", "#22d3ee", "#4ade80", "#67e8f9"] },
  { id: "mesh-ink-drops", name: "Ink Drops", desc: "Deep ink droplets on black paper", mood: "dark", colors: ["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4", "#3b82f6"], dark: true },
  { id: "mesh-amber-lanterns", name: "Amber Lanterns", desc: "Paper lanterns in dusk air", mood: "warm", colors: ["#fbbf24", "#f59e0b", "#fb923c", "#fcd34d", "#ea580c"] },
  { id: "mesh-mint-studio", name: "Mint Studio", desc: "Studio mint orbs on linen", mood: "cool", colors: ["#a7f3d0", "#6ee7b7", "#5eead4", "#99f6e4", "#34d399"] },
  { id: "mesh-blush-orbs", name: "Rose Quartz Mesh", desc: "Blush stones floating in milk", mood: "warm", colors: ["#fecdd3", "#fda4af", "#fb7185", "#f9a8d4", "#f472b6"] },
  { id: "mesh-voltage", name: "Voltage Mesh", desc: "Electric cyan colliding with violet", mood: "vivid", colors: ["#22d3ee", "#818cf8", "#c084fc", "#38bdf8", "#e879f9"], dark: true },
  { id: "mesh-olive-grove", name: "Olive Grove", desc: "Olive orbs in late sun", mood: "warm", colors: ["#bef264", "#a3e635", "#84cc16", "#ca8a04", "#65a30d"] },
  { id: "mesh-arctic-orbs", name: "Arctic Orbs", desc: "Pale arctic lights on snow", mood: "cool", colors: ["#e0f2fe", "#bae6fd", "#7dd3fc", "#a5f3fc", "#93c5fd"] },
  { id: "mesh-berry-jam", name: "Berry Jam", desc: "Crushed berry orbs in cream", mood: "vivid", colors: ["#f472b6", "#e879f9", "#fb7185", "#c026d3", "#db2777"] },
  { id: "mesh-steel-bloom", name: "Steel Bloom", desc: "Cool steel with a blue bloom", mood: "cool", colors: ["#94a3b8", "#64748b", "#38bdf8", "#cbd5e1", "#0ea5e9"] },
]

const nebulaSeeds: NamedPreset[] = [
  { id: "nebula-crimson-veil", name: "Crimson Veil", desc: "Deep crimson clouds in void", mood: "dark", colors: ["#fb7185", "#be123c", "#7f1d1d", "#f43f5e"], dark: true },
  { id: "nebula-ion-storm", name: "Ion Storm", desc: "Electric teal storm in space", mood: "vivid", colors: ["#22d3ee", "#6366f1", "#a78bfa", "#06b6d4"], dark: true },
  { id: "nebula-copper-dust", name: "Copper Dust", desc: "Copper nebula over warm black", mood: "warm", colors: ["#fb923c", "#c2410c", "#fbbf24", "#9a3412"], dark: true },
  { id: "nebula-violet-rift", name: "Violet Rift", desc: "A violet rift tearing the dark", mood: "dark", colors: ["#a78bfa", "#7c3aed", "#c026d3", "#4c1d95"], dark: true },
  { id: "nebula-emerald-gas", name: "Emerald Gas", desc: "Emerald gas clouds, slow drift", mood: "cool", colors: ["#34d399", "#059669", "#22d3ee", "#047857"], dark: true },
  { id: "nebula-rose-nova", name: "Rose Nova", desc: "A rose-colored nova remnant", mood: "vivid", colors: ["#fb7185", "#f472b6", "#c084fc", "#e11d48"], dark: true },
  { id: "nebula-cobalt-abyss", name: "Cobalt Abyss", desc: "Cobalt depths with cyan sparks", mood: "cool", colors: ["#3b82f6", "#1d4ed8", "#22d3ee", "#1e3a8a"], dark: true },
  { id: "nebula-gold-wake", name: "Gold Wake", desc: "Golden wake through dark dust", mood: "warm", colors: ["#fbbf24", "#d97706", "#f59e0b", "#92400e"], dark: true },
  { id: "nebula-mint-corona", name: "Mint Corona", desc: "Mint corona around a dark core", mood: "cool", colors: ["#5eead4", "#14b8a6", "#67e8f9", "#0f766e"], dark: true },
  { id: "nebula-magenta-fold", name: "Magenta Fold", desc: "Folded magenta gas sheets", mood: "vivid", colors: ["#e879f9", "#d946ef", "#818cf8", "#a21caf"], dark: true },
  { id: "nebula-slate-bloom", name: "Slate Bloom", desc: "Cool slate with a blue bloom", mood: "dark", colors: ["#64748b", "#334155", "#38bdf8", "#1e293b"], dark: true },
  { id: "nebula-blood-orange", name: "Blood Orange Sky", desc: "Blood-orange clouds at night", mood: "warm", colors: ["#fb923c", "#ef4444", "#f97316", "#7f1d1d"], dark: true },
  { id: "nebula-periwinkle", name: "Periwinkle Cloud", desc: "Soft periwinkle in deep space", mood: "cool", colors: ["#a5b4fc", "#818cf8", "#c4b5fd", "#4338ca"], dark: true },
  { id: "nebula-chartreuse-fog", name: "Chartreuse Fog", desc: "Toxic chartreuse fog bank", mood: "vivid", colors: ["#a3e635", "#84cc16", "#22d3ee", "#3f6212"], dark: true },
  { id: "nebula-wine-dark", name: "Wine Dark", desc: "Homeric wine-dark nebula", mood: "dark", colors: ["#9f1239", "#be123c", "#7c2d12", "#881337"], dark: true },
]

const prismSeeds: NamedPreset[] = [
  { id: "prism-solar-cut", name: "Solar Cut", desc: "A hard solar spectrum slash", mood: "warm", colors: ["#fde68a", "#fb923c", "#ef4444", "#7c2d12"] },
  { id: "prism-arctic-edge", name: "Arctic Edge", desc: "Icy spectral edge in pale light", mood: "cool", colors: ["#e0f2fe", "#7dd3fc", "#38bdf8", "#6366f1"] },
  { id: "prism-neon-slash", name: "Neon Slash", desc: "Neon spectrum on black glass", mood: "vivid", colors: ["#22d3ee", "#a3e635", "#facc15", "#f472b6", "#818cf8"], dark: true },
  { id: "prism-rose-band", name: "Rose Band", desc: "A rose-to-gold spectral band", mood: "warm", colors: ["#fecdd3", "#fb7185", "#f59e0b", "#fde68a"] },
  { id: "prism-violet-knife", name: "Violet Knife", desc: "Violet to cyan cutting angle", mood: "cool", colors: ["#c4b5fd", "#818cf8", "#22d3ee", "#67e8f9"] },
  { id: "prism-forest-refract", name: "Forest Refract", desc: "Green spectrum through canopy", mood: "cool", colors: ["#d9f99d", "#4ade80", "#14b8a6", "#1d4ed8"] },
  { id: "prism-amber-split", name: "Amber Split", desc: "Amber splitting into peach", mood: "warm", colors: ["#fef3c7", "#fbbf24", "#f97316", "#b45309"] },
  { id: "prism-ultraviolet", name: "Ultraviolet", desc: "UV-leaning spectral smear", mood: "vivid", colors: ["#ddd6fe", "#a78bfa", "#7c3aed", "#db2777"], dark: true },
  { id: "prism-chrome-band", name: "Chrome Band", desc: "Cool chrome spectral stripe", mood: "cool", colors: ["#f8fafc", "#94a3b8", "#38bdf8", "#0ea5e9"] },
  { id: "prism-candy-cut", name: "Candy Cut", desc: "Candy-colored hard refraction", mood: "vivid", colors: ["#fda4af", "#c4b5fd", "#67e8f9", "#fde047"] },
]

const latticeSeeds: NamedPreset[] = [
  { id: "lattice-ember-grid", name: "Ember Grid", desc: "Warm grid over ember glow", mood: "warm", colors: ["#fb923c", "#f59e0b", "#ef4444"] },
  { id: "lattice-ice-graph", name: "Ice Graph", desc: "Fine ice graph on pale cyan", mood: "cool", colors: ["#38bdf8", "#7dd3fc", "#818cf8"] },
  { id: "lattice-neon-wire", name: "Neon Wire", desc: "Neon wireframe in the dark", mood: "vivid", colors: ["#22d3ee", "#a3e635", "#f472b6"], dark: true },
  { id: "lattice-olive-plan", name: "Olive Plan", desc: "Architectural olive mesh", mood: "warm", colors: ["#84cc16", "#a3e635", "#ca8a04"] },
  { id: "lattice-rose-blueprint", name: "Rose Blueprint", desc: "Blush blueprint lattice", mood: "warm", colors: ["#fb7185", "#f9a8d4", "#fda4af"] },
  { id: "lattice-midnight-cad", name: "Midnight CAD", desc: "CAD grid on midnight ink", mood: "dark", colors: ["#6366f1", "#22d3ee", "#818cf8"], dark: true },
  { id: "lattice-sand-mesh", name: "Sand Mesh", desc: "Desert sand graph paper", mood: "warm", colors: ["#d4a373", "#e7c9a9", "#b45309"] },
  { id: "lattice-mint-draft", name: "Mint Draft", desc: "Mint drafting overlay", mood: "cool", colors: ["#14b8a6", "#5eead4", "#22d3ee"] },
  { id: "lattice-violet-net", name: "Violet Net", desc: "Soft violet netting", mood: "cool", colors: ["#8b5cf6", "#c4b5fd", "#818cf8"] },
  { id: "lattice-gold-frame", name: "Gold Frame", desc: "Gilded frame over cream", mood: "warm", colors: ["#d97706", "#fbbf24", "#f59e0b"] },
  { id: "lattice-steel-iso", name: "Steel Iso", desc: "Isometric steel construction", mood: "cool", colors: ["#64748b", "#38bdf8", "#94a3b8"] },
  { id: "lattice-berry-graph", name: "Berry Graph", desc: "Berry-ink graph paper", mood: "vivid", colors: ["#db2777", "#f472b6", "#c026d3"] },
]

const grainSeeds: NamedPreset[] = [
  { id: "grain-sepia-print", name: "Sepia Print", desc: "Sepia wash with analog grain", mood: "warm", colors: ["#f5e6c8", "#d4a373", "#9a3412"], grain: true },
  { id: "grain-cyanotype", name: "Cyanotype", desc: "Classic cyanotype grain", mood: "cool", colors: ["#1e3a8a", "#1d4ed8", "#7dd3fc"], dark: true, grain: true },
  { id: "grain-rose-film", name: "Rose Film", desc: "Expired rose film stock", mood: "warm", colors: ["#fecdd3", "#fb7185", "#9f1239"], grain: true },
  { id: "grain-olive-still", name: "Olive Still", desc: "Olive still from a dusty reel", mood: "warm", colors: ["#ecfccb", "#84cc16", "#3f6212"], grain: true },
  { id: "grain-night-push", name: "Night Push", desc: "Pushed night film, blue grain", mood: "dark", colors: ["#0f172a", "#1e293b", "#38bdf8"], dark: true, grain: true },
  { id: "grain-peach-stock", name: "Peach Stock", desc: "Peach daylight film", mood: "warm", colors: ["#ffedd5", "#fdba74", "#ea580c"], grain: true },
  { id: "grain-violet-push", name: "Violet Push", desc: "Violet-shifted push process", mood: "vivid", colors: ["#2e1065", "#7c3aed", "#e879f9"], dark: true, grain: true },
  { id: "grain-fog-plate", name: "Fog Plate", desc: "Fogged glass plate, cool grain", mood: "cool", colors: ["#e2e8f0", "#94a3b8", "#64748b"], grain: true },
  { id: "grain-ember-roll", name: "Ember Roll", desc: "Ember-toned cinema roll", mood: "warm", colors: ["#431407", "#c2410c", "#fb923c"], dark: true, grain: true },
  { id: "grain-mint-halide", name: "Mint Halide", desc: "Mint silver halide wash", mood: "cool", colors: ["#ccfbf1", "#14b8a6", "#134e4a"], grain: true },
  { id: "grain-wine-print", name: "Wine Print", desc: "Wine-dark print with grit", mood: "dark", colors: ["#4c0519", "#9f1239", "#fb7185"], dark: true, grain: true },
  { id: "grain-sand-exposure", name: "Sand Exposure", desc: "Overexposed sand, heavy grain", mood: "warm", colors: ["#fef3c7", "#f59e0b", "#92400e"], grain: true },
]

const glassSeeds: NamedPreset[] = [
  { id: "glass-opal-pane", name: "Opal Pane", desc: "Opalescent pane with a white slash", mood: "cool", colors: ["#e0f2fe", "#c4b5fd", "#fce7f3"] },
  { id: "glass-amber-sheet", name: "Amber Sheet", desc: "Warm amber architectural glass", mood: "warm", colors: ["#fde68a", "#fdba74", "#fb923c"] },
  { id: "glass-sea-window", name: "Sea Window", desc: "Sea-green window with glare", mood: "cool", colors: ["#99f6e4", "#67e8f9", "#38bdf8"] },
  { id: "glass-rose-lens", name: "Rose Lens", desc: "Rose-tinted lens flare", mood: "warm", colors: ["#fecdd3", "#fda4af", "#f9a8d4"] },
  { id: "glass-violet-plate", name: "Violet Plate", desc: "Violet plate glass, studio light", mood: "cool", colors: ["#ddd6fe", "#c4b5fd", "#a5b4fc"] },
  { id: "glass-chartreuse", name: "Chartreuse Glass", desc: "Chartreuse studio gel", mood: "vivid", colors: ["#ecfccb", "#bef264", "#86efac"] },
  { id: "glass-smoke", name: "Smoke Glass", desc: "Smoked glass with a cool highlight", mood: "dark", colors: ["#cbd5e1", "#94a3b8", "#64748b"], dark: true },
  { id: "glass-peach-glaze", name: "Peach Glaze", desc: "Peach glaze over white clay", mood: "warm", colors: ["#ffedd5", "#fed7aa", "#fdba74"] },
  { id: "glass-cobalt-pane", name: "Cobalt Pane", desc: "Cobalt cathedral glass", mood: "cool", colors: ["#93c5fd", "#60a5fa", "#818cf8"] },
  { id: "glass-gold-leaf", name: "Gold Leaf Glass", desc: "Gold-leafed glass panel", mood: "warm", colors: ["#fef3c7", "#fbbf24", "#f59e0b"] },
  { id: "glass-mint-gel", name: "Mint Gel", desc: "Mint lighting gel, soft glare", mood: "cool", colors: ["#ccfbf1", "#5eead4", "#67e8f9"] },
  { id: "glass-magenta-sheet", name: "Magenta Sheet", desc: "Magenta gel with white stripe", mood: "vivid", colors: ["#f5d0fe", "#e879f9", "#c084fc"] },
]

const fluxSeeds: NamedPreset[] = [
  { id: "flux-lava-pool", name: "Lava Pool", desc: "Slow lava pooling in the dark", mood: "warm", colors: ["#fb923c", "#ef4444", "#facc15"], dark: true },
  { id: "flux-jelly-mint", name: "Jelly Mint", desc: "Mint jelly blobs in milk", mood: "cool", colors: ["#5eead4", "#34d399", "#67e8f9"] },
  { id: "flux-plasma-orb", name: "Plasma Orb", desc: "Plasma orbs colliding", mood: "vivid", colors: ["#22d3ee", "#a78bfa", "#f472b6"], dark: true },
  { id: "flux-honey-drip", name: "Honey Drip", desc: "Honey dripping through light", mood: "warm", colors: ["#fbbf24", "#f59e0b", "#fdba74"] },
  { id: "flux-ink-bloom-pool", name: "Ink Bloom", desc: "Ink blooming in water", mood: "cool", colors: ["#6366f1", "#38bdf8", "#c084fc"], dark: true },
  { id: "flux-peach-blob", name: "Peach Blob", desc: "Soft peach organic blobs", mood: "warm", colors: ["#fdba74", "#fb7185", "#fcd34d"] },
  { id: "flux-algae", name: "Algae Drift", desc: "Algae drifting in a tank", mood: "cool", colors: ["#84cc16", "#14b8a6", "#22d3ee"] },
  { id: "flux-violet-jelly", name: "Violet Jelly", desc: "Violet jelly under studio light", mood: "vivid", colors: ["#a78bfa", "#e879f9", "#818cf8"] },
  { id: "flux-copper-melt", name: "Copper Melt", desc: "Melting copper in a dark forge", mood: "warm", colors: ["#ea580c", "#b45309", "#f59e0b"], dark: true },
  { id: "flux-arctic-blob", name: "Arctic Blob", desc: "Pale arctic blobs on ice", mood: "cool", colors: ["#7dd3fc", "#a5b4fc", "#e0f2fe"] },
  { id: "flux-berry-oil", name: "Berry Oil", desc: "Berry oil on water", mood: "vivid", colors: ["#fb7185", "#c026d3", "#f472b6"] },
  { id: "flux-steel-mercury", name: "Steel Mercury", desc: "Mercury-like steel blobs", mood: "cool", colors: ["#94a3b8", "#38bdf8", "#cbd5e1"], dark: true },
]

export const EXTRA_EXISTING: Gradient[] = [
  ...g("aura", auraSeeds),
  ...g("mesh", meshSeeds),
  ...g("nebula", nebulaSeeds),
  ...g("prism", prismSeeds),
  ...g("lattice", latticeSeeds),
  ...g("grain", grainSeeds),
  ...g("glass", glassSeeds),
  ...g("flux", fluxSeeds),
]
