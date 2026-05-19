import { X } from 'lucide-react'

const SLIDE_NAMES = [
  "Titul slayd",
  "Dolzarblik",
  "Maqsad va vazifalar",
  "Ob'ekt va predmet",
  "Korxona tavsifi",
  "Moliyaviy tahlil",
  "Huquqiy asoslar",
  "Xorijiy tajriba",
  "JSHDS hisoblash",
  "Hisobot va nazorat",
  "Daromadlar tahlili",
  "Muammolar",
  "Takomillashtirish",
  "Xulosa va tavsiyalar",
]

export default function SlideOverview({ current, total, onSelect, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-navy-900/95 backdrop-blur-sm flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-10 py-5 border-b border-white/10">
        <h2 className="text-white font-bold text-lg">Slaydlar ko'rinishi</h2>
        <button onClick={onClose} className="text-blue-200/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
          <X size={20} />
        </button>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-auto p-10">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => { onSelect(i); onClose() }}
              className={`
                aspect-video rounded-xl border-2 flex flex-col items-center justify-center gap-1
                transition-all hover:scale-105 active:scale-100 p-3
                ${current === i
                  ? 'border-gold-400 bg-gold-500/15'
                  : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'}
              `}
            >
              <span className={`text-xs font-bold ${current === i ? 'text-gold-400' : 'text-blue-200/50'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-xs text-center text-white/70 leading-tight">
                {SLIDE_NAMES[i] || `Slayd ${i + 1}`}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
