'use client'

import { Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gray-50">
      {/* Background YouTube video (muted autoplay, no sound) */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60"
          src="https://www.youtube-nocookie.com/embed/ukecU0rqwKg?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=ukecU0rqwKg&modestbranding=1&iv_load_policy=3"
          title="Sun Medical Center background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          aria-hidden="true"
        />
      </div>
      {/* Overlay for text readability - Light Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:to-white/20" />

      <div className="container w-[1400px] mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl text-left animate-slide-in-left">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary-darkBlue leading-tight">
            Sun Medical Center
            <br />
            <span className="text-primary-blue">Улаанбаатар</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 font-medium max-w-2xl">
            Монголд дэлхийн жишигт хүрсэн эрүүл мэндийн үйлчилгээ
          </p>
          {/* Action Buttons */}
          {/* <div className="flex flex-wrap justify-start gap-4">
            <a
              href="#preventive"
              className="bg-primary-darkBlue text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-blue hover:-translate-y-0.5 transition-all duration-300 flex items-center shadow-lg shadow-primary-darkBlue/30"
            >
              Манай үйлчилгээ
              <span className="ml-2">→</span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
