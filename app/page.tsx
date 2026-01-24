import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import StatisticsSection from '@/components/StatisticsSection'
import AboutSection from '@/components/AboutSection'
import VisionSection from '@/components/VisionSection'
import ServicesSection from '@/components/ServicesSection'
import PreventiveCheckupSection from '@/components/PreventiveCheckupSection'
import ServiceStatsSection from '@/components/ServiceStatsSection'
import EquipmentSection from '@/components/EquipmentSection'
import PartnersSection from '@/components/PartnersSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <VisionSection />
      <ServicesSection />
      <PreventiveCheckupSection />
      <ServiceStatsSection />
      <EquipmentSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
