import React from 'react'

const steps = [
  {
    title: '[STEP_1_TITLE]',
    text: '[STEP_1_TEXT]',
    bullets: ['[STEP_1_B1]', '[STEP_1_B2]'],
    image: '[STEP_1_IMAGE]'
  },
  {
    title: '[STEP_2_TITLE]',
    text: '[STEP_2_TEXT]',
    bullets: ['[STEP_2_B1]', '[STEP_2_B2]'],
    image: '[STEP_2_IMAGE]'
  },
  {
    title: '[STEP_3_TITLE]',
    text: '[STEP_3_TEXT]',
    bullets: ['[STEP_3_B1]', '[STEP_3_B2]'],
    image: '[STEP_3_IMAGE]'
  }
]

export default function Method() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-6 space-y-10">
        {steps.map((step, idx) => (
          <div key={idx} className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-blue-100 bg-white/60 backdrop-blur shadow-lg">
              {/* Image placeholder */}
              <img src={
                step.image === '[STEP_1_IMAGE]' ? 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop' :
                step.image === '[STEP_2_IMAGE]' ? 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop' :
                'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop'
              } alt="step" className="w-full h-full object-cover" />
              <div className="pointer-events-none absolute -inset-8 bg-gradient-to-tr from-blue-200/30 via-transparent to-blue-300/30 blur-2xl" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-slate-600">{step.text}</p>
              <ul className="mt-4 space-y-2">
                {step.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
