import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50" />

      <div className="relative grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/70 backdrop-blur border border-blue-100 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-blue-700">Premium Recruiting Agency</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-blue-900 to-blue-600 bg-clip-text text-transparent">
            [HEADLINE_PLACEHOLDER]
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-xl">
            [SUBHEADLINE_PLACEHOLDER]
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all">
              <span>[CTA_PRIMARY]</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#cases" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/70 backdrop-blur px-6 py-3 text-blue-700 border border-blue-100 shadow-sm hover:bg-white transition-all">
              <PlayCircle className="h-5 w-5" />
              <span>[CTA_SECONDARY]</span>
            </a>
          </div>

          <div className="flex -space-x-2 items-center pt-4">
            {/* [SOCIAL_PROOF] */}
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/96?img=${i + 10}`}
                alt="avatar"
                className="h-10 w-10 rounded-full ring-2 ring-white shadow-sm object-cover"
              />
            ))}
            <span className="ml-3 text-sm text-slate-600">[SOCIAL_PROOF]</span>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-2xl border border-blue-100 bg-white/60 backdrop-blur overflow-hidden shadow-xl">
          {/* [HERO_3D_ASSET] */}
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Subtle gradient glows */}
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-tr from-blue-200/30 via-transparent to-blue-300/30 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
