import { useEffect, useState } from 'react'
import { nav } from '../siteData'
import { useBrasiliaClock } from '../hooks'
import { IconSun, IconMoon, IconMenu, IconClose, IconArrowRight } from './icons'

export default function Topbar({ theme, toggleTheme }) {
  const clock = useBrasiliaClock()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navCls = (l) =>
    l.highlight
      ? 'rounded-md px-3 py-1.5 text-sm font-semibold text-primary transition hover:bg-primary/10'
      : 'rounded-md px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-surface hover:text-ink'

  return (
    <header
      className={`sticky top-0 z-50 topbar-bg transition-colors ${
        scrolled ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-4 min-w-0">
          <a href="#topo" className="flex items-center gap-2 font-mono text-sm text-ink">
            <span className="text-primary">~/</span>
            <span className="font-semibold">henrimafra</span>
          </a>
          <span className="hidden items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 sm:flex">
            <span className="status-dot" aria-hidden="true" />
            <span className="font-mono text-[11px] text-accent2">disponível</span>
          </span>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className={navCls(l)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden font-mono text-xs tabular-nums text-muted xl:inline" aria-hidden="true">
            BRT {clock}
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition hover:border-lineh hover:text-ink"
          >
            {theme === 'dark' ? <IconSun className="h-[18px] w-[18px]" /> : <IconMoon className="h-[18px] w-[18px]" />}
          </button>
          <a
            href="#mvp"
            className="hidden items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-[#04121a] transition hover:brightness-110 sm:flex"
          >
            Peça uma prévia <IconArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-bg px-5 py-3 lg:hidden">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2.5 text-sm hover:bg-surface ${
                l.highlight ? 'font-semibold text-primary' : 'font-medium text-muted hover:text-ink'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#mvp"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-[#04121a]"
          >
            Peça uma prévia <IconArrowRight className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  )
}
