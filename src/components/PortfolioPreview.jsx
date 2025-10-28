import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const sample = [
  { title: 'Marketing Campaign — Retail', desc: 'Multi-channel campaign with 35% uplift', img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Brand Video', desc: 'Short-form video series for social', img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=800&auto=format&fit=crop' },
  { title: 'Collab — Creator Series', desc: 'Partnered promotion and content creation', img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop' }
]

export default function PortfolioPreview() {
  return (
    <motion.section className="max-w-6xl mx-auto px-4 py-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Portfolio Preview</h3>
        <Link to="/portfolio" className="text-primary font-medium">See all</Link>
      </div>

      <div className="mt-6 grid sm:grid-cols-3 gap-6">
        {sample.map((p, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="font-semibold">{p.title}</div>
              <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
              <div className="mt-3">
                <button className="text-primary text-sm font-medium">View Project →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
