import type { Metadata } from 'next'
import './globals.css'
import { Roboto_Condensed, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin', 'cyrillic'], 
  variable: '--font-sans' 
});
const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'], variable: '--font-serif' });

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
    <html lang="mn" className={cn("font-sans", robotoCondensed.variable, playfair.variable)}>
      <body>{children}</body>
    </html>
  )
}
