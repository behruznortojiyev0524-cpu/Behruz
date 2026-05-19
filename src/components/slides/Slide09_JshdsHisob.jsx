import SlideHeader from '../ui/SlideHeader.jsx'

const DAROMAD_TURLARI = [
  { tur: "Asosiy ish haqi",         soliqmi: "Ha",  izoh: "To'liq soliqqa tortiladi" },
  { tur: "Qo'shimcha ish haqi",      soliqmi: "Ha",  izoh: "Tungi, bayram, ortiqcha" },
  { tur: "Mukofot va premiya",        soliqmi: "Ha",  izoh: "Tarif razryadi bo'yicha" },
  { tur: "Kasallik varaqasi",         soliqmi: "Ha",  izoh: "To'lovning barcha turi" },
  { tur: "Ta'til puli",               soliqmi: "Ha",  izoh: "To'liq miqdoridan" },
  { tur: "Moddiy yordam",             soliqmi: "Qisman", izoh: "BHM×12 dan oshgan qismi" },
  { tur: "Xizmat safari kompensatsiyasi", soliqmi: "Yo'q", izoh: "Belgilangan me'yor doirasida" },
  { tur: "Pensiya",                   soliqmi: "Yo'q", izoh: "SK 369-modda asosida" },
]

const HISOB_MISOL = {
  oshHaqi: 3_500_000,
  tungiUstama: 350_000,
  modYordam: 500_000,
  chetirma: 1_200_000,   // EKIHM × 1 (taxminiy)
  bhm12: 4_944_000,       // moddiy yordam ozod miqdori (BHM×12)
}

export default function Slide09_JshdsHisob({ total }) {
  const modYordamSoliqBaza = Math.max(0, HISOB_MISOL.modYordam - HISOB_MISOL.bhm12)
  const jami = HISOB_MISOL.oshHaqi + HISOB_MISOL.tungiUstama + HISOB_MISOL.modYordam
  const soliqBaza = Math.max(0, HISOB_MISOL.oshHaqi + HISOB_MISOL.tungiUstama + modYordamSoliqBaza - HISOB_MISOL.chetirma)
  const jshds = Math.round(soliqBaza * 0.12)
  const qolganHaq = jami - jshds

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <SlideHeader number={9} total={total} title="JSHDS hisoblash tartibi" subtitle="Daromad turlari tasnifi va hisoblash mexanizmi — Bardanko'l YFK misolida" />

      <div className="flex-1 grid grid-cols-5 gap-5 px-10 py-4 overflow-hidden">
        {/* Daromad turlari */}
        <div className="col-span-2 flex flex-col">
          <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">Daromad turlarining soliqqa tortilishi</h3>
          <div className="flex flex-col gap-1.5 flex-1 overflow-auto thin-scroll">
            {DAROMAD_TURLARI.map((d, i) => (
              <div key={i} className="flex items-center gap-2 border-b border-white/5 pb-1.5 last:border-0">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 w-16 text-center
                  ${d.soliqmi === 'Ha' ? 'bg-red-500/15 text-red-400' : d.soliqmi === 'Qisman' ? 'bg-yellow-500/15 text-yellow-400' : 'bg-green-500/15 text-green-400'}`}>
                  {d.soliqmi}
                </span>
                <div>
                  <div className="text-xs font-semibold text-white">{d.tur}</div>
                  <div className="text-xs text-blue-200/50">{d.izoh}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formula + misol */}
        <div className="col-span-3 flex flex-col gap-4">
          {/* Formula */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <h3 className="text-xs font-bold text-blue-200/60 uppercase tracking-wider mb-3">Hisoblash formulasi</h3>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { label: "1. Jami daromad", formula: "Ish haqi + ustamalar + boshqa daromadlar", color: "text-white" },
                { label: "2. Ozod miqdorlar (−)", formula: "EKIHM×4 (chegirma) | Moddiy yordam (BHM×12 gacha)", color: "text-green-400" },
                { label: "3. Soliq bazasi", formula: "Jami daromad − Ozod miqdorlar", color: "text-gold-400" },
                { label: "4. JSHDS", formula: "Soliq bazasi × 12%", color: "text-blue-300" },
              ].map((f, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className={`text-xs font-bold w-5 mt-0.5 ${f.color}`}>{i+1}.</span>
                  <div>
                    <span className={`text-xs font-semibold ${f.color}`}>{f.label}: </span>
                    <span className="text-xs text-blue-200/70">{f.formula}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hisoblash misoli */}
          <div className="bg-gold-500/10 border border-gold-400/30 rounded-2xl p-4 flex flex-col flex-1">
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-3">Hisoblash misoli (oylik)</h3>
            <div className="flex flex-col gap-1.5 flex-1">
              {[
                { l: "Asosiy ish haqi",       v: "3 500 000 so'm", plus: true },
                { l: "Tungi ish ustamasi",    v: "350 000 so'm",   plus: true },
                { l: "Moddiy yordam",          v: "500 000 so'm",   plus: true },
                { l: "Chegirma (EKIHM×1)",    v: "− 1 200 000 so'm", minus: true },
                { l: "Mod.yordam ozod qismi", v: "− 500 000 so'm", minus: true, note: "BHM×12 = 4.9 mln → to'liq ozod" },
                { l: "Soliq bazasi",           v: `${soliqBaza.toLocaleString()} so'm`, gold: true },
                { l: "JSHDS (12%)",            v: `${jshds.toLocaleString()} so'm`, main: true },
                { l: "Xodim qo'liga",          v: `${qolganHaq.toLocaleString()} so'm`, green: true },
              ].map((r, i) => (
                <div key={i} className={`flex justify-between items-center text-xs py-1 ${r.main ? 'border-t border-gold-400/30 mt-1 pt-2' : ''}`}>
                  <span className="text-blue-200/70">{r.l}{r.note && <span className="text-blue-200/40 ml-1">({r.note})</span>}</span>
                  <span className={`font-bold ${r.gold ? 'text-gold-400' : r.main ? 'text-blue-300 text-sm' : r.green ? 'text-green-400' : r.minus ? 'text-red-400' : 'text-white'}`}>
                    {r.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
