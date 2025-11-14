import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    img: "public/assets/slide1.jpg",
    role: "Digital Marketer",
    about: "Crafting data-driven marketing strategies that grow brands and reach audiences.",
  },
  {
    img: "public/assets/slide2.jpg",
    role: "Content Creator",
    about: "Creating engaging content that tells stories and builds connections.",
  },
  {
    img: "public/assets/slide3.jpg",
    role: "Writer",
    about: "Writing insightful articles and copy that resonates with readers.",
  },
  {
    img: "public/assets/slide4.jpg",
    role: "Entrepreneur",
    about: "Building brands, leading teams, and driving innovative projects.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={slide.img}
                alt={slide.role}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold drop-shadow-lg"
                  >
                    Sheikh Tasmia
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-2 text-2xl md:text-3xl font-semibold text-teal-300"
                  >
                    {slide.role}
                  </motion.p>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-4 max-w-xl mx-auto text-lg md:text-xl"
                  >
                    {slide.about}
                  </motion.p>

                  <div className="mt-6 flex justify-center gap-4">
                    <Link
                      to="/portfolio"
                      className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-md shadow text-white font-medium transition"
                    >
                      View My Work
                    </Link>
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-white/90 hover:bg-white rounded-md shadow text-gray-900 font-medium transition"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 p-3 rounded-full hover:bg-black/50 transition"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 p-3 rounded-full hover:bg-black/50 transition"
      >
        &#10095;
      </button>
    </section>
  );
}
