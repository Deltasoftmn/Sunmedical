import { Sun, Users, Stethoscope, Microscope } from 'lucide-react'

export default function FeaturesBar() {
  const features = [
    {
      icon: <Sun className="h-10 w-10 text-white mb-4 lg:mb-0 lg:mr-4 flex-shrink-0" strokeWidth={1.5} />,
      title: 'Тохилог / Тав тухтай орчин',
      description: 'Тав тухтай, амралтын орчинд үйлчилгээ',
    },
    {
      icon: <Users className="h-10 w-10 text-white mb-4 lg:mb-0 lg:mr-4 flex-shrink-0" strokeWidth={1.5} />,
      title: 'Найрсаг хамт олон',
      description: 'Найрсаг, мэдрэмтгий ажилтнууд',
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-white mb-4 lg:mb-0 lg:mr-4 flex-shrink-0" strokeWidth={1.5} />,
      title: 'Чадварлаг эмч/ сувилагч',
      description: 'Туршлагатай, мэргэжлийн эмч, сувилагч нарын баг',
    },
    {
      icon: <Microscope className="h-10 w-10 text-white mb-4 lg:mb-0 lg:mr-4 flex-shrink-0" strokeWidth={1.5} />,
      title: 'Сүүлийн үеийн тоног төхөөрөмжүүд',
      description: 'Орчин үеийн дэвшилтэт тоног төхөөрөмж',
    },
  ]

  return (
    <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 mb-16">
      <div className="bg-primary-darkBlue rounded-2xl shadow-2xl p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left cursor-pointer hover:-translate-y-1 transition-all duration-300 ${index !== 0 ? 'pt-8 sm:pt-0 sm:pl-8' : ''
                }`}
            >
              <div className="group-hover:scale-110 group-hover:text-[#3b82f6] transition-all duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2 leading-tight group-hover:text-[#3b82f6] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
