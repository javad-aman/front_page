import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Publications from './components/Publications/Publications'

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Publications />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
