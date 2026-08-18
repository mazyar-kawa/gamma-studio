import type { Metadata, Viewport } from "next"
import { Open_Sans } from "next/font/google"
import {
  AURA_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants"
import { ThemeProvider } from "@/components/theme-provider"
import { GammaUiBanner } from "@/components/GammaUiBanner"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css"

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Gradient Generator & Maker`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  generator: "Next.js",
  category: "technology",
  keywords: [
    "gamma",
    "gamma gradients",
    "gradient generator",
    "gradient maker",
    "css gradient generator",
    "css gradients",
    "mesh gradient",
    "mesh gradient generator",
    "ambient gradients",
    "ambient background",
    "background gradients",
    "gradient background generator",
    "free gradients",
    "blend modes",
    "aurora",
    "web design",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Gradient Generator & Maker`,
    description: SITE_OG_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/images/metadata/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ambient & mesh gradient generator`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Gradient Generator & Maker`,
    description: SITE_OG_DESCRIPTION,
    images: [
      {
        url: "/images/metadata/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/svg/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/metadata/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
}

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE_NAME,
      alternateName: "Gamma Studio gradients",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      keywords: [
        "gamma gradients",
        "gradient generator",
        "gradient maker",
        "mesh gradient",
        "ambient gradients",
      ],
      image: `${SITE_URL}/images/metadata/og-image.png`,
    },
    {
      "@type": "WebApplication",
      name: `${SITE_NAME} — Gradient Generator & Maker`,
      url: SITE_URL,
      applicationCategory: "DesignApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      screenshot: `${SITE_URL}/images/metadata/og-image.png`,
      keywords: [
        "gradient generator",
        "gradient maker",
        "css gradients",
        "mesh gradient",
        "ambient gradients",
      ],
    },
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: [AURA_URL],
      logo: `${SITE_URL}/images/metadata/og-image.png`,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} antialiased h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <TooltipProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 rounded-lg focus:bg-primary focus:text-primary-foreground focus:font-medium"
            >
              Skip to content
            </a>
            <GammaUiBanner />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
