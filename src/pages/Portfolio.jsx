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

export default function Portfolio() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-6">Portfolio</motion.h1>

        {Object.entries(data).map(([category, items]) => (
          <section key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((p, i) => (
                <article key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
                  <div className="p-4">
                    <div className="font-semibold">{p.title}</div>
                    <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                    <div className="mt-3">
                      <a className="text-primary font-medium">View →</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
