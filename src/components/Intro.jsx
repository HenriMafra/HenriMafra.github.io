import { useEffect, useRef, useState } from 'react'

const SEEN_KEY = 'hm-intro-v1'
const GLYPHS = '01<>/[]{}=+*#ABCDEF░▒▓'

function prefersReduced() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Intro() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    if (prefersReduced()) return false
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return false
    } catch {
      /* sessionStorage indisponível */
    }
    return true
  })
  const [closing, setClosing] = useState(false)
  const canvasRef = useRef(null)
  const nameRef = useRef(null)

  const finish = () => {
    setClosing(true)
    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      /* ignore */
    }
    setTimeout(() => setShow(false), 750)
  }

  // Trava o scroll enquanto a intro aparece.
  useEffect(() => {
    if (!show) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [show])

  // Reator de dados em canvas.
  useEffect(() => {
    if (!show) return
    const canvas = canvasRef.current
    let raf
    let t0
    const gl = canvas && canvas.getContext('2d')
    const particles = Array.from({ length: 90 }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 60 + Math.random() * 220,
      sp: 0.2 + Math.random() * 0.9,
      sz: 0.6 + Math.random() * 1.8,
      hue: Math.random() < 0.5 ? '34,211,238' : '168,85,247',
    }))

    const resize = () => {
      if (!canvas) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      gl && gl.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = (ts) => {
      if (!gl) return
      if (!t0) t0 = ts
      const el = (ts - t0) / 1000
      const w = window.innerWidth
      const h = window.innerHeight
      const cx = w / 2
      const cy = h / 2
      gl.clearRect(0, 0, w, h)

      const grow = Math.min(1, el / 1.1)
      const ease = 1 - Math.pow(1 - grow, 3)

      // núcleo
      const coreR = 8 + ease * 10 + Math.sin(el * 6) * 2
      const core = gl.createRadialGradient(cx, cy, 0, cx, cy, coreR * 6)
      core.addColorStop(0, 'rgba(125,249,255,0.95)')
      core.addColorStop(0.3, 'rgba(34,211,238,0.45)')
      core.addColorStop(1, 'rgba(34,211,238,0)')
      gl.fillStyle = core
      gl.beginPath()
      gl.arc(cx, cy, coreR * 6, 0, Math.PI * 2)
      gl.fill()

      // anéis rotativos
      for (let i = 0; i < 3; i++) {
        const rr = (70 + i * 46) * ease
        gl.beginPath()
        const off = el * (0.6 + i * 0.4) * (i % 2 ? 1 : -1)
        const seg = 2.1 + i * 0.3
        gl.arc(cx, cy, rr, off, off + seg)
        gl.strokeStyle = i % 2 ? 'rgba(168,85,247,0.7)' : 'rgba(34,211,238,0.8)'
        gl.lineWidth = 2
        gl.lineCap = 'round'
        gl.stroke()
      }

      // partículas orbitando
      gl.globalCompositeOperation = 'lighter'
      for (const p of particles) {
        const rr = p.r * ease
        const ang = p.a + el * p.sp
        const x = cx + Math.cos(ang) * rr
        const y = cy + Math.sin(ang) * rr
        gl.beginPath()
        gl.fillStyle = `rgba(${p.hue},${0.5 + Math.sin(el * 3 + p.a) * 0.3})`
        gl.arc(x, y, p.sz, 0, Math.PI * 2)
        gl.fill()
      }
      gl.globalCompositeOperation = 'source-over'

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    // encerra sozinha (independe do rAF — garante saída mesmo offscreen)
    const auto = setTimeout(finish, 2700)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(auto)
      window.removeEventListener('resize', resize)
    }
  }, [show])

  // Decodifica o nome.
  useEffect(() => {
    if (!show) return
    const el = nameRef.current
    if (!el) return
    const text = 'HENRI MAFRA'
    let raf
    let frame = 0
    const queue = text.split('').map((ch) => ({
      to: ch,
      start: 12 + Math.floor(Math.random() * 24),
      end: 0,
    }))
    queue.forEach((q) => (q.end = q.start + 12 + Math.floor(Math.random() * 16)))
    const tick = () => {
      let res = ''
      let done = 0
      for (const q of queue) {
        if (q.to === ' ') {
          res += ' '
          done++
        } else if (frame >= q.end) {
          res += q.to
          done++
        } else if (frame >= q.start) {
          res += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        } else {
          res += ' '
        }
      }
      el.textContent = res
      if (done >= queue.length) {
        el.textContent = text
        return
      }
      frame++
      raf = requestAnimationFrame(tick)
    }
    const start = setTimeout(() => {
      tick()
      setTimeout(() => (el.textContent = text), 1600)
    }, 350)
    return () => {
      clearTimeout(start)
      cancelAnimationFrame(raf)
    }
  }, [show])

  if (!show) return null

  return (
    <div className={`intro ${closing ? 'intro-closing' : ''}`} aria-hidden="true">
      <canvas ref={canvasRef} className="intro-canvas" />
      <div className="intro-content">
        <div ref={nameRef} className="intro-name">
          &nbsp;
        </div>
        <div className="intro-tag">Ciência de Dados · Machine Learning</div>
      </div>
      <button type="button" className="intro-skip" onClick={finish}>
        pular &rsaquo;
      </button>
    </div>
  )
}
