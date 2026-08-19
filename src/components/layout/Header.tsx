"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Sparkles } from "lucide-react"
import { useGradients } from "@/components/GradientProvider"
import { GitHubBadge } from "@/components/ui/GitHubBadge"
import { GitHubIcon } from "@/components/ui/github-icon"
import { Button } from "@/components/ui/button"
import { GAMMA_UI_URL, GITHUB_URL } from "@/lib/constants"
import MyLogo from "@/components/my-logo"

export function Header() {
  const { isDark, toggleTheme } = useGradients()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-border"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{
        height: "var(--header-height)",
        top: "var(--banner-height, 0px)",
      }}
    >
      <div className="mx-auto max-w-7xl w-full px-6 h-full flex items-center justify-between">
        <MyLogo className="h-10 w-10" />
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle theme"
          >
            <span key={isDark ? "moon" : "sun"} className="theme-icon-enter">
              {isDark ? (
                <Moon className="size-4" />
              ) : (
                <Sun className="size-4" />
              )}
            </span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            asChild
            className="sm:hidden"
          >
            <a
              href={GAMMA_UI_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gamma UI — motion-ready React components"
            >
              <Sparkles className="size-4" />
            </a>
          </Button>

          <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
            <a href={GAMMA_UI_URL} target="_blank" rel="noopener noreferrer">
              Gamma UI
            </a>
          </Button>

          <Button variant="outline" size="sm" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="size-4" />
              <GitHubBadge className="text-sm" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
