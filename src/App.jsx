import { useEffect } from 'react'
import { useTheme } from './hooks'
import Topbar from './components/Topbar'
import Hero from './components/Hero'
import Pipeline from './components/Pipeline'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Links from './components/Links'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsappFloat from './components/WhatsappFloat'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  // Easter egg: pressionar "P" abre o Neon Snake (ignora quando digitando em campos).
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target?.tagName || '').toLowerCase()
      if (tag === 'input' || tag === 'textarea' || e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'p' || e.key === 'P') window.location.href = '/game/'
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen bg-bg text-ink">
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-[#04121a]"
      >
        Pular para os projetos
      </a>
      <Topbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Pipeline />
        <About />
        <Stack />
        <Projects />
        <Timeline />
        <Links />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  )
}
