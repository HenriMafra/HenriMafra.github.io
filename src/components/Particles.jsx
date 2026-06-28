import { useEffect, useRef } from 'react'

/* Campo de partículas/constelação no fundo do hero — canvas 2D leve.
   Reage levemente ao ponteiro. Respeita prefers-reduced-motion. */
export default function Particles() {
  const ref = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = ref.current
    const ctx = canvas && canvas.getContext('2d')
    if (!ctx) return

    let raf
    let w = 0
    let h = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -999, y: -999 }
    let pts = []

    const build = () => {
      const count = Math.min(70, Math.floor((w * h) / 16000))
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        sz: Math.random() * 1.6 + 0.5,
        hue: Math.random() < 0.5 ? '34,211,238' : '168,85,247',
      }))
    }
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      build()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    window.addEventListener('pointermove', onMove)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < 12000) {
          const f = (1 - d2 / 12000) * 0.6
          p.x += (dx / Math.sqrt(d2 || 1)) * f
          p.y += (dy / Math.sqrt(d2 || 1)) * f
        }
        ctx.beginPath()
        ctx.fillStyle = `rgba(${p.hue},0.6)`
        ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2)
        ctx.fill()
      }
      // conexões
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]
          const b = pts[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = dx * dx + dy * dy
          if (dist < 11000) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(125,141,163,${0.16 * (1 - dist / 11000)})`
            ctx.lineWidth = 1
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={ref} className="particles-canvas" aria-hidden="true" />
}
