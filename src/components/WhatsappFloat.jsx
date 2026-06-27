import { whatsappLink } from '../siteData'
import { IconWhatsapp } from './icons'

export default function WhatsappFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent2 text-[#04140e] shadow-lg shadow-accent2/30 transition hover:scale-105 hover:brightness-110"
    >
      <IconWhatsapp className="h-7 w-7" />
    </a>
  )
}
