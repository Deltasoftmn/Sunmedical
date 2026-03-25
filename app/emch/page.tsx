import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import DoctorsContent from '@/components/emch/DoctorsContent'

export default function EmchPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <div className="flex-1">
        <div className="border-b border-gray-200 bg-primary-lightBlue/40">
          <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-4 px-4 py-8">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-primary-blue md:text-4xl">Эмч нар</h1>
              <p className="mt-2 max-w-2xl text-gray-700">Манай эмнэлгийн эмч нарын мэргэшсэн байдал, ажлын туршлагын мэдээлэл.</p>
            </div>
            <Link
              href="/"
              className="shrink-0 rounded-lg border-2 border-primary-blue px-5 py-2.5 font-semibold text-primary-blue transition hover:bg-primary-lightBlue/50"
            >
              Нүүр хуудас
            </Link>
          </div>
        </div>

        <DoctorsContent />
      </div>
      <Footer />
    </main>
  )
}

