import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Багц үзэх - Урьдчилан сэргийлэх үзлэгийн багцууд | Sun Medical Center',
  description: 'Байгууллагын багцууд: Багш нарт, Энгийн, PREMIUM, VIP, Барилгын салбар, Уул уурхайн салбар. Гарын авлага, шинжилгээний жагсаалт.',
}

export default function BagtsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
