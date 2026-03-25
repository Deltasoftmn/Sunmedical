import type { ReactNode } from 'react'
import TreatmentImage from './TreatmentImage'

function SectionRule() {
  return <div className="mt-4 h-px w-full bg-[#A7A9AC]" aria-hidden />
}

/** Three procedure cards always in one horizontal row (reference layout). */
function ThreeCardRow({ children }: { children: ReactNode }) {
  return (
    <div className="mt-12 overflow-x-auto sm:overflow-visible">
      <div className="grid min-w-[520px] grid-cols-3 items-stretch gap-2 sm:min-w-0 sm:gap-4 md:gap-6 lg:gap-8">
        {children}
      </div>
    </div>
  )
}

function ThreeCardCell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col border-l border-gray-200/90 pl-2 first:border-l-0 first:pl-0 sm:pl-3 md:pl-4">
      {children}
    </div>
  )
}

export function AngiographySection() {
  const bullets = [
    'Монголд эмчлэгдэх боломжгүй зүрхний эмгэгийн эмчилгээ, мэс засал',
    'Судсан дотуурх оношилгоо Ангиографи',
    'Зүрхний хэм алдалтын үеийн Peacemaker суулгац',
    'Зүрхний титэм судасны архаг, шохойжсон бөглөрөл сэтгүүрдэх',
  ]

  const cards = [
    {
      title: 'Зүрхний стент суулгац',
      src: '/emchilgee/angio-stent.png',
      alt: 'Зүрхний стент суулгац — зураг',
    },
    {
      title: 'Судсан дотуурх оношилгоо Ангиографи',
      src: '/emchilgee/angio-angiography.png',
      alt: 'Судсан дотуурх оношилгоо Ангиографи — зураг',
    },
    {
      title: 'Зүрхний хэм алдалтын үеийн Peacemaker суулгац',
      src: '/emchilgee/angio-pacemaker.png',
      alt: 'Peacemaker суулгац — зураг',
    },
  ]

  return (
    <section id="angiography" className="border-b border-gray-200 py-14 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 md:mb-14">
          <h2 className="mb-5 text-center text-2xl font-bold text-primary-blue md:mb-6 md:text-3xl lg:text-4xl">
            Бидний онцлох эмчилгээ, үйлчилгээ
          </h2>
          <TreatmentImage
            src="/ontsgoi.jpg"
            alt="Бидний онцлох эмчилгээ, үйлчилгээ"
            variant="full"
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
          />
        </div>

        <header>
          <h3 className="text-2xl font-semibold tracking-tight text-gray-800 md:text-3xl lg:text-4xl">
            Судсан дотуурх оношилгоо Ангиографи
          </h3>
          <SectionRule />
        </header>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2">
          <TreatmentImage
            src="/emchilgee/angio-summary.png"
            alt="Зүрхний оношилгоо, эмч — зураг"
            aspectClassName="aspect-[4/3] min-h-[240px] lg:min-h-[280px]"
          />
          <div className="flex flex-col justify-center bg-[#E6E7E8] px-6 py-8 md:px-10">
            <ul className="list-disc space-y-3 pl-5 text-gray-800 marker:text-primary-blue">
              {bullets.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ThreeCardRow>
          {cards.map((c) => (
            <ThreeCardCell key={c.title}>
              <h4 className="mb-2 text-center text-[11px] font-semibold leading-tight text-gray-800 sm:mb-3 sm:text-xs md:mb-4 md:text-sm lg:text-base">
                {c.title}
              </h4>
              <TreatmentImage src={c.src} alt={c.alt} aspectClassName="aspect-[4/3] min-h-[120px] sm:min-h-[180px] md:min-h-[220px]" />
            </ThreeCardCell>
          ))}
        </ThreeCardRow>
      </div>
    </section>
  )
}

export function EntSection() {
  const bullets = [
    'Хамрын таславч тайрч тэгшлэх / хамрын амьсгал сэргээх мэс засал',
    'Тагнайн гүйлсэн булчирхай/ хоолойн мах авах мэс засал',
    'Хамрын 2 талын доод самалдаг түлж агшаах, тайрч авах мэс засал',
  ]

  const cards = [
    {
      title: 'Хамрын таславч тайрч тэгшлэх / хамрын амьсгал сэргээх мэс засал',
      src: '/emchilgee/ent-septum.png',
      alt: 'Хамрын таславч — оношлогооны зураг',
    },
    {
      title: 'Тагнайн гүйлсэн булчирхай/ хоолойн мах авах мэс засал',
      src: '/emchilgee/ent-tonsil.png',
      alt: 'Тагнайн гүйлсэн булчирхай — мэс заслын зураг',
    },
    {
      title: 'Хамрын 2 талын доод самалдаг түлж агшаах, тайрч авах мэс засал',
      src: '/emchilgee/ent-turbinate.png',
      alt: 'Хамрын самалдаг — мэс заслын зураг',
    },
  ]

  return (
    <section id="ent" className="border-b border-gray-200 py-14 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <header>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-800 md:text-3xl lg:text-4xl">
            Чих хамар хоолойн мэс засал
          </h2>
          <SectionRule />
        </header>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2">
          <TreatmentImage
            src="/emchilgee/ent-summary.png"
            alt="Чих хамар хоолой — оношлогоо, зураг"
            aspectClassName="aspect-[4/3] min-h-[240px] lg:min-h-[280px]"
          />
          <div className="flex flex-col justify-center bg-[#E0E0E0] px-6 py-8 md:px-10">
            <ul className="list-disc space-y-3 pl-5 text-gray-800 marker:text-primary-blue">
              {bullets.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ThreeCardRow>
          {cards.map((c) => (
            <ThreeCardCell key={c.title}>
              <h3 className="mb-2 text-center text-[10px] font-semibold leading-tight text-gray-800 sm:mb-3 sm:text-xs md:mb-4 md:text-sm lg:text-base">
                {c.title}
              </h3>
              <TreatmentImage src={c.src} alt={c.alt} aspectClassName="aspect-[4/3] min-h-[120px] sm:min-h-[180px] md:min-h-[220px]" />
            </ThreeCardCell>
          ))}
        </ThreeCardRow>
      </div>
    </section>
  )
}

export function JointSection() {
  const col1 = ['Өвдөгний үе солих мэс засал', 'Түнхний үе солих мэс засал', 'Үений дурангийн мэс засал', 'Гэмтэл согогийн мэс заслууд']
  const col2 = ['Булчин шөрмөсний эмгэгүүд', 'Захын мэдрэлийн эмгэгүүд']

  const cards = [
    {
      title: 'Өвдөгний хиймэл үе солих',
      src: '/emchilgee/joint-knee.png',
      alt: 'Өвдөгний хиймэл үе солих',
      beforeAfter: false as const,
    },
    {
      title: 'Түнхний хиймэл үе солих',
      src: '/emchilgee/joint-hip.png',
      alt: 'Түнхний хиймэл үе солих — өмнө, дараа',
      beforeAfter: true as const,
    },
    {
      title: 'Үений дурангийн мэс засал',
      src: '/emchilgee/joint-arthroscopy.png',
      alt: 'Үений дурангийн мэс засал',
      beforeAfter: false as const,
    },
  ]

  return (
    <section id="joint" className="py-14 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <header>
          <h2 className="text-2xl font-medium italic tracking-tight text-gray-800 md:text-3xl lg:text-4xl">
            Үений мэс засал
          </h2>
          <SectionRule />
        </header>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <TreatmentImage
            src="/emchilgee/joint-summary.png"
            alt="Өвдөгний үе — оношлогоо"
            aspectClassName="aspect-[4/3] min-h-[240px] lg:min-h-[300px]"
          />
          <div className="flex flex-col justify-center bg-[#E6E7E8] px-6 py-8 md:px-10">
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <ul className="list-disc space-y-2 pl-5 text-gray-800 marker:text-primary-blue">
                {col1.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="list-disc space-y-2 pl-5 text-gray-800 marker:text-primary-blue">
                {col2.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ThreeCardRow>
          {cards.map((c) => (
            <ThreeCardCell key={c.title}>
              <h3 className="mb-2 text-center text-[11px] font-semibold leading-tight text-gray-800 sm:mb-2 sm:text-xs md:text-sm lg:text-base">
                {c.title}
              </h3>
              {c.beforeAfter && (
                <div className="mb-1 grid grid-cols-2 text-center text-[10px] font-medium text-gray-600 sm:mb-2 sm:text-xs md:text-sm">
                  <span>Өмнө</span>
                  <span>Дараа</span>
                </div>
              )}
              <TreatmentImage src={c.src} alt={c.alt} aspectClassName="aspect-[4/3] min-h-[120px] sm:min-h-[180px] md:min-h-[220px]" />
            </ThreeCardCell>
          ))}
        </ThreeCardRow>
      </div>
    </section>
  )
}

export default function EmchilgeeContent() {
  return (
    <>
      <AngiographySection />
      <EntSection />
      <JointSection />
    </>
  )
}
