// Small KPI metric card
export default function KpiCard({ label, value, sub, accent = false, className = '' }) {
  return (
    <div
      className={`
        rounded-xl p-4 flex flex-col gap-1 border
        ${accent
          ? 'bg-gold-500/10 border-gold-400/30'
          : 'bg-white/5 border-white/10'}
        ${className}
      `}
    >
      <span className="text-xs text-blue-200/60 font-medium uppercase tracking-wider leading-tight">
        {label}
      </span>
      <span className={`text-2xl font-extrabold leading-none ${accent ? 'text-gold-400' : 'text-white'}`}>
        {value}
      </span>
      {sub && <span className="text-xs text-blue-200/50">{sub}</span>}
    </div>
  )
}
