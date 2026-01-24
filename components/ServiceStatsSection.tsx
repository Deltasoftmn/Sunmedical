export default function ServiceStatsSection() {
  const serviceStats = [
    { indicator: 'Амбулаторийн үзлэгийн нийт тоо', year2024: '11,379', year2025: '1,139' },
    { indicator: 'Өвчний үчир амбулаторийн үзлэгийн тоо', year2024: '10,364', year2025: '1,024' },
    { indicator: 'Урьдчилан сэргийлэх үзлэгийн эзлэх тоо/хувь', year2024: '10,364', year2025: '1,024' },
    { indicator: 'Идэвхитэй хяналтын тоо, хувь', year2024: '100%', year2025: '100%' },
    { indicator: 'Орны тоо', year2024: '30', year2025: '30' },
    { indicator: 'Нийт ор хоног', year2024: '3,232', year2025: '1,400' },
    { indicator: 'Дундаж ор хоног', year2024: '5.4', year2025: '5' },
    { indicator: 'Орны фонд ашиглалт', year2024: '29.5%', year2025: '12.9%' },
    { indicator: 'Орны эргэлт', year2024: '20.3', year2025: '9.3' },
    { indicator: 'Эмнэлгийн баралтын тоо', year2024: '0', year2025: '0' },
  ]

  const surgery2024 = [
    'Гар сарвууны мэдрэл чөлөөлөх мэс засал',
    'Нурууны мэдрэлийн мэс засал',
    'Ерөнхий мэс засал',
    'Шунт тавих мэс засал',
    'Нурууны нугасны дарагдал чөлөөлөх мэс засал',
    'Цесний хүүдий авах мэс засал',
    'Өөхөн эдийн хавдар авах',
    'Шөрмөслөг эдийн хавдар авах',
  ]

  const surgery2025 = [
    'Шилбэний ялтас авах',
    'Шагайн ялтас авах',
    'Өвдөгний үе солих мэс засал',
    'Өвдөгний дурангийн мэс засал',
    'Атерома авах мэс засал',
    'Өөкөн эдийн хавдар авах',
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              Тусламж, үйлчилгээний үзүүлэлт
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Манай эмнэлгийн үйл ажиллагааны статистик мэдээлэл
            </p>
          </div>

          {/* Service Statistics Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Үзүүлэлт</th>
                    <th className="px-6 py-4 text-center">2024 он</th>
                    <th className="px-6 py-4 text-center">2025 он</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceStats.map((stat, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-6 py-4 text-gray-700">{stat.indicator}</td>
                      <td className="px-6 py-4 text-center font-semibold text-primary-blue">
                        {stat.year2024}
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-primary-blue">
                        {stat.year2025}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Surgery Statistics */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 2024 Surgery Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-primary-blue mb-4">
                Мэс заслын 2024 оны үзүүлэлт
              </h3>
              <ul className="space-y-2">
                {surgery2024.map((surgery, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-yellow rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{surgery}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2025 Surgery Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-primary-blue mb-4">
                Мэс заслын 2025 оны үзүүлэлт
              </h3>
              <ul className="space-y-2">
                {surgery2025.map((surgery, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-yellow rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{surgery}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
