import SlideHeader from '../ui/SlideHeader.jsx'
import { MAQSAD, VAZIFALAR } from '../../data/index.js'

export default function Slide03_Maqsad({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={3} total={total} title="Maqsad va vazifalar" />

      <div className="flex-1 grid grid-cols-5 gap-5 px-8 py-4 overflow-hidden bg-slate-50">
        {/* Maqsad */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="rounded-2xl border p-6 flex-1 shadow-sm"
            style={{ background: '#f8faff', borderColor: '#c7d7f5' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-sm text-gold-400"
                style={{ background: '#0c2461' }}>M</span>
              <h3 className="text-xs font-black uppercase tracking-wider" style={{ color: '#0c2461' }}>
                Bitiruv malakaviy ishining maqsadi
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{MAQSAD}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm shadow-sm">
            <span className="font-bold text-xs uppercase tracking-wider" style={{ color: '#0c2461' }}>O'rganish ob'ekti: </span>
            <span className="text-slate-600">Bardanko'l yo'llardan foydalanish korxonasi</span>
          </div>
        </div>

        {/* Vazifalar */}
        <div className="col-span-3 bg-white border border-slate-100 rounded-2xl p-6 flex flex-col shadow-sm">
          <h3 className="text-xs font-black uppercase tracking-wider mb-4 text-slate-500">
            Bitiruv malakaviy ishining vazifalariga quyidagilar kiradi
          </h3>
          <div className="flex flex-col gap-2.5 flex-1 overflow-auto thin-scroll">
            {VAZIFALAR.map((v, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-gold-400 font-black text-sm"
                  style={{ background: '#0c2461' }}>
                  {i + 1}
                </span>
                <p className="text-sm text-slate-600 leading-relaxed pt-0.5">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
