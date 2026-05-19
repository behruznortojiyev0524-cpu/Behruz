import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import SlideHeader from '../ui/SlideHeader.jsx'

const data = [
  { yil: '2022', tushum: 24.5 },
  { yil: '2023', tushum: 29.9 },
  { yil: '2024', tushum: 35.4 },
  { yil: '2025', tushum: 42.0 },
]

const KPI = [
  { v: "29.9 trln", l: "2023-yil JSHDS", s: "so'm" },
  { v: "35.4 trln", l: "2024-yil JSHDS", s: "so'm" },
  { v: "~42 trln",  l: "2025-yil prognoz", s: "so'm" },
  { v: "12%",       l: "Yagona stavka", s: "barcha daromadlar" },
]

export default function Slide02_Dolzarblik({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={2} total={total} title="Mavzuning dolzarbligi" subtitle="O'zbekistonda JSHDS tushumlari barqaror o'sish dinamikasida" />

      <div className="flex-1 grid grid-cols-2 gap-6 px-10 py-5 overflow-hidden">
        {/* Left — text */}
        <div className="flex flex-col gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
            <h3 className="text-gold-400 font-bold text-sm uppercase tracking-wider mb-3">Muammo bayoni</h3>
            <ul className="space-y-2.5 text-sm text-blue-100/80 leading-relaxed">
              {[
                "JSHDS davlat budjeti daromadlarining muhim manbayi — 2024-yilda 35.4 trln so'm",
                "Soliq qonunchiligi muntazam o'zgarmoqda — 2018 yildan buyon yirik islohotlar",
                "Korxonalarda noto'g'ri hisoblangan soliq jarima va peniyaga olib keladi",
                "Raqamli texnologiyalar joriy etilishi — yangi bilim va malakalarga ehtiyoj",
                "Norasmiy bandlikni kamaytirish — JSHDS soliq bazasini kengaytiradi",
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="text-gold-400 font-bold mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-3">
            {KPI.map((k, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-xl font-extrabold text-gold-400">{k.v}</div>
                <div className="text-xs text-blue-200/60 mt-0.5">{k.l}</div>
                <div className="text-xs text-blue-200/40">{k.s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — chart */}
        <div className="flex flex-col gap-3">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1 flex flex-col">
            <h3 className="text-sm font-semibold text-blue-200/70 mb-4">
              O'zbekiston JSHDS tushumlari (trln so'm)
            </h3>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#f5c842" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f5c842" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="yil" tick={{ fill: '#93c5fd', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#93c5fd', fontSize: 11 }} axisLine={false} tickLine={false} domain={[20, 45]} />
                  <Tooltip
                    contentStyle={{ background: '#0e2046', border: '1px solid #1e3a6e', borderRadius: 8, color: '#fff' }}
                    formatter={(v) => [`${v} trln so'm`, 'JSHDS']}
                  />
                  <Area type="monotone" dataKey="tushum" stroke="#f5c842" strokeWidth={2.5}
                    fill="url(#grad1)" dot={{ r: 4, fill: '#f5c842', strokeWidth: 0 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-blue-600/10 border border-blue-400/20 rounded-xl px-5 py-3 text-sm text-blue-100/80">
            <span className="text-blue-300 font-semibold">Xalqaro tajriba: </span>
            Rivojlangan mamlakatlarda JSHDS budjet daromadlarining 25–50% ni tashkil etadi. O'zbekistonda bu ko'rsatkich 13% atrofida — kengaytirish imkoniyati katta.
          </div>
        </div>
      </div>
    </div>
  )
}
