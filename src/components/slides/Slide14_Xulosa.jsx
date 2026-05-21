import SlideHeader from '../ui/SlideHeader.jsx'
import { XULOSA_BANDLAR } from '../../data/index.js'

export default function Slide14_Xulosa({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={13} total={total} title="Xulosa va tavsiyalar"
        subtitle="Bitiruv malakaviy ish natijalari bo'yicha asosiy xulosalar" />

      <div className="flex-1 grid grid-cols-3 gap-5 px-8 py-4 overflow-hidden bg-slate-50">
        {/* Xulosalar */}
        <div className="col-span-2 flex flex-col gap-2.5">
          {XULOSA_BANDLAR.map((b, i) => (
            <div key={i} className="flex gap-3 items-start bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-gold-400 font-black text-xs"
                style={{ background: '#0c2461' }}>
                {i + 1}
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          {/* KPI */}
          <div className="rounded-2xl p-5 flex flex-col gap-3 shadow-sm"
            style={{ background: '#0c2461' }}>
            <h3 className="text-xs font-black uppercase tracking-wider text-gold-400/80">Asosiy ko'rsatkichlar</h3>
            {[
              { l: "Jami aktiv o'sishi (2023–2025)", v: "+84%" },
              { l: "Sof tushum o'sishi",             v: "+221%" },
              { l: "O'zbekiston JSHDS o'sishi",      v: "+40.3%" },
              { l: "JSHDS stavkasi",                  v: "12%" },
            ].map((k, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-2 last:border-0" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <span className="text-xs text-blue-200/60">{k.l}</span>
                <span className="text-sm font-extrabold text-gold-400">{k.v}</span>
              </div>
            ))}
          </div>

          {/* Tavsiyalar */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex flex-col gap-3 flex-1">
            <h3 className="text-xs font-black uppercase tracking-wider text-blue-700">Amaliy tavsiyalar (3 ta ustuvor)</h3>
            {[
              { n: "1", t: "Elektron tabel + 1C integratsiyasi — tungi va bayram ish soatlari avtomatik qayd" },
              { n: "2", t: "Kadrlar / Buxgalteriya / Kassa — vazifalar aniq chegaralanishi" },
              { n: "3", t: "Oylik ichki va yillik tashqi audit — xatolar o'z vaqtida aniqlanishi" },
            ].map((r, i) => (
              <div key={i} className="flex gap-2 items-start text-sm text-slate-600">
                <span className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-black text-xs flex-shrink-0">{r.n}</span>
                <span className="leading-snug">{r.t}</span>
              </div>
            ))}
          </div>

          {/* Yakuniy */}
          <div className="text-center py-3 border border-slate-200 rounded-xl bg-white shadow-sm">
            <div className="text-xs text-slate-400 mb-1">Bitiruv malakaviy ish ob'ekti</div>
            <div className="text-sm font-black" style={{ color: '#0c2461' }}>Bardanko'l YFK</div>
            <div className="text-xs text-amber-600 mt-1 font-semibold">Toshkent viloyati — 2025</div>
          </div>
        </div>
      </div>
    </div>
  )
}
