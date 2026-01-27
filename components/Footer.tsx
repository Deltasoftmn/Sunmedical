import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-darkBlue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <a href="/" className="inline-block mb-4">
              <div className="bg-white rounded-lg px-3 py-2 inline-flex items-center">
                <Image
                  src="/logo.png"
                  alt="Sun Medical Center"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </a>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary-yellow">SUN</span> MEDICAL
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Улаанбаатар хотод орчин үеийн тоног төхөөрөмж, туршлагатай эмч мэргэжилтнүүдтэй 
              дэлхийн жишигт хүрсэн эрүүл мэндийн үйлчилгээ үзүүлж байна.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Холбоос</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#discover" className="hover:text-primary-yellow">Бидний тухай</a></li>
              <li><a href="#preventive" className="hover:text-primary-yellow">Үйлчилгээ</a></li>
              <li><a href="#preventive" className="hover:text-primary-yellow">Урьдчилан сэргийлэх үзлэг</a></li>
              <li><a href="#contact" className="hover:text-primary-yellow">Холбогдох</a></li>
              <li><a href="#" className="hover:text-primary-yellow">Цаг захиалах</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Холбоо барих мэдээлэл</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary-yellow" />
                +(976) 7777-7500
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-primary-yellow" />
                <span className="break-all">Sunmedical.ulaanbaatar2025@sunnmedical.mn</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary-yellow" />
                Хан-Уул дүүрэг, 7-р хороо<br />
                Яармаг Энканто Оранж тауны зүүн жигүүр
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-blue/30 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Sun Medical Center. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  )
}
