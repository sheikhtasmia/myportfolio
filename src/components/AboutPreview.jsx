import React from "react";
import { motion } from "framer-motion";

export default function AboutPreview() {
  const experience = [
    { company: "Wastedd", role: "HR & Data Analytics", year: "2021–Present" },
    { company: "Barakah", role: "Social Media Manager", year: "2022–Present" },
    { company: "Freelancer", role: "Local Projects", year: "2021–Present" },
  ];

  const skills = [
    "Social Media Marketing",
    "Copywriting",
    "Web Development",
    "MS Word",
    "PowerPoint",
    "Excel",
  ];

  const brands = [
    { name: "STechNova", logo: "/assets/stechnova.png", desc: "Digital Agency" },
    { name: "Kinun dot com", logo: "/assets/kinun.png", desc: "E-Commerce Store" },
    { name: "Boidhara", logo: "/assets/boidhara.png", desc: "Bookshop & Publisher" },
  ];

  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Intro */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Hey, I’m Sheikh Tasmia</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          A digital marketer who believes that marketing is about delivering the right message to the right people at the right time.
        </p>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <p className="font-semibold">BBA</p>
          <p>World University of Bangladesh</p>
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
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 px-4 py-2 rounded-full font-medium text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">My Brands</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {brands.map((b, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg flex flex-col items-center text-center"
            >
              <img src={b.logo} alt={b.name} className="w-24 h-24 object-contain mb-4" />
              <h4 className="font-semibold">{b.name}</h4>
              <p className="text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates / Awards */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Certificates & Awards</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Example placeholders */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg text-center">
            <p className="font-semibold">Certificate 1</p>
            <p className="text-gray-400">2023</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg text-center">
            <p className="font-semibold">Award 1</p>
            <p className="text-gray-400">2022</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg text-center">
            <p className="font-semibold">Certificate 2</p>
            <p className="text-gray-400">2021</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
