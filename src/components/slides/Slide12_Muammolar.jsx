import SlideHeader from '../ui/SlideHeader.jsx'
import { MUAMMOLAR } from '../../data/index.js'

const EXTRA = [
  {
    sarlavha: "Soliq chegirma hujjatlari",
    tavsif: "Imtiyozga ega xodimlarning tasdiqlovchi hujjatlari (nogironlik, ko'p bolali oila) muntazam yangilanmasa, chegirma noto'g'ri qo'llaniladi.",
    xatar: "O'rta",
  },
]

const XATAR_RANG = {
  "Yuqori": { bg: "bg-red-500/10",    border: "border-red-400/30",  text: "text-red-400",    dot: "bg-red-500" },
  "O'rta":  { bg: "bg-yellow-500/10", border: "border-yellow-400/30", text: "text-yellow-400", dot: "bg-yellow-500" },
}

const barcha = [...MUAMMOLAR, ...EXTRA]

export default function Slide12_Muammolar({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={12} total={total} title="Aniqlangan muammolar" subtitle="Bardanko'l YFK da JSHDS hisobi va hisobot tizimidagi zaif tomonlar" />

      <div className="flex-1 px-10 py-5 flex flex-col overflow-hidden">
        <div className="grid grid-cols-2 gap-4 flex-1">
          {barcha.map((m, i) => {
            const r = XATAR_RANG[m.xatar] || XATAR_RANG["O'rta"]
            return (
              <div key={i} className={`rounded-2xl border p-5 flex flex-col gap-2 ${r.bg} ${r.border}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">{m.sarlavha}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white/10 ${r.text}`}>
                    {m.xatar} xatar
                  </span>
                </div>
                <p className="text-sm text-blue-200/75 leading-relaxed">{m.tavsif}</p>
                <div className="flex items-center gap-1.5 mt-auto pt-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${r.dot}`} />
                  <span className="text-xs text-blue-200/40">Takomillashtirish tavsiya etiladi →</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 bg-blue-600/10 border border-blue-400/20 rounded-xl px-5 py-3 text-sm text-blue-100/70">
          <span className="text-blue-300 font-semibold">Asosiy xulosa: </span>
          Muammolarning asosiy sababi — qog'oz asosidagi tizim, vazifalarni ajratmaslik va normativ yangilanishlarni kechiktirib qo'llash. Bularning barchasi dasturiy avtomatlashtirish orqali hal qilinishi mumkin.
        </div>
      </div>
    </div>
  )
}
