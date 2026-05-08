'use client'

import Image from 'next/image'
import { CheckCircle2, Users, UserRound, HeartPulse, Building2, ArrowRight } from 'lucide-react'
import CountUp from './CountUp'

const stats = [
  {
    icon: Users,
    number: '20+',
    label: 'ЖИЛИЙН ТУРШЛАГА',
  },
  {
    icon: UserRound,
    number: '100+',
    label: 'МЭРГЭШСЭН ЭМЧ, МЭРГЭЖИЛТЭН',
  },
  {
    icon: HeartPulse,
    number: '200,000+',
    label: 'СЭТГЭЛ ХАНАМЖТАЙ ӨВЧТӨН',
  },
  {
    icon: Building2,
    number: '10+',
    label: 'ТӨВ, ТАСАГ',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      {/* Split Layout: Text and Image */}
      <div className="container mx-auto px-4 max-w-[1400px] py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column: Text */}
          <div className="flex-1 w-full animate-slide-in-left">
            <span className="text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase">
              БИДНИЙ ТУХАЙ
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-darkBlue mt-4 mb-6 leading-tight">
              ЯАГААД SUN MEDICAL <br className="hidden lg:block" /> CENTER-ИЙГ СОНГОХ ВЭ?
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
              Бид өвчтөн бүрт аюулгүй, чанартай, хүртээмжтэй эмнэлгийн тусламж үйлчилгээ үзүүлэхийг эрхэмлэдэг. Орчин үеийн технологи, мэргэжлийн баг, хүний төлөөх хандлага бол бидний ялгарах үнэ цэнэ юм.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-primary-darkBlue mr-4 flex-shrink-0" />
                <span className="font-medium">Орчин үеийн дэвшилтэт тоног төхөөрөмж</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-primary-darkBlue mr-4 flex-shrink-0" />
                <span className="font-medium">Олон улсын стандартын чанар, аюулгүй байдал</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="w-6 h-6 text-primary-darkBlue mr-4 flex-shrink-0" />
                <span className="font-medium">Туршлагатай, мэргэшсэн эмч, мэргэжилтнүүд</span>
              </li>
            </ul>

            <a href="/about" className="bg-primary-darkBlue text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wider hover:bg-primary-blue hover:-translate-y-1 transition-all duration-300 shadow-lg inline-flex items-center group w-fit">
              ДЭЛГЭРЭНГҮЙ МЭДЭЭЛЭЛ
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 w-full relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            {/* Replace this div with an actual Image component when you have the photo */}
            <div className="absolute inset-0 bg-gray-200">
              <Image
                src="/our.png"
                alt="Sun Medical Center Doctors"
                fill
                className="object-cover"
              // Uncomment the line below to fallback to gray if image is missing
              // onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Banner: Statistics */}
      <div className="bg-primary-darkBlue w-full py-16 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center lg:justify-start ${index !== 0 ? 'pt-8 sm:pt-0 lg:pl-10' : ''}`}
                >
                  <Icon className="w-12 h-12 lg:w-16 lg:h-16 text-white mr-6 flex-shrink-0" strokeWidth={1.5} />
                  <div className="flex flex-col">
                    <span className="text-4xl lg:text-5xl font-serif font-bold text-white mb-1">
                      <CountUp text={stat.number} />
                    </span>
                    <span className="text-[10px] lg:text-xs tracking-widest text-gray-300 uppercase font-medium">
                      {stat.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
