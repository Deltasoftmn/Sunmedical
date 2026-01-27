import { Globe, Award, Zap, TrendingUp, Users } from 'lucide-react'

const visionItems = [
  {
    icon: Globe,
    title: 'Дэлхийд тэргүүлэх ЭМНЭЛЭГ',
    description: 'Олон улсын жишигт хүрсэн эмнэлгийн үйлчилгээ',
  },
  {
    icon: Award,
    title: 'Байгууллагын сайн соёлыг эрхэмлэгч ЭМНЭЛЭГ',
    description: 'Мэргэжлийн ёс зүй, хүндэтгэлийг эрхэмлэх',
  },
  {
    icon: Zap,
    title: 'Үйлчлүүлэгчдэд шуурхай хариу үзүүлэгч ЭМНЭЛЭГ',
    description: 'Хурдан, үр дүнтэй үйлчилгээ',
  },
  {
    icon: TrendingUp,
    title: 'Байнгын өөрчлөлт хийгч, өсөн дэвшигч ЭМНЭЛЭГ',
    description: 'Тасралтгүй сайжруулалт, шинэчлэл',
  },
  {
    icon: Users,
    title: 'Сэтгэл ханамжтай ажилтнуудтай ЭМНЭЛЭГ',
    description: 'Хамт олны хөгжил, хамтын ажиллагаа',
  },
]

export default function VisionSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-lightBlue to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              Алсын хараа
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Манай эмнэлгийн алсын хараа, зорилго
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
