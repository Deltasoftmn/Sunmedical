'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const pathname = usePathname()
  const isBagts = pathname === '/bagts'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const link = (hash: string) => (isBagts ? `/${hash}` : hash)

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

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-center">
            <a href={link('#discover')} className="hover:text-primary-yellow transition whitespace-nowrap text-sm lg:text-base">
              МАНАЙ ЭМНЭЛЭГ
            </a>
            <a href={link('#preventive')} className="hover:text-primary-yellow transition whitespace-nowrap text-sm lg:text-base">
              УРЬДЧИЛАН СЭРГИЙЛЭХ ҮЗЛЭГ
            </a>
            <a href={link('#contact')} className="hover:text-primary-yellow transition whitespace-nowrap text-sm lg:text-base">
              ХОЛБОО БАРИХ
            </a>
          </div>

          {/* Багц CTA - unique styled button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href="/bagts"
              className="bg-primary-yellow text-primary-blue font-bold px-5 py-2.5 rounded-lg hover:bg-primary-yellow/90 hover:scale-105 transition-all shadow-md"
            >
              Багц үзэх
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
            <a href={link('#discover')} className="block py-2 hover:text-primary-yellow transition" onClick={() => setIsMenuOpen(false)}>
              МАНАЙ ЭМНЭЛЭГ
            </a>
            <a href={link('#preventive')} className="block py-2 hover:text-primary-yellow transition" onClick={() => setIsMenuOpen(false)}>
              УРЬДЧИЛАН СЭРГИЙЛЭХ ҮЗЛЭГ
            </a>
            <a href={link('#contact')} className="block py-2 hover:text-primary-yellow transition" onClick={() => setIsMenuOpen(false)}>
              ХОЛБОО БАРИХ
            </a>
            <a
              href="/bagts"
              className="mt-3 inline-block w-full text-center bg-primary-yellow text-primary-blue font-bold py-3 px-4 rounded-lg"
            >
              Багц үзэх
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
