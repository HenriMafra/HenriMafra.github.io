import { links } from '../siteData'
import { Section, SectionHeading } from './Section'
import { iconMap, IconExternal } from './icons'

export default function Links() {
  return (
    <Section id="links">
      <SectionHeading
        index="06"
        id="presenca"
        title="Presença técnica"
        subtitle="Onde eu pratico, publico e compartilho. Atividade pública contínua — não só um currículo."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => {
          const Icon = iconMap[l.icon]
          return (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="card-lift group flex items-center gap-3 rounded-xl border border-line bg-surface/60 p-4"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-line bg-bg/50 text-ink transition group-hover:text-primary">
                {Icon && <Icon className="h-5 w-5" />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-ink">{l.label}</span>
                <span className="block truncate font-mono text-xs text-muted">{l.handle}</span>
              </span>
              <IconExternal className="h-4 w-4 flex-shrink-0 text-muted transition group-hover:text-primary" />
            </a>
          )
        })}
      </div>
    </Section>
  )
}
