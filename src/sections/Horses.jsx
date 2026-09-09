import { ArrowRight, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import { images } from '../data/turkeyData'
import './Horses.css'

const horseImages = [
  { title: 'Quiet Mane', label: 'Horse portrait / Central Anatolia', image: images.experiences.horse },
  { title: 'Valley Companions', label: 'Riders and horses / Cappadocia', image: images.experiences.girlsWithHorse },
  { title: 'White Horse', label: 'Still portrait / Anatolia', image: images.experiences.whiteHorse },
]

const horseVideos = [
  { title: 'Gentle Bond', label: 'Moving portrait / Cappadocia', image: images.experiences.horse, video: images.experiences.horseLove },
  { title: 'Rose Valley Trail', label: 'Trail ride / Göreme', image: images.experiences.horse, video: images.experiences.horseRide },
  { title: 'Open Country', label: 'Riding sequence / Anatolia', image: images.experiences.whiteHorse, video: images.experiences.ride },
]

export default function Horses() {
  return <section className="horses-section" id="horses">
    <div className="horses-section__intro">
      <Reveal><p className="eyebrow"><span /> Chapter 05 / Anatolia</p><h2>The land of<br /><em>beautiful horses.</em></h2></Reveal>
      <Reveal className="horses-section__lead"><p><MapPin size={14} /> Cappadocia, Central Anatolia</p><p>Long before the balloons rise, the valleys belong to the horses. Ride beneath the rose cliffs and follow the old paths through Turkey's open heart.</p><a className="horses-section__journey" href="#bosphorus">Continue the journey <ArrowRight size={15} /></a></Reveal>
    </div>
    <div className="horses-gallery"><p className="horses-gallery__label">Images</p>{horseImages.map((scene, index) => <Reveal className={`horse-frame horse-frame--${index + 1}`} key={scene.title}><img src={scene.image} alt={scene.title} loading="lazy" /><span className="horse-frame__shade" /><span className="horse-frame__caption"><small>{scene.label}</small><strong>{scene.title}</strong></span></Reveal>)}</div>
    <div className="horses-gallery horses-gallery--videos"><p className="horses-gallery__label">Videos</p>{horseVideos.map((scene, index) => <Reveal className={`horse-frame horse-frame--${index + 1}`} key={scene.title}><video src={scene.video} poster={scene.image} autoPlay muted loop playsInline aria-label={scene.title} /><span className="horse-frame__shade" /><span className="horse-frame__caption"><small>{scene.label}</small><strong>{scene.title}</strong></span></Reveal>)}</div>
  </section>
}