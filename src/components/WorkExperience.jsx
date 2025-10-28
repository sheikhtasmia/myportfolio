import React from 'react'
import { motion } from 'framer-motion'

export default function WorkExperience() {
  const experiences = [
    { role: 'Founder & CEO', company: 'STechNova', period: '2019 — Present', desc: 'Digital agency focusing on growth marketing, web development and branding.' },
    { role: 'Founder', company: 'Kinun.com', period: '2020 — Present', desc: 'E-commerce store with curated products and customer-first experience.' },
    { role: 'Owner', company: 'Boidhara', period: '2016 — Present', desc: 'Bookshop & publisher focused on local literature and distribution.' }
  ]

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
      <div className="space-y-4">
        {experiences.map((e, i) => (
          <div key={i} className="card">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-medium">{e.role} <span className="text-sm text-gray-500">@ {e.company}</span></div>
                <div className="text-sm text-gray-500">{e.period}</div>
              </div>
            </div>
            <p className="mt-3 text-gray-700">{e.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
