import { META } from '../../data/index.js'

export default function Slide01_Title() {
  return (
    <div className="w-full h-full flex relative overflow-hidden bg-white">
      {/* Left dark panel */}
      <div className="w-2.5 h-full flex-shrink-0" style={{ background: 'linear-gradient(180deg, #0c2461 0%, #1a3a7e 100%)' }} />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-16 py-10 relative">
        {/* Top right decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #0c2461, transparent)' }} />
        <div className="absolute top-0 right-0 left-0 h-1"
          style={{ background: 'linear-gradient(90deg, #f5c842 0%, #f5c842 30%, transparent 100%)' }} />

        {/* Badge */}
        <div className="inline-flex items-center self-start mb-8">
          <span className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border"
            style={{ color: '#1a3a7e', borderColor: '#1a3a7e40', background: '#f0f4ff' }}>
            O'ZBEKISTON RESPUBLIKASI — BITIRUV MALAKAVIY ISHI
          </span>
        </div>

        {/* Gold divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-0.5 bg-gold-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
          <div className="w-8 h-0.5 bg-gold-500/40" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black leading-tight tracking-tight mb-4" style={{ color: '#0c2461', maxWidth: '720px' }}>
          {META.title}
        </h1>

        <p className="text-base font-medium text-slate-500 mb-8 max-w-xl leading-relaxed">
          {META.subtitle}
        </p>

        {/* Separator */}
        <div className="w-20 h-px bg-slate-200 mb-7" />

        {/* Info boxes */}
        <div className="grid grid-cols-2 gap-3 max-w-2xl">
          <InfoBox label="O'rganish ob'ekti" value="Bardanko'l yo'llardan foydalanish korxonasi" />
          <InfoBox label="Joylashuv" value="Toshkent viloyati, Yuqori Chirchiq tumani" />
          <InfoBox label="Yo'nalish" value={META.department} />
          <InfoBox label="Yil" value={META.year} />
        </div>
      </div>

      {/* Right decorative column */}
      <div className="w-48 flex-shrink-0 flex flex-col justify-center items-center gap-4 px-4 border-l border-slate-100">
        <div className="w-full text-center">
          <div className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-semibold">Taqdimot</div>
          <div className="text-4xl font-black text-slate-100">2025</div>
        </div>
        <div className="w-16 h-0.5 bg-slate-200" />
        <div className="text-center">
          <div className="text-xs text-slate-400 font-medium leading-relaxed">Moliya va<br/>Buxgalteriya hisobi</div>
        </div>
        <div className="w-16 h-0.5 bg-slate-200" />
        <div className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: '#0c2461' }}>
          <span className="text-gold-400 font-black text-sm">BM</span>
        </div>
      </div>
    </div>
  )
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-xl px-4 py-3 border text-left"
      style={{ background: '#f8faff', borderColor: '#e0e9ff' }}>
      <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#1a3a7e' }}>{label}</div>
      <div className="text-sm font-semibold text-slate-700 leading-snug">{value}</div>
    </div>
  )
}
