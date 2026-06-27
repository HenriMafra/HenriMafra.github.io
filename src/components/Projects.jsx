import { useMemo, useState } from 'react'
import { projects } from '../siteData'
import { Section, SectionHeading } from './Section'
import { IconExternal, IconArrowRight, IconPlay } from './icons'

const statusMeta = {
  producao: { label: 'Produção', cls: 'text-accent2 border-accent2/40 bg-accent2/10' },
  deploy: { label: 'Ao vivo', cls: 'text-primary border-primary/40 bg-primary/10' },
  open: { label: 'Open-source', cls: 'text-accent border-accent/40 bg-accent/10' },
  academico: { label: 'Acadêmico', cls: 'text-pink border-pink/40 bg-pink/10' },
}

const filters = [
  { key: 'todos', label: 'Todos' },
  { key: 'profissional', label: 'NTSEC' },
  { key: 'acadêmico', label: 'Acadêmico' },
  { key: 'pessoal', label: 'Open-source' },
]

function ProjectCard({ p }) {
  const st = statusMeta[p.status] ?? statusMeta.open
  return (
    <article className="card-lift flex flex-col rounded-xl border border-line bg-surface/60 p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="truncate font-mono text-xs text-muted">~/{p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}</span>
        <span className={`flex-shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${st.cls}`}>
          {st.label}
        </span>
      </div>

      <h3 className="mt-3 font-display text-lg font-bold text-ink">{p.title}</h3>
      <div className="mt-1 font-mono text-xs text-primary">{p.tag}</div>

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
          {p.links.map((l) => {
            const isGame = l.url === '/game/'
            return (
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
                {isGame ? <IconPlay className="h-3.5 w-3.5" /> : <IconExternal className="h-3.5 w-3.5" />}
                {l.label}
              </a>
            )
          })}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('todos')
  const visible = useMemo(
    () => (filter === 'todos' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <Section id="projetos">
      <SectionHeading
        index="04"
        id="projetos"
        title="Projetos"
        subtitle="Ferramentas em produção na NTSEC, trabalhos acadêmicos e projetos open-source. Tudo real, do coletor de dados ao dashboard no ar."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f.key === 'todos' ? projects.length : projects.filter((p) => p.category === f.key).length
          const isActive = filter === f.key
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 rounded-md border px-3.5 py-2 font-mono text-xs font-semibold transition ${
                isActive
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-line text-muted hover:border-lineh hover:text-ink'
              }`}
            >
              {f.label}
              <span className="rounded bg-bg/60 px-1.5 text-[10px] tabular-nums">{count}</span>
            </button>
          )
        })}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  )
}
