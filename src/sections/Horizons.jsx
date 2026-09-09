import { useState } from 'react'
import ChapterScene from '../components/ChapterScene'
import Reveal from '../components/Reveal'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { images } from '../data/turkeyData'
import './Horizons.css'

const destinationVideos = [
	['Turkey', 'A cinematic first glimpse of Turkey, where evening light gathers over a country of layered stories.', 'Turkey', images.destinations.turkeyVideo],
	['Istiklal', 'A red tram cuts through the night as the city moves between cafés, music and memory.', 'Istiklal Avenue, Istanbul', images.destinations.tramVideo],
	['Balat', 'Balat lanes glow with old facades, late conversations and the soft pulse of the Golden Horn.', 'Balat, Istanbul', images.destinations.balatVideo],
	['Izmir', 'The Aegean breeze moves through Izmir, carrying harbor light and the easy rhythm of the coast.', 'Izmir, Aegean Coast', images.destinations.izmirVideo],
	['Cappadocia', 'Carved valleys and open skies turn Cappadocia into a landscape made for slow looking.', 'Cappadocia, Central Anatolia', images.destinations.capadociaVideo],
	['Mosque', 'Domes, minarets and evening prayer shape the quiet architectural soul of Turkey after dark.', 'Historic Mosque', images.destinations.mosqueVideo],
]

export default function Horizons() {
	const [activeDestination, setActiveDestination] = useState(0)
	const [direction, setDirection] = useState('next')
	const [videoProgress, setVideoProgress] = useState(0)
	const [name, description, location, video] = destinationVideos[activeDestination]
	const changeDestination = (step) => {
		setDirection(step > 0 ? 'next' : 'previous')
		setVideoProgress(0)
		setActiveDestination((current) => (current + step + destinationVideos.length) % destinationVideos.length)
	}

	return <>
		<ChapterScene id="horizons" number="01 / HORIZONS" title={<>Where every<br /><em>horizon</em> begins.</>} text="Istanbul stands between Europe and Asia, where two continents meet in one unforgettable night." image={images.horizons.istanbulSkyline} video={images.horizons.istanbulView} />
		<section className="destinations" aria-labelledby="destinations-title">
			<Reveal className="destinations__intro"><p className="eyebrow"><span /> Destinations in motion</p><h2 id="destinations-title">Let the city<br /><em>move.</em></h2><p>Watch Istanbul unfold in moving pictures. When one destination scene ends, the next one begins.</p></Reveal>
			<div className={`destination-video destination-video--${direction}`}>
				<div className="destination-video__frame"><video key={video} src={video} autoPlay muted playsInline onEnded={() => changeDestination(1)} onTimeUpdate={(event) => setVideoProgress(event.currentTarget.duration ? (event.currentTarget.currentTime / event.currentTarget.duration) * 100 : 0)} aria-label={name} /><span className="destination-video__vignette" /><span className="destination-video__grain" /></div>
				<div className="destination-video__details"><p className="destination-video__chapter">A moving portrait of Turkey</p><p className="destination-video__count">0{activeDestination + 1} / 0{destinationVideos.length}</p><p className="destination-video__location"><MapPin size={13} /> {location}</p><h3>{name}</h3><p>{description}</p><div className="destination-video__controls"><button type="button" onClick={() => changeDestination(-1)} aria-label="Previous destination"><ArrowLeft size={18} /></button><button type="button" onClick={() => changeDestination(1)} aria-label="Next destination"><ArrowRight size={18} /></button></div><div className="destination-video__progress" aria-hidden="true"><span style={{ width: `${videoProgress}%` }} /></div></div>
			</div>
		</section>
	</>
}
