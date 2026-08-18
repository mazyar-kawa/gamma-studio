"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

function Toaster(props: ToasterProps) {
  const { resolvedTheme } = useTheme()

  return (
    <Sonner
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      className="toaster group"
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast:
            "glass border-border text-foreground shadow-lg",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
