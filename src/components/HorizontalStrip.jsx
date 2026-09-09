import CinematicImage from './CinematicImage'
import { images } from '../data/turkeyData'
import './HorizontalStrip.css'

const scenes = [['Istanbul', images.home.streets], ['Bosphorus', images.horizons.bosphorusNight], ['Cappadocia', images.horizons.cappadociaBalloons], ['Anatolia', images.home.heritage]]

export default function HorizontalStrip() { return <div className="horizontal-strip">{scenes.map(([title, image]) => <article key={title}><CinematicImage src={image} alt={title} /><h3>{title}</h3></article>)}</div> }
