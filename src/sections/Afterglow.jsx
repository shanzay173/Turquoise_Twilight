import { useEffect, useState } from 'react'
import { images } from '../data/turkeyData'
import './Afterglow.css'

export default function Afterglow() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const section = document.getElementById('finale')
		if (!section) return undefined
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setVisible(true)
		}, { threshold: .35 })
		observer.observe(section)
		const fallback = window.setTimeout(() => setVisible(true), 500)
		return () => { observer.disconnect(); window.clearTimeout(fallback) }
	}, [])

	return <section className={`afterglow-section ${visible ? 'afterglow-section--visible' : ''}`} id="finale" style={{ background: 'transparent' }}>
		<video className="afterglow-section__video" poster={images.ending.bosphorusSunset} autoPlay muted loop playsInline preload="auto" aria-hidden="true" style={{ zIndex: 0, display: 'block', visibility: 'visible', opacity: 1, filter: 'none', animation: 'none', transform: 'scale(1.02)' }}><source src={images.ending.endingVideo} type="video/mp4" /></video>
		<div className="afterglow-section__overlay" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(143,11,20,.24), rgba(2,9,11,.18) 40%, rgba(2,9,11,.56) 100%), linear-gradient(90deg, rgba(143,11,20,.28), transparent 52%, rgba(2,9,11,.24))' }} />
		<div className="afterglow-section__glow" style={{ zIndex: 2 }} />
		<div className="afterglow-section__content" style={{ zIndex: 3 }}>
			<p className="afterglow-section__eyebrow">THIS IS NOT GOODBYE.</p>
			<h2>THIS IS <em>TÜRKİYE.</em></h2>
			<p className="afterglow-section__description">A journey through history, culture, beauty and unforgettable moments.</p>
		</div>
		<p className="afterglow-section__footer" style={{ zIndex: 4 }}>WHERE EVERY JOURNEY BECOMES A MEMORY.</p>
		<div className="afterglow-section__blackout" aria-hidden="true" style={{ zIndex: 5, opacity: 0, animation: 'none' }} />
	</section>
}
