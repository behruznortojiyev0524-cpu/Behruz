import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, Legend,
  PieChart, Pie, Cell,
} from 'recharts'
import SlideHeader from '../ui/SlideHeader.jsx'
import { XARAJAT_PIE_2025 } from '../../data/index.js'

const DAROMAD_TARKIB = [
  { tur: "Asosiy ish haqi",  pct: 68, color: "#1e3a6e" },
  { tur: "Qo'shimcha",       pct: 15, color: "#2563eb" },
  { tur: "Mukofotlar",       pct: 10, color: "#60a5fa" },
  { tur: "Moddiy yordam",    pct: 4,  color: "#f5c842" },
  { tur: "Boshqa",           pct: 3,  color: "#64748b" },
]

const BAZA_TAHLIL = [
  { yil: '2023', jamDaromad: 100, soliqBaza: 88, jshds: 10.6 },
  { yil: '2024', jamDaromad: 118, soliqBaza: 104, jshds: 12.5 },
  { yil: '2025', jamDaromad: 135, soliqBaza: 120, jshds: 14.4 },
]

export default function Slide11_Daromadlar({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={11} total={total} title="Daromadlar tarkibi va soliq bazasi tahlili" subtitle="Xodimlar daromadlari tarkibi, dinamikasi va soliq bazasi bilan bog'liqligi" />

      <div className="flex-1 grid grid-cols-3 gap-5 px-10 py-4 overflow-hidden">
        {/* Pie — tarkib */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col">
          <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">Ish haqi tarkibi (taxminiy)</h3>
          <div style={{ height: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={DAROMAD_TARKIB} dataKey="pct" nameKey="tur" cx="50%" cy="50%"
                  innerRadius={45} outerRadius={70} paddingAngle={3}>
                  {DAROMAD_TARKIB.map((d, i) => <Cell key={i} fill={d.color} />)}
                </Pie>
                <Tooltip
                  contentStyle={{ background: '#0e2046', border: '1px solid #1e3a6e', borderRadius: 8, color: '#fff', fontSize: 12 }}
                  formatter={(v, n) => [`${v}%`, n]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            {DAROMAD_TARKIB.map((d, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: d.color }} />
                <span className="text-blue-200/70 flex-1">{d.tur}</span>
                <span className="font-bold text-white">{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar — indeksli o'sish */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col">
          <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">Daromad va soliq bazasi o'sishi (indeks)</h3>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BAZA_TAHLIL} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="yil" tick={{ fill: '#93c5fd', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#93c5fd', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#0e2046', border: '1px solid #1e3a6e', borderRadius: 8, color: '#fff', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 10, color: '#93c5fd' }}
                  formatter={v => ({ jamDaromad: 'Jami daromad', soliqBaza: 'Soliq bazasi' }[v] || v)} />
                <Bar dataKey="jamDaromad" fill="#1e3a6e" radius={[3,3,0,0]} name="jamDaromad" />
                <Bar dataKey="soliqBaza"  fill="#f5c842" radius={[3,3,0,0]} name="soliqBaza" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tafovut tahlili */}
        <div className="flex flex-col gap-3">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col flex-1">
            <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">Soliq bazasi tahlili — bosqichlar</h3>
            <div className="flex flex-col gap-2 text-xs">
              {[
                { step: "1", t: "Jami daromad aniqlash",    d: "Barcha to'lovlar yig'indisi" },
                { step: "2", t: "Ozod miqdorlar ajratish",  d: "SK 369-modda ro'yxatiga ko'ra" },
                { step: "3", t: "Soliq bazasi hisoblash",   d: "Jami – Ozod = Baza" },
                { step: "4", t: "Soliq yukini baholash",    d: "JSHDS / Soliq bazasi × 100%" },
                { step: "5", t: "Tafovutni aniqlash",       d: "Jami daromad va soliq bazasi farqi" },
                { step: "6", t: "Ichki nazorat xulosasi",   d: "Farqlarni hujjatlar bilan solishtirish" },
              ].map((s, i) => (
                <div key={i} className="flex gap-2 border-b border-white/5 pb-1.5 last:border-0">
                  <span className="text-gold-400 font-bold w-4 flex-shrink-0">{s.step}.</span>
                  <div>
                    <span className="font-semibold text-white">{s.t}: </span>
                    <span className="text-blue-200/60">{s.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gold-500/10 border border-gold-400/30 rounded-xl p-3 text-xs text-blue-100/70">
            <span className="text-gold-400 font-semibold">Muhim: </span>
            Jami daromad o'sishi har doim soliq bazasining aynan shu darajada o'sishini anglatmaydi. Ozod miqdorlar ulushi ortsa, tafovut kengayadi.
          </div>
        </div>
      </div>
    </div>
  )
}
