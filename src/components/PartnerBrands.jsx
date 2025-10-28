import React from 'react'
import { motion } from 'framer-motion'

export default function PartnerBrands() {
  const logos = [
    { name: 'BrandA', logo: 'https://via.placeholder.com/140x60?text=Brand+A' },
    { name: 'BrandB', logo: 'https://via.placeholder.com/140x60?text=Brand+B' },
    { name: 'BrandC', logo: 'https://via.placeholder.com/140x60?text=Brand+C' },
    { name: 'BrandD', logo: 'https://via.placeholder.com/140x60?text=Brand+D' }
  ]

  return (
    <motion.section className="max-w-6xl mx-auto px-4 py-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h3 className="text-2xl font-semibold mb-6">Partner Brands</h3>
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
