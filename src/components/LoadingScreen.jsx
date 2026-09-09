import { useEffect, useState } from 'react'
import { images } from '../data/turkeyData'
import './LoadingScreen.css'

const preloadSources = [images.horizons.bosphorusNight, images.horizons.cappadociaBalloons, images.heritage.mosque]

export default function LoadingScreen({ onReady }) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let loaded = 0
    let cancelled = false
    const finish = () => {
      loaded += 1
      if (!cancelled) setProgress(Math.round((loaded / preloadSources.length) * 100))
      if (loaded === preloadSources.length && !cancelled) {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.setTimeout(() => {
          if (reducedMotion) onReady()
          else {
            setExiting(true)
            window.setTimeout(onReady, 900)
          }
        }, reducedMotion ? 500 : 2800)
      }
    }
    preloadSources.forEach((source) => {
      const image = new Image()
      image.onload = finish
      image.onerror = finish
      image.src = source
    })
    return () => { cancelled = true }
  }, [onReady])

  return <div className={`loading-screen ${exiting ? 'loading-screen--exiting' : ''}`} role="status" aria-label="Entering Istanbul"><div className="loading-screen__scene" style={{ backgroundImage: `url(${images.horizons.bosphorusNight})` }} /><div className="loading-screen__veil" /><div className="loading-screen__inner"><p className="eyebrow"><span /> Istanbul at twilight</p><h1>Turkey <em>Twilight</em></h1><div className="loading-screen__track"><span style={{ transform: `scaleX(${progress / 100})` }} /></div><small>{progress === 100 ? 'Twilight begins' : `${progress}%`}</small></div></div>
}
