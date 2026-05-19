import SlideHeader from '../ui/SlideHeader.jsx'
import { MAQSAD, VAZIFALAR } from '../../data/index.js'

export default function Slide03_Maqsad({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={3} total={total} title="Maqsad va vazifalar" />

      <div className="flex-1 grid grid-cols-5 gap-6 px-10 py-5 overflow-hidden">
        {/* Maqsad — wider column */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="bg-gold-500/10 border border-gold-400/30 rounded-2xl p-6 flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center">
                <span className="text-navy-900 text-xs font-black">M</span>
              </div>
              <h3 className="text-gold-400 font-bold text-sm uppercase tracking-wider">Tadqiqot maqsadi</h3>
            </div>
            <p className="text-sm text-blue-100/85 leading-relaxed">{MAQSAD}</p>
          </div>

          {/* Ob'ekt / Predmet mini */}
          <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm">
            <span className="text-gold-400 font-semibold">Ob'ekt: </span>
            <span className="text-blue-100/70">Bardanko'l yo'llardan foydalanish korxonasi</span>
          </div>
        </div>

        {/* Vazifalar */}
        <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
          <h3 className="text-sm font-bold text-blue-200/70 uppercase tracking-wider mb-4">
            Tadqiqot vazifalari
          </h3>
          <div className="flex flex-col gap-3 flex-1 overflow-auto thin-scroll">
            {VAZIFALAR.map((v, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-navy-600 border border-white/10 flex items-center justify-center text-gold-400 font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-sm text-blue-100/80 leading-relaxed pt-0.5">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
