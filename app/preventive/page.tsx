import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PreventiveCheckupSection from '@/components/PreventiveCheckupSection'

export default function PreventivePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Page Header */}
      <div className="bg-primary-darkBlue text-white py-20 mt-[-1px]">
        <div className="container mx-auto px-4 max-w-[1400px] text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Урьдчилан сэргийлэх үзлэг</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Эрүүл мэндийн урьдчилан сэргийлэх үзлэгийн багцууд
          </p>
        </div>
      </div>

      <div className="bg-white">
        <PreventiveCheckupSection />
      </div>
      
      <Footer />
    </main>
  )
}
