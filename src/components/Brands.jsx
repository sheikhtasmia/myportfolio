import React from 'react'
import { motion } from 'framer-motion'

export default function Brands() {
  const brands = [
    { name: 'STechNova', desc: 'Digital agency', url: 'https://www.facebook.com/stechnova0' },
    { name: 'Kinun dot com', desc: 'Store', url: 'https://www.facebook.com/kinundotcom' },
    { name: 'Boidhara', desc: 'Bookshop & Publisher', url: 'https://www.facebook.com/BoiDhara' }
  ]

  return (
    <motion.section className="max-w-6xl mx-auto px-4 py-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h3 className="text-2xl font-semibold mb-6">My Brands</h3>
      <div className="grid sm:grid-cols-3 gap-6">
        {brands.map((b, i) => (
          <a key={i} href={b.url} className="card hover:shadow-lg transition-shadow">
            <div className="text-lg font-semibold">{b.name}</div>
            <div className="text-sm text-gray-600 mt-2">{b.desc}</div>
          </a>
        ))}
      </div>
    </motion.section>
  )
}
