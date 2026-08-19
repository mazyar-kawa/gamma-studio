#!/usr/bin/env bun
/**
 * Renders scripts/og-image.html to public/images/metadata/og-image.png
 * (1200×630). Requires Google Chrome on macOS.
 */
import { spawn } from "node:child_process"
import { mkdtemp, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"

const ROOT = join(import.meta.dir, "..")
const HTML = join(ROOT, "scripts/og-image.html")
const OUT = join(ROOT, "public/images/metadata/og-image.png")
const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
const PORT = 8765

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url)
    if (url.pathname === "/og" || url.pathname === "/scripts/og-image.html")
      return new Response(Bun.file(HTML), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      })
    return new Response("Not found", { status: 404 })
  },
})

const scratch = await mkdtemp(join(tmpdir(), "gamma-og-"))
const shot = join(scratch, "og-2x.png")

try {
  await new Promise<void>((resolve, reject) => {
    const child = spawn(
      CHROME,
      [
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--no-first-run",
        "--no-default-browser-check",
        "--force-device-scale-factor=2",
        "--window-size=1200,630",
        "--virtual-time-budget=8000",
        `--screenshot=${shot}`,
        `http://127.0.0.1:${PORT}/og`,
      ],
      { stdio: "ignore" },
    )
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`Chrome exited ${code}`)),
    )
    child.on("error", reject)
  })

  await new Promise<void>((resolve, reject) => {
    const child = spawn("sips", ["-z", "630", "1200", shot, "--out", OUT], {
      stdio: "ignore",
    })
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`sips exited ${code}`)),
    )
    child.on("error", reject)
  })

  console.log(`Wrote ${OUT}`)
} finally {
  server.stop()
  await rm(scratch, { recursive: true, force: true })
}
