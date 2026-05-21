import SlideHeader from '../ui/SlideHeader.jsx'

const DAROMAD_TURLARI = [
  { tur: "Asosiy ish haqi",             soliqmi: "Ha",     izoh: "To'liq soliqqa tortiladi" },
  { tur: "Qo'shimcha ish haqi",          soliqmi: "Ha",     izoh: "Tungi, bayram, ortiqcha" },
  { tur: "Mukofot va premiya",            soliqmi: "Ha",     izoh: "Tarif razryadi bo'yicha" },
  { tur: "Kasallik varaqasi",             soliqmi: "Ha",     izoh: "To'lovning barcha turi" },
  { tur: "Ta'til puli",                   soliqmi: "Ha",     izoh: "To'liq miqdoridan" },
  { tur: "Moddiy yordam",                 soliqmi: "Qisman", izoh: "BHM×12 dan oshgan qismi" },
  { tur: "Xizmat safari kompensatsiyasi", soliqmi: "Yo'q",   izoh: "Belgilangan me'yor doirasida" },
  { tur: "Pensiya",                       soliqmi: "Yo'q",   izoh: "SK 369-modda asosida" },
]

const HISOB_MISOL = {
  oshHaqi:    3_500_000,
  tungiUstama: 350_000,
  modYordam:   500_000,
  chetirma:  1_200_000,
  bhm12:     4_944_000,
}

export default function Slide09_JshdsHisob({ total }) {
  const modYordamSoliqBaza = Math.max(0, HISOB_MISOL.modYordam - HISOB_MISOL.bhm12)
  const jami = HISOB_MISOL.oshHaqi + HISOB_MISOL.tungiUstama + HISOB_MISOL.modYordam
  const soliqBaza = Math.max(0, HISOB_MISOL.oshHaqi + HISOB_MISOL.tungiUstama + modYordamSoliqBaza - HISOB_MISOL.chetirma)
  const jshds = Math.round(soliqBaza * 0.12)
  const qolganHaq = jami - jshds

  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={8} total={total} title="JSHDS hisoblash tartibi"
        subtitle="Daromad turlari tasnifi va hisoblash mexanizmi — Bardanko'l YFK misolida" />

      <div className="flex-1 grid grid-cols-5 gap-5 px-8 py-4 overflow-hidden bg-slate-50">
        {/* Daromad turlari */}
        <div className="col-span-2 flex flex-col">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">Daromad turlarining soliqqa tortilishi</h3>
          <div className="flex flex-col gap-1.5 flex-1 overflow-auto thin-scroll">
            {DAROMAD_TURLARI.map((d, i) => (
              <div key={i} className="flex items-center gap-2 border-b border-slate-100 pb-1.5 last:border-0">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 w-16 text-center
                  ${d.soliqmi === 'Ha' ? 'bg-red-100 text-red-600' : d.soliqmi === 'Qisman' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                  {d.soliqmi}
                </span>
                <div>
                  <div className="text-xs font-semibold text-slate-800">{d.tur}</div>
                  <div className="text-xs text-slate-400">{d.izoh}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formula + misol */}
        <div className="col-span-3 flex flex-col gap-4">
          {/* Formula */}
          <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">Hisoblash formulasi</h3>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { label: "1. Jami daromad",   formula: "Ish haqi + ustamalar + boshqa daromadlar",       color: "text-slate-800" },
                { label: "2. Ozod miqdorlar", formula: "EKIHM×4 (chegirma) | Moddiy yordam (BHM×12 gacha)", color: "text-green-700" },
                { label: "3. Soliq bazasi",   formula: "Jami daromad − Ozod miqdorlar",                  color: "text-amber-700" },
                { label: "4. JSHDS",          formula: "Soliq bazasi × 12%",                             color: "text-blue-700" },
              ].map((f, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className={`text-xs font-bold w-5 mt-0.5 ${f.color}`}>{i+1}.</span>
                  <div>
                    <span className={`text-xs font-semibold ${f.color}`}>{f.label}: </span>
                    <span className="text-xs text-slate-500">{f.formula}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hisoblash misoli */}
          <div className="rounded-2xl border p-4 flex flex-col flex-1 shadow-sm"
            style={{ background: '#f8faff', borderColor: '#c7d7f5' }}>
            {/* Lavozim */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-black uppercase tracking-wider" style={{ color: '#0c2461' }}>
                Hisoblash misoli (oylik)
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full text-gold-400"
                style={{ background: '#0c2461' }}>
                Yo'l ta'mirlash bo'limi mexanik
              </span>
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              {[
                { l: "Asosiy ish haqi",       v: "3 500 000 so'm",   plus: true },
                { l: "Tungi ish ustamasi",     v: "350 000 so'm",     plus: true },
                { l: "Moddiy yordam",          v: "500 000 so'm",     plus: true },
                { l: "Chegirma (EKIHM×1)",     v: "− 1 200 000 so'm", minus: true },
                { l: "Mod.yordam ozod qismi",  v: "− 500 000 so'm",   minus: true, note: "BHM×12 = 4.9 mln → to'liq ozod" },
                { l: "Soliq bazasi",           v: `${soliqBaza.toLocaleString()} so'm`, gold: true },
                { l: "JSHDS (12%)",            v: `${jshds.toLocaleString()} so'm`,    main: true },
                { l: "Xodim qo'liga",          v: `${qolganHaq.toLocaleString()} so'm`, green: true },
              ].map((r, i) => (
                <div key={i} className={`flex justify-between items-center text-xs py-1 ${r.main ? 'border-t border-slate-300 mt-1 pt-2' : ''}`}>
                  <span className="text-slate-500">{r.l}{r.note && <span className="text-slate-400 ml-1">({r.note})</span>}</span>
                  <span className={`font-bold ${r.gold ? 'text-amber-700' : r.main ? 'text-blue-700 text-sm' : r.green ? 'text-green-700' : r.minus ? 'text-red-500' : 'text-slate-800'}`}>
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
