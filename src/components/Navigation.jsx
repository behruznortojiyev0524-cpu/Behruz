import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid } from 'lucide-react'

export default function Navigation({ current, total, onPrev, onNext, onToggleOverview, isFullscreen, onToggleFullscreen }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-between px-10 py-3 bg-navy-900/80 border-t border-white/10">
      {/* Slide counter */}
      <div className="flex items-center gap-3">
        <span className="text-blue-200/50 text-sm font-medium">
          {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        {/* Progress bar */}
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold-400 rounded-full transition-all duration-300"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <NavBtn onClick={onToggleOverview} title="Slaydlar ko'rinishi (G)">
          <Grid size={16} />
        </NavBtn>
        <div className="w-px h-5 bg-white/10 mx-1" />
        <NavBtn onClick={onPrev} disabled={current === 0} title="Oldingi (←)">
          <ChevronLeft size={18} />
        </NavBtn>
        <NavBtn onClick={onNext} disabled={current === total - 1} title="Keyingi (→)">
          <ChevronRight size={18} />
        </NavBtn>
        <div className="w-px h-5 bg-white/10 mx-1" />
        <NavBtn onClick={onToggleFullscreen} title="To'liq ekran (F)">
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </NavBtn>
      </div>

      {/* Keyboard hint */}
      <div className="text-xs text-blue-200/30 hidden md:block">
        ← → navigatsiya &nbsp;·&nbsp; F to'liq ekran &nbsp;·&nbsp; G ko'rinish
      </div>
    </div>
  )
}

function NavBtn({ children, onClick, disabled, title }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        w-8 h-8 rounded-lg flex items-center justify-center transition-all
        ${disabled
          ? 'text-white/20 cursor-not-allowed'
          : 'text-blue-200/70 hover:bg-white/10 hover:text-white active:scale-95'}
      `}
    >
      {children}
    </button>
  )
}
