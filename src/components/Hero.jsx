import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <Carousel />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">Sheikh Tasmia</h1>
              <p className="mt-2 text-teal-200 text-lg md:text-2xl">Digital Marketer & Content Creator</p>
              <p className="mt-4 text-white/90 max-w-xl mx-auto">I craft data-driven marketing strategies, create engaging content, and build brands that connect.</p>

              <div className="mt-6 flex justify-center gap-4">
                <Link to="/portfolio" className="px-5 py-2 bg-primary text-white rounded-md shadow hover:opacity-95">View My Work</Link>
                <Link to="/contact" className="px-5 py-2 bg-white/90 text-gray-900 rounded-md shadow hover:opacity-95">Contact Me</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
