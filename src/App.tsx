import { useRef } from 'react'
import './App.css'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Story from './components/story'
import Contact from './components/contact'

function App() {
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
       <main className="bg-background text-foreground">
      <Navbar />
      <Hero onScrollToProjects={scrollToProjects} />
      <Story />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App
