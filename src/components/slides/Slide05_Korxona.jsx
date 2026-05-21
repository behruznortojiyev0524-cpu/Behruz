import SlideHeader from '../ui/SlideHeader.jsx'

const BOSQICHLAR = [
  { sana: "2019-yil dekabr",  text: "PQ-4545 asosida Bardanko'l YFK unitar korxona sifatida tashkil etildi" },
  { sana: "2023-yil mart",    text: "Prezident PQ-102 — davlat ishtirokini qisqartirish chora-tadbirlari" },
  { sana: "2023-yil aprel",   text: "Qo'mita 41-son buyrug'i — korxona davlat muassasasi shakliga o'tkazildi" },
  { sana: "2023-yil iyul",    text: "76-son buyruq — Toshkent viloyati AYBBB ga bevosita bo'ysundirildi" },
]

const VAZIFALAT = [
  { n: "Xavfsizlik",         d: "Transport vositalarining xavfsiz harakatlanishini ta'minlash" },
  { n: "Yo'llarni saqlash",  d: "Biriktirilgan yo'llarni qatnov holatida saqlab turish" },
  { n: "Ishlab chiqarish",   d: "Asfalt-beton, temir-beton, noruda mahsulotlari ishlab chiqarish" },
  { n: "Transport xizmati",  d: "Avtotransport va mashina-mexanizmlar bilan xizmat ko'rsatish" },
  { n: "Favqulodda holat",   d: "Tabiiy ofatlar va avariyalarda zudlik bilan chora-tadbirlar" },
  { n: "Ekologiya",          d: "Yo'l ishlarini ekologiya me'yorlarini hisobga olgan holda bajarish" },
]

export default function Slide05_Korxona({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={5} total={total} title="Korxona iqtisodiy tavsifi" subtitle="Bardanko'l yo'llardan foydalanish korxonasi — davlat muassasasi" />

      <div className="flex-1 grid grid-cols-5 gap-4 px-8 py-4 overflow-hidden bg-slate-50">
        {/* Left */}
        <div className="col-span-2 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2">
            {[
              { l: "Huquqiy shakl",    v: "Davlat muassasasi" },
              { l: "Nizom fondi",      v: "59.9 mln so'm" },
              { l: "Muassis",          v: "Avtomobil yo'llari qo'mitasi" },
              { l: "Faoliyat muddati", v: "Cheklanmagan" },
            ].map((f, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-xl px-3 py-2.5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: '#0c2461' }}>{f.l}</div>
                <div className="text-sm font-bold text-slate-800">{f.v}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-4 flex-1 flex flex-col shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">Rivojlanish bosqichlari</h3>
            <div className="flex flex-col gap-2.5 flex-1">
              {BOSQICHLAR.map((b, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="flex flex-col items-center mt-1 gap-1">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#0c2461' }} />
                    {i < BOSQICHLAR.length - 1 && <div className="w-px h-full bg-slate-200" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: '#0c2461' }}>{b.sana}</div>
                    <div className="text-xs text-slate-500 leading-snug">{b.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Org chart */}
        <div className="col-span-1 flex flex-col items-center justify-center gap-1 py-2">
          {[
            { label: "Avtomobil yo'llari qo'mitasi", type: "top" },
            { label: "Toshkent viloyati AYBB", type: "mid" },
            { label: "Bardanko'l YFK\nDIREKTOR", type: "main" },
            { label: "Bosh muhandis\nBosh hisobchi", type: "sub" },
          ].map((node, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <div className={`rounded-xl px-2 py-1.5 text-center text-xs font-semibold leading-tight whitespace-pre-line w-full border
                ${node.type === 'main'  ? 'text-gold-400 border-[#f5c842]/40' :
                  node.type === 'top'   ? 'text-blue-700 border-blue-200' :
                  node.type === 'sub'   ? 'text-slate-500 border-slate-200' :
                  'text-slate-600 border-slate-200'}
              `}
              style={node.type === 'main' ? { background: '#0c2461' } : node.type === 'top' ? { background: '#eff6ff' } : { background: '#f8fafc' }}>
                {node.label}
              </div>
              {i < 3 && <div className="w-px h-4 bg-slate-300" />}
            </div>
          ))}
        </div>

        {/* Right: tasks */}
        <div className="col-span-2 bg-white border border-slate-100 rounded-2xl p-4 flex flex-col shadow-sm">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">Asosiy vazifalar</h3>
          <div className="flex flex-col gap-2 flex-1">
            {VAZIFALAT.map((v, i) => (
              <div key={i} className="flex gap-2 items-start border-b border-slate-100 pb-2 last:border-0">
                <span className="text-xs rounded-md w-5 h-5 flex items-center justify-center text-gold-400 font-black flex-shrink-0"
                  style={{ background: '#0c2461' }}>{i+1}</span>
                <div>
                  <span className="text-xs font-semibold text-slate-800">{v.n}: </span>
                  <span className="text-xs text-slate-500">{v.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
