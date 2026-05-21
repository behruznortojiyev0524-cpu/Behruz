import SlideHeader from '../ui/SlideHeader.jsx'
import { OBEKT, PREDMET, METODLAR } from '../../data/index.js'

export default function Slide04_ObektPredmet({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={4} total={total} title="Ob'ekt, predmet va manbalar" />

      <div className="flex-1 grid grid-cols-2 gap-5 px-8 py-4 overflow-hidden bg-slate-50">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <Block color="gold" label="Bitiruv malakaviy ishining o'rganish ob'ekti">
            <p className="text-sm text-slate-600 leading-relaxed">{OBEKT}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Davlat muassasasi", "Toshkent viloyati", "Avtomobil yo'llari"].map(t => (
                <span key={t} className="text-xs bg-slate-100 border border-slate-200 rounded-full px-3 py-1 text-slate-600">{t}</span>
              ))}
            </div>
          </Block>

          <Block color="blue" label="Bitiruv malakaviy ishining o'rganish predmeti">
            <p className="text-sm text-slate-600 leading-relaxed">{PREDMET}</p>
          </Block>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col flex-1 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4">
              Bitiruv malakaviy ish mavzusini yoritishda quyidagi manbalardan foydalaniladi
            </h3>
            <div className="flex flex-col gap-3 flex-1">
              {METODLAR.map((m, i) => (
                <div key={i} className="flex gap-3 items-start border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#0c2461' }} />
                  <div>
                    <div className="text-sm font-semibold text-slate-800 mb-0.5">{m.nom}</div>
                    <div className="text-xs text-slate-500">{m.tavsif}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarkibiy tuzilma */}
          <div className="bg-white border border-slate-100 rounded-xl px-4 py-3.5 shadow-sm">
            <div className="text-xs font-black uppercase tracking-wider mb-2.5 text-slate-500">
              Bitiruv malakaviy ishning tarkibiy tuzilmasi quyidagilardan iborat
            </div>
            <div className="flex gap-2 text-xs">
              {["I Bob\nNazariy va huquqiy asos", "II Bob\nAmaliy tahlil", "III Bob\nTakomillashtirish"].map((b, i) => (
                <div key={i} className="flex-1 rounded-xl px-3 py-2.5 text-center text-slate-600 whitespace-pre-line leading-tight border border-slate-200"
                  style={{ background: '#f8faff' }}>
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
  const styles = color === 'gold'
    ? { bg: '#fffbeb', border: '#fde68a', head: '#92400e' }
    : { bg: '#eff6ff', border: '#bfdbfe', head: '#1d4ed8' }
  return (
    <div className="rounded-2xl border p-5 flex-1 shadow-sm" style={{ background: styles.bg, borderColor: styles.border }}>
      <h3 className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: styles.head }}>{label}</h3>
      {children}
    </div>
  )
}
