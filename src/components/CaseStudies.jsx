import React from 'react'

const cards = [
  { img: '[CASESTUDY_IMAGE]', result: '[CASESTUDY_RESULT]', text: '[CASESTUDY_TEXT]' },
  { img: '[CASESTUDY_IMAGE]', result: '[CASESTUDY_RESULT]', text: '[CASESTUDY_TEXT]' },
  { img: '[CASESTUDY_IMAGE]', result: '[CASESTUDY_RESULT]', text: '[CASESTUDY_TEXT]' },
  { img: '[CASESTUDY_IMAGE]', result: '[CASESTUDY_RESULT]', text: '[CASESTUDY_TEXT]' },
]

const imgFor = (marker) => {
  switch (marker) {
    default:
      return 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop'
  }
}

export default function CaseStudies() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Recent Case Studies</h2>
        <p className="text-center text-slate-600 mt-2">A few snapshots of outcomes achieved for partners.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-blue-100 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img src={imgFor(c.img)} alt="case" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5">
                <div className="text-blue-700 font-semibold">{c.result}</div>
                <p className="text-slate-700 mt-1 text-sm">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
