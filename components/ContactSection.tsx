import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-primary-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Холбогдох</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Цаг захиалах, асуулт асуух, яаралтай тусламж авах зэрэгт бидэнтэй холбогдоорой
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="bg-primary-yellow text-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Утас</h3>
            <p className="text-gray-200">+(976) 7777-7500</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="bg-primary-yellow text-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Имэйл</h3>
            <p className="text-gray-200 text-sm break-all">
              Sunmedical.ulaanbaatar2025@sunnmedical.mn
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="bg-primary-yellow text-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Байршил</h3>
            <p className="text-gray-200 text-sm">
              Хан-Уул дүүрэг, 7-р хороо, Яармаг Энканто Оранж тауны зүүн жигүүр
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="bg-primary-yellow text-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Ажиллах цаг</h3>
            <p className="text-gray-200 text-sm">
              Даваа-Баасан: 08:30-17:00<br />
              Бямба-Ням: Амарна
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary-yellow text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition">
            Цаг захиалах
          </button>
        </div>
      </div>
    </section>
  )
}
