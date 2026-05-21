import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell,
  ResponsiveContainer, CartesianGrid, LabelList,
} from 'recharts'
import SlideHeader from '../ui/SlideHeader.jsx'
import { BUDJET_ULUSHI, STAVKA_TAQQOS } from '../../data/index.js'

const TT = {
  background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
  color: '#1e293b', boxShadow: '0 8px 24px rgba(0,0,0,0.10)', fontSize: 12, padding: '10px 14px',
}

const COLORS = ['#1d4ed8', '#2563eb', '#dc2626', '#0c2461']
const GROWTH = [
  { m: "AQSh",        v: "+21.8%", c: "#1d4ed8" },
  { m: "Germaniya",   v: "+5.5%",  c: "#2563eb" },
  { m: "Rossiya",     v: "+44.8%", c: "#dc2626" },
  { m: "O'zbekiston", v: "+40.3%", c: "#0c2461" },
]

export default function Slide08_Xorijiy({ total }) {
  const ulushData = BUDJET_ULUSHI.map((d, i) => ({
    mamlakat: d.mamlakat, ulush: d.ulush2025, color: COLORS[i] || '#0c2461',
  }))

  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={11} total={total}
        title="Xorijiy tajriba"
        subtitle="AQSh, Germaniya, Rossiya va MDH davlatlari JSHDS tizimi taqqoslamasi (2025)" />

      {/* Growth strip */}
      <div className="flex gap-3 px-8 pt-4 pb-2 bg-white flex-shrink-0">
        <div className="text-xs font-black uppercase tracking-wider text-slate-400 self-center mr-1 whitespace-nowrap">
          O'sish 2023→2025:
        </div>
        {GROWTH.map((x, i) => (
          <div key={i} className="flex-1 rounded-xl py-2 px-3 border text-center"
            style={{ background: `${x.c}0f`, borderColor: `${x.c}30` }}>
            <div className="text-base font-black" style={{ color: x.c }}>{x.v}</div>
            <div className="text-xs text-slate-500 mt-0.5">{x.m}</div>
          </div>
        ))}
      </div>

      {/* Main charts */}
      <div className="flex-1 grid grid-cols-2 gap-4 px-8 pb-4 overflow-hidden bg-white" style={{ minHeight: 0 }}>

        {/* Left: budjet ulushi — LARGE horizontal bar */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col shadow-sm overflow-hidden" style={{ minHeight: 0 }}>
          <div className="flex items-center justify-between mb-3 flex-shrink-0">
            <h3 className="text-sm font-black" style={{ color: '#0c2461' }}>
              JSHDS ning budjet daromadlaridagi ulushi
            </h3>
            <span className="text-xs text-slate-400 font-medium">%, 2025</span>
          </div>
          <div className="flex-1" style={{ minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ulushData} layout="vertical"
                margin={{ top: 8, right: 60, left: 10, bottom: 8 }}
                barCategoryGap="28%">
                <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" horizontal={false} />
                <XAxis type="number"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  domain={[0, 58]} tickFormatter={v => `${v}%`}
                  axisLine={false} tickLine={false} tickMargin={6} />
                <YAxis type="category" dataKey="mamlakat"
                  tick={{ fill: '#1e293b', fontSize: 13, fontWeight: 700 }}
                  axisLine={false} tickLine={false} width={95} />
                <Tooltip contentStyle={TT} formatter={v => [`${v}%`, 'Budjet ulushi']} />
                <Bar dataKey="ulush" radius={[0, 8, 8, 0]}>
                  {ulushData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  <LabelList dataKey="ulush" position="right"
                    formatter={v => `${v}%`}
                    style={{ fill: '#475569', fontSize: 13, fontWeight: 700 }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: stavkalar */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col shadow-sm overflow-hidden" style={{ minHeight: 0 }}>
          <h3 className="text-sm font-black mb-3 flex-shrink-0" style={{ color: '#0c2461' }}>
            Soliq stavkalari taqqoslamasi
          </h3>
          <div className="flex flex-col gap-2 flex-1 overflow-auto thin-scroll">
            {STAVKA_TAQQOS.map((s, i) => {
              const isUz = s.mamlakat === "O'zbekiston"
              return (
                <div key={i} className="rounded-xl p-3.5 border flex-shrink-0"
                  style={isUz
                    ? { background: '#0c2461', borderColor: 'rgba(245,200,66,0.35)' }
                    : { background: '#fff', borderColor: '#e2e8f0' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-bold ${isUz ? 'text-gold-400' : 'text-slate-800'}`}>
                      {s.mamlakat}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold
                        ${s.tur === 'Proporsional'
                          ? (isUz ? 'bg-gold-400/20 text-gold-400' : 'bg-amber-100 text-amber-700')
                          : (isUz ? 'bg-blue-400/20 text-blue-300' : 'bg-blue-100 text-blue-700')}`}>
                        {s.tur}
                      </span>
                      <span className={`text-sm font-black ${isUz ? 'text-gold-400' : 'text-slate-700'}`}>
                        {s.min === s.max ? `${s.min}%` : `${s.min}–${s.max}%`}
                      </span>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 rounded-full overflow-hidden"
                    style={{ background: isUz ? 'rgba(255,255,255,0.1)' : '#f1f5f9' }}>
                    <div className="h-full rounded-full transition-all"
                      style={{
                        width: `${(s.max / 50) * 100}%`,
                        background: isUz
                          ? 'linear-gradient(90deg, #f5c842, #fbbf24)'
                          : 'linear-gradient(90deg, #0c2461, #2563eb)',
                      }} />
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex-shrink-0 mt-3 bg-blue-50 border border-blue-200 rounded-xl px-3 py-2.5 text-xs text-slate-600">
            <span className="font-semibold text-blue-700">Xulosa: </span>
            O'zbekiston 12% proporsional stavkani saqlamoqda. MDH mamlakatlari progressiv tizimga o'tgan.
          </div>
        </div>
      </div>
    </div>
  )
}
