import Reveal from './Reveal'
import CinematicImage from './CinematicImage'
import './ChapterScene.css'

export default function ChapterScene({ id, number, title, text, image, video, reverse = false }) {
  return <section className={`chapter-scene ${reverse ? 'chapter-scene--reverse' : ''}`} id={id}><Reveal className="chapter-scene__copy"><p className="eyebrow"><span /> {number}</p><h2>{title}</h2><p>{text}</p></Reveal><Reveal className="chapter-scene__visual">{video ? <figure className="cinematic-image cinematic-video" style={{ clipPath: 'inset(0)', opacity: 1 }}><video src={video} poster={image} autoPlay muted loop playsInline preload="auto" style={{ opacity: 1, transform: 'none', filter: 'none' }} /></figure> : <CinematicImage key={image} src={image} alt={title} />}</Reveal></section>
}
