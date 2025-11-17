import React from 'react'

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-br from-blue-900 to-blue-600 bg-clip-text text-transparent">
          [FINAL_CTA_HEADLINE]
        </h2>
        <p className="mt-3 text-slate-600">We’ll tailor a hiring sprint for your roles and market.</p>
        <a href="#" className="inline-flex mt-8 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all">
          [FINAL_CTA_BUTTON]
        </a>
      </div>
    </section>
  )
}
