import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AboutPreview() {
  return (
    <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="card">
          <h3 className="text-2xl font-semibold mb-2">Who I Am</h3>
          <p className="text-gray-700">I'm Sheikh Tasmia, a digital marketer and content creator with experience in building campaigns, growing brands, and delivering measurable results. I lead teams, run agencies and create content that resonates.</p>
          <div className="mt-4">
            <Link to="/about" className="text-primary font-medium">Read more →</Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="font-semibold mb-2">Key Skills</h4>
          <ul className="text-gray-700 space-y-2">
            <li>Digital Strategy & Growth</li>
            <li>Content Strategy & Creation</li>
            <li>Social Media Campaigns</li>
            <li>SEO & Analytics</li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
