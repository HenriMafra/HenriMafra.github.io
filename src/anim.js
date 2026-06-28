import { useEffect, useRef, useState } from 'react'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01010110ABCDEF░▒▓·:.'

function reduced() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/* Efeito "decodificando": embaralha caracteres e resolve até o texto final.
   Retorna [textoAtual, ref] — dispara quando o elemento fica visível. */
export function useScramble(text, { speed = 1, delay = 0 } = {}) {
  const [out, setOut] = useState(reduced() ? text : '')
  const ref = useRef(null)
  useEffect(() => {
    if (reduced()) {
      setOut(text)
      return
    }
    const el = ref.current
    if (!el) return
    let raf
    let started = false
    let queue = []

    const run = () => {
      if (started) return
      started = true
      const from = ''
      queue = []
      const len = text.length
      for (let i = 0; i < len; i++) {
        const start = Math.floor(Math.random() * 18 * speed) + delay
        const end = start + Math.floor(Math.random() * 18 * speed) + 8
        queue.push({ to: text[i], start, end, char: '' })
      }
      let frame = 0
      const tick = () => {
        let result = ''
        let done = 0
        for (const q of queue) {
          if (frame >= q.end) {
            done++
            result += q.to
          } else if (frame >= q.start) {
            if (!q.char || Math.random() < 0.28) q.char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
            result += `<span class="scr-g">${q.char}</span>`
          } else {
            result += ''
          }
        }
        setOut(result)
        if (done >= queue.length) {
          setOut(text)
          return
        }
        frame++
        raf = requestAnimationFrame(tick)
      }
      tick()
      // garantia caso o rAF seja pausado (render offscreen)
      setTimeout(() => setOut(text), 1400 * speed + delay * 16 + 400)
    }

    if (!('IntersectionObserver' in window)) {
      run()
      return
    }
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && run()), { threshold: 0.4 })
    io.observe(el)
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) run()
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [text, speed, delay])
  return [out, ref]
}

/* Tilt 3D sutil seguindo o ponteiro. Aplique o ref num card. */
export function useTilt({ max = 8, scale = 1.015 } = {}) {
  const ref = useRef(null)
  useEffect(() => {
    if (reduced()) return
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    let raf
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(800px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) scale(${scale})`
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.transform = ''
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [max, scale])
  return ref
}
