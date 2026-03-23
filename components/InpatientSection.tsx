'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Building2 } from 'lucide-react'

const specialtiesLeft = ['Дотор', 'Мэдрэл', 'Мэс засал', 'Уламжлалт', 'Сэргээн засах']

const capacityRight = [
  '30 ортой',
  'VIP өрөө - 1 хүн',
  'Хагас VIP өрөө - 2 хүн',
  'Энгийн өрөө - 4-5 хүн',
]

function WardPhoto({ title, src, alt }: { title: string; src: string; alt: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="flex flex-1 flex-col">
      <h4 className="mb-3 text-center text-base font-semibold text-gray-800 md:text-lg">{title}</h4>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-gray-100">
        {failed ? (
          <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-2 p-4 text-center text-gray-500">
            <Building2 className="h-10 w-10 opacity-40" aria-hidden />
            <span className="text-xs leading-snug">Зураг олдсонгүй — public/facilities/ хавтас руу оруулна уу</span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  )
}

export default function InpatientSection() {
  return (
    <section id="inpatient" className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <header className="mb-10">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-800 md:text-4xl">
            Хэвтэн эмчлүүлэх тасаг
          </h2>
          <div className="h-px w-full bg-gray-400/90" aria-hidden />
        </header>

        <div className="mb-12 flex flex-col overflow-hidden rounded-sm border border-gray-200 shadow-sm lg:flex-row">
          <div className="flex min-h-[140px] shrink-0 items-center justify-center bg-primary-blue px-6 py-10 lg:w-[220px] xl:w-[260px]">
            <p className="text-center text-lg font-semibold leading-snug text-white">
              Хэвтэн эмчлүүлэх тасаг
            </p>
          </div>
          <div className="flex-1 bg-gray-100 px-6 py-8 md:px-10">
            <div className="grid gap-8 sm:grid-cols-2">
              <ul className="list-disc space-y-2 pl-5 text-gray-800 marker:text-primary-blue">
                {specialtiesLeft.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="list-disc space-y-2 pl-5 text-gray-800 marker:text-primary-blue">
                {capacityRight.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:gap-8 lg:gap-12">
          <WardPhoto title="VIP өрөө" src="/facilities/inpatient-vip.png" alt="VIP өрөө — хэвтэн эмчлүүлэх тасаг" />
          <WardPhoto title="Энгийн өрөө" src="/facilities/inpatient-engiin.png" alt="Энгийн өрөө — хэвтэн эмчлүүлэх тасаг" />
        </div>
      </div>
    </section>
  )
}
