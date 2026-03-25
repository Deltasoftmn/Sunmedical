import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Эмчилгээ — Ангиографи, ЧХХ, Үений мэс засал | Sun Medical Center',
  description:
    'Судсан дотуурх оношилгоо Ангиографи, чих хамар хоолойн мэс засал, үений мэс засал — Sun Medical Center.',
}

export default function EmchilgeeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
