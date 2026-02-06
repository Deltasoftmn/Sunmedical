import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sun Medical Center - Улаанбаатар',
  description: 'Sun Medical Center - Монгол Улс, Улаанбаатар хотод дэлхийн жишигт хүрсэн эрүүл мэндийн үйлчилгээ',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  )
}
