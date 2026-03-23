'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Building2 } from 'lucide-react'

const facilities: { title: string; image: string; alt: string }[] = [
  { title: 'Сон эмнэлэг', image: '/facilities/son-emnelg.png', alt: 'Sun Medical Center — эмнэлгийн гадна тал' },
  { title: 'Бүртгэлийн хэсэг', image: '/facilities/burtgel.png', alt: 'Бүртгэлийн хэсэг' },
  { title: 'Нэгдсэн шинжилгээний төв', image: '/facilities/negdsen-shinjilgee.png', alt: 'Нэгдсэн шинжилгээний төв' },
  { title: 'Хэвтэн эмчлүүлэх тасаг', image: '/facilities/khevten-tasag.png', alt: 'Хэвтэн эмчлүүлэх тасаг' },
  { title: 'Ангиографийн өрөө', image: '/facilities/angiografi.png', alt: 'Ангиографийн өрөө' },
  { title: 'Хагалгааны өрөө', image: '/facilities/hagalgaa.png', alt: 'Хагалгааны өрөө' },
]

function FacilityCard({ title, image, alt }: { title: string; image: string; alt: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <article className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <header className="bg-primary-blue px-3 py-3 text-center">
        <h3 className="text-sm font-semibold text-white md:text-[15px] leading-tight">{title}</h3>
      </header>
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        {failed ? (
          <div className="flex h-full min-h-[180px] flex-col items-center justify-center gap-2 p-4 text-center text-gray-500">
            <Building2 className="h-10 w-10 opacity-40" aria-hidden />
            <span className="text-xs leading-snug">Зураг олдсонгүй — public/facilities/ хавтас руу оруулна уу</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </article>
  )
}

export default function InteriorSection() {
  return (
    <section id="interior" className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="mb-4 text-3xl font-medium italic tracking-tight text-primary-blue md:text-4xl">
            Эмнэлгийн дотоод орчин
          </h2>
          <div className="h-px w-full bg-gray-400/90" aria-hidden />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item) => (
            <FacilityCard key={item.image} title={item.title} image={item.image} alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}
