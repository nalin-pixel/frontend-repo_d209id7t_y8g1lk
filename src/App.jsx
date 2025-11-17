import React from 'react'
import Hero from './components/Hero'
import CasePreview from './components/CasePreview'
import Problem from './components/Problem'
import Method from './components/Method'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top navigation placeholder */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg" />
            <span className="font-semibold text-slate-900">TalentMint</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#cases" className="hover:text-slate-900">Cases</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-blue-600 text-white text-sm px-4 py-2 shadow-md">Get Started</a>
        </div>
      </header>

      <main>
        <Hero />
        <CasePreview />
        <Problem />
        <Method />
        <section id="services"><Services /></section>
        <CaseStudies />
        <section id="about"><About /></section>
        <section id="faq"><FAQ /></section>
        <FinalCTA />
      </main>

      <footer className="border-t border-blue-100 bg-white/70">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm text-slate-600">
          <span>© {new Date().getFullYear()} TalentMint Recruiting</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
