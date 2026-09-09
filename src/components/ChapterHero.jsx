import { ArrowDown } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'
import Reveal from './Reveal'
import { images } from '../data/turkeyData'
import './ChapterHero.css'

export default function ChapterHero() {
  const [videoReady, setVideoReady] = useState(false)
  return <section className="chapter-hero" id="top"><div className="chapter-hero__media"><div className="chapter-hero__image" style={{ backgroundImage: `url(${images.horizons.bosphorusNight})` }} /><video className={videoReady ? 'chapter-hero__video is-ready' : 'chapter-hero__video'} autoPlay muted loop playsInline onCanPlay={() => setVideoReady(true)}><source src={images.home.bosphorusVideo} type="video/mp4" /></video><div className="chapter-hero__overlay" /><div className="chapter-hero__particles" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} style={{ '--particle-index': index }} />)}</div></div><div className="chapter-hero__copy"><Reveal><p className="eyebrow"><span /> Discover the soul of Turkey</p></Reveal><Reveal delay={.1}><h1>Where history<br /><em>meets</em> the<br />twilight.</h1></Reveal><Reveal delay={.2}><p className="chapter-hero__description">Journey through ancient cities, timeless landmarks, breathtaking landscapes and unforgettable Turkish flavors.</p></Reveal><Reveal delay={.3}><div className="chapter-hero__actions"><Button href="#scenes">Explore Turkey</Button><Button href="#finale" variant="gold">Watch the journey</Button></div></Reveal></div><div className="chapter-hero__footer"><span>ISTANBUL<br /><small>41°00'N / 28°58'E</small></span><a href="#scenes">Scroll to discover <ArrowDown size={16} /></a></div></section>
}
