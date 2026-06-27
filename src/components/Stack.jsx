import { skills, roadmap } from '../siteData'
import { Section, SectionHeading } from './Section'

export default function Stack() {
  return (
    <Section id="stack">
      <SectionHeading
        index="03"
        id="capacidades"
        title="Stack & capacidades"
        subtitle="As ferramentas que uso no dia a dia, agrupadas por domínio. O que ainda estou estudando fica separado, no roadmap — honestidade técnica importa."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat) => (
          <div key={cat.group} className="rounded-xl border border-line bg-surface/60 p-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-primary">{cat.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-bg/50 px-2.5 py-1.5 font-mono text-xs text-ink/90 transition hover:border-primary/60 hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Bloco Roadmap — visualmente distinto */}
        <div className="rounded-xl border border-dashed border-accent/40 bg-accent/[0.04] p-5">
          <div className="flex items-center gap-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{roadmap.group}</h3>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {roadmap.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-dashed border-accent/40 bg-bg/40 px-2.5 py-1.5 font-mono text-xs text-accent"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Em estudo ativo e aplicação progressiva aos fluxos de automação que já mantenho.
          </p>
        </div>
      </div>
    </Section>
  )
}
