import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Page Title */}
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-3xl font-bold mb-6"
        >
          About — Sheikh Tasmia
        </motion.h1>

        {/* About Text (Education + Experience together) */}
        <section className="card mb-8">
          <p className="text-gray-700">
            Hi, I am Sheikh Tasmia, a digital marketer and content creator focused on growth, storytelling, and measurable outcomes. I lead teams and run multiple ventures in the digital and publishing space. <br /><br />
            I hold a BBA from World University of Bangladesh and have hands-on experience building my own brands including STechNova, Kinun.com, and Boidhara. I develop brand strategies, manage content workflows, and deliver digital marketing projects across e-commerce and publishing.
          </p>
        </section>

          {/* Ownership */}
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

        {/* Skill Section — Improved */}
        <section className="card mt-8">
          <h3 className="font-semibold text-xl mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Digital Marketing",
              "Brand Strategy",
              "Content Writing",
              "SEO",
              "Social Media Ads",
              "Team Leadership",
              "Email Marketing",
              "Web Management"
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 shadow-sm text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certificates Section — Bigger Images */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Certificates</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "/cert1.webp", title: "Google Digital Marketing" },
              { img: "/cert2.webp", title: "Meta Social Media Marketing" },
              { img: "/cert3.webp", title: "HubSpot Content Strategy" }
            ].map((cert, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg">
                <img
                  src={cert.img}
                  loading="lazy"
                  alt={cert.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="text-center text-sm text-gray-600 mt-2">{cert.title}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
