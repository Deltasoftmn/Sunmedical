import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кабинет — Мэдрэл, Мэс засал, Дотор, Сэргээн засах | Sun Medical Center',
  description:
    'Мэдрэлийн, ерөнхий мэс заслын, дотор, хүүхдийн, сэргээн засах болон уламжлалт эмчилгээний кабинет — Sun Medical Center.',
}

export default function CabinetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
