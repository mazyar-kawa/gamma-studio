import type { MetadataRoute } from 'next'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f6f0',
    theme_color: '#f8f6f0',
    icons: [
      {
        src: '/gamma-studio-dark.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
      {
        src: '/gamma-studio-light.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
      {
        src: '/images/metadata/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  }
}
