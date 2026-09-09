import { useEffect, useState } from 'react'
import ChapterScene from '../components/ChapterScene'
import SectionHeading from '../components/SectionHeading'
import TasteGallery from '../components/TasteGallery'
import { images } from '../data/turkeyData'
import './Rituals.css'

const tasteScenes = [images.taste.baklava, images.taste.cheesecake, images.taste.etliEkmek, images.taste.turkishDessert, images.taste.donerKebab, images.taste.turkishKebab, images.taste.lahmacun, images.taste.menemen, images.taste.simit, images.taste.turkishCoffee, images.taste.turkishChai]

export default function Rituals() {
	const [sceneIndex, setSceneIndex] = useState(0)
	const [slideDirection, setSlideDirection] = useState('right')
	useEffect(() => {
		const timer = window.setInterval(() => {
			setSlideDirection((direction) => direction === 'right' ? 'left' : 'right')
			setSceneIndex((index) => (index + 1) % tasteScenes.length)
		}, 3500)
		return () => window.clearInterval(timer)
	}, [])
	return <section className="rituals-section" id="taste"><SectionHeading number="03" eyebrow="Taste" copy="Tea, coffee, spice and culinary tradition gather around the same table in Turkey.">Taste the<br /><em>twilight.</em></SectionHeading><div className={`taste-scene-switch taste-scene-switch--${slideDirection}`}><ChapterScene id="rituals-scene" number="03 / TASTE" title={<>A table<br /><em>that takes its time.</em></>} text="From baklava and gozleme to Turkish coffee and tea, every bite carries the warmth of a Turkish evening." image={tasteScenes[sceneIndex]} reverse /></div><TasteGallery /></section>
}
