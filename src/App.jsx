import { useState, useEffect, useCallback } from 'react'
import Navigation from './components/Navigation.jsx'
import SlideOverview from './components/SlideOverview.jsx'

import Slide01_Title            from './components/slides/Slide01_Title.jsx'
import Slide02_Dolzarblik       from './components/slides/Slide02_Dolzarblik.jsx'
import Slide03_Maqsad           from './components/slides/Slide03_Maqsad.jsx'
import Slide04_ObektPredmet     from './components/slides/Slide04_ObektPredmet.jsx'
import Slide05_Korxona          from './components/slides/Slide05_Korxona.jsx'
import Slide06_Moliya           from './components/slides/Slide06_Moliya.jsx'
import Slide07_Huquq            from './components/slides/Slide07_Huquq.jsx'
import Slide08_Xorijiy          from './components/slides/Slide08_Xorijiy.jsx'
import Slide09_JshdsHisob       from './components/slides/Slide09_JshdsHisob.jsx'
import Slide10_Hisobot          from './components/slides/Slide10_Hisobot.jsx'
import Slide11_Daromadlar       from './components/slides/Slide11_Daromadlar.jsx'
import Slide12_Muammolar        from './components/slides/Slide12_Muammolar.jsx'
import Slide13_Takomillashtirish from './components/slides/Slide13_Takomillashtirish.jsx'
import Slide14_Xulosa           from './components/slides/Slide14_Xulosa.jsx'

const TOTAL = 14

// New order:
// 1-Title, 2-Dolzarblik, 3-Maqsad, 4-Obekt, 5-Korxona, 6-Moliya, 7-Huquq,
// 8-JshdsHisob (was 9), 9-Hisobot (was 10), 10-Daromadlar (was 11),
// 11-Xorijiy (was 8, now after Daromadlar), 12-Muammolar,
// 13-Xulosa (was 14), 14-Takomillashtirish (was 13)
const SLIDES = [
  Slide01_Title,
  Slide02_Dolzarblik,
  Slide03_Maqsad,
  Slide04_ObektPredmet,
  Slide05_Korxona,
  Slide06_Moliya,
  Slide07_Huquq,
  Slide09_JshdsHisob,
  Slide10_Hisobot,
  Slide11_Daromadlar,
  Slide08_Xorijiy,
  Slide12_Muammolar,
  Slide14_Xulosa,
  Slide13_Takomillashtirish,
]

export default function App() {
  const [current, setCurrent]           = useState(0)
  const [showOverview, setShowOverview] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [animKey, setAnimKey]           = useState(0)

  const goTo = useCallback((index) => {
    setCurrent(Math.max(0, Math.min(TOTAL - 1, index)))
    setAnimKey(k => k + 1)
  }, [])

  const prev = useCallback(() => goTo(current - 1), [current, goTo])
  const next = useCallback(() => goTo(current + 1), [current, goTo])

  useEffect(() => {
    const handler = (e) => {
      if (showOverview) {
        if (e.key === 'Escape' || e.key === 'g' || e.key === 'G') setShowOverview(false)
        return
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ')  { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')                     { e.preventDefault(); prev() }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen()
      if (e.key === 'g' || e.key === 'G') setShowOverview(v => !v)
      if (e.key === 'Home') goTo(0)
      if (e.key === 'End')  goTo(TOTAL - 1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current, showOverview, prev, next, goTo])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
      setIsFullscreen(true)
    } else {
      document.exitFullscreen().catch(() => {})
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  const SlideComponent = SLIDES[current]

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #b8c4d8 0%, #c8d2e8 50%, #b8c4d8 100%)' }}>
      <div className="flex-1 overflow-hidden relative p-3 pb-0">
        <div key={animKey} className="slide-enter w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <SlideComponent total={TOTAL} />
        </div>
      </div>

      <Navigation
        current={current}
        total={TOTAL}
        onPrev={prev}
        onNext={next}
        onToggleOverview={() => setShowOverview(v => !v)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {showOverview && (
        <SlideOverview
          current={current}
          total={TOTAL}
          onSelect={goTo}
          onClose={() => setShowOverview(false)}
        />
      )}
    </div>
  )
}
