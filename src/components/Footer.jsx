import { footerText, profile } from '../siteData'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="font-mono text-xs leading-relaxed text-muted">{footerText}</p>
        <p className="font-mono text-xs text-muted">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
