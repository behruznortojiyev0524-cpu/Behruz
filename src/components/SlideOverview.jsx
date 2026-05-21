import { X } from 'lucide-react'

const SLIDE_NAMES = [
  "Titul slayd",
  "Dolzarblik",
  "Maqsad va vazifalar",
  "Ob'ekt va predmet",
  "Korxona tavsifi",
  "Moliyaviy tahlil",
  "Huquqiy asoslar",
  "JSHDS hisoblash",
  "Hisobot va nazorat",
  "Daromadlar tahlili",
  "Xorijiy tajriba",
  "Muammolar",
  "Xulosa va tavsiyalar",
  "Takomillashtirish",
]

export default function SlideOverview({ current, total, onSelect, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-10 py-5 bg-white border-b border-slate-200">
        <div className="flex items-center gap-3">
          <h2 className="text-slate-800 font-black text-lg">Slaydlar ko'rinishi</h2>
          <span className="text-xs bg-slate-100 text-slate-500 font-semibold px-2.5 py-1 rounded-full">{total} slayd</span>
        </div>
        <button onClick={onClose}
          className="text-slate-400 hover:text-slate-700 transition-colors p-2 hover:bg-slate-100 rounded-xl">
          <X size={20} />
        </button>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-auto p-8 bg-slate-50">
        <div className="grid grid-cols-5 gap-4 max-w-6xl mx-auto">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => { onSelect(i); onClose() }}
              className={`
                aspect-video rounded-2xl border-2 flex flex-col items-center justify-center gap-1.5
                transition-all hover:scale-105 active:scale-100 p-3 shadow-sm
                ${current === i
                  ? 'border-[#0c2461] bg-[#0c2461]'
                  : 'border-slate-200 bg-white hover:border-slate-400 hover:shadow-md'}
              `}
            >
              <span className={`text-xs font-black ${current === i ? 'text-gold-400' : 'text-slate-400'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`text-xs text-center leading-tight ${current === i ? 'text-white/90' : 'text-slate-600'}`}>
                {SLIDE_NAMES[i] || `Slayd ${i + 1}`}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
