import { useState } from 'react'
import { contact, profile, whatsappLink, links } from '../siteData'
import { useReveal } from '../hooks'
import { iconMap, IconMail, IconGithub, IconWhatsapp, IconCopy, IconCheck } from './icons'

const channels = [
  { id: 'email', cmd: 'email', value: profile.email, href: `mailto:${profile.email}`, icon: IconMail, copy: profile.email },
  { id: 'whatsapp', cmd: 'whatsapp', value: profile.whatsappLabel, href: whatsappLink(), icon: IconWhatsapp, copy: profile.whatsappLabel },
  { id: 'github', cmd: 'github', value: 'HenriMafra', href: profile.github, icon: IconGithub, copy: profile.github },
]

function Channel({ ch }) {
  const [copied, setCopied] = useState(false)
  const Icon = ch.icon
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(ch.copy)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard indisponível — link ainda funciona */
    }
  }
  return (
    <div className="flex items-center gap-3 rounded-lg border border-line bg-bg/40 px-4 py-3">
      <Icon className="h-[18px] w-[18px] flex-shrink-0 text-primary" />
      <a
        href={ch.href}
        {...(ch.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
        className="min-w-0 flex-1"
      >
        <span className="block font-mono text-[11px] uppercase tracking-wide text-muted">{ch.cmd}</span>
        <span className="block truncate text-sm font-medium text-ink hover:text-primary">{ch.value}</span>
      </a>
      <button
        type="button"
        onClick={onCopy}
        aria-label={`Copiar ${ch.cmd}`}
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-line text-muted transition hover:border-lineh hover:text-ink"
      >
        {copied ? <IconCheck className="h-4 w-4 text-accent2" /> : <IconCopy className="h-4 w-4" />}
      </button>
    </div>
  )
}

export default function Contact() {
  const ref = useReveal()
  return (
    <section
      id="contato"
      ref={ref}
      className="reveal relative mx-auto w-full max-w-[1120px] border-t border-line px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-7 sm:p-10">
        <div className="aurora" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span>08</span>
              <span className="h-px w-8 bg-primary/50" />
              <span className="text-muted">contato</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">{contact.heading}</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">{contact.subheading}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-[#04121a] transition hover:brightness-110"
              >
                <IconWhatsapp className="h-[18px] w-[18px]" /> Conversar no WhatsApp
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-lineh px-5 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
              >
                <IconMail className="h-[18px] w-[18px]" /> Enviar e-mail
              </a>
            </div>

            {/* Perfis técnicos */}
            <div className="mt-7">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-wide text-muted">também me encontre em</div>
              <div className="flex flex-wrap gap-2">
                {links.map((l) => {
                  const Icon = iconMap[l.icon]
                  return (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={l.label}
                      className="group inline-flex items-center gap-2 rounded-md border border-line bg-bg/40 px-3 py-2 text-xs font-medium text-muted transition hover:border-primary/60 hover:text-ink"
                    >
                      {Icon && <Icon className="h-4 w-4 transition group-hover:text-primary" />}
                      {l.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-bg/50 p-5">
            <div className="mb-4 font-mono text-xs text-muted">
              <span className="text-accent2">$</span> contact --all
            </div>
            <div className="space-y-2.5">
              {channels.map((ch) => (
                <Channel key={ch.id} ch={ch} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
