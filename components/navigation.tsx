"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Linkedin } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition text-white">
            <span>IIT MADRAS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-amber-400 transition text-sm text-white">
              Home
            </Link>
            <Link href="/people" className="hover:text-amber-400 transition text-sm text-white">
              People
            </Link>
            <Link href="/updates" className="hover:text-amber-400 transition text-sm text-white">
              Updates
            </Link>
            <Link href="/achievements" className="hover:text-amber-400 transition text-sm text-white">
              Achievements
            </Link>
            <Link href="/teaching" className="hover:text-amber-400 transition text-sm text-white">
              Teaching
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition text-sm text-white">
              Contact
            </Link>
          </div>

          {/* Right side - LinkedIn */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-amber-400 hover:text-amber-300 transition hidden sm:block">
              <Linkedin size={20} />
            </a>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-black/40 backdrop-blur-md rounded-lg mt-2">
            <Link href="/" className="block px-4 py-2 hover:bg-white/10 rounded transition text-white text-sm">
              Home
            </Link>
            <Link href="/people" className="block px-4 py-2 hover:bg-white/10 rounded transition text-white text-sm">
              People
            </Link>
            <Link href="/updates" className="block px-4 py-2 hover:bg-white/10 rounded transition text-white text-sm">
              Updates
            </Link>
            <Link
              href="/achievements"
              className="block px-4 py-2 hover:bg-white/10 rounded transition text-white text-sm"
            >
              Achievements
            </Link>
            <Link href="/teaching" className="block px-4 py-2 hover:bg-white/10 rounded transition text-white text-sm">
              Teaching
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-white/10 rounded transition text-white text-sm">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
