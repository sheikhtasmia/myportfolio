import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function WorkExperiencePreview() {
  const experiences = [
    {
      role: 'Freelance Digital Marketer',
      company: 'Local Clients',
      period: '2021 — Present',
      desc: 'Helping local businesses grow through social media campaigns, sales strategy, and content creation.'
    },
    {
      role: 'Affiliate Marketing Specialist',
      company: 'Various Online Platforms',
      period: '2022 — Present',
      desc: 'Executing affiliate campaigns and partnerships to boost sales and engagement.'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Work Experience</h3>
        <Link to="/about#work" className="text-primary font-medium hover:underline">See all →</Link>
      </div>

      <div className="space-y-6">
        {experiences.map((e, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">{e.role} <span className="text-sm text-gray-500">@ {e.company}</span></div>
                <div className="text-sm text-gray-400">{e.period}</div>
              </div>
            </div>
            <p className="mt-3 text-gray-700">{e.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
