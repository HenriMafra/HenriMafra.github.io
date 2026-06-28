import { process } from '../siteData'
import { Section, SectionHeading } from './Section'
import { IconArrowRight } from './icons'

export default function Process() {
  return (
    <Section id="processo">
      <SectionHeading
        index="07"
        id="processo"
        title="Como funciona"
        subtitle="Um processo simples, sem burocracia, do primeiro contato até a entrega."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <div key={p.step} className="relative rounded-xl border border-line bg-surface/60 p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-[#04121a]">
              {p.step}
            </span>
            <h3 className="mt-4 font-display text-base font-bold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
            {i < process.length - 1 && (
              <IconArrowRight
                className="absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary/50 lg:block"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
