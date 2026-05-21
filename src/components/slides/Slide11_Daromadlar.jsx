import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  ResponsiveContainer, CartesianGrid, LabelList,
  PieChart, Pie, Cell, Sector,
} from 'recharts'
import SlideHeader from '../ui/SlideHeader.jsx'
import { useState } from 'react'

const DAROMAD_TARKIB = [
  { tur: "Asosiy ish haqi",  pct: 68, color: "#0c2461" },
  { tur: "Qo'shimcha",       pct: 15, color: "#1d4ed8" },
  { tur: "Mukofotlar",       pct: 10, color: "#60a5fa" },
  { tur: "Moddiy yordam",    pct: 4,  color: "#f5c842" },
  { tur: "Boshqa",           pct: 3,  color: "#94a3b8" },
]

const BAZA_TAHLIL = [
  { yil: '2023', "Jami daromad": 100, "Soliq bazasi": 88 },
  { yil: '2024', "Jami daromad": 118, "Soliq bazasi": 104 },
  { yil: '2025', "Jami daromad": 135, "Soliq bazasi": 120 },
]

const TT = {
  background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
  color: '#1e293b', boxShadow: '0 8px 24px rgba(0,0,0,0.10)', fontSize: 12, padding: '10px 14px',
}

const ActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, value, name } = props
  return (
    <g>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius + 8}
        startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <text x={cx} y={cy - 8} textAnchor="middle" fill="#0c2461" fontSize={22} fontWeight={900}>{value}%</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fill="#64748b" fontSize={11}>{name}</text>
    </g>
  )
}

export default function Slide11_Daromadlar({ total }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={10} total={total}
        title="Daromadlar tarkibi va soliq bazasi tahlili"
        subtitle="Xodimlar daromadlari tarkibi, dinamikasi va soliq bazasi bilan bog'liqligi" />

      <div className="flex-1 grid grid-cols-5 gap-4 px-8 py-4 overflow-hidden bg-slate-50" style={{ minHeight: 0 }}>

        {/* Left: Pie chart — 2 cols */}
        <div className="col-span-2 bg-white border border-slate-100 rounded-2xl p-4 flex flex-col shadow-sm overflow-hidden" style={{ minHeight: 0 }}>
          <div className="flex items-center justify-between mb-2 flex-shrink-0">
            <h3 className="text-sm font-black" style={{ color: '#0c2461' }}>Ish haqi tarkibi</h3>
            <span className="text-xs text-slate-400 italic">taxminiy, %</span>
          </div>
          <div className="flex-1" style={{ minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DAROMAD_TARKIB}
                  dataKey="pct"
                  nameKey="tur"
                  cx="50%" cy="45%"
                  innerRadius="38%"
                  outerRadius="62%"
                  paddingAngle={3}
                  activeIndex={activeIndex}
                  activeShape={ActiveShape}
                  onMouseEnter={(_, i) => setActiveIndex(i)}
                >
                  {DAROMAD_TARKIB.map((d, i) => <Cell key={i} fill={d.color} />)}
                </Pie>
                <Tooltip contentStyle={TT} formatter={(v, n) => [`${v}%`, n]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="flex-shrink-0 flex flex-col gap-1 mt-1">
            {DAROMAD_TARKIB.map((d, i) => (
              <div key={i}
                className="flex items-center gap-2 text-xs cursor-pointer px-2 py-1 rounded-lg transition-colors"
                style={activeIndex === i ? { background: '#f8faff' } : {}}
                onMouseEnter={() => setActiveIndex(i)}>
                <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: d.color }} />
                <span className="text-slate-600 flex-1">{d.tur}</span>
                <span className="font-black text-slate-800">{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle: Bar chart — 2 cols */}
        <div className="col-span-2 bg-white border border-slate-100 rounded-2xl p-4 flex flex-col shadow-sm overflow-hidden" style={{ minHeight: 0 }}>
          <div className="flex items-center justify-between mb-2 flex-shrink-0">
            <h3 className="text-sm font-black" style={{ color: '#0c2461' }}>Daromad va soliq bazasi o'sishi</h3>
            <span className="text-xs text-slate-400 font-medium">indeks, 2023=100</span>
          </div>
          <div className="flex-1" style={{ minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BAZA_TAHLIL} margin={{ top: 20, right: 10, left: -10, bottom: 8 }}
                barCategoryGap="30%">
                <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="yil"
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                  axisLine={false} tickLine={false} tickMargin={8} />
                <YAxis
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={false} tickLine={false} tickMargin={6}
                  domain={[80, 145]} />
                <Tooltip contentStyle={TT} />
                <Legend wrapperStyle={{ fontSize: 11, color: '#64748b', paddingTop: 6 }} />
                <Bar dataKey="Jami daromad" fill="#0c2461" radius={[4,4,0,0]}>
                  <LabelList dataKey="Jami daromad" position="top"
                    style={{ fill: '#0c2461', fontSize: 11, fontWeight: 700 }} />
                </Bar>
                <Bar dataKey="Soliq bazasi" fill="#3b82f6" radius={[4,4,0,0]}>
                  <LabelList dataKey="Soliq bazasi" position="top"
                    style={{ fill: '#1d4ed8', fontSize: 11, fontWeight: 700 }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Analysis — 1 col */}
        <div className="col-span-1 flex flex-col gap-3 overflow-hidden" style={{ minHeight: 0 }}>
          <div className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col flex-1 shadow-sm overflow-auto thin-scroll">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 flex-shrink-0">
              Tahlil bosqichlari
            </h3>
            <div className="flex flex-col gap-2 text-xs">
              {[
                { n: "1", t: "Jami daromad",    d: "Barcha to'lovlar yig'indisi" },
                { n: "2", t: "Ozod miqdorlar",  d: "SK 369-modda bo'yicha" },
                { n: "3", t: "Soliq bazasi",     d: "Jami – Ozod = Baza" },
                { n: "4", t: "Soliq yuki",       d: "JSHDS / Baza × 100%" },
                { n: "5", t: "Tafovut",          d: "Daromad va baza farqi" },
                { n: "6", t: "Nazorat xulosasi", d: "Hujjatlar bilan solishtiruv" },
              ].map((s, i) => (
                <div key={i} className="flex gap-2 border-b border-slate-100 pb-2 last:border-0">
                  <span className="w-5 h-5 rounded-lg flex items-center justify-center text-gold-400 font-black text-xs flex-shrink-0"
                    style={{ background: '#0c2461' }}>{s.n}</span>
                  <div>
                    <div className="font-semibold text-slate-800">{s.t}</div>
                    <div className="text-slate-400">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-slate-600 flex-shrink-0">
            <span className="text-amber-700 font-semibold">Muhim: </span>
            Daromad o'sishi = soliq bazasi o'sishi degani emas. Ozod miqdorlar ulushi ortsa, tafovut kengayadi.
          </div>
        </div>
      </div>
    </div>
  )
}
