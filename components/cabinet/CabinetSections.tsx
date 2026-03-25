import type { ReactNode } from 'react'
import TreatmentImage from '@/components/emchilgee/TreatmentImage'

import CabinetAccordionShell from './CabinetAccordionShell'

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-primary-blue">
      {items.map((item) => (
        <li key={item} className="leading-relaxed text-sm md:text-base">
          {item}
        </li>
      ))}
    </ul>
  )
}

function CabinetNeurology() {
  return (
    <CabinetAccordionShell id="neurology" title="Мэдрэлийн эмчийн кабинет">
      <div className="space-y-6">
        <p className="text-sm leading-relaxed md:text-base">
          Манай мэдрэлийн эмчийн кабинет нь тархи, нугас, захын мэдрэл, булчингийн тогтолцооны өвчин эмгэгийг орчин үеийн, олон улсын эмнэлзүйн удирдамжид
          (AAN, IHS, EFNS) тулгуурлан оношилж, эмчилж, хяналт хийдэг.
        </p>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="space-y-5">
            <h3 className="text-base font-bold text-primary-blue md:text-lg">Оношилгоо</h3>

            <div>
              <p className="mb-2 text-sm font-semibold text-gray-900 md:text-base">Тархины болон судасны оношилгоо</p>
              <BulletList
                items={[
                  'Тархины судасны эмгэгийн клиник үзлэг',
                  'Тархины цус харвалт, ТИА (түр зуурын ишеми)-ийн эрсдэлийн үнэлгээ',
                  'Толгой эргэх, ухаан балартах, ой санамж буурах шалтгаан тогтоох',
                  'КТ, МРТ, МРА, КТА шинжилгээний мэргэжлийн тайлбар, үнэлгээ',
                  'Судасны гаралтай толгойн өвдөлтийн ялган оношилгоо',
                  'Тархины судасны хэт авиан өнгөт оношилгоо',
                ]}
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-gray-900 md:text-base">Толгойн өвдөлтийн оношилгоо, эмчилгээ</p>
              <BulletList items={['Мигрень', 'Архаг толгойн өвдөлт', 'Хүчдэлийн гаралтай толгойн өвдөлт', 'Кластер толгойн өвдөлт']} />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-gray-900 md:text-base">Ботокс тарилга (OnabotulinumtoxinA)</p>
              <BulletList
                items={[
                  'Архаг мигрень-ийн үед',
                  'Олон улсын PREEMPT протоколын дагуу',
                  'FDA, EMA-аар зөвшөөрөгдсөн стандарт тун, тарилгын цэгээр',
                  'Өвдөлтийн давтамж, хүчийг бууруулах зорилготой',
                ]}
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-gray-900 md:text-base">Невралги, мэдрэлийн өвдөлтийн эмчилгээ</p>
              <BulletList items={['Гурвалсан мэдрэлийн невралги', 'Дагзны мэдрэлийн өвдөлт', 'Захын мэдрэлийн дарагдалт өвдөлт']} />
            </div>
          </div>

          <div className="space-y-5">
            <BulletList items={['Мэс заслын дараах мэдрэлийн өвдөлт']} />

            <div>
              <p className="mb-2 text-sm font-semibold text-gray-900 md:text-base">Мэдрэлийн хориг (Nerve block)</p>
              <BulletList
                items={[
                  'Хэсэг газрын мэдээ алдуулагч ± кортикостероид',
                  'Дагзны, гурвалсан, бусад захын мэдрэлийн хориг',
                  'Олон улсын нотолгоонд суурилсан аргачлалаар',
                  'Өвдөлтийг хурдан намдааж, архагшихаас сэргийлэх',
                ]}
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-gray-900 md:text-base">Бусад үйлчилгээ</p>
              <BulletList
                items={[
                  'Гар, хөлийн бадайралт, мэдээ алдалт',
                  'Нуруу, хүзүү, ууцны өвдөлт',
                  'Саажилт, супрал',
                  'Нугасны гэмтэл, миелопати',
                  'Таталт, уналт',
                  'Рейногийн хам шинж',
                  'Мэдрэлийн гаралтай архаг өвдөлт',
                ]}
              />
            </div>

            <div className="rounded-lg border border-primary-blue/20 bg-primary-lightBlue/40 px-4 py-4">
              <p className="mb-2 text-sm font-bold text-primary-blue md:text-base">Бидний зорилго</p>
              <p className="mb-2 text-sm text-gray-700 md:text-base">Өвчтөн бүрт:</p>
              <BulletList items={['Зөв онош', 'Нотолгоонд суурилсан эмчилгээ', 'Олон улсын стандарт']} />
            </div>
          </div>
        </div>
      </div>
    </CabinetAccordionShell>
  )
}

function CabinetGeneralSurgery() {
  return (
    <CabinetAccordionShell id="surgery" title="Ерөнхий мэс заслын кабинет">
      <div className="space-y-5">
        <p className="text-sm leading-relaxed md:text-base">
          Сон эмнэлгийн ерөнхий мэс заслын кабинет 2020 оноос үйл ажиллагаа явуулж эхэлсэн. Ерөнхий мэс заслын бүх төрлийн мэс засал хийгддэг бөгөөд үүнд:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm marker:text-primary-blue md:text-base">
          <li>Дурангийн аргаар цөсний хүүдийн ургацаг, чулуу авах</li>
          <li>Мухар олгой авах</li>
          <li>Өөхөн ур</li>
          <li>Хоргүй хавдар</li>
          <li>Ивэрхий засах</li>
          <li>Судасны мэс засал</li>
          <li>Хатиг буглаа нээх</li>
        </ul>
        <p className="text-sm leading-relaxed md:text-base">
          Шигдсэн хумс авах зэрэг олон төрлийн мэс засал, мэс ажилбаруудыг орчин үеийн аппарат, тоног төхөөрөмжөөр тоноглогдсон, вакум агааржуулалтын систем бүхий
          хагалгааны өрөөнд хийж гүйцэтгэж байна.
        </p>
        <div className="rounded-lg bg-primary-blue/5 px-4 py-4">
          <p className="text-sm font-semibold text-primary-blue md:text-base">Эмчийн мэдээлэл</p>
          <p className="mt-1 text-sm text-gray-800 md:text-base">
            Зүрх судасны мэс заслын ахлах зэргийн эмч, АУ-ны магистр Д.Сэргэлэн
          </p>
        </div>
      </div>
    </CabinetAccordionShell>
  )
}

function CabinetInternalPediatrics() {
  return (
    <CabinetAccordionShell id="internal-pediatrics" title="Дотор болон хүүхдийн кабинет">
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <div>
          <h3 className="mb-2 font-bold text-primary-blue md:text-lg">Дотор</h3>
          <p className="mb-3 text-sm font-medium text-gray-700 md:text-base">Дотрын өвчин судлалын кабинетын үйл ажиллагаа</p>
          <BulletList
            items={[
              'Зүрх судасны эрхтэн тогтолцооны эмгэгүүдийн үзлэг зөвлөгөө, оношлогоо эмчилгээ болон хэвтэн эмчлүүлэх',
              'Амьсгалын эрхтэн тогтолцооны эмгэгүүдийн үзлэг зөвлөгөө, оношлогоо эмчилгээ болон хэвтэн эмчлүүлэх',
              'Хоол боловсруулах эрхтэн тогтолцооны эмгэгүүдийн үзлэг зөвлөгөө, оношлогоо эмчилгээ болон хэвтэн эмчлүүлэх',
              'Бөөр шээс ялгаруулах эрхтэн тогтолцооны эмгэгүүдийн үзлэг зөвлөгөө, оношлогоо эмчилгээ болон хэвтэн эмчлүүлэх',
              'Дотоод шүүрлийн эрхтэн тогтолцооны эмгэгүүдийн үзлэг зөвлөгөө, оношлогоо эмчилгээ болон хэвтэн эмчлүүлэх',
            ]}
          />
        </div>
        <div>
          <h3 className="mb-2 font-bold text-primary-blue md:text-lg">Хүүхэд</h3>
          <p className="mb-3 text-sm font-medium text-gray-700 md:text-base">Хүүхдийн эмчийн үзлэг нь 2025 оны 10 сараас эхлэн ажиллаж байна</p>
          <BulletList
            items={[
              '1 хүүхдийн эмч амбулаториор ажиллаж байна',
              'Эмчийн үзлэг эмчилгээ оношлогоо',
              'Лаборатори болон багажийн шинжилгээ хийгдэж байна',
              'Өдрийн эмчилгээнд шинж тэмдгийн эсрэг эмчилгээ (дусал, тариа, эмийн эмчилгээ) хийгдэж байна',
              'Утлагын аппарат 3 ширхэг ажиллаж байна',
              'Хүүхдийн түр саатуулах тоглоомын өрөө шинээр бий болгосон',
              'Хүүхдийн эрдэсийн багцын шинжилгээнүүд хийгдэж байна',
            ]}
          />

          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="mb-3 text-sm font-medium text-gray-600 md:text-base">Кабинетын орчин</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <TreatmentImage src="/cabinet/peds-play-1.jpg" alt="Хүүхдийн тоглоомын өрөө" aspectClassName="aspect-square min-h-[110px]" imgClassName="object-cover object-center" />
              <TreatmentImage src="/cabinet/peds-play-2.jpg" alt="Хүүхдийн тоглоомын өрөө" aspectClassName="aspect-square min-h-[110px]" imgClassName="object-cover object-center" />
              <TreatmentImage src="/cabinet/peds-play-3.jpg" alt="Хүүхдийн тоглоомын өрөө" aspectClassName="aspect-square min-h-[110px]" imgClassName="object-cover object-center" />
              <TreatmentImage src="/cabinet/peds-nebulizer.jpg" alt="Утлагын аппарат" aspectClassName="aspect-square min-h-[110px]" imgClassName="object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </CabinetAccordionShell>
  )
}

function CabinetENT() {
  return (
    <CabinetAccordionShell id="ent-cabinet" title="Чих хамар хоолойн кабинетийн танилцуулга">
      <div className="space-y-8">
        <p className="text-sm leading-relaxed md:text-base">
          SUN MEDICAL CENTER ULAANBAATAR эмнэлэг нь 2019 оноос эхлэн нэгдсэн эмнэлгийн статустай ажиллаж байгаа бөгөөд одоогоор чих хамар хоолойн кабинет нь 1 эмчийн
          бүрэлдэхүүнтэй ажиллаж байна. Цаашид чих хамар хоолойн мэс заслын тусламж үйлчилгээг чанартай үзүүлэхээр зорин ажиллаж байна.
        </p>

        <div>
          <h3 className="mb-3 text-base font-bold text-primary-blue md:text-lg">Кабинетийн зохион байгуулалт</h3>
          <TreatmentImage
            src="/cabinet/ent/office.jpg"
            alt="Чих хамар хоолойн кабинетийн зохион байгуулалт"
            aspectClassName="aspect-[16/10] min-h-[220px]"
            imgClassName="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="mb-3 text-base font-bold text-primary-blue md:text-lg">Чих хамар хоолойн кабинетийн тоног төхөөрөмж</h3>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <TreatmentImage
              src="/cabinet/ent/equipment.jpg"
              alt="Чих хамар хоолойн кабинетийн тоног төхөөрөмж"
              aspectClassName="aspect-[4/3] min-h-[220px]"
              imgClassName="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="rounded-lg border border-emerald-200/80 bg-emerald-50/70 px-5 py-5 md:px-6 md:py-6">
              <p className="text-sm leading-relaxed text-gray-800 md:text-base">
                Үзлэгийн ширээ- 2020 онд үйлдвэрлэгдсэн.
                <br />
                <span className="font-semibold text-primary-blue">Үүрэг:</span> Чих хамар хоолойн эмчийн үзлэг, дурангийн оношилгоо, шинжилгээ, чих угаах , соруулах болон жижиг
                эмчилгээ хийхэд ашиглагдана.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="mb-3 text-base font-bold text-primary-blue md:text-lg">Чих хамар хоолойн кабинетэд хийгддэг ажилбар</h3>
          <ul className="space-y-2 text-sm md:text-base">
            {[
              'Чихний сэтэрхий оёх',
              'Хамрын шинэ хугарал засах',
              'Хамар болон гадна чихэнд зүслэг хийх /Хатиг буглаа нээх /',
              'Самалдаг тайрах түлэх',
              'Чих , хамар угаах',
              'Чих/хамар хоолойн бүх төрлийн үзлэг оношилгоо хийх',
            ].map((t) => (
              <li key={t} className="flex gap-3 leading-relaxed text-gray-900">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-sm bg-amber-700" aria-hidden />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="mb-3 text-base font-bold text-primary-blue md:text-lg">Чих хамар хоолойн хийгдэх мэс засал</h3>
          <ul className="space-y-2 text-sm md:text-base">
            {[
              'Хамрын таславч тэгшлэх мэс засал',
              'Хамрын хуучин хугарал засах мэс засал',
              'Хамрын хэлбэр засах мэс засал / Гоо сайхан/',
              'Тагнайн гүйлсэн булчирхай авах мэс засал',
              'Хэнгэрэг хальс нөхөх мэс засал зэрэг нь манай эмнэлэгт хийгдэж байна.',
            ].map((t) => (
              <li key={t} className="flex gap-3 leading-relaxed text-gray-900">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-sm bg-amber-700" aria-hidden />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CabinetAccordionShell>
  )
}

function CabinetRehabilitation() {
  return (
    <CabinetAccordionShell id="rehabilitation" title="Сэргээн засах, уламжлалт эмчилгээний кабинет">
      <div className="space-y-10">
        <p className="text-sm leading-relaxed md:text-base">
          Орчин үеийн эмчилгээний тэргүүлэх чиглэл бөгөөд бүх чиглэлийн сэргээн засахын эмчилгээг амбулаторийн үзлэг зөвлөгөө, өдрийн эмчилгээ, хэвтүүлэн эмчлэх
          чиглэлээр орчин үеийн дэвшилтэт технологи, тоног төхөөрөмжийг ашиглан уламжлалт эмчилгээ, эмийн эмчилгээтэй хослуулан хийдэг нь өвчний эдгэрэлтийг түргэсгэж,
          хөдөлмөрийн чадвар алдалтыг хурдан сэргээж амьдралын чанарыг дээшлүүлэхэд чиглэсэн онцлог давуу талтай.
        </p>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
          <h3 className="mb-5 text-center text-base font-bold text-primary-blue md:text-lg">Тусламж үйлчилгээний чиглэл</h3>
          <div className="grid gap-8 md:grid-cols-2 md:gap-0">
            <div className="md:border-r md:border-gray-200 md:pr-8">
              <h4 className="mb-4 font-bold text-gray-900">Сэргээн засах эмчилгээ</h4>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <BulletList
                  items={[
                    'Амбулаторийн үзлэг, оношилгоо, зөвлөгөө',
                    'Гэмтлийн дараах сэргээн засах эмчилгээ',
                    'Ахмадын сэргээн засах эмчилгээ',
                    'Үе мөч, тулгуур эрхтэний сэргээн засах эмчилгээ',
                    'Мэс заслын өмнөх болон дараах үеийн сэргээн засах эмчилгээ',
                  ]}
                />
                <BulletList
                  items={[
                    'Мэдрэлийн эмгэг, харвалтын дараах сэргээн засах эмчилгээ',
                    'Өвдөгний ЭХО',
                    'Мөрний ЭХО',
                    'Улны хальсны ЭХО',
                    'Физик эмчилгээ',
                  ]}
                />
              </div>
            </div>
            <div className="md:pl-8">
              <h4 className="mb-4 font-bold text-gray-900">Уламжлалт эмчилгээ</h4>
              <BulletList items={['Амбулаторийн үзлэг, оношилгоо, зөвлөгөө', 'Бариа засал', 'Соруул засал', 'Төөнө засал']} />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="mb-2 text-base font-bold text-primary-blue md:text-lg">Кабинет тоног төхөөрөмжийн нөөц</h3>
          <p className="text-sm text-gray-600 md:text-base">Доорх төхөөрөмжүүдийн товч танилцуулга, заалт / хориглох (эсрэг) заалтууд.</p>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">Бумба хатаах шүүгээ</h4>
              <p className="mb-3 text-sm font-semibold text-gray-800 md:text-base">Хатаах шүүгээ ажиллуулахын өмнө мөрдөх зүйлс:</p>
              <BulletList
                items={[
                  'Тэгш гадаргуу дээр байрлуулах',
                  'Цахилгааны эх үүсвэрийн найдвартай эсэхийг шалгах',
                  'Бумба ариутгагч хатаах шүүгээний бүрэн бүтэн байдал, хэвийн ажиллагаанд бэлэн эсэхийг нягтлах',
                  'Дотор нь шатамхай материал байхгүй эсэхийг шалгах',
                  'Шууд нарны тусгалтай болон өндөр чийгшил, температуртай газар байрлуулахгүй байх',
                ]}
              />
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">Зэс бумба</h4>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Заалт</p>
                  <BulletList items={['Уушгины үрэвсэл', 'Нуруу, цээжний өвдөлт']} />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Эсрэг заалт</p>
                  <BulletList
                    items={[
                      'Уушгины сүрьеэ',
                      'Уушгины хорт хавдар',
                      'Цусны бүлэгнэлтийн өөрчлөлттэй үед',
                      'Архаг цус багадалт',
                      'Бумба тавих газар хавантай',
                      'Арьсны идээт үрэвсэл болон ямар нэг тууралт',
                      'Арьс хэт их мэдрэг үед',
                      'Өндөр халуунтай үед',
                      'Бие махбод хэт суларсан',
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">ICT / Цахилгаан бумба</h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                Долгионы урт ижил байх гүйдлүүд нь бие махбодид нэг цэгт давхцахдаа давтамжийн зөрүүтэйгээ ижил /1–120Гц/ давтамжтай идэвхтэй гүйдлийг үүсгэн
                электродуудын хоорондох өргөн талбайг хамран судас, булчинг үелэн агшааж цусны эргэлт, бодисын солилцоог сайжруулан, эдийн хүчилтөрөгчийн хангамжийг
                нэмэгдүүлэн, үрэвслийн голомт дахь хаванг бууруулах, өвдөлт намдаах үйлдлийг үзүүлнэ.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Эмчлэх заалт</p>
                  <BulletList items={['Захын мэдрэлийн үрэвсэл', 'Гэмтлийн гаралтай өвдөлт', 'Үе, яс холбоос, зөөлөн эдийн эмгэг', 'Бодисын солилцооны өөрчлөлтийн улмаас үүссэн өвдөлт бүхий эмгэг']} />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Хориглох заалт</p>
                  <BulletList items={['Үрэвсэл хурц үе', 'Үений дотоод гэмтэл', 'Цус хуралт', 'Ясны хугарлын эрт үе', 'Венийн судасны хананы үрэвсэл', 'Хорт хавдар', 'Жирэмсэн']} />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">Серажем ор</h4>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Заалт</p>
                  <BulletList items={['Бодисын солилцоог сайжруулах', 'Нурууны булчин суллах', 'Цусан хангамж сайжруулах', 'Хэсэгчилсэн газарт дулааны үйлчилгээ үзүүлэх']} />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Эсрэг заалт</p>
                  <BulletList
                    items={[
                      'Нуруу нугасны мэс засал хийлгэсэн, яс-булчингийн гэмтэлтэй хүмүүс',
                      'Жирэмсэн болон зүрх судасны эмгэгтэй',
                      'Арьсны өвчтэй, халуунд мэдрэг хүмүүс',
                      'Нярай болон өөрийгөө удирдах боломжгүй хүмүүсийг дангаар нь хэвтүүлэхгүй',
                      'Хэт удаан хугацаагаар дараалан хэрэглэж булчинд хэт ачаалал өгөхгүй',
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">Continues Passive Motion Device (CPM) / Идэвхигүй далайцын аппарат</h4>
              <p className="mb-3 text-sm leading-relaxed text-gray-700 md:text-base">
                CPM нь өвдөгний мэс заслын дараах сэргээн засах эмчилгээнд өргөн хэрэглэгддэг ба өвдөгний үе солих хагалгааны дараа эрт үед хөдөлгөөний далайцыг
                нэмэгдүүлснээр өвчин намдаах эмийн хэрэглээг багасгаж, эмнэлэгт байх хугацааг богиносгоно.
              </p>
              <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">CPM-н давуу талууд:</p>
              <BulletList
                items={[
                  'Хэрэглэхэд хялбар, гар удирдлагатай',
                  'Зөөвөрлөхөд хялбар /дугуй болон бариултай/',
                  'Эмчилгээний дундуур түр зогсоох боломжтой',
                  'Өвдөгний үенд 100-130 хүртэл өнцгөөр хөдөлнө.',
                  'Түнх, өвдөг, шагайн үеэр нэгэн зэрэг хөдөлгөнө',
                  'Дуу чимээ багатай.',
                  'Emergency stop товчлууртай.',
                ]}
              />
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">ULTRASOUND / Хэт авиан эмчилгээ</h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                Хэт авиан эмчилгээ нь эдийн гүнд дулааны үйлчилгээ үзүүлснээр цусны эргэлт, бодисын солилцоо сайжруулж, эдгэрэлтийг түргэсгэх, булчин суллах, хэсэг
                газрын өвдөлт намдаах үйлчилгээтэй.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Заалт</p>
                  <BulletList
                    items={[
                      'Үе, булчин, шөрмөсний мэс заслын дараа',
                      'Захын мэдрэлийн гэмтэл, үрэвсэл',
                      'Яс, үе, холбоос, булчин, зөөлөн эдийн гэмтэл, үрэвсэл',
                      'Дотор эмэгтэйчүүдийн архаг үрэвсэлт өвчин, наалдац',
                      'Хэсэг газрын архаг болон хурц өвдөлт',
                      'Булчингийн чангарал',
                      'Өсгий өвдөлт /яс ургалт/',
                      'Улны хальсны үрэвсэл /plantar fasciitis/',
                      'Тохойн өвдөлт /lat, med epicondylitis/',
                      'Хүзүү нурууны өвдөлт',
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Хориглох заалт</p>
                  <BulletList items={['Хортой, хоргүй хавдар', 'Идэвхитэй сүрьеэ', 'Хурц идээт үрэвсэл', 'Цусны эмгэгүүд']} />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">Цохилтот долгионы эмчилгээ – Shockwave therapy</h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                Цахилгаан соронзон технологид суурилсан уг эмчилгээ нь олон төрлийн яс булчингийн эмгэгүүд, голчлон холбогч эд, шөрмөс, холбоосыг хамарсан архаг
                эмгэгийн үед ашиглагдах эмийн бус эмчилгээний төхөөрөмж юм.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Механизм</p>
                  <BulletList items={['Өвдөлтийг хоромхон зуур намдаана', 'Хэсэг газрын цусан хангамжийг нэмэгдүүлнэ', 'Булчин суллана', 'Үрэвслийг бууруулна', 'Шохойжсон хэсгийг задална']} />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Заалт</p>
                  <BulletList
                    items={[
                      'Улны хальсны үрэвсэл',
                      'Өсгийнд яс ургах',
                      'Тохойн шөрмөсний үрэвсэл',
                      'Латерал, медиал эпикондилит',
                      'Ахиллын шөрмөсний үрэвсэл',
                      'Бурсит',
                      'Мөрний үрэвсэл',
                      'Нуруу хүзүүний булчингийн чангарал',
                      'Шөрмөсний шохойжилт',
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">Халуун жин – Hot pack эмчилгээ</h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                Эдийн өнгөц давхаргад дулааны үйлчилгээ үзүүлснээр судас өргөсөн хэсэг газрын цусны эргэлт, бодисын солилцоо сайжирснаар булчин суллах, өвдөлт намдаах,
                эдгэрэлтийг түргэсгэх үйлчилгээ үзүүлнэ.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Заалт</p>
                  <BulletList
                    items={[
                      'Захын мэдрэлийн эмгэг',
                      'Үе мөч, холбоос, зөөлөн эдийн гэмтэл, үрэвсэл',
                      'Эрүүний үений эмгэгүүд',
                      'Хэсэг газрын архаг болон хурц өвдөлт',
                      'Булчингийн чангарал',
                      'Өсгий өвдөлт /яс ургалт/',
                      'Улны хальсны үрэвсэл /plantar fasciitis/',
                      'Тохойн өвдөлт /lat, med epicondylitis/',
                      'Хүзүү нурууны өвдөлт',
                      'Бөөр шээсний замын үрэвсэл',
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Эсрэг заалт</p>
                  <BulletList
                    items={[
                      'Хортой хавдар',
                      'Цусны эмгэгүүд',
                      'Хурц идээт үрэвсэл',
                      'Эмчилгээ хийгдэх хэсгийн арьсны бүрэн бүтэн байдал алдагдсан',
                      'Хяналтгүй артерийн даралт ихсэх өвчин',
                      'Зүрх уушгины ээнэгшил алдагдсан эмгэгүүд',
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">Infrared аппарат</h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                Инфра улаан туяа нь хүний биед 1-3 см гүн нэвтэрч биологийн эдэд шингэхдээ дулааныг үүсгэн, хэсгийн температурыг 1-2°С-ээр нэмэгдүүлнэ. Дулааны хүчин
                зүйлийн нөлөөгөөр судас тэлж, цусны эргэлт, эдийн бодисын солилцоо, метаболизм сайжирч үрэвслийн голомтонд лейкоцит, фибробласт идэвхжин нэмэгдэж
                үрэвсэл, шархны эдгэрэлт, хаван, нэвчдэсийн шимэгдэлт түргэснэ.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Эмчлэх заалт</p>
                  <BulletList
                    items={[
                      'Дотоод эрхтний идээт бус хурцавтар',
                      'Архаг үрэвсэлт өвчин',
                      'Захын мэдрэл, яс, холбоос, эд, булчингийн гэмтэл, үрэвслийн улмаас үүссэн өвчин',
                      'Хөлдөлт, түлэгдэлт',
                      'Удаан эдгэрэх шарх',
                      'Мэдрэл сульданги',
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Хориглох заалт</p>
                  <BulletList
                    items={[
                      'Хортой, хоргүй хавдар',
                      'Хурц идээт үрэвсэл',
                      'Идэвхитэй сүрьеэ',
                      'Цус алдах магадлалтай өвчин',
                      'Артерийн даралт ихдэх өвчний III шат',
                      'Амьсгал зүрх судасны дутагдал III үе',
                      'Тархины цусан хангамжийн эргэлтийн хурц хямрал',
                      'Жирэмсэн',
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">Богино долгионы эмчилгээний төхөөрөмж</h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                Өвдөлт намдаах, булчин суллах, цусны эргэлт сайжруулах, эд нөхөн төлжүүлэх гэсэн үндсэн үйлчилгээтэй, ялангуяа архаг, идэвхгүй үеийн өвчнүүдэд илүү үр дүнтэй.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Заалт</p>
                  <BulletList
                    items={[
                      'Яс, үе мөчний өвчин',
                      'Үений үрэвсэл (артрит), артроз',
                      'Нурууны өвдөлт, остеохондроз',
                      'Булчин, шөрмөс, холбоосын архаг гэмтэл',
                      'Мэдрэл дарагдлын хам шинж (радикулит, невралги)',
                      'Зөөлөн эдийн эмгэг',
                      'Булчингийн чангарал, спазм',
                      'Мэс заслын дараах эдгэрэлтийг түргэсгэх',
                      'Сорви зөөлрүүлэх',
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Эсрэг заалт</p>
                  <BulletList
                    items={[
                      'Хавдар',
                      'Жирэмслэлт',
                      'Цус алдалт, цус алдах эрсдэлтэй байдал',
                      'Халууралттай, хурц халдварт өвчин',
                      'Зүрхний хүнд хэлбэрийн дутагдал',
                      'Идээт үрэвсэл',
                      'Арьсны гэмтэл, шарх, түлэгдэлт',
                      'Металл суулгацтай хэсэг (хиймэл үе, шураг, пин гэх мэт)',
                      'Мэдрэхүй алдагдсан хэсэг',
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <h4 className="mb-3 font-bold text-gray-900">Air compression</h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                Цусны эргэлтийг сайжруулж, мөчдөд даралт үзүүлэн базалт өгөх маягаар зангирсан булчинг суллаж массажлах, цус, тунгалаг, хийн эргэлтийг нэмэгдүүлж, хаван
                буулгах, цус бүлэгнэлтээс урьдчилан сэргийлнэ.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Эмчилгээний заалт</p>
                  <BulletList
                    items={[
                      'Бодисын солилцоог сайжруулах',
                      'Цусны эргэлтийг хурдасгах',
                      'Булчинг суллах',
                      'Судасны ханыг бэхжүүлэх',
                      'Целлюлитыг арилгах',
                      'Хаван хөөж тураах',
                      'Арьсыг уян хатан болгож, хөгшрөлт, унжилтаас сэргийлэх',
                      'Биеийг тайвшруулах',
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-800 md:text-base">Хориглох заалт</p>
                  <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                    Зүрхний стент тавиулсан өвчтөнд, венийн судасны хавдартай хүнд, даралт ихсэлт III,IV степенд, зүрхний эмгэгүүд болон идээт үрэвслийн үед хориглоно.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CabinetAccordionShell>
  )
}

function CabinetGynecology() {
  return (
    <CabinetAccordionShell id="gyn-cabinet" title="Эмэгтэйчүүдийн кабинетийн танилцуулга">
      <p className="mb-8 text-sm leading-relaxed md:text-base">
        SUN MEDICAL CENTER ULAANBAATAR эмнэлэг нь 2019 оноос эхлэн нэгдсэн эмнэлгийн статустай ажиллаж байгаа бөгөөд одоогоор эмэгтэйчүүдийн
        кабинет нь 1 эмчийн бүрэлдэхүүнтэй ажиллаж байна.
      </p>

      <div className="mb-10">
        <h3 className="mb-4 text-base font-bold text-primary-blue md:text-lg">Кабинетийн зохион байгуулалт</h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <TreatmentImage src="/cabinet/gyn/room-1.jpg" alt="Эмэгтэйчүүдийн кабинет - 1" aspectClassName="aspect-[4/3]" imgClassName="object-cover object-center" />
          <TreatmentImage src="/cabinet/gyn/room-2.jpg" alt="Эмэгтэйчүүдийн кабинет - 2" aspectClassName="aspect-[4/3]" imgClassName="object-cover object-center" />
          <TreatmentImage src="/cabinet/gyn/room-3.jpg" alt="Эмэгтэйчүүдийн кабинет - 3" aspectClassName="aspect-[4/3]" imgClassName="object-cover object-center" />
        </div>
      </div>

      <div className="mb-10 border-t border-gray-200 pt-8">
        <h3 className="mb-4 text-base font-bold text-primary-blue md:text-lg">Эмэгтэйчүүд кабинетийн тоног төхөөрөмж</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-4">
            <p className="mb-2 font-semibold">TOSHIBA / Canon / VIAMO C100 2D ultrasound</p>
            <p className="mb-3 text-sm">2019 онд үйлдвэрлэгдсэн.</p>
            <TreatmentImage src="/cabinet/gyn/equipment-ultrasound.jpg" alt="Умайн ЭХО төхөөрөмж" aspectClassName="aspect-[4/3]" />
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-4">
            <p className="mb-2 font-semibold">Denmark Linak motor AMT-FS.II gynecological diagnosing table</p>
            <TreatmentImage src="/cabinet/gyn/equipment-table.jpg" alt="Эмэгтэйчүүдийн үзлэгийн ширээ" aspectClassName="aspect-[4/3]" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="mb-4 text-base font-bold text-primary-blue md:text-lg">Эмэгтэйчүүдийн кабинетэд хийгддэг эмчилгээ, үйлчилгээ</h3>
        <BulletList
          items={[
            'Эмэгтэйчүүдийн үтрээний үзлэг хийх',
            'Эмэгтэйчүүдийн ЭХО шинжилгээ',
            'Жирэмсэн тодорхойлох ЭХО шинжилгээ',
            'Мазок, үтрээний шүүрэл, ПГУ шинжилгээ авах',
            'Умайн хүзүүн эсийн шинжилгээ авах',
            'Умайн хүзүүн эдийн шинжилгээ авах',
            'Умайн хөндийд ерөндөг тавих',
            'Умайн хөндийгөөс ерөндөг авах',
            'Суулгац авах',
            'Суулгац тавих',
          ]}
        />
      </div>
    </CabinetAccordionShell>
  )
}

function CabinetJoint() {
  return (
    <CabinetAccordionShell id="joint-cabinet" title="Үе мөч эмчилгээний кабинетийн танилцуулга">
      <div className="rounded-xl bg-white p-6 text-gray-900 shadow-sm md:p-8">
        <p className="mb-4 text-sm leading-relaxed text-gray-900 md:text-base">
          Сон эмнэлгийн үе мөч, гэмтлийн кабинет 2020 оноос үйл ажиллагаа явуулж эхэлсэн.
        </p>

        <p className="mb-5 text-sm font-semibold text-gray-900 md:text-base">
          ҮЕ МӨЧ, ГЭМТЛИЙН БОЛОН ДУРАНГИЙН МЭС ЗАСЛУУД ХИЙГДДЭГ БӨӨД ҮНД
        </p>

        <p className="mb-5 text-sm leading-relaxed text-gray-800 md:text-base">
          Орчин үеийн арга, мэргэжлийн баг Манай эмнэлэгт үе мөч, гэмтлийн чиглэлийн дараах мэс заслудыг
          топомоор, амжилттай хийж байна.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-900 marker:text-primary-blue md:text-base">
          <li>Өвдөгний хагас үе солих</li>
          <li>Өвдөгний бүтэн үе солих</li>
          <li>Түнхний бүтэн үе солих</li>
          <li>Өвдөгний дурангийн мэс засал</li>
          <li>Мөрний дурангийн мэс засал</li>
          <li>Гэмтлийн бүх төрлийн хадаас авах</li>
          <li>Бүх төрлийн хадаас хадах мэс засал</li>
        </ul>
      </div>
    </CabinetAccordionShell>
  )
}

export default function CabinetPageContent() {
  return (
    <>
      <CabinetNeurology />
      <CabinetGeneralSurgery />
      <CabinetInternalPediatrics />
      <CabinetENT />
      <CabinetRehabilitation />
      <CabinetGynecology />
      <CabinetJoint />
    </>
  )
}
