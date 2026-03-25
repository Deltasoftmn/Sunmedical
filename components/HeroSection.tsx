'use client'

import { Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative text-white min-h-[600px] flex items-center overflow-hidden">
      {/* Background YouTube video (muted autoplay, no sound) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <iframe
              className="pointer-events-none block h-[56.25vw] min-h-full w-[177.78vh] min-w-full"
              src="https://www.youtube-nocookie.com/embed/ukecU0rqwKg?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=ukecU0rqwKg&modestbranding=1&iv_load_policy=3"
              title="Sun Medical Center background video"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-primary-blue/70" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-down">
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
              className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 flex items-center"
            >
              Үйлчилгээ олох
              <span className="ml-2">→</span>
            </a>
            <a
              href="#preventive"
              className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 flex items-center"
            >
              Эрүүл мэндийн үзлэг
              <span className="ml-2">→</span>
            </a>
            <a
              href="#contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 flex items-center"
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
