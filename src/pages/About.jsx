import React from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const experience = [
    { company: "Local Clients", role: "Sales & Marketing", year: "2021–Present" },
    { company: "Affiliate Projects", role: "Digital Marketing", year: "2022–Present" },
    { company: "Freelancer", role: "Content & Social Media", year: "2021–Present" },
    { company: "Wastedd", role: "HR & Data Analytics", year: "2024–Present" },
    { company: "Barakah", role: "Social Media Manager", year: "2025–Present" },
    { company: "Freelancer", role: "Local Projects", year: "2021–Present" },
  ]

  const skills = [
    { name: "Social Media Marketing", icon: "/assets/Social Media Marketing.webp" },
    { name: "Copywriting", icon: "/assets/Copywriting.png" },
    { name: "Web Development", icon: "/assets/Web Development.jpg" },
    { name: "MS Word", icon: "/assets/MS Word.svg" },
    { name: "PowerPoint", icon: "/assets/PowerPoint.svg" },
    { name: "Excel", icon: "/assets/Excel.svg" },
  ]

  const brands = [
    { name: "STechNova", logo: "/assets/stechnova logo.png", desc: "Digital Agency", founder: true },
    { name: "Kinun dot com", logo: "/assets/kinun logo.png", desc: "E-Commerce Store", founder: true },
    { name: "Boidhara", logo: "/assets/boidhara.jpg", desc: "Bookshop & Publisher", founder: true },
  ]

  const certificates = [
    { title: "Digital Marketing Certificate ", year: "2023", img: "/assets/cert1.jepg" },
    { title: "Public Speaking", year: "2022", img: "/assets/cert3.jpg" },
    { title: "Data analytics", year: "2021", img: "/assets/cert2.jpg" },
    { title: "From YSDI trust", year: "2021", img: "/assets/certificarte from ysdi.png" },
  ]

  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-16 pt-24" // pt-24 for header overlap
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Intro / Bio */}
      <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Hey, I’m Sheikh Tasmia</h2>
          <p className="text-gray-700 mb-2">
            A digital marketer who delivers the right message to the right people at the right time.
          </p>
          <p className="text-gray-700">
            Bachelor of Business Administration student at World University of Bangladesh, with experience in sales, content creation, affiliate marketing, and social media management.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/assets/profile.jpg" alt="Sheikh Tasmia" className="w-56 h-56 object-cover rounded-full shadow-lg" />
        </div>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Experience</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="font-semibold">{exp.role}</h4>
              <p className="text-gray-500">{exp.company}</p>
              <p className="text-gray-400">{exp.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-teal-100 dark:bg-teal-800 p-3 rounded-xl shadow hover:shadow-lg cursor-pointer transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
              <span className="text-sm font-medium text-teal-800 dark:text-teal-100">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* My Business */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Founder of</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {brands.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={b.logo} alt={b.name} className="w-24 h-24 object-contain mb-4" />
              <h4 className="font-semibold">{b.name}</h4>
              <p className="text-gray-500">{b.desc}</p>
              {b.founder && <span className="mt-2 text-sm font-medium text-teal-600">Founder</span>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificates / Awards */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Certificates & Awards</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {certificates.map((c, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={c.img} alt={c.title} className="w-20 h-20 object-contain mx-auto mb-2" />
              <p className="font-semibold">{c.title}</p>
              <p className="text-gray-400">{c.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

