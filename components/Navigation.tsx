'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const pathname = usePathname()
  const isSubpage = pathname === '/bagts' || pathname === '/emchilgee' || pathname === '/cabinet' || pathname === '/emch'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const link = (hash: string) => (isSubpage ? `/${hash}` : hash)

  return (
    <nav className="bg-white text-primary-darkBlue sticky top-0 z-50 overflow-visible shadow-sm">
      <div className="w-full max-w-[1400px] mx-auto px-4 overflow-visible">
        <div className="flex items-center justify-between h-20 overflow-visible">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center">
              {!logoError ? (
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src="/logo_new.png"
                    alt="Sun Medical Center Logo"
                    width={240}
                    height={150}
                    className="h-24 w-auto object-contain relative top-4"
                    priority
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="h-16 flex items-center justify-center px-2 text-xl md:text-2xl font-bold">
                  <span className="text-primary-darkBlue">SUN MEDICAL</span>
                  <span className="ml-2 text-xs md:text-sm text-gray-500">CENTER</span>
                </div>
              )}
            </a>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
            <a href="/about" className="font-semibold hover:text-primary-blue transition whitespace-nowrap text-sm">
              МАНАЙ ЭМНЭЛЭГ
            </a>
            <a href="/preventive" className="font-semibold hover:text-primary-blue transition whitespace-nowrap text-sm">
              УРЬДЧИЛАН СЭРГИЙЛЭХ ҮЗЛЭГ
            </a>
            <a href="/emchilgee" className="font-semibold hover:text-primary-blue transition whitespace-nowrap text-sm">
              ЭМЧИЛГЭЭ
            </a>
            <a href="/cabinet" className="font-semibold hover:text-primary-blue transition whitespace-nowrap text-sm">
              КАБИНЕТ
            </a>
            <a href="/emch" className="font-semibold hover:text-primary-blue transition whitespace-nowrap text-sm">
              ЭМЧ НАР
            </a>
            <div className="relative group flex items-center h-20">
              <button className="font-semibold hover:text-primary-blue transition whitespace-nowrap text-sm flex items-center">
                ХАМТЫН АЖИЛЛАГАА
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden transform group-hover:-translate-y-1 translate-y-2">
                <div className="absolute top-0 left-0 w-full h-2 bg-transparent -translate-y-full"></div> {/* Hover bridge */}
                <a href="/corporate" className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#3b82f6] transition-colors border-b border-gray-50">
                  Санамж бичиг
                </a>
                <a href="/insurance" className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#3b82f6] transition-colors border-b border-gray-50">
                  Байнгын хамтын ажиллагаа
                </a>
                <a href={link('#contact')} className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#3b82f6] transition-colors">
                  Холбоо барих
                </a>
              </div>
            </div>
          </div>

          {/* CTA - Right (Pill button) */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href="/bagts"
              className="bg-primary-darkBlue text-white font-bold px-7 py-3 rounded-full hover:bg-primary-blue hover:scale-105 transition-all shadow-sm text-sm"
            >
              Багц үзэх
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-primary-darkBlue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t border-gray-100 bg-white shadow-xl absolute left-0 right-0 top-20 z-50">
            <a href="/about" className="block py-2.5 px-6 font-semibold hover:bg-gray-50 transition text-sm" onClick={() => setIsMenuOpen(false)}>
              МАНАЙ ЭМНЭЛЭГ
            </a>
            <a href="/preventive" className="block py-2.5 px-6 font-semibold hover:bg-gray-50 transition text-sm" onClick={() => setIsMenuOpen(false)}>
              УРЬДЧИЛАН СЭРГИЙЛЭХ ҮЗЛЭГ
            </a>
            <a href="/emchilgee" className="block py-2.5 px-6 font-semibold hover:bg-gray-50 transition text-sm" onClick={() => setIsMenuOpen(false)}>
              ЭМЧИЛГЭЭ
            </a>
            <a href="/cabinet" className="block py-2.5 px-6 font-semibold hover:bg-gray-50 transition text-sm" onClick={() => setIsMenuOpen(false)}>
              КАБИНЕТ
            </a>
            <a href="/emch" className="block py-2.5 px-6 font-semibold hover:bg-gray-50 transition text-sm" onClick={() => setIsMenuOpen(false)}>
              ЭМЧ НАР
            </a>

            {/* Mobile Submenu */}
            <div className="border-y border-gray-50 my-1">
              <div className="block py-2.5 px-6 font-semibold text-sm text-gray-900">
                ХАМТЫН АЖИЛЛАГАА
              </div>
              <div className="bg-gray-50/50 pl-10 pr-6 pb-3 pt-1 flex flex-col space-y-3">
                <a href="/corporate" className="text-sm font-medium text-gray-600 hover:text-[#3b82f6] transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Байгууллагын багц
                </a>
                <a href="/insurance" className="text-sm font-medium text-gray-600 hover:text-[#3b82f6] transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Даатгал
                </a>
                <a href={link('#contact')} className="text-sm font-medium text-gray-600 hover:text-[#3b82f6] transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Холбоо барих
                </a>
              </div>
            </div>

            <div className="p-4 pt-2">
              <a
                href="/bagts"
                className="block w-full text-center bg-primary-darkBlue text-white font-bold py-2.5 px-4 rounded-full shadow-sm hover:bg-primary-blue transition-all text-sm"
              >
                Багц үзэх
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
