import { services } from '../siteData'
import { Section, SectionHeading } from './Section'
import { iconMap } from './icons'
import { useTilt } from '../anim'

function ServiceCard({ s }) {
  const tilt = useTilt()
  const Icon = iconMap[s.icon]
  return (
    <div ref={tilt} className="card-lift rounded-xl border border-line bg-surface/60 p-5">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-bg/60 text-primary">
        {Icon && <Icon className="h-5 w-5" />}
      </span>
      <h3 className="mt-4 font-display text-base font-bold text-ink">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
    </div>
  )
}

export default function Services() {
  return (
    <Section id="servicos">
      <SectionHeading
        index="02"
        id="serviços"
        title="O que eu faço por você"
        subtitle="Soluções práticas para organizar dados, ganhar tempo e vender mais — explicadas sem complicação."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <ServiceCard key={s.title} s={s} />
        ))}
      </div>
    </Section>
  )
}
