import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CabinetPageContent from '@/components/cabinet/CabinetSections'
import { ChevronRight } from 'lucide-react'

const JUMP = [
  { href: '#neurology', label: 'Мэдрэлийн кабинет' },
  { href: '#surgery', label: 'Ерөнхий мэс засал' },
  { href: '#internal-pediatrics', label: 'Дотор, хүүхэд' },
  { href: '#ent-cabinet', label: 'Чих хамар хоолой' },
  { href: '#joint-cabinet', label: 'Үе мөч' },
  { href: '#rehabilitation', label: 'Сэргээн засах' },
  { href: '#gyn-cabinet', label: 'Эмэгтэйчүүд' },
] as const

export default function CabinetPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100/80">
      <Navigation />
      <div className="flex-1">
        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-wrap items-start justify-between gap-4 px-4 py-8 md:py-10">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-primary-blue md:text-4xl">Эмчийн кабинетууд</h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700 md:text-base">
                Манай эмнэлгийн мэргэжлийн кабинетуудын танилцуулга, үйлчилгээний чиглэлүүд.
              </p>
            </div>
            <Link
              href="/"
              className="shrink-0 rounded-lg border-2 border-primary-blue px-5 py-2.5 text-sm font-semibold text-primary-blue transition hover:bg-primary-lightBlue/50 md:text-base"
            >
              Нүүр хуудас
            </Link>
          </div>
        </div>

        <nav className="mx-auto max-w-5xl px-4 py-4" aria-label="Кабинетууд">
          <ul className="flex flex-wrap gap-2">
            {JUMP.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-primary-blue hover:bg-primary-lightBlue/30 hover:text-primary-blue"
                >
                  {item.label}
                  <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CabinetPageContent />
      </div>
      <Footer />
    </main>
  )
}
