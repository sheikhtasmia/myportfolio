import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Brands() {
  const brands = [
    {
      name: "STechNova",
      desc: "Digital agency specializing in growth & marketing solutions.",
      logo: "public/assets/stechnova.png",
      social: {
        fb: "https://www.facebook.com/stechnova0",
        ig: "https://www.instagram.com/stechnova0",
        linkedin: "https://www.linkedin.com/company/stechnova",
      },
    },
    {
      name: "Kinun dot com",
      desc: "E-commerce store delivering quality products.",
      logo: "public/assets/kinun.png",
      social: {
        fb: "https://www.facebook.com/kinundotcom",
        ig: "https://www.instagram.com/kinundotcom",
        linkedin: "https://www.linkedin.com/company/kinundotcom",
      },
    },
    {
      name: "Boidhara",
      desc: "Bookshop & Publisher promoting literature and knowledge.",
      logo: "public/assets/boidhara.png",
      social: {
        fb: "https://www.facebook.com/BoiDhara",
        ig: "https://www.instagram.com/boidhara",
        linkedin: "https://www.linkedin.com/company/boidhara",
      },
    },
  ];

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">My Brands</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {brands.map((b, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-24 h-24 mb-4">
              <img
                src={b.logo}
                alt={b.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {b.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">{b.desc}</p>

            <div className="mt-4 flex gap-4">
              {b.social.fb && (
                <a
                  href={b.social.fb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaFacebookF />
                </a>
              )}
              {b.social.ig && (
                <a
                  href={b.social.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition"
                >
                  <FaInstagram />
                </a>
              )}
              {b.social.linkedin && (
                <a
                  href={b.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition"
                >
                  <FaLinkedinIn />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
