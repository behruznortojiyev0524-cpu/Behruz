import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Cell, CartesianGrid,
} from 'recharts'
import SlideHeader from '../ui/SlideHeader.jsx'
import { BUDJET_ULUSHI, STAVKA_TAQQOS } from '../../data/index.js'

export default function Slide08_Xorijiy({ total }) {
  const ulushData = BUDJET_ULUSHI.map(d => ({ mamlakat: d.mamlakat, ulush: d.ulush2025, color: d.color }))

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={8} total={total} title="Xorijiy tajriba" subtitle="AQSh, Germaniya, Rossiya va MDH davlatlari JSHDS tizimi taqqoslamasi (2025)" />

      <div className="flex-1 grid grid-cols-2 gap-5 px-10 py-4 overflow-hidden">
        {/* Left — budjet ulushi chart */}
        <div className="flex flex-col gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex-1 flex flex-col">
            <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">
              JSHDS ning budjet daromadlaridagi ulushi (% , 2025)
            </h3>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ulushData} layout="vertical" margin={{ top: 0, right: 30, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" horizontal={false} />
                  <XAxis type="number" tick={{ fill: '#93c5fd', fontSize: 11 }} domain={[0, 55]} tickFormatter={v => `${v}%`} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="mamlakat" tick={{ fill: '#e2e8f0', fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} width={90} />
                  <Tooltip
                    contentStyle={{ background: '#0e2046', border: '1px solid #1e3a6e', borderRadius: 8, color: '#fff', fontSize: 12 }}
                    formatter={v => [`${v}%`, 'Budjet ulushi']}
                  />
                  <Bar dataKey="ulush" radius={[0, 6, 6, 0]} label={{ position: 'right', fill: '#93c5fd', fontSize: 12, formatter: v => `${v}%` }}>
                    {ulushData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Tushumlar o'sishi */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-2">
              Tushumlar o'sishi 2023→2025 (indeks, 2023=100)
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {[
                { m: "AQSh",        v: "+21.8%", c: "#1d4ed8" },
                { m: "Germaniya",   v: "+5.5%",  c: "#2563eb" },
                { m: "Rossiya",     v: "+44.8%", c: "#dc2626" },
                { m: "O'zbekiston", v: "+40.3%", c: "#f5c842" },
              ].map((x, i) => (
                <div key={i} className="text-center rounded-xl py-2 px-1" style={{ background: `${x.c}22`, border: `1px solid ${x.c}44` }}>
                  <div className="text-sm font-extrabold" style={{ color: x.c }}>{x.v}</div>
                  <div className="text-xs text-blue-200/60 mt-0.5 leading-tight">{x.m}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — stavkalar taqqoslamasi */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col">
          <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">
            Soliq stavkalari taqqoslamasi
          </h3>
          <div className="flex flex-col gap-2 flex-1 overflow-auto thin-scroll">
            {STAVKA_TAQQOS.map((s, i) => {
              const isUz = s.mamlakat === "O'zbekiston"
              return (
                <div key={i} className={`rounded-xl p-3 border ${isUz ? 'border-gold-400/40 bg-gold-500/10' : 'border-white/10 bg-white/5'}`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-sm font-bold ${isUz ? 'text-gold-400' : 'text-white'}`}>{s.mamlakat}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${s.tur === 'Proporsional' ? 'bg-gold-500/20 text-gold-400' : 'bg-blue-500/20 text-blue-300'}`}>
                      {s.tur}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex-1 bg-white/5 rounded-lg h-2 overflow-hidden">
                      <div className="h-full rounded-lg bg-gradient-to-r from-blue-500 to-gold-400"
                        style={{ width: `${(s.max / 45) * 100}%` }} />
                    </div>
                    <span className="text-xs text-blue-200/60 w-20 text-right">
                      {s.min === s.max ? `${s.min}%` : `${s.min}% – ${s.max}%`}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-3 bg-blue-600/10 border border-blue-400/20 rounded-xl px-3 py-2.5 text-xs text-blue-100/70">
            <span className="font-semibold text-blue-300">Xulosa: </span>
            O'zbekiston yagona 12% proporsional stavkani saqlamoqda. MDH (Ozarbayjon, Qozog'iston, Belarus) esa progressiv ikki bosqichli tizimga o'tgan. Budjet ulushini oshirish uchun progressiv elementlar joriy etish — tahlil etilgan mamlakatlardagi asosiy trend.
          </div>
        </div>
      </div>
    </div>
  )
}
