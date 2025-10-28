import React from 'react'
import { motion } from 'framer-motion'

export default function WorkingWith() {
  const logos = [
    { name: 'Wastedd', logo: 'https://via.placeholder.com/140x60?text=Brand+A' },
    { name: 'Peithology', logo: 'https://via.placeholder.com/140x60?text=Brand+B' },
    { name: 'Barakah organic food', logo: 'https://via.placeholder.com/140x60?text=Brand+C' },
    { name: 'Chitromul', logo: 'public/chitromul11.png' }
  ]

  return (
    <motion.section className="max-w-6xl mx-auto px-4 py-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h3 className="text-2xl font-semibold mb-6">Working with</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
        {logos.map((l, i) => (
          <div key={i} className="flex items-center justify-center bg-white rounded-md p-3 shadow-sm">
            <img src={l.logo} alt={l.name} className="max-h-12 object-contain" />
          </div>
        ))}
      </div>
    </motion.section>
  )
}
