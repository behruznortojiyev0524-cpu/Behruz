import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, Legend,
  ResponsiveContainer, CartesianGrid,
} from 'recharts'
import SlideHeader from '../ui/SlideHeader.jsx'
import { BALANS_AKTIV, DAROMAD } from '../../data/index.js'

const fmt = (v) => `${(v / 1000).toFixed(0)} mlrd`

export default function Slide06_Moliya({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={6} total={total} title="Moliyaviy tahlil (2023–2025)" subtitle="Balans aktivi va daromad ko'rsatkichlari dinamikasi (ming so'm)" />

      <div className="flex-1 grid grid-cols-2 gap-5 px-10 py-4 overflow-hidden">
        {/* Balans aktivi */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col">
          <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">
            Balans aktivi tarkibi (mlrd so'm)
          </h3>
          {/* KPIs */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { l: "2023", v: "74.5 mlrd" },
              { l: "2024", v: "90.0 mlrd" },
              { l: "2025", v: "137.0 mlrd", accent: true },
            ].map((k, i) => (
              <div key={i} className={`rounded-xl px-3 py-2 border text-center ${k.accent ? 'border-gold-400/30 bg-gold-500/10' : 'border-white/10 bg-white/5'}`}>
                <div className={`text-base font-extrabold ${k.accent ? 'text-gold-400' : 'text-white'}`}>{k.v}</div>
                <div className="text-xs text-blue-200/50">{k.l}-yil</div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BALANS_AKTIV} margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="yil" tick={{ fill: '#93c5fd', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={fmt} tick={{ fill: '#93c5fd', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: '#0e2046', border: '1px solid #1e3a6e', borderRadius: 8, color: '#fff', fontSize: 12 }}
                  formatter={(v, n) => [`${v.toLocaleString()} ming so'm`, n === 'uzok' ? 'Uzoq muddatli' : 'Joriy aktivlar']}
                />
                <Legend wrapperStyle={{ fontSize: 11, color: '#93c5fd' }}
                  formatter={(v) => v === 'uzok' ? 'Uzoq muddatli' : 'Joriy aktivlar'} />
                <Bar dataKey="uzok"  fill="#1e3a6e" radius={[4,4,0,0]} name="uzok" />
                <Bar dataKey="joriy" fill="#f5c842" radius={[4,4,0,0]} name="joriy" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daromad */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col">
          <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">
            Tushum va foyda dinamikasi (mlrd so'm)
          </h3>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { l: "Sof tushum o'sishi", v: "+221%", accent: true },
              { l: "2025 yalpi foyda",   v: "6.2 mlrd" },
              { l: "2025 sof foyda",     v: "151 mln", warn: true },
            ].map((k, i) => (
              <div key={i} className={`rounded-xl px-3 py-2 border text-center ${k.accent ? 'border-gold-400/30 bg-gold-500/10' : k.warn ? 'border-red-400/20 bg-red-500/5' : 'border-white/10 bg-white/5'}`}>
                <div className={`text-base font-extrabold ${k.accent ? 'text-gold-400' : k.warn ? 'text-red-400' : 'text-white'}`}>{k.v}</div>
                <div className="text-xs text-blue-200/50">{k.l}</div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={DAROMAD} margin={{ top: 0, right: 10, left: -15, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="yil" tick={{ fill: '#93c5fd', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={fmt} tick={{ fill: '#93c5fd', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: '#0e2046', border: '1px solid #1e3a6e', borderRadius: 8, color: '#fff', fontSize: 12 }}
                  formatter={(v) => [`${v.toLocaleString()} ming so'm`]}
                />
                <Legend wrapperStyle={{ fontSize: 11, color: '#93c5fd' }}
                  formatter={(v) => ({ tushum: 'Sof tushum', yalpiFoyda: 'Yalpi foyda', sofFoyda: 'Sof foyda' }[v] || v)} />
                <Line type="monotone" dataKey="tushum"     stroke="#f5c842" strokeWidth={2.5} dot={{ r: 4, fill: '#f5c842' }} />
                <Line type="monotone" dataKey="yalpiFoyda" stroke="#60a5fa" strokeWidth={2}   dot={{ r: 3, fill: '#60a5fa' }} />
                <Line type="monotone" dataKey="sofFoyda"   stroke="#f87171" strokeWidth={2}   dot={{ r: 3, fill: '#f87171' }} strokeDasharray="5 3" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="px-10 pb-4">
        <div className="text-xs text-blue-200/40 text-center">
          Manba: Bardanko'l YFK 2023–2025-yillar moliyaviy hisobotlari asosida muallif tomonidan tuzilgan
        </div>
      </div>
    </div>
  )
}
