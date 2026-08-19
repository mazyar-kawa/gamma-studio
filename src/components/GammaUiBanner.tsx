'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { GammaUiLogo } from '@/components/gamma-ui-logo'
import { Banner } from '@/components/ui/banner'
import { GAMMA_UI_RAINBOW_COLORS, GAMMA_UI_URL } from '@/lib/constants'

export function GammaUiBanner() {
  return (
    <Banner
      id='gamma-ui-promo'
      variant='rainbow'
      className='border-b border-border/40 shadow-sm backdrop-blur-sm'
      rainbowColors={GAMMA_UI_RAINBOW_COLORS}
    >
      <Link
        href={GAMMA_UI_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='group inline-flex max-w-[calc(100%-2.5rem)] flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2 transition-opacity hover:opacity-90'
      >
        <GammaUiLogo className='size-8 shrink-0' size={20} />
        <span>
          Also explore{' '}
          <span className='font-semibold text-primary'>Gamma UI</span>
          <span className='hidden sm:inline'>
            {' '}
            — 150+ motion-ready React components
          </span>
        </span>
        <ArrowUpRight
          className='size-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
          aria-hidden
        />
      </Link>
    </Banner>
  )
}
