import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import VisionSection from '@/components/VisionSection'
import PreventiveCheckupSection from '@/components/PreventiveCheckupSection'
import EquipmentSection from '@/components/EquipmentSection'
import PartnersSection from '@/components/PartnersSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import AnimateIn from '@/components/AnimateIn'
import FloatingActions from '@/components/FloatingActions'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AnimateIn animation="fade-in-up"><AboutSection /></AnimateIn>
      <AnimateIn animation="fade-in-up"><VisionSection /></AnimateIn>
      <AnimateIn animation="fade-in-up"><PreventiveCheckupSection /></AnimateIn>
      <AnimateIn animation="fade-in-up"><EquipmentSection /></AnimateIn>
      <AnimateIn animation="fade-in-up"><PartnersSection /></AnimateIn>
      <AnimateIn animation="fade-in-up"><ContactSection /></AnimateIn>
      <AnimateIn animation="fade-in"><Footer /></AnimateIn>
      <FloatingActions />
    </main>
  )
}
