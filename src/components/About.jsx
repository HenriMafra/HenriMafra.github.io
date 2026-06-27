import { about } from '../siteData'
import { Section, SectionHeading } from './Section'

export default function About() {
  return (
    <Section id="sobre">
      <SectionHeading index="02" id="perfil" title={about.heading} />
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <div className="space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-muted sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <aside className="h-fit rounded-xl border border-line bg-surface/60 p-5">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs text-muted">
            <span className="text-accent2">$</span> cat perfil.json
          </div>
          <dl className="divide-y divide-line">
            {about.spec.map((s) => (
              <div key={s.k} className="flex items-baseline justify-between gap-4 py-2.5">
                <dt className="font-mono text-xs uppercase tracking-wide text-muted">{s.k}</dt>
                <dd className="text-right text-sm font-medium text-ink">{s.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  )
}
