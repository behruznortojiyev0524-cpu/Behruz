export default function SlideHeader({ number, title, subtitle, total }) {
  return (
    <div className="flex-shrink-0 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c2461 0%, #1a3a7e 60%, #1e4499 100%)' }}>
      {/* Gold bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, #f5c842 0%, #f5c842 60%, transparent 100%)' }} />
      {/* Subtle right glow */}
      <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(245,200,66,0.07), transparent)' }} />

      <div className="flex items-start justify-between px-10 pt-5 pb-5 relative z-10">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2.5">
            {/* Slide number badge */}
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0"
              style={{ background: 'rgba(245,200,66,0.18)', border: '1.5px solid rgba(245,200,66,0.45)' }}>
              <span className="text-gold-400 font-black text-sm leading-none">{String(number).padStart(2, '0')}</span>
            </span>
            <div className="w-px h-5 bg-white/15" />
            <span className="text-xs text-blue-200/55 font-semibold uppercase tracking-widest">
              Bardanko'l YFK &nbsp;·&nbsp; Bitiruv malakaviy ishi &nbsp;·&nbsp; 2025
            </span>
          </div>
          <h2 className="text-[21px] font-black text-white leading-tight tracking-tight">{title}</h2>
          {subtitle && (
            <p className="text-sm text-blue-200/60 mt-1 font-medium leading-snug">{subtitle}</p>
          )}
        </div>

        <div className="flex-shrink-0 ml-8 text-right opacity-40">
          <div className="text-xs text-blue-200 font-mono tracking-widest">
            {String(number).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  )
}
