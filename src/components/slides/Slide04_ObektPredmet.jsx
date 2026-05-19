import SlideHeader from '../ui/SlideHeader.jsx'
import { OBEKT, PREDMET, METODLAR } from '../../data/index.js'

export default function Slide04_ObektPredmet({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={4} total={total} title="Ob'ekt, predmet va metodlar" />

      <div className="flex-1 grid grid-cols-2 gap-6 px-10 py-5 overflow-hidden">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <Block color="gold" label="Tadqiqot ob'ekti">
            <p className="text-sm text-blue-100/80 leading-relaxed">{OBEKT}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Davlat muassasasi", "Toshkent viloyati", "Avtomobil yo'llari"].map(t => (
                <span key={t} className="text-xs bg-white/10 border border-white/10 rounded-full px-3 py-1 text-blue-200/70">{t}</span>
              ))}
            </div>
          </Block>

          <Block color="blue" label="Tadqiqot predmeti">
            <p className="text-sm text-blue-100/80 leading-relaxed">{PREDMET}</p>
          </Block>
        </div>

        {/* Right — methods */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
          <h3 className="text-sm font-bold text-blue-200/70 uppercase tracking-wider mb-4">Tadqiqot metodlari va manbalar</h3>
          <div className="flex flex-col gap-3 flex-1">
            {METODLAR.map((m, i) => (
              <div key={i} className="flex gap-3 items-start border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <div className="w-2 h-2 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-white mb-0.5">{m.nom}</div>
                  <div className="text-xs text-blue-200/60">{m.tavsif}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Ish tuzilmasi */}
          <div className="mt-4 bg-navy-800/50 rounded-xl px-4 py-3">
            <div className="text-xs text-gold-400 font-semibold mb-2 uppercase tracking-wider">Ish tuzilmasi</div>
            <div className="flex gap-2 text-xs">
              {["I Bob\nNazariy va huquqiy asos", "II Bob\nAmaliy tahlil", "III Bob\nTakomillashtirish"].map((b, i) => (
                <div key={i} className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-center text-blue-200/70 whitespace-pre-line leading-tight">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Block({ label, color, children }) {
  const border = color === 'gold' ? 'border-gold-400/30 bg-gold-500/5' : 'border-blue-400/20 bg-blue-600/5'
  const title  = color === 'gold' ? 'text-gold-400' : 'text-blue-300'
  return (
    <div className={`rounded-2xl border p-5 flex-1 ${border}`}>
      <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${title}`}>{label}</h3>
      {children}
    </div>
  )
}
