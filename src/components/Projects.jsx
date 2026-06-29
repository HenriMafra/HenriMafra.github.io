import { projects } from '../siteData'
import { Section, SectionHeading } from './Section'
import { IconExternal, IconArrowRight } from './icons'
import { useTilt } from '../anim'

const statusMeta = {
  deploy: { label: 'Ao vivo', cls: 'text-primary border-primary/40 bg-primary/10' },
  producao: { label: 'Produção', cls: 'text-accent2 border-accent2/40 bg-accent2/10' },
  open: { label: 'Open-source', cls: 'text-accent border-accent/40 bg-accent/10' },
  academico: { label: 'Acadêmico', cls: 'text-pink border-pink/40 bg-pink/10' },
  soon: { label: 'Em breve', cls: 'text-muted border-line bg-bg/40' },
}

function slug(t) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function ProjectCard({ p }) {
  const st = statusMeta[p.status] ?? statusMeta.open
  const isSoon = p.status === 'soon'
  const tilt = useTilt()
  return (
    <article
      ref={isSoon ? null : tilt}
      className={`flex flex-col rounded-xl border bg-surface/60 p-5 ${
        isSoon ? 'border-dashed border-lineh/70' : 'card-lift border-line'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="truncate font-mono text-xs text-muted">~/{slug(p.title)}</span>
        <span className={`flex-shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${st.cls}`}>
          {st.label}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
      </div>
      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="font-mono text-xs text-primary">{p.tag}</span>
        {p.collab && (
          <span className="font-mono text-[11px] text-accent">· {p.collab}</span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>

      {p.highlights && (
        <ul className="mt-4 space-y-1.5">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs leading-relaxed text-ink/80">
              <IconArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent2" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="rounded border border-line bg-bg/50 px-2 py-0.5 font-mono text-[10px] text-muted">
            {s}
          </span>
        ))}
      </div>

      {p.links && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
          {p.links.map((l) => (
            <a
              key={l.url + l.label}
              href={l.url}
              {...(l.url.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                l.primary
                  ? 'bg-primary/15 text-primary hover:bg-primary/25'
                  : 'border border-line text-muted hover:border-lineh hover:text-ink'
              }`}
            >
              <IconExternal className="h-3.5 w-3.5" />
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projetos">
      <SectionHeading
        index="03"
        id="projetos"
        title="Projetos"
        subtitle="Trabalhos que mostram como aplico dados, web e IA na prática. Mais projetos a caminho."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  )
}
