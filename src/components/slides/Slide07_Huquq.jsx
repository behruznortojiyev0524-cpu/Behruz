import SlideHeader from '../ui/SlideHeader.jsx'
import { SK_MODDALAR } from '../../data/index.js'

const HUJJATLAR = [
  { yil: "2018", raqam: "PF-5468",  mazmun: "Soliq siyosatini takomillashtirish konsepsiyasi — 12% yagona stavka asosi" },
  { yil: "2020", raqam: "O'RQ-599", mazmun: "Yangi Soliq kodeksi — JSHDSni to'liq qayta tartibga soldi" },
  { yil: "2022", raqam: "PF-101",   mazmun: "Norezidentlar uchun 12% yagona stavka (1-maydan)" },
  { yil: "2023", raqam: "VM 601",   mazmun: "JSHDS imtiyozlari bo'yicha ma'muriy reglament tasdiqlandi" },
  { yil: "2024", raqam: "O'RQ-1014",mazmun: "2025-yilga mo'ljallangan soliq va budjet siyosati o'zgarishlari" },
]

export default function Slide07_Huquq({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={7} total={total} title="Huquqiy asoslar" subtitle="Jismoniy shaxslar daromad solig'ini tartibga soluvchi normativ hujjatlar tizimi" />

      <div className="flex-1 grid grid-cols-5 gap-5 px-10 py-4 overflow-hidden">
        {/* SK moddalar */}
        <div className="col-span-3 flex flex-col">
          <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">
            Soliq kodeksi — JSHDS asosiy moddalari (XIII bo'lim)
          </h3>
          <div className="flex flex-col gap-2 flex-1 overflow-auto thin-scroll">
            {SK_MODDALAR.map((m, i) => (
              <div key={i} className="flex gap-3 items-start border-b border-white/5 pb-2 last:border-0">
                <span className="flex-shrink-0 bg-gold-500/20 border border-gold-400/30 text-gold-400 text-xs font-black rounded-lg px-2 py-1 min-w-[52px] text-center">
                  {m.modda}
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">{m.nomi}</div>
                  <div className="text-xs text-blue-200/65">{m.mazmun}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hujjatlar xronologiyasi */}
        <div className="col-span-2 flex flex-col">
          <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">
            Asosiy me'yoriy hujjatlar
          </h3>
          <div className="flex flex-col gap-3 flex-1">
            {HUJJATLAR.map((h, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-gold-400 bg-gold-500/10 border border-gold-400/30 rounded-lg px-2 py-1">{h.yil}</span>
                  {i < HUJJATLAR.length - 1 && <div className="w-px flex-1 bg-white/10 my-1" />}
                </div>
                <div className="pb-2">
                  <div className="text-xs font-bold text-blue-300">{h.raqam}</div>
                  <div className="text-xs text-blue-200/65 leading-snug mt-0.5">{h.mazmun}</div>
                </div>
              </div>
            ))}
          </div>

          {/* JSHDS stavkasi qutisi */}
          <div className="bg-gold-500/10 border border-gold-400/30 rounded-xl px-4 py-3 mt-2">
            <div className="text-xs text-gold-400 font-semibold mb-1">Amaldagi stavka (2025)</div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-extrabold text-gold-400">12%</span>
              <span className="text-xs text-blue-200/60 pb-1">— proporsional (SK 381-modda)</span>
            </div>
            <div className="text-xs text-blue-200/50 mt-1">5% — dividend va foizlar uchun</div>
          </div>
        </div>
      </div>
    </div>
  )
}
