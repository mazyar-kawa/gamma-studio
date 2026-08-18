"use client"

import { useEffect } from "react"
import { ArrowDown } from "lucide-react"
import { useGradients } from "@/components/GradientProvider"
import { Button } from "@/components/ui/button"

export function BackToGalleryButton() {
  const { previewReturn, backToGallery, dismissPreviewReturn } = useGradients()

  useEffect(() => {
    if (!previewReturn) return

    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (y > lastY && y > window.innerHeight * 0.3) {
        dismissPreviewReturn()
      }
      lastY = y
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [previewReturn, dismissPreviewReturn])

  if (!previewReturn) return null

  return (
    <Button
      onClick={backToGallery}
      variant="outline"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-24 md:right-20 md:left-auto md:translate-x-0 z-40 rounded-full shadow-lg"
    >
      <ArrowDown className="size-3.5" />
      Go to selection
    </Button>
  )
}
