'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react'
import { Icon } from '@iconify/react'
import {
  Heart,
  RotateCcw,
  Search,
  Shuffle,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'
import { GradientCard } from '@/components/GradientCard'
import { useGradients } from '@/components/GradientProvider'
import { useReveal } from '@/hooks/useReveal'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toggle } from '@/components/ui/toggle'
import { cn } from '@/lib/utils'
import { SITE_TAGLINE } from '@/lib/constants'
import {
  GRADIENTS,
  FEATURED_IDS,
  CATEGORIES,
  type Category,
} from '@/lib/gradients'

type CategoryFilter = 'all' | Category

const INITIAL_CARDS = 12
const LOAD_MORE = 12

export function GradientsSection() {
  const { active, reset, random, favorites, toggleFullscreen } = useGradients()
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [query, setQuery] = useState('')
  const [favOnly, setFavOnly] = useState(false)
  const [count, setCount] = useState(INITIAL_CARDS)
  const catRefs = useRef<(HTMLButtonElement | null)[]>([])
  const sentinelRef = useRef<HTMLDivElement>(null)
  const heroRef = useReveal<HTMLDivElement>({ stagger: 0 })
  const galleryRef = useReveal<HTMLDivElement>({ stagger: 1 })

  const scrollToGallery = useCallback(() => {
    document.getElementById('gradients')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [])

  const applyCategory = useCallback((c: CategoryFilter) => {
    setCategory(c)
    setCount(INITIAL_CARDS)
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      if (c === 'all') url.searchParams.delete('category')
      else url.searchParams.set('category', c)
      window.history.replaceState(null, '', url)
    }
  }, [])

  const applyQuery = useCallback((q: string) => {
    setQuery(q)
    setCount(INITIAL_CARDS)
  }, [])

  const scrollToActiveCard = useCallback(() => {
    if (!active) return
    const node = document.getElementById(`g-${active.id}`)
    const behavior = window.matchMedia('(pointer: coarse)').matches
      ? 'auto'
      : 'smooth'
    if (node) {
      node.scrollIntoView({ behavior, block: 'center' })
      return
    }

    if (category !== 'all') applyCategory('all')
    if (query.trim() !== '') applyQuery('')
    if (favOnly) setFavOnly(false)

    const pinned = [
      ...FEATURED_IDS.map((id) => GRADIENTS.find((g) => g.id === id)).filter(
        Boolean,
      ),
      ...GRADIENTS.filter((g) => !FEATURED_IDS.includes(g.id)),
    ]
    const pinnedIdx = pinned.findIndex((g) => g?.id === active.id)
    setCount(Math.max(INITIAL_CARDS, pinnedIdx + LOAD_MORE))

    const target = () =>
      document
        .getElementById(`g-${active.id}`)
        ?.scrollIntoView({ behavior, block: 'center' })
    requestAnimationFrame(() => requestAnimationFrame(target))
  }, [active, category, query, favOnly, applyCategory, applyQuery])

  const q = query.trim().toLowerCase()
  const filtered = GRADIENTS.filter(
    (g) =>
      (category === 'all' || g.category === category) &&
      (!favOnly || favorites.includes(g.id)) &&
      (!q ||
        g.name.toLowerCase().includes(q) ||
        g.desc.toLowerCase().includes(q)),
  )

  const visible = [
    ...(FEATURED_IDS.map((id) => filtered.find((g) => g.id === id)).filter(
      (g): g is (typeof filtered)[number] => Boolean(g),
    ) as (typeof filtered)[number][]),
    ...filtered.filter((g) => !FEATURED_IDS.includes(g.id)),
  ]

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCount((c) => Math.min(c + LOAD_MORE, visible.length))
        }
      },
      { rootMargin: '600px 0px' },
    )
    io.observe(sentinel)
    return () => io.disconnect()
  }, [visible.length])

  useEffect(() => {
    const readCategory = () => {
      if (typeof window === 'undefined') return
      const c = new URLSearchParams(window.location.search).get('category')
      if (c && c !== 'all' && CATEGORIES.some((x) => x.id === c)) {
        setCategory(c as CategoryFilter)
      } else {
        setCategory('all')
      }
      setCount(INITIAL_CARDS)
    }
    readCategory()
    window.addEventListener('popstate', readCategory)
    return () => window.removeEventListener('popstate', readCategory)
  }, [])

  const handleTabKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>, index: number) => {
      let next = -1
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          next = (index + 1) % CATEGORIES.length
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          next = (index - 1 + CATEGORIES.length) % CATEGORIES.length
          break
        case 'Home':
          next = 0
          break
        case 'End':
          next = CATEGORIES.length - 1
          break
        default:
          return
      }
      e.preventDefault()
      applyCategory(CATEGORIES[next].id as CategoryFilter)
      catRefs.current[next]?.focus()
    },
    [applyCategory],
  )

  const handleGridKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const grid = e.currentTarget
    const cards = Array.from(grid.querySelectorAll<HTMLElement>('[data-card]'))
    const idx = cards.indexOf(document.activeElement as HTMLElement)
    if (idx === -1) return
    let next = -1
    switch (e.key) {
      case 'ArrowRight':
        next = idx + 1
        break
      case 'ArrowLeft':
        next = idx - 1
        break
      case 'ArrowDown':
      case 'ArrowUp': {
        const cols =
          getComputedStyle(grid).gridTemplateColumns.split(' ').length
        next = e.key === 'ArrowDown' ? idx + cols : idx - cols
        break
      }
      case 'Home':
        next = 0
        break
      case 'End':
        next = cards.length - 1
        break
      default:
        return
    }
    if (next < 0 || next >= cards.length) return
    e.preventDefault()
    cards[next].focus()
  }, [])

  return (
    <section id='top' aria-labelledby='home-heading' className='relative'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 top-0 h-[min(100svh,920px)]'
      />

      {/* Hero — same section, flows into gallery below */}
      <div
        ref={heroRef}
        className='reveal relative mx-auto flex min-h-[min(88svh,820px)] w-full max-w-7xl flex-col items-center justify-center px-6 pt-[calc(var(--header-height)+2rem)] pb-16 text-center'
      >
        <div className='group glass mb-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/25 px-4 py-2 text-sm shadow-lg dark:border-white/10'>
          <span className='relative flex size-2 shrink-0' aria-hidden='true'>
            <span className='absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70' />
            <span className='relative inline-flex size-2 rounded-full bg-primary' />
          </span>
          <AnimatedShinyText className='mx-0 inline-flex max-w-none items-center gap-2 text-sm'>
            <span className='font-medium text-muted-fg'>Gamma Studio</span>
            <span aria-hidden='true'>·</span>
            <span>{GRADIENTS.length}+ patterns</span>
          </AnimatedShinyText>
          <Sparkles
            className='size-3.5 shrink-0 text-primary'
            aria-hidden='true'
          />
        </div>

        <h1
          id='home-heading'
          className='max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-pretty sm:text-5xl md:text-6xl lg:text-7xl'
        >
          Layer{' '}
          <span className='font-serif italic text-primary'>ambient light</span>
          <br className='hidden sm:block' />
          <span className='text-foreground'> behind every interface.</span>
        </h1>

        <p className='reveal mt-6 text-xl text-muted-fg max-w-lg is-visible'>
          {SITE_TAGLINE}. Pick a preset below, open the studio to tune layers,
          and export CSS in one click.
        </p>

        <div className='mt-10 flex flex-wrap items-center justify-center gap-3'>
          <Button
            size='lg'
            className='h-12 rounded-full px-7'
            onClick={scrollToGallery}
          >
            Browse backgrounds
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='h-12 rounded-full px-6'
            onClick={toggleFullscreen}
          >
            <SlidersHorizontal className='size-4' />
            Open studio
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='h-12 rounded-full px-6'
            onClick={random}
            aria-label='Preview a random gradient'
          >
            <Shuffle className='size-4' />
            Random
          </Button>
        </div>

        {active ? (
          <button
            type='button'
            onClick={scrollToActiveCard}
            className='group glass mt-10 inline-flex max-w-md items-center gap-2 overflow-hidden rounded-full border border-white/25 px-4 py-2 text-sm transition-colors hover:border-primary dark:border-white/10'
          >
            <span
              className='size-2 shrink-0 rounded-full bg-primary'
              aria-hidden='true'
            />
            <AnimatedShinyText className='mx-0 inline-flex max-w-none items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-primary'>
              <span className='text-muted-fg'>Now previewing</span>
              <span className='truncate font-medium'>{active.name}</span>
            </AnimatedShinyText>
          </button>
        ) : null}
      </div>

      {/* Gallery — continues the same section */}
      <div
        ref={galleryRef}
        id='gradients'
        className='reveal relative mx-auto w-full max-w-7xl scroll-mt-28 px-6 pb-24'
      >
        <div className='mb-6 flex flex-wrap items-center justify-between gap-4 pt-10'>
          <Badge
            variant='outline'
            className='text-[11px] uppercase tracking-[0.2em] text-muted-foreground'
          >
            {visible.length} backgrounds
          </Badge>

          <div className='flex flex-wrap items-center gap-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={toggleFullscreen}
              aria-label='Open customizer'
            >
              <SlidersHorizontal className='size-3.5' />
              Customize
            </Button>
            <Button
              onClick={random}
              title='Random gradient'
              aria-label='Random gradient'
              size='icon-sm'
              variant='outline'
            >
              <Shuffle className='size-3.5' />
            </Button>
            <Button
              onClick={reset}
              title='Reset background'
              aria-label='Reset background'
              size='icon-sm'
              variant='outline'
            >
              <RotateCcw className='size-3.5' />
            </Button>
            <Toggle
              pressed={favOnly}
              onPressedChange={(pressed) => {
                setFavOnly(pressed)
                setCount(INITIAL_CARDS)
              }}
              size='sm'
              variant='outline'
              aria-label={
                favOnly ? 'Show all gradients' : 'Show favorites only'
              }
              title={favOnly ? 'Show all gradients' : 'Show favorites only'}
              className={favOnly ? 'text-rose-500 border-rose-500/60' : ''}
            >
              <Heart className={`size-3.5 ${favOnly ? 'fill-current' : ''}`} />
            </Toggle>
          </div>
        </div>

        <div className='mb-8 flex max-w-full flex-wrap items-center gap-3'>
          <div
            role='tablist'
            aria-label='Gradient categories'
            onKeyDown={(e) => {
              const idx = CATEGORIES.findIndex((c) => c.id === category)
              if (idx !== -1) handleTabKeyDown(e, idx)
            }}
            className='glass squircle-element flex max-w-full flex-nowrap items-center gap-1 overflow-x-auto rounded-xl border border-white/25 p-1.5 shadow-lg shadow-black/5 scrollbar-none dark:border-white/10 dark:shadow-black/25 sm:inline-flex sm:flex-wrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]'
          >
            {CATEGORIES.map((cat, i) => {
              const isActive = category === cat.id
              return (
                <button
                  key={cat.id}
                  ref={(el) => {
                    catRefs.current[i] = el
                  }}
                  role='tab'
                  id={`cat-${cat.id}`}
                  aria-selected={isActive}
                  aria-controls='gradients-grid-panel'
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => applyCategory(cat.id as CategoryFilter)}
                  className={cn(
                    'flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20 ring-1 ring-white/20'
                      : 'text-muted-foreground hover:bg-white/20 hover:text-foreground dark:hover:bg-white/10',
                  )}
                >
                  <Icon icon={cat.icon} width={13} height={13} />
                  {cat.label}
                </button>
              )
            })}
          </div>

          <label className='glass flex h-9 items-center gap-2 rounded-lg border border-border px-3 text-muted-foreground transition-colors focus-within:border-primary focus-within:text-foreground'>
            <Search className='size-3.5' />
            <Input
              type='search'
              value={query}
              onChange={(e) => applyQuery(e.target.value)}
              placeholder='Search…'
              aria-label='Search gradients by name or description'
              className='h-auto min-w-[120px] border-0 bg-transparent p-0 shadow-none focus-visible:ring-0'
            />
          </label>
        </div>

        <div
          id='gradients-grid-panel'
          role='tabpanel'
          aria-labelledby={`cat-${category}`}
          onKeyDown={handleGridKeyDown}
          className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4'
        >
          {visible.slice(0, count).map((g) => (
            <GradientCard key={g.id} gradient={g} />
          ))}
        </div>
        {count < visible.length ? (
          <div ref={sentinelRef} className='h-px' aria-hidden='true' />
        ) : null}
      </div>
    </section>
  )
}
