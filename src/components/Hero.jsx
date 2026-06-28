import { useEffect, useRef, useState } from 'react'
import { hero, profile, whatsappLink } from '../siteData'
import { usePrefersReducedMotion, useCountUp } from '../hooks'
import { IconArrowRight, IconWhatsapp, IconLinkedin } from './icons'
import Particles from './Particles'

function Terminal() {
  const reduced = usePrefersReducedMotion()
  const lines = hero.terminalLines
  const [rendered, setRendered] = useState(() =>
    reduced ? lines.map((l) => ({ ...l, typed: l.cmd, done: true })) : [],
  )
  const containerRef = useRef(null)

  useEffect(() => {
    if (reduced) return
    let cancelled = false
    let li = 0
    setRendered([])

    const typeLine = () => {
      if (cancelled || li >= lines.length) return
      const line = lines[li]
      let ci = 0
      setRendered((prev) => [...prev, { cmd: line.cmd, out: line.out, typed: '', done: false }])
      const step = () => {
        if (cancelled) return
        ci++
        setRendered((prev) => {
          const copy = [...prev]
          const idx = copy.length - 1
          copy[idx] = { ...copy[idx], typed: line.cmd.slice(0, ci) }
          if (ci >= line.cmd.length) copy[idx].done = true
          return copy
        })
        if (ci < line.cmd.length) {
          setTimeout(step, 26)
        } else {
          li++
          setTimeout(typeLine, 420)
        }
      }
      setTimeout(step, 120)
    }
    const start = setTimeout(typeLine, 500)
    return () => {
      cancelled = true
      clearTimeout(start)
    }
  }, [reduced, lines])

  return (
    <div
      className="overflow-hidden rounded-xl border border-line bg-surface/80 shadow-2xl shadow-black/30"
      role="region"
      aria-label="Terminal de apresentação"
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface2/60 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-pink/80" />
        <span className="h-3 w-3 rounded-full bg-[#f7c948]/80" />
        <span className="h-3 w-3 rounded-full bg-accent2/80" />
        <span className="ml-2 font-mono text-xs text-muted">henri@portfolio: ~</span>
      </div>
      <div ref={containerRef} className="space-y-2.5 p-4 font-mono text-[13px] leading-relaxed sm:p-5 sm:text-sm">
        {rendered.map((l, i) => {
          const isLast = i === rendered.length - 1
          return (
            <div key={i}>
              <p className="text-ink">
                <span className="text-accent2">$</span>{' '}
                <span>{(l.typed ?? l.cmd).replace(/^.*?\$\s*/, '')}</span>
                {!l.done && isLast && !reduced && <span className="caret align-middle" aria-hidden="true" />}
              </p>
              {l.done && <p className="pl-3.5 text-muted">{l.out}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Metric({ value, label, countTo, suffix }) {
  const [count, ref] = useCountUp(countTo ?? 0)
  const display = countTo ? `${count}${suffix ?? ''}` : value
  return (
    <div ref={ref} className="rounded-lg border border-line bg-bg/40 p-4">
      <div className="font-mono text-2xl font-bold tabular-nums text-primary sm:text-[1.7rem]">{display}</div>
      <div className="mt-1 text-xs leading-snug text-muted">{label}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <Particles />
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1120px] items-center gap-12 px-5 pb-16 pt-16 sm:px-8 md:pt-24 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
        {/* Coluna esquerda */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5">
            <span className="status-dot" aria-hidden="true" />
            <span className="font-mono text-xs text-accent2">{hero.badge}</span>
          </div>

          <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.3rem]">
            {hero.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-primary sm:text-[15px]">{profile.role}</p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">{hero.headline}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted/90">{hero.subheadline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-[#04121a] transition hover:brightness-110"
            >
              <IconWhatsapp className="h-[18px] w-[18px]" /> Fale comigo
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-md border border-lineh px-5 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              Ver projetos <IconArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-3 py-3 text-sm font-semibold text-muted transition hover:text-ink"
            >
              <IconLinkedin className="h-[18px] w-[18px]" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="space-y-4">
          <Terminal />
          <div className="grid grid-cols-2 gap-3">
            {hero.metrics.map((m) => (
              <Metric key={m.label} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
