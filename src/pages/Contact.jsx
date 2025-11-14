import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMediumM, FaRedditAlien, FaPinterestP } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pt-16 pb-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Book an appointment or send a message. I usually reply within 48 hours.
        </p>

        {/* Appointment / Contact Form */}
        <motion.form
          action={endpoint}
          method="POST"
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 mb-12 space-y-4"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</span>
              <input type="text" name="name" required className="mt-1 block w-full rounded border border-gray-200 dark:border-gray-700 shadow-sm p-2 dark:bg-gray-900 dark:text-white" />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
              <input type="email" name="email" required className="mt-1 block w-full rounded border border-gray-200 dark:border-gray-700 shadow-sm p-2 dark:bg-gray-900 dark:text-white" />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</span>
            <textarea name="message" rows="5" required className="mt-1 block w-full rounded border border-gray-200 dark:border-gray-700 shadow-sm p-2 dark:bg-gray-900 dark:text-white"></textarea>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Date & Time</span>
            <input type="datetime-local" name="appointment" className="mt-1 block w-full rounded border border-gray-200 dark:border-gray-700 shadow-sm p-2 dark:bg-gray-900 dark:text-white" />
          </label>

          <button type="submit" className="mt-4 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            Book Appointment
          </button>
        </motion.form>

        {/* Social Media */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Follow Me</h2>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="p-3 bg-white dark:bg-gray-800 shadow rounded-full hover:scale-110 transition transform"><FaFacebookF /></a>
            <a href="#" className="p-3 bg-white dark:bg-gray-800 shadow rounded-full hover:scale-110 transition transform"><FaInstagram /></a>
            <a href="#" className="p-3 bg-white dark:bg-gray-800 shadow rounded-full hover:scale-110 transition transform"><FaLinkedinIn /></a>
            <a href="#" className="p-3 bg-white dark:bg-gray-800 shadow rounded-full hover:scale-110 transition transform"><FaMediumM /></a>
            <a href="#" className="p-3 bg-white dark:bg-gray-800 shadow rounded-full hover:scale-110 transition transform"><FaRedditAlien /></a>
            <a href="#" className="p-3 bg-white dark:bg-gray-800 shadow rounded-full hover:scale-110 transition transform"><FaPinterestP /></a>
          </div>
        </div>

        {/* Company Pages */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">My Brands</h2>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.facebook.com/stechnova0" className="px-4 py-2 bg-white dark:bg-gray-800 shadow rounded-lg hover:bg-teal-600 hover:text-white transition">STechNova</a>
            <a href="https://www.facebook.com/kinundotcom" className="px-4 py-2 bg-white dark:bg-gray-800 shadow rounded-lg hover:bg-teal-600 hover:text-white transition">Kinun.com</a>
            <a href="https://www.facebook.com/BoiDhara" className="px-4 py-2 bg-white dark:bg-gray-800 shadow rounded-lg hover:bg-teal-600 hover:text-white transition">Boidhara</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
