import Reveal from './Reveal'
import './SectionHeading.css'

export default function SectionHeading({ number, eyebrow, children, copy }) {
  return <Reveal className="section-heading"><p className="eyebrow"><span /> {number} / {eyebrow}</p><h2>{children}</h2>{copy && <p>{copy}</p>}</Reveal>
}
