import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-6">About — Sheikh Tasmia</motion.h1>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="card">
            <h3 className="font-semibold text-xl mb-2">Who I Am</h3>
            <p className="text-gray-700">I am a digital marketer and content creator focused on growth, storytelling and measurable outcomes. I lead teams and run multiple ventures in the digital and publishing space.</p>
          </section>

          <section className="card">
            <h3 className="font-semibold text-xl mb-2">Education</h3>
            <p className="text-gray-700">Formal training and practical experience in marketing, communications, and digital strategy. (Add specifics)</p>
          </section>

          <section className="card">
            <h3 className="font-semibold text-xl mb-2">Experience</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Lead digital marketing projects across e-commerce and publishing.</li>
              <li>Built brand strategies and content workflows for multiple clients.</li>
            </ul>
          </section>

          <section className="card">
            <h3 className="font-semibold text-xl mb-2">Ownership</h3>
            <div>
              <div className="mb-3">
                <div className="font-medium">STechNova</div>
                <div className="text-sm text-gray-600">A digital agency delivering marketing, web and branding services.</div>
              </div>
              <div className="mb-3">
                <div className="font-medium">Kinun.com</div>
                <div className="text-sm text-gray-600">An e-commerce store with a curated selection of products.</div>
              </div>
              <div>
                <div className="font-medium">Boidhara</div>
                <div className="text-sm text-gray-600">A bookshop and publisher focusing on local literature and distribution.</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
