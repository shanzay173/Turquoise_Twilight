import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { images } from '../data/turkeyData'
import './Echoes.css'

const heritageStories = [
	{ title: 'Ortaköy Mosque', period: '1854 / Istanbul', label: 'Ortaköy, Istanbul', image: images.heritage.mosque, description: 'A waterside Ottoman mosque whose pale stone facade glows above the Bosphorus after dark.' },
	{ title: 'Spice Bazaar', period: '1960 / Istanbul', label: 'Eminönü', image: images.heritage.grandBazaar, description: 'Lanterns, spice, brass and layered aromas make this historic market feel alive after dark.' },
	{ title: 'Bursa', period: 'Ottoman heritage', label: 'Bursa, Marmara', image: images.heritage.ottomanCourtyards, description: 'The first Ottoman capital carries tiled courtyards, old baths and a slower architectural rhythm.' },
	{ title: 'Balat Houses', period: 'Historic Istanbul', label: 'Balat', image: images.heritage.balatHouses, description: 'Colorful facades and sloping lanes preserve the intimate character of Istanbul neighbourhood life.' },
	{ title: 'Cappadocia', period: 'Ancient Anatolia', label: 'Göreme', image: images.heritage.cappadociaCave, description: 'Stone valleys and carved sanctuaries carry the story beyond Istanbul into the quiet heart of Anatolia.' },
	{ title: 'Cave Valleys', period: 'Ancient Anatolia', label: 'Cappadocia', image: images.heritage.cave, description: 'Soft volcanic rock becomes a living archive of homes, chapels and forgotten passageways.' },
]

export default function Echoes() {
	const [activeStory, setActiveStory] = useState(0)
	const [modalStory, setModalStory] = useState(null)
	const story = heritageStories[activeStory]

	useEffect(() => {
		if (!modalStory) return undefined
		const closeOnKey = (event) => { if (event.key === 'Escape') setModalStory(null) }
		document.addEventListener('keydown', closeOnKey)
		document.body.style.overflow = 'hidden'
		return () => { document.removeEventListener('keydown', closeOnKey); document.body.style.overflow = '' }
	}, [modalStory])

	const changeStory = (direction) => setActiveStory((current) => (current + direction + heritageStories.length) % heritageStories.length)

	useEffect(() => {
		if (modalStory) return undefined
		const timer = window.setInterval(() => changeStory(1), 3000)
		return () => window.clearInterval(timer)
	}, [modalStory])

	return <section className="echoes-section" id="heritage">
		<div className="heritage-hero" style={{ backgroundImage: `url(${images.heritage.mosque})` }}>
			<video className="heritage-hero__video" src="/images/heritage/blue mosque video.mp4" poster={images.heritage.mosque} autoPlay muted loop playsInline />
			<div className="heritage-hero__overlay" />
			<Reveal className="heritage-hero__copy"><p className="eyebrow"><span /> Chapter 03 / Heritage</p><h2>Where history<br /><em>still breathes.</em></h2><p>Walk through the imperial layers of Turkey, from Byzantine domes to Ottoman courtyards and the markets that never truly sleep.</p><a className="tw-button tw-button--red" href="#heritage-gallery">Explore heritage <ArrowUpRight size={15} /></a></Reveal>
		</div>

		<SectionHeading number="03" eyebrow="Heritage" copy="A living archive of empires, rituals and quiet architectural details. Choose a place and stay with it for a moment.">The stones<br />still <em>remember.</em></SectionHeading>

		<div className="heritage-story">
			<div className="heritage-story__image"><img className="heritage-story__photo" key={story.image} src={story.image} alt={story.title} /><span /></div>
			<Reveal className="heritage-story__copy"><p className="eyebrow"><span /> {story.label}</p><p className="heritage-story__count">0{activeStory + 1} / 0{heritageStories.length}</p><h3>{story.title}</h3><p className="heritage-story__period">{story.period}</p><p>{story.description}</p><button className="heritage-view" type="button" onClick={() => setModalStory(story)}>View location <ArrowUpRight size={15} /></button><div className="heritage-story__controls"><button type="button" aria-label="Previous heritage location" onClick={() => changeStory(-1)}><ArrowLeft size={18} /></button><button type="button" aria-label="Next heritage location" onClick={() => changeStory(1)}><ArrowRight size={18} /></button></div></Reveal>
		</div>

		<div className="heritage-gallery" id="heritage-gallery"><div className="heritage-gallery__heading"><p className="eyebrow"><span /> Architecture after dark</p><p>Five views into a country built in layers.</p></div><div className="heritage-gallery__strip">{heritageStories.slice(0, 5).map((item) => <button type="button" className="heritage-gallery__card" key={item.title} onClick={() => setModalStory(item)}><img src={item.image} alt={item.title} loading="lazy" /><span className="heritage-gallery__shade" /><span className="heritage-gallery__caption"><small>{item.period}</small><strong>{item.title}</strong><ArrowUpRight size={18} /></span></button>)}</div></div>

		<div className="heritage-closing"><p className="eyebrow"><span /> The chapter closes</p><h3>History is not behind glass.<br /><em>It walks beside you.</em></h3><a className="tw-button tw-button--gold" href="#taste">Continue to Taste <ArrowRight size={15} /></a></div>

		{modalStory && <div className="heritage-modal" role="dialog" aria-modal="true" aria-label={modalStory.title} onClick={() => setModalStory(null)}><div className="heritage-modal__panel" onClick={(event) => event.stopPropagation()}><button className="heritage-modal__close" type="button" aria-label="Close image preview" onClick={() => setModalStory(null)}><X size={22} /></button><img src={modalStory.image} alt={modalStory.title} /><div><p className="eyebrow"><span /> {modalStory.label}</p><h3>{modalStory.title}</h3><p>{modalStory.description}</p></div></div></div>}
	</section>
}
