"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CONIC_GRADIENT } from "@/lib/constants"
import { Button } from "@/components/ui/button"

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="relative flex min-h-[70vh] flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: CONIC_GRADIENT }}
      />
      <div className="relative z-10 max-w-md">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Something went wrong
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Gradient drift
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page hit an unexpected error. You can retry or head back to the
          gallery.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to gallery</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
