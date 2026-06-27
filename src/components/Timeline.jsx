import { timeline } from '../siteData'
import { Section, SectionHeading } from './Section'

const kindMeta = {
  edu: { dot: 'bg-accent', label: 'edu' },
  work: { dot: 'bg-primary', label: 'work' },
  proj: { dot: 'bg-accent2', label: 'proj' },
}

export default function Timeline() {
  return (
    <Section id="trajetoria">
      <SectionHeading index="05" id="trajetoria" title="Trajetória" subtitle="Formação, atuação e marcos de projeto em ordem cronológica." />

      <ol className="relative ml-2 space-y-7 border-l border-line pl-7">
        {timeline.map((t, i) => {
          const k = kindMeta[t.kind] ?? kindMeta.proj
          return (
            <li key={i} className="relative">
              <span
                className={`absolute -left-[35px] top-1 h-3 w-3 rounded-full ring-4 ring-bg ${k.dot}`}
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <time className="font-mono text-xs tabular-nums text-primary">{t.ts}</time>
                <span className="rounded border border-line bg-surface/60 px-1.5 py-0.5 font-mono text-[10px] uppercase text-muted">
                  {k.label}
                </span>
              </div>
              <h3 className="mt-1.5 text-[15px] font-semibold text-ink">{t.title}</h3>
              <p className="text-sm text-muted">{t.org}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
