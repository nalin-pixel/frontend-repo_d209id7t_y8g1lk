import React from 'react'

export default function CasePreview() {
  return (
    <section id="cases" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-white" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur shadow-lg">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-5 p-8 md:p-12">
              <span className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 shadow-sm">
                [CASE_BADGE_TEXT]
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-800">Featured Client Case</h3>
              <p className="mt-2 text-slate-600">A short descriptive line about the result achieved, highlighting time-to-hire and quality of candidates.</p>
              <div className="mt-6 inline-flex items-center gap-2 text-blue-700 font-medium">
                <span>View Case Study</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
            <div className="md:col-span-7 h-64 md:h-full">
              {/* [CASE_IMAGE] */}
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop" alt="case" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
