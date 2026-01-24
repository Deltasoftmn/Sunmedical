import { CheckCircle, Users, Heart, Stethoscope, Shield, Clock } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Нуруу нугас/ Мэдрэл',
    description: 'Нуруу, нугас, мэдрэлийн системийн бүрэн үзлэг',
  },
  {
    icon: Heart,
    title: 'Мэс засал/ Гэмтэл согог',
    description: 'Мэс заслын болон гэмтлийн эмчилгээ',
  },
  {
    icon: Heart,
    title: 'Зүрх судас / Ангиографи',
    description: 'Зүрх судасны эмгэгийн оношилгоо, эмчилгээ',
  },
  {
    icon: Stethoscope,
    title: 'Дотор/ Дотоод шүүрэл',
    description: 'Дотоод эрхтний эмчилгээ, шүүрэл',
  },
  {
    icon: Users,
    title: 'Хүүхэд/ Эмэгтэйчүүд / Шүд',
    description: 'Хүүхдийн, эмэгтэйчүүдийн, шүдний эмчилгээ',
  },
  {
    icon: Shield,
    title: 'Уламжлалт сэргээн засах',
    description: 'Уламжлалт эмнэлгийн сэргээн засах эмчилгээ',
  },
]

const features = [
  {
    icon: Clock,
    title: 'Тохилог / Тав тухтай орчин',
    description: 'Тав тухтай, амралтын орчинд үйлчилгээ',
  },
  {
    icon: Users,
    title: 'Найрсаг хамт олон',
    description: 'Найрсаг, мэдрэмтгий ажилтнууд',
  },
  {
    icon: Stethoscope,
    title: 'Чадварлаг эмч/ сувилагч',
    description: 'Туршлагатай, мэргэжлийн эмч, сувилагч нарын баг',
  },
  {
    icon: Shield,
    title: 'Сүүлийн үеийн тоног төхөөрөмжүүд',
    description: 'Орчин үеийн дэвшилтэт тоног төхөөрөмж',
  },
]

export default function PreventiveCheckupSection() {
  return (
    <section id="preventive" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              "УРЬДЧИЛАН СЭРГИЙЛЭХ ҮЗЛЭГИЙН БАГЦ"
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Байгууллагын ажилчдын эрүүл мэндийн урьдчилан сэргийлэх үзлэгийн багц
            </p>
          </div>

          {/* Why Preventive Checkups */}
          <div className="bg-primary-lightBlue rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-primary-blue mb-6 text-center">
              Урьдчилан сэргийлэх үзлэгт яагаад хамрагдах ёстой вэ?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-blue mb-2">
                    Эрт үед нь оношлох, эмчлэх
                  </h4>
                  <p className="text-gray-700">
                    Аливаа өвчлөлийг эрт үед нь оношлох, эмчлэх боломж
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-blue mb-2">
                    Урьдчилан сэргийлэх
                  </h4>
                  <p className="text-gray-700">
                    Цаашид үүсч болзошгүй хүндрэл, аюулаас урьдчилан сэргийлэх
                  </p>
                </div>
              </div>
            </div>

            {/* Organizational Benefits */}
            <div className="mt-8 pt-8 border-t-2 border-primary-blue/20">
              <h4 className="text-xl font-bold text-primary-blue mb-4 text-center">
                Байгууллагын нэгдсэн шинжилгээ
              </h4>
              <p className="text-center text-gray-700 mb-6">
                Эрүүл мэндийн урьдчилан сэргийлэх үзлэгт тогтмол хамрагдсанаар:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-primary-blue mb-2" />
                  <p className="text-sm text-gray-700">Ажилтны эрүүл мэндийн төлөв байдлыг танах</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-primary-blue mb-2" />
                  <p className="text-sm text-gray-700">Цаг ашиглалт буюу хөдөлмөрийн бүтээмж дээшлэх</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-primary-blue mb-2" />
                  <p className="text-sm text-gray-700">Байгууллагын ажилчдын сэтгэл ханамж өсөх</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-primary-blue mb-2" />
                  <p className="text-sm text-gray-700">Өвчлөлтэй хамаралтай ажлын сул зогсолт багасах</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-primary-blue mb-2" />
                  <p className="text-sm text-gray-700">Цаашид гарч болох эрсдлийг бууруулах, урьдчилан сэргийлэх</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-primary-blue mb-2" />
                  <p className="text-sm text-gray-700">Ажлын байрны нөхцөл байдлаас шалтгаалсан өвчлөлийг тогтоох</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary-blue mb-6 text-center">
              Манай үйлчилгээнүүд
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
                  >
                    <div className="bg-primary-lightBlue text-primary-blue w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary-blue mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary-blue mb-6 text-center">
              Манай давуу талууд
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="bg-primary-yellow text-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold text-primary-blue mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="bg-gradient-to-r from-primary-blue to-primary-darkBlue text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Хамтран ажиллах санал хүргүүлэх
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Манай эмнэлэг нь та бүхэнтэй байгууллагын ажилчдын урьдчилсан сэргийлэх 
              үзлэгийн багцаар эрүүл мэндийн үйлчилгээ үзүүлж, хамтран ажиллах хүсэлтэй байна.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="tel:77777500"
                className="bg-primary-yellow text-primary-blue px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Үзлэгт хамрагдах: 7777-7500
              </a>
              <a
                href="mailto:info@sunhospital.mn"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Имэйл илгээх
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
