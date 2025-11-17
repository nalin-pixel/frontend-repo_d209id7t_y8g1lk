import React, { useState } from 'react'

const faqs = [
  { q: '[FAQ_1]', a: '[FAQ_1_ANSWER]' },
  { q: '[FAQ_2]', a: '[FAQ_2_ANSWER]' },
  { q: '[FAQ_3]', a: '[FAQ_3_ANSWER]' },
  { q: '[FAQ_4]', a: '[FAQ_4_ANSWER]' },
  { q: '[FAQ_5]', a: '[FAQ_5_ANSWER]' },
  { q: '[FAQ_6]', a: '[FAQ_6_ANSWER]' },
  { q: '[FAQ_7]', a: '[FAQ_7_ANSWER]' },
  { q: '[FAQ_8]', a: '[FAQ_8_ANSWER]' },
  { q: '[FAQ_9]', a: '[FAQ_9_ANSWER]' },
  { q: '[FAQ_10]', a: '[FAQ_10_ANSWER]' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-blue-100 bg-white/70 backdrop-blur shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-4">
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-slate-900">{q}</span>
          <span className={`transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 -mt-2 text-slate-600">{a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      <div className="relative max-w-4xl mx-auto px-6 space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-3">
          {faqs.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )}
