import { Sparkles } from './components/Sparkles'
import { Nav } from './components/Nav/Nav'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Awards } from './components/Awards/Awards'
import { Footer } from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Sparkles />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Awards />
      </main>
      <Footer />
    </>
  )
}
