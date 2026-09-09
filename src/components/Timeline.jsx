import Reveal from './Reveal'
import './Timeline.css'

const eras = [['330', 'Byzantine', 'Domes, mosaics and the first glow of the city.'], ['1453', 'Ottoman', 'Courtyards, calligraphy and imperial memory.'], ['Now', 'Twilight', 'Old stories moving through modern streets.']]

export default function Timeline() { return <div className="timeline">{eras.map(([date, title, copy], index) => <Reveal key={title} delay={index * .12}><article><small>{date}</small><h3>{title}</h3><p>{copy}</p></article></Reveal>)}</div> }
