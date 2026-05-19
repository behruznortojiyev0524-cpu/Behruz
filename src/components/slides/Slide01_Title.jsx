import { META } from '../../data/index.js'

export default function Slide01_Title() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      {/* Background geometry */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-8 gap-6">
        {/* University badge */}
        <div className="text-xs font-semibold tracking-widest text-blue-300/70 uppercase border border-blue-400/20 rounded-full px-5 py-1.5 bg-white/5">
          O'ZBEKISTON RESPUBLIKASI — BITIRUV MALAKAVIY ISHI
        </div>

        {/* Gold accent bar */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-0.5 bg-gold-400" />
          <div className="w-2 h-2 rounded-full bg-gold-400" />
          <div className="w-12 h-0.5 bg-gold-400" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
          {META.title}
        </h1>

        <p className="text-base text-blue-200/80 font-medium max-w-xl">
          {META.subtitle}
        </p>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-white/10" />

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
          <InfoBox label="Tadqiqot ob'ekti" value="Bardanko'l yo'llardan foydalanish korxonasi" />
          <InfoBox label="Joylashuv" value="Toshkent viloyati, Yuqori Chirchiq tumani" />
          <InfoBox label="Yo'nalish" value={META.department} />
          <InfoBox label="Yil" value={META.year} />
        </div>
      </div>
    </div>
  )
}

function InfoBox({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-left">
      <div className="text-xs text-gold-400/80 font-semibold uppercase tracking-wider mb-1">{label}</div>
      <div className="text-sm text-white font-medium leading-snug">{value}</div>
    </div>
  )
}
