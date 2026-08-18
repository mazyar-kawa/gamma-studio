"use client"

import { useEffect, useState, type CSSProperties, type HTMLAttributes } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BannerVariant = "rainbow" | "normal"

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /** @defaultValue 3rem */
  height?: string
  xColor?: string
  /** @defaultValue 'normal' */
  variant?: BannerVariant
  /** For rainbow variant only, customise the colors */
  rainbowColors?: string[]
  /** Sets `--banner-height` on `:root` when open */
  changeLayout?: boolean
}

export function Banner({
  id,
  xColor,
  variant = "normal",
  changeLayout = true,
  height = "3rem",
  rainbowColors = [
    "rgba(0,149,255,0.56)",
    "rgba(231,77,255,0.77)",
    "rgba(255,0,0,0.73)",
    "rgba(131,255,166,0.66)",
  ],
  className,
  children,
  ...props
}: BannerProps) {
  const [open, setOpen] = useState(true)
  const globalKey = id ? `nd-banner-${id}` : null

  useEffect(() => {
    if (globalKey) setOpen(localStorage.getItem(globalKey) !== "true")
  }, [globalKey])

  if (!open) return null

  return (
    <div
      id={id}
      {...props}
      className={cn(
        "fixed top-0 z-[60] flex w-full flex-row items-center justify-center px-4 text-center text-sm font-medium",
        variant === "normal" && "bg-secondary text-secondary-foreground",
        variant === "rainbow" && "bg-background text-foreground",
        className,
      )}
      style={{ height }}
    >
      {changeLayout ? (
        <style>
          {globalKey
            ? `:root:not(.${globalKey}) { --banner-height: ${height}; }`
            : `:root { --banner-height: ${height}; }`}
        </style>
      ) : null}
      {globalKey ? (
        <style>{`.${globalKey} #${id} { display: none; }`}</style>
      ) : null}
      {globalKey ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `if (localStorage.getItem('${globalKey}') === 'true') document.documentElement.classList.add('${globalKey}');`,
          }}
        />
      ) : null}

      {variant === "rainbow" ? <RainbowFlow colors={rainbowColors} /> : null}
      {children}
      {id ? (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Close banner"
          onClick={() => {
            setOpen(false)
            if (globalKey) {
              localStorage.setItem(globalKey, "true")
              document.documentElement.classList.add(globalKey)
              document.documentElement.style.setProperty("--banner-height", "0px")
              window.dispatchEvent(new Event("banner-status-changed"))
            }
          }}
          className="absolute end-2 top-1/2 size-8 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground md:end-4"
        >
          <X className="size-4" color={xColor} />
        </Button>
      ) : null}
    </div>
  )
}

const maskImage =
  "linear-gradient(to bottom,white,transparent), radial-gradient(circle at top center, white, transparent)"

function RainbowFlow({ colors }: { colors: string[] }) {
  const gradientStops = [...colors, colors[0]]
    .map((color, i) => `${color} ${(i * 50) / colors.length}%`)
    .join(", ")

  return (
    <div
      className="moving-banner-bg absolute inset-0 -z-10"
      style={
        {
          maskImage,
          maskComposite: "intersect",
          backgroundImage: `repeating-linear-gradient(70deg, ${gradientStops})`,
          backgroundSize: "200% 100%",
          filter: "saturate(2)",
        } as CSSProperties
      }
    />
  )
}
