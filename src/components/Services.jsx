import React from 'react'
import { Briefcase, Users, Sparkles } from 'lucide-react'

const services = [
  { title: '[SERVICE_1_TITLE]', text: '[SERVICE_1_TEXT]', Icon: Briefcase, iconLabel: '[SERVICE_1_ICON]' },
  { title: '[SERVICE_2_TITLE]', text: '[SERVICE_2_TEXT]', Icon: Users, iconLabel: '[SERVICE_2_ICON]' },
  { title: '[SERVICE_3_TITLE]', text: '[SERVICE_3_TEXT]', Icon: Sparkles, iconLabel: '[SERVICE_3_ICON]' }
]

export default function Services() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ title, text, Icon, iconLabel }, idx) => (
            <div key={idx} className="relative p-6 rounded-2xl border border-blue-100 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white flex items-center justify-center shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="text-xs text-blue-700">{iconLabel}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
