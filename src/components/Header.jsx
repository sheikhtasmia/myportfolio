import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-semibold text-lg text-gray-900">Sheikh Tasmia</Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" className={({isActive}) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary'} end>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary'}>About</NavLink>
            <NavLink to="/portfolio" className={({isActive}) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary'}>Portfolio</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary'}>Contact</NavLink>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative">
      <button onClick={() => setOpen(v => !v)} className="p-2 rounded-md bg-white/60 shadow">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-3">
          <NavLink to="/" onClick={() => setOpen(false)} className="block py-2">Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className="block py-2">About</NavLink>
          <NavLink to="/portfolio" onClick={() => setOpen(false)} className="block py-2">Portfolio</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="block py-2">Contact</NavLink>
        </div>
      )}
    </div>
  )
}
