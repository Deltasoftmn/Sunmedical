import Image from 'next/image'

const partners = [
  { name: 'ISSCA', description: 'INTERNATIONAL SOCIETY FOR STEM CELL APPLICATION', logo: '/issca.png' },
  { name: 'HISAR HOSPITAL', description: 'INTERCONTINENTAL', logo: '/Hisar.png' },
  { name: 'ЭМД', description: 'ЭРҮҮЛ МЭНДИЙН ДААТГАЛЬБН ЕРБНХИЙ ГАЗАР', logo: '/emd.png' },
  { name: 'Johannesstift Diakonie', description: '', logo: '/johannesstift.png' },
  { name: 'MOHOC', description: '', logo: '/monos.png' },
  { name: 'Азифарм', description: '', logo: '/azifarm.png' },
  { name: 'JOINT Venture Company', description: '', logo: '/ivc.png' },
  { name: 'MEMORIAL HOSPITALS GROUP', description: '', logo: '/memorial.png' },
  { name: 'Meril', description: 'More to Life', logo: '/meril.png' },
  { name: 'JCI', description: '', logo: '/jci.png' },
  { name: 'DELTA MEDICAL', description: '', logo: '/delta.png' },
  { name: 'National Defense Medical Center', description: '', logo: '/National.png' },
  { name: 'Гэмтэл согог судлалын үндэсний төв', description: '', logo: '/gemtel.png' },
  { name: 'Hospital', description: '', logo: '/Hospital.png' },
  { name: '5.11', description: '', logo: '/5.11.png' },
  { name: 'МЭИК', description: '', logo: '/meik.png' },
]

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              Хамтрагч байгууллагууд
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Манай эмнэлэг олон улсын болон дотоодын тэргүүлэх байгууллагуудтай хамтран ажиллаж байна
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-200 text-center flex flex-col items-center justify-center min-h-[140px]"
              >
                <div className="relative w-full h-16 mb-3 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={64}
                    className="object-contain max-h-16 w-auto"
                  />
                </div>
                <h3 className="text-base font-semibold text-primary-blue mb-1">
                  {partner.name}
                </h3>
                {partner.description && (
                  <p className="text-xs text-gray-600">
                    {partner.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
