import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-6">About</motion.h1>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="card">
            <h3 className="font-semibold text-xl mb-2">Who I Am</h3>
            <p className="text-gray-700">I am a digital marketer and content creator focused on growth, storytelling and measurable outcomes. I lead teams and run multiple ventures in the digital and publishing space.</p>
          </section>

          <section className="card">
            <h3 className="font-semibold text-xl mb-2">Experience</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Lead digital marketing projects across e-commerce and publishing.</li>
              <li>Built brand strategies and content workflows for multiple clients.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
