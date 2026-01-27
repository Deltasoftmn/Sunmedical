'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, BookOpen, FileText, ClipboardList, ChevronRight, Package, ChevronDown, X } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const BAGTS_IMAGES = [
  { src: '/bagts1.png', alt: 'Багц 1' },
  { src: '/bagts2.png', alt: 'Багц 2' },
  { src: '/bagts3.png', alt: 'Багц 3' },
  { src: '/bagts4.png', alt: 'Багц 4' },
] as const

const CONTACT = { phone: '7777-7500', address: 'ХУД 7-р хороо Яармаг Энканто Оранж тауны зүүн жигүүр' }

// 1. Багш нарт — price list
const bagshNart = {
  title: 'Байгууллагын "Багш нарт" зориулсан багц',
  rows: [
    { name: 'Хамар залгиурын арчдас, нян тээгч илрүүлэх', price: '35,000' },
    { name: 'Цагаан хорхой буюу шимэгч хорхойн өндөг илрүүлэх шинжилгээ', price: '7,000' },
    { name: 'Сүрьеэгийн үзлэг, рентген зураг шинжилгээ', price: '30,000' },
    { name: 'Арьсны халдварт өвчний үзлэг', price: '45,000' },
    { name: 'Бамбайн даавар (TSH буюу ТТГ) илрүүлэх шинжилгээ', price: '45,000' },
    { name: 'Хеликобактери илрүүлэх шинжилгээ', price: '40,000' },
    { name: 'Дууны хөвчийн дурангийн оношилгоо', price: '20,000' },
    { name: 'Ерөнхий эмчийн үзлэг, оношилгоо', price: 'Үнэгүй' },
  ],
  original: '350.000₮',
  package: '190.000₮',
}

// 2. Энгийн — two-column significance
type Section = { section: string; subs: { tests: string[]; significance: string[] }[] }
const enghiin: { title: string; sections: Section[]; original: string; package: string } = {
  title: 'Байгууллагын "Энгийн" багц',
  original: '240.000₮',
  package: '180.000₮',
  sections: [
    {
      section: 'Биеийн ерөнхий үзүүлэлт',
      subs: [
        { tests: ['Жин', 'Өндөр'], significance: ['Биеийн жин, өндөр тодорхойлох'] },
        { tests: ['Цусны даралт', 'Зүрхний цохилтын тоо'], significance: ['Цусны даралт тодорхойлох'] },
      ],
    },
    {
      section: 'Биеийн бүтцийн оношилгоо',
      subs: [{
        tests: ['БЖИ /биеийн жингийн индекс/', 'Булчингийн масс', 'Биеийн өөхлөлтийн хэмжээ', 'Биологийн нас'],
        significance: ['Биеийн булчингийн масс тодорхойлох', 'Биеийн усны хэмжээ тодорхойлох', 'Хэвлийн өөхлөлт тодорхойлох', 'Биологийн нас тодорхойлох'],
      }],
    },
    {
      section: 'Лабораторийн шинжилгээ',
      subs: [
        { tests: ['25 үзүүлэлт'], significance: ['Үрэвсэлт өвчин', 'Цус багадалт', 'Цус өтгөрөлт', 'Цусны цагаан эсийн хэт ихсэлт', 'Цусны улаан эсийн хэт ихсэлт', 'Нянгийн халдвар', 'Мегабластик цус багадалт'] },
        { tests: ['14 үзүүлэлт'], significance: ['Бөөр ба шээсний замын үрэвсэл', 'Бөөр ба шээсний замын цус алдалт', 'Чихрийн шижин өвчин', 'Шээсний замын халдвар', 'Шээсээр уураг алдах', 'Бодисын солилцооны өвчин'] },
        { tests: ['АЛАТ', 'ACAT', 'Билирубин', 'Альбумин', 'Шүлтлэг фосфатаза'], significance: ['Элэгний хурц ба архаг үрэвсэлт өвчин', 'Тэжээлийн дутагдал', 'Цөсний үйл ажиллагаа'] },
      ],
    },
    { section: 'Глюкоз', subs: [{ tests: ['Цусны сахар тодорхойлох'], significance: ['Чихрийн шижинг илрүүлэх'] }] },
    { section: 'Үе мөчний шинжилгээ', subs: [{ tests: ['АСЛО', 'СРБ', 'РФ'], significance: ['Үений үрэвслийг илэрүүлэх', 'Үений үрэвслийн зэргийг тодорхойлох'] }] },
    { section: 'Кальци', subs: [{ tests: ['Кальци тодорхойлох'], significance: ['Цусан дахь кальцийн хэмжээг тодорхойлох', 'Ясны сийрэгжилтийн урьтал байдлыг тодорхойлох'] }] },
    { section: 'Багажийн шинжилгээ: ЭХО', subs: [{ tests: ['Хэвлий /дотор эрхтэн/'], significance: ['Элэг, цөс, нойр булчирхай, бөөр, дэлүүний бүтцийн өөрчлөлт, голомтод өөрчлөлтийг тодорхойлох'] }] },
    { section: 'Ерөнхий эмчийн үзлэг', subs: [{ tests: ['Урьдчилсан сэргийлэх үзлэгийн дүгнэлт хариуцсан эмч', 'Үзлэгийн дүгнэлт'], significance: [] }] },
  ],
}

// 3. PREMIUM — like Энгийн + EKG, lung X-ray, knee X-ray, ortho exam
const premium: { title: string; sections: Section[]; original: string; package: string } = {
  title: 'Байгууллагын "PREMIUM" багц',
  original: '300.000₮',
  package: '210.000₮',
  sections: [
    ...enghiin.sections.filter(s => !['Багажийн шинжилгээ: ЭХО', 'Ерөнхий эмчийн үзлэг'].includes(s.section)),
    { section: 'Багажийн шинжилгээ', subs: [
      { tests: ['ЭХО Хэвлий /дотор эрхтэн/'], significance: ['Элэг, цөс, нойр булчирхай, бөөр, дэлүүний бүтцийн өөрчлөлт, голомтод өөрчлөлтийг тодорхойлох'] },
      { tests: ['Зүрхний цахилгаан бичлэг /ЭКГ/ — Зүрхний үйл ажиллагаа'], significance: ['Зүрхний ерөнхий үйл ажиллагаа', 'Зүрхний хэм алдагдал тодорхойлох', 'Зүрхний цус хомсрох өвчнийг тодорхойлох'] },
      { tests: ['Уушигны рентген зураг — Уушигны үйл ажиллагаа'], significance: ['Уушигны ерөнхий үйл ажиллагаа', 'Уушигны үрэвсэл тодорхойлох', 'Уушигны голомтод өөрчлөлтийг тодорхойлох'] },
      { tests: ['Өвдөгний үений рентген зураг — Өвдөгний үений бүтэц, өөрчлөлт тодорхойлох'], significance: ['Өвдөгний үений ерөнхий бүтцийг тодорхойлох', 'Өвдөгний ясны ургалтыг тодорхойлох', 'Өвдөгний үений бүтцийн өөрчлөлтийг тодорхойлох', 'Өвдөгний ясны сийрэгжилт тодорхойлох'] },
    ]},
    { section: 'Ерөнхий эмчийн үзлэг', subs: [{ tests: ['Үе мөчний эмчийн үзлэг — Үе мөчний оношилгоо, үзлэг'], significance: [] }, { tests: ['Урьдчилсан сэргийлэх үзлэгийн дүгнэлт хариуцсан эмч', 'Үзлэгийн дүгнэлт'], significance: [] }] },
  ],
}

// 4. VIP — Энгийн + өөх тос, бөөр, нойр булчирхай, хавдарын маркер, багажийн (ЭХО, ЭКГ, уушиг, өвдөг), Чих хамар хоолой
const vip: { title: string; sections: Section[]; original: string; package: string } = {
  title: 'Байгууллагын "VIP" багц',
  original: '500.000₮',
  package: '350.000₮',
  sections: [
    { section: 'Биеийн ерөнхий үзүүлэлт', subs: [
      { tests: ['Жин', 'Өндөр'], significance: ['Биеийн жин, өндөр тодорхойлох'] },
      { tests: ['Цусны даралт', 'Зүрхний цохилтын тоо'], significance: ['Цусны даралт тодорхойлох'] },
    ]},
    { section: 'Биеийн бүтцийн оношилгоо /INBODY/', subs: [{ tests: ['БЖИ', 'Булчингийн масс', 'Биеийн өөхлөлтийн хэмжээ', 'Биологийн нас'], significance: ['Биеийн булчингийн масс тодорхойлох', 'Биеийн усны хэмжээ тодорхойлох', 'Хэвлийн өөхлөлт тодорхойлох', 'Биологийн нас тодорхойлох'] }] },
    { section: 'Лабораторийн шинжилгээ', subs: [
      { tests: ['Цусны шинжилгээ 25 үзүүлэлт'], significance: ['Үрэвсэлт өвчин', 'Цус багадалт', 'Цус өтгөрөлт', 'Цусны цагаан/улаан эсийн хэт ихсэлт', 'Нянгийн халдвар', 'Мегабластик цус багадалт'] },
      { tests: ['Шээсний шинжилгээ 14 үзүүлэлт'], significance: ['Бөөр ба шээсний замын үрэвсэл, цус алдалт', 'Чихрийн шижин', 'Шээсний замын халдвар', 'Шээсээр уураг алдах', 'Бодисын солилцооны өвчин'] },
      { tests: ['Элэг, цөс: АЛАТ, ACAT, Билирубин, Альбумин, Шүлтлэг фосфатаза'], significance: ['Элэгний хурц ба архаг үрэвсэлт', 'Тэжээлийн дутагдал', 'Цөсний үйл ажиллагаа'] },
      { tests: ['Глюкоз — Цусны сахар тодорхойлох'], significance: ['Чихрийн шижинг илрүүлэх'] },
      { tests: ['Өөх тосны солилцоо: Холестерин, Триглицерид үзэх'], significance: ['Цусан дахь өөх тосны хэмжээг тодорхойлох'] },
      { tests: ['Үе мөч: АСЛО, СРБ, РФ'], significance: ['Үений үрэвслийг илэрүүлэх', 'Үений үрэвслийн зэргийг тодорхойлох'] },
      { tests: ['Кальци тодорхойлох'], significance: ['Цусан дахь кальцийн хэмжээ', 'Ясны сийрэгжилтийн урьтал байдлыг тодорхойлох'] },
      { tests: ['Бөөрний: Кератинин /CRE/, Мочевин /BUN/'], significance: ['Бөөрний үйл ажиллагааны алдагдал, дутагдал'] },
      { tests: ['Нойр булчирхай: Амилаза альфа, Липаза'], significance: ['Нойр булчирхайн өөрчлөлтийг тодорхойлох'] },
      { tests: ['Хавдарын маркер — Элэгний хавдар тодорхойлох'], significance: ['Элэгний хавдрыг эрт илрүүлэх'] },
    ]},
    { section: 'Багажийн шинжилгээ', subs: [
      { tests: ['ЭХО Хэвлий /дотор эрхтэн/'], significance: ['Элэг, цөс, нойр булчирхай, бөөр, дэлүүний бүтцийн өөрчлөлт, голомтод өөрчлөлтийг тодорхойлох'] },
      { tests: ['Зүрхний цахилгаан бичлэг /ЭКГ/ — Зүрхний үйл ажиллагаа'], significance: ['Зүрхний ерөнхий үйл ажиллагаа', 'Зүрхний хэм алдагдал', 'Зүрхний цус хомсрох өвчнийг тодорхойлох'] },
      { tests: ['Уушигны рентген — Уушигны үйл ажиллагаа'], significance: ['Уушигны ерөнхий үйл ажиллагаа', 'Уушигны үрэвсэл', 'Уушигны голомтод өөрчлөлтийг тодорхойлох'] },
      { tests: ['Өвдөгний үений рентген — Өвдөгний үений бүтэц, өөрчлөлт'], significance: ['Өвдөгний үений ерөнхий бүтэц', 'Ясны ургалт', 'Бүтцийн өөрчлөлт', 'Ясны сийрэгжилт тодорхойлох'] },
    ]},
    { section: 'Ерөнхий эмчийн үзлэг', subs: [
      { tests: ['Үе мөчний эмчийн үзлэг — Үе мөчний оношилгоо, үзлэг'], significance: [] },
      { tests: ['Чих хамар хоолойн эмчийн үзлэг — Чих хамар хоолойн оношилгоо, үзлэг'], significance: [] },
      { tests: ['Урьдчилсан сэргийлэх үзлэгийн дүгнэлт хариуцсан эмч', 'Үзлэгийн дүгнэлт'], significance: [] },
    ]},
  ],
}

// 5. Барилгын салбар — body, INBODY, lab, Эрдэс, Багаж (ЭХО, ЭКГ, уушиг), Ерөнхий эмч
const barilga: { title: string; sections: Section[]; original: string; package: string; note?: string } = {
  title: 'Байгууллагын "Барилгын салбар"-ын багц',
  original: '500.000₮',
  package: '320.000₮',
  note: 'Эрдэсийн шинжилгээнээс "Витамин Д" хийлгэхгүй бол үнэ 290.000 төгрөг болно.',
  sections: [
    { section: 'Биеийн ерөнхий үзүүлэлт', subs: [
      { tests: ['Жин', 'Өндөр'], significance: ['Биеийн жин, өндөр тодорхойлох'] },
      { tests: ['Цусны даралт', 'Зүрхний цохилтын тоо'], significance: ['Цусны даралт тодорхойлох'] },
    ]},
    { section: 'Биеийн бүтцийн оношилгоо /INBODY/', subs: [{ tests: ['БЖИ', 'Булчингийн масс', 'Биеийн өөхлөлтийн хэмжээ', 'Биологийн нас'], significance: ['Биеийн булчингийн масс тодорхойлох', 'Биеийн усны хэмжээ тодорхойлох', 'Хэвлийн өөхлөлт тодорхойлох', 'Биологийн нас тодорхойлох'] }] },
    { section: 'Лабораторийн шинжилгээ', subs: [
      { tests: ['Цусны шинжилгээ 25 үзүүлэлт'], significance: ['Үрэвсэлт өвчин', 'Цус багадалт', 'Цус өтгөрөлт', 'Цусны цагаан/улаан эсийн хэт ихсэлт', 'Нянгийн халдвар', 'Мегабластик цус багадалт'] },
      { tests: ['Шээсний шинжилгээ 14 үзүүлэлт'], significance: ['Бөөр ба шээсний замын үрэвсэл, цус алдалт', 'Чихрийн шижин', 'Шээсний замын халдвар', 'Шээсээр уураг алдах', 'Бодисын солилцооны өвчин'] },
      { tests: ['Элэг, цөс: АЛАТ, ACAT, Билирубин, Альбумин, Шүлтлэг фосфатаза'], significance: ['Элэгний хурц ба архаг үрэвсэлт өвчин', 'Тэжээлийн дутагдал', 'Цөсний үйл ажиллагаа'] },
      { tests: ['Глюкоз — Цусны сахар тодорхойлох'], significance: ['Чихрийн шижинг илрүүлэх'] },
    ]},
    { section: 'Эрдэсийн шинжилгээ', subs: [{ tests: ['Кальци тодорхойлох', 'Магни', 'Витамин Д'], significance: ['Цусан дахь кальцийн хэмжээг тодорхойлох', 'Ясны сийрэгжилтийн урьтал байдлыг тодорхойлох'] }] },
    { section: 'Багажийн шинжилгээ', subs: [
      { tests: ['ЭХО Хэвлий /дотор эрхтэн/'], significance: ['Элэг, цөс, нойр булчирхай, бөөр, дэлүүний бүтцийн өөрчлөлт, голомтод өөрчлөлтийг тодорхойлох'] },
      { tests: ['Зүрхний цахилгаан бичлэг /ЭКГ/ — Зүрхний үйл ажиллагаа'], significance: ['Зүрхний ерөнхий үйл ажиллагаа', 'Зүрхний хэм алдагдал тодорхойлох', 'Зүрхний цус хомсрох өвчнийг тодорхойлох'] },
      { tests: ['Уушигны рентген зураг — Уушигны үйл ажиллагаа'], significance: ['Уушигны ерөнхий үйл ажиллагаа', 'Уушигны үрэвсэл тодорхойлох', 'Уушигны голомтод өөрчлөлтийг тодорхойлох'] },
    ]},
    { section: 'Ерөнхий эмчийн үзлэг', subs: [{ tests: ['Урьдчилсан сэргийлэх үзлэгийн дүгнэлт хариуцсан эмч', 'Үзлэгийн дүгнэлт'], significance: [] }] },
  ],
}

// 6. Уул уурхайн салбар — body, INBODY, lab (blood, urine, liver, lipid, joint, mineral, kidney, Vit D, H.pylori, glucose, UA), cancer markers, instrumental (ЭХО, ЭКГ, рентген, дуран, хоол), GP (нүд, мэдрэл, ЧХХ, дүгнэлт)
const uulUurhai: { title: string; sections: Section[]; package: string } = {
  title: 'Байгууллагын "Уул уурхайн салбар"-ын багц',
  package: '699.000₮',
  sections: [
    { section: 'Биеийн ерөнхий үзүүлэлт', subs: [
      { tests: ['Жин', 'Өндөр'], significance: ['Биеийн жин, өндөр тодорхойлох'] },
      { tests: ['Цусны даралт', 'Зүрхний цохилтын тоо'], significance: ['Цусны даралт тодорхойлох'] },
    ]},
    { section: 'Биеийн бүтцийн оношилгоо /INBODY/', subs: [{ tests: ['БЖИ', 'Булчингийн масс', 'Биеийн өөхлөлтийн хэмжээ', 'Биологийн нас'], significance: ['Биеийн булчингийн масс тодорхойлох', 'Биеийн усны хэмжээ тодорхойлох', 'Хэвлийн өөхлөлт тодорхойлох', 'Биологийн нас тодорхойлох'] }] },
    { section: 'Лабораторийн шинжилгээ', subs: [
      { tests: ['Цусны шинжилгээ 25 үзүүлэлт'], significance: ['Үрэвсэлт өвчин', 'Цус багадалт', 'Цус өтгөрөлт', 'Цусны цагаан/улаан эсийн хэт ихсэлт', 'Нянгийн халдвар', 'Мегабластик цус багадалт'] },
      { tests: ['Шээсний шинжилгээ 14 үзүүлэлт'], significance: ['Бөөр ба шээсний замын үрэвсэл', 'Бөөр ба шээсний замын цус алдалт', 'Чихрийн шижин өвчин', 'Шээсний замын халдвар', 'Шээсээр уураг алдах', 'Бодисын солилцооны өвчин'] },
      { tests: ['Элэг, цөсний үйл ажиллагаа: АЛАТ, АСАТ, Шүлтлэг фосфатаза, Гаммаглутамилтрансфераза'], significance: ['Элэгний хурц ба архаг үрэвсэлт өвчин', 'Тэжээлийн дутагдал', 'Цөсний үйл ажиллагаа'] },
      { tests: ['Өөх тосны солилцоо: Холестерин', 'Триглицерид үзэх'], significance: ['Цусан дахь өөх тосны хэмжээг тодорхойлох'] },
      { tests: ['Үе мөчний шинжилгээ: СРБ', 'РФ'], significance: ['Үений үрэвслийг илэрүүлэх', 'Үений үрэвслийн зэргийг тодорхойлох'] },
      { tests: ['Эрдэсийн шинжилгээ: Кальци', 'Магни', 'Төмөр', 'Цайр'], significance: ['Цусан дахь кальцийн хэмжээг тодорхойлох', 'Ясны сийрэгжилтийн урьтал байдлыг тодорхойлох'] },
      { tests: ['Бөөрний: Кератинин /CRE/', 'Мочевин /BUN/'], significance: ['Бөөрний үйл ажиллагааны алдагдал, дутагдал'] },
      { tests: ['Витамин Д'], significance: ['Ядрал, дархлал сулрах, арьс үс хумхны асуудал, сэтгэл санааны доройтол зэргийг илрүүлэх'] },
      { tests: ['Хеликобактери амьсгалаар үзэх'], significance: ['Хеликобактерийн халдварын зэргийг тоон тодорхойлох'] },
      { tests: ['Глюкоз'], significance: ['Цусны сахар тодорхойлох'] },
      { tests: ['Шээсний хүчил /UA/'], significance: ['Ташуурыг илрүүлэх'] },
    ]},
    { section: 'Хавдарын маркер', subs: [
      { tests: ['Уушгины хавдрын маркер'], significance: ['Уушгины хавдрыг эрт илрүүлэх'] },
      { tests: ['Түрүү булчирхайн хавдрын маркер /эрэгтэй/'], significance: ['Түрүү булчирхайн хавдрыг эрт илрүүлэх'] },
      { tests: ['Хөхний хавдрын маркер /эмэгтэй/'], significance: ['Хөхний хавдрыг эрт илрүүлэх'] },
      { tests: ['Өндгөвчний хавдрын маркер /эмэгтэй/'], significance: ['Өндгөвчний хавдрыг эрт илрүүлэх'] },
    ]},
    { section: 'Багажийн шинжилгээ', subs: [
      { tests: ['Хэвлийн ЭХО — Цуллаг эрхтнүүдийн үйл ажиллагаа'], significance: ['Элэг, цөс, нойр булчирхай, бөөр, дэлүүний бүтцийн өөрчлөлт, голомтод өөрчлөлтийг тодорхойлох'] },
      { tests: ['Зүрхний цахилгаан бичлэг /ЭКГ/'], significance: ['Зүрхний ерөнхий үйл ажиллагаа', 'Зүрхний хэм алдагдал тодорхойлох', 'Зүрхний цус хомсрох өвчнийг тодорхойлох'] },
      { tests: ['Цээжний рентген зураг — Уушигны үйл ажиллагаа'], significance: ['Уушигны ерөнхий үйл ажиллагаа', 'Уушигны үрэвсэл тодорхойлох', 'Уушигны голомтод өөрчлөлтийг тодорхойлох'] },
      { tests: ['Дурангийн шинжилгээ — Ходоод шинжлэх /унтуулгагүй/'], significance: ['Хаврах, шарх, эрозийг илрүүлэх'] },
      { tests: ['Хөнгөн хоол, цай /зутан шөл/'], significance: ['Дурангийн дараах хоол'] },
    ]},
    { section: 'Ерөнхий эмчийн үзлэг', subs: [
      { tests: ['Нүдний эмчийн үзлэг — Нүдний оношилгоо, үзлэг'], significance: [] },
      { tests: ['Мэдрэлийн эмчийн үзлэг — Мэдрэлийн оношилгоо, үзлэг'], significance: [] },
      { tests: ['Чих хамар хоолойн эмчийн үзлэг'], significance: [] },
      { tests: ['Урьдчилсан сэргийлэх үзлэгийн дүгнэлт хариуцсан эмчийн үзлэг'], significance: [] },
    ]},
  ],
}

// --- Accordion (collapsible) ---
function Accordion({ id, isOpen, onToggle, title, children }: { id?: string; isOpen: boolean; onToggle: () => void; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left font-semibold text-primary-blue bg-gray-50 hover:bg-gray-100 transition"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="px-4 py-3 bg-white border-t border-gray-100">{children}</div>}
    </div>
  )
}

// --- Modal ---
function Modal({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <div className="relative bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 id="modal-title" className="text-lg font-bold text-primary-blue">{title}</h2>
          <button type="button" onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600" aria-label="Хаах">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-auto flex-1 p-6">{children}</div>
      </div>
    </div>
  )
}

// --- Image lightbox modal ---
function ImageLightbox({ isOpen, onClose, src, alt }: { isOpen: boolean; onClose: () => void; src: string; alt: string }) {
  if (!isOpen || !src) return null
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={alt}>
      <div className="absolute inset-0 bg-black/70" onClick={onClose} aria-hidden />
      <button type="button" onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-gray-700" aria-label="Хаах">
        <X className="h-6 w-6" />
      </button>
      <div className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center" onClick={(e) => e.target === e.currentTarget && onClose()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl" />
      </div>
    </div>
  )
}

function ContactBlock() {
  return (
    <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-4">
      <span className="flex items-center gap-2">
        <Phone className="h-4 w-4 text-primary-blue" />
        <a href="tel:77777500">{CONTACT.phone}</a>
      </span>
      <span className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-primary-blue" />
        {CONTACT.address}
      </span>
    </div>
  )
}

function PackageCardBagsNart({ id, isOpen, onToggle }: { id: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <section id={id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8 scroll-mt-24">
      <button type="button" onClick={onToggle} className="w-full bg-primary-blue text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-left hover:bg-primary-darkBlue transition">
        <h2 className="text-xl font-bold">{bagshNart.title}</h2>
        <span className="flex items-center gap-2">
          <span className="flex items-baseline gap-2">
            {bagshNart.original && <span className="text-white/70 line-through text-sm">{bagshNart.original}</span>}
            <span className="text-lg font-bold bg-white/15 px-3 py-1 rounded">{bagshNart.package}</span>
          </span>
          <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </span>
      </button>
      {isOpen && (
        <div className="p-6 border-t border-gray-100">
          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
            <table className="w-full text-left">
              <thead><tr className="bg-gray-100"><th className="px-4 py-3 text-gray-700 font-semibold">Шинжилгээний төрөл</th><th className="px-4 py-3 text-gray-700 font-semibold w-28">Үнэ</th></tr></thead>
              <tbody>
                {bagshNart.rows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}><td className="px-4 py-3 text-gray-800">{r.name}</td><td className="px-4 py-3 text-gray-600">{r.price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-4 pt-2">
            <ContactBlock />
          </div>
        </div>
      )}
    </section>
  )
}

function PackageCardSignificance(
  p: { id: string; title: string; sections: Section[]; original?: string | null; packagePrice?: string | null; note?: string | null; isOpen: boolean; onToggle: () => void }
) {
  const rows = p.sections.flatMap((sec) => sec.subs.map((sub, j) => ({ sec, sub, j })))
  return (
    <section id={p.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8 scroll-mt-24">
      <button type="button" onClick={p.onToggle} className="w-full bg-primary-blue text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-left hover:bg-primary-darkBlue transition">
        <h2 className="text-xl font-bold">{p.title}</h2>
        <span className="flex items-center gap-2">
          {p.packagePrice != null && (
            <span className="flex items-baseline gap-2">
              {p.original && <span className="text-white/70 line-through text-sm">{p.original}</span>}
              <span className="text-lg font-bold bg-white/15 px-3 py-1 rounded">{p.packagePrice}</span>
            </span>
          )}
          <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${p.isOpen ? 'rotate-180' : ''}`} />
        </span>
      </button>
      {p.isOpen && (
      <div className="p-6 border-t border-gray-100">
        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary-blue text-white">
                <th className="px-4 py-3">Хийгдэх шинжилгээний жагсаалт</th>
                <th className="px-4 py-3">Шинжилгээний ач холбогдол</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ sec, sub, j }, i) => (
                <tr key={`${sec.section}-${j}`} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                  <td className="px-4 py-3 align-top border-t border-gray-100">
                    {sec.subs.length > 1 && j === 0 ? <strong className="block mb-1 text-primary-blue">{sec.section}</strong> : null}
                    {sec.subs.length === 1 ? <><strong className="text-primary-blue">{sec.section}:</strong> {sub.tests.join(', ')}</> : sub.tests.join(', ')}
                  </td>
                  <td className="px-4 py-3 align-top border-t border-gray-100 text-gray-700">
                    {sub.significance.length ? (
                      <ul className="list-disc list-inside space-y-0.5">{sub.significance.map((s, k) => <li key={k}>{s}</li>)}</ul>
                    ) : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {p.note && (
          <div className="rounded-lg bg-amber-50 border border-amber-200/80 px-4 py-3 mb-4">
            <p className="text-sm text-gray-800"><strong className="text-amber-800">Жич:</strong> {p.note}</p>
          </div>
        )}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-2">
          <ContactBlock />
        </div>
      </div>
      )}
    </section>
  )
}

// --- Гарын авлага, бэлтгэл, дурангийн дараалал ---
function GuideSection({ openGuide, setOpenGuide }: { openGuide: string | null; setOpenGuide: (v: string | null) => void }) {
  const benefits = [
    'Өвчлөлийг эрт үед нь илрүүлэн арга хэмжээ авах',
    'Үүсч болох эрсдэлээс урьдчилан сэргийлэх',
    'Ажилчдын дундах нийтлэг болон мэргэжлээс шалтгаалсан өвчлөлөөс урьдчилан сэргийлэх',
    'Хөдөлмөрийн чадвар алдалтыг бууруулах',
    'Ажилтаны ажлын бүтээмжийг нэмэгдүүлэх давуу талуудтай',
  ]
  const sequence = [
    'Бүртгэл үүсгэх /Үүдний бүртгэлийн хэсэг/',
    'Лабораторийн шинжилгээ / Шинжилгээ авах хэсэг/',
    'Мазокын шинжилгээ /Эмэгтэйчүүдийн эмчийн өрөө 110 тоот/',
    'Дүрс оношлогоо / 109 тоот/',
    'Зүрхний цахилгаан бичлэг / 109 тоот/',
    'Рентген / 112 тоот/',
    'Дурангийн шинжилгээ / 113 тоот/',
    'Бүх шинжилгээндээ хамраагдсанаас 1 хоногийн дараа',
    'Нэгдсэн хариугаа авах',
    'Эмчийн үзлэгт орох',
  ]
  const beforeExam = [
    'Цусны шинжилгээ өгөхдөө өлөн байх',
    'Шээсний шинжилгээ өгөхдөө шээснийхээ дунд хэсгээс 50мл авах',
    'Хеликобактерийн шинжилгээ өгөхдөө шүдээ угаахгүй ирэх',
    'Эхо, рентген, СТ томографи шинжилгээнд орохдоо гоёл чимэглэл, метал зүйлсээ тайлсан байх / Мөн өлөн ирэх/',
    'Ходоодны дуранд орохын өмнөх орой 18:00 цагаас хойш юм идэхгүй байх',
    'Бүдүүн гэдэсний дуранд орохдоо өмнөх өдөр нь туулга ууж гэдсээ цэвэрлэсэн байх',
    'Архи согтууруулах ундааны төрлийн зүйл хэрэглээгүй байх',
  ]
  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
      <div className="bg-primary-blue text-white px-6 py-4">
        <h3 className="text-lg font-bold">Багц шинжилгээнд хамрагдах гарын авлага</h3>
      </div>
      <div className="p-4">
        <Accordion isOpen={openGuide === 'benefits'} onToggle={() => setOpenGuide(openGuide === 'benefits' ? null : 'benefits')} title="Урьдчилан сэргийлэх үзлэгт хамрагдсанаар">
          <ul className="list-disc list-inside space-y-2 text-gray-700">{benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </Accordion>
        <Accordion isOpen={openGuide === 'sequence'} onToggle={() => setOpenGuide(openGuide === 'sequence' ? null : 'sequence')} title="Шинжилгээнд хамрагдах дараалал">
          <ol className="list-decimal list-inside space-y-2 text-gray-700">{sequence.map((s, i) => <li key={i}>{s}</li>)}</ol>
          <p className="text-sm text-gray-600 mt-3 bg-gray-50 px-3 py-2 rounded">Бүх ажилтан шинжилгээнд хамрагдаж дууссанаас хойш 7–14 хоногт Байгууллагын нэгдсэн дүгнэлтийг байгууллагат илгээх.</p>
        </Accordion>
        <Accordion isOpen={openGuide === 'before'} onToggle={() => setOpenGuide(openGuide === 'before' ? null : 'before')} title="Шинжилгээний өмнө анхаарах зүйлс">
          <ul className="list-disc list-inside space-y-2 text-gray-700">{beforeExam.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </Accordion>
      </div>
    </section>
  )
}

function PreparationSection({ openPrep, setOpenPrep }: { openPrep: string | null; setOpenPrep: (v: string | null) => void }) {
  const toggle = (k: string) => setOpenPrep(openPrep === k ? null : k)
  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
      <div className="bg-primary-blue text-white px-6 py-4 flex items-center gap-2">
        <ClipboardList className="h-5 w-5" aria-hidden />
        <h3 className="text-lg font-bold">Шинжилгээний өмнөх бэлтгэл</h3>
      </div>
      <div className="p-4 space-y-0">
        <Accordion isOpen={openPrep === 'lab'} onToggle={() => toggle('lab')} title="Лабораторийн шинжилгээ өгөхдөө">
          <p className="text-gray-700">Өлөн байх / бага хэмжээний ус ууж болно/</p>
        </Accordion>
        <Accordion isOpen={openPrep === 'urine'} onToggle={() => toggle('urine')} title="Шээсний шинжилгээ өгөхдөө">
          <p className="text-gray-700">Өлөн шээсний дундаас 50мл орчим авах</p>
        </Accordion>
        <Accordion isOpen={openPrep === 'imaging'} onToggle={() => toggle('imaging')} title="Хэт авиа, Рентген, КТ зэрэг шинжилгээнд">
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Ээмэг, бөгж, бугуйвч зэргийг зүүхгүй байх</li>
            <li>Төрөл бүрийн протезтой, шүдний аппараттай, судсан дотуурх стент, хавчаар хийлгэж байсан бол заавал эмчид урьдчилан мэдэгдэх</li>
            <li>Сарын тэмдэг ирсэн үед урьдчилан цагаа хойшлуулж зохицуулалт хийх</li>
          </ul>
        </Accordion>
        <Accordion isOpen={openPrep === 'stomach'} onToggle={() => toggle('stomach')} title="Залгиураар ходоод дурандуулах бол">
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Урд өдөр нь 21 цагаас хойш юм идэхгүй /Бага хэмжээний ус ууж болно/</li>
            <li>Даралт бууруулах эм уух бол бага хэмжээний усаар даруулж уух</li>
            <li>Даралтны эмнээс өөр эм уусан бол эмчид заавал мэдэгдэх</li>
            <li>Хиймэл шүдтэй бол хиймэл шүдээ түр авах</li>
          </ul>
          <p className="font-semibold text-primary-blue mt-3 mb-1">Унтуулгатай дуран хийлгэхдээ нэмэлтээр:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Тэр өдрөө машин барихгүй байх</li>
            <li>Асран хамгаалагчтай ирэх</li>
          </ul>
        </Accordion>
        <Accordion isOpen={openPrep === 'colon'} onToggle={() => toggle('colon')} title="Бүдүүн гэдэсний дуран хийлгэхдээ">
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Аспирин болон бусад цус шингэлэх үйлчилгээтэй эм, бэлдмэл хэрэглээгүй байх</li>
            <li>Гэдэс цэвэрлэсэн байх /урьд орой болон шинжилгээний өглөө клизт тавих, туулга уух г.м/</li>
          </ul>
        </Accordion>
      </div>
    </section>
  )
}

// Дуранд орохын өмнөх зөвлөмж — ходоод, бүдүүн гэдэс, туулга заавар
function EndoscopyBeforeSection({ openEb, setOpenEb }: { openEb: string | null; setOpenEb: (v: string | null) => void }) {
  const stomach = [
    'Өмнөх өдрийн 18:00 цагаас өмнө махан хоолоо идсэн байх',
    '18:00 цагаас эхлэн хоолоо сойх',
    'Архи согтууруулах ундаа хэрэглэхгүй байх',
    'Өглөө өлөн ирэх /бага хэмжээний ус ууж болно/',
  ]
  const laxative = [
    'Өмнөх өдрийн 16:00 цагт мах, гурил орсон шөлтэй хоол идсэн байх',
    'Өмнөх өдөр нь үр жимстэй хүнс, цагаан идээ, гурил, өөх тостой хоол хэрэглэхгүй байх',
    'Үүнээс хойш 18:00 цагт 1л усанд туулгаа найруулж ууна',
    'Араас нь 1л цэвэр ус нэмэж ууна',
    'Өглөө 06:00 цагт ахин 1л усанд туулгаа найруулж ууна',
    'Араас нь ахин 1л цэвэр ус ууна',
    '07:30 цаг гэхэд бүгдийг ууж дуусгасан байх',
  ]
  const toggle = (k: string) => setOpenEb(openEb === k ? null : k)
  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
      <div className="bg-primary-blue text-white px-6 py-4">
        <h3 className="text-lg font-bold">Дуранд орохын өмнөх зөвлөмж</h3>
      </div>
      <div className="p-4">
        <Accordion isOpen={openEb === 'stomach'} onToggle={() => toggle('stomach')} title="Ходоодны дуранд орохын өмнө">
          <ul className="list-disc list-inside space-y-2 text-gray-700">{stomach.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </Accordion>
        <Accordion isOpen={openEb === 'colon'} onToggle={() => toggle('colon')} title="Бүдүүн шулуун гэдэсний дуран — туулга уух заавар">
          <p className="mb-2 text-gray-700">Дуранд хамрагдахын өмнөх оройноос туулга уух</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">{laxative.map((s, i) => <li key={i}>{s}</li>)}</ol>
        </Accordion>
      </div>
    </section>
  )
}

function GastroscopySequenceSection({ openGast, setOpenGast }: { openGast: boolean; setOpenGast: (v: boolean) => void }) {
  const steps = [
    'Урьдчилан цаг авах',
    'Дуранд орох цагаасаа 20–30 минутын өмнө ирсэн байх',
    'Хөөс дарагч ууж биеэ бэлдэх',
    'Хуурай, нойтон салфетка бэлдэх',
    'Хариугаа бүртгэлийн хэсгээс хэвлүүлэн авах',
  ]
  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
      <div className="p-4">
        <Accordion isOpen={openGast} onToggle={() => setOpenGast(!openGast)} title="Ходоодны дуранд орох дараалал" id="gastroscopy-sequence">
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-blue/20 text-primary-blue font-bold flex items-center justify-center text-sm">{i + 1}</span>
                <span className="text-gray-700 pt-0.5">{s}</span>
              </li>
            ))}
          </ol>
          <p className="text-gray-600 mt-6 italic">Соёлтой үйлчлүүлсэн танд баярлалаа~</p>
        </Accordion>
      </div>
    </section>
  )
}

// Дурангийн дараах зөвлөмж
function PostEndoscopySection({ openPost, setOpenPost }: { openPost: string | null; setOpenPost: (v: string | null) => void }) {
  const general = [
    'Толгой эргэх, чичрэх, дотор муухайрах шинж илэрвэл хамгийн ойр эмнэлгийн ажилтанд мэдэгдээрэй.',
    'Эхлээд бүлээн шингэн эсвэл хөнгөн зууш идэх хэрэгтэй.',
  ]
  const afterEndo = [
    'Тэр өдрөө хэт халуун хоол, цай хэрэглэхгүй байх',
    'Дуранд орсноос хойш 30 мин-ын дараа ус уух',
    '1 цагийн дараа хоол идэх',
  ]
  const afterSedation = [
    'Тэр өдрөө машин барихгүй байх',
    'Асран хамгаалагчтай хамт явах',
  ]
  const toggle = (k: string) => setOpenPost(openPost === k ? null : k)
  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
      <div className="bg-primary-blue text-white px-6 py-4">
        <h3 className="text-lg font-bold">Дурангийн дараах зөвлөмж</h3>
      </div>
      <div className="p-4">
        <Accordion isOpen={openPost === 'general'} onToggle={() => toggle('general')} title="Ерөнхий зөвлөмж">
          <ul className="list-disc list-inside space-y-2 text-gray-700">{general.map((g, i) => <li key={i}>{g}</li>)}</ul>
        </Accordion>
        <Accordion isOpen={openPost === 'after'} onToggle={() => toggle('after')} title="Дурангийн шинжилгээ хийлгэсэн бол">
          <ul className="list-disc list-inside space-y-2 text-gray-700">{afterEndo.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </Accordion>
        <Accordion isOpen={openPost === 'sedation'} onToggle={() => toggle('sedation')} title="Унтуулгатай дуран хийлгэсэн бол">
          <ul className="list-disc list-inside space-y-2 text-gray-700">{afterSedation.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </Accordion>
      </div>
    </section>
  )
}

// --- Lab/instrumental data and ExamTable ---
const labData: { no: number; category: string; tests: string[] }[] = [
  { no: 1, category: 'Гематологийн шинжилгээ', tests: ['Цусны дэлгэрэнгүй шинжилгээ CBC+Diff+ Ret', 'Цусны бүлэг, резус фактор /АВО/ шинжилгээ', 'Цусны улаан эсийн тунах хурд тодорхойлох /ESR/'] },
  { no: 2, category: 'Шээсний шинжилгээ', tests: ['Шээсний ерөнхий шинжилгээ'] },
  { no: 3, category: 'Элэг, цөсний үйл ажиллагаа', tests: ['Альбумин /ALB/', 'Асат /AST/', 'Алат /ALT/', 'Нийт уураг /ТР/', 'Нийт билирубин /T.bil/', 'Шууд билирубин /D.Bil/', 'Гаммаглунинтрансфераза /GGT/', 'Шүлтлэг фосфотаза /ALP/', 'Лактадегидрогеназа /LDH/'] },
  { no: 4, category: 'Бөөрний үйл ажиллагаа', tests: ['Кератинин /CRE/', 'Мочевин /BUN/'] },
  { no: 5, category: 'Бамбайн шинжилгээ', tests: ['T3', 'T4', 'TSH /Бамбайн сэдээгч даавар/', 'Anti-TPO'] },
  { no: 6, category: 'Өөх тосны солилцоо', tests: ['Нийт холестерин /ТСН/', 'Триглицерид /TG/', 'Их нягтралтай липопротейд /HDL/', 'Бага нягтралтай липопротейд /LDL/'] },
  { no: 7, category: 'Нойр булчирхайн үйл ажиллагаа', tests: ['Амилаза альфа /а-АМУ/', 'Липаза'] },
  { no: 8, category: 'Эрдэс + Д витамин', tests: ['Кали /К/', 'Магни /Mg/', 'Натри /Na/', 'Кальци /Са/', 'Хлор /СІ/', 'Төмөр /Fe/', 'Цайр /Zn/', 'Д витамин /Vit D/'] },
  { no: 9, category: 'Бусад', tests: ['Ферритин', 'Глюкоз /GLU/', 'Сахрын 3 сарын дундаж', 'Шээсний хүчил /UA/', 'Төмөр холбох чадвар', 'Асло /ASO/'] },
  { no: 10, category: 'Үе мөчний шинжилгээ', tests: ['С реактивны уураг /CRP/', 'Ревматиод фактор /RF/'] },
  { no: 11, category: 'Түргэвчилсэн сорил', tests: ['Элэгний С вирус /Anti-HCV/', 'Элэгний В вирус /HBsAg/', 'HIV ДОХ /түргэвчилсэн/', 'ТР /түргэвчилсэн /титр/'] },
  { no: 12, category: 'Нян судлал', tests: ['Цагаан хорхойн шинжилгээ', 'Мазокын шинжилгээ', 'MRSA илрүүлэг', 'Идээний арчдас', 'Хамрын арчдас', 'Цэрний арчдас', 'Хөөмийн арчдас', 'Шархны арчдас', 'Шээсний нян судлал', 'Идээний нян судлал'] },
  { no: 13, category: 'Хеликобактер', tests: ['Хеликобактер амьсгалаар тодорхойлох', 'Хеликобактер өтгөнд тодорхойлох'] },
]
const instrumentalData: { no: number; category: string; tests: string[] }[] = [
  { no: 14, category: 'Рентген', tests: ['Рентген /Бүх байрлал/', 'Үйл ажиллагааны рентген', 'Панарома /Шүдний дэлгэмэл зураг/'] },
  { no: 15, category: 'Хэт авиа', tests: ['Хэвлийн эхо', 'Хэвлийн эхо хүүхэд', 'Бамбайн эхо', 'Хөхний эхо /эм/', 'Түрүү булчирхайн эхо /эр/'] },
  { no: 16, category: 'Үйл оношилгоо', tests: ['Зүрхний цахилгаан бичлэг', 'Зүрхний холдер 24цаг', 'Inbody', 'Спирометр'] },
  { no: 17, category: 'Дуран', tests: ['Ходоодны дуран унтуулгагүй + хөөс дарагч', 'Ходоодны дуран унтуулгатай + хөөс дарагч', 'Ходоод, бүдүүн шулуун гэдэс унтуулгатай + туулга', 'Туулга', 'Хөөс дарагч', 'Унтуулга'] },
  { no: 18, category: 'Эмчийн үзлэг', tests: ['Бүх эмчийн үзлэг', 'Хүүхдийн эмчийн үзлэг', 'Гадаад эмчийн үзлэг', 'Ангиографийн эмчийн үзлэг'] },
]

function ExamTable({ title, data, showTitle = true }: { title: string; data: { no: number; category: string; tests: string[] }[]; showTitle?: boolean }) {
  const flatRows = data.flatMap((row) => row.tests.map((test, i) => ({ row, test, i, isFirst: i === 0 })))
  return (
    <div className={showTitle ? 'mb-10' : ''}>
      {showTitle && <h3 className="text-lg font-bold text-primary-blue mb-4">{title}</h3>}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-primary-blue text-white">
              <th className="px-4 py-3 w-14">№</th>
              <th className="px-4 py-3">Ангилал</th>
              <th className="px-4 py-3">Шинжилгээний төрөл</th>
              <th className="px-4 py-3 w-28">Үнэ</th>
            </tr>
          </thead>
          <tbody>
            {flatRows.map(({ row, test, i, isFirst }, idx) => (
              <tr key={`${row.no}-${i}`} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                {isFirst ? <td rowSpan={row.tests.length} className="px-4 py-3 font-medium text-primary-blue align-top border-r border-gray-100">{row.no}</td> : null}
                {isFirst ? <td rowSpan={row.tests.length} className="px-4 py-3 text-gray-700 align-top border-r border-gray-100">{row.category}</td> : null}
                <td className="px-4 py-3 text-gray-800">{test}</td>
                <td className="px-4 py-3 text-gray-400">—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const JUMP_LINKS = [
  { href: '#bagts', label: 'Багцууд' },
  { href: '#guide', label: 'Гарын авлага' },
  { href: '#exam-list', label: 'Шинжилгээний жагсаалт' },
]

const PACKAGE_OPTIONS: { value: string; label: string }[] = [
  { value: 'pkg-bagshNart', label: 'Багш нарт' },
  { value: 'pkg-enghiin', label: 'Энгийн' },
  { value: 'pkg-premium', label: 'PREMIUM' },
  { value: 'pkg-vip', label: 'VIP' },
  { value: 'pkg-barilga', label: 'Барилгын салбар' },
  { value: 'pkg-uulUurhai', label: 'Уул уурхайн салбар' },
]

export default function BagtsPage() {
  const [openPackage, setOpenPackage] = useState<string | null>(null)
  const [openGuide, setOpenGuide] = useState<string | null>('benefits')
  const [openPrep, setOpenPrep] = useState<string | null>(null)
  const [openEb, setOpenEb] = useState<string | null>(null)
  const [openPost, setOpenPost] = useState<string | null>(null)
  const [openGast, setOpenGast] = useState(true)
  const [modalLab, setModalLab] = useState(false)
  const [modalInst, setModalInst] = useState(false)
  const [imageModalSrc, setImageModalSrc] = useState<string | null>(null)

  const togglePackage = useCallback((id: string) => { setOpenPackage((o) => (o === id ? null : id)) }, [])
  const onPackageSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value
    if (v) {
      document.getElementById(v)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpenPackage(v)
      e.target.value = ''
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col bg-gray-50/40">
      <Navigation />
      <div className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        {/* Page header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-primary-blue tracking-tight">Багц үзэх</h1>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Байгууллага, сургууль, компанийн ажилчдад зориулсан урьдчилан сэргийлэх үзлэгийн багцууд. Багц бүрийн шинжилгээ, үнэ, бэлтгэлийн зааврыг доороос сонгож үзнэ үү.
            </p>
          </div>
          <Link href="/#preventive" className="border-2 border-primary-blue text-primary-blue px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-lightBlue transition shrink-0">Буцах</Link>
        </div>

        {/* Contact CTA */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 px-4 rounded-xl bg-primary-blue/5 border border-primary-blue/20 mb-8">
          <span className="flex items-center gap-2 text-gray-700">
            <Phone className="h-5 w-5 text-primary-blue" />
            <span>Үзлэг захиалах, асуудалтай бол</span>
            <a href="tel:77777500" className="font-bold text-primary-blue hover:underline">{CONTACT.phone}</a>
          </span>
          <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`} className="text-sm font-semibold text-primary-blue hover:underline flex items-center gap-1">
            Утасдаж захиалах <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        {/* Top: big bagts1 — click to open in modal */}
        <div className="w-full mb-10 rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
          <button
            type="button"
            onClick={() => setImageModalSrc(BAGTS_IMAGES[0].src)}
            className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded-xl"
          >
            <Image
              src={BAGTS_IMAGES[0].src}
              alt={BAGTS_IMAGES[0].alt}
              width={1200}
              height={520}
              className="w-full h-auto object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <span className="sr-only">Дарж томруулна</span>
          </button>
        </div>

        {/* Jump links */}
        <nav className="flex flex-wrap gap-2 mb-10" aria-label="Хуудасны бүтэц">
          {JUMP_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:border-primary-blue hover:text-primary-blue hover:bg-primary-lightBlue/30 transition text-sm font-medium">
              {l.label} <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            </a>
          ))}
        </nav>

        {/* Packages */}
        <section id="bagts" className="scroll-mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-primary-blue flex items-center gap-2">
                <Package className="h-6 w-6 text-primary-blue" aria-hidden /> Байгууллагын багцууд
              </h2>
              <p className="text-gray-600 mt-1">Багц бүрийн шинжилгээ, үнэ доор дэлгэрэнгүй. Дарж нээнэ үү.</p>
            </div>
            <label className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Багц сонгох:</span>
              <select onChange={onPackageSelect} className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 text-sm font-medium focus:ring-2 focus:ring-primary-blue focus:border-primary-blue">
                <option value="">— сонгох —</option>
                {PACKAGE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
          </div>
        </section>
        <PackageCardBagsNart id="pkg-bagshNart" isOpen={openPackage === 'pkg-bagshNart'} onToggle={() => togglePackage('pkg-bagshNart')} />
        <PackageCardSignificance id="pkg-enghiin" title={enghiin.title} sections={enghiin.sections} original={enghiin.original} packagePrice={enghiin.package} isOpen={openPackage === 'pkg-enghiin'} onToggle={() => togglePackage('pkg-enghiin')} />
        <PackageCardSignificance id="pkg-premium" title={premium.title} sections={premium.sections} original={premium.original} packagePrice={premium.package} isOpen={openPackage === 'pkg-premium'} onToggle={() => togglePackage('pkg-premium')} />
        <PackageCardSignificance id="pkg-vip" title={vip.title} sections={vip.sections} original={vip.original} packagePrice={vip.package} isOpen={openPackage === 'pkg-vip'} onToggle={() => togglePackage('pkg-vip')} />
        <PackageCardSignificance id="pkg-barilga" title={barilga.title} sections={barilga.sections} original={barilga.original} packagePrice={barilga.package} note={barilga.note} isOpen={openPackage === 'pkg-barilga'} onToggle={() => togglePackage('pkg-barilga')} />
        <PackageCardSignificance id="pkg-uulUurhai" title={uulUurhai.title} sections={uulUurhai.sections} packagePrice={uulUurhai.package} isOpen={openPackage === 'pkg-uulUurhai'} onToggle={() => togglePackage('pkg-uulUurhai')} />

        <section id="guide" className="scroll-mt-6 mt-14 pt-6 border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-primary-blue mb-2 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary-blue" aria-hidden /> Гарын авлага
          </h2>
          <p className="text-gray-600 mb-6">Шинжилгээнд орохын өмнө дараалал, анхаарах зүйлс, дурангийн бэлтгэл зэргийг уншина уу.</p>
        </section>
        <GuideSection openGuide={openGuide} setOpenGuide={setOpenGuide} />
        <PreparationSection openPrep={openPrep} setOpenPrep={setOpenPrep} />
        <EndoscopyBeforeSection openEb={openEb} setOpenEb={setOpenEb} />
        <GastroscopySequenceSection openGast={openGast} setOpenGast={setOpenGast} />
        <PostEndoscopySection openPost={openPost} setOpenPost={setOpenPost} />

        <section id="exam-list" className="scroll-mt-6 mt-14 pt-6 border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-primary-blue mb-2 flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary-blue" aria-hidden /> Шинжилгээний жагсаалт
          </h2>
          <p className="text-gray-600 mb-4">Лаборатори, багажийн шинжилгээний төрлүүд. Үнэ тусгайлан заагдаагүй бол эмнэлгээс лавлагаж авна уу.</p>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => setModalLab(true)} className="px-5 py-2.5 rounded-lg bg-primary-blue text-white font-semibold hover:bg-primary-darkBlue transition">
              Лабораторийн шинжилгээ — жагсаалт нээх
            </button>
            <button type="button" onClick={() => setModalInst(true)} className="px-5 py-2.5 rounded-lg border-2 border-primary-blue text-primary-blue font-semibold hover:bg-primary-lightBlue/30 transition">
              Багажийн шинжилгээний үнэ — жагсаалт нээх
            </button>
          </div>
        </section>

        {/* Bottom: mini thumbnails bagts2, bagts3, bagts4 — click to open in modal */}
        <section className="mt-14 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Дарж томруулна.</p>
          <div className="flex flex-wrap gap-4">
            {BAGTS_IMAGES.slice(1).map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setImageModalSrc(img.src)}
                className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-primary-blue hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                <Image src={img.src} alt={img.alt} width={144} height={144} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </section>

        <Modal isOpen={modalLab} onClose={() => setModalLab(false)} title="Лабораторийн шинжилгээ">
          <ExamTable title="Лабораторийн шинжилгээ" data={labData} showTitle={false} />
        </Modal>
        <Modal isOpen={modalInst} onClose={() => setModalInst(false)} title="Багажийн шинжилгээний үнэ">
          <ExamTable title="Багажийн шинжилгээний үнэ" data={instrumentalData} showTitle={false} />
        </Modal>

        <ImageLightbox
          isOpen={!!imageModalSrc}
          onClose={() => setImageModalSrc(null)}
          src={imageModalSrc ?? ''}
          alt={imageModalSrc ? (BAGTS_IMAGES.find((b) => b.src === imageModalSrc)?.alt ?? 'Зураг') : ''}
        />
      </div>
      <Footer />
    </main>
  )
}
