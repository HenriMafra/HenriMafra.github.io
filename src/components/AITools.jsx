import { aiTools } from '../siteData'
import { Section, SectionHeading } from './Section'

export default function AITools() {
  return (
    <Section id="ia">
      <SectionHeading
        index="03"
        id="ia-tools"
        title="Ferramentas de IA"
        subtitle={aiTools.intro}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {aiTools.groups.map((g) => (
          <div key={g.group} className="rounded-xl border border-line bg-surface/60 p-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-primary">{g.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-bg/50 px-3 py-1.5 font-mono text-xs text-ink/90 transition hover:border-primary/60 hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center font-mono text-xs text-muted">{aiTools.note}</p>
    </Section>
  )
}
