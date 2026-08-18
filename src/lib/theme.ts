/** Resolve dark mode for preview/export — works before next-themes hydrates. */
export function resolveThemeIsDark(
  resolvedTheme: string | undefined,
  systemTheme: string | undefined,
): boolean {
  if (resolvedTheme === "dark") return true
  if (resolvedTheme === "light") return false
  if (resolvedTheme === "system") {
    if (systemTheme === "dark") return true
    if (systemTheme === "light") return false
  }

  if (typeof document !== "undefined") {
    const root = document.documentElement
    if (root.classList.contains("dark")) return true
    if (root.classList.contains("light")) return false
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }

  return false
}
