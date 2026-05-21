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
  "Yuqori": { bg: "#fff1f2", border: "#fecdd3", head: "#be123c", dot: "#f43f5e", badge: "bg-red-100 text-red-700" },
  "O'rta":  { bg: "#fffbeb", border: "#fde68a", head: "#92400e", dot: "#f59e0b", badge: "bg-amber-100 text-amber-700" },
}

const barcha = [...MUAMMOLAR, ...EXTRA]

export default function Slide12_Muammolar({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={12} total={total} title="Aniqlangan muammolar"
        subtitle="Bardanko'l YFK da JSHDS hisobi va hisobot tizimidagi zaif tomonlar" />

      <div className="flex-1 px-8 py-5 flex flex-col overflow-hidden bg-slate-50">
        <div className="grid grid-cols-2 gap-4 flex-1">
          {barcha.map((m, i) => {
            const r = XATAR_RANG[m.xatar] || XATAR_RANG["O'rta"]
            return (
              <div key={i} className="rounded-2xl border p-5 flex flex-col gap-2 shadow-sm"
                style={{ background: r.bg, borderColor: r.border }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black" style={{ color: r.head }}>{m.sarlavha}</h3>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${r.badge}`}>
                    {m.xatar} xatar
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{m.tavsif}</p>
                <div className="flex items-center gap-1.5 mt-auto pt-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: r.dot }} />
                  <span className="text-xs text-slate-400">Takomillashtirish tavsiya etiladi →</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 text-sm text-slate-600">
          <span className="text-blue-700 font-semibold">Asosiy xulosa: </span>
          Muammolarning asosiy sababi — qog'oz asosidagi tizim, vazifalarni ajratmaslik va normativ yangilanishlarni kechiktirib qo'llash. Bularning barchasi dasturiy avtomatlashtirish orqali hal qilinishi mumkin.
        </div>
      </div>
    </div>
  )
}
