import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="discover" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header with title and logo area */}
          <div className="flex items-start justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue">
              МАНАЙ ЭМНЭЛЭГ
            </h2>
            <div className="hidden md:block">
              <div className="relative w-32 h-32 bg-white rounded-lg p-4 shadow-md flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Sun Medical Center Logo"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="text-center mb-12">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              Монгол Улсдаа дэлхийн жишигт хүрсэн, орчин үеийн чанартай эмнэлгийн эмчилгээ, 
              үйлчилгээг нэвтрүүлэх, ард иргэдийнхээ эрүүл мэндийг сахин хамгаалах, гадаад эмч 
              нарын чанартай эмчилгээ, оношилгоог эх орондоо авах боломжийг иргэддээ бүрдүүлэх 
              зорилгоор дотоодын 100 хувийн хөрөнгө оруулалттайгаар байгуулагдсан.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Манай эмнэлэг нь Нэгдсэн эмнэлгийн чиглэлээр 2028.07.07 хүртэл хүчинтэй тусгай 
              зөвшөөрөлтэйгээр үйл ажиллагаа явуулж, эмнэлгийн тусламж үйлчилгээг үзүүлж байна. 
              Шинжилгээ, оношилгооны төв, яаралтай тусламж, гэмтэл, мэс засал, амбулатори буюу 
              нарийн мэргэжлийн кабинетуудтай бөгөөд чадварлаг эмч мэргэжилтнүүд сүүлийн үеийн 
              оношилгооны тоног төхөөрөмж ашиглан Монгол Улс болон олон улсад мөрдөгдөж буй 
              эмнэлгийн стандартыг ханган ажиллаж байна.
            </p>
          </div>

          {/* World Map Section */}
          <div className="mt-12 relative">
            <div className="bg-primary-lightBlue rounded-lg p-8">
              <div className="relative w-full h-64 flex items-center justify-center">
                {/* Simplified World Map SVG */}
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  {/* Continents simplified */}
                  <path d="M100,150 Q150,100 200,150 T300,150 Q350,100 400,150 T500,150 Q550,100 600,150" 
                        stroke="#1a3a5f" strokeWidth="2" fill="#1a3a5f" opacity="0.3"/>
                  <path d="M150,200 Q200,150 250,200 T350,200 Q400,150 450,200" 
                        stroke="#1a3a5f" strokeWidth="2" fill="#1a3a5f" opacity="0.3"/>
                  <path d="M200,250 Q250,200 300,250 T400,250" 
                        stroke="#1a3a5f" strokeWidth="2" fill="#1a3a5f" opacity="0.3"/>
                  
                  {/* Mongolia location pin */}
                  <g transform="translate(350, 120)">
                    <circle cx="0" cy="0" r="8" fill="#e76f51"/>
                    <path d="M0,0 L-5,15 L0,12 L5,15 Z" fill="#e76f51"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-primary-lightBlue rounded-lg">
              <h3 className="text-xl font-bold text-primary-blue mb-2">Анхаарал халамж</h3>
              <p className="text-gray-600">Өвчтөн бүрт зориулсан анхаарал</p>
            </div>
            <div className="text-center p-6 bg-primary-lightBlue rounded-lg">
              <h3 className="text-xl font-bold text-primary-blue mb-2">Чин сэтгэл</h3>
              <p className="text-gray-600">Сэтгэлээсээ үзүүлсэн халамж</p>
            </div>
            <div className="text-center p-6 bg-primary-lightBlue rounded-lg">
              <h3 className="text-xl font-bold text-primary-blue mb-2">Тэвчээр</h3>
              <p className="text-gray-600">Ойлголт, энэрэнгүй үйлчилгээ</p>
            </div>
          </div>

          {/* Mission */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary-blue to-primary-darkBlue text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Эрхэм зорилго</h3>
            <p className="text-lg">
              Биднийг зорин ирсэн үйлчлүүлэгч бүрт чин сэтгэлээсээ тусламж үйлчилгээ үзүүлнэ
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
