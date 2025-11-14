import React from "react";
import { motion } from "framer-motion";

export default function Team() {
  const members = [
    {
      name: "Arafat Sani",
      role: "Website Developer",
      img: "/assets/arafat.jpg",
    },
    {
      name: "Habiba Swety",
      role: "Graphics Designer",
      img: "/assets/habiba.jpg",
    },
    {
      name: "Sakib",
      role: "Graphics Designer",
      img: "/assets/sakib.jpg",
    },
  ];

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="team"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        Meet My Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {members.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md mb-4">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {m.name}
            </h3>
            <p className="text-indigo-500 font-medium mt-1">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
