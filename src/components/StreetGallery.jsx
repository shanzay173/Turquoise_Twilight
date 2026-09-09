import CinematicImage from './CinematicImage'
import { X, ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { images } from '../data/turkeyData'
import './StreetGallery.css'

const streets = [
	['Galata Alley', images.streets.galataVideo, images.streets.galataAlley],
	['Balat', images.streets.balatVideo, images.streets.grandBazaarLanes],
	['Istiklal Tram', images.streets.tramVideo, images.streets.tramWayIstiklal],
]

export default function StreetGallery() {
	const [selected, setSelected] = useState(null)
	useEffect(() => { const onKey = (event) => event.key === 'Escape' && setSelected(null); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [])
	return <><div className="street-gallery">{streets.map(([title, media, poster]) => <figure key={title} onClick={() => setSelected({ title, media, poster })}>{media.endsWith('.mp4') ? <video src={media} poster={poster} autoPlay muted loop playsInline /> : <CinematicImage src={media} alt={title} />}<figcaption>{title}</figcaption></figure>)}</div>{selected && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}><button type="button" className="gallery-lightbox__back" onClick={() => setSelected(null)}><ArrowLeft size={16} /> Back</button><button type="button" className="gallery-lightbox__close" aria-label="Close image preview" onClick={() => setSelected(null)}><X /></button>{selected.media.endsWith('.mp4') ? <video src={selected.media} poster={selected.poster} autoPlay muted loop playsInline onClick={(event) => event.stopPropagation()} /> : <img src={selected.media} alt={selected.title} onClick={(event) => event.stopPropagation()} />}<p>{selected.title}</p></div>}</>
}
