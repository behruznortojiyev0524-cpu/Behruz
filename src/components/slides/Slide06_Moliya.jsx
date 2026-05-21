import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, Legend,
  ResponsiveContainer, CartesianGrid, LabelList,
} from 'recharts'
import SlideHeader from '../ui/SlideHeader.jsx'
import { BALANS_AKTIV, DAROMAD } from '../../data/index.js'

const fmt   = (v) => `${(v / 1000).toFixed(0)}`
const fmtFull = (v) => `${(v / 1000).toFixed(0)} mlrd`
const TT = {
  background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
  color: '#1e293b', boxShadow: '0 8px 24px rgba(0,0,0,0.10)', fontSize: 12, padding: '10px 14px',
}

export default function Slide06_Moliya({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={6} total={total}
        title="Moliyaviy tahlil (2023–2025)"
        subtitle="Balans aktivi va daromad ko'rsatkichlari dinamikasi (ming so'm)" />

      {/* Stat strip */}
      <div className="flex gap-3 px-8 pt-4 pb-2 bg-white">
        {[
          { l: "2023 aktiv jami", v: "74.5 mlrd", c: false },
          { l: "2024 aktiv jami", v: "90.0 mlrd", c: false },
          { l: "2025 aktiv jami", v: "137.0 mlrd", c: true },
          { l: "Sof tushum o'sishi", v: "+221%", c: true },
          { l: "2025 yalpi foyda", v: "6.2 mlrd", c: false },
          { l: "2025 sof foyda",   v: "151 mln", warn: true },
        ].map((k, i) => (
          <div key={i} className="flex-1 rounded-xl px-3 py-2 border text-center"
            style={k.c
              ? { background: '#0c2461', borderColor: '#0c2461' }
              : k.warn
                ? { background: '#fef2f2', borderColor: '#fecaca' }
                : { background: '#f8faff', borderColor: '#dde8ff' }}>
            <div className="text-base font-black"
              style={{ color: k.c ? '#f5c842' : k.warn ? '#dc2626' : '#0c2461' }}>{k.v}</div>
            <div className="text-xs mt-0.5"
              style={{ color: k.c ? 'rgba(147,197,253,0.7)' : '#94a3b8' }}>{k.l}</div>
          </div>
        ))}
      </div>

      {/* Charts — take all remaining height */}
      <div className="flex-1 grid grid-cols-2 gap-4 px-8 pb-4 overflow-hidden bg-white" style={{ minHeight: 0 }}>

        {/* Balans aktivi stacked bar */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col shadow-sm overflow-hidden" style={{ minHeight: 0 }}>
          <div className="flex items-center justify-between mb-3 flex-shrink-0">
            <h3 className="text-sm font-black" style={{ color: '#0c2461' }}>Balans aktivi tarkibi</h3>
            <span className="text-xs text-slate-400 font-medium">mlrd so'm</span>
          </div>
          <div className="flex-1" style={{ minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BALANS_AKTIV} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
                barCategoryGap="35%">
                <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="yil"
                  tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 600 }}
                  axisLine={false} tickLine={false} tickMargin={10} />
                <YAxis tickFormatter={fmt}
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={false} tickLine={false} tickMargin={8}
                  label={{ value: "mlrd so'm", angle: -90, position: 'insideLeft', fill: '#cbd5e1', fontSize: 10, dy: 40 }} />
                <Tooltip contentStyle={TT}
                  formatter={(v, n) => [fmtFull(v), n === 'uzok' ? 'Uzoq muddatli aktivlar' : 'Joriy aktivlar']} />
                <Legend
                  wrapperStyle={{ fontSize: 12, color: '#64748b', paddingTop: 8 }}
                  formatter={(v) => v === 'uzok' ? 'Uzoq muddatli' : 'Joriy aktivlar'} />
                <Bar dataKey="uzok"  fill="#0c2461" radius={[0,0,0,0]} name="uzok" stackId="a" />
                <Bar dataKey="joriy" fill="#3b82f6" radius={[6,6,0,0]} name="joriy" stackId="a">
                  <LabelList dataKey="jami" position="top" formatter={v => fmtFull(v)}
                    style={{ fill: '#0c2461', fontSize: 11, fontWeight: 700 }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tushum va foyda line chart */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col shadow-sm overflow-hidden" style={{ minHeight: 0 }}>
          <div className="flex items-center justify-between mb-3 flex-shrink-0">
            <h3 className="text-sm font-black" style={{ color: '#0c2461' }}>Tushum va foyda dinamikasi</h3>
            <span className="text-xs text-slate-400 font-medium">mlrd so'm</span>
          </div>
          <div className="flex-1" style={{ minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={DAROMAD} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="yil"
                  tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 600 }}
                  axisLine={false} tickLine={false} tickMargin={10} />
                <YAxis tickFormatter={fmt}
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={false} tickLine={false} tickMargin={8} />
                <Tooltip contentStyle={TT}
                  formatter={(v, n) => [fmtFull(v), ({ tushum: 'Sof tushum', yalpiFoyda: 'Yalpi foyda', sofFoyda: 'Sof foyda' }[n] || n)]} />
                <Legend wrapperStyle={{ fontSize: 12, color: '#64748b', paddingTop: 8 }}
                  formatter={(v) => ({ tushum: 'Sof tushum', yalpiFoyda: 'Yalpi foyda', sofFoyda: 'Sof foyda' }[v] || v)} />
                <Line type="monotone" dataKey="tushum"
                  stroke="#0c2461" strokeWidth={3}
                  dot={{ r: 5, fill: '#0c2461', stroke: '#fff', strokeWidth: 2 }}
                  activeDot={{ r: 7 }} />
                <Line type="monotone" dataKey="yalpiFoyda"
                  stroke="#2563eb" strokeWidth={2.5}
                  dot={{ r: 4, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }}
                  activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="sofFoyda"
                  stroke="#ef4444" strokeWidth={2} strokeDasharray="6 3"
                  dot={{ r: 4, fill: '#ef4444', stroke: '#fff', strokeWidth: 2 }}
                  activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-shrink-0 mt-2 text-xs text-slate-400 text-center">
            Manba: Bardanko'l YFK 2023–2025-yillar moliyaviy hisobotlari asosida
          </div>
        </div>
      </div>
    </div>
  )
}
