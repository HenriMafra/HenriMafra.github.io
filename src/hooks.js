import { useEffect, useRef, useState } from 'react'

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}

/* Adiciona .is-visible quando o elemento entra no viewport (uma vez).
   À prova de falhas: revela já o que está no viewport inicial e tem
   uma rede de segurança por timeout — conteúdo nunca fica preso oculto. */
export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reveal = () => el.classList.add('is-visible')

    const inView = () => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight && r.bottom > 0
    }

    if (!('IntersectionObserver' in window)) {
      reveal()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal()
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options },
    )
    io.observe(el)

    if (inView()) reveal()
    const safety = setTimeout(reveal, 3500)

    return () => {
      io.disconnect()
      clearTimeout(safety)
    }
  }, [])
  return ref
}

/* Conta de 0 até `to` quando visível. Respeita reduced-motion. */
export function useCountUp(to, { duration = 1100 } = {}) {
  const reduced = usePrefersReducedMotion()
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    if (reduced) {
      setValue(to)
      return
    }
    const el = ref.current
    if (!el) return

    // Flags locais ao efeito (resetam a cada execução — seguro no StrictMode).
    let hasRun = false
    let rafId
    let finalTimer
    let safety
    const run = () => {
      if (hasRun) return
      hasRun = true
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(Math.round(to * eased))
        if (p < 1) rafId = requestAnimationFrame(tick)
        else setValue(to)
      }
      rafId = requestAnimationFrame(tick)
      // Garantia: se o rAF for pausado (aba em background/render offscreen),
      // crava o valor final mesmo assim.
      finalTimer = setTimeout(() => setValue(to), duration + 250)
    }

    let io
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && run()),
        { threshold: 0.4 },
      )
      io.observe(el)
      // Já visível no carregamento (KPIs do hero) → inicia já.
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight && r.bottom > 0) run()
      // Rede de segurança caso o observer não dispare.
      safety = setTimeout(run, 1600)
    } else {
      run()
    }

    return () => {
      io?.disconnect()
      clearTimeout(safety)
      clearTimeout(finalTimer)
      cancelAnimationFrame(rafId)
    }
  }, [to, duration, reduced])
  return [value, ref]
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    const saved = window.localStorage.getItem('hm-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return 'dark'
  })
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('light', theme === 'light')
    window.localStorage.setItem('hm-theme', theme)
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

/* Relógio ao vivo no fuso de Brasília (America/Sao_Paulo). */
export function useBrasiliaClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'America/Sao_Paulo',
    })
    const update = () => setTime(fmt.format(new Date()))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}
