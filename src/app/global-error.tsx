"use client"

import { useEffect } from "react"
import { CONIC_GRADIENT } from "@/lib/constants"

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#000",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem", maxWidth: "28rem" }}>
          <div
            aria-hidden="true"
            style={{
              position: "fixed",
              inset: 0,
              background: CONIC_GRADIENT,
              opacity: 0.15,
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />
          <p style={{ color: "#008AFF", fontSize: "0.875rem", fontWeight: 600 }}>
            Gamma Studio
          </p>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginTop: "0.75rem" }}>
            Something broke
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", marginTop: "1rem", lineHeight: 1.6 }}>
            A critical error occurred. Reload the app or return to the homepage.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                padding: "0.625rem 1.25rem",
                borderRadius: "0.75rem",
                border: "none",
                background: "#008AFF",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <button
              type="button"
              onClick={() => {
                window.location.href = "/"
              }}
              style={{
                padding: "0.625rem 1.25rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Back to gallery
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
