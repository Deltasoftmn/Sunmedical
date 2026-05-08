'use client'

import { Brain, Syringe, HeartPulse, Stethoscope, Baby, Leaf, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import AnimateIn from './AnimateIn'

const services = [
  {
    title: 'Нуруу нугас/ Мэдрэл',
    icon: Brain,
    image: '/service1.png',
    href: '/emchilgee',
  },
  {
    title: 'Мэс засал/ Гэмтэл согог',
    icon: Syringe,
    image: '/service2.png',
    href: '/emchilgee',
  },
  {
    title: 'Зүрх судас / Ангиографи',
    icon: HeartPulse,
    image: '/service3.png',
    href: '/emchilgee',
  },
  {
    title: 'Дотор/ Дотоод шүүрэл',
    icon: Stethoscope,
    image: '/service4.png',
    href: '/emchilgee',
  },
  {
    title: 'Хүүхэд/ Эмэгтэйчүүд / Шүд',
    icon: Baby,
    image: '/service5.png',
    href: '/emchilgee',
  },
  {
    title: 'Уламжлалт сэргээн засах',
    icon: Leaf,
    image: '/service6.png',
    href: '/emchilgee',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <AnimateIn animation="fade-in-up">
            <div className="flex items-center justify-center relative max-w-xs mx-auto mb-4">
              <div className="absolute inset-x-0 h-px bg-gray-300"></div>
              <span className="relative bg-gray-50 px-4 text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase">
                ҮЙЛЧИЛГЭЭ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-darkBlue">
              БИДНИЙ ҮЙЛЧИЛГЭЭ
            </h2>
          </AnimateIn>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <AnimateIn 
                key={index} 
                animation="fade-in-up" 
                delay={index * 150}
                className="h-full"
              >
                <a
                  href={service.href}
                  className="h-full group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center overflow-hidden hover:-translate-y-1"
                >
                  {/* Image Top Half */}
                  <div className="w-full h-48 bg-gray-200 relative overflow-visible shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                    {/* Floating Icon Badge */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary-darkBlue rounded-full border-[5px] border-white flex items-center justify-center text-white shadow-sm group-hover:bg-primary-blue transition-all duration-300 z-10">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content Bottom Half */}
                  <div className="pt-12 pb-6 px-4 flex flex-col flex-1 w-full text-center">
                    <h3 className="text-primary-darkBlue font-semibold text-base md:text-lg leading-tight mb-auto px-2">
                      {service.title}
                    </h3>

                    {/* Arrow at the bottom */}
                    <div className="mt-8 flex justify-center text-gray-400 group-hover:text-primary-darkBlue transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
