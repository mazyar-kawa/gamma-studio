"use client"

import Image from "next/image"

interface GammaUiLogoProps {
  className?: string
  size?: number
}

export function GammaUiLogo({ className = "size-5", size = 20 }: GammaUiLogoProps) {
  return (
    <>
      <Image
        src="/gamma-ui-light.svg"
        alt=""
        width={size}
        height={size}
        aria-hidden
        className={`${className} dark:hidden`}
      />
      <Image
        src="/gamma-ui-dark.svg"
        alt=""
        width={size}
        height={size}
        aria-hidden
        className={`hidden ${className} dark:block`}
      />
    </>
  )
}
