export default function PartnersSection() {
  const partners = [
    { name: 'ISSCA', description: 'INTERNATIONAL SOCIETY FOR STEM CELL APPLICATION' },
    { name: 'HISAR HOSPITAL', description: 'INTERCONTINENTAL' },
    { name: 'ЭМД', description: 'ЭРҮҮЛ МЭНДИЙН ДААТГАЛЬБН ЕРБНХИЙ ГАЗАР' },
    { name: 'Johannesstift Diakonie', description: '' },
    { name: 'MOHOC', description: '' },
    { name: 'Asифарм', description: '' },
    { name: 'JOINT Venture Company', description: '' },
    { name: 'MEMORIAL HOSPITALS GROUP', description: '' },
    { name: 'Meril', description: 'More to Life' },
    { name: 'JCI', description: '' },
    { name: 'DELTA MEDICAL', description: '' },
  ]

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
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 text-center flex flex-col items-center justify-center min-h-[120px]"
              >
                <h3 className="text-lg font-semibold text-primary-blue mb-2">
                  {partner.name}
                </h3>
                {partner.description && (
                  <p className="text-xs text-gray-600 mt-2">
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
