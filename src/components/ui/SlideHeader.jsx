// Consistent slide header with slide number badge
export default function SlideHeader({ number, title, subtitle, total }) {
  return (
    <div className="flex items-start justify-between px-10 pt-7 pb-4 border-b border-white/10">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-bold tracking-widest text-gold-400 uppercase">
            {String(number).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="w-8 h-px bg-gold-400/50" />
        </div>
        <h2 className="text-2xl font-bold text-white leading-tight">{title}</h2>
        {subtitle && (
          <p className="text-sm text-blue-200/70 mt-0.5">{subtitle}</p>
        )}
      </div>
      {/* Mini logo mark */}
      <div className="flex items-center gap-2 opacity-60">
        <div className="w-2 h-2 rounded-full bg-gold-400" />
        <span className="text-xs text-blue-200/60 font-medium">Bardanko'l YFK</span>
      </div>
    </div>
  )
}
