type DoctorTimelineItem = {
  year: string
  text: string
}

type Doctor = {
  id: string
  name: string
  role: string
  specialization: DoctorTimelineItem[]
  experience: DoctorTimelineItem[]
}

const DOCTORS: Doctor[] = [
  {
    id: 'lkhagvadorj',
    name: 'Г.ЛХАГВАДОРЖ',
    role: 'ЭМЧИЛГЭЭ ЭРХЭЛСЭН ДЭД ЗАХИРАЛ',
    specialization: [
      { year: '2004-2010', text: 'Ач АУИС хүний их эмч' },
      { year: '2013-2014', text: 'ГССҮТ- д Гэмтлийн эмчийн резидентур' },
      { year: '2015-2016', text: 'Удирдлагын академи' },
      { year: '', text: 'Төрийн удирдлагын менежер' },
      { year: '2015-2018', text: 'Анагаах ухааны магистр' },
    ],
    experience: [
      { year: '2010-2012', text: 'Гурван гүүр ӨЭМТ их эмч' },
      { year: '2013', text: 'СХД Эмнэлэг арга зүйч' },
      { year: '2013-2019', text: 'СХДЭМТ Гэмтлийн эмч' },
      { year: '2021-2023', text: 'СХДЭМТ Бодлого төлөвлөлтийн албаны дарга' },
      { year: '2023-2024', text: 'СХДЭМТ Орлогч дарга' },
      { year: '2024-2025', text: 'Асралт мед нэгдсэн эмнэлэг эмнэлзүй эрхэлсэн орлогч дарга' },
      { year: '2025-2025.08', text: 'Голден Луксор Эмнэлэг-Дарга' },
      { year: '', text: 'Мэлтэс мед эмнэлэг-ЭҮТХ Дэд захирал' },
      { year: '2025.08', text: 'Сон медикал Улаанбаатар Центр Эмнэлэг-ЭҮТХ Дэд захирал' },
    ],
  },
  {
    id: 'otgonzul',
    name: 'О.ОТГОНЗУЛ',
    role: 'Чих Хамар Хоолойн Эмч',
    specialization: [
      { year: '2007-2014', text: '“Ач” АУИС-н Хүний Их Эмч' },
      { year: '2022-2024', text: 'ЭМХТ-УГТЭ -н Чих хамар хоолойн эмч' },
    ],
    experience: [
      { year: '2014', text: 'Мөнгөнгөө ЭЭМТ-н Хүний Их Эмч' },
      { year: '2016-2022', text: 'НБ-н 135-р Сургууль  Их эмч' },
      { year: '2022-2024', text: 'ЭМХТ-н УГТЭ Чих хамар хоолойн Резидент Эмч' },
      { year: '2024', text: 'Сон Медикал Центр Улаанбаатар Эмнэлэг Чих' },
      { year: '2025', text: 'Хамар Хоолойн Эмч' },
    ],
  },
  {
    id: 'enkhmonkh',
    name: 'М.Энхмөнх',
    role: 'Халдварт судлаач эмч',
    specialization: [
      { year: '2005-2010', text: 'ЭМШУИС НЭМС-Эрүүл ахуйч' },
      { year: '2012-2013', text: 'ЭМШУИС- Халдвар хяналтын ажилтан' },
      { year: '2013-2015', text: 'Удирдлагын академи төрийн' },
      { year: '', text: 'удирдлага менежер' },
    ],
    experience: [
      { year: '2012-2014', text: 'ХУДНЭ- Халдвар судлаач эмч' },
      { year: '2014', text: 'Ачтан-Элит эмнэлэгт халдвар судлаач эмч' },
      { year: '2015-2017', text: 'БГДЭМ- Төвд халдвар судлаач эмч' },
      { year: '2018-2020', text: 'ХНХЯам ХАБЭМТөвд хөдөлмөрийн эрүүл ахуйч' },
      { year: '2024-2025', text: 'Долмамин эмнэлэгт халдвар судлаач' },
      { year: '2025', text: 'Оргил рашаан сувилалд халдвар судлаач эмч' },
      { year: '2025', text: 'Сон медикал эмнэлэгт халдвар судлаач' },
    ],
  },
  {
    id: 'ariungerel',
    name: 'Л.Ариунгэрэл',
    role: 'Хүүхдийн эмч',
    specialization: [
      { year: '2014-2020', text: 'Анагаахын Шинжлэх Ухаан' },
      { year: '', text: 'Үндэсний их сургууль Хүний их' },
      { year: '', text: 'эмч' },
      { year: '2020-2023', text: 'Эх хүүхдийн эрүүл мэндийн үндэсний төвд' },
      { year: '', text: 'Хүүхдийн эмч-резидентээр суралцсан' },
    ],
    experience: [
      { year: '2024-2025', text: 'Хан уул дүүргийн эрүүл мэндийн төвд Хүүхэд өсвөр үеийн эмчээр ажилласан' },
      { year: '2025', text: 'Сон Медикал Центр Улаанбаатар Эмнэлэг' },
    ],
  },
  {
    id: 'nandinjargal',
    name: 'О.Нандин жаргал',
    role: 'Дүрс оношлогооны эмч',
    specialization: [
      { year: '2015-2021', text: 'ГУИС-ийн хүний их эмч' },
      { year: '2021-2023', text: 'АШУИС, МДИ-ийн Дүрс оношлогооны эмч' },
      { year: '2021-2023', text: 'ГУИС-ийн АУ-ны магистр' },
      { year: '2025', text: 'ШУГТЭ-ийн КТГ-ийн олгох сургалт' },
    ],
    experience: [
      { year: '2023-2025', text: 'Сон Медикал Центр Улаанбаатар Эмнэлэг Дүрс оношлогооний' },
      { year: '', text: 'эмч' },
    ],
  },
  {
    id: 'yanjmaa',
    name: 'Д.ЯНЖМАА',
    role: 'МЭДРЭЛИЙН ЭМЧ',
    specialization: [
      { year: '1987-1993', text: 'АНАГААХ УХААНЫ ДЭЭД СУРГУУЛЬ-ХҮНИЙ их эмч' },
      { year: '1996-1997', text: 'мэдрэлийн эмчийн мэргэшил олгох курс' },
      { year: '1997-1998', text: 'Анагаах ухааны магистр' },
      { year: '2009-2010', text: 'АНУ-Д мэдрэлийн үйл оношлогоо мэргэжил дээшлүүлсэн' },
      { year: '2011', text: 'Тархины цахилгаан бичлэгийн эмчээр' },
      { year: '2014', text: 'Тархины судасны өвчний оношлогооны эмчээр' },
      { year: '2016', text: 'Мэдрэлийн ахлах зэрэг' },
      { year: '2021', text: 'Мэдрэлийн тэргүүлэх зэрэг' },
    ],
    experience: [
      { year: '1995-1998', text: 'БЗДНЭ-т дотрын мэдрэлийн эмч' },
      { year: '1998-2000', text: 'СХДНЭ-т дотрын мэдрэлийн эмч' },
      { year: '2000-2009', text: 'Анагаах ухааны хүрээлэн мэдрэлийн сектор ЭША' },
      { year: '2010-2011', text: 'УНТЭ мэдрэлийн эмч' },
      { year: '2011-2017', text: 'Ачтан эмнэлгийн мэдрэлийн эмч' },
      { year: '2017-2025', text: 'ХУДНЭ мэдрэлийн эмч, чанарын менежер' },
      { year: '2025', text: 'Сон Медикал Центр Улаанбаатар Эмнэлэг' },
    ],
  },
  {
    id: 'enkhzaaya',
    name: 'Х.ЭНХЗАЯА',
    role: 'Эмэгтэйчүүдийн эмч',
    specialization: [
      { year: '2012-2018 он', text: '"Ач " АУИС -Хүний их эмч' },
      { year: '2019-2020 он', text: 'ЭМХТ-ЧДНЭ Ерөнхий мэргэшил судлал' },
      { year: '2020-2022 он', text: 'ЭМХТ-НӨАГ Эх барих эмэгтэйчүүд судлал' },
      { year: '2025 он', text: 'АШУУИС-АУ-ны магистр' },
      { year: '2025 он', text: 'АШУУИС-МДИ-Эх барих эмэгтэйчүүдийн хэт авиа' },
      { year: '', text: 'оношлогоо' },
    ],
    experience: [
      { year: '2018-2019 он', text: 'Чимэг Оюу эмэгтэйчүүдийн эмнэлэг-Их эмч' },
      { year: '2020-2022 он', text: 'ӨАГ -Эх барих эмэгтэйчүүдийн резидент эмч' },
      { year: '2023-2025 он', text: 'ЭНЭҮТ-II-Эх барих эмэгтэйчүүдийн эмч' },
      { year: '2025 он', text: 'Сон Медикал Центр эмнэлэг-Эмэгтэйчүүдийн эмч' },
    ],
  },
  {
    id: 'saraa',
    name: 'Ө.САРАА',
    role: 'Мэдрэл, мэдрэлийн мэс заслын эмч, ахлах зэрэг, УУМ, клиникийн профессор',
    specialization: [
      { year: '2007 он', text: 'Мэдрэлийн эмч' },
      { year: '2010 он', text: 'Ерөнхий мэс заслын эмч' },
      { year: '2011 он', text: 'Мэдрэлийн мэс заслын эмч' },
      { year: '2013 он', text: 'БНГУ-ын тархины харвалтын үеийн бүлэн хайлуулах эмчилгээ' },
      { year: '2015 он', text: 'Тархины судасны хэт авиа оношилгоо, нейросонологи' },
      { year: '2020 он', text: 'Мөчдийн судасны хэт авиа оношлогоо' },
    ],
    experience: [
      { year: '2008-2009 он', text: 'Ачтан эмнэлгийн мэдрэлийн эмч' },
      { year: '2010-2021 он', text: 'УГТЭ-Мэдрэлийн тасгийн эмч' },
      { year: '2021-2022он', text: 'Асралтмед эмнэлэг Мэдрэлийн мэс заслын эмч' },
      { year: '2022-2024 он', text: 'ОУ байгууллага мэргэжилтэн' },
      { year: '2025 он', text: 'Сон эмнэлэг Мэдрэлийн мэс заслын эмч' },
    ],
  },
  {
    id: 'nyambaatar',
    name: 'Э.НЯМБААТАР',
    role: 'Гэмтлийн мэс заслын эмч',
    specialization: [
      { year: '2016-2022 он', text: '“Этүгэн Их Сургууль” Хүний их эмч' },
      { year: '2023-2025 он', text: '“Гэмтэл Согог Судлал” резидент эмч' },
    ],
    experience: [
      { year: '2022-2023 он', text: '“Налайх эрүүл мэндийн төв” Амбулаторийн тасаг' },
      { year: '2025 он', text: 'Сон Медикал Центр-Улаанбаатар эмнэлэг' },
      { year: '', text: 'Гэмтлийн эмч' },
    ],
  },
  {
    id: 'selenge',
    name: 'Ж.СЭЛЭНГЭ',
    role: 'Дурангийн эмч',
    specialization: [
      { year: '1997-2004', text: 'АУДС -ХҮНИЙ ИХ ЭМЧ' },
      { year: '2004-2006', text: 'ДОТРЫН ЭМЧ РЕЗИДЕНС' },
      { year: '2010', text: 'ХООЛ БОЛОВСРУУЛАХ ЭРХТНИЙ ЭМГЭГИЙН ЭМЧ' },
      { year: '2016', text: 'АНАГААХ УХААНЫ МАГИСТР' },
    ],
    experience: [
      { year: '2006-2008', text: 'ХУДНЭ ЭМНЭЛЭГ -ДОТРЫН ЭМЧ' },
      { year: '2008-2016', text: 'АЧТАН ЭМНЭЛЭГ -ДОТРЫН ЭМЧ' },
      { year: '2016-2022', text: 'МӨНГӨН ГҮҮР-МЭС ЗАСЛЫН ЭМЧ' },
      { year: '2022-2024', text: '4-Р ЭМНЭЛЭГ- ДОТРЫН ЭМЧ' },
      { year: '2024-2025', text: 'НУРА ЭРТ ИЛРҮҮЛГИЙН ТӨВ -ҮДХ ЭМЧ' },
      { year: '2025', text: 'Сон Медикал Центр Улаанбаатар Эмнэлэг' },
    ],
  },
  {
    id: 'sergelen',
    name: 'Д.СЭРГЭЛЭН',
    role: 'Мэс заслын эмч /АУ-ны магистр, ахлах зэрэгтэй/',
    specialization: [
      { year: '2010', text: 'ЭМШУИС-ХҮНИЙ их эмч' },
      { year: '2010-2012', text: 'ЭМШУИС- МЭС ЗАСЛЫН ЭМЧ' },
      { year: '2021-2022', text: 'БНСУ-ЗҮРХ СУДАСНЫ МЭС ЗАСЛЫН ЭМЧ' },
    ],
    experience: [
      { year: '2011-2012', text: 'НИЙСЛЭЛИЙН ТҮРГЭН ТУСЛАМЖИЙН ТӨВ-ИХ эмч' },
      { year: '2012-2015', text: 'СЭЛЭНГЭ НЭГДСЭН ЭМНЭЛЭГ-МЭС ЗАСЛЫН ЭМЧ' },
      { year: '2016-2020', text: 'МӨНГӨН ГҮҮР-МЭС ЗАСЛЫН ЭМЧ' },
      { year: '2025', text: 'СОН МЕДИКАЛ ЦЕНТР-УЛААНБААТАР ЭМНЭЛЭГ' },
    ],
  },
]

function initials(name: string) {
  const raw = name.replace(/\s+/g, ' ').trim()
  if (!raw) return 'ЭМ'
  return raw.slice(0, 2)
}

function TimelineBlock({ title, items }: { title: string; items: DoctorTimelineItem[] }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 bg-primary-blue px-4 py-2.5 text-sm font-semibold tracking-wide text-white">
        {title}
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={`${item.year}-${idx}`} className="grid grid-cols-[96px_1fr] gap-3 text-sm leading-relaxed text-gray-800">
              <span className="font-semibold text-gray-900">{item.year || ' '}</span>
              <span className="text-gray-800">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function DoctorsContent() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
      <div className="grid gap-6 md:grid-cols-2">
        {DOCTORS.map((doc) => (
          <article
            key={doc.id}
            id={doc.id}
            className="scroll-mt-24 rounded-2xl border border-gray-200 bg-gray-50/60 p-5 shadow-sm transition hover:shadow-md"
          >
            <header className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary-blue text-white shadow-sm">
                <span className="text-base font-bold">{initials(doc.name)}</span>
              </div>
              <div className="min-w-0">
                <h2 className="truncate text-lg font-extrabold tracking-tight text-primary-blue md:text-xl">{doc.name}</h2>
                <p className="mt-1 text-sm font-semibold text-gray-800">{doc.role}</p>
              </div>
            </header>

            <div className="mt-5 grid gap-4">
              <TimelineBlock title="МЭРГЭШСЭН БАЙДАЛ" items={doc.specialization} />
              <TimelineBlock title="АЖЛЫН ТУРШЛАГА" items={doc.experience} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

