import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import YouTubeEmbed from '@/components/media/YouTubeEmbed'
import VisionSection from '@/components/VisionSection'
import AnimateIn from '@/components/AnimateIn'
import PreventiveCheckupSection from '@/components/PreventiveCheckupSection'
import EquipmentSection from '@/components/EquipmentSection'
import InteriorSection from '@/components/InteriorSection'
import InpatientSection from '@/components/InpatientSection'
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Page Header */}
      <div className="bg-primary-darkBlue text-white py-20 mt-[-1px]">
        <div className="container mx-auto px-4 max-w-[1400px] text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Манай эмнэлэг</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Эрүүл мэндийн цогц үйлчилгээг нэг дороос
          </p>
        </div>
      </div>

      {/* Main Content (Old AboutSection content) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="max-w-5xl mx-auto">
            {/* Header with title and logo area */}
            <div className="flex items-start justify-center md:justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-darkBlue text-center md:text-left">
                Бидний тухай
              </h2>
              <div className="hidden md:block">
                <div className="relative w-32 h-32 bg-white rounded-lg p-4 shadow-md flex items-center justify-center">
                  <Image
                    src="/logo_new.png"
                    alt="Sun Medical Center Logo"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="text-center md:text-left mb-16 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Монгол Улсдаа дэлхийн жишигт хүрсэн, орчин үеийн чанартай эмнэлгийн эмчилгээ,
                үйлчилгээг нэвтрүүлэх, ард иргэдийнхээ эрүүл мэндийг сахин хамгаалах, гадаад эмч
                нарын чанартай эмчилгээ, оношилгоог эх орондоо авах боломжийг иргэддээ бүрдүүлэх
                зорилгоор дотоодын 100 хувийн хөрөнгө оруулалттайгаар байгуулагдсан.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Манай эмнэлэг нь Нэгдсэн эмнэлгийн чиглэлээр 2028.07.07 хүртэл хүчинтэй тусгай
                зөвшөөрөлтэйгээр үйл ажиллагаа явуулж, эмнэлгийн тусламж үйлчилгээг үзүүлж байна.
                Шинжилгээ, оношилгооны төв, яаралтай тусламж, гэмтэл, мэс засал, амбулатори буюу
                нарийн мэргэжлийн кабинетуудтай бөгөөд чадварлаг эмч мэргэжилтнүүд сүүлийн үеийн
                оношилгооны тоног төхөөрөмж ашиглан Монгол Улс болон олон улсад мөрдөгдөж буй
                эмнэлгийн стандартыг ханган ажиллаж байна.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AnimateIn animation="fade-in-up"><VisionSection /></AnimateIn>
      <AnimateIn animation="fade-in-up"><PreventiveCheckupSection /></AnimateIn>
      <AnimateIn animation="fade-in-up"><EquipmentSection /></AnimateIn>
      <AnimateIn animation="fade-in-up"><InteriorSection /></AnimateIn>
      <AnimateIn animation="fade-in-up"><InpatientSection /></AnimateIn>
      <Footer />
    </main>
  )
}
