export const CONIC_GRADIENT =
  'conic-gradient(from 200deg, #008AFF, #F7A442, #E942F7, #008AFF)'

export const GITHUB_REPO = 'mazyar-kawa/gamma-studio'
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`
export const AURA_URL = 'https://github.com/mazyar-kawa/gamma-studio'

export const GAMMA_UI_URL = 'https://gammaui.com'
export const GAMMA_UI_GITHUB = 'https://github.com/mazyar-kawa/gamma-ui'

/** Override via NEXT_PUBLIC_TWITTER_SITE / NEXT_PUBLIC_TWITTER_CREATOR in production */
export const TWITTER_SITE =
  process.env.NEXT_PUBLIC_TWITTER_SITE ?? '@gammaui'
export const TWITTER_CREATOR =
  process.env.NEXT_PUBLIC_TWITTER_CREATOR ?? '@mazyar_kawa'

export const GAMMA_UI_RAINBOW_COLORS = [
  'rgba(0,138,255,0.55)',
  'rgba(247,164,66,0.65)',
  'rgba(233,66,247,0.7)',
  'rgba(0,138,255,0.55)',
  'transparent',
  'rgba(233,66,247,0.7)',
  'transparent',
]

/** Gamma Studio — use a subdomain so gammaui.com stays the main Gamma UI site */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.gammaui.com'
export const SITE_NAME = 'Gamma Studio'
export const SITE_TAGLINE = 'Ambient gradient backgrounds'
export const SITE_DESCRIPTION =
  'Free CSS gradient generator with 600+ layered ambient, mesh, and aurora patterns. Tune layers and copy CSS, Tailwind, or SVG.'
export const SITE_OG_DESCRIPTION =
  'Free CSS gradient generator with 600+ ambient, mesh & aurora patterns. Copy CSS, Tailwind, or SVG in one click.'
