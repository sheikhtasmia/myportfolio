import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMediumM, FaRedditAlien, FaPinterestP } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div className="text-sm">&copy; {new Date().getFullYear()} Sheikh Tasmia. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="p-2 rounded hover:bg-gray-800" aria-label="Facebook" href="https://www.facebook.com/sheikhtasmia25/" rel="noreferrer"><FaFacebookF /></a>
            <a className="p-2 rounded hover:bg-gray-800" aria-label="Instagram" href="https://www.instagram.com/iamsheikhtasmia/" rel="noreferrer"><FaInstagram /></a>
            <a className="p-2 rounded hover:bg-gray-800" aria-label="LinkedIn" href="https://www.linkedin.com/in/sheikh-tasmia/" rel="noreferrer"><FaLinkedinIn /></a>
            <a className="p-2 rounded hover:bg-gray-800" aria-label="Medium" href=" https://medium.com/@sheikhtasmia" rel="noreferrer"><FaMediumM /></a>
            <a className="p-2 rounded hover:bg-gray-800" aria-label="Reddit" href="#" rel="noreferrer"><FaRedditAlien /></a>
            <a className="p-2 rounded hover:bg-gray-800" aria-label="Pinterest" href="#" rel="noreferrer"><FaPinterestP /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
