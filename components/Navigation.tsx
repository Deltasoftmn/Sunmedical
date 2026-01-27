'use client'

import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <nav className="bg-primary-blue text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center">
              {!logoError ? (
                <div className="relative h-10 w-auto bg-white rounded-lg px-2 py-1 flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Sun Medical Center Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                    priority
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="text-xl md:text-2xl font-bold">
                  <span className="text-white">SUN MEDICAL</span>
                  <span className="ml-2 text-xs md:text-sm text-gray-300">CENTER</span>
                </div>
              )}
            </a>
          </div>

          {/* Navigation Links - Center/Right */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-center">
            <a href="#discover" className="hover:text-primary-yellow transition flex items-center whitespace-nowrap text-sm lg:text-base">
              МАНАЙ ЭМНЭЛЭГ
              <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#preventive" className="hover:text-primary-yellow transition flex items-center whitespace-nowrap text-sm lg:text-base">
              УРЬДЧИЛАН СЭРГИЙЛЭХ ҮЗЛЭГ
              <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#contact" className="hover:text-primary-yellow transition flex items-center whitespace-nowrap text-sm lg:text-base">
              ХОЛБОО БАРИХ
              <ChevronDown className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-darkBlue">
            <a href="#discover" className="block py-2 hover:text-primary-yellow transition">
              МАНАЙ ЭМНЭЛЭГ
            </a>
            <a href="#preventive" className="block py-2 hover:text-primary-yellow transition">
              УРЬДЧИЛАН СЭРГИЙЛЭХ ҮЗЛЭГ
            </a>
            <a href="#contact" className="block py-2 hover:text-primary-yellow transition">
              ХОЛБОО БАРИХ
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
