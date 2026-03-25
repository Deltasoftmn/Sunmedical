import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import EmchilgeeContent from '@/components/emchilgee/EmchilgeeContent'
import { ChevronRight } from 'lucide-react'

const JUMP = [
  { href: '#angiography', label: 'Ангиографи' },
  { href: '#ent', label: 'Чих хамар хоолой' },
  { href: '#joint', label: 'Үений мэс засал' },
] as const

export default function EmchilgeePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <div className="flex-1">
        <div className="border-b border-gray-200 bg-primary-lightBlue/40">
          <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-4 px-4 py-8">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-primary-blue md:text-4xl">Эмчилгээ</h1>
              <p className="mt-2 max-w-2xl text-gray-700">
                Зүрх судасны оношилгоо, чих хамар хоолойн болон үений мэс заслын чиглэлээр үзүүлэх үйлчилгээний танилцуулга.
              </p>
            </div>
            <Link
              href="/"
              className="shrink-0 rounded-lg border-2 border-primary-blue px-5 py-2.5 font-semibold text-primary-blue transition hover:bg-primary-lightBlue/50"
            >
              Нүүр хуудас
            </Link>
          </div>
        </div>

        <nav className="mx-auto max-w-6xl px-4 py-4" aria-label="Эмчилгээний хэсгүүд">
          <ul className="flex flex-wrap gap-2">
            {JUMP.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-primary-blue hover:bg-primary-lightBlue/30 hover:text-primary-blue"
                >
                  {item.label}
                  <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <EmchilgeeContent />
      </div>
      <Footer />
    </main>
  )
}
