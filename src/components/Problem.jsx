import React from 'react'
import { X } from 'lucide-react'

const problems = [
  '[PROBLEM_1]',
  '[PROBLEM_2]',
  '[PROBLEM_3]',
  '[PROBLEM_4]'
]

export default function Problem() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-700 tracking-wider uppercase">[PROBLEM_PREHEAD]</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">[PROBLEM_HEADLINE]</h2>
          <div className="mx-auto mt-8 h-64 md:h-80 rounded-2xl overflow-hidden border border-blue-100 shadow-inner bg-white/60 backdrop-blur">
            {/* [PROBLEM_IMAGE] */}
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop" alt="problem" className="w-full h-full object-cover opacity-90" />
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <div key={idx} className="group relative p-6 rounded-xl border border-blue-100 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-start gap-3">
                {/* [ICON_X] */}
                <div className="h-8 w-8 flex items-center justify-center rounded-md bg-blue-600/10 text-blue-700 shadow-inner">
                  <X className="h-5 w-5" />
                </div>
                <p className="text-slate-700">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
