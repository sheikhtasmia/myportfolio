import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMediumM, FaRedditAlien, FaPinterestP } from 'react-icons/fa'

export default function Contact() {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-gray-700 mb-6">Book an appointment or send a message. I usually reply within 48 hours.</p>

        <form action={endpoint} method="POST" className="bg-white shadow-md rounded-lg p-6">
          <label className="block mb-3">
            <span className="text-sm font-medium">Name</span>
            <input type="text" name="name" required className="mt-1 block w-full rounded border-gray-200 shadow-sm p-2" />
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium">Email</span>
            <input type="email" name="email" required className="mt-1 block w-full rounded border-gray-200 shadow-sm p-2" />
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium">Message</span>
            <textarea name="message" rows="5" required className="mt-1 block w-full rounded border-gray-200 shadow-sm p-2"></textarea>
          </label>

          <div className="flex items-center justify-between mt-4">
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">Send Message</button>
            <small className="text-gray-500">Or book via email after sending a message.</small>
          </div>
        </form>

        <div className="mt-8">
          <h4 className="font-semibold mb-3">Social</h4>
          <div className="flex gap-3">
            <a className="p-2 rounded bg-white shadow" href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a className="p-2 rounded bg-white shadow" href="#" aria-label="Instagram"><FaInstagram /></a>
            <a className="p-2 rounded bg-white shadow" href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a className="p-2 rounded bg-white shadow" href="#" aria-label="Medium"><FaMediumM /></a>
            <a className="p-2 rounded bg-white shadow" href="#" aria-label="Reddit"><FaRedditAlien /></a>
            <a className="p-2 rounded bg-white shadow" href="#" aria-label="Pinterest"><FaPinterestP /></a>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-semibold mb-3">Company Pages</h4>
          <div className="flex gap-3">
            <a className="p-2 rounded bg-white shadow" href="#" aria-label="STechNova">STechNova</a>
            <a className="p-2 rounded bg-white shadow" href="#" aria-label="Kinun">Kinun.com</a>
            <a className="p-2 rounded bg-white shadow" href="#" aria-label="Boidhara">Boidhara</a>
          </div>
        </div>
      </div>
    </div>
  )
}
