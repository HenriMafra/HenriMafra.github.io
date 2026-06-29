import { useTheme } from './hooks'
import Intro from './components/Intro'
import Cursor from './components/Cursor'
import Topbar from './components/Topbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import AITools from './components/AITools'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Mvp from './components/Mvp'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Intro />
      <Cursor />
      <a
        href="#mvp"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-[#04121a]"
      >
        Pular para o pedido de prévia
      </a>
      <Topbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Mvp />
        <Services />
        <Projects />
        <About />
        <AITools />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
