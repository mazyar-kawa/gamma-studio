/** True if the PNG data URL has actual painted pixels (not fully transparent). */
export function hasVisiblePixels(
  dataUrl: string,
  width: number,
  height: number,
): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext("2d")
        if (!ctx) {
          resolve(false)
          return
        }
        ctx.drawImage(img, 0, 0)
        const data = ctx.getImageData(0, 0, width, height).data
        let visible = 0
        for (let i = 3; i < data.length; i += 4) {
          if (data[i] > 0) visible++
          if (visible > 200) break
        }
        resolve(visible > 200)
      } catch {
        resolve(false)
      }
    }
    img.onerror = () => resolve(false)
    img.src = dataUrl
  })
}
