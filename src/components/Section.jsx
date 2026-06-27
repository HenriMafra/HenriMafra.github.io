import { useReveal } from '../hooks'

/* Cabeçalho de seção com numeração editorial "01 —" em mono. */
export function SectionHeading({ index, title, subtitle, id }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        <span>{index}</span>
        <span className="h-px w-8 bg-primary/50" />
        <span className="text-muted">{id}</span>
      </div>
      <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{subtitle}</p>}
    </div>
  )
}

/* Wrapper de seção com reveal no scroll + linha fina superior. */
export function Section({ id, children, className = '', divider = true }) {
  const ref = useReveal()
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal relative mx-auto w-full max-w-[1120px] px-5 py-20 sm:px-8 md:py-28 ${
        divider ? 'border-t border-line' : ''
      } ${className}`}
    >
      {children}
    </section>
  )
}
