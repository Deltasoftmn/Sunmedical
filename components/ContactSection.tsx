import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-primary-darkBlue text-white overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/service3.png"
          alt="Background"
          fill
          className="object-cover opacity-40 blur-sm"
        />
        {/* Dark overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-[#031628]/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 "></div>
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Хамтран ажиллах <br /><span className="text-[#3b82f6]">санал хүргүүлэх</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Манай эмнэлэг нь та бүхэнтэй байгууллагын ажилчдын урьдчилсан сэргийлэх үзлэгийн багцаар эрүүл мэндийн үйлчилгээ үзүүлж, хамтран ажиллах хүсэлтэй байна.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:80370044"
                className="bg-white text-[#031628] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl text-center hover:-translate-y-1"
              >
                Үзлэгт хамрагдах: 80370044
              </a>
              <a
                href="mailto:info@sunhospital.mn"
                className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-center hover:-translate-y-1"
              >
                Имэйл илгээх
              </a>
            </div>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="bg-[#3b82f6]/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-[#3b82f6]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Утас</h3>
              <p className="text-gray-400">+(976) 80370044</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="bg-[#3b82f6]/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-[#3b82f6]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Имэйл</h3>
              <p className="text-gray-400 text-sm break-all">
                info@sunhospital.mn
              </p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-2xl cursor-pointer">
              <div className="bg-[#3b82f6]/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-[#3b82f6]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
                Байршил
                <span className="text-xs font-normal text-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity bg-[#3b82f6]/10 px-2 py-1 rounded-full">Газрын зураг</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Хан-Уул дүүрэг, 7-р хороо<br />
                Энканто Оранж таун
              </p>

              {/* Hover Map Popup */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-4 w-[280px] sm:w-[350px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="w-full h-[250px] bg-white rounded-xl overflow-hidden shadow-2xl border border-[#3b82f6]/30">
                  <iframe
                    src="https://maps.google.com/maps?q=47.8641498,106.8051352&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="bg-[#3b82f6]/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-[#3b82f6]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ажиллах цаг</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Даваа-Баасан: 08:00-16:00<br />
                Бямба: 09:00-14:00
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
