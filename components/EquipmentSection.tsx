const equipment = [
  {
    name: 'Дижитал рентген аппарат',
    model: 'INNOVISION DXII',
    category: 'Дүрслэх',
  },
  {
    name: 'Шүдний кресл',
    model: 'K3 dental',
    category: 'Шүдний эмчилгээ',
  },
  {
    name: 'Шүдний зураг авалтын компьютер томограф',
    model: 'T1-CS',
    category: 'Шүдний дүрслэх',
  },
  {
    name: 'Суурин ЭХО аппарат',
    model: 'Hitachi Aloka F37',
    category: 'Зүрх судасны эмгэг',
  },
  {
    name: 'Чих, хамар, хоолойн үзлэгийн ширээ',
    model: 'EDS-500',
    category: 'Чих, хамар, хоолой',
  },
  {
    name: 'Ясны сийрэгжилт тодорхойлох төхөөрөмж',
    model: 'OsteoSys-DEXXUM-T',
    category: 'Ортопед',
  },
  {
    name: 'Дурангийн хагалгааны төхөөрөмж',
    model: 'CONMED',
    category: 'Мэс засал',
  },
  {
    name: 'Ходоодны үян дуран',
    model: 'Advancia',
    category: 'Гастроэнтерологи',
  },
  {
    name: 'Гематологийн бүрэн автомат анализатор',
    model: 'Sysmex-XN-550',
    category: 'Лаборатори',
  },
  {
    name: 'Иммулогийн бүрэн автомат анализатор',
    model: 'Snibe-Maglumi 800',
    category: 'Лаборатори',
  },
  {
    name: 'Биохимийн бүрэн автомат анализатор',
    model: 'Sysmex-BX 3010',
    category: 'Лаборатори',
  },
  {
    name: 'Хагас автомат шээсний химийн анализатор',
    model: 'Sysmex-UC 1000',
    category: 'Лаборатори',
  },
]

export default function EquipmentSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Манай эмнэлгийн тоног төхөөрөмжийн нөөц
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Нарийвчилсан оношилгоо, үр дүнтэй эмчилгээг хангах орчин үеийн эмнэлгийн тоног төхөөрөмж
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary-blue mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{item.model}</p>
                  <span className="inline-block bg-primary-lightBlue text-primary-blue text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
