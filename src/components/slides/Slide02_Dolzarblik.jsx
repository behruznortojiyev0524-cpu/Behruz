import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, ReferenceLine,
} from 'recharts'
import SlideHeader from '../ui/SlideHeader.jsx'

const data = [
  { yil: '2022', tushum: 24.5 },
  { yil: '2023', tushum: 29.9 },
  { yil: '2024', tushum: 35.4 },
  { yil: '2025', tushum: 42.0 },
]

const TT = {
  background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
  color: '#1e293b', boxShadow: '0 8px 24px rgba(0,0,0,0.10)', fontSize: 13, padding: '10px 14px',
}

const CustomDot = (props) => {
  const { cx, cy, value } = props
  return (
    <g>
      <circle cx={cx} cy={cy} r={7} fill="#0c2461" />
      <circle cx={cx} cy={cy} r={4} fill="#fff" />
      <circle cx={cx} cy={cy} r={2} fill="#0c2461" />
    </g>
  )
}

export default function Slide02_Dolzarblik({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={2} total={total}
        title="Bitiruv malakaviy ish mavzusining dolzarbligi"
        subtitle="O'zbekistonda JSHDS tushumlari barqaror o'sish dinamikasida" />

      {/* KPI strip */}
      <div className="flex gap-3 px-8 pt-4 pb-2 bg-white">
        {[
          { v: "29.9 trln", l: "2023-yil JSHDS", accent: false },
          { v: "35.4 trln", l: "2024-yil JSHDS", accent: false },
          { v: "~42 trln",  l: "2025-yil prognoz", accent: true },
          { v: "12%",       l: "Yagona soliq stavkasi", accent: false },
        ].map((k, i) => (
          <div key={i} className="flex-1 rounded-xl px-4 py-2.5 border flex flex-col"
            style={k.accent
              ? { background: '#0c2461', borderColor: '#0c2461' }
              : { background: '#f8faff', borderColor: '#dde8ff' }}>
            <span className="text-xl font-black" style={{ color: k.accent ? '#f5c842' : '#0c2461' }}>{k.v}</span>
            <span className="text-xs mt-0.5" style={{ color: k.accent ? 'rgba(147,197,253,0.7)' : '#64748b' }}>{k.l}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 grid grid-cols-5 gap-4 px-8 pb-4 bg-white overflow-hidden" style={{ minHeight: 0 }}>

        {/* Left: text */}
        <div className="col-span-2 flex flex-col gap-3 overflow-hidden" style={{ minHeight: 0 }}>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex-1 overflow-auto thin-scroll">
            <h3 className="text-xs font-black uppercase tracking-wider mb-4" style={{ color: '#0c2461' }}>
              Mavzuning dolzarbligi
            </h3>
            <ul className="space-y-3">
              {[
                "JSHDS davlat budjeti daromadlarining muhim manbayi — 2024-yilda 35.4 trln so'm",
                "Soliq qonunchiligi muntazam o'zgarmoqda — 2018 yildan buyon yirik islohotlar",
                "Korxonalarda noto'g'ri hisoblangan soliq jarima va peniyaga olib keladi",
                "Raqamli texnologiyalar joriy etilishi — yangi bilim va malakalarga ehtiyoj",
                "Norasmiy bandlikni kamaytirish — JSHDS soliq bazasini kengaytiradi",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-black mt-0.5"
                    style={{ background: '#0c2461' }}>{i + 1}</span>
                  <span className="text-sm text-slate-600 leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-xl px-4 py-3 text-sm text-slate-600 border"
              style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>
              <span className="text-blue-700 font-semibold">Xalqaro tajriba: </span>
              Rivojlangan mamlakatlarda JSHDS budjet daromadlarining 25–50%ni tashkil etadi. O'zbekistonda 13% — o'sish imkoniyati katta.
            </div>
          </div>
        </div>

        {/* Right: LARGE chart */}
        <div className="col-span-3 bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col shadow-sm overflow-hidden" style={{ minHeight: 0 }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-black" style={{ color: '#0c2461' }}>
              O'zbekiston JSHDS tushumlari dinamikasi
            </h3>
            <span className="text-xs px-3 py-1 rounded-full font-semibold"
              style={{ background: '#0c2461', color: '#f5c842' }}>trln so'm</span>
          </div>
          <div className="flex-1" style={{ minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#0c2461" stopOpacity={0.18} />
                    <stop offset="100%" stopColor="#0c2461" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" vertical={false} />
                <XAxis
                  dataKey="yil"
                  tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 600 }}
                  axisLine={false} tickLine={false}
                  tickMargin={10}
                />
                <YAxis
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  axisLine={false} tickLine={false}
                  domain={[18, 48]}
                  tickFormatter={v => `${v}`}
                  tickMargin={8}
                />
                <Tooltip
                  contentStyle={TT}
                  formatter={(v) => [`${v} trln so'm`, 'JSHDS tushumlari']}
                  labelStyle={{ fontWeight: 700, color: '#0c2461' }}
                />
                <ReferenceLine y={35.4} stroke="#0c2461" strokeDasharray="6 3" strokeOpacity={0.25} />
                <Area
                  type="monotone"
                  dataKey="tushum"
                  stroke="#0c2461"
                  strokeWidth={3}
                  fill="url(#areaGrad)"
                  dot={<CustomDot />}
                  activeDot={{ r: 8, fill: '#0c2461', stroke: '#fff', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
