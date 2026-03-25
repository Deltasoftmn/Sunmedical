import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Эмч нар | Sun Medical Center',
  description: 'Sun Medical Center-ийн эмч нарын мэдээлэл, мэргэшсэн байдал болон ажлын туршлага.',
}

export default function EmchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

