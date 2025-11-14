import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const sample = [
  { title: 'Marketing Campaign — Retail', desc: 'Multi-channel campaign with 35% uplift', img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Brand Video', desc: 'Short-form video series for social', img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=800&auto=format&fit=crop' },
  { title: 'Collab — Creator Series', desc: 'Partnered promotion and content creation', img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop' }
];

export default function PortfolioPreview() {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-bold">Portfolio Preview</h3>
        <Link to="/portfolio" className="text-primary font-medium hover:underline">See all</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sample.map((p, i) => (
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
    </motion.section>
  );
}
