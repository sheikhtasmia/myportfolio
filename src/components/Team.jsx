import React from 'react'
import { motion } from 'framer-motion'

export default function Team() {
  const members = [
    { name: 'Arif H.', role: 'Content Lead', img: 'https://via.placeholder.com/200?text=Arif' },
    { name: 'Maya S.', role: 'Design Lead', img: 'https://via.placeholder.com/200?text=Maya' },
    { name: 'Rahim K.', role: 'Growth Manager', img: 'https://via.placeholder.com/200?text=Rahim' }
  ]

  return (
    <motion.section className="max-w-6xl mx-auto px-4 py-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h3 className="text-2xl font-semibold mb-6">Team</h3>
      <div className="grid sm:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src={m.img} alt={m.name} className="mx-auto rounded-full w-28 h-28 object-cover" />
            <div className="mt-4 font-semibold">{m.name}</div>
            <div className="text-sm text-gray-600">{m.role}</div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
