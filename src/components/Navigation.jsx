import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid } from 'lucide-react'

export default function Navigation({ current, total, onPrev, onNext, onToggleOverview, isFullscreen, onToggleFullscreen }) {
  const pct = ((current + 1) / total) * 100

  return (
    <div className="flex-shrink-0 flex items-center justify-between px-10 py-2.5 bg-white border-t border-slate-200"
      style={{ boxShadow: '0 -1px 0 #e2e8f0' }}>
      {/* Slide counter + progress */}
      <div className="flex items-center gap-3">
        <span className="text-slate-500 text-sm font-bold tabular-nums">
          {String(current + 1).padStart(2, '0')}
          <span className="text-slate-300 font-normal mx-0.5">/</span>
          {String(total).padStart(2, '0')}
        </span>
        <div className="w-36 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #0c2461, #2563eb)' }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-1">
        <NavBtn onClick={onToggleOverview} title="Slaydlar ko'rinishi (G)">
          <Grid size={15} />
        </NavBtn>
        <div className="w-px h-4 bg-slate-200 mx-1.5" />
        <NavBtn onClick={onPrev} disabled={current === 0} title="Oldingi (←)">
          <ChevronLeft size={17} />
        </NavBtn>
        <NavBtn onClick={onNext} disabled={current === total - 1} title="Keyingi (→)">
          <ChevronRight size={17} />
        </NavBtn>
        <div className="w-px h-4 bg-slate-200 mx-1.5" />
        <NavBtn onClick={onToggleFullscreen} title="To'liq ekran (F)">
          {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
        </NavBtn>
      </div>

      {/* Hint */}
      <div className="text-xs text-slate-300 hidden md:block tracking-wide">
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
        w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150
        ${disabled
          ? 'text-slate-300 cursor-not-allowed'
          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800 active:scale-95'}
      `}
    >
      {children}
    </button>
  )
}
