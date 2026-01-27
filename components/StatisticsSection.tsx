import { Building2, Users, BedDouble, Stethoscope, Activity, Heart } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '70',
    label: 'Ажилтны тоо',
    description: 'Туршлагатай эрүүл мэндийн мэргэжилтнүүд',
    color: 'text-primary-blue',
    bgColor: 'bg-primary-lightBlue',
  },
  {
    icon: Building2,
    number: '11',
    label: 'Тасгийн тоо',
    description: 'Нэг дээвэр дор бүх мэргэжлийн эмчилгээ',
    color: 'text-primary-blue',
    bgColor: 'bg-primary-lightBlue',
  },
  {
    icon: BedDouble,
    number: '30',
    label: 'Орны тоо',
    description: 'Тайван хэвтэн эмчлүүлэх ор',
    color: 'text-primary-blue',
    bgColor: 'bg-primary-lightBlue',
  },
  {
    icon: Activity,
    number: '2',
    label: 'Хагалгааны өрөө',
    description: 'Орчин үеийн мэс заслын өрөө',
    color: 'text-primary-blue',
    bgColor: 'bg-primary-lightBlue',
  },
  {
    icon: Stethoscope,
    number: '10,091',
    label: 'Амбулаторийн үзлэг',
    description: 'Чанартай амбулаторийн үйлчилгээ',
    color: 'text-primary-blue',
    bgColor: 'bg-primary-lightBlue',
  },
  {
    icon: Users,
    number: '553',
    label: 'Хэвтэн эмчлүүлсэн',
    description: 'Хэвтэн эмчлүүлсэн хүний тоо',
    color: 'text-primary-blue',
    bgColor: 'bg-primary-lightBlue',
  },
  {
    icon: Heart,
    number: '82.41%',
    label: 'Орны фонд ашиглалт',
    description: 'Үр ашигтай эрүүл мэндийн нөөцийн удирдлага',
    color: 'text-primary-blue',
    bgColor: 'bg-primary-lightBlue',
  },
  {
    icon: Activity,
    number: '11,326',
    label: 'Нийт үйлчлүүлэгч',
    description: 'Халамж, энэрэнгүй байдлаар үйлчлүүлсэн өвчтөн',
    color: 'text-primary-blue',
    bgColor: 'bg-primary-lightBlue',
  },
]

export default function StatisticsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Манай эмнэлгийн үзүүлэлт
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Орчин үеийн тоног төхөөрөмж, туршлагатай эмч мэргэжилтнүүдтэй дэлхийн жишигт хүрсэн эрүүл мэндийн үйлчилгээ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`${stat.bgColor} ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
