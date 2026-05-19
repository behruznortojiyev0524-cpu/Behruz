import SlideHeader from '../ui/SlideHeader.jsx'
import { XULOSA_BANDLAR } from '../../data/index.js'

export default function Slide14_Xulosa({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={14} total={total} title="Xulosa va tavsiyalar" subtitle="Tadqiqot natijalari bo'yicha asosiy xulosalar" />

      <div className="flex-1 grid grid-cols-3 gap-5 px-10 py-4 overflow-hidden">
        {/* Xulosalar */}
        <div className="col-span-2 flex flex-col gap-3">
          {XULOSA_BANDLAR.map((b, i) => (
            <div key={i} className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-400 font-bold text-xs">
                {i + 1}
              </span>
              <p className="text-sm text-blue-100/80 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        {/* Right panel */}
        <div className="flex flex-col gap-4">
          {/* KPI highlights */}
          <div className="bg-gold-500/10 border border-gold-400/30 rounded-2xl p-5 flex flex-col gap-3">
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-wider">Asosiy ko'rsatkichlar</h3>
            {[
              { l: "Jami aktiv o'sishi (2023–2025)", v: "+84%" },
              { l: "Sof tushum o'sishi",             v: "+221%" },
              { l: "O'zbekiston JSHDS o'sishi",      v: "+40.3%" },
              { l: "JSHDS stavkasi",                  v: "12%" },
            ].map((k, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                <span className="text-xs text-blue-200/60">{k.l}</span>
                <span className="text-sm font-extrabold text-gold-400">{k.v}</span>
              </div>
            ))}
          </div>

          {/* Amaliy tavsiya */}
          <div className="bg-blue-600/10 border border-blue-400/20 rounded-2xl p-5 flex flex-col gap-3 flex-1">
            <h3 className="text-xs font-bold text-blue-300 uppercase tracking-wider">Amaliy tavsiyalar (3 ta ustuvor)</h3>
            {[
              { n: "1", t: "Elektron tabel + 1C integratsiyasi — tungi va bayram ish soatlari avtomatik qayd" },
              { n: "2", t: "Kadrlar / Buxgalteriya / Kassa — vazifalar aniq chegaralanishi" },
              { n: "3", t: "Oylik ichki va yillik tashqi audit — xatolar o'z vaqtida aniqlanishi" },
            ].map((r, i) => (
              <div key={i} className="flex gap-2 items-start text-sm text-blue-100/70">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 font-bold text-xs flex-shrink-0">{r.n}</span>
                <span className="leading-snug">{r.t}</span>
              </div>
            ))}
          </div>

          {/* Yakuniy */}
          <div className="text-center py-3 border border-white/10 rounded-xl bg-white/5">
            <div className="text-xs text-blue-200/50 mb-1">Tadqiqot ob'ekti</div>
            <div className="text-sm font-bold text-white">Bardanko'l YFK</div>
            <div className="text-xs text-gold-400 mt-1">Toshkent viloyati — 2025</div>
          </div>
        </div>
      </div>
    </div>
  )
}
