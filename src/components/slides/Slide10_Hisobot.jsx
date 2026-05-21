import SlideHeader from '../ui/SlideHeader.jsx'

const HISOBOT_TURLARI = [
  { shakl: "4-shakl",  nomi: "JSHDS bo'yicha hisob-kitob",  muddat: "Har oy, 15-sanagacha",  kanal: "my.soliq.uz / ERI" },
  { shakl: "2-JSHDS",  nomi: "Yillik to'lovlar ma'lumoti",   muddat: "Yillik, 1-aprelgacha",  kanal: "Shaxsiy kabinet" },
  { shakl: "Ijtimoiy", nomi: "Pensiya jam. badali hisobi",   muddat: "Har oy, 15-sanagacha",  kanal: "my.soliq.uz" },
]

const BOSQICH = [
  { n: "1", t: "Ish haqi hisoblash",   d: "Tarif razryad, ustamalar, ta'til, kasallik varaqasi" },
  { n: "2", t: "Chegirmalar qo'llash", d: "EKIHM×4, moddiy yordam ozod qismi (BHM×12)" },
  { n: "3", t: "JSHDS hisoblash",      d: "Soliq bazasi × 12% = JSHDS summasi" },
  { n: "4", t: "Ijtimoiy soliq",       d: "Ish haqi fondi × 25% (budjet muassasasi uchun)" },
  { n: "5", t: "Budjetga o'tkazish",   d: "Bank orqali, muddati: hisobot topshirilgan oy" },
  { n: "6", t: "Hisobot topshirish",   d: "4-shakl — oylik; 2-JSHDS — yillik" },
]

export default function Slide10_Hisobot({ total }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800">
      <SlideHeader number={9} total={total} title="Hisobot va nazorat tizimi"
        subtitle="JSHDS bo'yicha hisobot shakllari, muddatlari va soliq nazorati" />

      <div className="flex-1 grid grid-cols-2 gap-5 px-8 py-4 overflow-hidden bg-slate-50">
        {/* Left: process */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col flex-1 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">Soliq agentining jarayon tartibi</h3>
            <div className="flex flex-col gap-2 flex-1">
              {BOSQICH.map((b, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="flex flex-col items-center">
                    <span className="w-7 h-7 rounded-full text-gold-400 font-bold text-xs flex items-center justify-center flex-shrink-0"
                      style={{ background: '#0c2461', border: '1.5px solid rgba(245,200,66,0.3)' }}>{b.n}</span>
                    {i < BOSQICH.length - 1 && <div className="w-px flex-1 bg-slate-200 my-1" />}
                  </div>
                  <div className="pb-2">
                    <div className="text-sm font-semibold text-slate-800">{b.t}</div>
                    <div className="text-xs text-slate-500">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">Hisobot shakllari</h3>
            <div className="flex flex-col gap-2">
              {HISOBOT_TURLARI.map((h, i) => (
                <div key={i} className="flex gap-3 border-b border-slate-100 pb-2 last:border-0">
                  <span className="text-gold-400 text-xs font-bold rounded-lg px-2 py-1 flex-shrink-0 self-start"
                    style={{ background: '#0c2461', border: '1.5px solid rgba(245,200,66,0.3)' }}>{h.shakl}</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{h.nomi}</div>
                    <div className="flex gap-3 mt-0.5">
                      <span className="text-xs text-slate-400">{h.muddat}</span>
                      <span className="text-xs text-blue-600">▸ {h.kanal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex flex-col flex-1">
            <h3 className="text-xs font-black uppercase tracking-wider text-blue-700 mb-3">Raqamlashtirish — soliq kabineti</h3>
            <div className="flex flex-col gap-2.5">
              {[
                { icon: "🌐", t: "my.soliq.uz portali", d: "Hisobot topshirish, to'lov tarixi, qarzdorlik" },
                { icon: "🔐", t: "Elektron raqamli imzo (ERI)", d: "Hujjatlarning qog'oz bilan teng kuchi" },
                { icon: "📊", t: "1C:Buxgalteriya integratsiyasi", d: "Soliq hisoboti avtomatik generatsiya" },
              ].map((x, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <span className="text-lg flex-shrink-0">{x.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{x.t}</div>
                    <div className="text-xs text-slate-500">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-xs text-red-700">
            <span className="font-bold text-red-600">⚠ Muddati o'tkazilganda: </span>
            Kechiktirilgan har bir kun uchun peniya + hisobot topshirilmasa jarima — korxona moliyaviy holatiga salbiy ta'sir.
          </div>
        </div>
      </div>
    </div>
  )
}
