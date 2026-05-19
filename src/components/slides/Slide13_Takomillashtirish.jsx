import SlideHeader from '../ui/SlideHeader.jsx'
import { TAKOMILLASHTIRISH, NORMATIV_2025 } from '../../data/index.js'

const USTUVORLIK = {
  "Yuqori": "border-gold-400/40 bg-gold-500/10",
  "O'rta":  "border-blue-400/20 bg-blue-500/5",
}

export default function Slide13_Takomillashtirish({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={13} total={total} title="Takomillashtirish yo'nalishlari" subtitle="7 ta amaliy tavsiya — Bardanko'l YFK uchun" />

      <div className="flex-1 grid grid-cols-5 gap-5 px-10 py-4 overflow-hidden">
        {/* 7 yo'nalish */}
        <div className="col-span-3 grid grid-cols-2 gap-3 content-start">
          {TAKOMILLASHTIRISH.map((t, i) => (
            <div key={i} className={`rounded-xl border p-3 flex gap-3 items-start ${USTUVORLIK[t.ustuvorlik]}`}>
              <span className="text-xl flex-shrink-0">{t.icon}</span>
              <div>
                <div className="text-sm font-bold text-white">{t.sarlavha}</div>
                <div className="text-xs text-blue-200/65 mt-0.5 leading-snug">{t.tavsif}</div>
                <span className={`text-xs mt-1 inline-block font-semibold ${t.ustuvorlik === 'Yuqori' ? 'text-gold-400' : 'text-blue-300'}`}>
                  {t.ustuvorlik} ustuvorlik
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Normativ ko'rsatkichlar */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col flex-1">
            <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">
              2025-yil normativ ko'rsatkichlar
            </h3>
            <div className="flex flex-col gap-2 flex-1 overflow-auto thin-scroll">
              {NORMATIV_2025.map((n, i) => (
                <div key={i} className="border-b border-white/5 pb-2 last:border-0">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs text-blue-200/70 leading-snug">{n.nomi}</span>
                    <span className="text-xs font-bold text-gold-400 flex-shrink-0">{n.qiymati}</span>
                  </div>
                  <div className="text-xs text-blue-200/30 mt-0.5">{n.hujjat}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vazifalarni ajratish */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-2">Vazifalarni ajratish</h3>
            <div className="flex items-center gap-1 flex-wrap text-xs">
              {["Kadrlar\nbo'limi", "→", "Buxgalteriya", "→", "Kassa/\nXazinachi"].map((s, i) => (
                s === "→"
                  ? <span key={i} className="text-blue-300/40 font-bold">→</span>
                  : <div key={i} className="bg-navy-700 border border-white/10 rounded-lg px-2 py-1.5 text-center text-blue-200/70 whitespace-pre-line leading-tight">{s}</div>
              ))}
            </div>
            <div className="text-xs text-blue-200/40 mt-2">
              Har bir bosqichda mas'ul shaxs va tekshiruvchi taraf alohida
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
