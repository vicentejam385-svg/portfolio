import { MotionConfig } from 'motion/react'
import Starfield from './components/Starfield'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Evaluation from './components/Evaluation'
import Reflection from './components/Reflection'
import Contact from './components/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="nebula" aria-hidden />
      <Starfield />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Resume />
          <Skills />
          <Achievements />
          <Projects />
          <Evaluation />
          <Reflection />
        </main>
        <Contact />
      </div>
    </MotionConfig>
  )
}