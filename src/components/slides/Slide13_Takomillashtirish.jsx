import SlideHeader from '../ui/SlideHeader.jsx'
import { TAKOMILLASHTIRISH, NORMATIV_2025 } from '../../data/index.js'

const USTUVORLIK = {
  "Yuqori": { bg: "#f8faff", border: "#c7d7f5", badge: "bg-blue-100 text-blue-700", head: "#0c2461" },
  "O'rta":  { bg: "#f8fafc", border: "#e2e8f0", badge: "bg-slate-100 text-slate-600", head: "#475569" },
}

export default function Slide13_Takomillashtirish({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={14} total={total} title="Takomillashtirish yo'nalishlari"
        subtitle="7 ta amaliy tavsiya — Bardanko'l YFK uchun" />

      <div className="flex-1 grid grid-cols-5 gap-5 px-8 py-4 overflow-hidden bg-slate-50">
        {/* 7 yo'nalish */}
        <div className="col-span-3 grid grid-cols-2 gap-3 content-start">
          {TAKOMILLASHTIRISH.map((t, i) => {
            const s = USTUVORLIK[t.ustuvorlik] || USTUVORLIK["O'rta"]
            return (
              <div key={i} className="rounded-xl border p-3.5 flex gap-3 items-start shadow-sm"
                style={{ background: s.bg, borderColor: s.border }}>
                <span className="text-xl flex-shrink-0">{t.icon}</span>
                <div>
                  <div className="text-sm font-bold" style={{ color: s.head }}>{t.sarlavha}</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-snug">{t.tavsif}</div>
                  <span className={`text-xs mt-1.5 inline-block font-semibold px-2 py-0.5 rounded-full ${s.badge}`}>
                    {t.ustuvorlik} ustuvorlik
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Normativ ko'rsatkichlar */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col flex-1 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
              2025-yil normativ ko'rsatkichlar
            </h3>
            <div className="flex flex-col gap-2 flex-1 overflow-auto thin-scroll">
              {NORMATIV_2025.map((n, i) => (
                <div key={i} className="border-b border-slate-100 pb-2 last:border-0">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs text-slate-600 leading-snug">{n.nomi}</span>
                    <span className="text-xs font-bold flex-shrink-0" style={{ color: '#0c2461' }}>{n.qiymati}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{n.hujjat}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vazifalarni ajratish */}
          <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5">Vazifalarni ajratish tamoyili</h3>
            <div className="flex items-center gap-1 flex-wrap text-xs">
              {["Kadrlar\nbo'limi", "→", "Buxgalteriya", "→", "Kassa/\nXazinachi"].map((s, i) => (
                s === "→"
                  ? <span key={i} className="text-slate-300 font-bold text-base">→</span>
                  : <div key={i} className="rounded-lg px-2.5 py-2 text-center text-slate-600 whitespace-pre-line leading-tight border border-slate-200"
                    style={{ background: '#f8faff' }}>{s}</div>
              ))}
            </div>
            <div className="text-xs text-slate-400 mt-2">
              Har bir bosqichda mas'ul shaxs va tekshiruvchi taraf alohida
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
