import React from "react";
import { motion } from "framer-motion";

export default function PartnerBrands() {
  const brands = [
    {
      name: "Wastedd",
      logo: "/assets/wastedd.jpg",
      desc: "A sustainable fashion brand promoting eco-conscious design.",
    },
    {
      name: "Peithology",
      logo: "/assets/pethio.jpg",
      desc: "Creative apparel brand with a bold modern identity.",
    },
    {
      name: "Barakah Organic Food",
      logo: "/assets/barakah.jpg",
      desc: "Organic and healthy food brand empowering local farmers.",
    },
    {
      name: "Chitromul",
      logo: "/assets/chitromul11.png",
      desc: "Creative community for artists and visual storytellers.",
    },
    {
      name: "The daily Intizer",
      logo: "/assets/chitromul11.png",
      desc: "News Paper",
    },
    {
      name: "Export House",
      logo: "/assets/chitromul11.png",
      desc: "Export and Import company",
    },
  ];

  return (
    <motion.section
      id="partner-brands"
      className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        Brands I’m Working With
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {brands.map((b, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full flex justify-center mb-4">
              <img
                src={b.logo}
                alt={b.name}
                className="h-20 w-auto object-contain rounded-md"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
              {b.name}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
              {b.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
