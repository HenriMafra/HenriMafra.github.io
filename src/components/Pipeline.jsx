import { useEffect, useRef, useState } from 'react'
import { pipeline } from '../siteData'
import { SectionHeading } from './Section'
import { IconDownload, IconShuffle, IconBrain, IconRocket, IconArrowRight } from './icons'
import { useReveal } from '../hooks'

const icons = { download: IconDownload, shuffle: IconShuffle, brain: IconBrain, rocket: IconRocket }

export default function Pipeline() {
  const sectionRef = useReveal()
  const [active, setActive] = useState(false)
  const nodeRef = useRef(null)

  useEffect(() => {
    const el = nodeRef.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setActive(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(true)),
      { threshold: 0.3 },
    )
    io.observe(el)
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) setActive(true)
    const safety = setTimeout(() => setActive(true), 2500)
    return () => {
      io.disconnect()
      clearTimeout(safety)
    }
  }, [])

  return (
    <section
      id="pipeline"
      ref={sectionRef}
      className="reveal relative mx-auto w-full max-w-[1120px] border-t border-line px-5 py-20 sm:px-8 md:py-28"
    >
      <SectionHeading index="01" id="pipeline" title="Como eu trabalho" subtitle={pipeline.intro} />

      <div ref={nodeRef} className={`pipe-wrap ${active ? 'pipe-on' : ''}`}>
        <div className="grid gap-4 md:grid-cols-4 md:gap-0">
          {pipeline.stages.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <div key={s.key} className="relative flex md:block">
                {/* Conector horizontal (desktop) */}
                {i < pipeline.stages.length - 1 && (
                  <span
                    className="absolute right-0 top-7 hidden h-px w-full translate-x-1/2 md:block"
                    aria-hidden="true"
                  >
                    <span className="block h-px w-full origin-left bg-gradient-to-r from-primary/60 to-accent/40 pipe-line" />
                  </span>
                )}
                <div
                  className="pipe-node relative z-10 flex-1 md:pr-5"
                  style={{ transitionDelay: `${i * 180}ms` }}
                >
                  <div className="card-lift rounded-xl border border-line bg-surface/70 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-bg/60 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                          0{i + 1}
                        </div>
                        <div className="font-display text-lg font-bold text-ink">{s.label}</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
                    <ul className="mt-3 space-y-1.5">
                      {s.projects.map((p) => (
                        <li key={p} className="flex items-start gap-2 font-mono text-xs text-ink/80">
                          <IconArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent2" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
