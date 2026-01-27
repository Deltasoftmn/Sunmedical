'use client'

import { Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative text-white min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/image1.jpg)' }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-primary-blue/70" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sun Medical Center
            <br />
            <span className="text-primary-yellow">Улаанбаатар</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Монголд дэлхийн жишигт хүрсэн эрүүл мэндийн үйлчилгээ
          </p>
          
          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Эмч, мэргэжлээр хайх..."
                className="flex-1 px-6 py-4 text-gray-800 focus:outline-none"
              />
              <button className="bg-primary-yellow text-primary-blue p-4 hover:opacity-90 transition">
                <Search className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#preventive"
              className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Үйлчилгээ олох
              <span className="ml-2">→</span>
            </a>
            <a
              href="#preventive"
              className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Эрүүл мэндийн үзлэг
              <span className="ml-2">→</span>
            </a>
            <a
              href="#contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Мэргэжилтний зөвлөгөө
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
