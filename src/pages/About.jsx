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

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-start gap-10 mb-12">
          
          {/* Lazy Loaded Profile Image */}
          <motion.img
            src="/profile.webp"
            loading="lazy"
            alt="Sheikh Tasmia"
            className="w-40 h-40 object-cover rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          />

          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl font-semibold">Hi, I’m Tasmia 👋</h2>
            <p className="text-gray-700">
              I am a digital marketer and content creator focused on growth, 
              storytelling and measurable outcomes. I lead teams and run 
              multiple ventures in the digital and publishing space.
            </p>
          </div>
        </div>

        {/* Grid Sections */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Education */}
          <section className="card">
            <h3 className="font-semibold text-xl mb-2">Education</h3>
            <p className="text-gray-700">
              Formal training and practical experience in marketing, 
              communications, and digital strategy. (Add specifics)
            </p>
          </section>

          {/* Experience */}
          <section className="card">
            <h3 className="font-semibold text-xl mb-2">Experience</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Lead digital marketing projects across e-commerce and publishing.</li>
              <li>Built brand strategies and content workflows for multiple clients.</li>
            </ul>
          </section>

          {/* Ownership */}
          <section className="card">
            <h3 className="font-semibold text-xl mb-2">Ownership</h3>
            <div>
              <div className="mb-3">
                <div className="font-medium">STechNova</div>
                <div className="text-sm text-gray-600">Digital agency offering marketing, web & branding services.</div>
              </div>
              <div className="mb-3">
                <div className="font-medium">Kinun.com</div>
                <div className="text-sm text-gray-600">E-commerce platform with curated products.</div>
              </div>
              <div>
                <div className="font-medium">Boidhara</div>
                <div className="text-sm text-gray-600">Bookshop & publisher focusing on local literature.</div>
              </div>
            </div>
          </section>

          {/* Skills Section — Improved */}
          <section className="card">
            <h3 className="font-semibold text-xl mb-4">Skills</h3>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Digital Marketing",
                "Brand Strategy",
                "Content Writing",
                "SEO",
                "Social Media Ads",
                "Team Leadership",
                "Email Marketing",
                "Web Management"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Certificates — Enlarged + Cleaner */}
        <div className="mt-14">
          <h2 className="text-xl font-semibold mb-4">Certificates</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "/cert1.webp", title: "Google Digital Marketing" },
              { img: "/cert2.webp", title: "Meta Social Media Marketing" },
              { img: "/cert3.webp", title: "HubSpot Content Strategy" }
            ].map((c, index) => (
              <div key={index} className="shadow-lg rounded-xl p-3 bg-white">
                
                {/* Bigger full-size certificate */}
                <img 
                  src={c.img} 
                  loading="lazy"
                  alt={c.title}
                  className="w-full h-56 object-cover rounded-lg"
                />

                {/* Smaller title */}
                <div className="text-center text-sm text-gray-600 mt-2">
                  {c.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
