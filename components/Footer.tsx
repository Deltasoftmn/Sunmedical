import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#031628] text-gray-300 py-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 mb-16">

          {/* About Column */}
          <div className="md:col-span-12 lg:col-span-4">
            <a href="/" className="inline-block mb-6">
              <div className="px-3 py-2 inline-flex items-center -ml-3">
                <Image
                  src="/logo.png"
                  alt="Sun Medical Center"
                  width={200}
                  height={80}
                  className="h-20 w-auto object-contain brightness-0 invert opacity-90"
                />
              </div>
            </a>
            <h3 className="text-xl font-bold mb-4 text-white">
              Sun Medical Center Ulaanbaatar
            </h3>
            <p className="text-sm mb-8 leading-relaxed text-gray-400">
              Улаанбаатар хотод орчин үеийн тоног төхөөрөмж, туршлагатай эмч мэргэжилтнүүдтэй
              дэлхийн жишигт хүрсэн эрүүл мэндийн үйлчилгээ үзүүлж байна.
            </p>


          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links Column */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Холбоос</h3>
            <div className="w-8 h-[2px] bg-[#3b82f6] mb-6"></div>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#discover" className="hover:text-[#3b82f6] transition-colors">Бидний тухай</a></li>
              <li><a href="/preventive" className="hover:text-[#3b82f6] transition-colors">Үйлчилгээ</a></li>
              <li><a href="/preventive" className="hover:text-[#3b82f6] transition-colors">Урьдчилан сэргийлэх үзлэг</a></li>
              <li><a href="#contact" className="hover:text-[#3b82f6] transition-colors">Холбогдох</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Цаг захиалах</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="md:col-span-6 lg:col-span-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Холбоо барих</h3>
            <div className="w-8 h-[2px] bg-[#3b82f6] mb-6"></div>
            <ul className="space-y-6 text-sm text-gray-300">
              <li className="flex items-center">
                <div className="border border-[#3b82f6]/50 rounded-full p-2 mr-4 flex-shrink-0">
                  <Phone className="h-4 w-4 text-[#3b82f6]" />
                </div>
                <span>+(976) 80370044</span>
              </li>
              <li className="flex items-center">
                <div className="border border-[#3b82f6]/50 rounded-full p-2 mr-4 flex-shrink-0">
                  <Mail className="h-4 w-4 text-[#3b82f6]" />
                </div>
                <span className="break-all">info@sunhospital.mn</span>
              </li>
              <li className="flex items-start">
                <div className="border border-[#3b82f6]/50 rounded-full p-2 mr-4 flex-shrink-0 mt-1">
                  <MapPin className="h-4 w-4 text-[#3b82f6]" />
                </div>
                <span className="leading-relaxed text-gray-400">
                  Хан-Уул дүүрэг, 7-р хороо<br />
                  Яармаг Энканто Оранж тауны зүүн жигүүр
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-4 text-center md:text-left text-sm text-gray-500">
          <p>&copy; 2025 Sun Medical Center. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  )
}
