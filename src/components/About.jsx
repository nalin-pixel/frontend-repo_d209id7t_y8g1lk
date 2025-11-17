import React from 'react'

export default function About() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">[ABOUT_TITLE]</h2>
          <p className="mt-4 text-slate-600">[ABOUT_TEXT]</p>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-blue-100 bg-white/60 backdrop-blur shadow-lg">
          {/* [ABOUT_IMAGE] */}
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" alt="team" className="w-full h-full object-cover" />
          <div className="pointer-events-none absolute -inset-8 bg-gradient-to-tr from-blue-200/30 via-transparent to-blue-300/30 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
