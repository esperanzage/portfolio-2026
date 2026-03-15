import { useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import Process from '../components/Process.jsx'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'Esperanza Garcia — Senior Product Designer'
  }, [])

  return (
    <div style={{ background: '#FAFAF8' }}>
      <Nav />
      <main id="main-content">
        <Hero />
        <CaseStudies />
        <div style={{ position: 'relative', zIndex: 5, background: '#FAFAF8' }}>
          <Process />
          <About />
        </div>
      </main>
      <div style={{ position: 'relative', zIndex: 5 }}>
        <Footer />
      </div>
    </div>
  )
}
