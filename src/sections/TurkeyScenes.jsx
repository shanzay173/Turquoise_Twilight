import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import './TurkeyScenes.css'

const scenes = [
  { title: 'Taht Istanbul', place: 'Istanbul', image: '/images/TurkeyScenes/taht istanbul.jpeg' },
  { title: 'Bosphorus Night', place: 'Bosphorus', image: '/images/TurkeyScenes/bosphorous night.jpg' },
  { title: 'Ferry at Night', place: 'Istanbul Strait', image: '/images/TurkeyScenes/ferry night.jpg' },
  { title: 'Bosphorus Ferry', place: 'Bosphorus', image: '/images/TurkeyScenes/ferry.jpg' },
  { title: 'Galata at Night', place: 'Beyoglu', image: '/images/TurkeyScenes/galata night.jpg' },
  { title: 'Pamukkale Terraces', place: 'Pamukkale', image: '/images/TurkeyScenes/pammukkale.jpg' },
  { title: 'Turkey View', place: 'Turkish Coast', image: '/images/TurkeyScenes/turkey view.jpeg' },
  { title: 'Turkey Cruise', place: 'Aegean Coast', image: '/images/TurkeyScenes/cruise.jpeg' },
]

export default function TurkeyScenes() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const stageRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      stageRef.current?.style.setProperty('--pointer-x', '0')
      stageRef.current?.style.setProperty('--pointer-y', '0')
      return undefined
    }
    const timer = window.setInterval(() => {
      setDirection(1)
      setActive((current) => (current + 1) % scenes.length)
    }, 3500)
    return () => window.clearInterval(timer)
  }, [])

  const changeScene = (step) => {
    setDirection(step > 0 ? 1 : -1)
    setActive((current) => (current + step + scenes.length) % scenes.length)
  }

  const current = scenes[active]
  const handleStageMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const pointerX = ((event.clientX - bounds.left) / bounds.width - .5) * 2
    const pointerY = ((event.clientY - bounds.top) / bounds.height - .5) * 2
    stageRef.current?.style.setProperty('--pointer-x', pointerX.toFixed(3))
    stageRef.current?.style.setProperty('--pointer-y', pointerY.toFixed(3))
  }
  const resetStage = () => { stageRef.current?.style.setProperty('--pointer-x', '0'); stageRef.current?.style.setProperty('--pointer-y', '0') }

  return <section className="turkey-scenes" id="scenes">
    <div className="turkey-scenes__heading">
      <Reveal><p className="eyebrow"><span /> Moving archive / Turkey</p><h2>Scenes of<br /><em>Turkey.</em></h2></Reveal>
      <Reveal className="turkey-scenes__intro"><p>Eight moving views, layered like memories, from Istanbul nights to open Anatolian horizons.</p><div className="turkey-scenes__controls"><button type="button" onClick={() => changeScene(-1)} aria-label="Previous Turkey scene"><ArrowLeft size={17} /></button><button type="button" onClick={() => changeScene(1)} aria-label="Next Turkey scene"><ArrowRight size={17} /></button></div></Reveal>
    </div>
      <div ref={stageRef} className={`turkey-scenes__stage turkey-scenes__stage--${direction}`} onPointerMove={handleStageMove} onPointerLeave={resetStage} aria-live="polite">
      {scenes.map((scene, index) => {
        const offset = (index - active + scenes.length) % scenes.length
        const visible = offset < 4
        return <figure className={`turkey-scene-card turkey-scene-card--${offset} ${visible ? 'is-visible' : ''}`} key={scene.image}><img src={scene.image} alt={scene.title} loading={offset < 2 ? 'eager' : 'lazy'} /><figcaption><small>{scene.place}</small><strong>{scene.title}</strong></figcaption></figure>
      })}
      <div className="turkey-scenes__floor" />
    </div>
    <div className="turkey-scenes__status"><span>0{active + 1} / 0{scenes.length}</span><strong>{current.place}</strong><i /></div>
  </section>
}
