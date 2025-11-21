import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-blue-50">
      {/* background accents */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.12),transparent_25%)]" />
      </div>

      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-10 border-t border-white/10 text-center text-blue-200/70">
        <p>
          © {new Date().getFullYear()} Wildan Abiarsa · Dibuat dengan cinta, kode, dan Linux
        </p>
      </footer>
    </div>
  )
}

export default App
