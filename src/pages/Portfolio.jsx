import React from 'react'
import { motion } from 'framer-motion'

const data = {
  'Marketing Projects': [
    { title: 'Retail Growth Campaign', desc: 'Performance-focused ads & email', img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop' },
    { title: 'Product Launch Strategy', desc: 'Full funnel launch plan', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop' }
  ],
  'Content Creations': [
    { title: 'Brand Documentary', desc: 'Short film series', img: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=800&auto=format&fit=crop' },
    { title: 'Social Series', desc: 'Short-form social video', img: 'https://images.unsplash.com/photo-1542223616-40d6bfb824cd?q=80&w=800&auto=format&fit=crop' }
  ],
  'Collaborations': [
    { title: 'Creator Collab 01', desc: 'Cross-promotion & co-created content', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop' }
  ]
}

// Sample preview projects (from PortfolioPreview)
const preview = [
  { title: 'Marketing Campaign — Retail', desc: 'Multi-channel campaign with 35% uplift', img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Brand Video', desc: 'Short-form video series for social', img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=800&auto=format&fit=crop' },
  { title: 'Collab — Creator Series', desc: 'Partnered promotion and content creation', img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop' }
]

export default function Portfolio() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-6">Portfolio</motion.h1>

        {/* Preview Projects */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Recent Work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {preview.map((p, i) => (
              <motion.div
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                  <h4 className="text-white text-xl font-semibold">{p.title}</h4>
                  <p className="text-white text-sm mt-2">{p.desc}</p>
                  <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md shadow hover:bg-primary/90 transition">View Project →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Full Portfolio by Category */}
        {Object.entries(data).map(([category, items]) => (
          <section key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((p, i) => (
                <motion.div
                  key={i}
                  className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                    <h4 className="text-white text-xl font-semibold">{p.title}</h4>
                    <p className="text-white text-sm mt-2">{p.desc}</p>
                    <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md shadow hover:bg-primary/90 transition">View →</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
