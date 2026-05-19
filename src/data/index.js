// ============================================================
// BARDANKO'L YFK — DIPLOM ISHI MA'LUMOTLARI
// Mavzu: Jismoniy shaxslar daromadlarini hisobga olish
//        va soliqqa tortish amaliyoti
// ============================================================

export const META = {
  title: "Jismoniy shaxslar daromadlarini hisobga olish va soliqqa tortish amaliyoti",
  subtitle: "Bardanko'l yo'llardan foydalanish korxonasi misolida",
  university: "O'zbekiston Respublikasi Oliy Ta'lim, Fan va Innovatsiyalar Vazirligi",
  department: "Moliya va Buxgalteriya hisobi yo'nalishi",
  author: "Bitiruv malakaviy ish",
  year: "Toshkent — 2025",
  supervisor: "Ilmiy rahbar: _________________",
  korxona: "Bardanko'l yo'llardan foydalanish korxonasi",
  location: "Toshkent viloyati, Yuqori Chirchiq tumani",
}

// ----------------------------------------------------------
// 1. BALANS AKTIVI VA PASSIVI (ming so'm)
// ----------------------------------------------------------
export const BALANS_AKTIV = [
  { yil: '2023', uzok: 41714, joriy: 32797, jami: 74511 },
  { yil: '2024', uzok: 44294, joriy: 45746, jami: 90040 },
  { yil: '2025', uzok: 61650, joriy: 75376, jami: 137026 },
]

export const BALANS_PASSIV = [
  { yil: '2023', ozMablag: 46827, majburiyat: 27685, jami: 74511 },
  { yil: '2024', ozMablag: 49921, majburiyat: 40119, jami: 90040 },
  { yil: '2025', ozMablag: 68236, majburiyat: 68790, jami: 137026 },
]

// ----------------------------------------------------------
// 2. DAROMAD VA FOYDA (ming so'm)
// ----------------------------------------------------------
export const DAROMAD = [
  { yil: '2023', tushum: 26265, yalpiFoyda: 3042, sofFoyda: 280 },
  { yil: '2024', tushum: 65532, yalpiFoyda: 5662, sofFoyda: 349 },
  { yil: '2025', tushum: 84403, yalpiFoyda: 6209, sofFoyda: 151 },
]

// ----------------------------------------------------------
// 3. XARAJATLAR (ming so'm)
// ----------------------------------------------------------
export const XARAJAT = [
  { yil: '2023', tannarx: 20603, davrXarajat: 3068, foydaSoliq: 7,   boshqaSoliq: 0 },
  { yil: '2024', tannarx: 62490, davrXarajat: 4629, foydaSoliq: 124, boshqaSoliq: 560 },
  { yil: '2025', tannarx: 78193, davrXarajat: 5409, foydaSoliq: 125, boshqaSoliq: 560 },
]

export const XARAJAT_PIE_2025 = [
  { name: 'Tannarx', value: 78193, pct: 92.6, color: '#1e3a6e' },
  { name: 'Davr xarajatlari', value: 5409,  pct: 6.4,  color: '#2563eb' },
  { name: 'Soliqlar', value: 685,   pct: 0.8,  color: '#f5c842' },
  { name: 'Boshqa', value: 116,    pct: 0.1,  color: '#64748b' },
]

// ----------------------------------------------------------
// 4. XORIJIY JSHDS TUSHUMLARI DINAMIKASI
// ----------------------------------------------------------
export const XORIJIY_DINAMIKA = [
  { yil: '2023', aqsh: 2180, germaniya: 249.0, rossiya: 6560, uzbekiston: 29900 },
  { yil: '2024', aqsh: 2426, germaniya: 249.3, rossiya: 8400, uzbekiston: 35400 },
  { yil: '2025', aqsh: 2656, germaniya: 262.7, rossiya: 9500, uzbekiston: 42000 },
]

export const INDEKS_OSISH = [
  { yil: '2023', aqsh: 100.0, germaniya: 100.0, rossiya: 100.0, uzbekiston: 100.0 },
  { yil: '2024', aqsh: 111.3, germaniya: 100.1, rossiya: 128.0, uzbekiston: 118.3 },
  { yil: '2025', aqsh: 121.8, germaniya: 105.5, rossiya: 144.8, uzbekiston: 140.3 },
]

export const BUDJET_ULUSHI = [
  { mamlakat: "AQSh",       ulush2023: 48.7, ulush2024: 49.0, ulush2025: 50.5, color: '#1d4ed8' },
  { mamlakat: "Germaniya",  ulush2023: 26.2, ulush2024: 26.3, ulush2025: 26.6, color: '#2563eb' },
  { mamlakat: "Rossiya",    ulush2023: 15.5, ulush2024: 19.0, ulush2025: 20.0, color: '#dc2626' },
  { mamlakat: "O'zbekiston",ulush2023: 12.9, ulush2024: 12.9, ulush2025: 13.0, color: '#f5c842' },
]

// ----------------------------------------------------------
// 5. SOLIQ STAVKALARI TAQQOSLAMASI
// ----------------------------------------------------------
export const STAVKA_TAQQOS = [
  { mamlakat: "AQSh",        min: 10, max: 37, tur: "Progressiv", bosqich: 7 },
  { mamlakat: "Germaniya",   min: 14, max: 45, tur: "Progressiv", bosqich: 5 },
  { mamlakat: "Rossiya",     min: 13, max: 22, tur: "Progressiv", bosqich: 5 },
  { mamlakat: "Ozarbayjon",  min: 14, max: 25, tur: "Progressiv", bosqich: 2 },
  { mamlakat: "Qozog'iston", min: 10, max: 15, tur: "Progressiv", bosqich: 2 },
  { mamlakat: "Belarus",     min: 13, max: 25, tur: "Progressiv", bosqich: 2 },
  { mamlakat: "O'zbekiston", min: 12, max: 12, tur: "Proporsional",bosqich: 1 },
]

// ----------------------------------------------------------
// 6. NORMATIV KO'RSATKICHLAR 2025
// ----------------------------------------------------------
export const NORMATIV_2025 = [
  { nomi: "Bazaviy hisoblash miqdori (BHM)",     qiymati: "412 000 so'm",   hujjat: "PF-91, 02.06.2025" },
  { nomi: "Eng kam ish haqi (MHTEKM)",           qiymati: "1 271 000 so'm", hujjat: "PF-91, 02.06.2025" },
  { nomi: "Eng kam pensiya",                      qiymati: "918 000 so'm",   hujjat: "PF-91, 02.06.2025" },
  { nomi: "JSHDS stavkasi (rezidentlar)",         qiymati: "12%",            hujjat: "SK, 381-modda" },
  { nomi: "Ijtimoiy soliq (budjet tashkilotlari)",qiymati: "25%",            hujjat: "SK, 405-modda" },
  { nomi: "Moddiy yordam ozod qismi (BHM × 12)", qiymati: "4 944 000 so'm", hujjat: "SK, 369-modda" },
  { nomi: "Nizomiy ish vaqti (oyiga)",            qiymati: "168 soat",       hujjat: "Mehnat kodeksi" },
]

// ----------------------------------------------------------
// 7. TAKOMILLASHTIRISH YO'NALISHLARI (7 ta)
// ----------------------------------------------------------
export const TAKOMILLASHTIRISH = [
  {
    id: 1,
    icon: "🔍",
    sarlavha: "Ichki nazoratni kuchaytirish",
    tavsif: "Vazifalarni ajratish tamoyili — kadrlar, buxgalteriya va kassani chegaralash",
    holat: "Tavsiya",
    ustuvorlik: "Yuqori",
  },
  {
    id: 2,
    icon: "⏱️",
    sarlavha: "Elektron tabel tizimi",
    tavsif: "Biometrik kirish-chiqish nazorati — tungi ish, bayram kunlari avtomatik qayd",
    holat: "Tavsiya",
    ustuvorlik: "Yuqori",
  },
  {
    id: 3,
    icon: "⚖️",
    sarlavha: "Normativ bazani kuzatish",
    tavsif: "lex.uz, soliq.uz orqali haftalik yangilanish — BHM, MHTEKM, stavkalar",
    holat: "Tavsiya",
    ustuvorlik: "O'rta",
  },
  {
    id: 4,
    icon: "🎓",
    sarlavha: "Buxgalterlar malakasini oshirish",
    tavsif: "Yillik attestatsiya kurslar, ichki oylik seminarlar, DipIFR, CIPA",
    holat: "Tavsiya",
    ustuvorlik: "O'rta",
  },
  {
    id: 5,
    icon: "💻",
    sarlavha: "Elektron hujjat aylanmasi",
    tavsif: "1C:Buxgalteriya, my.soliq.uz, ERI — qog'oz hujjatlarni minimallashtirish",
    holat: "Tavsiya",
    ustuvorlik: "Yuqori",
  },
  {
    id: 6,
    icon: "🔒",
    sarlavha: "Ushlanmalar nazorati",
    tavsif: "MK 164-moddaga ko'ra 50% chegara, algoritmik tekshiruv — dasturiy avtomatlashtirish",
    holat: "Tavsiya",
    ustuvorlik: "O'rta",
  },
  {
    id: 7,
    icon: "📋",
    sarlavha: "Muntazam audit",
    tavsif: "Choraklik ichki + yillik tashqi audit, bayonnoma, profilaktik tadbirlar",
    holat: "Tavsiya",
    ustuvorlik: "O'rta",
  },
]

// ----------------------------------------------------------
// 8. MAQSAD VA VAZIFALAR
// ----------------------------------------------------------
export const MAQSAD = "Bardanko'l yo'llardan foydalanish korxonasi misolida jismoniy shaxslar daromadlarini hisobga olish va soliqqa tortishning amaldagi amaliyotini har tomonlama tahlil qilish, mavjud kamchiliklar va muammolarni ilmiy asosda aniqlash hamda tizimni takomillashtirish bo'yicha amaliy tavsiyalar ishlab chiqish."

export const VAZIFALAR = [
  "JSHDS ning huquqiy asoslari va qonunchilik bazasini o'rganish (SK 364–401-moddalar)",
  "Korxonaning tashkiliy-huquqiy tuzilmasini o'rganib, moliyaviy-iqtisodiy tavsif berish",
  "Jismoniy shaxslar daromadlarini hisobga olishning amaliy tartibini batafsil o'rganish",
  "Ish haqi va boshqa daromadlardan JSHDS hisoblash mexanizmini tahlil qilish",
  "Hisobot tizimi va soliq nazoratining amaldagi holatini baholash",
  "Xorijiy mamlakatlar tajribasini qiyosiy tahlil qilish (AQSh, Germaniya, Rossiya, MDH)",
  "Hisobga olish va soliqqa tortishni takomillashtirish bo'yicha tavsiyalar ishlab chiqish",
]

export const OBEKT = "O'zbekiston Respublikasi, Toshkent viloyati, Yuqori Chirchiq tumanida joylashgan davlat muassasasi shaklidagi Bardanko'l yo'llardan foydalanish korxonasi."

export const PREDMET = "Bardanko'l yo'llardan foydalanish korxonasida jismoniy shaxslar daromadlarini buxgalteriya hisobida aks ettirish, daromad solig'ini hisoblash, soliq bazasini shakllantirish hamda budjetga o'tkazish bilan bog'liq moliyaviy-iqtisodiy munosabatlar va amaliy jarayonlar majmui."

export const METODLAR = [
  { nom: "Huquqiy-me'yoriy",   tavsif: "Soliq kodeksi, Prezident farmonlari, Vazirlar Mahkamasi qarorlari, lex.uz" },
  { nom: "Nazariy-metodologik", tavsif: "O'zbek va xorijiy iqtisodchilar ilmiy ishlari" },
  { nom: "Amaliy material",    tavsif: "Korxona birlamchi hujjatlari, buxgalteriya hisobotlari, nizom" },
  { nom: "Tahlil usullari",    tavsif: "Taqqoslash, guruhlash, tizimli tahlil, induksiya, deduksiya, jadval" },
]

// ----------------------------------------------------------
// 9. DOLZARBLIK RAQAMLARI
// ----------------------------------------------------------
export const DOLZARBLIK_RAQAMLAR = [
  { ko: "29.9 trln so'm", lab: "2023-yil JSHDS tushumlari" },
  { ko: "35.4 trln so'm", lab: "2024-yil JSHDS tushumlari" },
  { ko: "~42 trln so'm",  lab: "2025-yil prognoz" },
  { ko: "12%",            lab: "Yagona proporsional stavka" },
]

// ----------------------------------------------------------
// 10. SK ASOSIY MODDALAR
// ----------------------------------------------------------
export const SK_MODDALAR = [
  { modda: "364", nomi: "Soliq to'lovchilar", mazmun: "Rezident va norezident jismoniy shaxslar" },
  { modda: "365", nomi: "Soliq solish obyekti", mazmun: "Rezidentlar — barcha daromadlar; Norezidentlar — OR manbalaridan" },
  { modda: "366", nomi: "Soliq bazasi", mazmun: "Jami daromaddan ozod etilgan summa chegirilib aniqlanadi" },
  { modda: "369", nomi: "Jami daromadga kirmaydigan", mazmun: "Pensiya, nafaqa, stipendiya, meros, sovg'a va boshqalar" },
  { modda: "378", nomi: "Soliqdan ozod etish", mazmun: "Xususiy mulkni 3 yildan ortiq ushlab sotish, qimmatli qog'ozlar" },
  { modda: "381", nomi: "Rezidentlar stavkasi", mazmun: "12% — ish haqi va boshqa daromadlar; 5% — dividend va foizlar" },
  { modda: "396", nomi: "Yillik deklaratsiya", mazmun: "Topshirish majburiy bo'lgan hollar va tartibi" },
]

// ----------------------------------------------------------
// 11. MUAMMOLAR
// ----------------------------------------------------------
export const MUAMMOLAR = [
  {
    sarlavha: "Qog'oz tabel tizimi",
    tavsif: "An'anaviy qog'oz tabel sub'ektiv yozuvlarga tayanadi, tungi ish soatlari va qo'shimcha ish vaqti noto'g'ri qayd etilishi xavfi mavjud.",
    xatar: "Yuqori",
  },
  {
    sarlavha: "Vazifalar ajralmasligi",
    tavsif: "Bir xodim xodimni qabul qilish, ish haqi hisoblash va to'lovni amalga oshirishning barchasini bajarishi — firibgarlik xavfini oshiradi.",
    xatar: "Yuqori",
  },
  {
    sarlavha: "Normativ bazani kechiktirib yangilash",
    tavsif: "BHM, MHTEKM o'zgarganda hisob-kitoblarda bir muddat eskirgan ko'rsatkichlar qo'llanilishi mumkin.",
    xatar: "O'rta",
  },
  {
    sarlavha: "Elektron hujjat aylanmasining yo'qligi",
    tavsif: "Buyruq, vedomost va ish haqi qaydnomalari qog'ozda yuritilyapti — yo'qolish va xato xavfi yuqori.",
    xatar: "O'rta",
  },
]

// ----------------------------------------------------------
// 12. XULOSA VA TAVSIYALAR
// ----------------------------------------------------------
export const XULOSA_BANDLAR = [
  "Bardanko'l YFK 2019-yilda unitar korxona, 2023-yilda davlat muassasasi sifatida qayta tashkil etilgan; nizom fondi 59.9 mln so'm.",
  "Korxona sof tushumи 2023–2025 yillarda 26.3 mlrd dan 84.4 mlrd so'mga oshgan (+221%), biroq sof foyda 280 dan 151 mln so'mga tushgan.",
  "O'zbekiston 12% proporsional stavkasini saqlamoqda; rivojlangan mamlakatlar (AQSh, Germaniya) budjet ulushi 25–50%, O'zbekistonda 13%.",
  "Rossiya (+44.8%) va O'zbekiston (+40.3%) JSHDS tushumlari o'sishida MDH ichida yetakchi — soliq bazasini kengaytirish potensiali katta.",
  "7 ta takomillashtirish yo'nalishi: ichki nazorat, elektron tabel, normativ kuzatuv, malaka oshirish, EHAylanmasi, ushlanmalar nazorati, audit.",
  "Amaliy tavsiya: amaldagi 12% stavka doirasida daromadlarni to'g'ri tasniflash, imtiyozlarni hujjat asosida qo'llash — jarima xavfini kamaytiradi.",
]
