'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const specialties = [
  {
    title: 'Нуруу нугас/ Мэдрэл',
    description: 'Нуруу, нугас, мэдрэлийн системийн бүрэн үзлэг, эмчилгээ. Нурууны мэдрэл чөлөөлөх мэс засал, нурууны мэдрэлийн мэс засал зэрэг.',
    procedures: ['Нурууны мэдрэл чөлөөлөх мэс засал', 'Нурууны мэдрэлийн мэс засал', 'Нурууны нугасны дарагдал чөлөөлөх', 'Мэдрэлийн системийн үзлэг'],
  },
  {
    title: 'Мэс засал/ Гэмтэл согог',
    description: 'Гэмтэл, согогийн мэс засал, ерөнхий мэс засал, яаралтай мэс заслын үйлчилгээ.',
    procedures: ['Гэмтлийн мэс засал', 'Ерөнхий мэс засал', 'Яаралтай мэс засал', 'Согогийн засвар'],
  },
  {
    title: 'Зүрх судас / Ангиографи',
    description: 'Зүрх судасны эмгэгийн оношилгоо, эмчилгээ. Ангиографи, зүрхний үзлэг, эмчилгээ.',
    procedures: ['Ангиографи', 'Зүрхний үзлэг', 'Зүрх судасны эмчилгээ', 'Эхокардиографи'],
  },
  {
    title: 'Дотор/ Дотоод шүүрэл',
    description: 'Дотоод эрхтний эмчилгээ, дотоод шүүрэл, дурангийн үзлэг, эмчилгээ.',
    procedures: ['Дотоод шүүрэл', 'Ходоодны дуран', 'Дотор эрхтний үзлэг', 'Дурангийн мэс засал'],
  },
  {
    title: 'Хүүхэд/ Эмэгтэйчүүд / Шүд',
    description: 'Хүүхдийн эмчилгээ, эмэгтэйчүүдийн эмчилгээ, шүдний эмчилгээний бүрэн үйлчилгээ.',
    procedures: ['Хүүхдийн эмчилгээ', 'Эмэгтэйчүүдийн эмчилгээ', 'Шүдний эмчилгээ', 'Шүдний рентген'],
  },
  {
    title: 'Уламжлалт сэргээн засах',
    description: 'Уламжлалт эмнэлгийн сэргээн засах эмчилгээ, массаж, физик эмчилгээ.',
    procedures: ['Уламжлалт эмчилгээ', 'Сэргээн засах эмчилгээ', 'Массаж', 'Физик эмчилгээ'],
  },
]

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % specialties.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + specialties.length) % specialties.length)
  }

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Манай эмчилгээ, үйлчилгээ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Дэлхийн жишигт хүрсэн стандарт, энэрэнгүй халамжтай бүрэн эрүүл мэндийн үйлчилгээ
          </p>
        </div>

        {/* Specialty Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {specialties.map((specialty, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeIndex === index
                  ? 'bg-primary-blue text-white'
                  : 'bg-white text-primary-blue hover:bg-gray-100'
              }`}
            >
              {specialty.title}
            </button>
          ))}
        </div>

        {/* Active Specialty Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-lightBlue text-primary-blue p-3 rounded-full hover:opacity-80 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-lightBlue text-primary-blue p-3 rounded-full hover:opacity-80 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-primary-blue mb-4">
                  {specialties[activeIndex].title}
                </h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {specialties[activeIndex].description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-primary-blue mb-3">Гол процедурууд:</h4>
                  <ul className="space-y-2">
                    {specialties[activeIndex].procedures.map((procedure, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary-yellow rounded-full mr-3"></span>
                        {procedure}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <button className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-darkBlue transition flex items-center">
                    Эмч олох
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="border-2 border-primary-blue text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-primary-lightBlue transition flex items-center">
                    Дэлгэрэнгүй
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-lightBlue to-primary-blue/10 rounded-lg flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <p className="text-primary-blue font-semibold">Эмнэлгийн гэрэлт</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
